"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.levenshteinDistance = levenshteinDistance;
exports.normalizeString = normalizeString;
exports.fuzzyMatch = fuzzyMatch;
exports.fuzzyMatchMultipleAndCombined = fuzzyMatchMultipleAndCombined;
// src/index.ts
function levenshteinDistance(a, b) {
    const matrix = [];
    // Initialize the matrix
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    // Compute the Levenshtein distance
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            const cost = a[j - 1] === b[i - 1] ? 0 : 1;
            matrix[i][j] = Math.min(matrix[i - 1][j] + 1, // Deletion
            matrix[i][j - 1] + 1, // Insertion
            matrix[i - 1][j - 1] + cost // Substitution
            );
        }
    }
    return matrix[b.length][a.length];
}
function normalizeString(input) {
    const normalized = input
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
        .toLowerCase()
        .replace(/[-_]/g, " ") // Replace hyphens/underscores with spaces
        .replace(/[^\w\s]/g, " ") // Remove punctuation
        .replace(/\s+/g, " ") // Collapse multiple spaces
        .trim();
    const words = normalized.split(" ");
    return words.sort().join(" ");
}
function fuzzyMatch(name1, name2) {
    const normalized1 = normalizeString(name1);
    const normalized2 = normalizeString(name2);
    const maxLength = Math.max(normalized1.length, normalized2.length);
    if (maxLength === 0)
        return 1; // Both strings are empty
    const distance = levenshteinDistance(normalized1, normalized2);
    const similarity = 1 - distance / maxLength;
    return similarity;
}
function fuzzyMatchMultipleAndCombined(name1, name2Array) {
    let bestSingleMatch = "";
    let highestSingleSimilarity = 0;
    for (const name2 of name2Array) {
        const similarity = fuzzyMatch(name1, name2);
        if (similarity > highestSingleSimilarity) {
            highestSingleSimilarity = similarity;
            bestSingleMatch = name2;
        }
    }
    const combinedName2 = name2Array.join(" ");
    const combinedSimilarity = fuzzyMatch(name1, combinedName2);
    return {
        bestSingleMatch,
        singleSimilarity: highestSingleSimilarity,
        combinedMatch: combinedName2,
        combinedSimilarity,
    };
}
