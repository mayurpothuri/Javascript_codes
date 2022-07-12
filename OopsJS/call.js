const obj = {
    num: 3,
    increment: function () {
        /*  here "this"[implicit parameter] binds to:
            1) global object if regular/normal function invocation is done like - increment()
            2) caller object if invoked like - obj.increment()
            3) object in parenthesis for call(), apply() or bind() function calls[these functions are under
                Function.prototype object]
            4) parent scope's "this" if used arrow function[it doesn't have it's own "this"]
        */
        this.num++;
        console.log(this.num);
    }
}

const otherObj = {
    num: 10
}

//using "call" method, obj's "this" is assigned to otherObj's "this"
console.log(obj.increment.call(otherObj));

