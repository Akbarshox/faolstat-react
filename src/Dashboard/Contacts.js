import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import style from './footer.module.css';
import Grid from "@material-ui/core/Grid";
import {YMaps, Map, Placemark} from 'react-yandex-maps';

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      flexDirection: 'column',
      // marginTop: 50,
      textAlign: 'center'
   },
   main: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
   },
   footer: {
      textAlign: 'center',
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
         theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
   },
}));

export default function Contacts() {
   const classes = useStyles();

   return (
      <div className={[classes.root, style.root].join(" ")}>
         <div className={style.bckg}>Свяжитесь с нами</div>
         <Grid container>
            <Grid item xs={12} sm={6}>
               <Container component="main" className={[classes.main, style.main].join(" ")} maxWidth="sm">
                  <h1>
                     Наши Контакты
                  </h1>
                  <h2>
                     Телефон: <a href="tel:+998902080528" style={{textDecoration: 'none', color: '#000'}}>+99890
                     208-05-28</a>
                  </h2>
                  <h2>
                     Телефон: <a href="tel:+998990555304" style={{textDecoration: 'none', color: '#000'}}>+99899
                     055-53-04</a>
                  </h2>
               </Container>
            </Grid>
            <Grid item xs={12} sm={6}>
               <Container>
                  <div className={style.map}>
                     <YMaps>
                        <Map
                           defaultState={{
                              center: [40.747655, 72.359540],
                              zoom: 15,
                           }}
                           width="auto"
                           height='300px'
                        >
                           <Placemark geometry={[40.747655, 72.359540]}/>
                        </Map>
                     </YMaps>
                  </div>
               </Container>
            </Grid>
         </Grid>

         <footer className={[classes.footer, style.footer].join(" ")}>
            <Container maxWidth="sm">
               <Typography variant="body1">My sticky footer can be found here.</Typography>
               <Typography variant="body2" color="textSecondary">
                  {'Copyright © '}
                  <Link color="inherit" href="https://t.me/faolstat">
                     <p className={style.writeus}>Свяжитесь с нами сейчас</p>
                  </Link>{' '}
                  {new Date().getFullYear()}
                  {'.'}
               </Typography>
            </Container>
         </footer>
      </div>
   );
}