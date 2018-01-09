function Trees(context) {
    var example_name = "Tree union";
    var n = 100;
    var ret = fun();
    context.printString(example_name + ": " + ret);

    function buildTree(i){
        if(i > n || i < -n){
            return Empty();
        }
        else{
            var l = i > 0 ? i+1 : i-1;
            return addNumber(buildTree(l), i);
        }
    }

    function fun() {
        var t1 = buildTree(0);
        var t2 = buildTree(10);
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
