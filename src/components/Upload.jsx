import { Button, Container, HStack, Input, VStack, calc } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
    return <Container maxW={'container.xl'} h={'100vh'}>
        <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
            <AiOutlineCloudUpload size={'10vmax'} />
            <form action="/">
                <HStack>
                    <Input type='file' required css={{
                            '&::file-selector-button': {
                                border: "none",
                                width: 'calc(100% + 36px)',
                                height: "100%",
                                marginLeft: "-18px",
                                color: 'purple',
                                backgroundColor: 'white'
                            }
                        }}/>

                   
                    <Button colorScheme='purple' type='submit'>Upload</Button>
                </HStack>
            </form>
        </VStack>
    </Container>
}

export default Upload