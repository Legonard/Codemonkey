window.CODE_SNIPPETS = window.CODE_SNIPPETS || {};
window.CODE_SNIPPETS["go"] = [
`func gcd(a, b int) int {
    for b != 0 {
        a, b = b, a%b
    }
    return a
}`,
`func factorial(n int) int {
    if n <= 1 {
        return 1
    }
    return n * factorial(n-1)
}`,
`func fib(n int) int {
    a, b := 0, 1
    for i := 0; i < n; i++ {
        a, b = b, a+b
    }
    return a
}`,
`func binarySearch(items []int, target int) int {
    lo, hi := 0, len(items)-1
    for lo <= hi {
        mid := (lo + hi) / 2
        if items[mid] == target {
            return mid
        }
        if items[mid] < target {
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }
    return -1
}`,
`func reverse(s []int) {
    for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
        s[i], s[j] = s[j], s[i]
    }
}`,
`func sumSlice(nums []int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}`,
`func maxOf(nums []int) int {
    best := nums[0]
    for _, n := range nums[1:] {
        if n > best {
            best = n
        }
    }
    return best
}`,
`func contains(items []string, want string) bool {
    for _, item := range items {
        if item == want {
            return true
        }
    }
    return false
}`,
`func wordCount(s string) map[string]int {
    counts := make(map[string]int)
    for _, w := range strings.Fields(s) {
        counts[w]++
    }
    return counts
}`,
`func uniqueInts(nums []int) []int {
    seen := make(map[int]bool)
    var out []int
    for _, n := range nums {
        if !seen[n] {
            seen[n] = true
            out = append(out, n)
        }
    }
    return out
}`,
`type Point struct {
    X, Y int
}

func (p Point) Add(q Point) Point {
    return Point{p.X + q.X, p.Y + q.Y}
}`,
`type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}`,
`type Counter struct {
    value int
}

func (c *Counter) Inc() {
    c.value++
}`,
`type Shape interface {
    Area() float64
}

func totalArea(shapes []Shape) float64 {
    var sum float64
    for _, s := range shapes {
        sum += s.Area()
    }
    return sum
}`,
`type Stack[T any] struct {
    items []T
}

func (s *Stack[T]) Push(v T) {
    s.items = append(s.items, v)
}`,
`func Map[T, U any](s []T, f func(T) U) []U {
    out := make([]U, len(s))
    for i, v := range s {
        out[i] = f(v)
    }
    return out
}`,
`func Filter[T any](s []T, keep func(T) bool) []T {
    var out []T
    for _, v := range s {
        if keep(v) {
            out = append(out, v)
        }
    }
    return out
}`,
`type Number interface {
    ~int | ~float64
}

func Sum[T Number](nums []T) T {
    var total T
    for _, n := range nums {
        total += n
    }
    return total
}`,
`func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}`,
`func readConfig(path string) ([]byte, error) {
    data, err := os.ReadFile(path)
    if err != nil {
        return nil, fmt.Errorf("read: %w", err)
    }
    return data, nil
}`,
`func writeAll(w io.Writer, lines []string) error {
    for _, line := range lines {
        if _, err := fmt.Fprintln(w, line); err != nil {
            return err
        }
    }
    return nil
}`,
`func processFile(name string) error {
    f, err := os.Open(name)
    if err != nil {
        return err
    }
    defer f.Close()
    return nil
}`,
`func sortDesc(nums []int) {
    sort.Slice(nums, func(i, j int) bool {
        return nums[i] > nums[j]
    })
}`,
`func sortByLen(words []string) {
    sort.Slice(words, func(i, j int) bool {
        return len(words[i]) < len(words[j])
    })
}`,
`func titleCase(s string) string {
    parts := strings.Fields(s)
    for i, p := range parts {
        parts[i] = strings.ToUpper(p[:1]) + p[1:]
    }
    return strings.Join(parts, " ")
}`,
`func produce(n int) <-chan int {
    out := make(chan int)
    go func() {
        defer close(out)
        for i := 0; i < n; i++ {
            out <- i
        }
    }()
    return out
}`,
`func sumWorker(nums []int, result chan<- int) {
    total := 0
    for _, n := range nums {
        total += n
    }
    result <- total
}`,
`func parallelInc(values []int) {
    var wg sync.WaitGroup
    for i := range values {
        wg.Add(1)
        go func(idx int) {
            defer wg.Done()
            values[idx]++
        }(i)
    }
    wg.Wait()
}`,
`type SafeCounter struct {
    mu    sync.Mutex
    count int
}

func (c *SafeCounter) Inc() {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.count++
}`,
`func merge(a, b []int) []int {
    out := make([]int, 0, len(a)+len(b))
    i, j := 0, 0
    for i < len(a) && j < len(b) {
        if a[i] <= b[j] {
            out = append(out, a[i])
            i++
        } else {
            out = append(out, b[j])
            j++
        }
    }
    out = append(out, a[i:]...)
    out = append(out, b[j:]...)
    return out
}`
];
