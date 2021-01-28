export const random = (min: number = 0, max: number = 1) => {
    return min + Math.random() * (max - min);
}