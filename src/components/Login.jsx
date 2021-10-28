import React from 'react';
import { Flex, Heading, Input, Button, useColorMode } from '@chakra-ui/react'

function Login(props) {
    const { toggleColorMode } = useColorMode()
    return (
        <div>
            <Flex height='100vh' alignItems='center' justifyContent='center'>
                <Flex direction='column' background='gray.100' p={12} rounder={6}>
                    <Heading mb={6}>Log In</Heading>
                    <Input type='email' placeholder='chakra@ui.com'variant='filled' mb={3}></Input>
                    <Input type='password' placeholder='********' variant='filled' mb={3}></Input>
                    <Button colorScheme='red'>Log In</Button>
                    <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
                </Flex>
            </Flex>
        </div>
    );
}

export default Login;