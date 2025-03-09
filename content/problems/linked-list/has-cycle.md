+++
date = '2025-03-08T11:15:50-08:00'
draft = false
title = 'Has Cycle'
+++

"iterate" through a linked list to check if any of the nodes
point back to a previous node, creating a cycle.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


var hasCycle = function(head) {
    let visited = new Set(); // use a set to track which nodes have been visited
    let current = head; // pointer, not SURE we need this. Can't we just use head?

    while (current !== null) { // null signals the end of the list
        if (visited.has(current)) { // check if the node has been visited
            return true;
        } else {
            visited.add(current); // if not, add it to the list
            current = current.next; // update our pointer.
        }
    }

    return false; // return false if we make it through the entire list
    
};

// Floyd's Cycle Finding Algorithm

// Provided by gemini, supposed to be faster.

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  * this.val = val;
//  * this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var hasCycle = function(head) {
//     if (!head || !head.next) {
//         return false;
//     }

//     let slow = head;
//     let fast = head.next;

//     while (slow !== fast) {
//         if (!fast || !fast.next) {
//             return false;
//         }
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     return true;
// };
```