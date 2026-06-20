window.CODE_SNIPPETS = window.CODE_SNIPPETS || {};
window.CODE_SNIPPETS["rust"] = [
`fn factorial(n: u64) -> u64 {
    if n <= 1 {
        1
    } else {
        n * factorial(n - 1)
    }
}`,
`fn fibonacci(n: u32) -> u64 {
    let mut a = 0u64;
    let mut b = 1u64;
    for _ in 0..n {
        let next = a + b;
        a = b;
        b = next;
    }
    a
}`,
`fn bubble_sort(arr: &mut Vec<i32>) {
    let len = arr.len();
    for i in 0..len {
        for j in 0..len - i - 1 {
            if arr[j] > arr[j + 1] {
                arr.swap(j, j + 1);
            }
        }
    }
}`,
`fn binary_search(arr: &[i32], target: i32) -> Option<usize> {
    let mut low = 0;
    let mut high = arr.len();
    while low < high {
        let mid = low + (high - low) / 2;
        if arr[mid] == target {
            return Some(mid);
        } else if arr[mid] < target {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    None
}`,
`#[derive(Debug, Clone)]
struct Point {
    x: f64,
    y: f64,
}

impl Point {
    fn new(x: f64, y: f64) -> Self {
        Point { x, y }
    }

    fn distance(&self, other: &Point) -> f64 {
        let dx = self.x - other.x;
        let dy = self.y - other.y;
        (dx * dx + dy * dy).sqrt()
    }
}`,
`trait Shape {
    fn area(&self) -> f64;
    fn name(&self) -> String;
}

struct Circle {
    radius: f64,
}

impl Shape for Circle {
    fn area(&self) -> f64 {
        std::f64::consts::PI * self.radius * self.radius
    }

    fn name(&self) -> String {
        String::from("circle")
    }
}`,
`#[derive(Debug)]
enum Direction {
    North,
    South,
    East,
    West,
}

fn opposite(dir: Direction) -> Direction {
    match dir {
        Direction::North => Direction::South,
        Direction::South => Direction::North,
        Direction::East => Direction::West,
        Direction::West => Direction::East,
    }
}`,
`fn largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut largest = &list[0];
    for item in list {
        if item > largest {
            largest = item;
        }
    }
    largest
}`,
`fn sum_of_squares(nums: &[i32]) -> i32 {
    nums.iter()
        .map(|x| x * x)
        .sum()
}`,
`fn even_numbers(nums: &[i32]) -> Vec<i32> {
    nums.iter()
        .filter(|&&x| x % 2 == 0)
        .copied()
        .collect()
}`,
`use std::collections::HashMap;

fn word_count(text: &str) -> HashMap<String, u32> {
    let mut counts = HashMap::new();
    for word in text.split_whitespace() {
        *counts.entry(word.to_string()).or_insert(0) += 1;
    }
    counts
}`,
`fn product(nums: &[i64]) -> i64 {
    nums.iter().fold(1, |acc, &x| acc * x)
}`,
`fn safe_divide(a: f64, b: f64) -> Option<f64> {
    if b == 0.0 {
        None
    } else {
        Some(a / b)
    }
}`,
`fn parse_and_add(a: &str, b: &str) -> Result<i32, std::num::ParseIntError> {
    let x = a.parse::<i32>()?;
    let y = b.parse::<i32>()?;
    Ok(x + y)
}`,
`fn apply<F>(f: F, value: i32) -> i32
where
    F: Fn(i32) -> i32,
{
    f(value)
}

fn demo() -> i32 {
    let double = |x| x * 2;
    apply(double, 21)
}`,
`#[derive(Debug)]
enum Tree {
    Leaf(i32),
    Node(Box<Tree>, Box<Tree>),
}

fn sum_tree(tree: &Tree) -> i32 {
    match tree {
        Tree::Leaf(value) => *value,
        Tree::Node(left, right) => {
            sum_tree(left) + sum_tree(right)
        }
    }
}`,
`fn first_char(s: &str) -> Option<char> {
    s.chars().next()
}

fn shout(s: &str) -> String {
    s.to_uppercase()
}`,
`struct Counter {
    count: u32,
}

impl Iterator for Counter {
    type Item = u32;

    fn next(&mut self) -> Option<u32> {
        if self.count < 5 {
            self.count += 1;
            Some(self.count)
        } else {
            None
        }
    }
}`,
`fn gcd(mut a: u64, mut b: u64) -> u64 {
    while b != 0 {
        let temp = b;
        b = a % b;
        a = temp;
    }
    a
}`,
`fn is_palindrome(s: &str) -> bool {
    let chars: Vec<char> = s.chars().collect();
    let n = chars.len();
    for i in 0..n / 2 {
        if chars[i] != chars[n - 1 - i] {
            return false;
        }
    }
    true
}`,
`use std::collections::HashSet;

fn unique(nums: &[i32]) -> Vec<i32> {
    let mut seen = HashSet::new();
    nums.iter()
        .filter(|&&x| seen.insert(x))
        .copied()
        .collect()
}`,
`#[derive(Debug, Default)]
struct Config {
    verbose: bool,
    retries: u32,
    name: String,
}

fn build_config() -> Config {
    Config {
        verbose: true,
        retries: 3,
        ..Default::default()
    }
}`,
`trait Greet {
    fn hello(&self) -> String {
        String::from("Hello!")
    }
}

struct English;
struct Spanish;

impl Greet for English {}

impl Greet for Spanish {
    fn hello(&self) -> String {
        String::from("Hola!")
    }
}`,
`fn average(nums: &[f64]) -> Option<f64> {
    if nums.is_empty() {
        return None;
    }
    let sum: f64 = nums.iter().sum();
    Some(sum / nums.len() as f64)
}`,
`fn max_in_pairs(pairs: &[(i32, i32)]) -> Vec<i32> {
    pairs.iter()
        .map(|&(a, b)| a.max(b))
        .collect()
}`,
`fn count_vowels(text: &str) -> usize {
    text.chars()
        .filter(|c| "aeiou".contains(*c))
        .count()
}`,
`use std::fmt;

struct Temperature {
    celsius: f64,
}

impl fmt::Display for Temperature {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:.1} C", self.celsius)
    }
}`,
`fn merge_sorted(a: &[i32], b: &[i32]) -> Vec<i32> {
    let mut result = Vec::with_capacity(a.len() + b.len());
    let (mut i, mut j) = (0, 0);
    while i < a.len() && j < b.len() {
        if a[i] <= b[j] {
            result.push(a[i]);
            i += 1;
        } else {
            result.push(b[j]);
            j += 1;
        }
    }
    result.extend_from_slice(&a[i..]);
    result.extend_from_slice(&b[j..]);
    result
}`,
`fn chunk_sums(nums: &[i32], size: usize) -> Vec<i32> {
    nums.chunks(size)
        .map(|chunk| chunk.iter().sum())
        .collect()
}`,
`fn longest_word(text: &str) -> Option<&str> {
    text.split_whitespace()
        .max_by_key(|word| word.len())
}`
];
