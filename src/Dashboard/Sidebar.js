import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import {DashboardData} from "./JsonData";
import icon from '../assests/bars.svg';
import style from './dashboard.module.css';

const useStyles = makeStyles({
   list: {
      width: 250,
   },
   fullList: {
      width: 'auto',
   },
});

export default function SideBar() {
   const classes = useStyles();
   const [state, setState] = React.useState({
      right: false,
   });

   const toggleDrawer = (anchor, open) => (event) => {
      setState({...state, [anchor]: open});
   };

   const list = (anchor) => (
      <div
         className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
         })}
         role="presentation"
         onClick={toggleDrawer(anchor, false)}
         onKeyDown={toggleDrawer(anchor, false)}
      >
         <Divider/>
         <List>
            {DashboardData.map((e, i) =>
               <ListItem key={i}><p className={style.barText}>{e.name}</p></ListItem>
               )}
         </List>
      </div>
   );

   return (
      <div>
         <React.Fragment>
            <Button onClick={toggleDrawer('right', true)}
                    style={{position: 'absolute', right: 0, zIndex: 1000, top: 10}}><img src={icon} alt="icon"/></Button>
            <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
               {list('left')}
            </Drawer>
         </React.Fragment>
      </div>
   );
}