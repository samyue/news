
(function() {
    var index,
    length = 10;

    function printIndex(currentIndex) {
        return function(){console.log(currentIndex);};
    }
    for (index = 0; index < length; index++) {
        setTimeout(printIndex(index), 100);
    }

})();

/*

1. In the for loop, we should use local variable length instead of the length 
property of this object
2. In the anoymous function, which is passed to the setTimeout function, 
the index variable will have been changed befoe it is executed. We can
use a function generator to solve this problem.
3. Need to move the function out of loop, so the JSLint will not
complain 'make a function with a loop' warning.

*/