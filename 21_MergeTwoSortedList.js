var mergeTwoLists = function (list1, list2) {
  let mergeList = new ListNode(0, null);
  let cur1 = list1;
  let cur2 = list2;

  let currentNode = mergeList;
  while (cur1 !== null && cur2 !== null) {
    if (cur1 !== null && cur2 == null) {
      currentNode.next = cur1;
      cur1 = cur1.next;
    } else if (cur2 !== null && cur1 == null) {
      currentNode.next = cur2;
      cur2 = cur2.next;
    } else {
      if (cur1.val < cur2.val) {
        currentNode.next = cur1;
        cur1 = cur1.next;
      } else {
        currentNode.next = cur2;
        cur2 = cur2.next;
      }
    }
    currentNode = currentNode.next;
  }
  currentNode.next = cur1 || cur2;
  return mergeList.next;
};
