import { CUISINE } from "../utils/reducerTypes";

export const cuisineReducer = (state, { type, payload }) => {
  switch (type) {
    case CUISINE.SELECT:
      return {
        ...state,
        filteredRestaurants: state.restaurants.filter(
          ({ cuisine_id }) => cuisine_id === payload
        ),
      };
    case CUISINE.SUBMIT_REVIEW:
      return {
        ...state,
        restaurants: state.restaurants.map((rest) =>
          rest.id === payload.restaurantId
            ? {
                ...rest,
                ratings: [
                  ...rest.ratings,
                  {
                    ...payload.reviewInput,
                    pp: "https://tse3.mm.bing.net/th?id=OIP.D8z-01L15DnYmN3pT-veJQHaHa&pid=Api&P=0&h=180",
                  },
                ],
                averageRating: (
                  (rest.ratings.reduce(
                    (acc, { rating }) => acc + Number(rating),
                    0
                  ) +
                    Number(payload.reviewInput.rating)) /
                  (rest.ratings.length + 1)
                ).toFixed(1),
              }
            : rest
        ),
      };
    default:
      return state;
  }
};
