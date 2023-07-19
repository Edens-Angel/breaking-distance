import React, { FC } from "react";

const Collage: FC = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <h1 className="heading">Recuerdos</h1>
      <div className="countdown-wrapper">
        {data.map((e) => (
          <div
            key={e}
            className="countdown-box background-image"
            style={{
              background: `url(images/${e}.jpeg)`,
              backgroundSize: "cover",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Collage;
