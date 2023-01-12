export class NumbersCollection { 
    constructor(private data: number[]) {
    }

    compare(leftIndex: number, rightIndex: number) : boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(): void  {

    }
}