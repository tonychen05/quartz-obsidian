# Recall
**Tangent [[Tangent Line|Lines]] and [[Tangent Plane|Planes]]:**
For functions of 1 variable:
	Tangent line: $$l_{a}(x)=f(a)+f'(a)\cdot(x-a)$$
For functions of 2 variables:
	Tangent plane: $$L_{(a,b)}(x,y)=f(\vec{a})+\nabla f(\vec{a})\bullet(\vec{x}-\vec{a}),$$ where $\vec{a}=\left< a,b \right>, \vec{x}=\left< x,y \right>$

**[[Multivariable Chain Rule|Chain Rule]]:**
Functions of 1 variable: $$\frac{d}{dt}\left[ f(x(t)) \right]=f'(x(t))\cdot \frac{dx}{dt}$$
Functions of 2 variables: $$\frac{d}{dt}\left[ f(x(t),y(t)) \right] =\nabla f(\vec{r}(t)) \bullet {\vec{r}}\,'(t)$$
**[[Directional Derivatives]]:** $$D_{\hat{u}}f(a,b)=\nabla f(a,b)\bullet \hat{u}$$
# Directions of Greatest Initial Increase/Decrease
$D_{\hat{u}}f(a,b)$ is the rate of change of $f(x,y)$ at $(a,b)$ in the $\hat{u}$-direction.
- $\hat{u}$ is a direction in the $xy$-plane
	- $D_{\hat{u}}f(a,b)$ measures initial rate of change of "height" $z$ as move along the surface in the $\hat{u}$-direction

$$
\begin{align}
D_{\hat{u}}f(a,b) & =\nabla f(a,b)\bullet\hat{u} \\
 & =\lvert \nabla f(a,b) \rvert\cancelto{ 1 }{  \lvert \hat{u} \rvert } \cos(\theta) \\
 & =\lvert \nabla f(a,b) \rvert \cos(\theta)
\end{align}
$$
Since $\cos(\theta)\leq 1$, with equality when $\theta=0$:
	The largest $D_{\hat{u}}f(a,b)$ can be is $\lvert \nabla f(a,b) \rvert$
	This occurs precisely when $\theta=0$, meaning the direction $\hat{u}$ is in the same direction as $\nabla f(a,b)$.


> [!NOTE] Important Fact #1:
> - If $\nabla f(a,b)\neq \vec{0},$ then the direction of maximum increase of $f(x,y)$ at $(a,b)$ is in the direction of $\nabla f(a,b)$. The actual maximum initial rate of change at $(a,b)$ is $\lvert \nabla f(a,b) \rvert$.
> - The minimum rate of change occurs in the direction of $-\nabla f(a,b)$ and the minimum rate of change is $-\lvert \nabla f(a,b) \rvert$

> [!NOTE] Important Fact #2:
> The gradient is **orthogonal** to level curves

