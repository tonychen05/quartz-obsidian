
> [!INFO] Define: Mathematical Proof
> An inferential argument for a mathematical statement, showing that a mathematical statement can be derived from **axioms** of mathematics.

All mathematics is derived or proved based on some set of axioms and inference rules. This is what distinguishes mathematics from other sciences where a theory is formed and supported by evidence. 

Statements that can be proven as true (or a tautology) may be called *proposition*, *theorem*, *lemma*, *corollary*, *observation*, *fact*, or a *claim*.
- A **theory** is usually an important fact that is proven to be true. If one were writing a paper, all the main mathematical discoveries would likely be labeled as theorem.
- A **proposition** is essentially a slightly less important theory
- A **lemma** is an important fact that is used on the way to establishing more important facts. For examples, on the way to proving an important theorem, we may prove several propositions and lemmas that go into the proof of the main theorem
- A **corollary** is a statement the truth of which can be established almost immediately from another theorem/lemma/proposition/etc.

When mathematicians suspect that a statement is true, but all they could find for it was some evidence and intuition (as opposed to a formal proof), it is presented as a **conjecture**. For example, [[Goldbach's conjecture]].

For the purposes of this note, we agree on the same standard set of axioms. Then we can use inference rules to prove new statements that are true assuming the axioms.

---
### Direct Proof
Most straightforward method of a proof.

**Theorem**. $P\implies Q$
**Proof**. 
	Assume $P$ is True
	**Steps**: each step uses previous steps, axioms, hypothesis ($P$=True), and inference rules to prove a new statement

#### Examples
**Proposition**. The square of every odd integer is odd.
**Proof**.
- Assume $n$ is odd
- Then, since $n$ is odd, by definition there exists $k \in\mathbb{Z}$ such that $n=2k+1$
- Thus, $n^2=(2k+1)^2=4k^2+4k+1$
- Therefore, $n^2=2(2k^2+2k)+1$
- Let $2k^2+2k$ be an integer $m$; $n^2+2m+1$
- Thus by definition, $n^2$ is odd
- Since $n$ was an arbitrary odd integer, it is shown that the square of every odd integer is odd.

**Proposition**. Let $a,b,c,d$ be natural numbers. If $a>c$ and $b>d$ then $\text{min}\{ a,b \}>\text{min}\{ c,d \}$ 
**Proof**.
- Let $a,b,c,d$ be natural numbers that satisfy the hypothesis $a>c$ and $b>d$.
- Since $\text{min}\{ c,d \}\leq c$ and $c<a$, then $\text{min}\{ c,d \}<a$
- Since $\text{min}\{ c,d \}\leq d$ and $d<b$, then $\text{min}\{ c,d \}<b$
- Since $\text{min}\{ c,d \}\leq a$ and $\text{min}\{ c,d \}<b$, then $\text{min}\{ c,d \}<\text{min}\{ a,b \}$

### Proof by Contradiction
In proofs by contradiction, in order to prove that a statement $P$ is true, we instead prove that $\neg P$ is false by first assuming $\neg P$ is true and use it to conclude a contradiction. That is, $\neg P\implies False$ is a tautology.

**Statement** $P$.
**Proof**. Assume towards a contradiction that $P$ is not true.
\[insert arguments leading to something that is obviously false]
This is a contradiction, and thus $P$ is true.

#### Examples
**Theorem**. $\sqrt{ 2 }$ is irrational.
**Proof**.
- Assume for contradiction that $\sqrt{ 2 }$ is rational.
- This means that $\sqrt{ 2 }=\frac{a}{b}$ for nonzero integers $a$ and $b$ such that $\frac{a}{b}$ is irreducible.
- Since $\frac{a}{b}$ is irreducible, both $a$ and $b$ cannot be even numbers at the same time (at least one of $a$ and $b$ is an odd number)
- Since $\sqrt{ 2 }=\frac{a}{b}$, then $2=\frac{a^2}{b^2}$, which means $a^2=2b^2$.
- Thus $a$ is an even integer, and can be written as $a=2k$ for some integer $k$.
- Since $a^2=2b^2$, then $2b^2=(2k)^2=4k^2$. Thus $b^2=2k^2$, which implies that $b$ is even
- This means that $a$ and $b$ are both even integers which contradicts $\frac{a}{b}$ being irreducible.
- Thus $\sqrt{ 2 }$ is not rational.