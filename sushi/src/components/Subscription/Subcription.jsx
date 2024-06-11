import React, { useRef } from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";

import SubcriptionStyles from './SubcriptionStyles'
import { ThemeProvider } from '@emotion/react';

const Subcription = () => {

  const ref = useRef(null)

  return (

    <ThemeProvider theme={SubcriptionStyles}>

      <Box component="section" sx={SubcriptionStyles.container}>

        <Typography component={motion.h2} variant="h2"

          ref={ref}
          sx={SubcriptionStyles.typography.h2}
          variants={SubcriptionStyles.titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          transition={{ duration: 0.75 }}
          >

          Get offers stright <br /> to your inbox

        </Typography>

        <Typography variant="body1" component={motion.p}

          ref={ref}
          sx={SubcriptionStyles.typography.p}
          variants={SubcriptionStyles.textVariants}
          initial="offscreen"
          whileInView="onscreen"
          transition={{ duration: 0.75 }}
          >

          Sign up for the Sushiman newsletter

        </Typography>

        <Stack component={motion.div} flex="1" direction="row" gap="10px" sx={SubcriptionStyles.form}

          ref={ref}
          variants={SubcriptionStyles.formVariants}
          initial="offscreen"
          whileInView="onscreen"
          transition={{ duration: 0.75 }}
        >
          <Input placeholder="Enter your email address" disableUnderline sx={SubcriptionStyles.input} />
          <Button sx={SubcriptionStyles.button}> Get Started </Button>
        </Stack>

      </Box>

    </ThemeProvider>
  )
}

export default Subcription