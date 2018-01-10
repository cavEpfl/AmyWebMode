function Hanoi(context) {
    var example_name = "Hanoi"
    var num = 1000;
    var ret = fun(num);
    context.printString(example_name + "(" + num + ") = " + ret);

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


