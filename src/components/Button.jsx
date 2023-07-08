import React from "react";

export default function Button({ btnText, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-md bg-orange-600 px-4 py-2 text-white"
    >
      {btnText}
    </button>
  );
}
