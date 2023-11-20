import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Searchbar.module.css";

const Searchbar = ({ cards }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [search, cards]);

  const arr = Object.values(cards);
  const searchCards = arr
    .filter((card) => {
      let cardName = card.name.toLowerCase();
      let searchInput = search.toLowerCase();
      return cardName.includes(searchInput);
    })
    .map((card) => (
      <div key={card.id}>
        <Link to={`/details/${card.id}`}>
          <img src={card.images.small} alt={card.name} />
        </Link>
      </div>
    ));

  return (
    <section>
      <div className={classes.searchbar}>
        <input
          type="text"
          placeholder="Search for a card..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setLoading(true); 
          }}
        />
      </div>
      {loading ? (
        <div className={classes.loading}>Loading...</div>
      ) : (
        search.length > 2 && (
          <div className={classes.results}>{searchCards}</div>
        )
      )}
    </section>
  );
};

export default Searchbar;
