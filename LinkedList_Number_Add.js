/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var reverseArray = function (array) {
    var reversedArray = [];
    var length = array.length - 1;
    array.forEach((item)=>{
        reversedArray[length]=item;
        --length;
    });
    return reversedArray;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function(l1, l2) {
    var ftString = reverseArray(((Number(reverseArray(l1).join("")) + Number(reverseArray(l2).join(""))).toString().split("")));
  
    return ftString;
};


addTwoNumbers([2,4,3], [5,6,4]);