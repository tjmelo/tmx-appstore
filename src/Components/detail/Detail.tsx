import React, { useEffect, useState, lazy, ReactNode } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Breadcrumbs = lazy(() => import("./Components/Breadcumbs"));
const Thumbnails = lazy(() => import("./Components/Thumbnails"));
const Image = lazy(() => import("./Components/Image"));
const Info = lazy(() => import("./Info"))

import { URLPRODUCTS } from "../../constants";
import detail from "./detail.module.scss";

type DetailProps = ReactNode | unknown

export type TProductElement = {
    type: string,
    name: string,
    category: string,
    title: string,
    image: string,
    price: number,
    discount: number,
    color: [],
    size: [],
    promotion: string
}

export const Detail: React.FC<DetailProps> = (): JSX.Element => {
    const { id } = useParams();
    const [product, setProduct] = useState<[]>([]);

    const getDataFromAPI = async () => {
        const getAllProducts = await axios.get(URLPRODUCTS);
        const { data } = getAllProducts;
        setProduct(data);
    }
    
    useEffect(() => { getDataFromAPI() }, [id]);
    
    const getInterestItem = Number(localStorage.getItem('INTEREST_ITEM'));
    const getDetailChoosenItem = product.filter(({id}) => id === getInterestItem)
    const productElement: TProductElement = getDetailChoosenItem[0];

    const sendInfoProducts = {
        element: productElement,
        product
    }

    return (
        <section>
            <h2 className="title">Product</h2>
            <Breadcrumbs
                category={productElement?.category}
                name={productElement?.name}
                type={productElement?.type}
            />

            <h1 data-testid="test-title">{productElement?.title}</h1>
            <div className={detail.details}>
                <div className={detail.images} data-testid="test-images">
                    <Thumbnails image={productElement?.image} title={productElement?.title} />
                    <Image image={productElement?.image} title={productElement?.title} />
                </div>
                <Info {...sendInfoProducts}/>
            </div>
        </section>
    );
};
