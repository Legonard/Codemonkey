/* ============================================================
   snippets.js — the code you type
   Each language holds an array of ready-to-type snippets.
   Snippets use spaces (never tabs) and have no trailing
   whitespace; app.js auto-fills leading indentation so you
   only ever type the meaningful characters.
   ============================================================ */
(function () {
  "use strict";

  window.LANGUAGES = [
    { id: "javascript", name: "javascript" },
    { id: "python",     name: "python" },
    { id: "typescript", name: "typescript" },
    { id: "java",       name: "java" },
    { id: "cpp",        name: "c++" }
  ];

  window.CODE_SNIPPETS = {
    /* ---------------- JavaScript ---------------- */
    javascript: [
`function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}`,
`async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("HTTP " + res.status);
  }
  return res.json();
}`,
`function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}`,
`class EventEmitter {
  constructor() {
    this.listeners = {};
  }
  on(event, cb) {
    (this.listeners[event] ||= []).push(cb);
  }
  emit(event, data) {
    (this.listeners[event] || []).forEach((cb) => cb(data));
  }
}`,
`function groupBy(items, keyFn) {
  return items.reduce((acc, item) => {
    const key = keyFn(item);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}`,
`const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function retry(fn, attempts = 3) {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === attempts - 1) throw err;
      await sleep(100 * 2 ** i);
    }
  }
}`,
`function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}`,
`const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function range(start, end, step = 1) {
  const out = [];
  for (let i = start; i < end; i += step) {
    out.push(i);
  }
  return out;
}`
    ],

    /* ---------------- Python ---------------- */
    python: [
`def fib(n, cache={}):
    if n < 2:
        return n
    if n not in cache:
        cache[n] = fib(n - 1) + fib(n - 2)
    return cache[n]`,
`def binary_search(items, target):
    lo, hi = 0, len(items) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if items[mid] == target:
            return mid
        if items[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1`,
`from dataclasses import dataclass


@dataclass
class Point:
    x: float
    y: float

    def distance_to(self, other):
        dx = self.x - other.x
        dy = self.y - other.y
        return (dx * dx + dy * dy) ** 0.5`,
`def word_count(text):
    counts = {}
    for word in text.lower().split():
        counts[word] = counts.get(word, 0) + 1
    return {k: v for k, v in counts.items() if v > 1}`,
`import functools


def memoize(func):
    cache = {}

    @functools.wraps(func)
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]

    return wrapper`,
`def merge_sort(items):
    if len(items) <= 1:
        return items
    mid = len(items) // 2
    left = merge_sort(items[:mid])
    right = merge_sort(items[mid:])
    return merge(left, right)


def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result`,
`def chunked(iterable, size):
    chunk = []
    for item in iterable:
        chunk.append(item)
        if len(chunk) == size:
            yield chunk
            chunk = []
    if chunk:
        yield chunk`,
`class Stack:
    def __init__(self):
        self._items = []

    def push(self, item):
        self._items.append(item)

    def pop(self):
        if not self._items:
            raise IndexError("pop from empty stack")
        return self._items.pop()`
    ],

    /* ---------------- TypeScript ---------------- */
    typescript: [
`function first<T>(items: T[]): T | undefined {
  return items.length > 0 ? items[0] : undefined;
}`,
`interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}`,
`type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

function unwrap<T>(result: Result<T>): T {
  if (!result.ok) {
    throw new Error(result.error);
  }
  return result.value;
}`,
`type Optional<T> = {
  [K in keyof T]?: T[K];
};

function merge<T>(base: T, patch: Optional<T>): T {
  return { ...base, ...patch };
}`,
`interface User {
  id: number;
  name: string;
}

async function getUser(id: number): Promise<User> {
  const res = await fetch("/api/users/" + id);
  return res.json() as Promise<User>;
}`,
`enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function delta(dir: Direction): [number, number] {
  switch (dir) {
    case Direction.Up:
      return [0, -1];
    case Direction.Down:
      return [0, 1];
    default:
      return [0, 0];
  }
}`,
`class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  get size(): number {
    return this.items.length;
  }
}`,
`type Counts = Record<string, number>;

function tally(values: readonly string[]): Counts {
  const counts: Counts = {};
  for (const value of values) {
    counts[value] = (counts[value] ?? 0) + 1;
  }
  return counts;
}`
    ],

    /* ---------------- Java ---------------- */
    java: [
`public class Point {
    private final double x;
    private final double y;

    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public double distanceTo(Point other) {
        double dx = this.x - other.x;
        double dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}`,
`public static <T> T firstOrDefault(List<T> items, T fallback) {
    if (items == null || items.isEmpty()) {
        return fallback;
    }
    return items.get(0);
}`,
`public List<String> activeNames(List<User> users) {
    return users.stream()
        .filter(User::isActive)
        .map(User::getName)
        .sorted()
        .collect(Collectors.toList());
}`,
`interface Greeter {
    String greet(String name);
}

class FriendlyGreeter implements Greeter {
    @Override
    public String greet(String name) {
        return "Hello, " + name + "!";
    }
}`,
`public static long factorial(int n) {
    if (n < 0) {
        throw new IllegalArgumentException("n must be >= 0");
    }
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}`,
`public static Map<Character, Integer> charFrequency(String text) {
    Map<Character, Integer> freq = new HashMap<>();
    for (char c : text.toCharArray()) {
        freq.merge(c, 1, Integer::sum);
    }
    return freq;
}`,
`public static String grade(int score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}`,
`public static int binarySearch(int[] arr, int target) {
    int lo = 0;
    int hi = arr.length - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
}`
    ],

    /* ---------------- C++ ---------------- */
    cpp: [
`template <typename T>
T clamp(T value, T low, T high) {
  if (value < low) return low;
  if (value > high) return high;
  return value;
}`,
`class Counter {
public:
  void increment() { count_++; }
  void reset() { count_ = 0; }
  int value() const { return count_; }

private:
  int count_ = 0;
};`,
`#include <vector>

int sumOfSquares(const std::vector<int>& nums) {
  int total = 0;
  for (int n : nums) {
    total += n * n;
  }
  return total;
}`,
`#include <algorithm>
#include <vector>

void sortDescending(std::vector<int>& nums) {
  std::sort(nums.begin(), nums.end(), [](int a, int b) {
    return a > b;
  });
}`,
`long fibonacci(int n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}`,
`#include <memory>
#include <string>

struct Node {
  std::string name;
  std::unique_ptr<Node> next;
};

std::unique_ptr<Node> makeNode(const std::string& name) {
  return std::make_unique<Node>(Node{name, nullptr});
}`,
`#include <map>
#include <string>

std::map<char, int> frequency(const std::string& text) {
  std::map<char, int> freq;
  for (char c : text) {
    freq[c]++;
  }
  return freq;
}`,
`struct Vec2 {
  double x;
  double y;

  Vec2 operator+(const Vec2& other) const {
    return Vec2{x + other.x, y + other.y};
  }
};`
    ]
  };
})();
