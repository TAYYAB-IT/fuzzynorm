# **FuzzyNorm**

[![npm version](https://img.shields.io/npm/v/fuzzynorm.svg)](https://www.npmjs.com/package/fuzzynorm)
[![License](https://img.shields.io/npm/l/fuzzynorm.svg)](https://github.com/yourusername/fuzzynorm/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dt/fuzzynorm.svg)](https://www.npmjs.com/package/fuzzynorm)

**FuzzyNorm** is a lightweight TypeScript library for performing fuzzy string matching with normalization. It uses the Levenshtein distance algorithm to calculate similarity scores between strings, while also handling diacritics, special characters, and whitespace normalization.

Perfect for applications like search engines, autocomplete systems, or any scenario where approximate string matching is required.

---

## **Features**

✅ **Fuzzy Matching**: Compare two strings and calculate their similarity score.  
✅ **Normalization**: Handle diacritics, punctuation, and whitespace inconsistencies.  
✅ **Multi-String Support**: Compare a single string against multiple strings or a combined version of them.  
✅ **TypeScript Support**: Fully typed for seamless integration into TypeScript projects.  
✅ **Lightweight**: Minimal dependencies and optimized performance.

---

## **Installation**

Install the package via npm:

```bash
npm install fuzzynorm
```

Or using Yarn:

```bash
yarn add fuzzynorm
```

---

## **Usage**

### **1. Basic Fuzzy Matching**

Compare two strings and get their similarity score (0 = no match, 1 = perfect match):

```typescript
import { fuzzyMatch } from 'fuzzynorm';

const similarity = fuzzyMatch("hello", "helo");
console.log(similarity); // Output: ~0.8
```

### **2. Normalized String Comparison**

The library automatically normalizes strings by removing diacritics, punctuation, and extra spaces:

```typescript
import { fuzzyMatch } from 'fuzzynorm';

const similarity = fuzzyMatch("Café Münchén!", "cafe munchen");
console.log(similarity); // Output: 1
```

### **3. Multi-String Matching**

Compare a single string against an array of strings. The library returns the best single match and the combined match:

```typescript
import { fuzzyMatchMultipleAndCombined } from 'fuzzynorm';

const result = fuzzyMatchMultipleAndCombined("hello world", ["hello", "world"]);
console.log(result);
// Output:
// {
//   bestSingleMatch: "hello",
//   singleSimilarity: 1,
//   combinedMatch: "hello world",
//   combinedSimilarity: 1
// }
```

---

## **API Reference**

### **`fuzzyMatch(name1: string, name2: string): number`**

Calculates the similarity score between two strings.

- **Parameters**:
  - `name1`: The first string to compare.
  - `name2`: The second string to compare.
- **Returns**: A similarity score between `0` (no match) and `1` (perfect match).

---

### **`fuzzyMatchMultipleAndCombined(name1: string, name2Array: string[]): object`**

Compares a single string against an array of strings and provides both the best single match and the combined match.

- **Parameters**:
  - `name1`: The string to compare.
  - `name2Array`: An array of strings to compare against.
- **Returns**: An object containing:
  - `bestSingleMatch`: The string with the highest similarity score.
  - `singleSimilarity`: The similarity score of the best single match.
  - `combinedMatch`: The concatenated version of all strings in `name2Array`.
  - `combinedSimilarity`: The similarity score of the combined match.

---

## **How It Works**

1. **Normalization**:
   - Strings are normalized by:
     - Removing diacritics (e.g., `é` → `e`).
     - Replacing hyphens/underscores with spaces.
     - Removing punctuation and collapsing multiple spaces.
     - Sorting words alphabetically for consistent comparison.

2. **Levenshtein Distance**:
   - The Levenshtein distance algorithm calculates the minimum number of edits (insertions, deletions, substitutions) required to transform one string into another.

3. **Similarity Score**:
   - The similarity score is calculated as `1 - (distance / maxLength)`, where `maxLength` is the length of the longer string.

---

## **Examples**

### Example 1: Basic Usage

```typescript
import { fuzzyMatch } from 'fuzzynorm';

console.log(fuzzyMatch("apple", "aple")); // Output: ~0.8
console.log(fuzzyMatch("banana", "orange")); // Output: ~0.2
```

### Example 2: Multi-String Matching

```typescript
import { fuzzyMatchMultipleAndCombined } from 'fuzzynorm';

const result = fuzzyMatchMultipleAndCombined("hello world", ["hello", "world", "foo"]);
console.log(result.bestSingleMatch); // Output: "hello"
console.log(result.singleSimilarity); // Output: 1
console.log(result.combinedMatch); // Output: "hello world foo"
console.log(result.combinedSimilarity); // Output: ~0.67
```

---

## **Contributing**

We welcome contributions! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Author**

👤 **Tayyab Aman**  
- GitHub: [@TAYYAB-IT](https://github.com/TAYYAB-IT)  
- Email: tayyab.aman142@gmail.com  

---

## **Acknowledgments**

- Inspired by the need for robust fuzzy string matching in modern applications.
- Built with ❤️ using TypeScript.

---

