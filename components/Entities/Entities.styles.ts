import styled from "styled-components/native";

export const EntitiesContainer = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
   inset: 0;
    background-color: rgb(60, 65, 207);
`

export const EntitiesWrap = styled.View`
    position: relative;
  
    height: 100%;
    width: 100%;

`


export const DefaultEntity = styled.Image`
    width: 325px;
    height: 325px;

    position: absolute;
    top: 5%;
    right: 3px;
    z-index: 2;

`

export const ExtendedEntity = styled.Image`
    position: absolute;
    bottom: 0;
`