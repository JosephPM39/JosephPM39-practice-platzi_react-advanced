import { useState, useEffect, useRef } from "react";

export const useNearScreen = () => {
  const [show, setShow] = useState(false);
  const element = useRef(null)
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

  return [show, element, setShow]
};
