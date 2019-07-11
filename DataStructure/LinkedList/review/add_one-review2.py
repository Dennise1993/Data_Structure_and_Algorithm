"""
Review of 'Add One'
Author: Zhijin Li (lizhijin1993@gmail.com)
"""
def add_one(arr):
	if not arr:
		return None
	output = 1
	for i in range(len(arr)-1, -1, -1):
		output = output + arr[i]
		borrow = output//10
		if borrow == 0:
			arr[i] = output
			output = 0
			break
		else:
			output = output%10
			arr[i] = output
			output = borrow
	if output != 0:
		return [output] + arr
	return arr

# Test 
def test_function(test_case):
    arr = test_case[0]
    solution = test_case[1]
    
    output = add_one(arr)
    for index, element in enumerate(output):
        if element != solution[index]:
            print("Fail")
            return
    print("Pass")

arr = [0]
solution = [1]
test_case = [arr, solution]
test_function(test_case)

arr = [1, 2, 3]
solution = [1, 2, 4]
test_case = [arr, solution]
test_function(test_case)

arr = [9, 9, 9]
solution = [1, 0, 0, 0]
test_case = [arr, solution]
test_function(test_case)
