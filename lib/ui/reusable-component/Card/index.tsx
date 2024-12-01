import React from 'react';
import { 
  Box, 
  Heading, 
} from '@chakra-ui/react';
import { ICardProps } from '../../../utils/interfaces';

const Card: React.FC<ICardProps> = ({
  title,
  children,
  width = 'full',
  padding = '6',
  ...rest
}) => {
  return (
    <Box 
      width={width}
      padding={padding}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      {...rest}
    >
      {title && (
        <Heading 
          mb={4} 
          textAlign="center" 
          size="md"
        >
          {title}
        </Heading>
      )}
      {children}
    </Box>
  );
};

export default Card;