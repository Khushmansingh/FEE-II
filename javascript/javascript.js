function outer(){
    var a=5;

    return function inner(){
        a++;
        console.log(a);
    }
}

const fun = outer();

fun();
fun();
fun();
fun();



// Map

a={
    name:"Khushman",
    age: 29
}
console.log(a[name]);


// for each ;pp[

for (x in a){
    
}