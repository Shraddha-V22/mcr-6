import React from "react";
import FoodCard from "./FoodCard";
import { useNavigate } from "react-router-dom";
import { useCuisineData } from "../contexts/cuisineDataProvider";
import { CUISINE } from "../utils/reducerTypes";

export default function RestaurantRow({ restaurant }) {
  const navigate = useNavigate();
  const { dispatch } = useCuisineData();
  const { name, menu, id } = restaurant;

  return (
    <section
      onClick={() => {
        navigate(`/restaurant/${id}`);
        dispatch({ type: CUISINE.CLEAR_FILTER });
      }}
      className="flex cursor-pointer flex-col gap-4 p-2"
    >
      <h2 className="text-xl font-bold">Dishes by {name}</h2>
      <section className="flex flex-wrap gap-4">
        {menu?.map((dish) => (
          <FoodCard key={dish.name} dish={dish} restaurantName={name} />
        ))}
      </section>
    </section>
  );
}
