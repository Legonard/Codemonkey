window.CODE_SNIPPETS = window.CODE_SNIPPETS || {};
window.CODE_SNIPPETS["cpp"] = [
`int gcd(int a, int b) {
  while (b != 0) {
    int t = b;
    b = a % b;
    a = t;
  }
  return a;
}`,
`long factorial(int n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}`,
`int fib(int n) {
  int a = 0, b = 1;
  for (int i = 0; i < n; ++i) {
    int next = a + b;
    a = b;
    b = next;
  }
  return a;
}`,
`bool is_prime(int n) {
  if (n < 2) {
    return false;
  }
  for (int i = 2; i * i <= n; ++i) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}`,
`#include <algorithm>
#include <vector>

void sort_desc(std::vector<int>& v) {
  std::sort(v.begin(), v.end(),
            [](int a, int b) { return a > b; });
}`,
`#include <vector>

int binary_search(const std::vector<int>& v,
                  int target) {
  int lo = 0, hi = (int)v.size() - 1;
  while (lo <= hi) {
    int mid = lo + (hi - lo) / 2;
    if (v[mid] == target) {
      return mid;
    }
    if (v[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
}`,
`#include <numeric>
#include <vector>

int sum(const std::vector<int>& v) {
  return std::accumulate(v.begin(),
                         v.end(), 0);
}`,
`#include <algorithm>
#include <vector>

bool contains(const std::vector<int>& v,
              int x) {
  return std::find(v.begin(), v.end(), x)
         != v.end();
}`,
`#include <string>

std::string reverse_str(std::string s) {
  int i = 0, j = (int)s.size() - 1;
  while (i < j) {
    std::swap(s[i], s[j]);
    ++i;
    --j;
  }
  return s;
}`,
`#include <map>
#include <string>

std::map<char, int> char_count(
    const std::string& s) {
  std::map<char, int> freq;
  for (char c : s) {
    ++freq[c];
  }
  return freq;
}`,
`struct Point {
  double x = 0.0;
  double y = 0.0;

  double norm() const {
    return std::sqrt(x * x + y * y);
  }
};`,
`class Counter {
public:
  void increment() { ++count_; }
  int value() const { return count_; }

private:
  int count_ = 0;
};`,
`#include <iostream>

struct Vec2 {
  double x, y;

  Vec2 operator+(const Vec2& o) const {
    return Vec2{x + o.x, y + o.y};
  }
};`,
`#include <memory>

struct Node {
  int value;
  std::unique_ptr<Node> next;

  explicit Node(int v)
      : value(v), next(nullptr) {}
};`,
`#include <memory>

auto make_buffer(std::size_t n) {
  return std::make_unique<int[]>(n);
}`,
`#include <fstream>
#include <string>

class FileGuard {
public:
  explicit FileGuard(const std::string& path)
      : file_(path) {}
  ~FileGuard() { file_.close(); }

private:
  std::ofstream file_;
};`,
`template <typename T>
T max_of(T a, T b) {
  return a > b ? a : b;
}`,
`template <typename T>
void swap_values(T& a, T& b) {
  T tmp = std::move(a);
  a = std::move(b);
  b = std::move(tmp);
}`,
`template <typename Iter>
Iter find_max(Iter first, Iter last) {
  Iter best = first;
  for (; first != last; ++first) {
    if (*best < *first) {
      best = first;
    }
  }
  return best;
}`,
`#include <iostream>
#include <vector>

void print_all(const std::vector<int>& v) {
  for (const auto& item : v) {
    std::cout << item << ' ';
  }
  std::cout << '\\n';
}`,
`#include <algorithm>
#include <vector>

std::vector<int> doubled(
    const std::vector<int>& v) {
  std::vector<int> out(v.size());
  std::transform(v.begin(), v.end(),
                 out.begin(),
                 [](int x) { return x * 2; });
  return out;
}`,
`#include <algorithm>
#include <vector>

int count_even(const std::vector<int>& v) {
  return (int)std::count_if(
      v.begin(), v.end(),
      [](int x) { return x % 2 == 0; });
}`,
`#include <vector>

void bubble_sort(std::vector<int>& v) {
  for (std::size_t i = 0; i < v.size(); ++i) {
    for (std::size_t j = 0;
         j + 1 < v.size() - i; ++j) {
      if (v[j] > v[j + 1]) {
        std::swap(v[j], v[j + 1]);
      }
    }
  }
}`,
`#include <vector>

std::vector<int> range(int n) {
  std::vector<int> out;
  out.reserve(n);
  for (int i = 0; i < n; ++i) {
    out.push_back(i);
  }
  return out;
}`,
`#include <string>
#include <vector>

std::vector<std::string> split(
    const std::string& s, char sep) {
  std::vector<std::string> parts;
  std::string cur;
  for (char c : s) {
    if (c == sep) {
      parts.push_back(cur);
      cur.clear();
    } else {
      cur += c;
    }
  }
  parts.push_back(cur);
  return parts;
}`,
`#include <unordered_map>
#include <vector>

std::vector<int> two_sum(
    const std::vector<int>& nums, int target) {
  std::unordered_map<int, int> seen;
  for (int i = 0; i < (int)nums.size(); ++i) {
    int need = target - nums[i];
    auto it = seen.find(need);
    if (it != seen.end()) {
      return {it->second, i};
    }
    seen[nums[i]] = i;
  }
  return {};
}`,
`class Rational {
public:
  Rational(int n, int d) : num_(n), den_(d) {}

  Rational operator*(const Rational& o) const {
    return Rational(num_ * o.num_,
                    den_ * o.den_);
  }

private:
  int num_, den_;
};`,
`#include <optional>
#include <vector>

std::optional<int> first_positive(
    const std::vector<int>& v) {
  for (int x : v) {
    if (x > 0) {
      return x;
    }
  }
  return std::nullopt;
}`,
`#include <iostream>
#include <map>
#include <string>

void dump(const std::map<std::string, int>& m) {
  for (const auto& [key, val] : m) {
    std::cout << key << " = " << val << '\\n';
  }
}`,
`#include <stdexcept>
#include <vector>

class Stack {
public:
  void push(int x) { data_.push_back(x); }

  int pop() {
    if (data_.empty()) {
      throw std::runtime_error("empty stack");
    }
    int top = data_.back();
    data_.pop_back();
    return top;
  }

private:
  std::vector<int> data_;
};`
];
