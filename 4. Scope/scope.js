// var(variable) - let - const

// SCOPE:
// Global Scope, Function Scope, Block Scope

//* Global Scope can be reached anywhere

// var myage = 29;

// console.log(myage);

// var a = 5;

// if(true){
// console.log(a);

// }

// function method1(){

//     var number= 10;
//     console.log(number);

// }


function method1(){
        var a=5; // FUNCTION SCOPE
    if(true){
        var a=5; // BLOCK SCOPE

    }

    while(true){

    }

    for(let i=0; i<=10; i++){

    }
}