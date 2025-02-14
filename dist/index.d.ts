export declare function levenshteinDistance(a: string, b: string): number;
export declare function normalizeString(input: string): string;
export declare function fuzzyMatch(name1: string, name2: string): number;
export declare function fuzzyMatchMultipleAndCombined(name1: string, name2Array: string[]): {
    bestSingleMatch: string;
    singleSimilarity: number;
    combinedMatch: string;
    combinedSimilarity: number;
};
