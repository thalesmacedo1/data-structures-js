// // BUBBLE SORT
// // Compara todos os elementos do vetor, sempre trocando elementos vizinhos caso estes não estejam ordenados.
// // Não-otimizado
// function bubbleSort(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// bubbleSort([37, 45, 29, 8]);

// // Semi-otimizado
// function bubbleSort(arr){
//     for(let i=arr.length; i>0; i--){
//         for(let j=0; j<i-1; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// bubbleSort([37, 45, 29, 8]);

// // Otimizado com o noSwaps [O(n)]
// function bubbleSort(arr){
//     let noSwaps;
//     for(let i=arr.length; i>0; i--){
//         noSwaps = true;
//         for(let j=0; j<i-1; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 noSwaps = false;
//             }
//         }
//         if(noSwaps) break;
//     }
//     return arr;
// }

// bubbleSort([37, 45, 29, 8]);