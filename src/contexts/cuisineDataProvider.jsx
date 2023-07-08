import { createContext } from "react";
import { restaurantsData } from "../data/restaurantData";
import { cuisineData } from "../data/cuisineData";
import { useReducer } from "react";
import { cuisineReducer } from "../reducers/cuisineReducer";
import { useContext } from "react";

const CuisineDataContext = createContext();

const initialCuisineData = {
  restaurants: [...restaurantsData],
  cuisines: [...cuisineData],
  filteredRestaurants: [],
};

export default function CuisineDataProvider({ children }) {
  const [cuisinesData, dispatch] = useReducer(
    cuisineReducer,
    initialCuisineData
  );
  return (
    <CuisineDataContext.Provider value={{ cuisinesData, dispatch }}>
      {children}
    </CuisineDataContext.Provider>
  );
}

export const useCuisineData = () => useContext(CuisineDataContext);
