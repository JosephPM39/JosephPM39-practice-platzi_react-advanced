import React from "react";
import { PhotoCard } from "../PhotoCard";
import { Ul } from "./styled";

export const ListOfPhotoCards = () => {
  return (
    <Ul>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
        <PhotoCard key={id} />
      ))}
    </Ul>
  );
};
