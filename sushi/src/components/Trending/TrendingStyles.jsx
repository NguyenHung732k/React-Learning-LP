import { createTheme } from '@mui/material'
import React from 'react'

import background1 from '../../assets/japanese_sushi.png'
import background2 from '../../assets/japanese_drinks.png'


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


const TrendingStyles = createTheme({

    trending: {
        display: "flex",
        position: "relative",

        flexDirection: "column",
        overflow: "hidden",

    },

    sushiContainer: {
        width: "100%",
        minHeight: "640px",

        display: "flex",
        flexDirection: "row",

        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
        },
    },

    drinkContainer: {
        width: "100%",
        minHeight: "640px",

        display: "flex",
        flexDirection: "row",

        [theme.breakpoints.down('md')]: {
            flexDirection: "column-reverse",
        },
    },

    ul: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        listStyle: "none",

        flexWrap: "wrap",
        gap: "20px",
    },

    li: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: "12px",

        minWidth: "210px",
    },

    textItem: {
        flex: 1,
        fontSize: 16,
        fontWeight: 500,
        fontFamily: "var(--plus-jakarta-sans)",

        color: "var(--secondary-color)",
    },

    icon: {
        width: "24px",
        height: "24px",

        borderRadius: "100%",
        backgroundColor: "var(--primary-color)",
    },

    image1: {
        position: "relative",
        padding: "32px 64px",

        backgroundColor: "var(--color-white)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",

        backgroundImage: `url(${background1})`,

        "img": {
            width: "254px",
            height: "260px",
            objectFit: "contain",
        },

        [theme.breakpoints.down('md')]: {
            width: "100%",
            backgroundSize: "cover",
        },

    },

    image2: {
        position: "relative",
        padding: "32px 64px",

        backgroundColor: "var(--color-white)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",

        backgroundImage: `url(${background2})`,

        "img": {
            width: "254px",
            height: "260px",
            objectFit: "contain",
        },
    },

    arrowTop: {
        position: "absolute",
        zIndex: 1,
        top: "-10.5px",
        left: "12%",

        "img": {
            objectFit: "contain",
            width: "auto",
            height: "100%",
        },

        [theme.breakpoints.down('md')]: {
            display: "none",
        },
    },

    arrowLeft: {
        position: "absolute",
        zIndex: 1,
        left: "-2.5px",
        top: "12%",

        "img": {
            objectFit: "contain",
            width: "auto",
            height: "100%",
        },

        [theme.breakpoints.down('md')]: {
            display: "none",
        },
    },



    arrowBottom: {
        position: "absolute",
        zIndex: 1,
        bottom: "-6.5px",
        right: "12%",

        "img": {
            objectFit: "contain",
            width: "100%",
            height: "auto",
        },

        [theme.breakpoints.down('md')]: {
            display: "none",
        },
    },

    arrowRight: {
        right: "-2.5px",
        bottom: "12%",
        position: "absolute",
        zIndex: 1,

        "img": {
            objectFit: "contain",
            width: "100%",
            height: "auto",
        },

        [theme.breakpoints.down('md')]: {
            display: "none",
        },
    },

    discover: {
        top: "44%",
        left: "44%",

        width: "160px",
        height: "160px",

        borderRadius: "100%",
        backgroundColor: "var(--secondary-color)",
        cursor: "pointer",

        [theme.breakpoints.down('md')]: {
            display: "none",
        },
    },


    typography: {

        subtitle: {
            fontSize: 18,
            fontWeight: 400,
            fontFamily: "var(--plus-jakarta-sans)",

            color: "var(--primary-color)",
            opacity: 0.8,
        },

        title: {
            fontSize: 64,
            fontWeight: 600,
            fontFamily: "var(--playfair-display)",

            color: "var(--secondary-color)",

            marginTop: "16px",
        },

        description: {
            fontSize: 18,
            fontWeight: 400,
            fontFamily: "var(--plus-jakarta-sans)",

            lineHeight: "36px",

            color: "var(--secondary-color)",
            opacity: 0.8,

            margin: "32px 0px",
        },

        discover: {
            fontSize: 18,
            fontWeight: 500,
            fontFamily: "var(--plus-jakarta-sans)",

            textTransform: "uppercase",
            color: "#fff",
        },
    },

    discoverVariants: {
        offscreen: {
            opacity: 0,
        },

        onscreen: {
            opacity: 1
        },
    },

    sushiVariants: {
        offscreen: {
            transform: "translateX(-200px)",
            opacity: 0,
        },

        onscreen: {
            transform: "none",
            opacity: 1
        },
    },

    drinkVariants: {
        offscreen: {
            transform: "translateX(200px)",
            opacity: 0,
        },

        onscreen: {
            transform: "none",
            opacity: 1
        },
    },

    imageSushiVariants: {
        offscreen: {
            transform: "translateX(200px)",
            opacity: 0,
        },

        onscreen: {
            transform: "none",
            opacity: 1
        },
    },

    imageDrinkVariants: {
        offscreen: {
            transform: "translateX(-200px)",
            opacity: 0,
        },

        onscreen: {
            transform: "none",
            opacity: 1
        },
    },
})

export default TrendingStyles