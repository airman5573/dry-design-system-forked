import { Colors, colors } from 'styles/theme';
import { Button, Text } from './style';

interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'contained' | 'outlined' | 'text';
  fontSize?: number;
  padding?: string;
  isDisabled?: boolean;
  children: string;
  onClick?(): void;
  onSubmit?(): void;
}

type ButtonVariant = 'contained' | 'outlined' | 'text';

type ButtonStyleAttribute = 'text' | 'back' | 'line';

export type ButtonState = 'default' | 'disabled';

type ButtonStylesConfig = {
  [key in ButtonVariant]: ButtonStylesAttributeConfig;
};

export type ButtonStylesAttributeConfig = {
  [key in ButtonStyleAttribute]: {
    [key2 in ButtonState]: Colors | 'none';
  };
};

export const buttonColorSet: ButtonStylesConfig = {
  contained: {
    text: {
      default: 'WHITE',
      disabled: 'WHITE'
    },
    back: {
      default: 'PRIMARY',
      disabled: 'GRAY_200'
    },
    line: {
      default: 'none',
      disabled: 'none'
    }
  },
  outlined: {
    text: {
      default: 'PRIMARY',
      disabled: 'GRAY_200'
    },
    back: {
      default: 'WHITE',
      disabled: 'WHITE'
    },
    line: {
      default: 'PRIMARY',
      disabled: 'GRAY_200'
    }
  },
  text: {
    text: {
      default: 'PRIMARY',
      disabled: 'GRAY_200'
    },
    back: {
      default: 'none',
      disabled: 'none'
    },
    line: {
      default: 'none',
      disabled: 'none'
    }
  }
};

export const TextButton = ({
  padding = '8px 28px 8px 28px',
  fontSize = 16,
  variant,
  isDisabled = false,
  children,
  ...props
}: TextButtonProps) => {
  return (
    <Button
      buttonStyles={buttonColorSet[variant]}
      padding={padding}
      isDisabled={isDisabled ? 'disabled' : 'default'}
      {...props}
    >
      <Text
        textStyles={buttonColorSet[variant]}
        fontSize={fontSize}
        isDisabled={isDisabled ? 'disabled' : 'default'}
      >
        {children}
      </Text>
    </Button>
  );
};
