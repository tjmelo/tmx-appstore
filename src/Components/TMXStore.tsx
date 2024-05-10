import React from "react";

type TMXStoreProps = {
  children: JSX.Element | JSX.Element[];
}

const TMXStore: React.FC<TMXStoreProps> = ({
  children,
}): JSX.Element => {
  return (
    <section className="grid">
      {children}
    </section>
  );
};

export { TMXStore as default };
