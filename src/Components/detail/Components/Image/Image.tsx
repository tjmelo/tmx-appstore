import React from 'react';
import style from './image.module.scss'

declare interface ImageProps {
    image: string,
    title: string
}

export const Image: React.VFC<ImageProps> = ({
    image,
    title
}):JSX.Element => {
    return(
        <div className={style.view}>
            <img
            src={image}
            alt={title}
            title={title}
            />
        </div>
    )
}