import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

import { motion } from "framer-motion";

import { ThemeProvider } from "@emotion/react";
import HeroStyles from './HeroStyles';

import image1 from '../../assets/sushi-1.png'
import userImage from '../../assets/user.png'

const Hero = () => {

    const ref = useRef(null)

    return (
        <ThemeProvider theme={HeroStyles}>
            {/* Hero Image */}
            <Box component="section" sx={HeroStyles.hero}>
                <Stack flex="1" direction="column" position="relative" zIndex={5} sx={HeroStyles.heroImage}>
                    <Stack component={motion.div} ref={ref} variants={HeroStyles.heroVariants} initial="offscreen" whileInView="onscreen" transition={{ duration: 1 }}>
                        <Stack>
                            <Box component={motion.img}
                                ref={ref}
                                alt="sushi"
                                src={image1}
                                variants={HeroStyles.heroVariants} 
                                initial="offscreen" 
                                whileInView="onscreen"
                                transition={{ duration: 1 }}
                            />
                            <Typography variant="h2" component="h2" sx={HeroStyles.typography.h2}>
                                日 <br />
                                本 <br />
                                食
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack component="div" position='absolute' sx={HeroStyles.overlay} elevation={0}></Stack>
                </Stack>


                {/* Hero Content */}
                <Stack flex="1.22" direction="column" justifyContent="space-between">
                    <Stack component={motion.div} ref={ref} variants={HeroStyles.heroTextVariants} initial="offscreen" whileInView="onscreen" transition={{ duration: 0.75 }}>
                        <Stack flex="1" direction="column" justifyContent="center" sx={HeroStyles.info}>
                            <Typography variant="h1" component="h1" sx={HeroStyles.typography.h1}>
                                Feel the taste of Japanese food
                            </Typography>

                            <Typography variant="body1" component="p" sx={HeroStyles.typography.body1}>
                                Feel the taste of the most popular Japanese food from anywhere and anytime.
                            </Typography>

                            {/* Hero Content Button */}
                            <Stack flex-wrap="wrap" direction='row' gap="36px" sx={HeroStyles.contentButton}>
                                <Button sx={HeroStyles.button}>Order Now</Button>
                                <Button sx={HeroStyles.button}>How to Order</Button>

                            </Stack>
                        </Stack>
                    </Stack>

                    {/* Hero Content Testimonials */}
                    <Stack component={motion.div}

                        ref={ref}
                        variants={HeroStyles.cardVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        transition={{ duration: 0.75 }}

                        sx={{ backgroundColor: '#fff' }}
                    >

                        <Stack flexWrap="wrap" direction='row' gap="20px" sx={{ padding: '32px 64px' }}>
                            <Stack flex="1" flexWrap="wrap" justifyContent="center" alignItems="center" gap="10px">
                                <Typography variant="h4" component="h4" sx={HeroStyles.typography.h4}>
                                    24k+
                                </Typography>

                                <Typography variant="subtitle1" component="p">
                                    Happy Customers
                                </Typography>
                            </Stack>

                            <Stack flex="1" justifyContent="center" alignItems="center" gap="10px" sx={HeroStyles.review}>
                                <Box component="img" sx={HeroStyles.userImage}
                                    alt="sushi"
                                    src={userImage}
                                />
                                <Typography variant="subtitle2" component="p">
                                    "This is the best Japanese food delivery service that ever existed."
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>

            </Box>
        </ThemeProvider>
    )
}

export default Hero