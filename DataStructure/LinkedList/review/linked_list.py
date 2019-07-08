"""
Node and LinkedList class for basic constructions

Author: Zhijin Li (lizhijin1993@gmail.com)
"""
class Node:
	def __init__(self, value):
		self.value = value
		self.next = None

class LinkedList:
	def __init__(self, head = None, init_list = None):
		self.head = head
		if init_list:
			for value in init_list:
				self.append(value)

	def append(self, value):
		if self.head is None:
			self.head = Node(value)
			return

		tail = self.head
		while tail.next:
			tail = tail.next

		tail.next = Node(value)

	def __iter__(self):
		current_node = self.head
		while current_node:
			yield current_node.value
			current_node = current_node.next

	def __repr__(self):
		return str([v for v in self])