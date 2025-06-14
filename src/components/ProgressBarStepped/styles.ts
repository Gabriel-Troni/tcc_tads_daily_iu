import styled from 'styled-components/native';

interface StepProps {
  isActive: boolean;
  isCompleted: boolean;
}

export const ProgressBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Step = styled.View<StepProps>`
  flex: 1;
  height: 8px;
  border-radius: 8px;
  margin: 0 2px;
  background-color: ${({isActive, isCompleted, theme}) =>
    isCompleted
      ? theme.colors.purple_03
      : isActive
      ? theme.colors.purple_04
      : theme.colors.gray_04};
`;
