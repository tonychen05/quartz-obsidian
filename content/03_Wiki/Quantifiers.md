Predicate logic allows us to make statements about whether all or some elements from the universe of discourse have a property. For example, we would like to allow expressions like "all natural numbers are divisible by 1". Predicate logic's **quantifiers** allow stating "all", "for every", "there is", and similar phrases.

### Universal Quantifier
> [!INFO] Define: Universal Quantifier $\forall$
> The universal quantifier, denoted by $\forall$ symbol, has the meaning "for all", "given any", "for every", "every".

When $P(x)$ is a predicate, we write $$\forall x\; P(x),$$ to mean "$P(x)$ for every $x$". We can also specify the domain of the variable $x$ to be some universe $D$ by writing $$(\forall x \in D)\;P(x)$$ to mean "$P(x),$ for every $x$ in $D$"

### Existential Quantifier
> [!INFO] Define: Existential Quantifier $\exists$
> The existential quantifier, denoted by $\exists$ symbol, has the meaning "there exists", "for some", "there is".

When $P(x)$ is a predicate, we write $$\exists x\;P(x),$$ to mean "there exists $x$ such that $P(x)$", "there is at least one $x$, such that $P(x)$", or "$P(x)$ for some $x$". We can specify the domain of discourse for $x$ to be some set $D$ by writing $$(\exists x \in D)\;P(x),$$ which is a predicate that means "There is some $x$ in $D$, for which $P(x)$"

---
Examples:
"$n$ is a prime number"
	$P(n):(\forall k \in \mathbb{N})\left( n \text{ is divisble by }k\implies(k=1 \vee k=n) \right)$

"There exists infinitely many even numbers"
	$(\forall x \in \text{Even})\;(\exists y \in \text{Even})\;(y>x)$
### Unique Existential Quantifier

> [!INFO] Define: Unique Existential Quantifier $\exists!$
> $\exists!x\;P(x):$ "There is a unique (exactly one) choice of $x$ such that $P(x)$"

This quantifier is a kind of compound statement as it needs to fulfill two conditions:
	There is an $x \in D$ such that:
		1. $P(x)$ is True
		2. $P(\neg x)$ is False

In English: There is a value where $P(x)$ is True and every other value $P(\neg x)$ is False.
In Predicate Logic: $(\exists x)(P(x)\wedge \forall y((y\neq x)\implies \neg p(y))$

---

> [!TIP] When domain is **finite**:
> Assume $D=\{ 1,2,3,4 \}:$
> 
> $\forall$ is just simply $\wedge$:
> 	$(\forall x \in D)P(x)=P(1)\wedge P(2)\wedge P(3) \wedge P(4)$
> 	
> $\exists$ is just $\vee$:
> 	$(\exists x \in D)P(x)\equiv P(1)\vee P(2)\vee P(3)\vee P(4)$

---
## Precedence
The quantifiers $\forall$ and $\exists$ have higher precedence over all other logical operators from propositional calculus.

---
# Logical Equivalence and Laws for Quantifiers
> [!INFO] Recall: [[Propositional Formulae|logical equivalence]]
> Two logical formulas $S$ and $T$ are logically equivalent ($S\equiv T$) if $S\iff T$ is a tautology.
## Commutativity
**Different Types**: $\forall$ and $\exists$ do NOT commute. The order of quantifiers can change the truth value of a predicate.
- $\left( \forall x \in \mathbb{R} \right)\left( \exists y \in \mathbb{R} \right)(x<y)$ is True, while
	- for all x, there is a y where x is less than y.
	- x = 5, y = 6, 5 < 6 is True
- $\left( \exists y \in \mathbb{R} \right)\left( \forall x \in \mathbb{R} \right)(x<y)$ is False
	- there exists a y where for all x, x is less than y
	- impossible, there will always be a number greater than y

**Same Types**: Quantifiers of the same type DO commute.
## Negation of Quantified Predicates
- $\neg \forall xP(x) \equiv \exists x\neg P(x)$
	- Note that $\neg \forall xP(x)$ is true if and only if $\forall xP(x)$ is false 
	- and $\forall xP(x)$ is false when there exists an $x$ for which $P(x)$ is false, i.e., $\neg P(x)$ is true for some $x$. Thus, $\neg \forall xP(x)$ is true if and only if $\exists x\neg P(x)$ is true.
- $\neg \exists xP(x)\equiv \forall x\neg P(x)$

## Distribution
### Universal Quantifier
**Universal quantifier distributes over a conjunction**:
$\forall x(P(x)\wedge Q(x))\equiv \forall xP(x)\wedge \forall xQ(x)$

**Universal quantifier does *NOT* distribute over a *disjunction***:
$\forall x(P(x)\vee Q(x))\not\equiv \forall xP(x)\vee \forall xQ(x)$

> [!NOTE] Why? 
> Consider the following:
> $$\forall x \in\{ 0,1 \}(x=0\vee x=1)\not\equiv(\forall x \in\{ 0,1 \}(x=0))\vee (\forall x \in \{  0,1 \}(x=1))$$
> The left side states that for all x in {0,1},  x could be either 0 or 1, which is true. BUT, the right side states that for all x in {0,1}, x is 0 OR for all x in {0,1} x is 1. These two statements are false.

### Existential Quantifier
**Existential quantifier does *NOT* distribute over *conjunction***:
$\exists x(P(x)\wedge Q(x))\not\equiv \exists x P(x)\wedge \exists x Q(x)$

> [!NOTE] Why?
> Consider the following:
> $$(\exists x \in \mathbb{R})(x>1 \wedge x<1)\not\equiv(\exists x \in \mathbb{R}, x>1)\wedge (\exists x \in \mathbb{R},s<1$$
> The left side states that "there exists an x where it is both greater than one and less than one" which is impossible and thus false. The right side states that "there exists an x where it is greater than one AND there exists a x that is less than one" which is true. The two values of x do not have to be the same.

**Existential quantifier does distribute over disjunction**:
$\exists (P(x)\vee Q(x))\equiv \exists xP(x)\vee \exists xQ(x)$
## Other Logical Equivalence
$(\exists x)(A\implies P(x))\equiv(A\implies \exists xP(x))$






