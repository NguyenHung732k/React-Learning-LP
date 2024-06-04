import { createTheme } from '@mui/material'
import React from 'react'


const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
})

const HeaderStyles = createTheme({
    // palette: {
    //     primary: {
    //         main: '#b1454a',
    //     },
    //     secondary: {
    //         main: '#121212',
    //     },
    //     creamson: {
    //         main: '#fff0de',
    //     }
    // },


    overlay: {
        inset: 0,
        width: '100%',
        backgroundColor: 'var(--primary-color)',
        zIndex: -1,

    },

    navResponsive: {
            [theme.breakpoints.down('md')]: {
                backgroundColor: "var(--primary-color)",
            }
    },

    logo: {
        padding: "20px",

        [theme.breakpoints.down('md')]: {
           padding: "16px",
        }
    },

    list: {
        padding: '8px',
        flex: '1.236',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '64px',

        '&:hover': {
            backgroundColor: 'transparent',
        },

        [theme.breakpoints.down('md')]: {
            display: "none",
        }
    },

    mobileList: {
        [theme.breakpoints.down('md')]: {
            display: "flex",
            position: 'relative',
            padding: '20px',
            flex: '1.236',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '20px',

            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
    },

    typography: {
        fontSize: 24,
        fontFamily: 'var(--playfair-display)',
        fontWeight: 700,
        textTransform: 'uppercase',
        color: '#fff',
    },


    listItem: {
        fontWeight: 500,
        fontFamily: 'var(--plus-jakarta-sans)',
        color: 'var(--secondary-color)',
        fontSize: 16,
        lineHeight: '20px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        textAlign: 'right',
    }
})

export default HeaderStyles