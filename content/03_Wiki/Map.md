
> [!INFO] Define: map (Formally)
> A map (or function) is a binary relation over two sets that associates every element of the first [[set]], to exactly one element of the second [[set]]. In particular, given two sets $A$ and $B$, a map $p$ from $A$ to $B$, is denoted $p:A\to B$, and assigns an value $f(x) \in B$ (*codomain*) to every $x \in A$ (*domain*).

Maps cannot contain duplicate keys (like a [[set]]); each key can map to at most one value


> [!EXAMPLE] Acceptable Map
> ![[function_diagram.excalidraw|200]]

Note the following properties:
- Each domain maps to **only one** codomain
- Codomains CAN be mapped to more than once
- Not every value of the codomain needs to be mapped to
#### Applications:
- Dictionary / lookup table
- caching

## Different Types of Maps
### Injective
> [!INFO] Define: Injective Map
> A map $f:A\to B$ is said to be **injective, one-to-one** if $$\forall x \in A\;\forall y \in A\left( f(x)=f(y)\implies x = y \right) $$

In other words, each domain is mapped to **ONLY ONE** codomain.

**Examples**:
- The map $f:\mathbb{Z}\to \mathbb{Z}$ defined by $f(x)=\lvert x \rvert$ is not injective, because $f(1)=f(-1)=1$
- The map $f:\mathbb{Z}\to \mathbb{Z}$ defined by $f(x)=2x$ is injective, because if $f(x)=f(y)$ then $2x=2y$, which implies that $x=y$

### Surjective
> [!INFO] Define: Surjective Map
>A map $f:A\to B$ is said to be **surjective** or **onto**, if $$(\forall x \in B)(\exists x \in A)(f(x)=y)$$

In other words, **every element in the codomain is mapped to** by at least one element in the domain.

**Examples**:
- The map $f:\mathbb{R}\to \mathbb{Z}$ defined by $f(x)=\lfloor x \rfloor$ is surjective, because for every $y \in\mathbb{Z}$, $y$ is also in $\mathbb{R}$, and we know that $f(y)=\lfloor y \rfloor=y$. 
	- Note that $f$ is not injective, as can be seen by $f(1.4)=f(1.5)=1$
- The map $f:\mathbb{Z}\to \mathbb{Z}$ defined by $f(x)=\lvert x \rvert$ is NOT surjective, because there is no $x \in \mathbb{Z}$ for which $f(x)=-1$

### Bijective

> [!INFO] Define: Bijective Map
> A map $f:A\to B$ is said to be **bijective**, a **bijection**, or a **one-to-one correspondence** if it is BOTH injective and surjective.

**Examples**:
- For any set $A$, the identity map $I:A\to A$ defined by $f(x)=x$ is bijective
- The map $f:\{ p,q,r \}\to \{ 1,2,3 \}$ defined by $f(p)=1,f(q)=2,f(r)=3$ is a bijection






#data_structure 