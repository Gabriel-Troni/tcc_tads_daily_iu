import React from 'react';
import {Question} from '../../../../../types/question';
import * as S from './styles';
import Label from '../../../../../components/Label/Label';
import theme from '../../../../../theme/theme';
import DatePicker from '../../../../../components/DatePicker/DatePicker';
import RadioButtonGroup from '../../../../../components/RadioButtonGroup/RadioButtonGroup';
import SliderQuestionnaire from '../../../../../components/SliderQuestionnaire/SliderQuestionnaire';
import Button from '../../../../../components/Button/Button';

interface QuestionProps {
  question: Question;
  onChange: (value: string | number | boolean | string[]) => void;
  selectedValue?: string | number | boolean | string[];
}

const QuestionSection: React.FC<QuestionProps> = ({
  question,
  onChange,
  selectedValue,
}) => {
  const {text, type} = question;

  return (
    <S.Wrapper>
      <Label
        typography={theme.typography.title.h3}
        color={theme.colors.gray_08}
        text={text}
      />
      {/*    <DatePicker
        value={new Date()}
        onChange={() => {}}
        label="Selecione uma data"
        onCancel={() => {}}
        modal={false}
        minimumDate={new Date('2020-01-01')}
        maximumDate={new Date('2026-01-01')}
        mode="date"
      />
      <RadioButtonGroup options={} value={} onChange={} />
      <SliderQuestionnaire value={} onValueChange={} /> */}
      {type === 'date' && (
        <DatePicker
          value={new Date()}
          onChange={(date: Date) => onChange(date.toISOString())}
          label="Selecione uma data"
          onCancel={() => {}}
          modal={true}
          minimumDate={new Date('2020-01-01')}
          maximumDate={new Date('2026-01-01')}
          mode="date"
        />
      )}
      {type === 'radio' && (
        <RadioButtonGroup
          options={question.options || []}
          value={selectedValue as string}
          onChange={(value: string) => onChange(value)}
        />
      )}
      {type === 'slider' && (
        <SliderQuestionnaire
          value={selectedValue as number}
          onValueChange={(value: number) => onChange(value)}
          min={question.min || 0}
          max={question.max}
          step={question.step}
        />
      )}
      <S.ButtonContainer>
        <Button text={'Continuar'} onPress={() => {}} />
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default QuestionSection;
