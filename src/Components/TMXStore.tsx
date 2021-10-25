import React from "react";

interface TMXStoreProps {
  children: JSX.Element | JSX.Element[];
}

const TMXStore: React.VFC<TMXStoreProps> = ({
  children,
}): JSX.Element => {
  return (
    <section data-testid="tmx-store-scope" className="grid">
      {children}
    </section>
  );
};

export { TMXStore as default };
