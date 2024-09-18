To model curves in $\mathbb{R}^3$, we must **parameterize** them.

Parametrization is **a new way to describe lines and curves in the plane**. Normal coordinates are just expressed by numbers for the $x$- and $y$-coordinates. When you parametrize a line, you find a parametric equation that expresses the coordinates as functions of new variables like $s$ , $t$ and so on.

> [!INFO] Define: Parameterizing a Curve
> Finding a vector-valued function $\vec{r}(t)$ that draws the curve

> [!NOTE] Parameterizations
> **Parameterizations** give 2 pieces of information:
> 1) *WHAT* the curve is (All points $(x,y,z)$ on it)
> 2) *HOW* the curve is drawn (The time $t$ when we are at an $(x,y,z)$ on the curve)

Given two (straight) lines defined by parameterizations, we want to determine whether they are the same line, *intersect* (lines have a *common point*, do not have to trace through it at the same time), or do not intersect

There are **infinitely** many ways to parameterize a curve and how we parameterize the lines should NOT affect the outcome.

## In $\mathbb{R}^2$
Two parameterization of straight lines could draw:
1) the same line
2) parallel, non-intersecting lines
3) lines that intersect once

They **cannot intersect more than once** (finite, same line intersects infinitely many times).
They **have to be either parallel or intersecting**.

## In $\mathbb{R}^3$
Behaving similarly to $\mathbb{R}^2$:
	Two parameterizations of straight lines could draw:
	1) the same line
	2) parallel, non-intersecting lines
	3) lines that intersect once
	They **cannot intersect more than once** (finite, same line intersects infinitely many times).

**BUT** lines in $\mathbb{R}^3$ can be *skew* (non-parallel AND non-intersecting)
	This is obvious when you visualize two lines in 3D space

# Plan
Given two parameterizations of $\vec{\ell}_{1}(t)$ and $\vec{\ell}_{2}(t)$ of straight lines:

- Check if $\ell_{1}$ and $\ell_{2}$ are parallel

> [!CHECK] RECALL
> Lines with direction vectors that are scalar multiples are [[Vector Operations and Important Quantities#Parallel Vectors|parallel]]

- If they are **parallel**, they can be parallel lines or the same line
	- Plug in a $t$-value to $\vec{\ell}_{1}(t)$ to find a point on $\ell_{1}$
	- Check if that point is on $\ell_{2}$ by seeing if there is a $T$-value for which $\vec{\ell}_{2}(T)$ gives that point
- If they are **not parallel**, they can be intersecting or skew lines
	- Set:
		$\begin{matrix}x_{1}(t)=x_{2}(T) \\ y_{1}(t)=y_{2}(T) \\ z_{1}(t)=z_{2}(T)\end{matrix}$
	- Analyze two of them to find values for $t$ and $T$
	- Check if the third equation gives a consistent result
		- If it gives a consistent result, you can plug the $t$-value into $\vec{\ell}_{1}(t)$ or the $T$-value into $\vec{\ell}(T)$ to find the intersection point

---
# Related
---
- Next: [[Motion in Space]]
- Previous: [[Lines and Curves in Space]]