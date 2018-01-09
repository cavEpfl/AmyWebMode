function Factorial(context) {
    var example_name = "Factorial"
    var n = 30;
    var ret = fun(n);
    context.printString(example_name + "(" + n + ") = " + ret);

    function fun(n) {
        if (n < 2) {
            return 2;
        } else {
            return n * fun(n-1);
        }
    }
}

