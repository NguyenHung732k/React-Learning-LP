import React from "react";

import background from "../../assets/subscribe_bg.png";
import { createTheme } from "@mui/material";


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

const SubcriptionStyles = createTheme({

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "column",

    padding: "64px",

    backgroundColor: "var(--primary-color)",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",

    [theme.breakpoints.down('sm')]: {
      padding: "64px 32px",
    },

  },

  form: {
    minWidth: "480px",
    marginTop: "40px",

    padding: "14px 14px 14px 24px",


    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "46px",

    [theme.breakpoints.down('sm')]: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",

      minWidth: "100%",
      borderRadius: "20px",
      padding: 0,
      border: "none",
    },

  },

  input: {
    flex: 1,

    fontSize: 16,
    fontWeight: 400,
    fontFamily: "var(--plus-jakarta-sans)",

    color: "#fff",
    opacity: 0.5,

    background: "transparent",
    border: "none",
    outline: "none",

    [theme.breakpoints.down('sm')]: {
      minHeight: "50px",

      border: "1px solid rgba(255, 255, 255, 0.5)",
      padding: "10px 20px",
      borderRadius: "30px",
    },
  },

  button: {
    padding: "20px",

    minWidth: "180px",

    fontSize: 16,
    fontWeight: 500,
    fontFamily: "var(--plus-jakarta-sans)",
    color: "#fff",
    textAlign: "center",

    background: "var(--black-400)",
    borderRadius: "46px",
    border: "none",
    outline: "none",

    cursor: "pointer",

    [theme.breakpoints.down('sm')]: {
      minWeight: "100%",
    },

  },

  typography: {

    h2: {
      fontSize: 88,
      fontFamily: "var(--playfair-display)",
      fontWeight: 600,
      lineHeight: "123px",

      color: "#fff",
      textAlign: "center",

      [theme.breakpoints.down('sm')]: {
        fontSize: 88,
        lineHeight: "100px",
      },

    },

    p: {
      fontSize: 18,
      fontFamily: "var(--plus-jakarta-sans)",
      fontWeight: 300,
      lineHeight: "36px",

      marginTop: "32px",

      color: "rgba(255, 255, 255, 0.8)",
    }
  },

  titleVariants: {
    offscreen: {
      transform: "rotateX(180deg)",
      opacity: 1,
    },

    onscreen: {
      transform: "rotateX(0deg)",
      opacity: 1,
    },

    transition: "transform 2s",
  },

  textVariants: {
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

  formVariants: {
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

});

export default SubcriptionStyles;
