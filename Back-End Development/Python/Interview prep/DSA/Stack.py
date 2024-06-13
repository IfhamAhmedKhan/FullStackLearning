class stack:
    def __init__(self):
        self.values = []

    def push(self, x):
        self.values.append(x)

    def pop(self):
        return self.values.pop() if not self.is_empty() else None
    
    def is_empty(self):
        return len(self.values) == 0

    def peek(self):
        return self.values[-1] if not self.is_empty() else None

    
s = stack()
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