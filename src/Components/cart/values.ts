const subtotal = (
  values: object,
  arrayValues: object[]
) => {
  values && arrayValues.push(values);
  const unity = arrayValues.map((e: any) => e.discount);
  const group = unity.reduce(
    (a: number, b: number) => a + b,
    0
  );

  return group;
};

const totalDiscount = (
  values: object,
  arrayValues: object[]
) => {
  values && arrayValues.push(values);
  const unity = arrayValues.map((e: any) => e.total);
  const discount = arrayValues.map((e: any) => e.discount);
  const groupTotal = unity.reduce(
    (a: number, b: number) => a + b,
    0
  );
  const groupDiscount = discount.reduce(
    (a: number, b: number) => a + b,
    0
  );
  return groupTotal - groupDiscount;
};

export { subtotal, totalDiscount };
