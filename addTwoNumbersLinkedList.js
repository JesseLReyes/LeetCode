var addTwoNumbers = function (l1, l2) {
  let rootNode = {
    val: null,
    next: null,
  };

  let carryOver = 0;

  let curL1Node = l1;
  let curL2Node = l2;

  let curNode = rootNode;
  while (curL1Node !== null || curL2Node !== null || carryOver !== 0) {
    let cur1Value = curL1Node ? curL1Node.val : 0;
    let curL2Value = curL2Node ? curL2Node.val : 0;
    let intValue = cur1Value + curL2Value + carryOver;
    if (intValue > 9) {
      carryOver = 1;
      intValue -= 10;
    } else {
      carryOver = 0;
    }
    curNode.val = intValue;
    curL1Node = curL1Node ? curL1Node.next : null;
    curL2Node = curL2Node ? curL2Node.next : null;

    if (curL1Node || curL2Node || carryOver !== 0) {
      curNode.next = { val: null, next: null };
      curNode = curNode.next;
    }
  }
  return rootNode;
};
