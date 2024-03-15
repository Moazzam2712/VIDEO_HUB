import { Button, Container, Heading, Input, VStack,Text, Avatar} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return <Container maxW={'container.xl'} h={'100vh'} p={'16'} >
        <form action="/">
            <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                <Heading textAlign={'center'} textTransform={'uppercase'}>Video Hub</Heading>
                <Avatar alignSelf={'center'} boxSize={'32'}></Avatar>

                <Input placeholder='Name' type='name' required focusBorderColor={'purple.500'} />

                
                <Input placeholder='Email' type='email' required focusBorderColor={'purple.500'} />
                <Input placeholder='Password' type='password' required focusBorderColor={'purple.500'} />

         
                <Button colorScheme='purple' >Sign Up</Button>
                <Text textAlign={'right'}>Already Signed Up?  {'   '}
                <Button variant={'link'} alignSelf={'flex-end'} colorScheme='purple'>
                    <Link to={'/login'}>Log In</Link>
                </Button>
                
                </Text>

            </VStack>
        </form>
    </Container>
}

export default Signup