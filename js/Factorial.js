function Factorial(context) {
    var example_name = "Factorial"
    var num = 30;
    var ret = fun(num);
    context.printString(example_name + "(" + num + ") = " + ret);

    function fun(n) {
        if (n < 2) {
            return 1;
        } else {
            return n * fun(n-1);
        }
    }
}

