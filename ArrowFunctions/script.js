//Arrow function : () => console.log("hello world!")

//Functino expression : writing a function as an expression


const alphabets = ["D","C","B","A"];
// alphabets.sort();
// for(let i=0; i<nums.length; i++){
//     console.log(nums[i]);
// }

const grades = [100,56,13,7,5,1000,200];

// grades.forEach(print)
grades.forEach(function(x){
    console.log(x);
});

console.log("After sorting...")
// grades.sort((x,y) => x-y);
grades.sort((x,y) => y-x);

// grades.forEach(print)
grades.forEach((x)=>console.log(x));



function AscendingSort(x,y){
    return x-y;
}
function DescendingSort(x,y){
    return y-x;
}

function print(x){
    console.log(x)
}