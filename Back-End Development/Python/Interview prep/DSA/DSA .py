# Stack
class Stack:
    def __init__(self):
        self.values = []
        
    def push(self, x):
        self.values.append(x)
    
    def pop(self):
        return self.values.pop() if not self.is_empty() else None
        
    def peek(self):
        return self.values[-1] if not self.is_empty() else None
        
    def is_empty(self):
        return len(self.values)==0
    
s = Stack()
print(s.is_empty())
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)
print(s.values)
s.pop()
print(s.values)
print(s.is_empty())
print(s.peek())

print("--------------------------------")

# Queue
class Queue:
    def __init__(self):
        self.values = []
        
    def enqueue(self, x):
        self.values.append(x)
    
    def dequeue(self):
        return self.values.pop(0) if not self.is_empty() else None
        
    def peek(self):
        return self.values[0] if not self.is_empty() else None
        
    def is_empty(self):
        return len(self.values)==0
    
Q = Queue()
Q.enqueue(1)
Q.enqueue(2)
Q.enqueue(3)
print(Q.values)
Q.dequeue()
print(Q.values)
print(Q.is_empty())
print(Q.peek())

print("--------------------------------")

# Linked list
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        
# making nodes
node1 = Node(10)
node2 = Node(20)
node3 = Node(30)
node4 = Node(40)

# connecting nodes 
node1.next = node2
node2.next = node3
node3.next = node4 

# printing nodes
current = node1

while current is not None:
    print(current.data, end=" -> ")
    current = current.next
    
print("None")

print("--------------------------------")