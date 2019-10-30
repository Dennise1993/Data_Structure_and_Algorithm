import sys
import heapq

def calculate_freq(data):
    freq_dict = {}
    for c in data:
        freq_dict[c] = freq_dict.get(c,0) + 1
    print(freq_dict)
    return freq_dict

def build_priority_queue(freq_dict):
    freq_priority_queue = []
    for c, freq in freq_dict.items():
        freq_priority_queue.append((freq, c))
    heapq.heapify(freq_priority_queue)
    print(freq_priority_queue)
    return freq_priority_queue

def build_huffman_tree(freq_priority_queue):
    while len(freq_priority_queue) > 1:
        least_two_tuples = tuple(freq_priority_queue[0:2])
        sum_freq = least_two_tuples[0][0] + least_two_tuples[1][0]
        comb_freq_tuple = (sum_freq, least_two_tuples)

        heapq.heappop(freq_priority_queue)
        heapq.heappop(freq_priority_queue)

        heapq.heappush(freq_priority_queue, comb_freq_tuple)
    return freq_priority_queue

def trim_tree(huffman_tree):
    node = huffman_tree[1]
    if type(node) == type(""):
        return node
    else:
        return (trim_tree(node[0]), trim_tree(node[1]))

def assign_code_to_letter(trim_tree):
    char_code_dict = {}
    _assign_code(trim_tree, char_code_dict, "")
    return char_code_dict

def _assign_code(trim_tree, dic, code):
    if type(trim_tree) == type(""):
        dic[trim_tree] = code
    else:
        _assign_code(trim_tree[0], dic, code+"0")
        _assign_code(trim_tree[1], dic, code+"1")

def encode_data(data, char_code_dict):
    encoded_data = ""
    for c in data:
        encoded_data += char_code_dict[c]
    return encoded_data

def huffman_encoding(data):
    # put the frequencies for each letter into a dictionary
    freq_dict = calculate_freq(data)

    # put the (frequency, char) in a priority queue
    priority_queue = build_priority_queue(freq_dict)

    # build the Huffman Tree
    huffman_tree = build_huffman_tree(priority_queue)

    # trim the Huffman Tree: cut off the frequency, and just leave letters
    trim_tree = trim_tree(huffman_tree)

    # encode the text using Huffman Tree
    char_code_dict = assign_code_to_letter(trim_tree)
    encoded_data = encode_data(data, char_code_dict)

    return (encoded_data, trim_tree)
    

def huffman_decoding(data,tree):
    decoded_str = ""
    sub_tree = tree
    for bit in data:
        if bit == "0":
            sub_tree = sub_tree[0]
        else: 
            sub_tree = sub_tree[1]

        if type(sub_tree) == type(""):
            decoded_str += sub_tree
            sub_tree = tree

    return decoded_str
    

if __name__ == "__main__":
    codes = {}

    a_great_sentence = "The bird is the word"

    print ("The size of the data is: {}\n".format(sys.getsizeof(a_great_sentence)))
    print ("The content of the data is: {}\n".format(a_great_sentence))

    encoded_data, tree = huffman_encoding(a_great_sentence)

    print ("The size of the encoded data is: {}\n".format(sys.getsizeof(int(encoded_data, base=2))))
    print ("The content of the encoded data is: {}\n".format(encoded_data))

    decoded_data = huffman_decoding(encoded_data, tree)

    print ("The size of the decoded data is: {}\n".format(sys.getsizeof(decoded_data)))
    print ("The content of the encoded data is: {}\n".format(decoded_data))


"""
heap = []
heapq.heappush(heap, (1, 'one'))
heapq.heappush(heap, (10, 'ten'))
heapq.heappush(heap, (5,'five'))
heapq.heappush(heap, (2, ((1, 'one1'),(1, 'one2'))))

for x in heap:
    print(x)

print(heap[0:2])
"""