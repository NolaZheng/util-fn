const userIds = ['U01', 'U02', 'U03']

const orderIds = ['T01', 'T02', 'T03', 'T04']

const userOrders = [
  { userId: 'U01', orderIds: ['T01', 'T02'] },
  { userId: 'U02', orderIds: [] },
  { userId: 'U03', orderIds: ['T03'] },
]

const userData = { U01: 'Tom', U02: 'Sam', U03: 'John' }

const orderData = {
  T01: { name: 'A', price: 499 },
  T02: { name: 'B', price: 599 },
  T03: { name: 'C', price: 699 },
  T04: { name: 'D', price: 799 },
}

/*----
輸出結果:
const result = [
{
user: { id: ‘U01’, name: ‘Tom’ },
orders: [
{ id: ‘T01’, name: ‘A’, price: 499 },
{ id: ‘T02’, name: ‘B’, price: 599 },
],
},
...,
]
----*/

const result = userOrders.map(({ userId, orderIds }) => {
  return {
    user: { id: userId, name: userData[userId] },
    orders: orderIds.map(oid => {
      return { id: oid, ...orderData[oid] }
    }),
  }
})
