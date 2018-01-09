function Fibonacci(context) {
    var example_name = "Fibonacci"
    var n = 40;
    var ret = fun(n);
    context.printString(example_name + "(" + n + ") = " + ret);

    function fun(n) {
        if(n == 0 || n == 1) {
            return 1;
        } else {
            return fun(n-1) + fun(n-2);
        }
    }
}



