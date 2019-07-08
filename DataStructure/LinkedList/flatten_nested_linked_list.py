from linked_list import LinkedList
from linked_list import Node
"""
Flattening a nested linked list
Suppose you have a linked list where the value of each node is a sorted linked list (i.e., it is a nested list). 

Your task is to flatten this nested list—that is, to combine all nested lists into a single (sorted) linked list.

Author: Zhijin Li (lizhijin1993@gmail.com)
"""

"""
First, we'll need some code for generating nodes and a linked list:
"""

linked_list = LinkedList(Node(1))
linked_list.append(3)
linked_list.append(5)

second_linked_list = LinkedList(Node(2))
second_linked_list.append(4)

"""
nested_linked_list should now have 2 nodes. 
The head node is a linked list containing 1, 3, 5. 
The second node is a linked list containing 2, 4.

Calling flatten should return a linked list containing 1, 2, 3, 4, 5.
"""

"""
First, let's implement a merge function that takes in two linked lists and returns one sorted linked list. 

Note, this implementation expects both linked lists to be sorted.
"""

def merge(linked_list1, linked_list2):
	if linked_list1 is None:
		return linked_list2
	if linked_list2 is None:
		return linked_list1

	merged = LinkedList()

	list1_node = linked_list1.head
	list2_node = linked_list2.head
	while list1_node is not None or list2_node is not None:
		if list1_node is None:
			merged.append(list2_node.value)
			list2_node = list2_node.next
		elif list2_node is None:
			merged.append(list1_node.value)
			list1_node = list1_node.next
		elif list1_node.value <= list2_node.value:
			merged.append(list1_node.value)
			list1_node = list1_node.next
		else:
			merged.append(list2_node.value)
			list2_node = list2_node.next
	return merged

# Now let's implement flatten recursively using merge.
class NestedLinkedList(LinkedList):
    def flatten(self):
        return self._flatten(self.head)

    def _flatten(self, node):
    	if node.next is None:
    		return merge(node.value, None)
    	return merge(node.value, self._flatten(node.next))

# TEST 
nested_linked_list = NestedLinkedList(Node(linked_list))
nested_linked_list.append(second_linked_list)
flattened = nested_linked_list.flatten()

node = flattened.head
while node is not None:
    #This will print 1 2 3 4 5
    print(node.value)
    node = node.next