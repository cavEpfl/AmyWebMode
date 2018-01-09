function Nroot(context) {
    var num = 8000;
    var n = 6666;
    var ret = fun(num, n, 10);
    context.printString(n+"-root(" + num + ") = " + ret);

    function fun(num, n, niter) {
        var x = 1;
        for (var i=0; i<niter; i++) {
            x = 1/n * ((n-1)*x + (num/Math.pow(x,n-1)));
        }

        return x;
    }
}

