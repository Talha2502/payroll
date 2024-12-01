import React from 'react';
import { 
  Input as ChakraInput, 
  InputProps 
} from '@chakra-ui/react';

const Input: React.FC<any> = ({
  label,
  variant = 'outline',
  ...rest
}) => {
  return (
    <div>
      {label && (
        <label>{label}</label>
      )}
      <ChakraInput 
        variant={variant}
        {...rest}
      />
    </div>
  );
};

export default Input;