import React from 'react';
import Grid from "@material-ui/core/Grid";
import style from './dashboard.module.css';
import bottom from '../assests/bottom-header.png';
import AppBar from "./AppBar";
import top from "../assests/top-header.png";

export default function Header() {
   return (
      <div className={style.header}>
         <Grid container>
            <div>
               <img src={top} className={style.imgtop} alt="top"/>
            </div>
            <AppBar/>
            <Grid item lg={12} md={12} xs={12} sm={12}>
               <div className={style.service}>
                  <h3>
                     Сервис для рекламы вашего бизнеса в Telegram каналах
                     Telega — простой и быстрый способ получить заинтересованную целевую аудиторию за несколько часов.
                  </h3>
                  <button>
                     Начать
                  </button>
               </div>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sm={12}>
               <img src={bottom} className={style.imgbottom} alt="bottom"/>
            </Grid>
         </Grid>
      </div>
   )
}