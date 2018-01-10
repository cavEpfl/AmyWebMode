function Fibonacci(context) {
    var example_name = "Fibonacci";
    var num = 40;
    var ret = fibonacci(num-1);
    context.printString(example_name + "(" + num + ") = " + ret);

    function fibonacci(n) {
        if (n < 2){
            return 1;
        }else{
            return fibonacci(n-2) + fibonacci(n-1);
        }
    }
}



