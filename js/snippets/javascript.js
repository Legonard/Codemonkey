window.CODE_SNIPPETS = window.CODE_SNIPPETS || {};
window.CODE_SNIPPETS["javascript"] = [
`const sum = (a, b) => a + b;
const total = [1, 2, 3, 4].reduce(sum, 0);
console.log(total);`,
`const doubled = [1, 2, 3]
  .map((n) => n * 2)
  .filter((n) => n > 2);
console.log(doubled);`,
`const nested = [[1, 2], [3, 4], [5]];
const flat = nested.flat();
const deep = [1, [2, [3]]].flat(Infinity);
console.log(flat, deep);`,
`const user = { name: 'Ada', age: 36 };
for (const [key, value] of Object.entries(user)) {
  console.log(key + ': ' + value);
}`,
`async function fetchUser(id) {
  const res = await fetch('/api/users/' + id);
  if (!res.ok) throw new Error('Request failed');
  return res.json();
}`,
`function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}`,
`async function run() {
  const results = await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
  ]);
  console.log(results);
}`,
`class Counter {
  constructor(start = 0) {
    this.count = start;
  }
  increment() {
    return ++this.count;
  }
}`,
`class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + ' makes a sound';
  }
}`,
`function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}`,
`function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));`,
`function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(10));`,
`function binarySearch(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}`,
`function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const [pivot, ...rest] = arr;
  const left = rest.filter((n) => n < pivot);
  const right = rest.filter((n) => n >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}`,
`const point = { x: 10, y: 20, z: 30 };
const { x, y, ...others } = point;
console.log(x, y, others);`,
`const settings = { theme: 'dark', size: 12 };
const updated = { ...settings, size: 14 };
console.log(updated);`,
`const counts = new Map();
for (const ch of 'banana') {
  counts.set(ch, (counts.get(ch) || 0) + 1);
}
console.log(counts.get('a'));`,
`const seen = new Set();
const nums = [1, 2, 2, 3, 3, 3];
const unique = nums.filter((n) => {
  if (seen.has(n)) return false;
  seen.add(n);
  return true;
});`,
`function* range(start, end) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}
console.log([...range(0, 5)]);`,
`function* fibGen() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}`,
`function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch (err) {
    console.error('Invalid JSON', err.message);
    return null;
  }
}`,
`class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}`,
`const clamp = (value, min, max) =>
  Math.min(Math.max(value, min), max);
console.log(clamp(15, 0, 10));`,
`const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalize('hello'));`,
`function debounce(fn, wait) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}`,
`function throttle(fn, limit) {
  let waiting = false;
  return function (...args) {
    if (waiting) return;
    fn.apply(this, args);
    waiting = true;
    setTimeout(() => (waiting = false), limit);
  };
}`,
`function memoize(fn) {
  const cache = new Map();
  return function (n) {
    if (cache.has(n)) return cache.get(n);
    const result = fn(n);
    cache.set(n, result);
    return result;
  };
}`,
`function groupBy(items, keyFn) {
  return items.reduce((acc, item) => {
    const key = keyFn(item);
    (acc[key] = acc[key] || []).push(item);
    return acc;
  }, {});
}`,
`const pipe = (...fns) => (x) =>
  fns.reduce((acc, fn) => fn(acc), x);
const addOne = (n) => n + 1;
const double = (n) => n * 2;
console.log(pipe(addOne, double)(3));`,
`const compose = (...fns) => (x) =>
  fns.reduceRight((acc, fn) => fn(acc), x);
const inc = (n) => n + 1;
console.log(compose(inc, inc)(0));`,
`function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}`,
`const people = [
  { name: 'Sam', age: 30 },
  { name: 'Lee', age: 25 },
];
const sorted = [...people].sort(
  (a, b) => a.age - b.age
);
console.log(sorted[0].name);`
];
