import React from 'react';
import thumbnails from './thumbnails.module.scss';

declare interface ThumbnailsProps {
    image: string,
    title: string,
}

export const Thumbnails:React.VFC<ThumbnailsProps> = ({
    image,
    title,
}) => {
    return(
        <div className={thumbnails.thumbnails}>
            <figure>
            <img
                src={image}
                alt={title}
                title={title}
            />
            </figure>
            <figure>
            <img
                src={image}
                alt={title}
                title={title}
            />
            </figure>
            <figure>
            <img
                src={image}
                alt={title}
                title={title}
            />
            </figure>
            <figure>
            <img
                src={image}
                alt={title}
                title={title}
            />
            </figure>
        </div>
    )
}