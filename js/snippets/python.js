window.CODE_SNIPPETS = window.CODE_SNIPPETS || {};
window.CODE_SNIPPETS["python"] = [
`def gcd(a, b):
    while b:
        a, b = b, a % b
    return a`,
`def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)`,
`def fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a`,
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
`def quicksort(items):
    if len(items) <= 1:
        return items
    pivot = items[len(items) // 2]
    left = [x for x in items if x < pivot]
    mid = [x for x in items if x == pivot]
    right = [x for x in items if x > pivot]
    return quicksort(left) + mid + quicksort(right)`,
`def merge(left, right):
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
`def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True`,
`squares = [x * x for x in range(10)]
evens = [x for x in squares if x % 2 == 0]
print(squares)
print(evens)`,
`matrix = [[1, 2, 3], [4, 5, 6]]
flat = [value for row in matrix for value in row]
print(flat)`,
`word_lengths = {w: len(w) for w in ["hi", "world"]}
unique = {c for c in "mississippi"}
print(word_lengths)
print(sorted(unique))`,
`def countdown(n):
    while n > 0:
        yield n
        n -= 1
for value in countdown(5):
    print(value)`,
`def take(iterable, count):
    result = []
    for item in iterable:
        if count <= 0:
            break
        result.append(item)
        count -= 1
    return result`,
`from collections import Counter
words = "the cat sat on the mat".split()
counts = Counter(words)
print(counts.most_common(2))`,
`from collections import defaultdict
groups = defaultdict(list)
for name in ["amy", "bob", "ann"]:
    groups[name[0]].append(name)
print(dict(groups))`,
`from collections import deque
queue = deque()
queue.append(1)
queue.append(2)
queue.appendleft(0)
print(queue.popleft())`,
`class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Point({self.x}, {self.y})"`,
`class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x,
                      self.y + other.y)`,
`class Stack:
    def __init__(self):
        self._items = []

    def push(self, item):
        self._items.append(item)

    def pop(self):
        return self._items.pop()

    def __len__(self):
        return len(self._items)`,
`from dataclasses import dataclass

@dataclass
class Book:
    title: str
    author: str
    pages: int = 0`,
`from dataclasses import dataclass, field

@dataclass
class Cart:
    items: list = field(default_factory=list)

    def total(self):
        return sum(self.items)`,
`def memoize(func):
    cache = {}
    def wrapper(n):
        if n not in cache:
            cache[n] = func(n)
        return cache[n]
    return wrapper`,
`import time

def timed(func):
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        print(time.perf_counter() - start)
        return result
    return wrapper`,
`from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)`,
`from contextlib import contextmanager

@contextmanager
def tag(name):
    print(f"<{name}>")
    yield
    print(f"</{name}>")`,
`def read_lines(path):
    with open(path, encoding="utf-8") as handle:
        return [line.strip() for line in handle]`,
`def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return None
    finally:
        print("done")`,
`def parse_int(text, default=0):
    try:
        return int(text)
    except ValueError:
        return default`,
`from itertools import combinations
pairs = list(combinations([1, 2, 3], 2))
print(pairs)`,
`from itertools import chain
merged = list(chain([1, 2], [3, 4], [5]))
print(merged)`,
`def chunk(items, size):
    for i in range(0, len(items), size):
        yield items[i:i + size]`,
`def reverse_words(sentence):
    return " ".join(reversed(sentence.split()))`,
`def is_palindrome(text):
    cleaned = [c.lower() for c in text if c.isalnum()]
    return cleaned == cleaned[::-1]`
];
