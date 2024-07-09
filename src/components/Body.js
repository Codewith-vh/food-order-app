import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { homePageApi } from "../utils/constants";

const Body = () => {
  let [main, setMain] = useState("");
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(homePageApi);

    const json = await data.json();
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  function searchHandler(e) {
    setMain(e.target.value);
    main = e.target.value;
    let arr = [];
    main != undefined
      ? listOfRestaurants.map((resto) => {
          if (resto.info.name.toLowerCase().includes(main.toLowerCase())) {
            arr.push(resto);
          }
        })
      : console.log();
    setFilteredRestaurant(arr);
  }
  function clickHandler(e) {
    searchHandler(e);
  }

  if (listOfRestaurants.length === 0 && filteredRestaurant.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <div className="body-container">
        <div className="search"></div>
        <input type="text" value={main} onChange={(e) => searchHandler(e)} />

        <button value={main} onClick={(e) => clickHandler(e)}>
          Search
        </button>
        <div className="restroCard-container">
          {filteredRestaurant.map((resto) => (
            <Link
              key={resto.info.id}
              to={"/restaurants/" + resto.info.id}
              className="link-name"
            >
              <RestroCard key={resto.info.id} resto={resto.info} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
};
export default Body;
