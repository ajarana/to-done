// I made this so that I wouldn't have to use the classNames package for React anymore; it doesn't have as many features as that package but it does what I need it to.
export function classNames(arr: Array<any> = []) {
  return arr
  .filter(item => {
      const isStr = typeof(item) === "string";

      const isObj = item !== null && typeof(item) === "object" && !Array.isArray(item);

      return isStr || isObj;
  })
  .map(item => {
      const isStr = typeof(item) === "string";

      if (isStr) {
          return item;
      }
      else {
          return Object.keys(item)
          .filter(key => item[key])
      }
  })
  .flat()
  .join(" ");
};