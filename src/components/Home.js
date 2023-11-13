import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";

const Home = () => {
  const [cards, setCards] = useState({});

  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v2/cards?q=set.id:sv3pt5", {
        headers: {
          "X-Api-Key": "12703c60-623a-4f2a-8c5b-582d91c84c5f",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setCards(res.data.data)
      });
  }, []);

  return (
    <div>
      Welcome to PokeCard Finder!
      <Searchbar cards={cards}></Searchbar>
    </div>
  );
};

export default Home;
