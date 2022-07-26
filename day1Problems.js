// 1. Print all even numbers in first 50 natural numbers

// for(i=2; i<51; i++){
// 	if(i % 2 == 0){
// 	  console.log(i);
// 	}
// }
	// HINT: google how to determine if a number is even or not

// 2. print all odd numbers in natural numbers from 20 to 50

// for(i=20; i<50; i++){
// 	if(i % 2 == 1){
// 	  console.log(i);
// 	}
// }
	// HINT: google how to determine if a number is odd or not

// 3. print all numbers that are divisible by 5
// 	[12, 45, 67, 89, 90, 34, 35, 55]

// const no= [12, 45, 67, 89, 90, 34, 35, 55]
// for(let i=0 ; i<8 ; i++){
// 	if(no[i] % 5 == 0){
// 		console.log(no[i])
// 	}
// }
	// HINT: google how to check divisibility by a number

// 4. Print all numbers of this array
// 	 [[1,2], [3,4], [5,6], [7,8]]

// const arr= [[1,2], [3,4], [5,6], [7,8]]

// for(const i in arr){
// 	console.log("row " + i)
// 	for(const j in arr[i]){
// 		console.log(" " + arr[i][j])
// 	}
// }
// HINT: use nested loops
    
// 5. Print all prime numbers occurring in 1st 50 natural numbers


// for (let i = 2; i < 50; i++) {
//     let flag = 0;

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }
	// HINT1: google how to check if a number is prime or not
    // HINT2: use nested loops