// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [1->4->5, 1->3->4, 2->6]
// Output: 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: null

// Example 3:
// Input: lists = [[]]
// Output: null

// I.e. Empty list should correspond to null. 

// Constraints:

// k == lists.length
// lists[i] is sorted in ascending order.

/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function (lists) {
    // ... Your code here
};

module.exports = {
    mergeKLists,
    ListNode
};
