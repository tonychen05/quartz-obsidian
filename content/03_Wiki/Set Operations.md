A (finite) set can be though of as a collection of zero or more *elements* of any other mathematical type, say, *T*
- *T* is called the **element type**
- This math type is called ***finite set of** T*

> [!NOTE] Two Important Features of Sets
> - **NO DUPLICATE** elements
> - **NO ORDER** among elements

> [!NOTE] Recall: [[Set|Empty Set]]
> The empty set, a set with no elements at all, is denoted by `{ }`, $\emptyset$, or by `empty_set`

> [!NOTE] Recall: [[Set|Specific Set]]
> A particular set can be described by listing its elements between `{ }` separated by commas
> **Examples**:
> - `{ 1, 42, 13 }`
> 	- A *finite set of integer* values whose elements are the *integer* values *1, 42, 13*
> 	- Equal to the set `{ 1, 13, 42}`
> - `{ 'G', 'o' }`
> 	- A *finite set of character* value whose elements are the *character* values *'G'* and *'o'*
> 	- **Not** the same as the *string of character* value `< 'G', 'o' > = "Go"`
> - `{ }`
> 	- Special case of set literal notation for an `empty_set`

## Set Relationship
### Membership
We say `x is in s` iff `x` is an element of `s` ($x\in s$)

**Examples**:
- `33 is in { 1, 33, 2 }
- `'G' is in { 'G', 'o' }`
- `33 is not in { 5, 2, 13 }`
- `5 is not in { }`
### Union
The union of sets of `s` and `t`, a set consisting of the elements that are in either `s` or `t` or both, is denoted by `s union t` ($s \cup t$)

> [!INFO] Define: union (Formally)
> The union of two sets $S$ and $T$, denoted $S \cup T$, is defined as $$S\cup T=\{ x \mid x \in S \vee  x \in T \}$$

**Examples**:
- `{ 1, 2 } union { 3, 2 } = { 1, 2, 3 }`
- `{ 'G', 'o' } union { } = { 'G', 'o' }`
- `{ } union { 5, 2, 13 } = { 5, 2, 13 }`
- `{ } union { } = { }`

### Intersection
The intersection of sets `s` and `t`, a set of consisting of the elements in both `s` and `t`, is denoted by `s intersection t` ($s\cap t$)

> [!INFO] Define: intersection (Formally)
> The intersection of two sets $S$ and $T$, denoted $S\cap T,$ is defined as $$S\cap T=\{ x \mid x \in S \wedge  x \in T \}$$

**Examples**:
- `{ 1, 2 } intersection { 3, 2 } = { 2 }`
- `{ 'G', 'o' } intersection { } = { }`
- `{ 5, 2 } intersection { 13, 7 } = { }`
- `{ } intersection { } = { }`

### Difference/Complement
The difference or complement of sets `s` and `t`, a set consisting of the elements of `s` that are not in `t`, is denoted by `s \ t` (or by `s - t`, $s$ without $t$) 

> [!INFO] Define: set difference (Formally)
> Given two sets $S$ and $T$, the subtraction of $T$ from $S$, denoted as $S-T$ or $S\setminus T=\{ x \mid x \in S \wedge x \not\in T \}$

**Examples**:
- `{ 1, 2, 3, 4 } \ { 3, 2 } = { 1, 4 }`
- `{ 'G', 'o' } \ { } = { 'G', 'o' }`
-  `{ 5, 2 } \ { 13, 5 } = { 2 }`
- `{ } \ { 9, 6, 18 } = { }`

### Symmetric Difference

> [!INFO] Define: Symmetric Difference
> The symmetric difference of two sets $S$ and $T$, denoted $S\Delta T$, is defined as $$S\Delta T=\{ x \mid x \in S \oplus x \in T \}=S\setminus T \cup T\setminus S$$

**Examples**:
- $\{ 1,2 \}\Delta \{ 2,3 \}=\{ 1,3 \}$
### Subset (see [[Set#Subset]])
- `s is subset of t` iff every element of `s` in also in t ($s\subseteq t$)
- `s is proper subset of t` does not allow `s = t` ($s \subset t$)

We say `is not . . .` for the negation of each

### Size (Cardinality)
The size or cardinality of a set `s` i.e., the number of elements in `s` is denoted by `|s|`

**Examples**: 
- `| { 1, 15, -42, 18 } | = 4`
- `| { 'G', 'o' } | = 2`
- `| { } | = 0`

> [!QUESTION] How to define size of an non-finite set?
> The answer lies in [[Map|maps]]. 
> - $\lvert A \rvert\leq \lvert B \rvert$ if there exists an [[Map#Injective|injection]] $f:A\to B$
> 	- In English, if $A$ can be mapped to only one $B$, then that means that the size of $A$ is either less than or equal to the size of $B$.
> - $\lvert A \rvert\geq \lvert B \rvert$ if there exists an [[Map#Surjective|surjection]] $f:A\to B$
> 	- If every $B$ is mapped, then that means that $A$ has at least the same amount of elements, if not more
> - $\lvert A \rvert=\lvert B \rvert$ if there exists a [[Map#Bijective|bijection]] $f:A\to B$
> 	- If every $A$ is mapped to one $B$ with none left over, then their sizes are equal.

--- see [[Set Cardinality]] for more details
### Entries of a String
The set whose elements are exactly the entries of a string `s`(i.e. the string's entries without duplicates and ignoring order) is denoted by `entries(s)`

**Examples**:
- `entries(< 2, 2, 2, 1 >) = { 1, 2 }`
- `entries(< >) = { }`

### Power Set

> [!INFO] Define: Power Set (Formally)
> The *power set* of a set $S$, denoted $\mathcal{P}(S)$ or $Pow(S)$, is the set of all subsets of $S$, that is
> $$\mathcal{P}(S)=Pow(S)=\{ T\mid T\subset S \}$$

**Examples**:
- $S=\{ 1,2,3 \}$, then
	- $\mathcal{P}(S)=\{ \emptyset,\{ 1 \},\{ 2 \},\{ 3 \},\{ 1,2 \},\{ 1,3 \},\{ 2,3 \}, \{ 1,2,3 \} \}$
- $\mathcal{P}(\emptyset)=\{ \emptyset \}$


> [!TIP] Calculating Number of Elements in a Power Set
> The number of elements in a power set is $2^n$, where $n$ is the number of elements in the original set.

> [!EXAMPLE] Visual [[Tree]] Representation of $2^n$ with $S=\{ 1,2,3 \}$
> ![[elements_in_power_set.png|300]]

> [!INFO] Cardinality of a Power Set (Formally)
> see [[Set Cardinality]]

## Properties of Set Operations
The following are true for any logically equivalent sets $R,S,T$:
- $S \cap T=T\cap S$
- $S \cup T=T\cup S$
- $R\cap(S\cup T)=(R\cap S)\cup(R\cap T)$
- $R \cap(S\cap T)=(R\cup S)\cap(R\cup T)$
- The De Morgan's laws state that
	- $R-(S\cup T)=(R-S)\cap(R-T)$
	- $R-(S\cap T)=(R-S)\cup(R-T)$

> [!TIP] Rewriting De Morgan's Laws
> De Morgan's Laws look more familiar, when applying it with $R$ being the domain of discourse, making $R-S=S^c$, i.e., $S$-complement. Thus, we get
> $$(S\cup T)^c=(S^{c}\cap T^{c})$$ and $$(S\cap T)^{c}=(S^{c}\cup T^{c})$$ which more closely resembles De Morgan's Law from [[Propositional Formulae#Logical Equivalence and Common Laws]]






---
# Related
---
- [[Mathematical Models]]
- [[Set]]