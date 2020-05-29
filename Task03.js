
var inputArray = [];
var size = 5;                                      //Maximum Array size

for(var i=0; i<size; i++) {                     //Taking Input from user
                                            
    
	inputArray[i] = prompt('Enter Element ' + (i+1));
}
  
console.log(inputArray);



function isSorted(arr){
    for (let i =1; i< arr.length-1; i++){
        if(arr[i]-arr[i-1]<0){
            return false;
        }
      
    }
    return true;
}
console.log(isSorted([1,3,5,7,9]));
console.log(isSorted([8,6,5,3,2]));
console.log(isSorted([1,2,3,4,5]));




// i wrote three separate code one to check if the array is sorted or not and the next one to sort the numbers in the array. 
// i am still trying to figure out the correct solution to the question.
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);