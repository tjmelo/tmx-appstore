export const resetValues = (val, a = false) => {
  let options = val;
  for (let opt of options) {
    a
      ? opt.classList.remove(`${detail.warning}`)
      : opt.parentNode.classList.remove(
          `${detail.warning}`
        );
    opt.parentNode
      .querySelector(`.${detail.messageWarning}`)
      .classList.remove(`${detail.warningShow}`);
  }
};
