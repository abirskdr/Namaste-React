import { useState } from 'react';
import { restaurantList } from '../config';
import RestaurantCard from './RestaurantCard';

function filterData(searchTxt, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchTxt)
  );
  return filteredData;
}

const Body = () => {
  const [searchTxt, setsearchTxt] = useState('');
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setsearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div class="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
