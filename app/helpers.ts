export const capitaliseFirstLetteOfEachWord = (word: string) => {
  return word
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
