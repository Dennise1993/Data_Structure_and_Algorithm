from linked_list import LinkedList
from linked_list import Node


"""
Review of "Flatten a nested linked list"

Author: Zhijin Li (lizhijin1993@gmail.com)
"""

def merge(linked_list1, linked_list2):
	"""
	Takes in two linked lists and returns one sorted linked list, 
	Assume the two linked lists are sorted
	Args:
	   linked_list1(obj): One of the two sorted linked lists 
	   linked_list2(obj): Same as above
	Returns:
	   obj: one sorted Linked List
	"""
	if linked_list1 is None:
		return linked_list2
	if linked_list2 is None:
		return linked_list1

	node1 = linked_list1.head
	node2 = linked_list2.head
	merged = LinkedList()

	while node1 or node2:
		if node1 is None:
			merged.append(node2.value)
			node2 = node2.next
		elif node2 is None:
			merged.append(node1.value)
			node1 = node1.next
		elif node1.value <= node2.value:
			merged.append(node1.value)
			node1 = node1.next
		else:
			merged.append(node2.value)
			node2 = node2.next
	return merged

class NestedLinkedList(LinkedList):
    def flatten(self):
    	return self._flatten(self.head)

    def _flatten(self, node):
    	if node.next is None:
    		return merge(node.value, None)
    	return merge(node.value, self._flatten(node.next))


# Test 
linked_list = LinkedList(Node(1))
linked_list.append(3)
linked_list.append(5)

second_linked_list = LinkedList(Node(2))
second_linked_list.append(4)

nested_linked_list = NestedLinkedList(Node(linked_list))
nested_linked_list.append(second_linked_list)
flattened = nested_linked_list.flatten()

node = flattened.head
while node is not None:
    #This will print 1 2 3 4 5
    print(node.value)
    node = node.next