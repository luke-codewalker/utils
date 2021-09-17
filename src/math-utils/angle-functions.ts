/**
 * Convert radians value to degree value
 * @param radians 
 */
export const radiansToDegrees = (radians: number) => (radians * 180 / Math.PI);

/**
 * Convert degree value to radians value
 * @param degree 
 */
export const degreesToRadians = (degrees: number) => (degrees * Math.PI / 180);