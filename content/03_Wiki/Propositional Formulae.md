---
aliases:
  - logical equivalence
  - common laws
---

## Order of Operations
The best practice for writing propositional formulae is to use parthenthesis to clarify order of operations. However, when not present, the following order of operations is defined: $\neg,\wedge,\vee,\oplus,\implies,\iff$

## Tautologies, Contradictions, Contingencies
- A propositional formula is a **tautology** when it is always true
- A propositional formula is a **contradiction** when it is always false.
- A propositional formula is a **contingency** that is neither a tautology or contradiction is a contingency

## Logical Equivalence and Common Laws

> [!INFO] Define: Logical Equivalence
> Two well formed formulae $p$ and $q$ are said to be **logically equivalent** if $p \iff q$ is a *tautology*. We write $p \equiv q$ to denote "$p$ is logically equivalent to $q$".
> 
> When $p \equiv q$, it means that $p$ has always the same truth value as $q$.

### Identity Laws:
- $p \wedge T \equiv p$
	- taking the "and" of true doesn't change what p is
- $p \vee F \equiv p$
	- taking the "or" of false also doesn't change what p is
### Domination Laws:
- $p \wedge F \equiv F$
	- in an "AND" statement, if one side is False, the whole thing is false
- $p \vee T \equiv T$
	- in an "OR" statement, if one side is True, the whole thing is True
### Idempotent Laws:
- $p \vee p \equiv p$
- $p \wedge p \equiv p$

> [!TIP] In English
> No matter if it's "$p$ and $p$" or "$p$ or $p$," the result is always $p$, because there is nothing else.

> [!INFO] Define: Idempotent
> Denoting an element of a set which is unchanged in value when multiplied or otherwise operated on by itself. 
> For example:
> - $0 + 0 =0$
> - $0\times 0=0$ 
> - $1 \times 1 =0$

### Absorption Law:
- $p \wedge (p \vee q) \equiv p$
- $p \vee (p \wedge q) \equiv p$
### Double Negation Law:
- $p\equiv \neg\neg p$
### Commutativity of $\wedge$ and $\vee$:
- $p \wedge q \equiv q \wedge p$
- $p \vee q \equiv q \vee p$

> [!TIP] Think of the communtativity of adding and multiplication
> The commutative law states that the order of operations doesn't matter when performing addition or multiplication. For example, $a + b = b + a$ and $ab = ba$.
### Associativity of $\wedge$ and $\vee$:
- $p \wedge (q \wedge r) \equiv (p\wedge q) \wedge r$
- $p \vee (q \vee r) \equiv (p \vee q) \vee r$

> [!TIP] Think of the associativity of adding and multiplication
> The associative law states that the order in which numbers are grouped when adding or multiplying doesn't matter. For example, $(a + b) + c = a + (b + c)$ and $a(bc) = (ab)c$.
### Distributivity Laws:
- $p \vee (q \wedge r) \equiv (p \vee q) \wedge (p \vee r)$
- $p \wedge (q \vee r) \equiv (p \wedge q) \vee (p \wedge r)$
- $p \implies (q \wedge r) \equiv (p \implies q) \wedge (p \implies r)$
- $p \implies (q \vee r) \equiv (p \implies q)\vee{(p\implies r)}$
- $(p \wedge q) \implies r \equiv (p\implies r)\vee (q\implies r)$
- $(p\vee q)\implies r \equiv (p\implies r) \wedge (q\implies r)$
### De Morgan's Laws
- $\neg(p\wedge q) \equiv \neg p \vee \neg q$
- $\neg{(p \vee q)} \equiv \neg p \wedge \neg q$

### Conditional Disjunction Equivalence
- $p\implies q\equiv \neg p\vee q$

## Contrapositive, Inverse and Converse of a Conditional
- The **contrapositive** of $p\implies q$ is defined as $\neg q\implies \neg p$ (logically equivalent)
	- Every implication is equivalent to its contrapositive, that is $p\implies q \equiv \neg q\implies \neg p$
- The **inverse** of $p\implies q$ is defined as $\neg p\implies \neg q$
- The **converse** of $p\implies q$ is defined as $q \implies p$
	- It turns out that the **inverse** and **converse** are logically equivalent.


---
# Related
---
- [[Propositional Logic]]
- [[Logical Connectives]]

#toprocess 




