import React, { useRef, useState, useEffect } from "react";
import { ImgWrapper, Button, Img, Article } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useState(() => {
    try {
      const res = window.localStorage.getItem(`like-${id}`)
      return (JSON.parse(res))
    } catch (e) {
      console.log(e)
      return false;
    };
})
  useEffect(
    function () {
      Promise.resolve(
        typeof window.IntersectionObserver !== "undefined"
          ? window.IntersectionObserver // si existe lo retornamos
          : import("intersection-observer") // acá hacemos import dinámico en caso no exista en el navegador, y retornamos el polyfill
      ).then((IntersectionObserver) => {
        //Usamos intersection observer para analizar si el componente está en el viewport
        const observer = new IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0];
          console.log(isIntersecting);
          if (isIntersecting) {
            //De estarse mostrando, lo renderizamos
            setShow(true);
            observer.disconnect();
          }
        });
        //Desconectamos el observer, puesto solo nos interesa que se ejecute una vez, la cual
        //es cuando ya renderizamos el componente
        observer.observe(element.current);
      });
    },
    [element]
  );

  useEffect(function () {}, [element]);
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(`like-${id}`, JSON.stringify(value))
      setLiked(value)
    } catch (e) {
      console.log(e)
      return false
    }
  }

  const getLocalStorage = () => {
    
  }

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

            <Button onClick={() => setLocalStorage(!liked)}>
              <Icon size={"32px"}/> {likes} likes!
            </Button>
          </>
        )
      }
    </Article>
  );
};
