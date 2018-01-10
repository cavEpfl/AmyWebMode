function Trees(context) {
    var example_name = "Tree union";
    var num = 30;
    var ret = fun();
    context.printString(example_name + ": " + ret);

    function buildTree(i){
        if(i <= num){
            var l = i+1;
            return addNumber(buildTree(l), i);
        }
        else{
            return Empty();
        }
    }

    function fun() {
        var t1 = addNumber(buildTree(0), 5);
        var t2 = addNumber(buildTree(1), 4);
        return printTree(union(t1,t2));
    }

    function Empty() {
        return null;
    }

    function Tree(e, l, r) {
        return {elem: e, left: l, right: r};
    }

    function addNumber(tree, number) {
        if (tree == Empty()) {
            return Tree(number, Empty(), Empty());
        }
        var n = tree.elem;
        var l = tree.left;
        var r = tree.right;
        if (number < n) {
            return Tree(n, addNumber(l, number), r);
        } else {
            if (!(number <= n)) {
                return Tree(n, l, addNumber(r, number));
            } else {
                return tree;
            }
        }
    }

    function union(thisTree, thatTree) {
        if (thisTree == Empty()) {
            return thatTree;
        } else {
            var n = thisTree.elem;
            var l = thisTree.left;
            var r = thisTree.right;
            return addNumber(union(union(l, r), thatTree), n);
        }
    }

    function printTree(tree) {
        if (tree == Empty()) {
            return ".";
        } else {
            var n = tree.elem;
            var l = tree.left;
            var r = tree.right;
            return "{" + printTree(l) + n + printTree(r) + "}";
        }
    }
}
