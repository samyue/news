(function() {

    function hello(name, age) {
        return function() {
            return name + ", who is " + age + " years old, says hi!";
        };
    }

    var helloToJohn = hello('John', 33);
    var helloToSam = hello('Sam', 36);

    console.log(helloToJohn());
    console.log(helloToSam());

    
})();


/*
The hello function return a closure, which references to the name and age variables 
in the outer hello function. Everytime the hello function is called, a new closure
with new scope is created.

*/