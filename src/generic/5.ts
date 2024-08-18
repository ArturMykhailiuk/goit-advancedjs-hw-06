/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}

const pair1: KeyValuePair<string, number> = {
  key: 'id',
  value: 123
};

const pair2: KeyValuePair<number, boolean> = {
  key: 1,
  value: true
};


export {};