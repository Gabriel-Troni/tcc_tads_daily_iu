import styled from 'styled-components/native';
import {ButtonProps} from './Button';
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from '../../utils/scales';

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({theme, type}) =>
    type === 'PRIMARY'
      ? theme.colors.purple_04
      : type === 'SECONDARY'
      ? theme.colors.purple_02
      : theme.colors.white};
  padding: ${({size}) =>
    size === 'SMALL'
      ? `${verticalScale(8)}px ${horizontalScale(12)}px`
      : size === 'MEDIUM'
      ? `${verticalScale(12)}px ${horizontalScale(16)}px`
      : `${verticalScale(16)}px ${horizontalScale(32)}px`};
  border-radius: ${moderateScale(12)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
