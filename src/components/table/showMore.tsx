"use client";
import { useState } from "react";

type values = {
  sinopsis: string;
  maxLength: number;
};
const ShortenedSinopsis = ({ sinopsis, maxLength }: values) => {
  const [showFull, setShowFull] = useState(false);
  const shortenedSinopsis = showFull
    ? sinopsis
    : sinopsis.substring(0, maxLength);
  return (
    <div className="">
      <p>{shortenedSinopsis}</p>
      {sinopsis.length > maxLength && (
        <button
          className="mt-2 text-blue-300 underline"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? "Showless" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default ShortenedSinopsis;
