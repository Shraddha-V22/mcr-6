import React from "react";
import { useParams } from "react-router-dom";
import { useCuisineData } from "../contexts/cuisineDataProvider";
import { useMemo } from "react";
import RestaurantInfo from "../components/RestaurantInfo";
import ReviewCard from "../components/ReviewCard";
import ReviewModal from "../components/ReviewModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Restaurant() {
  const {
    cuisinesData: { restaurants },
  } = useCuisineData();
  const { restId } = useParams();
  const navigate = useNavigate();

  const restaurant = useMemo(() => {
    return restaurants.find(({ id }) => id === Number(restId));
  }, [restId, restaurants]);

  const { id, name, address, averageRating, menu, ratings } = restaurant;

  return (
    <section className="mx-auto my-4 max-w-[800px]">
      <button
        onClick={() => navigate("/")}
        className="h-10 w-10 rounded-full text-4xl hover:bg-gray-200"
      >
        ←
      </button>
      <RestaurantInfo
        id={id}
        name={name}
        menu={menu}
        address={address}
        averageRating={averageRating}
      />
      <section className="border-t p-2">
        {ratings?.map((rating) => (
          <ReviewCard ratingData={rating} />
        ))}
      </section>
    </section>
  );
}

// {
//   id: 1,
//   name: "Pizza Palace",
//   cuisine_id: 1,
//   address: "123 Main Street",
//   phone: "555-1234",
//   menu: [
//     {
//       name: "Margherita Pizza",
//       imgSrc:
//         "https://b.zmtcdn.com/data/dish_photos/9e7/bdf4fa911a76e5ba0656f5adad9749e7.png?output-format=webp",
//       price: 500,
//       qty: "one",
//     },
//     {
//       name: "Pepperoni Pizza",
//       imgSrc:
//         "https://b.zmtcdn.com/data/dish_photos/6c9/c89a5e86eece9f96e3b8be3f6bb2c6c9.jpg?output-format=webp",
//       price: 400,
//       qty: "two",
//     },
//     {
//       name: "Pasta Carbonara",
//       imgSrc:
//         "https://b.zmtcdn.com/data/dish_photos/6d8/84eeabf844ca5c9c310a8ed3671086d8.jpg?output-format=webp",
//       price: 250,
//       qty: "one",
//     },
//     {
//       name: "Tiramisu",
//       imgSrc:
//         "https://b.zmtcdn.com/data/o2_assets/87c70510634544f14945f5c2acf173a11632716549.png",
//       price: 300,
//       qty: "one",
//     },
//   ],
//   ratings: [
//     {
//       rating: 2,
//       comment: "Disappointing food and slow service",
//       revName: "Riya",
//       pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
//     },
//     {
//       rating: 2,
//       comment: "Overpriced menu for mediocre quality",
//       pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
//       revName: "Krish",
//     },
//     {
//       rating: 1,
//       comment: "Lackluster flavors and unappealing presentatio",
//       pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0",
//       revName: "Kripla",
//     },
//   ],
//   averageRating: 4.3,
//   description: "Delicious pizzas and pasta.",
// },
