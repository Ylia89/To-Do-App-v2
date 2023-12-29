// Написать функцию customMap, которая принимает в себя массив и другую функцию, наша customMap
//должна возвращать массив элементов с примененной на них из второго параметра функцией
let arr = [1,2,3,4,5]
function customMap(arr, func){
    return arr.map((item)=> (item*2))
}
console.log(customMap(arr,2))

//Напишите сумму элементов массива
let arr1 = [1,2,3,4,5]
let sum = 0
function bric(arr){
    arr.forEach((item) => {
        sum+=item
    })
    return sum
}
console.log(bric(arr))

//Сортировка массива
let arr2 = [2,5,1,3,4,8,6,7]
arr2.sort((a,b)=>{
    return a-b
})

//Найдите сумму элементов в массиве, затем сравните с максимальным чимлом в данном массиве, если
// сумма больше то отсортировать массив по убыванию, в противном случае по возрастанию
let arr3 = [1,2,3,4,5]
let resalt = arr3.reduce((accum,item)=>{
    return accum+item
},0)
console.log(resalt)
let sorted = arr3.sort((a,b)=>{
    return b-a
})
console.log(sorted)
