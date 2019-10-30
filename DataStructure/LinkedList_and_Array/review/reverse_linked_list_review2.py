from linked_list import LinkedList
from linked_list import Node
"""
Reverse the inputted linked list

Author: Zhijin Li (lizhijin1993@gmail.com)

Args:
   linked_list(obj): Linked List to be reversed
Returns:
   obj: Reveresed Linked List
""" 
def reverse(linked_list):
	return LinkedList(_reverse(linked_list.head))

def _reverse(head):
	if head is None or head.next is None:
		return head

	new_head = _reverse(head.next)
	new_tail = head.next
	head.next = None
	new_tail.next = head
	return new_head

def reverse_create_new_nodes(linked_list):
	new_linked_list = LinkedList()
	prev_node = None
	for value in linked_list:
		print(value)
		new_node = Node(value)
		new_node.next = prev_node
		prev_node = new_node
	new_linked_list.head = prev_node
	return new_linked_list

##Test
llist = LinkedList()
for value in [4,2,5,1,-3,0]:
	llist.append(value)

"""flipped_recursion = reverse(llist)
is_correct_recursion = list(flipped_recursion) == list([0,-3,1,5,2,4])
print('Recursion Pass' if is_correct_recursion else 'Recursion Fail')"""

flipped_new_node = reverse_create_new_nodes(llist)
print(flipped_new_node)
is_correct_new_node = list(flipped_new_node) == list([0,-3,1,5,2,4])
print('New Node Pass' if is_correct_new_node else 'New Node Fail')