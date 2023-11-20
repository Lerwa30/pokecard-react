import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";

import classes from "./Home.module.css";
import pic from "../assets/pokecard.webp";

const Home = () => {
  const [cards, setCards] = useState([]);

  const fetchSets = async (setId) => {
    try {
      const response = await fetch(
        `https://api.pokemontcg.io/v2/cards?q=set.id:${setId}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "12703c60-623a-4f2a-8c5b-582d91c84c5f",
          },
        }
      );

      const data = await response.json();
      setCards((prevCards) => {
        const newCards = data.data.filter(
          (newCard) => !prevCards.some((card) => card.id === newCard.id)
        );
        return [...prevCards, ...newCards];
      });
      console.log(data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchSets("sv3pt5");
        await fetchSets("base4");
        await fetchSets("swsh12pt5");
        await fetchSets("swsh12pt5gg")
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={classes.home}>
        <div
          className={classes.pic}
          style={{
            background: `linear-gradient(
     190deg,
     rgba(0, 0, 0, 0.3),
     rgba(0, 0, 0, 0.1)),
     url(${pic})`,
            backgroundSize: "cover",
          }}
        ></div>
        <Searchbar cards={cards}></Searchbar>
      </div>
    </>
  );
};

export default Home;
