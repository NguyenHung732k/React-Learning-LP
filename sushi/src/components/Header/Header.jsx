import React, { useRef } from "react";
import { Link as RouterLink } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Slide from '@mui/material/Slide';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';

import './Header.css'
import { ThemeProvider } from "@emotion/react";
import HeaderStyles from "./HeaderStyles";

import { motion } from "framer-motion";


import menu from '../../assets/menu.svg'


const Header = () => {

    const ref = useRef(null)

    const navItems = ["Menu", "Food", "Services", "About Us"]

    return (
        <ThemeProvider theme={HeaderStyles}>
            {/* Logo and Brand Name */}
            <Box component="header">
                <Stack component="nav" direction='row' sx={HeaderStyles.navResponsive}>
                    <Stack position="relative" flex="1" sx={HeaderStyles.logo}>
                        <Stack component={motion.div}
                            ref={ref}
                            variants={HeaderStyles.headerVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            transition={{ duration: 0.75 }}
                        >
                            <Typography variant="h4" component="h4" paddingLeft="30px" sx={HeaderStyles.typography}>
                                SUSHIMAN
                            </Typography>
                        </Stack>
                        <Stack component="div" position='absolute' sx={HeaderStyles.overlay} elevation={0}></Stack>
                    </Stack>

                    {/* Nav List */}
                    <Slide direction="down" in={true} mountOnEnter timeout={1000}>
                        <List sx={HeaderStyles.list}>

                            {navItems.map((item, index) => (
                                <ListItemButton key={index} dense disableGutters sx={HeaderStyles.listHover}>
                                    <ListItemText primary={item} primaryTypographyProps={HeaderStyles.listItem} />
                                </ListItemButton>
                            ))}

                            <SearchIcon />
                        </List>
                    </Slide>

                    {/* Mobile Nav List */}
                    <Slide direction="down" in={true} mountOnEnter timeout={1000}>
                        <List sx={HeaderStyles.mobileList}>
                            <Box component="img" src={menu} alt="menu" />
                        </List>
                    </Slide>

                </Stack>
            </Box>

        </ThemeProvider>

    )
};

export default Header;
