import React, { useEffect, useState } from 'react'

import { Container } from '@mui/system'

import { Button, CardMedia, Grid, Paper, Typography } from '@mui/material'

import { Link } from 'react-router-dom'
import Img from '../../assets/img/baner1.png'

interface IDataBanco {
  id: string
  nomeCategoria?: string
  descricao: string
  nome: string
  preco: number
}

const Products = () => {
  // State
  // Iniciamos nossa lista de dados como um array vazio!
  const [data, setData] = useState<IDataBanco[]>([])

  function teste() {
    console.log(data)
  }

  // HOOKS!
  // Carregamos as informaçoes vindo do banco!
  useEffect(() => {
    fetch('http://localhost/api/api.php')
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson))
  }, [])

  return (
    <div style={{ marginBottom: 115 }}>
      {data.map((registro, index) =>
        registro.nomeCategoria ? (
          <div style={{ marginTop: 5 }}>
            <Typography variant="h6" sx={{ mb: 2, mt: 5, ml: 5 }}>
              {registro.nomeCategoria}
            </Typography>

            <Paper elevation={4} sx={{ mt: 2, mb: 2, ml: 2, mr: 2 }} hidden>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  sm={8}
                  md={8}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    marginTop: 1,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontSize: 17, ml: 1 }}>
                    {' '}
                    {registro.nome}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontSize: 12, ml: 1 }}>
                    fdsfds
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontSize: 12, ml: 1, mt: 2, fontWeight: 800 }}
                  >
                    R$:00
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={4}
                  sx={{ display: 'flex', justifyContent: 'end' }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 121, height: 100, mr: 1, mt: 1, mb: 1 }}
                    image={Img}
                    alt="picture bauru"
                  />
                </Grid>
              </Grid>
            </Paper>
          </div>
        ) : (
          <div style={{ marginTop: 5 }}>
            <Typography variant="h6" sx={{ mb: 2, mt: 5, ml: 5 }}>
              {registro.nomeCategoria}
            </Typography>

            <Link
              to={`/details/${registro.id}/${registro.nome}/${registro.preco}`}
            >
              <Paper elevation={4} sx={{ mt: 2, mb: 2, ml: 2, mr: 2 }}>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    sm={8}
                    md={8}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      marginTop: 1,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ fontSize: 17, ml: 1 }}
                    >
                      {' '}
                      {registro.nome}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontSize: 12, ml: 1 }}
                    >
                      fdsfds
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontSize: 12, ml: 1, mt: 2, fontWeight: 800 }}
                    >
                      R$:{registro.preco}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={4}
                    sx={{ display: 'flex', justifyContent: 'end' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 121, height: 100, mr: 1, mt: 1, mb: 1 }}
                      image={Img}
                      alt="picture bauru"
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Link>
          </div>
        )
      )}
    </div>
  )
}

// <div style={{ marginBottom: 115 }}>
//   {data.map((registro) => (
//     <div style={{ marginTop: 5 }}>
//       <Typography variant="h6" sx={{ mb: 2, mt: 5, ml: 5 }}>
//         {registro.nomeCategoria}
//       </Typography>

//       <Paper elevation={4} sx={{ mt: 2, mb: 2, ml: 2, mr: 2 }}>
//         <Grid container>
//           <Grid
//             item
//             xs={6}
//             sm={8}
//             md={8}
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               flexDirection: 'column',
//               marginTop: 1,
//             }}
//           >
//             <Typography variant="subtitle2" sx={{ fontSize: 17, ml: 1 }}>
//               {' '}
//               {registro.nome}
//             </Typography>
//             <Typography variant="subtitle1" sx={{ fontSize: 12, ml: 1 }}>
//               fdsfds
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               sx={{ fontSize: 12, ml: 1, mt: 2, fontWeight: 800 }}
//             >
//               R$:00
//             </Typography>
//             <Button onClick={() => console.log(data)}>teste</Button>
//           </Grid>
//           <Grid
//             item
//             xs={6}
//             sm={4}
//             md={4}
//             sx={{ display: 'flex', justifyContent: 'end' }}
//           >
//             <CardMedia
//               component="img"
//               sx={{ width: 121, height: 100, mr: 1, mt: 1, mb: 1 }}
//               image={Img}
//               alt="picture bauru"
//             />
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   ))}
//   {/*  */}
// </div>

export default Products
