import React, { useEffect, useState, lazy } from "react";
import { useParams, useNavigate } from "react-router-dom";

import detail from "./detail.module.scss";

import { URLPRODUCTS } from "../../constants"

import { useDispatch } from "react-redux";
import { productItems } from "../../features/product/productSlice";
import axios from "axios";

const Breadcrumbs = lazy(
  () => import("./Components/Breadcumbs")
);
const Color = lazy(() => import("./Components/Color"));
const Size = lazy(() => import("./Components/Size"));
const Price = lazy(() => import("./Components/Price"));
const Thumbnails = lazy(
  () => import("./Components/Thumbnails")
);
const Image = lazy(() => import("./Components/Image"));

declare interface DetailProps {}

export const Detail: React.VFC<DetailProps> =
  (): JSX.Element => {
    const link: any = useNavigate();
    let { id } = useParams<{ id?: undefined }>();

    const dispatch = useDispatch();

    const [product, setProduct] = useState<string>("");
    useEffect(() => {
      const allProducts = async () => await axios.get(URLPRODUCTS);
      allProducts().then((a) => setProduct(a.data));
    }, [id]);

    const productElement = id ? product[id - 1] : 0;

    const [color, setColor] = useState<string | null>(null);
    const [size, setSize] = useState<string | null>(null);
    const [verify, setVerify] = useState<{
      c: boolean;
      s: boolean;
    } | null>(null);
    useEffect(() => {
      color && size && setVerify({ c: !!color, s: !!size });
    }, [color, size]);

    const getColor = (value: string) => setColor(value);
    const getSize = (value: string) => setSize(value);

    const toBuy = () => {
      setVerify({ c: !!color, s: !!size });

      if (verify?.c && verify?.s) {
        dispatch(
          productItems({
            index: Math.random() * 100,
            colorChoose: color,
            sizeChoose: size,
            ...product[Number(id) - 1],
          })
        );
        link("/cart");
      }
    };

    return (
      <section>
        <h2 className="title">Product</h2>
        <Breadcrumbs
          type={productElement?.type}
          name={productElement?.name}
          category={productElement?.category}
        />

        <h1>{productElement?.title}</h1>
        <div className={detail.details}>
          <div className={detail.images}>
            <Thumbnails
              image={productElement?.image}
              title={productElement?.title}
            />
            <Image
              image={productElement?.image}
              title={productElement?.title}
            />
          </div>

          <div className={detail.info}>
            <Price
              price={productElement?.price}
              discount={productElement?.discount}
            />
            <Color
              color={productElement?.color}
              changeColor={getColor}
              verify={verify && verify.c}
            />
            <Size
              size={productElement?.size}
              changeSize={getSize}
              verify={verify && verify.s}
            />

            {productElement?.promotion && (
              <div className={detail.note}>
                <strong>
                  Promotion available for this product!
                </strong>
                <p>{productElement?.promotion}</p>
              </div>
            )}

            <button
              className={detail.btnBuy}
              onClick={toBuy}
            >
              Buy
            </button>
          </div>
        </div>
      </section>
    );
  };
