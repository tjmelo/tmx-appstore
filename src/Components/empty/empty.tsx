import React from "react";
import { Link } from "react-router-dom";
import empty from "./empty.module.scss";

declare interface EmpryProps {}

export const Empty: React.VFC<EmpryProps> =
  (): JSX.Element => {
    return (
      <section className={empty.area}>
        <h1 className={empty.title}>My cart</h1>
        <div className={empty.content}>
          <article>
            <h2 className={empty.titleMessage}>
              {" "}
              Your cart is empty!
            </h2>
            <p className={empty.message}>
              Take advantage of our promotions now!
            </p>
            <Link className={empty.button} to="/">
              START BUY NOW!
            </Link>
          </article>
        </div>
      </section>
    );
  };
