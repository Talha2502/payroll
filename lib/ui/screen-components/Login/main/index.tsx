import React, { useState } from 'react';
import { 
  VStack, 
  Heading, 
  Container,
} from '@chakra-ui/react';
import Card from '../../../reusable-component/Card';
import Input from '../../../reusable-component/inputField';
import Button from '../../../reusable-component/Button';

const LoginMain = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // // Basic validation
    // if (!email || !password) {
    //   toast({
    //     title: "Login Failed",
    //     description: "Please enter both email and password",
    //     status: "error",
    //     duration: 3000,
    //     isClosable: true,
    //   });
    //   return;
    // }

    // Login logic (replace with your actual authentication)
    console.log('Login attempt with:', { email, password });
    
    // toast({
    //   title: "Login Successful",
    //   description: "You are now logged in",
    //   status: "success",
    //   duration: 3000,
    //   isClosable: true,
    // });
  };

  return (
    <Container centerContent>
      <VStack mt={16}>
        <Card 
          title="Login" 
          width="md"
          boxShadow="xl"
        >
          <form onSubmit={handleLogin}>
            <VStack>
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                isRequired
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                isRequired
              />
              <Button 
                type="submit" 
                colorScheme="blue" 
                width="full"
                variant='solid'
              >
                Login
              </Button>
            </VStack>
          </form>
        </Card>
      </VStack>
    </Container>
  );
};

export default LoginMain;