export default class CancelablePromise {
  timeout;
  cancel;
  promise;

  constructor(executor = () => {}, ms) {
    return this.transform(executor, ms);
  }

  transform(executor, ms) {
    const signal = new Promise((resolve, reject) => {
      this.cancel = () => reject(new Error('Promise was cancelled!'));
    });

    this.timeout = ms && setTimeout(() => {
      this.cancel();
    }, ms);

    this.promise = new Promise((resolve, reject) => {
      signal.catch((error) => {
        reject(error);
        clearTimeout(this.timeout);
      });

      executor(resolve, reject);
    });
  }
}
