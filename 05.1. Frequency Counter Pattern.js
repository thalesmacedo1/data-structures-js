// // FREQUENCY COUNTER PATTERN:
// // Solução Não-otimizada:
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i=0; i<arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1){
//             return false;
//         }
//         arr2.splice(correctIndex, 1)
//     }
//     return true;
// }

// result = same([4,9,1,0], [1,2,3,4])
// console.log(result)

// // Solução Otimizada:
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let freqCounter1 = {}
//     let freqCounter2 = {}

//     for(let val of arr1){
//         freqCounter1[val] = (freqCounter1[val] || 0) + 1
//     }
//     for(let val of arr2){
//         freqCounter2[val] = (freqCounter2[val] || 0) + 1
//     }

//     for(let key in freqCounter1){
//         if(!(key**2 in freqCounter2)){
//             return false;
//         }
//         if(freqCounter2[key**2] !== freqCounter1[key]){
//            return false;
//         }
//     }

//     return true;
// }

// result = same([4,9,1,0], [1,2,3,4])
// console.log(result)

// ------------------------------------------------------

// Anagrama com Frequency Pattern
// function validAnagram(word1, word2){
//     if(word1.length !== word2.length){
//         return false;
//     }
    
//     freqWord1 = {}
//     freqWord2 = {}
    
//     for(val of word1){
//         freqWord1[val] = (freqWord1[val] || 0) + 1;
//     }
//     for(val of word2){
//         freqWord2[val] = (freqWord2[val] || 0) + 1;
//     }

//     for(let key in freqWord1){
//         if(!(key in freqWord2)){
//             return false;
//         }
//         if(freqWord1[key] !== freqWord2[key]){
//             return false;
//         }
//     }

//     return true;
// }

// result = validAnagram('qwerty', 'qeywrt');
// console.log(result)
