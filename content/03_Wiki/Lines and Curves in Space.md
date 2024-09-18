In $\mathbb{R}^2$, $y=x$ is a **line**.
(The collection of all points $(x,y)$ in $\mathbb{R}^2$ for which $y=x$)

In $\mathbb{R}^3$, $y=x$ is a **plane**
(The collection of all points $(x,y,z)$ in $\mathbb{R}^3$ for which $y=x$ and $z$ can be anything)

# Representing a 1D Curve
To discuss a 1D curve, we can represent it with a **set of equations that give $x, y, z$ in terms of a single variable $t$**

We conveniently organize these into a **vector** $$\vec{r}(t)=\left< x(t),y(t),z(t) \right> $$
The output is a **vector** that extends from the origin to the point $(x(t),y(t),z(t))$

## Example
Give a position vector $\vec{r}(t)$ $y=x^2$ in $\mathbb{R}^2$. 

Let $x(t)=t$ and $y(t)=t^2$ (since $y=x^2$)
$\vec{r}(t)=\left< t,t^2 \right>$

# Lines

> [!WARNING] Slope
> "Slope" (rise over run) in $\mathbb{R}^3$ doesn't make sense!
> Lines with different slopes have **different directions**

> [!INFO] Describing a Line in 3D
> Thus, we replace "slope" with a **direction vector**, meaning a vector parallel to the line
> 
> To find a description of a line, we need:
> 1) a **direction** vector $\vec{v}$ parallel to the line ("slope")
> 2) a point $P_{0}$ on the line
> 
> Then, a vector-valued function that traces out the line is $$\vec{\ell}(t)=\vec{v}t+\vec{P_{0}}$$

## Example
**Find a description of a line parallel to $\left< 1, -1, 0 \right>$ that passes through $(1, 2, 3)$**

- $P_{0}=(1,2,3)$ so $\vec{P_{0}}=\left< 1,2,3 \right>$
- $\vec{v}=\left< 1,-1,0 \right>$

So: $$\vec{\ell}(t)=\vec{v}t+\vec{P_{0}}=\left< 1,-1,0 \right>t+\left< 1,2,3 \right> = \left< t+1,-t+2,3 \right>$$
**Find a parametric description of the line through $(1,0,1)$ and $(-2,3,5)$**

- $\vec{P_{0}}=\left< 1,0,1 \right>$
- $\vec{v}=\left< -2-1,3-0,5-1 \right> = \left< -3,3,4 \right>$

So:
$$\vec{\ell}(t)=\vec{v}t+\vec{P_{0}}=\left< -3,3,4 \right> t+\left< 1,0,1 \right> =\left< -3t+1,3t,4t+1 \right> $$

> [!NOTE] Note
> - There are **infinitely** many choices for $\vec{v}$
> - There are **infinitely** many choices for $\vec{P_{0}}$

# Vector-Value Function and Curves
Two different vector-valued functions can trace out the same curve

> [!NOTE] Remark
> Two vector-valued functions $\vec{r_{1}}(t),\vec{r_{2}(t)}\in \mathbb{R}^{3}$ iff
> 1) They have the same domain **AND**
> 2) $x_{1}(t)=x_{2}(t),y_{1}(t)=y_{2}(t),z_{1}(t)=z_{2}(t)$


---
# Related
---
- Next: [[Parameterization and Classifying Lines]]
- Previous: [[Cross Products]]






