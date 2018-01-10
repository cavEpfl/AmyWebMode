function GCD(context) {
    var example_name = "GCD"
    var first = 234324234;
    var second = 111111111;
    var ret = fun(first, second);
    context.printString(example_name + "(" + first + ", " + second + ") = " + ret);

    function fun(a, b) {
        return b ? fun(b, a%b) : Math.abs(a);
    }
}

