import { createTheme } from '@mui/material'
import React from 'react'


import popularImage from '../../assets/popular_bg.png'

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

const PopularFoodsStyles = createTheme({

    container: {
        padding: "64px",

        display: "flex",
        flexDirection: "column",

        backgroundColor: "var(--primary-color)",
        backgroundImage: `url(${popularImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",

        [theme.breakpoints.down('sm')]: {
            padding: "64px 32px",
        },
    },

    filter: {
        marginTop: "48px",
        maxWidth: "100%",
        // overflowX: "auto",

        [theme.breakpoints.down('sm')]: {
            'span': {
                display: "none",
            },
        },

        [theme.breakpoints.between('sm', 'md')]: {
            'img': {
                display: "none",
            },
        },
    },

    filterVariants: {
        offscreen: {
            transform: "translateY(100px)",
            opacity: 0,
        },

        onscreen: {
            y: 0,
            transform: "none",
            opacity: 1
        },

        transition: "all 1s cubic-bezier(.175,.885,.32,1.275) 1s",
    },

    cardContainer: {
        margin: "64px 0",

        [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
    },

    card: {
        padding: "38px",
        minWidth: "260px",
        height: "fit-content",

        borderRadius: "36px",
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.2)",

        [theme.breakpoints.down('sm')]: {
            minWidth: "80%",
        },
    },

    cardActive: {
        padding: "38px",
        minWidth: "340px",
        height: "fit-content",

        borderRadius: "36px",
        background: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.2)",

        [theme.breakpoints.down('sm')]: {
            minWidth: "100%",
        },
    },

    cardImage: {
        width: "110px",
        height: "84px",
        objectFit: "contain",
    },

    cardImageActive: {
        width: "214px",
        height: "160px",
    },

    typography: {

        h2: {
            fontSize: 56,
            fontFamily: "var(--playfair-display)",
            fontWeight: 600,
            lineHeight: "78px",
            color: "#fff",
            textAlign: "center",
        },

        h4: {
            marginTop: "47px",

            fontWeight: 600,
            fontSize: 24,
            lineHeight: "32px",
            fontFamily: "var(--playfair-display)",
            color: "#fff",
            textAlign: "center",
        },

        h4Active: {
            marginTop: "47px",

            fontWeight: 600,
            fontSize: 32,
            lineHeight: "32px",
            fontFamily: "var(--playfair-display)",
            color: "var(--black-500)",
            textAlign: "center",
        },

        p: {
            fontSize: 20,
            fontWeight: 300,
            fontFamily: "var(--plus-jakarta-sans)",
            color: "#fff",

            font: {
                fontSize: 20,
                fontWeight: 500,
                fontFamily: "var(--plus-jakarta-sans)",
                color: "#fff",
            },
        },

        pActive: {
            fontSize: 24,
            fontWeight: 300,
            fontFamily: "var(--plus-jakarta-sans)",
            color: "var(--gray-100)",

            fontActive: {
                fontSize: 24,
                fontWeight: 500,
                fontFamily: "var(--plus-jakarta-sans)",
                color: "var(--secondary-color)",
            },
        },
    },



    button: {
        padding: "10px 28px",

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",

        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "46px",

        fontSize: 16,
        fontWeight: 300,
        lineHeight: "25px",
        fontFamily: "var(--plus-jakarta-sans)",
        textTransform: "capitalize",
        color: "#fff",
        cursor: "pointer",

        'active': {
            background: "#fff",
            color: "var(--primary-color)",
        },

        'img': {
            width: "36px",
            height: "36px",
            objectFit: "contain",
        },
    },

    buttonArrow: {
        width: "fit-content",

        padding: "20px 30px",
        margin: "30px auto 0",

        fontWeight: 500,
        fontSize: 18,
        lineHeight: "23px",
        fontFamily: "var(--plus-jakarta-sans)",
        textTransform: "capitalize",
        color: "#fff",

        border: "none",
        outline: "none",
        background: "var(--secondary-color)",
        borderRadius: "64px",
        cursor: "pointer",
    },


    textVariants: {
        offscreen: {
            transform: "rotateX(180deg)",
            opacity: 1,
        },

        onscreen: {
            transform: "rotateX(0deg)",
            opacity: 1
        },

        transition: "transform 2s",
    },




})

export default PopularFoodsStyles