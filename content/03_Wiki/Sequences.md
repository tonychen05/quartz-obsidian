# Sequences
Sequences are functions that are defined **only for integers**.


> [!INFO] Define: Sequences (Formally)
> A sequence is a real-valued function $f:D\to \mathbb{R}$ where $D={\{n \in\mathbb{Z}\: |\: n\to n_{_{0}}\}}$ ("the set of all integers $\geq n_{0}$")

> [!NOTE] Sequences Notation
> ${\{a_{n}\}}_{n=n_{0}}$ is a function defined for all integers $n\geq n_{0}$

Sequences are represented by **ordered** lists.
	${\{a_{n}\}}_{n=2}$ is represented by $a_{2},a_{3}, a_{4}\dots$ 

Note that {1, 2, 3, 4, 5} is different from {2, 1, 4, 3, 5} because **order** matters.

## Formulas
Sequences can be defined by many types of rules, but there are two common ways:

### Explicit Formulas
$a_{n}$ is given in terms of $n$

ex: $a_{n}=2n-7$
	$a_{0} = 2(0)-7=-7$
	$a_{1} = 2(1)-7=-5$
	$a_{2} = 2(2)-7=-3$
	.
	.
	.
	$a_{2021}=2(2021)-7=4035$

### Recursive Formulas
$a_{n}$ is given in terms of previous terms of the sequence and possibly $n$

ex: $a_{n+1}=a_{n}+2, a_{0}=-7$
	$a_{0} = -7$
	$a_{1} =a_{0}+2=-7+2=-5$
	$a_{2} = a_{1}+2=-5+2=-3$
	$a_{3}=a_{2}+2=-3+2=-1$

## Types of Sequences
### Arithmetic Sequences
$a_{n}=dn+c$, where $d$ and $c$ are constants
	Recursively: $a_{n+1} = a_{n} + d$

ex: 
	{1 , 3, 5, 7} (add 2 each time)
	{1, 4, 7, 10} (add 3 each time)

### Geometric Sequence
$a_{n}=ar^n$, where $r$ and $a$ are constants

ex:
	{3, 6, 12, 24} (multiply 2 each time)
	{2, 6, 18, 54} (multiply 3 each time)

---
# Related
---
- **Next**: [[Limits of Sequences and Growth Rates]]

#calculusII/sequences