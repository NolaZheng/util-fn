/*----
建立函式 fibonacci 代入參數 position,position 表示的是想要得到 fibonacci
sequence 中的第幾個數字的值。
fibonacci(0) // 0
fibonacci(1) // 1
fibonacci(2) // 1
fibonacci(3) // 2
fibonacci(4) // 3 
----*/

const fibonacci = position => {
  const n = Math.trunc(position)
  if (n === 0) return 0
  if (n === 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
