import { Box, Container, Heading, Image, Stack,Text} from '@chakra-ui/react'
import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions = {
    pos: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: "4",
    size: "['2xl','4xl']",
    borderRadius: "10"
}

const Home = () => {
    return <Box >
        <MyCarousel />
        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
            <Heading  textTransform={'uppercase'}
                py={'2'} borderBottom={'2px solid'}
                w={'fit-content'}
                m={'auto'}
            >services</Heading>

            <Stack
                h="full"
                p={'4'}
                alignItems={'center'}
                direction={['column', 'row']}
            >
                <Image src={img5} 
                h={['40','400']}
                filter={'hue-rotate(-130deg)'}/>
               
                <Text
                letterSpacing={'widget'}
                lineHeight={'190%'}
                p={['4','16']}
                textAlign={'center'}
                >
                Discover a curated collection of the latest and greatest games across genres, from heart-pounding action to mind-bending strategy. Stay updated on industry news, upcoming releases, and insider insights from our passionate gaming community. Dive into in-depth reviews, expert guides, and exclusive interviews with game developers, unlocking the secrets behind your favorite titles.we redefine the art of online entertainment with an expansive collection of videos that cater to every taste and preference. Embark on a journey through a diverse array of content, from thrilling movies to informative documentaries and captivating user-generated videos.
                </Text>
            </Stack>

        </Container>

    </Box>
}

const MyCarousel = () => (
    <Carousel autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        >

        <Box w={'full'} height={"100vh"}>
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch the Future
            </Heading>
        </Box>

        <Box w={"full"} height={"100vh"}>
            <Image src={img2} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>

        <Box w={"full"} height={"100vh"}>
            <Image src={img3} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>

        <Box w={"full"} height={"100vh"}>
            <Image src={img4} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Night Life is Cool
            </Heading>
        </Box>

    </Carousel>
)

export default Home

