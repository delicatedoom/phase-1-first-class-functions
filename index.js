function receivesAFunction(callback) {
    return callback()
}

function namedFunction() {
    console.log("This is a named function.")
}

function returnsANamedFunction() {
    return namedFunction
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function.")
    }
}