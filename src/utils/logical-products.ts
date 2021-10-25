// export const logicalProducts = (val, type, style) => {
//   console.log(val, type);

//   let valorDiscount = document.querySelector(
//     `.${style.vdiscount} span`
//   );

//   switch (type) {
//     case "add":
//       console.log("Estamos adicionando...");
//       console.log(
//         parseInt(valorDiscount.textContent).toFixed(3)
//       );
//       valorDiscount.textContent = parseFloat(
//         val * parseInt(valorDiscount.textContent).toFixed(2)
//       ).format(2, 3, ".", ",");
//       break;
//     case "sub":
//       console.log("Estamos subtraindo...");
//       break;
//   }
// };

export const logicalProducts = (
  state: any,
  action: any
) => {
  switch (action.type) {
    case "increment":
      return { qtde: state.qtde + 1 };
    case "decrement":
      return { qtde: state.qtde - 1 };
    default:
      throw new Error();
  }
};
