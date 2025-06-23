import React from 'react';
import * as S from './styles';
import Label from '../Label/Label';
import theme from '../../theme/theme';

type RadioButtonGroupProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <S.Container>
      {options.map(option => {
        const selected = value === option;
        return (
          <S.OptionButton
            key={option}
            onPress={() => onChange(option)}
            selected={selected}
            accessibilityRole="radio"
            accessibilityState={{selected}}>
            <Label
              text={option}
              typography={theme.typography.paragraph.b5}
              color={selected ? theme.colors.purple_04 : theme.colors.gray_08}
              textAlign="center"
            />
          </S.OptionButton>
        );
      })}
    </S.Container>
  );
};

export default RadioButtonGroup;
