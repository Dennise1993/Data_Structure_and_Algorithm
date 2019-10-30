class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def __repr__(self):
        return str(self.value)


class LinkedList:
    def __init__(self):
        self.head = None

    def __str__(self):
        cur_head = self.head
        out_string = ""
        while cur_head:
            out_string += str(cur_head.value) + " -> "
            cur_head = cur_head.next
        return out_string


    def append(self, value):

        if self.head is None:
            self.head = Node(value)
            return

        node = self.head
        while node.next:
            node = node.next

        node.next = Node(value)

    def size(self):
        size = 0
        node = self.head
        while node:
            size += 1
            node = node.next

        return size

"""
 loop through both linked lists and store the elements 
 of both lists with its occurrence in the map

 Params: llist_1, llist_2: linked lists 
 Returns: ouccrrence_map: dictionary, in which key represents element in 
            linked lists, and value (array) represents the occurences of the 
            value. The first element of the value is the occurence in llist_1,
            and the second element of the value is the occurence in llist_2
 """
def get_occurence_map(llist_1, llist_2):
    ouccrrence_map = dict()
    if llist_1.head is not None:
        node = llist_1.head
        while node:
            value = node.value
            if value in ouccrrence_map:
                ouccrrence_map[value][0] += 1
            else:
                ouccrrence_map[value] = [1]
            node = node.next
    if llist_2.head is not None:
        node = llist_2.head
        while node:
            value = node.value
            if value in ouccrrence_map:
                if len(ouccrrence_map[value]) == 1:
                    ouccrrence_map[value].append(1)
                else:
                    ouccrrence_map[value][1] += 1
            else:
                ouccrrence_map[value] = [0,1]
            node = node.next

    return ouccrrence_map

def union(llist_1, llist_2):
    ouccrrence_map = get_occurence_map(llist_1, llist_2)
    linked_list = LinkedList()
    for key in ouccrrence_map:
        linked_list.append(key)
    return linked_list

def intersection(llist_1, llist_2):
    ouccrrence_map = get_occurence_map(llist_1, llist_2)
    linked_list = LinkedList()
    for key, array in ouccrrence_map.items():
        if len(array) == 2 and array[0] and array[1]:
            linked_list.append(key)
    return linked_list


# Test case 1
print("test starts")
linked_list_1 = LinkedList()
linked_list_2 = LinkedList()

element_1 = [3,2,4,35,6,65,6,4,3,21]
element_2 = [6,32,4,9,6,1,11,21,1]

for i in element_1:
    linked_list_1.append(i)

for i in element_2:
    linked_list_2.append(i)

print (union(linked_list_1,linked_list_2)) # 3,2,4,35,6,65,21,32,9,1,11
print (intersection(linked_list_1,linked_list_2)) # 4, 6, 21

# Test case 2

linked_list_3 = LinkedList()
linked_list_4 = LinkedList()

element_1 = [3,2,4,35,6,65,6,4,3,23]
element_2 = [1,7,8,9,11,21,1]

for i in element_1:
    linked_list_3.append(i)

for i in element_2:
    linked_list_4.append(i)

print (union(linked_list_3,linked_list_4)) # 3,2,4,35,6,65,23,1,7,8,9,11,21
print (intersection(linked_list_3,linked_list_4)) # no intersection