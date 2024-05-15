import React, { ReactNode, useEffect, useRef } from "react";
import Flickity from "flickity";

import "flickity/dist/flickity.min.css";
import banner from "./banner.module.scss";

type BannerProps = ReactNode | unknown

export const Banner: React.FC<BannerProps> = () => {
    const elem = useRef<HTMLElement | null>(null);

    const toFlickity = () => {
        let alpha: Element | null = elem.current;
        alpha = document.querySelector(".slider");
        
        new Flickity(alpha!, {
          cellAlign: "left",
          autoPlay: 7500,
          pauseAutoPlayOnHover: false,
        });
    }

    useEffect(() => { toFlickity() }, []);

    return (
      <section className={banner.area}>
        <h1 className={banner.title}>Products</h1>
        <h2 className="subTitle">Featured Promotions</h2>
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
