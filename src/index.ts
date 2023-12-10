class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let number = ArrayUtils.wrapInArray(1);
let string = ArrayUtils.wrapInArray("a");
