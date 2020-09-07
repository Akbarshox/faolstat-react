import React from 'react';
import Wrapper from "../Wrapper";
import style from './whatis.module.css';
import alive from '../assests/alive.png';
import noadd from '../assests/noadd.png';
import auditory from '../assests/auditory.png';
import puff from '../assests/puff.png';

export default function WhatIs() {
   return (
      <div className={style.container}>
         <div className={style.section1}>
            <Wrapper>
               <div className={style.bckg}>Что за Faolstat?</div>
               <h1>ТОЛЬКО ЖИВЫЕ ПОЛЬЗОВАТЕЛИ</h1>
               <img src={alive} alt="alive"/>
               <h4>
                  Faolstat — единственный сервис, где нет каналов с ботами. Именно поэтому эффективность рекламы в
                  телеграм
                  здесь гораздо выше! Мы тщательно следим за активностью всех добавленных каналов.
               </h4>
               <h1>ПРЯМЫЕ РЕКЛАМОДАТЕЛИ БЕЗ ПОСРЕДНИКОВ</h1>
               <img src={noadd} alt="alive"/>
            </Wrapper>
         </div>
         <div className={style.section2}>
            <Wrapper>
               <h4>
                  Мы стараемся оградить пользователей от рекламных агентств и спекулянтов, т.к. считаем, что они смогут
                  найти
                  общий язык сами в нашем сервисе. Telega устроен элементарно просто, поэтому разобраться не составит
                  большого
                  труда.
               </h4>
               <h1>ЗРЕЛАЯ, ЗАИНТЕРЕСОВАННАЯ АУДИТОРИЯ</h1>
               <img src={auditory} alt="alive"/>
               <h4>
                  Средний возраст пользователей Telegram составляет 23-35 лет. Это огромный пласт платежеспособной
                  аудитории,
                  который мы объединили в сервисе Telega.
               </h4>
               <h1>МГНОВЕННЫЙ ЭФФЕКТ</h1>
               <img src={puff} alt="alive"/>
               <h4>
                  Каналы в Telegram обладают очень быстрой отдачей. Мы провели исследование и выяснили, что в среднем с
                  момента публикации поста до ознакомления 80% пользователей проходит менее восьми часов. Соответственно
                  реакция на рекламный материал не заставит себя долго ждать.
               </h4>
            </Wrapper>
         </div>
      </div>
   )
}