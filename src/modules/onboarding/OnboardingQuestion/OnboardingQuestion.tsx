import React from 'react';
import ScreenContainer from '../../../components/ScreenContainer/ScreenContainer';
import * as S from './styles';
import StepLabel from './components/StepLabel/StepLabel';
import QuestionSection from './components/QuestionSection/QuestionSection';
import ProgressBarStepped from '../../../components/ProgressBarStepped/ProgressBarStepped';

const OnboardingQuestion = () => {
  return (
    <ScreenContainer scrollable>
      <S.Wrapper>
        <ProgressBarStepped steps={8} currentStep={2} />
        <StepLabel step={1} totalSteps={3} />
        <QuestionSection
          question={{
            text: 'Qual é a sua idade?',
            id: 'age',
            type: 'date',
          }}
          onChange={() => {}}
        />
      </S.Wrapper>
    </ScreenContainer>
  );
};

export default OnboardingQuestion;
