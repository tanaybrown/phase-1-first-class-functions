function receivesAFunction(paraFunction) {
    paraFunction()
}

function returnsANamedFunction() {
    return function test() {

    }
}

function returnsAnAnonymousFunction() {
    return function () {

    }
}