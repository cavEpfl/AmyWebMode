function Hanoi(context) {
    var example_name = "Hanoi"
    var n = 1000;
    var ret = fun(n);
    context.printString(example_name + "(" + n + ") = " + ret);

    function fun(n) {
        if (n < 1) {
            context.printString("Can't solve hanoi for less than one plate");
        } else if (n == 1) {
            return 1;
        } else {
            return 2*fun(n-1) + 1;
        }
    }
}


