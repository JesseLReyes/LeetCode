var removeNthFromEnd = function (head, n) {
  let runner = head;
  let delRunner = head;
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    if (runner) {
      console.log("LK");
      counter++;
      runner = runner.next;
    }
  }
  while (runner !== null) {
    runner = runner.next;
    counter++;
    if (runner !== null) {
      delRunner = delRunner.next;
    }
  }

  if (counter === n) {
    return head.next;
  }
  delRunner.next = delRunner?.next?.next || null;
  return head;
};
