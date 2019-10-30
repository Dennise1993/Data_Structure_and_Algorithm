import hashlib
from time import gmtime
import time

class Block:

    def __init__(self, timestamp, data, previous_hash):
      self.timestamp = timestamp
      self.data = data
      self.previous_hash = previous_hash
      self.hash = self.calc_hash()

    def calc_hash(self):
      sha = hashlib.sha256()

      sha.update(str(self.timestamp).encode('utf-8'))
      sha.update(str(self.data).encode('utf-8'))
      sha.update(str(self.previous_hash).encode('utf-8'))
      return sha.hexdigest()

class Blockchain:
	
	def __init__(self):
		self.blocks = []

	def add_block(self,data):
		if len(self.blocks) == 0:
			self.blocks.append(Block(time.gmtime(), data, None))
		else:
			prev_hash = self.blocks[-1].hash
			self.blocks.append(Block(time.gmtime(), data, prev_hash))

	def print_blockchain(self):
		for block in blocks:
			print("timestamp: ", block.timestamp)
			print("data: ", block.data)
			print("previous_hash: ", block.previous_hash)
			print("hash: ", block.hash)

	def validate_chain(self):
		if len(self.blocks) == 0:
			return True
		if self.blocks[0].hash != self.blocks[0].calc_hash():
			return False
		for i in range(1, len(blocks)):
			if self.blocks[i-1].hash != self.blocks[i].previous_hash:
				return False
			if self.blocks[i].hash != self.blocks[i].calc_hash():
				return False
			if self.blocks[i-1].timestamp >= self.blocks[i].timestamp:
                return False