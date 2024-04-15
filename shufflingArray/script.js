const numbers = [57, 23, 89, 42, 5, 74, 36, 68, 11, 95];

Shuffle(numbers);

console.log(numbers)

function Shuffle(arr1){

    let currentIndex = arr1.length;

    while(currentIndex > 0){
        let random_index  = Math.round(Math.random() * arr1.length); 
        currentIndex-=1;
    
        let temp = arr1[currentIndex];
        arr1[currentIndex] = arr1[random_index];
        arr1[random_index] = temp;

    }

    return arr1;

}
