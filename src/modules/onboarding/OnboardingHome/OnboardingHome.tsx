import * as S from './style';

import ScreenContainer from '../../../components/ScreenContainer/ScreenContainer';
import Label from '../../../components/Label/Label';
import theme from '../../../theme/theme';
import Button from '../../../components/Button/Button';

const OnboardingHome = () => {
  return (
    <ScreenContainer>
      <S.Wrapper>
        <Label
          typography={theme.typography.title.h3}
          text={'Seja bem-vindo(a) ao DailyIU! Seu app para acompanhamento de '}
          color={theme.colors.gray_08}
          numberOfLines={5}
          textAlign="justify"
          textBreakStrategy="balanced">
          <Label
            typography={theme.typography.title.b3}
            text={'Incontinência Urinária! '}
            color={theme.colors.gray_08}>
            <Label
              typography={theme.typography.title.h3}
              text={'Vamos começar?'}
              color={theme.colors.gray_08}
            />
          </Label>
        </Label>
        <S.Container>
          <S.Illustration />
          <S.ButtonContainer>
            <Button text={'Continuar'} onPress={() => {}} />
          </S.ButtonContainer>
        </S.Container>
      </S.Wrapper>
    </ScreenContainer>
  );
};

export default OnboardingHome;
