import React from "react";
import { PhotoCard } from "../PhotoCard";
import { Ul } from "./styled";
import { useQuery, gql } from "@apollo/client";

const withPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCards = () => {
  const {loading, error, data} = useQuery(withPhotos)
  if(error){
    return <h2>Internal Server Error</h2>

  }
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </Ul>
  );
};
