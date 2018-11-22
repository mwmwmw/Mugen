export const check = probablity => Math.random() < probablity;

export const random_powerlaw = (mini, maxi) => {
  return Math.ceil(
    Math.exp(Math.random() * (Math.log(maxi) - Math.log(mini))) * mini
  );
};

export const countValue = (arr, value = true, start = 0) => {
  return arr.reduce((a, v) => (v === value ? a + 1 : a), start);
};

export const sort = (a, b) => a - b;

export const shuffle = (array) => {
  let shuffledArray = array.slice();
  var m = shuffledArray.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = shuffledArray[m];
    shuffledArray[m] = shuffledArray[i];
    shuffledArray[i] = t;
  }
  return shuffledArray;
}