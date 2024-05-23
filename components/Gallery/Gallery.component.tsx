import React from "react";
import { products_data } from "@/data/products.data";
import Card from "../Card/Card.component";
import * as S from "./Gallery.styles";

const Gallery: React.FC = () => {
  return (
    <S.GalleryWrap>
      {products_data.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </S.GalleryWrap>
  );
};

export default Gallery;
