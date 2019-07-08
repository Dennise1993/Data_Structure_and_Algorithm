from linked_list import LinkedList
from linked_list import Node
"""
Detecting Loops in Linked Lists

The way we'll detect Loops in Linked Lists is by having two pointers, called "runners", moving through the list at different rates. Typically we have a "slow" runner which moves at one node per step and a "fast" runner that moves at two nodes per step.

If a loop exists in the list, the fast runner will eventually move behind the slow runner as it moves to the beginning of the loop. Eventually it will catch up to the slow runner and both runners will be pointing to the same node at the same time. If this happens then you know there is a loop in the linked list.

Author: Zhijin Li (lizhijin1993@gmail.com)
"""

# Test Senario:
# Creating a loop where the last node points back to
list_with_loop = LinkedList(None, [2, -1, 3, 0, 5])
loop_start_node = list_with_loop.head.next
node = list_with_loop.head
while node.next:
	node = node.next
node.next = loop_start_node

small_loop = LinkedList(None, [0])
small_loop.head.next = small_loop.head




def iscircular(linked_list):
    """
    Determine whether the Linked List is circular or not

    Args:
       linked_list(obj): Linked List to be checked
    Returns:
       bool: Return True if the linked list is circular, return False otherwise
    """
    if linked_list is None or linked_list.head is None:
    	return False
    slow_runner = linked_list.head
    fast_runner = linked_list.head
    while fast_runner and fast_runner.next:
    	slow_runner = slow_runner.next
    	fast_runner = fast_runner.next.next
    	if fast_runner == slow_runner:
    		return True
    return False

print ("Pass" if iscircular(list_with_loop) else "Fail")
print ("Pass" if not iscircular(LinkedList(None, [-4, 7, 2, 5, -1])) else "Fail")
print ("Pass" if not iscircular(LinkedList(None, [1])) else "Fail")
print ("Pass" if iscircular(small_loop) else "Fail")
print ("Pass" if not iscircular(LinkedList(None, [])) else "Fail")