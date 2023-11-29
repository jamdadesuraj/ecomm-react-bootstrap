import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const RatingStar = ({ stars, reviews }) => {
  const ratingsStars = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <AiFillStar className="text-warning" />
        ) : stars >= number ? (
          <BsStarHalf className="text-warning" />
        ) : (
          <AiOutlineStar className="text-warning" />
        )}
      </span>
    );
  });

  return (
    <>
      {ratingsStars}
      <p>({reviews} customer reviews)</p>
    </>
  );
};

export default RatingStar;
