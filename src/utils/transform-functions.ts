/**
 * Limit a number between the given upper and lower bound
 * @param n the number to limit
 * @param lowerBound the lower bound 
 * @param upperBound the upper bound
 */
export const limit = (n: number, lowerBound: number, upperBound: number): number => {
    if (n > upperBound) {
        return upperBound;
    }

    if (n < lowerBound) {
        return lowerBound;
    }

    return n;
}

/**
 * Map a number from one range into another
 * @param n number to map
 * @param originStart lower bound of n's original range
 * @param originEnd upper bound of n's original range
 * @param targetStart lower bound of target range
 * @param targetEnd upper bound of target range
 * @param constrain wether to constrain the output within the new range, default: false
 */
export const map = (n: number, originStart: number, originEnd: number, targetStart: number, targetEnd: number, constrain = false): number => {
    const mappedValue = ((n - originStart) / (originEnd - originStart)) * (targetEnd - targetStart) + targetStart;

    if (!constrain) return mappedValue;

    return targetStart <= targetEnd ? limit(mappedValue, targetStart, targetEnd) : limit(mappedValue, targetEnd, targetStart);
}

/**
 * Normalize a number from an original range to between 0 and 1.
 * Basically short for norm(n, low, high, 0, 1, true)
 * @param n number to map
 * @param lowerBound lower bound of n's original range
 * @param upperBound upper bound of n's original range
 */
export const norm = (n: number, lowerBound: number, upperBound: number) => map(n, lowerBound, upperBound, 0, 1, true);