# 5.5 Constructing a Grammar
## 5.5.1 Why Construct Grammars
- **Purpose**: Syntacticians aim to construct descriptive grammars of natural languages.
- **Definition**: Descriptive grammars are like a linguist’s theory of a native speaker’s mental grammar, focusing on syntax alone.
- **Functionality**: They serve as a recipe for mechanically generating all and only the sentences of a natural language.
- **Complexity**: Creating a complete grammar for any natural language is challenging; no single grammar accurately predicts all and only the sentences of a language.
- **Utility**:
    - Useful for Martian scientists understanding human languages.
    - Beneficial for foreign language learners.
    - Valuable for computational applications.
### Construction of a Simple English Grammar
- **Objective**: Constructing a simple grammar for English.
- **Requirements**: The grammar must assign lexical expressions to syntactic categories and provide rules for combining expressions into larger ones based on their syntactic categories.
- **Approach**: Uses a common system involving a lexicon and phrase structure rules.
- **Flexibility**: Acknowledges that there are many possible ways to construct or model a descriptive grammar.
- **Expansion**: While the presented system covers a basic subset of English sentences, it can be expanded to cover other structures.
- **Encouragement**: Readers are encouraged to think about expanding the grammar whenever encountering sentences beyond its rules.

## 5.5.2 Parts of the Grammar: The Lexicon and the Rules

#### Lexicon
- **Definition**: Initial step in grammar construction, assigning lexical expressions to syntactic categories.
- **Representation**: Lexical entries consist of syntactic category name followed by a word.
- **Abbreviation**: Multiple lexical entries for the same category can be abbreviated.
- **Example**: Sample lexicon includes entries for NP, N, Adj, Det, VP, TV, DTV, SV, P, Adv.

#### Rules
- **Functionality**: Phrase structure rules used to capture patterns of syntactic combination.
- **Form**: Similar to lexical entries but contain only names of syntactic categories.
- **Combination**: Determine how expressions combine to form larger expressions.
- **Example**: Phrase structure rule for combining an NP and a VP to form a sentence (S→NP VP).

### Construction of Complex Phrases

#### Noun Phrases (NPs)
- **Expansion**: NPs can consist of determiner followed by a noun.
- **Adjective-Noun Combination**: Nouns can be preceded by adjectives (Adj N).
- **Example**: Phrase structure rule allows construction of "The fluffy cat slept".

#### Verb Phrases (VPs)
- **Verb Complements**: Rules for constructing VPs containing verbs and their complements.
- **Adverbs**: VPs can also contain adverbs.
- **Prepositional Phrases (PPs)**: Rules for constructing prepositional phrases.
- **Adjuncts**: PPs can serve as noun adjuncts or verb phrase adjuncts.

### Summary of Phrase Structure Rules
- Provides a list of introduced phrase structure rules and their functions.
- Rules account for various sentence constructions in English.

### Ambiguity
- **Phenomenon**: Same expressions can combine in different ways, resulting in distinct phrases with the same form.
- **Focus**: Ambiguity is explored in the subsequent section.

## 5.5.3 Ambiguity
#### Definition of Linguistic Expression
- **Form**: Sequence of sounds associated with a word or phrase.
- **Meaning**: Semantic interpretation of the expression.
- **Syntactic Properties**: Structural role within a sentence.

#### Types of Ambiguity
##### 1. Lexical Ambiguity or Homophony
- **Definition**: Occurs when a single word form corresponds to distinct expressions differing in meaning, syntactic properties, or both.
- **Example**: "bank" (financial institution vs. strip of land next to a river).
##### 2. Structural Ambiguity
- **Definition**: Arises when a string of words can be interpreted in multiple ways due to differences in their syntactic structure.
- **Example**: "The cop saw the man with the binoculars."
    - **Interpretation 1**: The man whom the cop saw had the binoculars.
    - **Interpretation 2**: The cop used the binoculars to see the man.

#### Analyzing Structural Ambiguity
- **Using Grammar**: Utilizing phrase structure rules to analyze why some strings of words are structurally ambiguous.
- **Example**: "The cop saw the man with the binoculars."
    - **Interpretation 1**: PP as VP adjunct.
    - **Interpretation 2**: PP as N adjunct.

#### Conclusion
- **Scope**: The constructed grammar is modest but allows for analyzing structural ambiguity.
- **Evaluation**: Readers are encouraged to evaluate the grammar and extend it to include a larger chunk of English in practice exercises.

## 5.5.4 Non-generative Rule Systems

#### Introduction
- **Generative Grammars**: Start with simple lexical entries and rules specifying how expressions combine.
- **Alternative Conception**: Considers syntax based on co-occurrence and linear order.

#### Lexicalized Grammar
- **Idea**: Information about how syntactic units combine is stored in the lexicon rather than rules.
- **Example**: Categorial grammars with simple rules for combining expressions.

#### Categorial Grammars
- **Rules**:
    - Expression with argument to the right: X\Y
    - Expression with argument to the left: Y/X
- **Intuition**: Hypothetical reasoning where expressions combine based on the presence of an argument.

#### Practical Application
- **Grammar Setup**: Lexicon organized to prove appropriate syntactic structures using categorial grammar rules.
- **Examples**: Demonstrating how sentences like "Sally slept" and "Sally devoured an apple" can be proven using the categorial grammar.

#### Conclusion
- **Comparative Analysis**: Phrase structure grammar emphasizes rule-based syntactic competence, while categorial approach focuses on lexical knowledge.
- **Benefits and Limitations**: Both approaches have merits, but a systematic comparison is beyond the scope of this text. Additional examples and information are available for further study on the website.