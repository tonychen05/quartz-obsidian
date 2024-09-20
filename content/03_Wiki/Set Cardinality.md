
> [!INFO] Define: Cardinality of a [[Set Operations#Power Set|Power Set]] (Formally)
> $$\lvert \mathcal{P}(S) \rvert = \lvert \{ x \mid x \text{ is a 0/1 string of length } \lvert s \rvert  \} \rvert $$

Let the above equation be defined as follows:

...i give up, i dont know what this means. I'll prove this later... maybe

---

> [!NOTE] Claim
> For every non-empty finite set $S$, the number of subsets of $S$ of even cardinality is equal to the number of subsets of $T$ of odd cardinality.

**Proof**. Suppose $S$ is a finite set and $S=\emptyset$. Define
$$E=\{ T \mid T \subset  S \text{ and } \lvert T \rvert \text{ is even}\}$$
and
$$O=\{ S\mid S\subset S\text{ and }\lvert S \rvert \text{ is odd} \}$$

> [!NOTE] [[Set Operations#Size (Cardinality)|Recall]]: Cardinalities of Sets
> - $\lvert A \rvert\leq \lvert B \rvert$ if there exists an [[Map#Injective|injection]] $f:A\to B$
> 	- In English, if $A$ can be mapped to only one $B$, then that means that the size of $A$ is either less than or equal to the size of $B$.
> - $\lvert A \rvert\geq \lvert B \rvert$ if there exists an [[Map#Surjective|surjection]] $f:A\to B$
> 	- If every $B$ is mapped, then that means that $A$ has at least the same amount of elements, if not more
> - $\lvert A \rvert=\lvert B \rvert$ if there exists a [[Map#Bijective|bijection]] $f:A\to B$
> 	- If every $A$ is mapped to one $B$ with none left over, then their sizes are equal.

To prove that $\lvert E \rvert=\lvert O \rvert$, we can construct a one-to-one correspondence ([[Map#Bijective|bijection]]) from $E$ to $O$.

Let $x$ denote an arbitrary fixed element in the set $S$ (note that since $S$ is non-empty, it has at least one element). We now define the map $f:E\to O$:
$$f(T)=\left\{ \begin{array}{\ll}
T \cup \{ x \} \qquad \mbox{if $x \in T$} \\
T - \{ x \} \qquad \mbox{if $x \in T$}
\end{array} \right\} $$
.... idk man


> [!NOTE] "Countably Infinite"
> Any set of cardinality the same as $\mathbb{N}$ is "countably infinite," denoted as $\aleph_{0}$ "aleph null"

$\mathbb{R}$ is not countably infinite, denoted $\aleph_{1}$ (aleph one)
- $|(0,1)|=|(0,2)|=|\mathbb{R}|=\aleph_{1}$
	- Proof:
		- $f:(0,1)\to(0.2)$ is a bijection when $f(x)=2x$





#toprocess 