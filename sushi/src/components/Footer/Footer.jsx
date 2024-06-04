import { ThemeProvider } from '@emotion/react'
import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'

import FooterStyles from './FooterStyles'

const Footer = () => {

    const navItems = ['Menu', 'Food', 'Services', 'About Us']

    return (

        <ThemeProvider theme={FooterStyles}>
            <Box component="footer">
                <Stack direction="row" justifyContent="space-between" alignItems="center" gap="20px" flexWrap="wrap" sx={FooterStyles.container}>
                    <Typography sx={FooterStyles.logo}>
                        <span>Sushi</span>man
                    </Typography>

                    {/* Footer Navigation */}
                    <List disablePadding sx={FooterStyles.ul}>
                        {navItems.map((item) => (
                            <ListItemButton key={item} component="a" dense disableGutters sx={FooterStyles.navItems}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        ))}

                    </List>

                    {/* Footer Social */}
                    <List disablePadding sx={FooterStyles.ul}>

                        <ListItem dense disableGutters disablePadding sx={FooterStyles.socialItems}>
                            <Box component="img" alt="facebook" src={facebook} />
                        </ListItem>

                        <ListItem dense disableGutters disablePadding sx={FooterStyles.socialItems}>
                            <Box component="img" alt="instagram" src={instagram} />
                        </ListItem>

                        <ListItem dense disableGutters disablePadding sx={FooterStyles.socialItems}>
                            <Box component="img" alt="twitter" src={twitter} />
                        </ListItem>

                    </List>
                </Stack>
            </Box>
        </ThemeProvider>
    )
}

export default Footer