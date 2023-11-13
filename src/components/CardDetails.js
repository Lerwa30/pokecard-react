import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import classes from './CardDetails.module.css';

const CardDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.pokemontcg.io/v2/cards/${id}`, {
        headers: {
          "X-Api-Key": "12703c60-623a-4f2a-8c5b-582d91c84c5f",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setCard(res.data.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    !isLoading && (
      <div className={classes.container}>
         <img className={classes.img} src={card.images.small} loading="lazy" />
         <div className={classes.info}>
         <div>  
        <h2>{card.name}</h2>
        <h5>{card.supertype}</h5>
        </div> 
        {card.tcgplayer.prices.holofoil ? (
          <div>
            <h3>Low Price: {card.tcgplayer.prices.holofoil.low}</h3>
            <h3>High Price: {card.tcgplayer.prices.holofoil.high}</h3>
            <h3>Current Price: {card.tcgplayer.prices.holofoil.market}</h3>
          </div>
        ) : (
          <div>
            <h3>Low Price: {card.tcgplayer.prices.normal.low}</h3>
            <h3>High Price: {card.tcgplayer.prices.normal.high}</h3>
            <h3>Current Price: {card.tcgplayer.prices.normal.market}</h3>
            
          </div>
        )}
        </div>
      </div>
    )
  );
};

export default CardDetails;
