import { Button } from 'react-native-paper';
import { ButtonVariantTypes, theme } from '@/theme/theme';
import { H5 } from '@/theme/fontsTheme';

interface IButtonProps {
  buttonText: string;
  type: ButtonVariantTypes;
  onPress: () => void;
}

const DinamicButton = ({ buttonText, type, onPress }: IButtonProps) => {
  const buttonType = theme.buttonVariants[type];
  return (
    <Button
      {...buttonType}
      textColor={buttonType.textColor}
      style={{ borderRadius: '8px' }}
      onPress={onPress}
    >
      <H5
        style={{ textTransform: 'capitalize' }}
        colorKey={buttonType.textColor}
      >
        {buttonText}
      </H5>
    </Button>
  );
};

export default DinamicButton;
