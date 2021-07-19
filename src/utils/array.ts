function swapArray<T>(array: T[], index1: number, index2: number): T[] {
    const arrayCopy = [...array];
    const temp = arrayCopy[index1];
    arrayCopy[index1] = arrayCopy[index2];
    arrayCopy[index2] = temp;
    return arrayCopy;
}

export { swapArray };
