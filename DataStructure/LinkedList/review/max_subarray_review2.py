from linked_list import Node
from linked_list import LinkedList
"""
Review of max sum subarray
Author: Zhijin Li(lizhijin1993@gmail.com)
"""

def max_sum_subarray(arr):
	if not arr:
		return None
	max_sum = arr[0]
	current_sum = arr[0]
	for num in arr[1:]:
		current_sum = max(num, num+current_sum)
		max_sum = max(current_sum, max_sum)
	return max_sum

def test_function(test_case):
    arr = test_case[0]
    solution = test_case[1]
    
    output = max_sum_subarray(arr)
    if output == solution:
        print("Pass")
    else:
        print("Fail")

# Test Case 1
arr= [1, 2, 3, -4, 6]
solution= 8 # sum of array

test_case = [arr, solution]
test_function(test_case)

# Test Case 2
arr = [1, 2, -5, -4, 1, 6]
solution = 7   # sum of last two elements

test_case = [arr, solution]
test_function(test_case)

# Test Case 3
arr = [-12, 15, -13, 14, -1, 2, 1, -5, 4]
solution = 18  # sum of subarray = [15, -13, 14, -1, 2, 1]

test_case = [arr, solution]
test_function(test_case)