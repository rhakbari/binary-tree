type Tnode = {
    value: number,
    left?: Tnode,
    right?: Tnode,
}

function compare(a: Tnode | undefined, b: Tnode | undefined) {
    if (a === undefined && b== undefined) {
        return true;
    }
    if (a === undefined || b == undefined) {
        return false;

    }
    if (a.value !== b.value) {
        return false;
    }
    return compare(a.left, b.left) && compare(a.right, b.right);
}