
# Orthogonal Projection
Returns a *vector*

> [!INFO] Define: Orthogonal Projection
> We define the [[Dot Product#Orthogonality|orthogonal]] projection of $\vec{u}$ onto $\vec{v}$ (the part of $\vec{u}$ parallel to $\vec{v}$) to be the **vector** $\vec{P}$. We denote it by $$proj_{\vec{v}}\vec{u}$$


> [!INFO] Theorem: Orthogonal Projection
> $proj_{\vec{v}}\vec{u}$ is the part of $\vec{u}$ parallel to $\vec{v}$. It is computed by $$proj_{\vec{v}}\vec{u}=\left[ \frac{\vec{u}\bullet \vec{v}}{\vec{v}\bullet \vec{v}} \right]\vec{v} $$

# Scalar Projections
Returns a *scalar*

> [!INFO] Define: Scalar Projections
> Given two vectors $\vec{u}$ and $\vec{v}$, the **scalar projection of $\vec{u}$ onto $\vec{v}$** (the $\vec{v}$-component of $\vec{u}$), denoted by $scal_{\vec{v}}\vec{u}$, is given by $$scal_{\vec{v}}\vec{u}=\frac{\vec{u}\bullet \vec{v}}{\lvert \vec{v} \rvert }=\lvert \vec{u} \rvert \cos \theta$$This is the "*signed magnitude*" of $proj_{\vec{v}}\vec{u}$

$scal_{\vec{v}}\vec{u}$ encodes two things:
1) The magnitude of the orthogonal projection $proj_{\vec{v}}\vec{u}$
2) Whether $proj_{\vec{v}}\vec{u}$ and $\vec{v}$ are in the same or opposite directions
	1) $scal_{\vec{v}}\vec{u}>0$ means the part of $\vec{u}$ parallel to $\vec{v}$ is in the **same** direction as $\vec{v}$
	2) $scal_{\vec{v}}\vec{u}<0$ means the part of $\vec{u}$ parallel to $\vec{v}$ is in the **opposite** direction as $\vec{v}$

Both orthogonal and scalar projections are important geometric quantities. Many questions about them boil down to simple geometric observations.

---
# Related
---
- Next: [[Cross Products]]
- Previous: [[Dot Product]]
