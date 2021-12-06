import resume from "../Scripts/resume.js"; ;

//for loop - properties/index value is considered
var forloop = function(data,properties){
    for(let i=0; i< properties.length; i++){
        //if data is not an array object / array of some objects in it -> Looping again to destructure them
        //else print the given data
        if(data[properties[i]] instanceof Object && !(data[properties[i]] instanceof Array) || (data[properties[i]] instanceof Array && (data[properties[i]].some((value) => {return typeof value === 'object'})))){
            forloop(data[properties[i]],Object.keys(data[properties[i]]));
        }
        else{
            console.log(`${properties[i]} : ${data[properties[i]]}`)
        }
    }
}
console.log("Normal For Loop");
forloop(resume,Object.keys(resume));
console.log("*******************************************************");

//for in
/**
 * The for...in statement iterates over the enumerable properties of an object. 
 *      enumerable property - properties which are created by simple assignment or property initializer are enumerable by default
 *      non-enumerable property -  Properties that are created using the defineProperty() method have enumerable flag set to false usually. this makes the property invisible while printing
 */
var forin = function(data){
    for(const key in data){
        if(data[key] instanceof Object && !(data[key] instanceof Array) || (data[key] instanceof Array && (data[key].some((value) => {return typeof value === 'object'})))){
            forin(data[key]);
        }
        else{
            console.log(`${key} : ${data[key]}`)
        }
    }
}
console.log("For..in Loop");
forin(resume);
console.log("*******************************************************");

//for of
/**
 * The for...of statement iterates over values that the iterable object defines to be iterated over.  
 */
var forof = function(resume){
    for(const key of Object.keys(resume)){
        if(resume[key] instanceof Object && !(resume[key] instanceof Array) || (resume[key] instanceof Array && (resume[key].some((value) => {return typeof value === 'object'})))){
            forof(resume[key]);
        }
        else{
            console.log(`${key} : ${resume[key]}`)
        }
    }
}
console.log("For..of Loop");
forof(resume);
console.log("*******************************************************");
//foreach
//console.log(Object.entries(resume));
var foreach = function(resume){
    Object.entries(resume).forEach(([key, value]) => {
        if(resume[key] instanceof Object && !(resume[key] instanceof Array) || (resume[key] instanceof Array && (resume[key].some((value) => {return typeof value === 'object'})))){
            foreach(resume[key]);
        }
        else{
            console.log(`${key} : ${value}`)
        }
        
    });
}
console.log("For Each Loop");
foreach(resume);