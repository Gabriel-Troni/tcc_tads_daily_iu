import {useState, useCallback} from 'react';
import {Question} from '../../../types/question';
import {useForm} from 'react-hook-form';
import {ICIQAnswers, iciqSchema} from './schema/questionnaire';
import {zodResolver} from '@hookform/resolvers/zod';
import {QuestionProps} from './components/QuestionSection/QuestionSection';
import {useNavigation} from '@react-navigation/native';
import {NavigationStackProp} from '../../../navigation/routes';

const mockQuestions: Question[] = [
  {
    id: 'birthdate',
    text: 'Qual sua data de nascimento?',
    type: 'date',
    required: true,
    placeholder: 'Dia / Mês / Ano',
  },
  {
    id: 'gender',
    text: 'Sexo',
    type: 'radio',
    required: true,
    options: [
      {label: 'Masculino', value: 'M'},
      {label: 'Feminino', value: 'F'},
    ],
  },
  {
    id: 'q3_frequency',
    text: 'Com que frequência você perde urina?',
    type: 'radio',
    required: true,
    options: [
      {label: 'Nunca', value: 'Nunca'},
      {
        label: 'Uma vez por semana ou menos',
        value: 'Uma vez por semana ou menos',
      },
      {
        label: 'Duas ou três vezes por semana',
        value: 'Duas ou três vezes por semana',
      },
      {label: 'Uma vez ao dia', value: 'Uma vez ao dia'},
      {label: 'Diversas vezes ao dia', value: 'Diversas vezes ao dia'},
      {label: 'O tempo todo', value: 'O tempo todo'},
    ],
  },
  {
    id: 'q4_amount',
    text: 'Gostaríamos de saber a quantidade de urina que você pensa que perde',
    type: 'radio',
    required: true,
    options: [
      {label: 'Nenhuma', value: 0},
      {label: 'Uma pequena quantidade', value: 2},
      {label: 'Uma moderada quantidade', value: 4},
      {label: 'Uma grande quantidade', value: 6},
    ],
  },
  {
    id: 'q5_interference',
    text: 'Em geral quanto que perder urina interfere em sua vida diária? (0 = não interfere, 10 = interfere muito)',
    type: 'slider',
    required: true,
    min: 0,
    max: 10,
    step: 1,
  },
  {
    id: 'q6_when',
    text: 'Quando você perde urina? (assinale todas as alternativas que se aplicam a você)',
    type: 'checkbox',
    required: true,
    options: [
      {label: 'Nunca', value: 'Nunca'},
      {
        label: 'Antes de chegar ao banheiro',
        value: 'Antes de chegar ao banheiro',
      },
      {
        label: 'Perco antes de terminar de urinar e/ou após urinar',
        value: 'Perco antes de terminar de urinar e/ou após urinar',
      },
      {
        label: 'Perco quando estou dormindo',
        value: 'Perco quando estou dormindo',
      },
      {
        label: 'Perco quando estou realizando atividades físicas',
        value: 'Perco quando estou realizando atividades físicas',
      },
      {
        label: 'Perco quando terminei de urinar e estou vestindo',
        value: 'Perco quando terminei de urinar e estou vestindo',
      },
      {label: 'Perco o tempo todo', value: 'Perco o tempo todo'},
    ],
  },
];

const useOnboardingQuestion = () => {
  const [questionList] = useState<Question[]>(mockQuestions);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {navigate} = useNavigation<NavigationStackProp>();

  const {
    handleSubmit,
    control,
    getFieldState,
    getValues,
    trigger,
    formState: {errors, isValid},
  } = useForm<ICIQAnswers>({
    resolver: zodResolver(iciqSchema),
    mode: 'onChange',
    defaultValues: {
      birthdate: new Date().toISOString(),
      gender: '',
      q3_frequency: '',
      q4_amount: 0,
      q5_interference: 0,
      q6_when: [],
    },
  });

  const onContinue = useCallback(
    async (field: keyof ICIQAnswers) => {
      const isFieldValid = await trigger(field);

      if (isFieldValid) {
        setCurrentQuestionIndex(prevIndex => {
          const nextIndex = prevIndex + 1;
          if (nextIndex < questionList.length) {
            return nextIndex;
          } else {
            onSubmitAnswer();
            return prevIndex;
          }
        });
      } else {
        const {error} = getFieldState(field);
        setErrorMessage(error?.message ?? 'Campo inválido');
        setIsToastOpen(true);
      }
    },
    [getValues, trigger, questionList.length],
  );

  const onCloseToast = () => {
    setIsToastOpen(false);
    setErrorMessage('');
  };

  const onSubmitAnswer = useCallback(() => {
    console.log(getValues());
    handleSubmit(() => {
      console.log({
        ...getValues(),
        isValid,
      });
    });
  }, [getValues]);

  const navigateBack = () => {
    if (currentQuestionIndex === 0) {
      navigate('OnboardingHome');
    } else {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const questionInputs: QuestionProps[] = questionList.map(question => ({
    question,
    control: control,
    onContinue: () => onContinue(question.id as keyof ICIQAnswers),
    selectedValue: getValues(question.id as keyof ICIQAnswers),
  }));

  return {
    currentQuestion: questionList[currentQuestionIndex],
    isLoading,
    isValid,
    onContinue,
    handleSubmit,
    control,
    onSubmitAnswer,
    errors,
    setIsLoading,
    questionInputs,
    currentQuestionIndex,
    isToastOpen,
    errorMessage,
    onCloseToast,
    navigateBack,
  };
};

export {useOnboardingQuestion};
