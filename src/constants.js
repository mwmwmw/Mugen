export const check = probablity => {
  return Math.random() < probablity;
};

export const random_powerlaw = (mini, maxi) => {
  return Math.ceil(
    Math.exp(Math.random() * (Math.log(maxi) - Math.log(mini))) * mini
  );
};

export const countValue = (arr, value = true, start = 0) => {
  return arr.reduce((a, v) => (v === value ? a + 1 : a), start);
};

export const sort = (a, b) => {
  return a < b ? -1 : 1;
}