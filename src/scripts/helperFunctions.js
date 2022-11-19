export const getNumber = (mod) => {
  if (mod >= 0) {
    return "+" + mod;
  } else {
    return mod.toString();
  }
};

export const getElementId = () => {
  return Math.random() * 10;
};

export const capitalize = (s) => {
  if (typeof s !== 'string') return 'NOT A STRING!!!!!!!111111111!!!!!!!!!!!!!!!!!!!11111'
  return s[0].toUpperCase() + s.slice(1)
}
