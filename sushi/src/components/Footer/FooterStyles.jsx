import { createTheme } from '@mui/material'
import React from 'react'

const FooterStyles = createTheme({
    container: {
        width: "100%",
        padding: "20px 40px",
        background: "var(--color-white)",

        overflow: "hidden",
    },

    logo: {
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "var(--playfair-display)",
        textTransform: "uppercase",
        color: "var(--secondary-color)",

        cursor: "pointer",

        'span': {
            color: "var(--primary-color)",
        },
    },

    ul: {
        listStyle: "none",

        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: "64px",

        '&:last-child': {
            gap: "32px",
        },
    },

    navItems: {
        fontSize: 16,
        fontWeight: 500,
        fontFamily: "var(--plus-jakarta-sans)",
        textTransform: "uppercase",
        color: "var(--secondary-color)",

        cursor: "pointer",
    },

    socialItems: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        width: "42px",
        height: "42px",

        backgroundColor: "var(--secondary-color)",
        borderRadius: "100%",

        'img': {
            width: "45%",
            height: "45%",

            objectFit: "contain",
        },
    },
})

export default FooterStyles