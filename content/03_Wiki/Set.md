
> [!INFO] Define: set
> a collection that contains **no duplicate** elements
#### Applications:
- unique items
- venn diagrams
- data queries via set operation (union, intersection, difference, etc)
	- Represented by [[Set Operations]]

> [!NOTE] Properties of a Set
> - Order **DOES NOT MATTER**
> - **NO INDEX**

> [!EXAMPLE] Possible set of things:
> - natural numbers $\mathbb{N}$
> - reals $\mathbb{R}$
> - rationals
> - complex
> - "set of all cities"
> see [[Predicate Logic]] for definition of these sets

## Describing Sets
### Roster Method
The most common notation for describing a set is by listing all its elements inside braces.
For example,
$S=\{ 1,2,3,5 \}=\{ 5,1,3,2 \}$ (order doesn't matter)

One very important set is the **empty set**, denoted $\emptyset$, which is the set that contains no elements. That is, $\emptyset=\{  \}$

### Set Builder Method
There are sets that cannot be written with the roster method because they more complicated and are too large at the same time.

If a set $S$ consists of elements that have a certain "property" or "pattern", we can use the Set Builder notation:
$$S=\{ x \mid P(x) \}$$
This denotes the set of all elements $x$, for which the predicate $P(x)$ is True. We also need to describe the domain for $x$; this is commonly done by writing
$$S=\{ x \in D \mid P(x) \}$$
to describe the set $S$ of all $x$ in $D$ for which $P(x)$ is True.


> [!EXAMPLE] More Examples
> The set of all people whose name starts with $h$ can be described using the set-builder notation as
> $$\{ x \in \text{People} \mid \text{name(x) starts with an 'h'} \}$$
> The set of all nonnegative integers can be described by
> $$\{ x \in \mathbb{Z} \mid x\geq 0 \}$$
> The set of all integers that are square of another integer can be described by
> $$\{ x \in \mathbb{Z} \mid (\exists y \in\mathbb{Z})(x=y^2) \}$$

## Set Relations
### Set Equality

> [!INFO] Define: Set Equality
> We say that two sets $S$ and $T$ are equal, writing $S=T$, when
> $$x \in S \iff x \in T,$$
> is a tautology, or in other words,
> $$(\forall x)(x \in S \iff x \in T)$$ is true.

### Subset

> [!INFO] Define: subset
> We say that $S$ is a subset of $T$, denoted $S\subset T$ if $$x \in S \implies x \in T,$$ is a tautology, or in other words,
> $$(\forall x)(x \in S\implies x \in T)$$ is true.

The empty set is a subset of all sets ($\emptyset\subset S$)
The empty set is only a subset of the empty set ($\emptyset \subset \emptyset$)

> [!NOTE] Subset is not a total relation
> The relation $\subset$ is not a total relation, as there exist sets, for example $S=\{ 1 \}$ and $T=\{ 2 \},$ where neither $S \subset T$ nor $T \subset S$.

## see [[Set Operations]]


#data_structure 