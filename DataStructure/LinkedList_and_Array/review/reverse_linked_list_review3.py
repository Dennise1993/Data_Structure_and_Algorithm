from linked_list import LinkedList
from linked_list import Node

"""
Reverse the inputted linked list

Author: Zhijin Li (lizhijin1993@gmail.com)
"""

def reverse(linked_list):
	"""
	Args:
	   linked_list(obj): Linked List to be reversed
	Returns:
	   obj: Reveresed Linked List
	""" 
	if linked_list is None:
		return None
	prev_node = None
	for value in linked_list:
		new_node = Node(value)
		new_node.next = prev_node
		prev_node = new_node
	reversed_linked_list = LinkedList(prev_node, None)
	return reversed_linked_list

def reverse_recursion(linked_list):
	new_head = _reverse_recursion(linked_list.head)
	return LinkedList(new_head, None)

def _reverse_recursion(head):
	"""
	Args:
	   head(Node): head of the linked list to be reversed
	Returns:
	   new_head(Node) head of the reversed linked list
	""" 
	if head is None or head.next is None:
		return head
	new_head = _reverse_recursion(head.next)
	head.next.next = head
	head.next = None
	return new_head

##Test
llist = LinkedList()
for value in [4,2,5,1,-3,0]:
	llist.append(value)

flipped_recursion = reverse_recursion(llist)
is_correct_recursion = list(flipped_recursion) == list([0,-3,1,5,2,4])
print('Recursion Pass' if is_correct_recursion else 'Recursion Fail')

"""flipped = reverse(llist)
print(flipped)
is_correct = list(flipped) == list([0,-3,1,5,2,4])
print('Pass' if is_correct else 'Fail')"""