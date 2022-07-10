'use strict';

/*  Note:
    since every function are objects[first class functions], so it has "function-object" combo.
    so it has both Object{} and Function{}.
*/
function multipleBy2(num) {
    return num * 2;
}
/*  multiplyBy2{
        multiplyBy2 : function(num){ return num * 2; },
        __proto__ : Function.prototype
    }
*/

console.log(multipleBy2.toString());//this method is in Function.prototype
/*  Function{
        prototype : {
            call : function(...){...},
            apply : function(...){...},
            bind : function(...){...},
            toString : function(...){...}
            ...
        }
        __proto__ : Object.prototype
    }
*/

console.log(multipleBy2.hasOwnProperty("score"));//this method is accessible through Object's prototype's object having
// shared functionalities.
/*  Object{
        prototype : {
            hasOwnProperty : function(...){...},
            ...
        }
        __proto__ : null
    }
*/
/*  A note on the last line of this slide: __proto__ is now a private variable and not exposed by default on the 
    object; you now should use Object.getPrototypeOf to grab an object's prototype.
*/