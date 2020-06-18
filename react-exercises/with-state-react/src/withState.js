import React, { Component } from 'react';

const withState = (stateName, stateUpdaterName, initialState) => (SuppliedComponent) => {
  return class WithState extends Component {
    state = {
      value: this.isFunction(initialState) ? initialState(this.props) : initialState,
    };

    isFunction(obj) {
      return typeof obj === 'function';
    }

    updateStateFn = (updateFn, callback) => {
      this.setState(
        ({ value }) => ({
          value: this.isFunction(updateFn) ? updateFn(value) : updateFn,
        }),
        callback
      );
    };

    render() {
      return React.cloneElement(<SuppliedComponent />, {
        [stateUpdaterName]: this.updateStateFn,
        [stateName]: this.state.value,
        ...this.props,
      });
    }
  };
};

export default withState;
