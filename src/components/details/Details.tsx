import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Box, Container } from '@mui/system'


import { useParams, Link } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ImgCard from '../../assets/img/baner1.png'


const Detailsx = () => {
  // Pegamos os paramentros!
  const { id } = useParams()
  const { nome } = useParams()
  const { preco } = useParams()

  // Iniciamos os states!
  const [quantidade, setQuantidade] = useState<number>(1)
  const [precoX, setPrecoX] = useState<number>(Number(preco))




  const adicionarProduto = ()=> {
    const listaDados = JSON.parse(localStorage.getItem('Listay') || '[]')
    
    const nomeP = nome;
    const precoP = precoX;
    const quantidadeP = quantidade;
    const novoProduto = {
                           nome: nomeP,
                           preco: precoP,
                           quantidade: quantidadeP 

                         }

     listaDados.push(novoProduto);
      localStorage.setItem("Listay", JSON.stringify(listaDados));

  }

  // Setamos os HOOKs!
  useEffect(() => {
    if (quantidade < 1) {
      setQuantidade(1)
    }

    // Calculamos a quantidade X total
    const calculaQtd = quantidade * Number(preco)

    setPrecoX(calculaQtd)
  }, [quantidade])

  return (
    // Hedader do details
    <>
      <Paper sx={{ height: 50, backgroundColor: '#f6f8f7' }}>
        <Stack
          sx={{ width: '100%', mt: 1, ml: 3, margin: 0, top: 0 }}
          direction="row"
          alignItems="center"
          spacing={1}
        >
          <Link to="/">
            <IconButton aria-label="delete" color="primary">
              <ArrowBackIosIcon />
            </IconButton>
          </Link>
          <Typography variant="h6">Voltar</Typography>
        </Stack>
      </Paper>

      <Grid container sx={{mb:15, mt:5}}>
     <Grid item xs={12} sm={12} md={12} lg={12} sx={{display:'flex', justifyContent:'center'}}>
     <Card sx={{ maxWidth: 545 }}>
     <CardMedia
       component="img"
       height="240"
       image={ImgCard}
       alt="green iguana"
     />
     <CardContent >
       <Typography gutterBottom variant="h5" component="div">
         Bauru do Porto
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Pão cervejinha alface tomate ovo e fritas queijo mussarela
       </Typography>
       <Typography variant="subtitle2" sx={{mt:3}} color="text.secondary">
        R${precoX.toFixed(2)}
       </Typography>
       <Divider sx={{mt:5}}/>
      
       <Grid container sx={{mt:5}}> 
          <Grid item xs={12}>
               <Typography variant='subtitle2'> Obrigatorios </Typography>
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
           <Stack direction='row' sx={{width:'100%'}}>    
               <Typography variant="subtitle1">Sabor 1</Typography>
               <Checkbox sx={{left:250}} />
          </Stack>
          <Stack direction='row' sx={{width:'100%'}}>    
               <Typography variant="subtitle1">Sabor 1</Typography>
               <Checkbox sx={{left:250}} />
          </Stack>
          <Stack direction='row' sx={{width:'100%'}}>    
               <Typography variant="subtitle1">Sabor 1</Typography>
               <Checkbox sx={{left:250}} />
          </Stack>
          </Grid>
       </Grid>
     </CardContent>
   </Card>
   </Grid>
  
  
   </Grid>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#f7f6f8',
          height: 60,
        }}
        elevation={3}
      >
        <Grid container height={60}>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              variant="outlined"
              sx={{ height: 41, mr: 1 }}
              onClick={() => setQuantidade(quantidade + 1)}
            >
              {' '}
              +{' '}
            </Button>
            <TextField
              size="small"
              disabled
              sx={{ width: 55, color: 'black' }}
              value={quantidade}
            />

            <Button
              variant="outlined"
              sx={{ height: 41, ml: 1 }}
              onClick={() => setQuantidade(quantidade - 1)}
            >
              {' '}
              -{' '}
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* <Link to='/'> */}
            <Button variant="contained" sx={{ height: 41 }} onClick={adicionarProduto}>
              {' '}
              Adicionar R${precoX.toFixed(2)}
            </Button>
            {/* </Link> */}
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default Detailsx
