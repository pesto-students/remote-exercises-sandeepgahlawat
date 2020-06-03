/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable quotes */
/* eslint-disable no-loop-func */
const allSettled = (inputPromises) =>
  new Promise((resolve) => {
    let completedPromises = 0;
    const results = [];
    for (const promise of inputPromises) {
      promise
        .then((value) => {
          results.push({ status: "fulfilled", value });
          completedPromises += 1;
          if (completedPromises === inputPromises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          results.push({ status: "rejected", reason: error });
          if (completedPromises === inputPromises.length) {
            resolve(results);
          }
        });
    }
  });

export { allSettled };
