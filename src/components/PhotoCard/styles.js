import styled from "styled-components";
import { fadeIn } from '../../styles/animation'

//Agregamos un nuevo estilo, el cual declara la altura mínima, esto debe ser así,
// puesto caso contrario, todos los articles de las photoCards, tendrían altura 0
// al inicio, generando que intersection observer los vea a todos en el viewport
// y se renderizen absolutamente todos, arruinando el lazy load
export const Article = styled.article`
  min-height: 200px;
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`
