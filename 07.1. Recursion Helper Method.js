// // RECURSION: THE HELPER METHOD
// // Serve para filtrar elementos que contém no array.
// function collectOddValues(arr){
//     let result = []; // outerScopedVariable

//     function helper(helperInput){
//         // Modify the outerScopedVariable
//         if(helperInput.length === 0){
//             return;
//         }
//         if(helperInput[0] % 2 !== 0){
//             result.push(helperInput[0])
//         }
//         helper(helperInput.slice(1))
//     }
    
//     helper(arr)
//     return result; // return the outerScopedVariable
// }