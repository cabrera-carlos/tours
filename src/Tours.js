import React from "react";
import Tour from "./Tour";

const Tours = ({ list, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {list.map((t) => {
          return <Tour key={t.id} tour={t} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
