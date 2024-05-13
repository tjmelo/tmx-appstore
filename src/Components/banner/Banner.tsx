import React, { useEffect, useRef } from "react";
import banner from "./banner.module.scss";
import "flickity/dist/flickity.min.css";
import Flickity from "flickity";

interface BannerProps {}

export const Banner: React.VFC<BannerProps> =
  (): JSX.Element => {
    const elem = useRef<HTMLElement | null>(null);
    let alpha: Element | null = elem.current;
    useEffect(() => {
      alpha = document.querySelector(".slider");
      new Flickity(alpha!, {
        cellAlign: "left",
        autoPlay: 7500,
        pauseAutoPlayOnHover: false,
      });
    }, []);

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
