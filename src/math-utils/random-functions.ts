export const random = (min: number = 0, max?: number) => {
    if (min >= 0 && typeof max === 'undefined') {
        max = min;
        min = 0;
    }
    return min + Math.random() * ((max ?? 1) - min);
}

export const pickRandom = (array: unknown[]) => array[Math.floor(random(array.length))]