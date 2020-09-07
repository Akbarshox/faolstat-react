import React from 'react';
import Grid from '@material-ui/core/Grid';
import Wrapper from "../Wrapper";
import style from './Card.module.css';
import {CardData} from "./CardJsonData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function FullWidthGrid() {

   return (
      <div className={style.root}>
         <Wrapper>
            <div className={style.hot}>Горячие предложения</div>
            <Grid container spacing={3} alignItems="center" justify="center">
               {CardData.map((e, i) =>
                  <Grid item xs={12} sm={3} key={i}>
                     <div className={[style.card, style[e.bgcolor]].join(" ")}>
                        <ul>
                           <li><FontAwesomeIcon icon={e.icon} className={style.icon}/></li>
                           <li>{e.name}</li>
                           <li><FontAwesomeIcon icon={faCheck} /> Аудитория: {e.auditory} тысяч</li>
                           <li><FontAwesomeIcon icon={faCheck} /> Каналов: {e.amount} </li>
                           <li><FontAwesomeIcon icon={faCheck} /> Стоимость: 200$</li>
                           <li><button className={style.cardButton}>Купить</button></li>
                        </ul>
                     </div>
                  </Grid>
               )}
            </Grid>
         </Wrapper>
      </div>
   );
}