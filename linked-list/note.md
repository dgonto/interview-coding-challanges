# 1. What is linked list 
A linked list is a data structure that consists of a series of nodes, where each node stores a reference to an object and a reference to the next node in the list. The nodes are linked together in a linear fashion, with the first node (called the head) pointing to the second node, the second node pointing to the third node, and so on. The last node (called the tail) usually points to null, indicating the end of the list.

# 2. Advantage of linked list over array

There are several advantages of linked lists over arrays:

    Dynamic size: Linked lists can grow or shrink as needed, while the size of an array is fixed when it is created.

    Insertion and deletion: It is faster to insert or delete elements from the middle of a linked list than from the middle of an array, because you do not have to shift the other elements to make room for the new element or fill the gap left by the deleted element.

    Memory efficiency: Linked lists use less memory than arrays, because they only need to store the data and a reference to the next node, while arrays need to store the data for all elements. This is especially useful when you need to store a large number of elements and you want to use memory efficiently.

    Ease of implementation: Linked lists are easier to implement than arrays, because they do not require any complex indexing or resizing operations.

However, linked lists also have some disadvantages compared to arrays:

    Access time: It is slower to access elements at random indices in a linked list than in an array, because you have to follow the links from the head of the list to reach the desired element.

    Cache efficiency: Linked lists are not as cache-friendly as arrays, because the elements are not stored in contiguous memory locations and may not be stored in the same cache line. This can make linked lists slower when you need to access elements sequentially, because the cache may have to reload the data from main memory more often.

    Extra memory usage: Linked lists use more memory overall than arrays, because they require extra memory to store the references to the next node. This may not be an issue if you only need to store a small number of elements, but it can be a significant overhead for large lists.

In general, linked lists are a good choice when you need to perform frequent insertions or deletions in the middle of a list, and you do not need to access elements at random indices. Arrays are a good choice when you need fast random access to elements and you do not need to perform frequent insertions or deletions.