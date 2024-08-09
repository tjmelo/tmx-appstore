import React from "react";
import loading from "./loading.module.scss";

export const Loading = (): JSX.Element => {
    return (
        <div role="alert" className={loading.loading}>
            <img alt="" src="/loading.gif" />
        </div>
    );
};
