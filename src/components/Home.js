import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";

import classes from "./Home.module.css";

const Home = () => {
  const [cards, setCards] = useState({});

  useEffect(() => {
    const fetchData = async () => {
        // First API call
        const response1 = await fetch("https://api.pokemontcg.io/v2/cards?q=set.id:sv3pt5", {
          method: "GET",
          headers: {
            "X-Api-Key": "12703c60-623a-4f2a-8c5b-582d91c84c5f"
          },
        });

        const data1 = await response1.json();
        // Set state with the data from the first request
        setCards(data1.data);

        console.log(data1);

        // Second API call
        const response2 = await fetch("https://api.pokemontcg.io/v2/cards?q=set.id:base4", {
          method: "GET",
          headers: {
            "X-Api-Key": "12703c60-623a-4f2a-8c5b-582d91c84c5f"
          },
        });

        const data2 = await response2.json();
        // Append the data from the second request to the existing state
        setCards(prevCards => [...prevCards, ...data2.data]);

        console.log(data2);
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <div className={classes.home}>
      <h1>Welcome to PokeCard Finder!</h1>
      <Searchbar cards={cards}></Searchbar>
    </div>
  );
};

export default Home;
