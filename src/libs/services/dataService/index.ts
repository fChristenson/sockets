export class DataService {
  gatherData() {
    return wait({}, 3000);
  }
  processData(any: any) {
    return wait(any, 3000);
  }
  compileData(any: any) {
    return wait(any, 3000);
  }
  analyzeData(any: any) {
    return wait(any, 3000);
  }
}

const wait = (val: any, timeout: number) =>
  new Promise(res => {
    setTimeout(() => {
      res(val);
    }, timeout);
  });
