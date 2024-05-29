import React from "react";
import style from "./image.module.scss";

type ImageProps = {
    image: string;
    title: string;
};

export const Image: React.FC<ImageProps> = ({ image, title }): JSX.Element => {
    return (
        <div data-testid="test-image" className={style.view}>
            <img src={image} alt={title} title={title} />
        </div>
    );
};
