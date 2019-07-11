from linked_list import Node

"""
Review of 'Even after Odd'
Author: Zhijin Li (lizhijin1993@gmail.com)
"""

def even_after_odd(head):
    """
    :param - head - head of linked list
    return - updated list with all even elements are odd elements
    """
    odd = None
    odd_tail = None
    even = None
    even_tail = None

    if head is None:
    	return None

    while head:
    	if head.value%2 == 0: # even
    		if even is None:
    			even = head
    			even_tail = head
    		else:
    			even_tail.next = head
    			even_tail = even_tail.next
    	else:
    		if odd is None:
    			odd = head
    			odd_tail = head
    		else:
    			odd_tail.next = head
    			odd_tail = odd_tail.next
    	temp = head.next
    	head.next = None
    	head = temp

    if odd is None:
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

