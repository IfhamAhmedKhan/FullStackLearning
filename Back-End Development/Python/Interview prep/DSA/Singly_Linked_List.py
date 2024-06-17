# Node class for Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Singly Linked List class
class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node

    def print_list(self):
        current_node = self.head
        while current_node:
            print(current_node.data, end=" -> ")
            current_node = current_node.next
        print(None)

    def delete_node(self, key):
        current_node = self.head
        if current_node and current_node.data == key:
            self.head = current_node.next
            current_node = None
            return
        prev = None
        while current_node and current_node.data != key:
            prev = current_node
            current_node = current_node.next
        if current_node is None:
            return
        prev.next = current_node.next
        current_node = None

# Usage Example
ll = SinglyLinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.print_list() 
ll.delete_node(3)
ll.print_list()
ll.delete_node(1)
ll.print_list() 
