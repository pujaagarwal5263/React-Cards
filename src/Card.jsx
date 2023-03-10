import React from 'react';
import Images from './Images';

function Cards(props){
  return (
      <div className="cards">
      <div className="card">
       <Images imgsrc={props.imgsrc} />
       <div className="card_info">
           <span className="card_category">{props.title}</span>
           <h3 className="card_title">{props.name}</h3>
           <a href={props.link} target="_blank">
               <button className="myBtn">Watch Now</button>
           </a>
       </div>
      </div>
  </div>
  )
}

export default Cards;

