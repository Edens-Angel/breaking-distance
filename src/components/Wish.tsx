import React, { FC } from "react";

interface WishProps {
  name: string;
}

const Wish: FC<WishProps> = ({ name }) => {
  return (
    <div className="wish-message">
      HAPPY BIRTHDAY <span className="highlight">{name.toUpperCase()}</span> !!!
    </div>
  );
};

export default Wish;
