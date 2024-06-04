import React from "react";
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

import menu from '../../assets/menu.svg'


const Header = () => {

    const navItems = ['Menu', 'Food', 'Services', 'About Us']

    return (
        <ThemeProvider theme={HeaderStyles}>
            {/* Logo and Brand Name */}
            <Box component="header">
                <Stack component="nav" direction='row' sx={HeaderStyles.navResponsive}>
                    <Stack position="relative" flex="1" sx={HeaderStyles.logo}>
                        <Slide direction="down" in={true} mountOnEnter timeout={1000}>
                            <Typography variant="h4" component="h4" paddingLeft="30px" sx={HeaderStyles.typography}>
                                SUSHIMAN
                            </Typography>
                        </Slide>
                        <Stack component="div" position='absolute' sx={HeaderStyles.overlay} elevation={0}></Stack>
                    </Stack>

                    {/* Nav List */}
                    <Slide direction="down" in={true} mountOnEnter timeout={1000}>
                        <List sx={HeaderStyles.list}>
                            {navItems.map((item) => (
                                <ListItemButton key={item} component="a" dense disableGutters>
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
