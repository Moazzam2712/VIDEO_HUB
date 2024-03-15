import { Text, Box, Button, HStack, Heading, Input, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from "react-icons/ai"

const Footer = () => {
    return <Box bgColor={"blackAlpha.900"} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['left','center']}>
                    Subscribe to get Updates
                </Heading>
                <HStack borderBottom={'2px solid white'}>
                    <Input placeholder='Enter Email Here...' border={'none'}
                        borderRadius={'none'}
                        outline={'none'}
                        focusBorderColor='none' />

                    <Button p={'0'}
                        colorScheme={'purple'}
                        variant={'ghost'}
                        borderRadius={'0px 20px 20px 0'}>
                        <AiOutlineSend />
                    </Button>
                </HStack>
            </VStack>

            <VStack w={'full'}
                borderRight={'1px solid white'}
                borderLeft={'1px solid white'}
            >

                <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
                    video hub
                </Heading>
                <Text>All Rights Recieved</Text>
            </VStack>


            <VStack w={'full'}>
                <Heading textTransform={'uppercase'} size={'md'}>social media</Heading>
                <Button variant={'link'} colorScheme='whiteAlpha'>
                    <a target='blank' href="https://youtube.com">Youtube</a>
                </Button>
                <Button variant={'link'} colorScheme='whiteAlpha'>
                    <a target='blank' href="https://instagram.com">Instagram</a>
                </Button>
                <Button variant={'link'} colorScheme='whiteAlpha'>
                    <a target='blank' href="https://github.com">GitHub</a>
                </Button>
            </VStack>



        </Stack>
    </Box>
}

export default Footer