import React, { useRef, useState, useEffect } from "react";
import { ImgWrapper, Button, Img, Article } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [liked, setLiked] = useLocalStorage(`like-${id}`, false);
  const [show, element] = useNearScreen() 
  useEffect(function () {}, [element]);
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={element}>
      {
        //Renderizamos según sea el estado
        show && (
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>

            <Button onClick={() => setLiked(!liked)}>
              <Icon size={"32px"} /> {likes} likes!
            </Button>
          </>
        )
      }
    </Article>
  );
};
