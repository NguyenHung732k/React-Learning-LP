import React from 'react'
import { createTheme } from '@mui/material'

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

const HeroStyles = createTheme({

    hero: {
        display: 'flex',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 74px)',

        [theme.breakpoints.down('lg')]: {
            flexDirection: 'column',
        },
    },

    heroImage: {

        "img": {
            width: '120%',
            height: '100%',
            objectFit: 'contain',

            [theme.breakpoints.down('lg')]: {
                width: "100%",
                height: '100%',
                objectFit: 'contain',
                transform: "matrix(1, 0.05, 0, 1.25, 0, 0)",
            },
        },
    },

    userImage: {
        width: '42px',
        height: '42px',
        objectFit: 'contain',
    },

    overlay: {
        inset: 0,
        width: '100%',
        backgroundColor: 'var(--primary-color)',
        zIndex: -1,
    },

    info: {
        padding: "64px",
        margin: "100px 0",

        [theme.breakpoints.down('lg')]: {
            margin: "30px 0",
        },
        [theme.breakpoints.down('sm')]: {
            padding: "32px",
        },
    },

    typography: {
        h2: {
            position: 'absolute',
            bottom: 0,
            padding: '20px',
            fontSize: 120,
            fontFamily: 'var(--playfair-display)',
            fontWeight: 700,
            color: '#fff',


            [theme.breakpoints.down('md')]: {
                fontSize: 70,
                lineHeight: "90px",
            },

            [theme.breakpoints.down('sm')]: {
                fontSize: 40,
                lineHeight: "60px",
            },
        },

        h1: {
            fontSize: 80,
            fontWeight: 600,
            fontFamily: 'var(--playfair-display)',
            color: 'var(--secondary-color)',

            [theme.breakpoints.down('sm')]: {
                fontSize: 60,
            },
        },

        h4: {
            fontSize: 62,
            fontWeight: 400,
            fontFamily: 'var(--playfair-display)',
        },

        body1: {
            margin: '32px 0 0 32px',
            fontFamily: 'var(--plus-jakarta-sans)',
            color: 'var(--secondary-color)',
            fontSize: 18,
            fontWeight: 400,

            [theme.breakpoints.down('sm')]: {
                margin: '32px 0',
            },
        },
    },

    review: {
        minWidth: '200px',
        paddingLeft: '20px',
        borderLeft: "1px solid rgba(2, 2, 2, 0.1)",
    },

    testimonial: {
        padding: '32px 64px',

        [theme.breakpoints.down('sm')]: {
            padding: '32px',
        },
    },

    contentButton: {
        margin: '41px 0 0 41px',

        [theme.breakpoints.down('sm')]: {
            margin: '41px 0',
        },
    },

    button: {
        padding: '20px',
        borderRadius: '36px',
        minWidth: '212px',
        outline: 'none',
        border: 'none',
        backgroundColor: 'var(--color-white)',
        cursor: 'pointer',
        color: '#000',
        fontWeigth: 500,
        fontSize: 18,
        lineHeight: '23px',

        "&:hover": {
            backgroundColor: 'var(--primary-color)',
        },
    },

    heroVariants: {
        offscreen: {
            opacity: 0,
        },

        onscreen: {
            opacity: 1
        },
    },

    heroTextVariants: {
        offscreen: {
            transform: "translateX(200px)",
            opacity: 0,
        },

        onscreen: {
            transform: "none",
            opacity: 1
        },
    },

    cardVariants: {
        offscreen: {
            y: 180,
            transform: "translateY(-200px)",
            opacity: 0,
        },

        onscreen: {
            y: 0,
            transform: "none",
            opacity: 1
        },
    },

})

export default HeroStyles