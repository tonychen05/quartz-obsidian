---
aliases:
  - universe, domain
---

> [!QUESTION] Consider the following:
> "If $x$ is even, then $x^2$ is divisible by 4."

Even though this looks like a statement $P\implies Q$, [[propositional logic]] cannot construct this statement because neither $P=\text{``}x\text{ is even''}$ or  $Q=\text{``}x^2{\text{ is divisible by }}4\text{"}$ is a proposition (they do not have a True or False value).

[[Propositional Logic|Propositional (or zero-th order) Logic]] does not provide us the language or the tools to state and study above statements as compound propositions.

**Predicate logic** (also called first-order logic) address this issue by allowing us to consider statements that depend on variables.

> [!INFO] Define: predicate
> A **predicate** is a statement (or assertion) that may contain variables, and it has a True/False truth-value for every "fixing" of its variables. In other words, a predicate is *a function* that takes one or more arguments (typically variables) and returns a proposition when the variables are given specific values.

For example (we denote predicates with capital $P,Q,R$):
$P(x):x^3\geq x^2$ where the domain of $x$ is integers
	Then $P(2)$ is True, while $P(0)$ and $P(0.5)$ are False.
- "$x^3\geq x^2$" is a predicate, since for every fixing of $x$, either $x^3\geq x^2$ is true or it is false
- "$x$ is taller than $y$" is a predicate, since one we fix $x$ and $y$ to be any two people, it is true or false 
- "$x^2+2x-1$" is NOT a predicate since it does not have a Truth value for any fixing of its variables

Actually, the discussion of predicates only make sense if we specify what values the variables $x$ and $y$ are allowed to take. Otherwise, we will have assignments such as "$\text{Paul}^3\geq 5^2$" or "$4$ is taller than peppers" which don't have a truth value. Thus, predicates require that the *domain* or *universe* of each variable be specified, and at times we assume it is clear from the context.

> [!INFO] Define: Domain of Discourse
> The **domain of discourse** (in short, "domain") or **universe** of discourse of a predicate variable is the collection of all possible values that the variable can take. Each element of the domain is called a **constant**.

> [!NOTE] Some Standard Universes of Numbers:
> - $\mathbb{N}$: Natural numbers ${1,2,3,4,\dots}$
> - $\mathbb{Z}$: Integers $\{ \dots,-3,-2,-1,0,1,2,3 \}$
> - $\mathbb{Q}$: Rational numbers $\left\{  \frac{a}{b}|a,b \in \mathbb{Z},\text{and }b\neq 0  \right\}$
> - $\mathbb{R}$: Real numbers (integers, rational, and irrational)
> - $\mathbb{C}$: Complex Numbers $\{ a+bi|a,b\in\mathbb{R} \}$

## Quantifiers
Predicate logic allows us to make statements about whether all or some elements from the universe of discourse have a property. For example, we would like to allow expressions like "all natural numbers are divisible by 1". Predicate logic's **[[quantifiers]]** allow stating "all", "for every", "there is", and similar phrases.

## Free and Bound Variables
A variable in a logical expression or formula is called a **bound variable** if it appears in a quantifier, and a variable is said to be a **free variable** otherwise. The part of a logical expression to which a quantifier is applied is called the scope of this quantifier. Thus, a variable is free if it is outside the scope of all quantifiers in the formula that specify this variable.

## Tautology and Contradiction
A logical expression $S$ is a tautology if it is true over any choice of:
1. a domain for any variable with unspecified domain
2. a choice of predicate for any predicate variable
3. a constant for every free variable









