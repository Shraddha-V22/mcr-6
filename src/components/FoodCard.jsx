import React from "react";

export default function FoodCard({ restaurantName, dish }) {
  const { name, imgSrc, price, qty } = dish;
  return (
    <div className="w-[200px] overflow-hidden rounded-md border">
      <img src={imgSrc} alt={name} className="h-[200px] w-full object-cover" />
      <div className="flex flex-col p-2">
        <h3 className="font-bold">{name}</h3>
        <p className="text-xs font-medium text-gray-500">
          Rs. {price} for {qty}
        </p>
        <p className="text-xs font-medium text-gray-500">{restaurantName}</p>
      </div>
    </div>
  );
}

// {
//   name: "Margherita Pizza",
//   imgSrc:
//     "https://b.zmtcdn.com/data/dish_photos/9e7/bdf4fa911a76e5ba0656f5adad9749e7.png?output-format=webp",
//   price: 500,
//   qty: "one",
// },
