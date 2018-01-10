function Lists(context) {
    var example_name = "Lists";
    var num = 1000;
    var ret = fun();
    context.printString(example_name + ", (size=" + num +"): " + ret);

    function buildList(i){
        if(i == num){
            return Nil();
        }
        else{
            return Cons(i, buildList(i+1));
        }
    }

    function fun() {
        var list = buildList(0);
        return printList(list);
    }

    function Cons(a, b) {
        return {head:a, tail:b};
    }

    function Nil() {
        return null;
    }

    function printList(ls) {
        if (ls == null) {
            return "";
        }
        var out = ls.head.toString() + "," + printList(ls.tail);
        return out;
    }
}

