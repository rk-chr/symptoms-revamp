export const searchResults = (arr, val) =>
  arr.filter(result => {
    const regex = new RegExp(val, "gi");
    return result.match(regex);
  });
