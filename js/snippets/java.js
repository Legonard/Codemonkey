window.CODE_SNIPPETS = window.CODE_SNIPPETS || {};
window.CODE_SNIPPETS["java"] = [
`static long factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}`,
`static int fib(int n) {
    int a = 0, b = 1;
    for (int i = 0; i < n; i++) {
        int next = a + b;
        a = b;
        b = next;
    }
    return a;
}`,
`static int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}`,
`static int binarySearch(int[] a, int target) {
    int lo = 0, hi = a.length - 1;
    while (lo <= hi) {
        int mid = (lo + hi) >>> 1;
        if (a[mid] == target) {
            return mid;
        } else if (a[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
}`,
`static boolean isPrime(int n) {
    if (n < 2) {
        return false;
    }
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}`,
`static int sumDigits(int n) {
    int sum = 0;
    n = Math.abs(n);
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}`,
`static int[] reverse(int[] a) {
    int lo = 0, hi = a.length - 1;
    while (lo < hi) {
        int temp = a[lo];
        a[lo] = a[hi];
        a[hi] = temp;
        lo++;
        hi--;
    }
    return a;
}`,
`List<Integer> numbers = new ArrayList<>();
numbers.add(3);
numbers.add(1);
numbers.add(2);
Collections.sort(numbers);
System.out.println(numbers);`,
`Map<String, Integer> ages = new HashMap<>();
ages.put("Alice", 30);
ages.put("Bob", 25);
int age = ages.getOrDefault("Carol", 0);
System.out.println(age);`,
`Set<String> seen = new HashSet<>();
for (String word : "a b a c b".split(" ")) {
    seen.add(word);
}
System.out.println(seen.size());`,
`List<Integer> nums = List.of(1, 2, 3, 4, 5, 6);
List<Integer> evens = nums.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
System.out.println(evens);`,
`List<String> names = List.of("ann", "bob", "cy");
List<Integer> lengths = names.stream()
    .map(String::length)
    .collect(Collectors.toList());
System.out.println(lengths);`,
`int total = IntStream.rangeClosed(1, 100)
    .filter(n -> n % 3 == 0)
    .sum();
System.out.println(total);`,
`Map<Boolean, List<Integer>> parts = Stream
    .of(1, 2, 3, 4, 5)
    .collect(Collectors.partitioningBy(
        n -> n % 2 == 0));
System.out.println(parts);`,
`String joined = Stream.of("a", "b", "c")
    .collect(Collectors.joining(", ", "[", "]"));
System.out.println(joined);`,
`class Point {
    private final int x;
    private final int y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    int distanceSq() {
        return x * x + y * y;
    }
}`,
`class Counter {
    private int count = 0;

    void increment() {
        count++;
    }

    int value() {
        return count;
    }
}`,
`interface Shape {
    double area();

    default String describe() {
        return "area=" + area();
    }
}`,
`class Circle implements Shape {
    private final double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    public double area() {
        return Math.PI * radius * radius;
    }
}`,
`class Box<T> {
    private final T value;

    Box(T value) {
        this.value = value;
    }

    T get() {
        return value;
    }
}`,
`static <T> T firstOrNull(List<T> items) {
    if (items.isEmpty()) {
        return null;
    }
    return items.get(0);
}`,
`enum Direction {
    NORTH, EAST, SOUTH, WEST;

    Direction opposite() {
        return values()[(ordinal() + 2) % 4];
    }
}`,
`enum Planet {
    MERCURY(3.7), EARTH(9.8), MARS(3.7);

    final double gravity;

    Planet(double gravity) {
        this.gravity = gravity;
    }
}`,
`record Point3D(int x, int y, int z) {
    int sum() {
        return x + y + z;
    }
}`,
`record Pair<A, B>(A first, B second) {
    Pair<B, A> swap() {
        return new Pair<>(second, first);
    }
}`,
`static int parseOrDefault(String text, int fallback) {
    try {
        return Integer.parseInt(text);
    } catch (NumberFormatException e) {
        return fallback;
    }
}`,
`StringBuilder sb = new StringBuilder();
for (int i = 0; i < 5; i++) {
    sb.append(i).append(",");
}
sb.setLength(sb.length() - 1);
System.out.println(sb);`,
`List<String> words = new ArrayList<>(
    List.of("banana", "apple", "cherry"));
words.sort(Comparator
    .comparingInt(String::length)
    .thenComparing(Comparator.naturalOrder()));
System.out.println(words);`,
`static Optional<String> longest(List<String> in) {
    return in.stream()
        .max(Comparator.comparingInt(String::length));
}`,
`static String classify(int score) {
    return switch (score / 10) {
        case 10, 9 -> "A";
        case 8 -> "B";
        case 7 -> "C";
        default -> "F";
    };
}`
];
