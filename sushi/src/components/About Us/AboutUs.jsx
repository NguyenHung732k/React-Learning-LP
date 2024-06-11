import React, { useState, useRef } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";


import { ThemeProvider } from '@emotion/react';
import AboutUsStyles from './AboutUsStyles';

import sushiImage1 from '../../assets/sushi-3.png'
import sushiImage2 from '../../assets/sushi-2.png'



const AboutUs = () => {

    const ref = useRef(null)


    return (
        <ThemeProvider theme={AboutUsStyles}>
            <Box component="section" sx={AboutUsStyles.about}>
                <Stack flex="1" direction="column" justifyContent="center" position="relative" sx={AboutUsStyles.image}>

                    <Stack flex="1" direction="row" alignItems="center" sx={AboutUsStyles.aboutImage1}>
                        <Stack flex="1" direction="row" alignItems="flex-start" justifyContent="flex-start" sx={AboutUsStyles.image1}>
                            <Box component={motion.img}
                                alt="sushi"
                                src={sushiImage1}

                                ref={ref}
                                variants={AboutUsStyles.cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                transition={{ duration: 1 }}
                            />
                        </Stack>
                    </Stack>

                    <Button sx={AboutUsStyles.button}>Learn More</Button>

                    <Stack flex="1" direction="row" alignItems="center" sx={AboutUsStyles.aboutImage2}>
                        <Stack flex="1" direction="row" alignItems="flex-start" justifyContent="flex-start" sx={AboutUsStyles.image2}>
                            <Box component={motion.img}
                                alt="sushi"
                                src={sushiImage2}

                                ref={ref}
                                variants={AboutUsStyles.cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                transition={{ duration: 1 }}
                            />
                        </Stack>
                    </Stack>

                </Stack>

                <Stack component={motion.div} flex="1" direction="column" justifyContent="center" sx={AboutUsStyles.content}

                    ref={ref}
                    variants={AboutUsStyles.textVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    transition={{ duration: 1 }}
                    >
                    

                    <Typography variant="body1" component="p" paddingLeft="30px" sx={AboutUsStyles.typography.body1}>
                        About Us / 私たちに関しては
                    </Typography>
                    <Typography variant="h3" component="h3" paddingLeft="30px" sx={AboutUsStyles.typography.h3}>
                        Our mission is to bring true Japanese flavours to you.
                    </Typography>
                    <Typography variant="body2" component="p" paddingLeft="30px" sx={AboutUsStyles.typography.p}>
                        We will continue to provide the experience of Omotenashi, the Japanese mindset of hospitality, with our shopping and dining for our customers.
                    </Typography>
                </Stack>

            </Box>
        </ThemeProvider>
    )
}

export default AboutUs