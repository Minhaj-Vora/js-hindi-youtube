const codding =['js','ruby','java','python','c++']

// codding.forEach( function (val) {
//     console.log(val);
    
// } )

// codding.forEach( (val) => {
//     console.log(val);
    
// } )

// function printMe (item ) {
//     console.log(item);
    
// }

// codding.forEach(printMe)

// codding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
    
// } )

const mycodding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

mycodding.forEach( (item) => {
    console.log(item.languageName);
    
} )