Can also be called the *scalar product* as the calculation returns a *scalar*

> [!INFO] Define: Dot Product
> Given two nonzero vectors $\vec{u}$ and $\vec{v}$, we define their **dot product**, denoted by $\vec{u}\bullet \vec{v}$, by $$\vec{u} \bullet \vec{v}=\lvert \vec{u} \rvert \lvert \vec{v} \rvert \cos(\theta)$$where $\theta$ is the angle between $\vec{u}$ and $\vec{v}$.
> We define $\vec{0} \bullet \vec{u}=0$

> [!INFO] Theorem: Dot Product
> If $\vec{u}=\left< u_{1},u_{2},\dots,u_{n} \right>,\vec{v}=\left< v_{1},v_{2}, \dots, v_{n} \right>,$ then $$\vec{u} \bullet \vec{v}=u_{1}v_{1}+u_{2}v_{2}+\dots+u_{n}v_{n}$$
> (multiply like components and add)

Both methods work for calculating dot product. The proof of the theorem can be derived from the [[law of cosines]]. 

The **result** is a *scalar*.

> [!WARNING] Application
> The dot product is only defined for **two vectors** of *equal* dimension.
> 

**Example:**
If $\vec{u},\vec{v} \in \mathbb{R}^3$,
- $(\vec{u}+\vec{v}) \bullet 2\vec{u}$ is a **scalar** (vector $\cdot$ vector)
- $\vec{u} \bullet \lvert \vec{u}+\vec{v} \rvert$ is **undefined** (vector $\cdot$ *scalar*)

# Orthogonality

> [!INFO] Define: Orthongonality
> Two vectors $\vec{u}$ and $\vec{v}$ are **orthogonal** iff $$\vec{u} \cdot \vec{v}=0$$
> *Note:* This means $\vec{0}$ is orthogonal to every vector.

# Properties of Dot Product
Dot products behave similarly to multiplication. Namely, the rules of the commutative, associative, and distributive properties all apply to dot products.

**Example:** Let $\vec{u}, \vec{v}$ be vectors and $c$ be a scalar
1) $\vec{u} \bullet \vec{v}= \vec{v} \bullet \vec{u}$
2) $\vec{u} \bullet (\vec{v} + \vec{w}) = \vec{u} \bullet \vec{v} + \vec{u} \bullet \vec{w}$
3) $\vec{u} \bullet (c\vec{v})=(c \vec{u}) \bullet \vec{v}=c[\vec{u}\bullet \vec{v}]$
4) $\hat{i}\bullet \hat{j}=0,\hat{i}\bullet \hat{k}=0, \hat{j}\bullet \hat{k}=0$ (unit vectors are orthogonal to each other)

---
# Related
---
- Next: [[Projections]]
- Previous: [[Vector Operations and Important Quantities]]
- [[Vector]]