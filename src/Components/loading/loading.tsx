import React from "react";
import loading from "./loading.module.scss";

export const Loading = (): JSX.Element => {
    return (
        <div role="alert" className={loading.loading}>
            <img alt="" src={`${process.env.PUBLIC_URL}/loading.gif`}/>
        </div>
    );
};
