import React from "react";

const VerseNumber = ({ number }) => {
  return (
    <span className="inline-flex items-center justify-center mr-1 w-18 h-18 text-center text-3xl font-bold align-middle">
      {number.toLocaleString("ar-EG")}
    </span>
  );
};

export default VerseNumber;
