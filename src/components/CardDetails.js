import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import classes from "./CardDetails.module.css";

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
        <img className={classes.img} src={card.images.large} loading="lazy" />
        <div>
          <div className={classes.title}>
            <h2>Name: {card.name}</h2>
            <h4>Set: {card.set.name}</h4>
            <h4>Rarity: {card.rarity}</h4>
          </div>
          <p>Prices last updated on {card.tcgplayer.updatedAt}</p>
          {card.tcgplayer.prices.holofoil ? (
            <div className={classes.prices}>
              <h3>Low Price: ${card.tcgplayer.prices.holofoil.low}</h3>
              <h3>High Price: ${card.tcgplayer.prices.holofoil.high}</h3>
              <h3>Current Price: ${card.tcgplayer.prices.holofoil.market}</h3>
            </div>
          ) : (
            <div>
              <h3>Low Price: ${card.tcgplayer.prices.normal.low}</h3>
              <h3>High Price: ${card.tcgplayer.prices.normal.high}</h3>
              <h3>Current Price: ${card.tcgplayer.prices.normal.market}</h3>
            </div>
          )}
          <br></br>
          <div>Purchase card at <a href={card.tcgplayer.url}>TCGPlayer</a></div>
        </div>
      </div>
    )
  );
};

export default CardDetails;
