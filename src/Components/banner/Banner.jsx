import React, { useEffect, useRef } from "react";
import banner from "./banner.module.scss";
import "flickity/dist/flickity.min.css";
import Flickity from "flickity";

export const Banner = () => {
  const elem = useRef(null);
  useEffect(() => {
    elem.current = document.querySelector(".slider");
    new Flickity(elem.current, {
      cellAlign: "left",
      autoPlay: 7500,
      pauseAutoPlayOnHover: false,
    });
  }, []);

  return (
    <section className={banner.area}>
      <h1 className={banner.title}>Produtos</h1>
      <h2 className="subTitle">Promoções em destaque</h2>
      <section
        data-testid="banner"
        ref={elem}
        className={`slider ${banner.slide}`}
      >
        <div></div>
        <div></div>
      </section>
    </section>
  );
};
