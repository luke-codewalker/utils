/**
 * Pick a random number between min and max, 0 and min or 0 and 1
 * @param {number} min 
 * @param {number} max 
 */
export const random = (min: number = 0, max?: number) => {
    if (min >= 0 && typeof max === 'undefined') {
        max = min;
        min = 0;
    }
    return min + Math.random() * ((max ?? 1) - min);
}

export const pickRandom = (array: unknown[]) => array[Math.floor(random(array.length))]