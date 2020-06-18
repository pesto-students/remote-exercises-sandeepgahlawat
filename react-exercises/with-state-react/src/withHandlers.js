import React, { Component } from 'react';
const withHandlers = (handlers) => (SuppliedComponent) => {
  return class withHandlers extends Component {
    mapValues = (obj, func) => {
      const result = {};
      for (const key of Object.getOwnPropertyNames(obj)) {
        result[key] = func(obj[key], key);
      }
      return result;
    };

    handlers = this.mapValues(
      typeof handlers === 'function' ? handlers(this.props) : handlers,
      (createhandlers) => (...args) => {
        const handler = createhandlers(this.props);

        if (typeof handler !== 'function') console.log('handler should be a curried function');
        return handler(...args);
      }
    );

    render() {
      return React.cloneElement(<SuppliedComponent />, { ...this.props, ...this.handlers });
    }
  };
};

export default withHandlers;
