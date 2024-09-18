Can also be called the *vector product* as the calculation returns a *vector* 

Given two nonzero **3-dimensional** vectors $\vec{u}=\left< u_{1},u_{2},u_{3} \right>$ and $\vec{v}=\left< v_{1},v_{2},v_{3} \right>$, we can define the **cross product**.

## Magnitude-Angle Formulation
The **cross-product** is a **vector**.

1) The magnitude of cross product is $\lvert \vec{u} \rvert\lvert \vec{v} \rvert\sin(\theta)$
2) **The direction is [[Dot Product#Orthogonality|orthogonal]] to both $\vec{u}, \vec{v}$ (and in the RH rule)**

> [!INFO] Theorem: Magnitude-Angle Cross Product
> $$u \times v = \lvert u \rvert \lvert v \rvert \sin(\theta)n$$
> - $\lvert u \rvert$ is the [[Vector Operations and Important Quantities#Magnitude|magnitude]] (length) of vector $u$
> - $\lvert v \rvert$ is the [[Vector Operations and Important Quantities#Magnitude|magnitude]] (length) of vector $v$
> - $\theta$ is the angle between $u$ and $v$
> - $n$ is the [[Vector Operations and Important Quantities#Unit Vector|unit vector]] at right angles to both $u$ and $v$


## Component Formulation

> [!NOTE] Component Cross Product
> $$\vec{u} \times \vec{v}=\left< u_{2}v_{3}-v_{2}u_{3},u_{3}v_{1}-u_{1}v_{3},u_{1}v_{2}-u_{2}v_{1} \right> $$

A quick way to generate the formula is by using [[determinant|determinants]]

Say that a matrix contains $\vec{u}$ and $\vec{v}$:
$$\left[ \begin{matrix}
\hat{i} & \hat{j} & \hat{k} \\
u_{1} & u_{2} & u_{3} \\
v_{1} & v_{2} & v_{3}
\end{matrix} \right] $$
The **x-component** of the cross product is:
$$\left[ \begin{matrix}
\hat{i} & - & - \\
- & u_{2} & u_{3} \\
-& v_{2} & v_{3}
\end{matrix} \right] = u_{2}v_{3}-v_{2}u_{3}$$
The **y-component** of the cross product is:
$$\left[ \begin{matrix}
- & \hat{j} & - \\
u_{1} & - & u_{3} \\
v_{1} & - & v_{3}
\end{matrix} \right] =-(u_{1}v_{3}-u_{3}v_{1})=u_{3}v_{1}-u_{1}v_{3}$$
The **z-component** of the cross product is:
$$\left[ \begin{matrix}
- & - & \hat{k} \\
u_{1} & u_{2} & - \\
v_{1} & v_{2} & -
\end{matrix} \right] = u_{1}v_{2}-u_{2}v_{1}$$




---
# Related
---
- Next: [[Lines and Curves in Space]]
- Previous: [[Projections]]
- [[Dot Product]]