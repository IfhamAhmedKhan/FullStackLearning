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
        return len(self.values) == 0 
    
Q = Queue()
Q.enqueue(1)
Q.enqueue(2)
Q.enqueue(3)
print(Q.values)
Q.dequeue()
print(Q.values)
print(Q.is_empty())
print(Q.peek())