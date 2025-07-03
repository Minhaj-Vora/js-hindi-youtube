// const codding =['js','ruby','java','python','c++']

// aama koi pan jatnu return karavse nahi return karse to undfined karse
// const value = codding.forEach( (item) => {
//     // console.log(item);
//     return item
// } );

// console.log(value);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// filter function ma value return kare hisab thi tene tame ek variable ma pan save kari sakay
// const newNums = myNums.filter( (num) => num > 4 )

// jo tame scope open karso to tamre return karava mate return keyword no use karvo apdse 
// const newNums = myNums.filter( (num) =>{ return num > 4 })

// console.log(newNums);

// foreach thi 
// const newNums = []
// myNums.forEach( (num) => {
//     if( num > 4 ){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter( (bk) => bk.genre === "History" )

  const userBooks1 = books.filter( (bk) => bk.publish >= 2000 )

//   console.log(userBooks);
  console.log(userBooks1);
  