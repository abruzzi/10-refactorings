export const convert = (str: string) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str
    .split("")
    .map((c) => {
      const index = letters.indexOf(c);
      if (index !== -1) {
        if (index + 13 >= 26) {
          return letters[index + 13 - 26];
        } else {
          return letters[index + 13];
        }
      }
      return c;
    })
    .join("");
};
