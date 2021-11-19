
const picPicPic = (E) => {
    let L = E.length - 1;
    let H = E[0].length - 1;
    const sums = [];

    let nodes = [{ x: 0, y: 0, sum: E[0][0] }];

    const addNewNode = (x, y, sum) => {
        const nodeValue = E[x][y];
        const newNode = { x, y, sum: sum + nodeValue };
        nodes.push(newNode);
    }

    const iterateOnNode = (node) => {
        (node.x < L) && addNewNode(node.x + 1, node.y, node.sum);
        (node.y < H) && addNewNode(node.x, node.y + 1, node.sum);
        if (node.x === L || node.y === H) {
            sums.push(node.sum);
        }

        // No need for the current node, so remove it
        nodes = nodes.filter(n => n !== node);
    }

    while (nodes.length > 0) {
        nodes.forEach(node => iterateOnNode(node));
    }

    return Math.max(...sums);
}

module.exports = picPicPic;
