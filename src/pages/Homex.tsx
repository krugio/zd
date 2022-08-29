import { AppBar, Box, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import Lottie from "lottie-react";

import Pricing from "../components/Price";

import "./Home.css";
import Teste from "../lotties/qa.json";
import Img from "../assets/img/4782.png";
import Img1 from '../assets/img/4545.png';

const Homex = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "purple" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ maxWidth: 500 }}>
              <Grid sx={{ display: "flex", justifyContent: "center", alignContent: "space-around", maxWidth: 1200 }}>
                <Grid item xs={5}>
                  1
                </Grid>
                <Grid item xs={1}>
                  1
                </Grid>
                <Grid item xs={1}>
                  1
                </Grid>
                <Grid item xs={1}>
                  1
                </Grid>
              </Grid>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Grid>
        <Grid item xs={12} sx={{mt:7, ml:15}}>
            <ul style={{display:'flex', flexDirection:'row', fontSize:25, listStyleType:'none'}}>
              
                <li>
                  <a href="#aaa" style={{marginLeft:25,textDecoration:'none'}}>Projects</a>
                </li>
                <li>
                  <a href="#aaa" style={{marginLeft:25}}>Docs</a>
                </li>
                <li>
                  <a href="#aaa" style={{marginLeft:25}}>Examples</a>
                </li>
            </ul>            
        </Grid>
      </Grid>
    </>
  );
};

export default Homex;
