var maxArea = function (height) {
  let width = height.length;
  let maxArea = 0;
  let leftIndex = 0;
  let rightIndex = width - 1;

  while (leftIndex < rightIndex) {
    let leftHeight = height[leftIndex];
    let rightHeight = height[rightIndex];

    let currentArea =
      Math.min(leftHeight, rightHeight) * Math.abs(leftIndex - rightIndex);

    if (currentArea > maxArea) {
      maxArea = currentArea;
    }

    if (leftHeight < rightHeight) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return maxArea;
};
