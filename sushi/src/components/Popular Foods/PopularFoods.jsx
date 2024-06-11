import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';




import { motion } from "framer-motion";
import { ThemeProvider } from '@emotion/react';
import PopularFoodsStyles from './PopularFoodsStyles';

import sushiImage9 from '../../assets/sushi-9.png'
import sushiImage8 from '../../assets/sushi-8.png'
import sushiImage7 from '../../assets/sushi-7.png'
import sushiImage6 from '../../assets/sushi-6.png'
import sushiImage12 from '../../assets/sushi-12.png'
import sushiImage11 from '../../assets/sushi-11.png'
import sushiImage10 from '../../assets/sushi-10.png'
import star from '../../assets/star.svg'
import arrowRight from '../../assets/arrow-right.svg'


const PopularFoods = () => {

    const ref = useRef(null)

    return (
        <ThemeProvider theme={PopularFoodsStyles}>
            <Box component="section" sx={PopularFoodsStyles.container}>
                <Typography variant="h2"
                    component={motion.h2}

                    ref={ref}
                    sx={PopularFoodsStyles.typography.h2}
                    variants={PopularFoodsStyles.textVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    transition={{ duration: 0.5 }}
                    >

                    Popular Food / 人気

                </Typography>

                <Stack direction="row" justifyContent="center" gap="24px" sx={PopularFoodsStyles.filter}
                    component={motion.div}
                    ref={ref}
                    variants={PopularFoodsStyles.filterVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    transition={{ duration: 0.75 }}
                >
                    <Button sx={PopularFoodsStyles.button} >All</Button>
                    <Button sx={PopularFoodsStyles.button} >
                        <Box component="img" alt="sushi9" src={sushiImage9} /> <span> Sushi </span>
                    </Button>

                    <Button sx={PopularFoodsStyles.button} >
                        <Box component="img" alt="sushi8" src={sushiImage8} /> <span> Ramen </span>
                    </Button>

                    <Button sx={PopularFoodsStyles.button} >
                        <Box component="img" alt="sushi7" src={sushiImage7} /> <span> Udon </span>
                    </Button>

                    <Button sx={PopularFoodsStyles.button} >
                        <Box component="img" alt="sushi8" src={sushiImage6} /> <span> Danggo </span>
                    </Button>

                    <Button sx={PopularFoodsStyles.button} >Others</Button>
                </Stack>

                <Stack direction="row" justifyContent="center" alignItems="flex-end" gap="56px" sx={PopularFoodsStyles.cardContainer}
                    component={motion.div}
                    ref={ref}
                    variants={PopularFoodsStyles.filterVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    transition={{ duration: 0.75 }}
                >
                    {/* Card 1 */}
                    <Stack direction="column" justifyContent="center" alignItems="center" sx={PopularFoodsStyles.card}>
                        <Box component="img" alt="sushi12" src={sushiImage12} sx={PopularFoodsStyles.cardImage} />
                        <Typography variant="h4" component="h4" sx={PopularFoodsStyles.typography.h4}>Chezu Sushi</Typography>

                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%', marginTop: '32px' }}>
                            <Stack direction="row" alignItems="center" gap="8px">
                                <Box component="img" alt="star" src={star} />
                                <Typography variant="body2" component="p" sx={PopularFoodsStyles.typography.p}>4.9</Typography>
                            </Stack>

                            <Typography variant="body1" component="p" sx={PopularFoodsStyles.typography.p.font}>$21.00</Typography>
                        </Stack>
                    </Stack>

                    {/* Card 2 */}
                    <Stack direction="column" justifyContent="center" alignItems="center" sx={PopularFoodsStyles.cardActive}>
                        <Box component="img" alt="sushi12" src={sushiImage11} sx={PopularFoodsStyles.cardImageActive} />
                        <Typography variant="h4" component="h4" sx={PopularFoodsStyles.typography.h4Active}>Original Sushi</Typography>

                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%', marginTop: '32px' }}>
                            <Stack direction="row" alignItems="center" gap="8px">
                                <Box component="img" alt="star" src={star} sx={{ width: '32px', height: '32px' }} />
                                <Typography variant="body2" component="p" sx={PopularFoodsStyles.typography.pActive}>5.0</Typography>
                            </Stack>

                            <Typography variant="body1" component="p" sx={PopularFoodsStyles.typography.pActive.fontActive}>$19.00</Typography>
                        </Stack>
                    </Stack>

                    {/* Card 3 */}
                    <Stack direction="column" justifyContent="center" alignItems="center" sx={PopularFoodsStyles.card}>
                        <Box component="img" alt="sushi12" src={sushiImage10} sx={PopularFoodsStyles.cardImage} />
                        <Typography variant="h4" component="h4" sx={PopularFoodsStyles.typography.h4}>Ramen Legendo</Typography>

                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%', marginTop: '32px' }}>
                            <Stack direction="row" alignItems="center" gap="8px">
                                <Box component="img" alt="star" src={star} />
                                <Typography variant="body2" component="p" sx={PopularFoodsStyles.typography.p}>4.7</Typography>
                            </Stack>

                            <Typography variant="body1" component="p" sx={PopularFoodsStyles.typography.p.font}>$13.00</Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Button sx={PopularFoodsStyles.buttonArrow}> Explore Food
                    <Box component="img" alt="arrow-right" src={arrowRight} sx={{ width: '14px', height: '14px', objectFit: 'contain', marginLeft: '21px' }} />
                </Button>


            </Box>
        </ThemeProvider>
    )
}

export default PopularFoods