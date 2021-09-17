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
    const range = (max ?? 1) - min;
    return min + Math.random() * range;
}

/**
 * Pick a random element from the given array
 * @param {unknown[]} array 
 */
export const pickRandom = <T = unknown>(array: T[]): T => array[Math.floor(random(array.length))]