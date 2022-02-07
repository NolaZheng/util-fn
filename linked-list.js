/**
使用 Linked List 實作 Stack
實作需包含以下方法。
push() : 添加新元素。
pop():移除元素並返回被移除的元素。
size():返回所有元素數量。
const myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.pop() // 3
myStack.size() // 2
*/

class Node {
  constructor(item) {
    this.item = item
    this.next = null
  }
}

export class Stack {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  push(item) {
    const node = new Node(item)

    // first node
    if (!this.head) {
      this.head = node
    } else {
      // find tail
      let tail = this.head
      while (tail.next !== null) {
        tail = tail.next
      }
      // append node
      tail.next = node
    }

    this.tail = node
    this.length++
  }

  pop() {
    if (this.length <= 0) return
    // return current tail
    const removedItem = this.tail.item

    let newTail = this.head
    while (newTail.next !== null && newTail.next !== this.tail) {
      newTail = newTail.next
    }

    newTail.next = null

    this.tail = newTail
    this.length--

    return removedItem
  }

  size() {
    return this.length
  }
}
