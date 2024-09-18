**Logical Connectives** (or operation) can be used to combine propositions and make new compound  
propositions.

## Negation

> [!INFO] Define: Negation
> The negation($\neg$) of a proposition $p$ is denoted $\neg{p}$, and states that "$p$ is not true" or "It is not the case that $p$."

## Conjunction (AND)

> [!INFO] Define: Conjunction
> Denoted by $\wedge$: For two propositions, $p$ and $q$, states that "Both $p$ and $q$ are true"

$T\wedge T$ is True
## Disjunction (OR)

> [!INFO] Define: Disjunction
> Denoted by $\vee$: $p \vee q$ which states "$p$ or $q$"

## ExclusiveOR (XOR)

> [!INFO] Define: ExclusiveOR
> Denoted by $\oplus$: For two propositions, $p$ and $q$, states that $p \oplus q$ is True only if either $p$ or $q$ is True and not both.
> 

The main difference between OR and XOR is that:
	$T \oplus T$ is False

## Implication/Condition/If

> [!INFO] Define: Implication/Conditional
> Denoted by $\to or \implies$: Given proposition $p\to q$ states that "If $p$ is true, then $q$ is true" 
> 
> "If $p$, then $q$"

> [!WARNING] False implies True is True
> This one is weird in that a False statement implying True OR False is True.

For example, the statement "If $2+1=2$, then $2+2=4$" is a **TRUE** proposition.

> [!NOTE] Conditional Truth Values
> - $T\implies T$ is True
> - $T\implies F$ is False
> - $F\implies T$ is True
> - $F\implies F$ is True

## Biconditional/If and only if

> [!INFO] Define: Biconditional
> Denoted by $\iff$: states that "$p$ is true if and only if $q$ is true"

> [!NOTE] Biconditional Truth Values
> - $T\iff T$ is True
> - $T\iff F$ is False
> - $F\iff T$ is False
> - $F\iff F$ is True

---
We have seen now how to create basic propositions and combine them using logical connectives. In  
many situations in mathematics and computer science, we need to understand more general statements, that make a claim about several abstract propositions. We will formalize this generalization by  
well-formed [[Propositional Formulae|formulas]], which are the building blocks of formal systems used in mathematics and computer science.

---
# Related
---
- [[Propositional Logic]]
- [[Propositional Formulae]]