// // INSERTION SORT
// // Cria a ordenação nos elementos a esquerda e gradualmente ordena. Pega um elemento por vez e insere no lugar certo da porção ordenada do array.
// function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// insertionSort([2,1,9,76,4]);