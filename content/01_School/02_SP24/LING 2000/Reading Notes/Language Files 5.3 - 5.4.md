# 5.3 Syntactic Constituency
## 5.3.1 What Are Syntactic Constituents?
- **Introduction**
  - Explanation of breaking down sentences into smaller units.
- **Lexical Units**
  - Each lexical expression (e.g., the, fluffy, cat) is a unit.
- **Phrase Units**
  - Consideration of larger units within a sentence (e.g., "on the desk").
  - Intuitive grouping of expressions
- **Syntactic Constituents**
  - **Definition**: Certain groups of expressions forming a syntactic unit.
  - Constituents are tightly combined within a phrase.
- **Examples**
  - "An apple" in "Sally devoured an apple" as a constituent.
  - "July in" in "Sally went to France in July" as a constituent.
- **Importance**
  - Identifying constituents reveals sentence structure.
- **Constituency Tests**
  - Tools to determine constituents in a sentence.
  - Discussion of general tests.

## 5.3.2 Answers to Questions
**Introduction**
  - Method for determining syntactic constituents using questions based on a sentence.
**Application of Test**
  1. **Question:** Is "on the desk" in "The cat was sleeping on the desk" a constituent?
	 - **Answer:** Yes.
	 - **Question & Answer:** 
		   - a. Where was the cat sleeping?
		   - b. On the desk.
  1. **Question:** Is "sleeping on the desk" in "The cat was sleeping on the desk" a constituent?
	 - **Answer:** Yes.
	 - **Question & Answer:**
		   - a. What was the cat doing?
		   - b. Sleeping on the desk.
  2. **Question:** Is "the cat" in "The cat was sleeping on the desk" a constituent?
	 - **Answer:** Yes.
	 - **Question & Answer:**
		   - a. Who was sleeping on the desk?
		   - b. The cat.
**Analysis**
- Ability to form questions and answers determines constituent status.
- Example provided to illustrate non-constituent case.
**Conclusion**
- Demonstrates how syntactic constituents can be identified using question-based tests.

## 5.3.3 Clefting

**Introduction**
- Description of clefting as a constituency test.
- General form: "It was X that Y."
**Examples**
1. *On the desk* in *The cat was sleeping on the desk* - Constituent.
	 - Cleft: It was on the desk that the cat was sleeping.
1. *The cat* in *The cat was sleeping on the desk* - Constituent.
	 - Cleft: It was the cat that was sleeping on the desk.
2. *On the* in *The cat was sleeping on the desk* - Not a constituent.
	 - *It was on the that the cat was sleeping desk.* (Ungrammatical)
**Limitations**
- Not applicable to all types of constituents.
- Ungrammatical cleft doesn't necessarily negate constituency.

## 5.3.4 Pro-Form Substitution
**Introduction**
- Description of substitution test.
- Replacing constituents with single words or simple phrases.
 
 **Examples**
 1. *The cat* in *The cat was sleeping on the desk* - Constituent.
     - She was sleeping on the desk.
  2. *On the desk* in *The cat was sleeping on the desk* - Constituent.
     - The cat was sleeping there.
  3. *Sleeping on the desk* in *The cat was sleeping on the desk* - Constituent.
     - The cat was doing so.
  4. *The desk* in *The cat was sleeping on the desk* - Constituent.
     - The cat was sleeping on it.
  5. *On the* in *The cat was sleeping on the desk* - Not a constituent.
     - *The cat was sleeping {it/there/then/such/do so} desk.* (Ungrammatical)

**Evaluation**
- Constituents can be replaced by pro-forms.
- Lack of suitable pro-form indicates non-constituency.

# 5.4 Syntactic Categories
## 5.4.1 What Are Syntactic Categories?

**Introduction**
- Clarification of syntactic categories compared to traditional parts of speech.
- Syntactic categories defined by similar syntactic properties.
**Example Analysis**
- Substitution test demonstrating syntactic similarity.
	- Interchangeability indicating belonging to the same category.
- Non-interchangeability indicating different categories.
**Significance**
	- Importance of syntactic categories in linguistic analysis.
	- Illustrative scenario of assisting a linguist in categorizing expressions.
**Distinguishing Factors**
- Categorization based on syntactic properties, not morphological or semantic properties.
	- Semantic classifications don't determine syntactic behavior.
	- Morphological similarities don't necessarily imply syntactic equivalence.
**Analogy**
- Comparison to categorizing countries by population size, not geographical or cultural factors.

#### Understanding Syntactic Categories
**Definition**:
    - Sets of expressions with similar syntactic properties.
    - Determined by word order and co-occurrence requirements.
#### Importance of Syntactic Categories
**Predictive Power**:
    - Allows prediction of distribution and syntactic behavior.
    - Essential for language understanding by learners or computational systems.

#### Distinction from Semantic and Morphological Properties
**Semantic Classification**:
    - Meaning doesn't determine syntactic behavior.
    - Example: "Action words" like "exploded" and "destroyed" have different syntactic distributions.
**Morphological Classification**:
    - Morphological properties don't always align with syntactic categories.
    - Example: Verbs like "sleep," "tell," "destroy," despite morphological similarity, differ syntactically.
## 5.4.2 Syntactic Categories in English
| Syntactic Category              | Relevant Properties                                                                                                                                                | Example                                                                                            |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| S (sentence)                    | Can occur in Sally thinks that _______                                                                                                                             | Fluffy is cute                                                                                     |
| NP (noun phrase)                | Has the same distribution as a personal pronoun or a proper name                                                                                                   | she<br>Sally<br>the cat<br>this cute dog<br>that cat under the bed                                 |
| N (noun)                        | Needs a determiner to its left to form an NP                                                                                                                       | cat<br>cute dog<br>cat under the bed                                                               |
| Det (determiner)                | Occurs to the left of an N to form an NP                                                                                                                           | the<br>every<br>this                                                                               |
| Adj (adjective)                 | Occurs in between a determiner and an N; can be an N adjunct                                                                                                       | cute<br>fluffy<br>gray                                                                             |
| VP (verb phrase)                | Consists minimally of a verb and all of its complements; combines with an NP to its left which results in a sentence; has the same distribution as slept or did so | slept<br>wrote the letter quickly<br>liked Bob<br>told John a story<br>believed she liked that man |
| TV (transitive verb)            | Needs an NP complement to form a VP                                                                                                                                | liked<br>devoured                                                                                  |
| DTV (ditransitive verb)         | Needs two NP complements to form a VP                                                                                                                              | gave<br>sent                                                                                       |
| SV (sentential complement verb) | Needs a complement S to form a VP                                                                                                                                  | believed<br>said                                                                                   |
| Adv (adverb)                    | Can be a VP adjunct, that is, combines with a VP to its left which results in an expression that is also of category VP                                            | fast<br>quickly<br>tomorrow                                                                        |
| P (preposition)                 | Combines with an NP to form a PP                                                                                                                                   | at<br>for<br>with                                                                                  |
| PP (prepositional phrase)       | Can be a VP or an N adjunct; consists of a preposition and its NP complement                                                                                       | at the table<br>for Sally<br>under the bed                                                         |
