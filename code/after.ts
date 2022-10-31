import { dict, separator, offset } from "./constants";

const getIndex = (index: number, offset: number) =>
  (index + offset) % dict.length;

const getLetterWithOffset = (letter: string) => {
  const index = dict.indexOf(letter);
  return dict[getIndex(index, offset)];
};

const transform = (letter: string) => {
  return dict.includes(letter) ? getLetterWithOffset(letter) : letter;
};

export const convert = (str: string) => {
  return str.split(separator).map(transform).join(separator);
};