import { AppBar, Box, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import Lottie from "lottie-react";

import Pricing from "../components/Price";

import "./Home.css";
import Teste from "../lotties/qa.json";
import Img from "../assets/img/4782.png";
import Img1 from '../assets/img/4545.png';

const Home = () => {
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
      <Typography variant="h3" align="center" sx={{ mt: 2, fontFamily: "fantasy" }}>
        Your all-in-one visual review platform
      </Typography>
      <Typography variant="subtitle2" align="center">
        The new way to design, develop, and deliver software with confidence.
        <Grid>
          <Grid xs={12} sx={{ mt: 3 }}>
            <Button variant="outlined">Request Demo</Button>
          </Grid>
        </Grid>
      </Typography>
      <Grid sx={{ position: "relative", top: -75 }}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ height: 600, width: 700 }}>
            <Lottie animationData={Teste} height={100} width={100} />
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Container>
          <Paper elevation={3}>
            <Typography variant="h3">Automate manual QA</Typography>
            <Grid sx={{ display: "flex", flexDirection: "row" }}>
              <Grid item xs={12} md={4} sx={{ height: "100%", width: "100%", display: "flex", justifyContent: "center" }}>
                <img src={Img} alt="sadsa" />
              </Grid>
              <Grid item md={8} xs={12} sx={{ display: "flex", justifyContent: "center", width: "100%", height: "100%", alignItems: "center", mt: 5 }}>
                <ul>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem adipisci quisquam, atque odit esse fugiat tempora numquam, maiores, sapiente et iste expedita. Ipsam reprehenderit dolor vel aperiam cum reiciendis eum.</li>
                  <br />
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem adipisci quisquam, atque odit esse fugiat tempora numquam, maiores, sapiente et iste expedita. Ipsam reprehenderit dolor vel aperiam cum reiciendis eum.</li>
                </ul>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Container sx={{ marginTop: 15 }}>
          <Paper elevation={4}>
            <Typography variant="h3" align="right">
              Deploy with confidence
            </Typography>
            <Grid sx={{ display: "flex", flexDirection: "row" }}>
              <Grid item md={8} xs={12} sx={{ display: "flex", justifyContent: "center", width: "100%", height: "100%", alignItems: "center", mt: 5 }}>
                <ul>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem adipisci quisquam, atque odit esse fugiat tempora numquam, maiores, sapiente et iste expedita. Ipsam reprehenderit dolor vel aperiam cum reiciendis eum.</li>
                  <br />
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem adipisci quisquam, atque odit esse fugiat tempora numquam, maiores, sapiente et iste expedita. Ipsam reprehenderit dolor vel aperiam cum reiciendis eum.</li>
                </ul>
              </Grid>
              <Grid item xs={12} md={4} sx={{ height: "100%", width: "100%", display: "flex", justifyContent: "center" }}>
                <img src={Img1} alt="sadsa" height="400" />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      <Pricing />
      <br />
    </>
  );
};

export default Home;
