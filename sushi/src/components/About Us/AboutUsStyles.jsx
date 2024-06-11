import { createTheme } from '@mui/material'
import React from 'react'

import background1 from '../../assets/about_bg1.png'
import background2 from '../../assets/about_bg2.png'

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

const AboutUsStyles = createTheme({

    about: {
        display: "flex",
        minHeight: "720px",

        [theme.breakpoints.down('lg')]: {
            flexDirection: "column",
        },


    },

    image: {
        backgroundColor: '#fff',
        padding: "20px",


        [theme.breakpoints.down('lg')]: {
            flexDirection: "row",
        },

        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
        },
    },

    aboutImage1: {
        padding: "32px 64px",
        flex: "1",
        display: "flex",
        alignItems: "center",

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",

        borderBottom: "8px solid var(--color-creamson)",
        backgroundImage: `url(${background1})`,


        'img': {
            width: "225px",
            height: "200px",
        },

        [theme.breakpoints.down('lg')]: {
            borderBottom: "none",
            borderRight: "8px solid var(--color-creamson)",
        },

        [theme.breakpoints.down('md')]: {
            borderBottom: "8px solid var(--color-creamson)",
            borderRight: "none",
        },

        [theme.breakpoints.down('sm')]: {
            'img': {
                width: "50%",
                height: "160px",
            },
        },

    },

    aboutImage2: {
        padding: "32px 64px",
        flex: "1",
        display: "flex",
        alignItems: "center",

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",

        backgroundImage: `url(${background2})`,


        'img': {
            width: "240px",
            height: "160px",
        },

        [theme.breakpoints.down('md')]: {
            padding: "50px 64px",
        },

        [theme.breakpoints.down('sm')]: {
            'img': {
                width: "50%",
                height: "160px",
            },
        },

    },

    button: {
        position: "absolute",
        right: 0,
        padding: "12px 32px",
        minHeight: "64px",

        background: "var(--secondary-color)",
        borderRadius: "32px 0 0 32px",
        border: 0,
        outline: 0,

        color: "#fff",
        fontFamily: "var(--plus-jakarta-sans)",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "23px",

        cursor: "pointer",

        '&:hover': {
            backgroundColor: 'var(--primary-color)',
        },

        [theme.breakpoints.down('lg')]: {
            display: "none",
        },

        [theme.breakpoints.down('md')]: {
            display: "block",
            top: "45%",
        },

        [theme.breakpoints.down('sm')]: {
            top: "44%",
        },

    },

    content: {
        padding: "83px",

        [theme.breakpoints.down('sm')]: {
            padding: "32px",
        },
    },

    cardVariants: {
        offscreen: {
            x: -100,
            transform: "translateX(-200px)",
            opacity: 0,
        },

        onscreen: {
            transform: "none",
            opacity: 1
        },

        transition: "all 1s cubic-bezier(.175,.885,.32,1.275) 1s",
    },

    textVariants: {
        offscreen: {
            x: 500,
            transform: "translateX(500px)",
            opacity: 0,
        },

        onscreen: {
            transform: "none",
            opacity: 1
        },

        transition: "all 1s cubic-bezier(.175,.885,.32,1.275) 1s",
    },

    typography: {
        p: {
            fontSize: 18,
            fontWeight: 400,
            fontFamily: 'var(--plus-jakarta-sans)',
            lineHeight: "36px",
            margin: "32px 0",
        },

        h3: {
            fontSize: 64,
            fontWeight: 600,
            fontFamily: 'var(--playfair-display)',
            color: 'var(--secondary-color)',
            marginTop: 8,
        },

        body1: {
            fontFamily: 'var(--plus-jakarta-sans)',
            color: 'var(--secondary-color)',
            fontSize: 18,
            fontWeight: 400,
        },
    },
})

export default AboutUsStyles