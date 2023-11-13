import React, { useState } from "react";
import { Link } from "react-router-dom";

const Searchbar = ( {cards} ) => {
    const [search, setSearch] = useState("");
    console.log(cards);

    const arr = Object.values(cards);
    const searchCards = arr.filter((card) => {
        let cardName = card.name.toLowerCase();
        let searchInput = search.toLowerCase();
        return cardName.includes(searchInput);
    }).map((card) => {
        console.log(card)
        return (
            <div>
                <Link to={`/details/${card.id}`}>
                <img src={card.images.small}/>
                </Link>
            </div>
        )
    })

    return (
        <section>
            <div>
                <input
                type="text"
                placeholder="Search for a card..."
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                ></input>
            </div>
            {search.length > 2 && (
            <div>{searchCards}</div>
        )}
        </section>
    )
}

export default Searchbar;