import React from "react";
import { useState } from "react";
import { useCuisineData } from "../contexts/cuisineDataProvider";
import { CUISINE } from "../utils/reducerTypes";

export default function ReviewModal({ restaurantId, setOpen, open }) {
  const { dispatch } = useCuisineData();
  const [reviewInput, setReviewInput] = useState({
    revName: "",
    comment: "",
    rating: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setReviewInput((prev) => ({ ...prev, [name]: value }));
  };

  const submitReviewHandler = () => {
    if (reviewInput.revName && reviewInput.comment && reviewInput.rating) {
      dispatch({
        type: CUISINE.SUBMIT_REVIEW,
        payload: { restaurantId, reviewInput },
      });
      setOpen(false);
    } else {
      setErrorMsg("Please fill all the fields!");
    }
  };

  return (
    open && (
      <section className="fixed inset-0 grid h-[100vh] w-[100vw] place-items-center bg-black/20">
        <section className="flex w-fit flex-col items-center gap-4 rounded-md bg-orange-600 p-4 text-white">
          <div className="flex w-full justify-between border-b pb-1">
            <div></div>
            <h1 className="text-lg">Add your review</h1>
            <button onClick={() => setOpen(false)} className="">
              X
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <label htmlFor="revName">Name:</label>
              <input
                type="text"
                name="revName"
                id="revName"
                className="rounded-md p-1 indent-1 text-black"
                placeholder="Name"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="rating">Rating:</label>
              <select
                name="rating"
                id="rating"
                className="rounded-md text-black"
                onChange={inputChangeHandler}
              >
                <option>select</option>
                {Array(5)
                  .fill(0)
                  .map((el, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex gap-2">
              <label htmlFor="comment">Comment:</label>
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="2s"
                className="resize-none rounded-md p-1 indent-1 text-black"
                placeholder="Add review..."
                onChange={inputChangeHandler}
              ></textarea>
            </div>
          </div>
          {errorMsg && <p>{errorMsg}</p>}
          <button
            onClick={submitReviewHandler}
            className="rounded-md bg-white px-4 py-2 text-black"
          >
            Submit
          </button>
        </section>
      </section>
    )
  );
}

// rating: 1,
//       comment: "Lackluster flavors and unappealing presentatio",
//       pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0",
//       revName: "Kripla",
//     },
