/* eslint-disable no-lonely-if */
/* eslint-disable quotes */
/* eslint-disable func-names */
function Cycled(input) {
  this.array = input;
  this.currentIndex = 0;
  this.current = function () {
    return this.array[this.currentIndex];
  };

  this.next = function () {
    if (this.currentIndex + 1 >= this.array.length) this.currentIndex = 0;
    else this.currentIndex += 1;
    return this.array[this.currentIndex];
  };

  this.previous = function () {
    if (this.currentIndex - 1 < 0) this.currentIndex = this.array.length - 1;
    else this.currentIndex -= 1;
    return this.array[this.currentIndex];
  };

  this.step = function (value) {
    const newIndex = this.currentIndex + value;
    if (newIndex > this.array.length - 1) this.currentIndex = newIndex - this.array.length;
    else if (newIndex < 0) this.currentIndex = this.array.length + newIndex;
    else this.currentIndex += value;

    return this.array[this.currentIndex];
  };

  this.indexOf = function (value) {
    return this.array.indexOf(value);
  };

  //   return new Array(this.array.length).fill(0).map((val, index) => {
  //     if (index === 0) return this.current();
  //     return this.next();
  //   });
}

Object.defineProperty(Cycled.prototype, "index", {
  get() {
    return this.currentIndex;
  },
  set(value) {
    if (value >= 0 && value < this.array.length) this.currentIndex = value;
  },
});

Cycled.prototype[Symbol.iterator] = function () {
  return {
    next: () => ({ value: this.array[this.currentIndex], done: true }),
  };
};

export { Cycled };
