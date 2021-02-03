const { mergeKLists, ListNode } = require("./index");

const toArrayOfLinkedLists = (arrayOfArrays) => {
  return arrayOfArrays.map((array) => fromArrayToLinkedList(array));
};

const fromArrayToLinkedList = (array) => {
  const [first, ...rest] = array;
  if (rest.length) {
    return new ListNode(first, fromArrayToLinkedList(rest));
  }
  return new ListNode(first);
};

const fromLinkedListToArray = (listNode) => {
  if (listNode) {
    return [listNode.val, ...fromLinkedListToArray(listNode.next)];
  }
  return [];
};

test("Empty list", () => {
  expect(mergeKLists([])).toBe(null);
});

test("List of empty linked lists", () => {
  expect(mergeKLists([null, null, null])).toBe(null);
});

test("Merging are working", () => {
  expect(
    fromLinkedListToArray(
      mergeKLists(
        toArrayOfLinkedLists([
          [1, 4, 5],
          [1, 3, 4],
          [2, 6],
        ])
      )
    )
  ).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
});

test("Merging are working even with small arrays and negative numbers", () => {
  expect(
    fromLinkedListToArray(
      mergeKLists(toArrayOfLinkedLists([[-11, -5, 5], [1], [-12, 6]]))
    )
  ).toEqual([-12, -11, -5, 1, 5, 6]);
});
