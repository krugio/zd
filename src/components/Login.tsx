import React, { useState } from "react";
import { Alert, Avatar, Button, Container, CssBaseline, Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'
import Lottie from "lottie-react";
import loginAnimation from "../lotties/login.json";
import loadingAnimation from "../lotties/loading.json";


const Login = () => {

const [user,setUser] = useState("")
const [senha,setSenha] = useState("")
const [resposta,setResposta] = useState("")




function entrar(){
  const postData = {
    "name": user,
    "pass": senha
    
  };
  
  const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  axios.post('https://api-tasks-list.herokuapp.com/user/login/', postData, axiosConfig)
  .then((res) => {
    console.log("RESPONSE RECEIVED: ", res.data);
    console.log(res)
    if(res.data){
      
      alert("let go!")
      setResposta("")
      localStorage.setItem("Token",res.data.data)
    //  window.location.href="/recados"
     
    }else{
      setResposta(res.data.message)
    }
    

    
       })
  .catch((err) => {
    console.log("AXIOS ERROR: ", err.message);
    console.log(err)
    setResposta(`TENTE NOVAMENTE problema:(${err.response.data.error})`)
  })

}



  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sx={{ height: 755, width: "100%", backgroundColor: "darkviolet", display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <Typography variant="h3" align="center" sx={{ fontFamily: "fantasy" }}>
          SISTEMA DE RECADOS
        </Typography>

        <Lottie animationData={loginAnimation} height={400} width={400} />
      </Grid>
      <Grid item xs={6} sx={{ height: "100vh", backgroundColor: "#F7F6F8*" }}>
        <Typography variant="h2" align="center" sx={{ mt: 15 }}>
          {" "}
          Faça seu Login
        </Typography>
        <Container>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Container>
                 {resposta !=="" && <Alert severity="info"   action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setResposta("");
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }>{resposta}</Alert>}
              </Container>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus onChange={(e)=>{setUser(e.target.value)}}/>
                <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={(e)=>{setSenha(e.target.value)}}/>

                <Button type="button" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={()=> entrar()}>
                  ENTRAR
                </Button>
                <Grid container>
                  <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                    Nao tem conta ainda? <a href="/some/valid/uri"> Cadastre-se</a>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Login;
