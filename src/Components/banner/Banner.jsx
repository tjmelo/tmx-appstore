import React, { useEffect } from "react";
import banner from "./banner.module.css";
import "flickity/dist/flickity.min.css";
import Flickity from "flickity";

export const Banner = () => {
  useEffect(() => {
    const elem = document.querySelector(".slider");
    new Flickity(elem, {
      cellAlign: "left",
      autoPlay: 7500,
      pauseAutoPlayOnHover: false,
    });
  }, []);

  return (
    <section className={banner.area}>
      <h1 className="title">Produtos</h1>
      <h2 className="subTitle">Promoções em destaque</h2>
      <section className={`slider ${banner.slide}`}>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/banner1.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/banner2.jpg`}
            alt=""
          />
        </div>
      </section>
    </section>
  );
};
