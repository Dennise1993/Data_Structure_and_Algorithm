
class Entry:
	def __init__(self, key, value):
		self.key = key
		self.value = value 
		self.next = None 
		self.pre = None 

class LRU_Cache(object):

    def __init__(self, capacity):
        # Initialize class variables
        self.capacity = 5
        self.hash_map = {}
        # Entry object representing the most recently used entry
        self.head = None 
        # Entry object representing the least recently used entry
        self.tail = None 
        
        pass

    def get(self, key):
        # Retrieve item from provided key. Return -1 if nonexistent. 
        if key in self.hash_map:
        	entry = self.hash_map[key]
        	self.removeEntry(entry)
        	self.setAsHead(entry)
        	return entry.value
        else:
        	return -1
        pass

    def set(self, key, value):
        # Set the value if the key is not present in the cache. If the cache is at capacity remove the oldest item. 
        if key in self.hash_map:
        	entry = self.hash_map[key]
        	entry.value = value
        	self.removeEntry(entry)
        	self.setAsHead(entry)
        else:
        	new_entry = Entry(key, value)
        	if len(self.hash_map) == self.capacity:      		       		
        		deleted_entry = self.tail
        		self.removeEntry(deleted_entry)
        		self.hash_map.pop(deleted_entry.key)       		
        		
        	self.setAsHead(new_entry)
        	self.hash_map[key] = new_entry
        pass

    # Remove the entry from the doubly linked list
    def removeEntry(self, entry):
    	if entry is None:
    		return
    	pre_entry = entry.pre
    	next_entry = entry.next

    	# if entry is head
    	if not pre_entry and next_entry:
    		next_entry.pre = None
    		self.head = next_entry
    	# if entry is the only element in the hashmap
    	if not pre_entry and not next_entry:
    		self.head = None 
    		self.tail = self.head
    	# if entry is tail
    	if pre_entry and not next_entry:
    		pre_entry.next = None 
    		self.tail = pre_entry
    	# if entry is a node in the middle of the linked list
    	if pre_entry and next_entry:
    		pre_entry.next = next_entry
    		next_entry.pre = pre_entry

    	entry.pre = None
    	entry.next = None 

    # Put the entry at the top of doubly linked list
    def setAsHead(self, entry):
    	if entry is None:
    		return
    	if self.head:
    		self.head.pre = entry
    		entry.next = self.head
    	self.head = entry


our_cache = LRU_Cache(5)

our_cache.set(1, 1)
our_cache.set(2, 2)
our_cache.set(3, 3)
our_cache.set(4, 4)


print(our_cache.get(1))      # returns 1
print(our_cache.get(2))       # returns 2
print(our_cache.get(9))      # returns -1 because 9 is not present in the cache

our_cache.set(5, 5) 
our_cache.set(6, 6)

print(our_cache.get(3))      # returns -1 because the cache reached it's capacity and 3 was the least recently used entry