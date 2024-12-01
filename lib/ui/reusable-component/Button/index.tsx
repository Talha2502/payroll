import React from 'react';
import { 
  Button as ChakraButton, 
} from '@chakra-ui/react';
import { IButtonProps } from '../../../utils/interfaces';

const Button: React.FC<IButtonProps> = ({
  children,
  variant = 'solid',
  colorScheme = 'blue',
  ...rest
}) => {
  return (
    <ChakraButton
      variant={variant}
      colorScheme={colorScheme}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;