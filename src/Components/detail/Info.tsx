import { useDispatch } from "react-redux";
import React, { useState, useEffect, lazy} from "react";
import { productItems } from "../../features/product/productSlice";
import { useNavigate } from "react-router-dom";
import { TProductElement } from "./Detail";
import detail from "./detail.module.scss";

const Color = lazy(() => import("./Components/Color"));
const Size = lazy(() => import("./Components/Size"));
const Price = lazy(() => import("./Components/Price"));

export type TInfo = {
    product:[],
    element: TProductElement
}

const Info = ({product, element}: TInfo) => {

    const link = useNavigate();
    const dispatch = useDispatch();
    
    const getInterestItem = Number(localStorage.getItem('INTEREST_ITEM'));
    const choosenProduct = product.filter(({id}) => id === getInterestItem)
    
    const [color, setColor] = useState<string | null>(null);
    const [size, setSize] = useState<string | null>(null);

    const [verify, setVerify] = useState<{
        toVerifyColor: boolean;
        toVerifySize: boolean;
    } | null>(null);

    useEffect(() => {
        color && size && setVerify({ 
            toVerifyColor: !!color, 
            toVerifySize: !!size 
        });
    }, [color, size]);


    const getColor = (value: string) => setColor(value);
    const getSize = (value: string) => setSize(value);

    
    const toBuy = () => {
        setVerify({ toVerifyColor: !!color, toVerifySize: !!size });

        if (verify?.toVerifyColor && verify?.toVerifySize) {
            dispatch(
                productItems({
                    index: Math.random() * 100,
                    colorChoose: color,
                    sizeChoose: size,
                    ...choosenProduct[0] as object
                })
            );
            link("/cart");
        }
    };

    return (
        <div className={detail.info} data-testid="test-information">
            <Price price={element?.price} discount={element?.discount} />
            <Color
                color={element?.color}
                changeColor={getColor}
                verify={verify && verify.toVerifyColor}
            />
            <Size size={element?.size} changeSize={getSize} verify={verify && verify.toVerifySize} />

            {element?.promotion && (
                <div className={detail.note}>
                    <strong>Promotion available for this product!</strong>
                    <p>{element?.promotion}</p>
                </div>
            )}

            <button className={detail.btnBuy} onClick={toBuy}>
                Buy
            </button>
        </div>
    );
};

export{ Info as default }
