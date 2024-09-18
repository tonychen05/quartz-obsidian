
> [!CHECK] [[Parameterization and Classifying Lines|RECALL]]
> When we have a vector-valued function and use it to trace out a curve, we have 2 pieces of information.
> 1) WHAT the curve is
> 2) HOW the curve is traced out ("parameterized")
> 	(we think of the parameter $t$ as time)

> [!CHECK] Also [[Parameterization and Classifying Lines|RECALL]]
> There are **infinitely** many ways to parameterize a curve

$\vec{r}(t)$ is the **position** of a particle at time $t$

The following is then evident :
- The **velocity** is given by $\vec{v}(t)=\vec{r}'(t)$
- The **speed** is given by $|\vec{r}'(t)|$
- The **acceleration** is given by $\vec{a}(t)=\vec{r}''(t)=\vec{v}'(t)$

### Example
For $\vec{r}_{1}(t)=\left< 2\cos(t),2\sin(t) \right>,\vec{r}_{2}(t)=\left< 2\cos(3t),2\sin{(3t)} \right>$

Find the speed of $\vec{r}_{1}(t)$ and $\vec{r}_{2}(t)$

For $\vec{r}_{1}(t)$:
$$
\begin{align}
&\vec{r}_{1}(t)=\left< 2\cos(t),2\sin(t) \right>  \\
&\vec{r}_{1} \,'(t)=\left< -2\sin(t),2\cos(t) \right>  \\
\lvert \vec{r}_{1}\,'(t) \rvert &=\sqrt{ \left[ -2\sin(t) \right] ^2+\left[ 2\cos(t) \right] ^2 } \\
&=\sqrt{ 4\sin^2(t)+4\cos^2(t) } \\
&=\sqrt{ 4\left[ \sin^2(t)+\cos^2(t) \right]  } \\
&=2
\end{align}
$$
For $\vec{r}_{2}(t)$:
$$
\begin{align}
\vec{r}_{2}(t)&=\left< 2\cos(3t),2\sin(3t) \right>  \\
\vec{r}_{2}\,'(t)&=\left< -6\sin(3t),6\cos(3t) \right>  \\
\lvert \vec{r}_{2}\,'(t) \rvert &= 6 
\end{align}
$$
# Conceptual Questions
$\vec{r}(t)$ is the **position** $(x,y,z)$ at time $t$
$\lvert \vec{r}(t) \rvert$ is **distance from origin at time $t$**
$\frac{d}{dt}\left[ \vec{r}(t) \right]$ is **how distance from origin is changing at time $t$**
$\lvert \vec{r}\,'(t) \rvert$ is **speed**


> [!WARNING] $\frac{d}{dt}\left[ \vec{r}(t) \right] \ne\lvert \vec{r}\,'(t) \rvert$
> How the distance from origin changes is not necessarily equal to speed.

---
# Related
---
- Next: [[Arc Length Parameterization]]
- Previous: [[Parameterization and Classifying Lines]]





