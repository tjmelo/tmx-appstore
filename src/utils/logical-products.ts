export const logicalProducts = (state: { qtde: number }, action: { type: string }) => {
    switch (action.type) {
        case "increment":
            return { qtde: state.qtde + 1 };
        case "decrement":
            return { qtde: state.qtde - 1 };
        default:
            throw new Error();
    }
};
