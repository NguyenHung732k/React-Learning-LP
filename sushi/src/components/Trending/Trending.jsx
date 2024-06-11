import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



import { motion } from "framer-motion";

import { ThemeProvider } from '@emotion/react';
import TrendingStyles from './TrendingStyles';

import check from '../../assets/check.svg';
import arrowVertical from '../../assets/arrow-vertical.svg';
import arrowHorizontal from '../../assets/arrow-horizontal.svg';
import sushi5 from '../../assets/sushi-5.png';
import sushi4 from '../../assets/sushi-4.png';


const Trending = () => {

    const sushiItems = ["Make Sushi", "Oshizushi", "Uramaki Sushi", "Nigiri Sushi", "Temaki Sushi", "Inari Sushi"]
    const drinkItems = ["Oruncha", "Sakura Tea", "Aojiru", "Ofukucha", "Kombu-cha", "Mugicha"]

    const ref = useRef(null)

    return (
        <ThemeProvider theme={TrendingStyles}>
            <Box component="section" sx={TrendingStyles.trending}>

                {/* Trending Sushi */}
                <Box component="section" sx={TrendingStyles.sushiContainer}>

                    {/* Trending Sushi Content */}
                    <Stack component={motion.div} flex="1" direction="column" justifyContent="center" sx={{ padding: "32px 64px" }}

                        ref={ref}
                        variants={TrendingStyles.sushiVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        transition={{ duration: 0.5 }}
                    >
                        <Typography variant="body2" component="p" sx={TrendingStyles.typography.subtitle}> What's Trending / トレンド </Typography>

                        <Typography variant="h3" component="h3" sx={TrendingStyles.typography.title}> Japanese Sushi </Typography>

                        <Typography variant="body2" component="p" sx={TrendingStyles.typography.description}> Feel the taste of the most delicious Sushi here. </Typography>


                        {/* Trending Sushi Menu List */}
                        <List disablePadding sx={TrendingStyles.ul}>

                            {sushiItems.map((item) => (
                                <ListItem sx={TrendingStyles.li} key={item}>
                                    <Stack direction="row" justifyContent="center" alignItems="center" sx={TrendingStyles.icon}>
                                        <Box component="img" alt="check" src={check} sx={{ width: "50%", height: "50%" }} />
                                    </Stack>

                                    <ListItemText primary={item} primaryTypographyProps={TrendingStyles.textItem} />
                                </ListItem>
                            ))}

                        </List>

                    </Stack>


                    {/* Trending Sushi Image */}
                    <Stack flex="1" direction="row" justifyContent="center" alignItems="center" sx={TrendingStyles.image1}>

                        <Box component={motion.img} alt="check" src={sushi5} sx={{ width: "50%", height: "50%" }}

                            ref={ref}
                            variants={TrendingStyles.imageSushiVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            transition={{ duration: 0.5 }}
                        />

                        {/* Arrow Left */}
                        <Box sx={TrendingStyles.arrowLeft}>
                            <Box component="img" alt="arrow-vertical" src={arrowVertical} />
                        </Box>

                        {/* Arrow Bottom */}
                        <Box sx={TrendingStyles.arrowBottom}>
                            <Box component="img" alt="arrow-horizontal" src={arrowHorizontal} />
                        </Box>

                    </Stack>

                </Box>

                {/* Trending Discover */}
                <Stack component={motion.div} direction="row" justifyContent="center" alignItems="center" position="absolute" zIndex="1" sx={TrendingStyles.discover}

                    ref={ref}
                    variants={TrendingStyles.discoverVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    transition={{ duration: 0.5 }}
                >

                    <Typography sx={TrendingStyles.typography.discover}>
                        Discover
                    </Typography>
                </Stack>


                {/* Trending Drink */}
                <Box component="section" sx={TrendingStyles.drinkContainer}>

                    {/* Trending Drink Image */}
                    <Stack flex="1" direction="row" justifyContent="center" alignItems="center" sx={TrendingStyles.image2}>

                        <Box component={motion.img} alt="check" src={sushi4} sx={{ width: "50%", height: "50%" }}

                            ref={ref}
                            variants={TrendingStyles.imageDrinkVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            transition={{ duration: 0.5 }}
                        />

                        {/* Arrow Left */}
                        <Box sx={TrendingStyles.arrowTop}>
                            <Box component="img" alt="arrow-vertical" src={arrowHorizontal} />
                        </Box>

                        {/* Arrow Bottom */}
                        <Box sx={TrendingStyles.arrowRight}>
                            <Box component="img" alt="arrow-horizontal" src={arrowVertical} />
                        </Box>

                    </Stack>

                    {/* Trending Drink Content */}
                    <Stack component={motion.div} flex="1" direction="column" justifyContent="center" sx={{ padding: "32px 64px" }}

                        ref={ref}
                        variants={TrendingStyles.drinkVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        transition={{ duration: 0.5 }}
                    >
                        <Typography variant="body2" component="p" sx={TrendingStyles.typography.subtitle}> What's Trending / トレンド </Typography>

                        <Typography variant="h3" component="h3" sx={TrendingStyles.typography.title}> Japanese Drinks </Typography>

                        <Typography variant="body2" component="p" sx={TrendingStyles.typography.description}> Feel the taste of the most delicious Japense drinks here. </Typography>

                        {/* Trending Sushi Menu List */}
                        <List disablePadding sx={TrendingStyles.ul}>

                            {drinkItems.map((item) => (
                                <ListItem sx={TrendingStyles.li} key={item}>
                                    <Stack direction="row" justifyContent="center" alignItems="center" sx={TrendingStyles.icon}>
                                        <Box component="img" alt="check" src={check} sx={{ width: "50%", height: "50%" }} />
                                    </Stack>

                                    <ListItemText primary={item} primaryTypographyProps={TrendingStyles.textItem} />
                                </ListItem>
                            ))}

                        </List>

                    </Stack>

                </Box>

            </Box>
        </ThemeProvider>
    )
}

export default Trending