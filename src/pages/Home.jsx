import React from "react";
import { useCuisineData } from "../contexts/cuisineDataProvider";
import Button from "../components/Button";
import RestaurantRow from "../components/RestaurantRow";
import { CUISINE } from "../utils/reducerTypes";

export default function Home() {
  const {
    cuisinesData: { cuisines, restaurants, filteredRestaurants },
    dispatch,
  } = useCuisineData();

  return (
    <section className="my-8 flex flex-col items-center gap-4 text-center">
      <h1 className="text-3xl font-bold capitalize">Food ordering app</h1>
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-semibold">Select your cuisine:</h4>
        <div className="flex flex-wrap gap-2">
          {cuisines?.map((cuisine) => (
            <Button
              onClick={() =>
                dispatch({ type: CUISINE.SELECT, payload: cuisine.id })
              }
              key={cuisine.id}
              btnText={cuisine.name}
            />
          ))}
        </div>
      </div>
      <section className="mt-8 flex flex-col gap-8 text-left">
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantRow key={restaurant.id} restaurant={restaurant} />
        ))}
      </section>
    </section>
  );
}
