---
aliases:
  - unit vector
---

# Vector Addition
> [!INFO] Define: Vector Addition
> If $\vec{u}=\langle u_{1}, u_{2}\rangle,\vec{v}=\langle v_{1},v_{2}\rangle,$ we define $$\vec{u}+\vec{v}=\langle u_{1}+v_{1}, u_{2}+v_{2}\rangle$$

# Scalar Multiplication
> [!INFO] Define: Scalar Multiplication
> If $c$ is a scalar and $\vec{u}=\langle u_{1},u_{2}\rangle,$ we define $$c\vec{v}=\langle cu_{1}, cu_{2} \rangle$$

# Magnitude

> [!NOTE] Notation
> We denote the **magnitude** of $\vec{u}$ by $|\vec{u}|$ (some texts also use $|\lvert \vec{u} \rvert |$)


> [!INFO] Define: Magnitude
> If $\vec{u}=\langle u_{1}, u_{2} \rangle$, we can find the length by using *Pythagorean Theorem*, thus: $$\lvert \vec{u} \rvert = \sqrt{ {u_{1}}^{2}+ {u_{2}}^2 }$$

# Unit Vector

> [!INFO] Define: Unit Vector
> A **unit vector** is a vector whose magnitude is ***1***.

> [!NOTE] Notation
> We denote vectors with a "^" instead of "$\to$". ($\hat{v}$ denotes a unit vector)

> [!TIP] Fact
> If $\vec{u}$ is nonzero, then a unit vector in the same direction of $\vec{u}$ is $$\hat{u}=\frac{\vec{u}}{\lvert \vec{u} \rvert }$$

## Special Unit Vector
In $\mathbb{R}^2$, we define $\hat{i}= \langle 1,0\rangle, \hat{j}= \langle 0,1 \rangle$.

> [!NOTE] $\left< a,b \right> = a \hat{i} + b \hat{j}$
> $$\left< a, b \right> = \left< a, 0 \right> + \left< 0,b \right> = a\left< 1,0 \right> + b\left< 0,1 \right> = a \hat{i} + b \hat{j}$$

# Parallel Vectors

> [!INFO] Define: Parallel Vectors
> Two nonzero vectors $\vec{u},\vec{v}$ are **parallel** iff there's a constant $c$ so $\vec{u}=c \vec{v}$
> ($c$ can be either positive or negative)

# Vectors in $\mathbb{R}^3$

If $\vec{u}=\left< u_{1},u_{2},u_{3} \right>$

> [!WARNING] Vectors in 3D
> Vector operations in 3D follows the same principles as 2D. All operations will be component-by-component:
> - $\vec{u}+\vec{v}=\left< u_{1}+v_{1},u_{2}+v_{2},u_{3}+v_{3} \right>$
> - $a \vec{u}=\left< au_{1},au_{2},au_{3} \right>$
> - $\lvert \vec{u} \rvert=\sqrt{ {u_{1}}^{2}+ {u_{2}}^2 +{u_{3}}^2}$

---
# Related
---
- Next: [[Dot Product]]
- Previous: [[Vector]]


#calculusII/vector 