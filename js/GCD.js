function GCD(context) {
    var example_name = "GCD"
    var a = 23432423489238738742893789437363934923837465672723;
    var b = 11111111111111111111111111111163811772030917980576;
    var ret = fun(a, b);
    context.printString(example_name + "(" + a + ", " + b + ") = " + ret);

    function fun(a, b) {
        return b ? fun(b, a%b) : Math.abs(a);
    }
}

