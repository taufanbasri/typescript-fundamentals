class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, "Apple");
let pair2 = new KeyValuePair('a', "Apple");
