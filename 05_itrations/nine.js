const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc,currval) {
//     console.log(`acc val: ${acc} currval value: ${currval}`);
//     return acc + currval
// },0 )

// const myTotal = myNums.reduce( (acc,currval) => acc + currval,0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc,currval) => acc + currval.price,0)

console.log(totalPrice);
