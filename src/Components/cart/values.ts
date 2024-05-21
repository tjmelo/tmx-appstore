const subtotal = (values: object, arrayValues: Array<any>) => {
    values && arrayValues.push(values);
    
    const group = arrayValues
        .map(({ discount }) => discount)
        .reduce((a: number, b: number) => a + b, 0);

    return group;
};

const totalDiscount = (values: object, arrayValues: Array<any>) => {
    values && arrayValues.push(values);
    
    const groupTotal = arrayValues
        .map(({ total }) => total)
        .reduce((a: number, b: number) => a + b, 0);
    
    const groupDiscount = arrayValues
        .map(({ discount }) => discount)
        .reduce((a: number, b: number) => a + b, 0);

    return groupTotal - groupDiscount;
};

export { subtotal, totalDiscount };
