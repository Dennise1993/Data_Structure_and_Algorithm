from linked_list import Node

"""
Problem Statement
Given a linked list with integer value, arrange the elements in such a manner 
that all nodes with even numbers are placed after odd numbers. 

Do not create any new nodes and avoid using any other value structure. 
The relative order of even and odd elements must not change.

Example:

linked list = 1 2 3 4 5 6
output = 1 3 5 2 4 6
"""

def even_after_odd(head):
    """
    :param - head - head of linked list
    return - updated list with all even elements are odd elements

    Author: Zhijin Li (lizhijin1993@gmail.com)
    """
    odd = None
    odd_tail = None
    even = None
    even_tail = None

    while head:
    	if head.value % 2 == 0: # even
    		if even == None:
    			even = head
    			even_tail = even
    		else:
    			even_tail.next = head
    			even_tail = even_tail.next
    	else: 					# odd
    		if odd ==None:
    			odd = head
    			odd_tail = odd
    		else:
    			odd_tail.next = head
    			odd_tail = odd_tail.next
    	temp = head.next
    	head.next = None
    	head = temp

    if odd == None:
    	return even

    odd_tail.next = even

    return odd

# helper functions for testing purpose
def create_linked_list(arr):
    if len(arr)==0:
        return None
    head = Node(arr[0])
    tail = head
    for value in arr[1:]:
        tail.next = Node(value)
        tail = tail.next
    return head

def print_linked_list(head):
    while head:
        print(head.value, end=' ')
        head = head.next
    print()

def test_function(test_case):
    head = test_case[0]
    solution = test_case[1]
    
    node_tracker = dict({})
    node_tracker['nodes'] = list()
    temp = head
    while temp:
        node_tracker['nodes'].append(temp)
        temp = temp.next

    head = even_after_odd(head)    
    temp = head
    index = 0
    try:
        while temp:
            if temp.value != solution[index] or temp not in node_tracker['nodes']:
                print("Fail")
                return
            temp = temp.next
            index += 1
        print("Pass")            
    except Exception as e:
        print("Fail")

# Test case 1
arr = [1, 2, 3, 4, 5, 6]
solution = [1, 3, 5, 2, 4, 6]

head = create_linked_list(arr)
test_case = [head, solution]
test_function(test_case)

# Test case 2
arr = [1, 3, 5, 7]
solution = [1, 3, 5, 7]

head = create_linked_list(arr)
test_case = [head, solution]
test_function(test_case)

# Test case 3
arr = [2, 4, 6, 8]
solution = [2, 4, 6, 8]
head = create_linked_list(arr)
test_case = [head, solution]
test_function(test_case)