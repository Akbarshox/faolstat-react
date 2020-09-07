import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ScrollIntoView from 'react-scroll-into-view'
import {DashboardData} from './JsonData';
import plus from '../assests/plus.svg';
import style from './dashboard.module.css';
import Elevation from "./Elevation";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SideBar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
}));

export default function ButtonAppBar() {
   const classes = useStyles();
   const matches = useMediaQuery('(max-width:1205px)')
   return (
      <div className={classes.root}>
         <Elevation>
            <AppBar position="fixed" style={{backgroundColor: '#48C5F0'}}>
               <Toolbar>
                  <Typography variant="h5" className={classes.title}>
                     <p className={style.faolstat}>FaolStat .</p>
                  </Typography>
                  <ul className={style.appbar}>
                     {DashboardData.map((el, i) =>
                        <li key={i}>
                           <ScrollIntoView selector={el.link} smooth={true}>
                              <img src={plus} alt="plus" className={style.plus}/>{el.name}
                           </ScrollIntoView>
                        </li>
                     )}
                  </ul>
                  {matches === true ? <SideBar/> : null}
               </Toolbar>
            </AppBar>
         </Elevation>
      </div>
   );
}