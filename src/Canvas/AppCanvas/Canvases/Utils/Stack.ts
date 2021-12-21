export default class Stack<T> {
    private stack: [T?] = [];
    
    push = (item: T) => {
      this.stack.push(item);
    }

    pop = () => {
        this.stack.pop();
    }

    peek = () => {
        return this.stack[this.size -1];
    }

    get size() {
        return this.stack.length;
    }
}