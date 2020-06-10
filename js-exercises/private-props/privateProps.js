/* eslint-disable quotes */
function privateProps(obj, isPrivate) {
  const error = new Error("can not access private property directly");
  const typeError = new TypeError(`Can't set property "_private"`);
  const handler = {
    get(target, property) {
      if (isPrivate(property)) throw error;
      const value = Reflect.get(target, property);
      return typeof value === "function" ? value.bind(target) : value;
    },
    set(target, property, value) {
      if (isPrivate(property)) throw typeError;
      return Reflect.set(target, property, value);
    },
    has(target, property) {
      if (isPrivate(property)) return false;
      return property in target;
    },

    ownKeys(target) {
      return Object.keys(target).filter((key) => !isPrivate(key));
    },
    enumerate(target) {
      return Object.keys(target).filter((key) => !isPrivate(key));
    },
    deleteProperty(target, property) {
      if (isPrivate(property)) {
        throw new Error("Access denied");
      }
      return Reflect.deleteProperty(target, property);
    },
  };

  return new Proxy(obj, handler);
}

export { privateProps };
