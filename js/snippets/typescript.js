window.CODE_SNIPPETS = window.CODE_SNIPPETS || {};
window.CODE_SNIPPETS["typescript"] = [
`interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
}`,
`type Point = {
  x: number;
  y: number;
};

const origin: Point = { x: 0, y: 0 };`,
`function identity<T>(value: T): T {
  return value;
}

const n = identity<number>(42);`,
`class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  get(): T {
    return this.value;
  }
}`,
`type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };

function area(s: Shape): number {
  if (s.kind === "circle") {
    return Math.PI * s.radius * s.radius;
  }
  return s.size * s.size;
}`,
`type Partial<T> = {
  [P in keyof T]?: T[P];
};`,
`enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const move: Direction = Direction.Up;`,
`async function fetchUser(
  id: number
): Promise<User> {
  const res = await fetch("/users/" + id);
  return res.json();
}`,
`function isString(x: unknown): x is string {
  return typeof x === "string";
}`,
`class Account {
  private balance: number = 0;

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}`,
`type ReadonlyUser = {
  readonly id: number;
  readonly name: string;
};

const u: ReadonlyUser = { id: 1, name: "Ada" };`,
`function pad(value: string): string;
function pad(value: number): string;
function pad(value: string | number): string {
  return String(value).padStart(4, "0");
}`,
`type RecordMap = Record<string, number>;

const scores: RecordMap = {
  alice: 90,
  bob: 85,
};`,
`function pick<T, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    result[key] = obj[key];
  }
  return result;
}`,
`interface Repository<T> {
  findById(id: number): T | undefined;
  save(entity: T): void;
  delete(id: number): boolean;
}`,
`const numbers: number[] = [1, 2, 3, 4, 5];
const doubled = numbers.map(
  (n: number): number => n * 2
);`,
`type EventHandler = (event: string) => void;

const handlers: EventHandler[] = [];

function on(handler: EventHandler): void {
  handlers.push(handler);
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
`function clamp(
  value: number,
  min: number,
  max: number
): number {
  return Math.max(min, Math.min(max, value));
}`,
`type Nullable<T> = T | null;

function firstOrNull<T>(
  arr: T[]
): Nullable<T> {
  return arr.length > 0 ? arr[0] : null;
}`,
`interface Animal {
  name: string;
  sound(): string;
}

class Dog implements Animal {
  constructor(public name: string) {}

  sound(): string {
    return "woof";
  }
}`,
`const config = {
  host: "localhost",
  port: 8080,
} as const;

type Port = typeof config.port;`,
`function groupBy<T, K extends string>(
  items: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  const result = {} as Record<K, T[]>;
  for (const item of items) {
    const key = keyFn(item);
    (result[key] ||= []).push(item);
  }
  return result;
}`,
`type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

function ok<T>(value: T): Result<T> {
  return { ok: true, value };
}`,
`abstract class Shape2D {
  abstract area(): number;

  describe(): string {
    return "area is " + this.area();
  }
}`,
`async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}`,
`type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};`,
`function memoize<T>(
  fn: (arg: number) => T
): (arg: number) => T {
  const cache = new Map<number, T>();
  return (arg: number): T => {
    if (!cache.has(arg)) {
      cache.set(arg, fn(arg));
    }
    return cache.get(arg) as T;
  };
}`,
`interface Comparable<T> {
  compareTo(other: T): number;
}

class Version implements Comparable<Version> {
  constructor(private value: number) {}

  compareTo(other: Version): number {
    return this.value - other.value;
  }
}`,
`function assertNever(value: never): never {
  throw new Error("Unexpected: " + value);
}`
];
