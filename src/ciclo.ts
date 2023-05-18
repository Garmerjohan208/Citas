class PriorityQueue<T> {
    private heap: { priority: number; element: T }[];
    private size: number;
  
    constructor() {
      this.heap = [];
      this.size = 0;
    }
  
    private getParentIndex(index: number): number {
      return Math.floor((index - 1) / 2);
    }
  
    private getLeftChildIndex(index: number): number {
      return 2 * index + 1;
    }
  
    private getRightChildIndex(index: number): number {
      return 2 * index + 2;
    }
  
    private swap(index1: number, index2: number): void {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    private heapifyUp(index: number): void {
      if (index === 0) {
        return;
      }
  
      const parentIndex = this.getParentIndex(index);
  
      if (this.heap[parentIndex].priority > this.heap[index].priority) {
        this.swap(parentIndex, index);
        this.heapifyUp(parentIndex);
      }
    }
  
    private heapifyDown(index: number): void {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let smallestIndex = index;
  
      if (
        leftChildIndex < this.size &&
        this.heap[leftChildIndex].priority < this.heap[smallestIndex].priority
      ) {
        smallestIndex = leftChildIndex;
      }
  
      if (
        rightChildIndex < this.size &&
        this.heap[rightChildIndex].priority < this.heap[smallestIndex].priority
      ) {
        smallestIndex = rightChildIndex;
      }
  
      if (smallestIndex !== index) {
        this.swap(smallestIndex, index);
        this.heapifyDown(smallestIndex);
      }
    }
  
    public enqueue(element: T, priority: number): void {
      const node = { priority, element };
      this.heap.push(node);
      this.size++;
      this.heapifyUp(this.size - 1);
    }
  
    public dequeue(): T | undefined {
      if (this.isEmpty()) {
        return undefined;
      }
  
      this.swap(0, this.size - 1);
      const removedNode = this.heap.pop();
      this.size--;
      this.heapifyDown(0);
  
      return removedNode?.element;
    }
  
    public peek(): T | undefined {
      if (this.isEmpty()) {
        return undefined;
      }
  
      return this.heap[0].element;
    }
  
    public isEmpty(): boolean {
      return this.size === 0;
    }
  
    public getSize(): number {
      return this.size;
    }
}