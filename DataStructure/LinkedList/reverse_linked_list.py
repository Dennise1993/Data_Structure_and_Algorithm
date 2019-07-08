from linked_list import LinkedList
from linked_list import Node
"""
Reverse the inputted linked list

Args:
   linked_list(obj): Linked List to be reversed
Returns:
   obj: Reveresed Linked List
"""
def reverse(linked_list):
	# HINT: Create New Nodes 
	pre_node = None
	reversed_linked_list = LinkedList()

	for value in linked_list:
		new_node = Node(value)
		new_node.next = pre_node
		pre_node = new_node

	reversed_linked_list.head = pre_node
	return reversed_linked_list

def reverse_without_helper(linked_list):
	new_list = LinkedList()
	pre_node = None

	current_node = linked_list.head
	while current_node:
		new_node = Node(current_node.value)
		new_node.next = pre_node
		pre_node = new_node
		current_node = current_node.next

	new_list.head = pre_node

	return new_list

def reverse_linked_recursion(linked_list):
	new_head = reverse_recursion(linked_list.head)
	return LinkedList(new_head)


def reverse_recursion(head):
	"""
	the original linked_list will look like:

		A --> B --> C --> D --> E --> None

	Assume we have reversed the linked list
	except the head. The linked list will 
	look like below:

		A  None <-- B <-- C <-- D <-- E
		|          /|\
		|___________|

	Now what we need to do is:

		A  None     B <-- C <-- D <-- E
	   /|\         /|\
		|___________|

		head.next.next = head
		
		A->None 	B <-- C <-- D <-- E
	   /|\          |
		|___________|
		head.next = None
	"""
	if head is None or head.next is None:
		return head
	
	new_head = reverse_recursion(head.next)
	head.next.next = head
	head.next = None

	return new_head



##Test
llist = LinkedList()
for value in [4,2,5,1,-3,0]:
	llist.append(value)

flipped = reverse(llist)
is_correct = list(flipped) == list([0,-3,1,5,2,4])
print('Pass' if is_correct else 'Fail')
