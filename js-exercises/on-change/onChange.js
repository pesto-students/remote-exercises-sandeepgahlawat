/* eslint-disable quotes */
const onChange = (obj, onChangeFn) => {
  const handler = {
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver);
      if (typeof value === "object") {
        return new Proxy(value, handler);
      }
      return value;
    },
    set(target, property, value) {
      onChangeFn();
      return Reflect.set(target, property, value);
    },
    deleteProperty(target, property) {
      onChangeFn();
      return Reflect.deleteProperty(target, property);
    },

    defineProperty(target, property, desc) {
      onChangeFn();
      return Reflect.defineProperty(target, property, desc);
    },
  };

  return new Proxy(obj, handler);
};

export { onChange };
