/* eslint-disable no-param-reassign */
/* eslint-disable quotes */
const negativeIndex = (input) => {
  const handler = {
    get(target, property, receiver) {
      if (typeof property !== "string") {
        return Reflect.get(target, property, receiver);
      }

      const index = Number(property);

      if (Number.isNaN(index)) {
        return Reflect.get(target, property, receiver);
      }

      return target[index < 0 ? target.length + index : index];
    },
    set(target, property, value, receiver) {
      if (typeof property !== "string") {
        return Reflect.set(target, property, value, receiver);
      }

      const index = Number(property);

      if (Number.isNaN(index)) {
        return Reflect.set(target, property, value, receiver);
      }
      target[index < 0 ? target.length + index : index] = value;

      return true;
    },
  };
  if (!Array.isArray(input)) throw new TypeError("Only arrays are supported");
  return new Proxy(input, handler);
};

export { negativeIndex };
