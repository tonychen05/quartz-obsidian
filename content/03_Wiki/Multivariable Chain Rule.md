From Calculus 1, chain rule is used to differentiate **compositions**.

> [!NOTE] Recall: Single Variable Chain Rule
> Two versions:
> $$\frac{dy}{dt}=\frac{dy}{dx} \frac{dx}{dt}$$
> $$y=f(x(t)) \text{ then } y'=f'(x(t))x'(t)$$

### Physical Example:
Think of the energy of a ball thrown straight up:
$E=KE+PE$
$E=\frac{1}{2}mv^2+mgh$

The energy equation can be thought as a function of velocity(v) and height(h) which both depend on time.

Thus, the equation can be written: $E(v(t),h(t))$
	Without air resistance: $\frac{dE}{dt}=0$ (change of energy is 0, conservation of energy)
	With air resistance: $\frac{dE}{dt}<0$ (change in energy is negative)

But how do we calculate $\frac{dE}{dt}$ given that there are two variables $v,h$ as functions of time?

## Example

Consider the surface $z=\cos(x^2y)+3x^2-3y$
	I. Find the curve on the surface associated to $y=x^2-1$ in the domain.
		1) **Parameterize the curve in $xy$-plane**
			Let $x(t)=t$ and $y(t)=t^2-1$
		2) **Find $z(t)$**
		$\vec{r}(t)=\left< x(t),y(t),z(t) \right> = \left< t,t^2-1,\cos(t^4-t^2)+3 \right>$
	II. Find $\frac{dz}{dt}$
		$z(t)=\cos(t^4-t^2)+3$
		$z'(t)=-\sin(t^4-t^{2})(4t^3-2t)$
	**Another way**: think about changing $x,y$ separately
		change wrt $x$ = $\frac{ \partial f }{ \partial x}\cdot \frac{dx}{dt}=\left[ -2xy\sin(x^{2y})+6x \right]\cdot{\overbrace{ 1 }^{ x(t)=t }}$
		change wrt y = $\frac{ \partial f }{ \partial y }\cdot \frac{dy}{dt}=\left[ -x^2\sin(x^2y)-3 \right]\cdot{\overbrace{ 2t }^{ y(t)=t^2-1 }}$
	$\text{change wrt } x+ \text{change wrt }y=(-4t^3+2t)\sin(t^4-t^2)$ which matches the previous result for $\frac{dz}{dt}$ 


> [!NOTE] Fact
> If $f$ is a function of $x,y$ and $x,y$ are functions of $t$.
> $$\frac{d}{dt}\left[ f(x(t),y(t)) \right]=\underbrace{ \frac{ \partial f }{ \partial x } \frac{dx}{dt} }_{ \text{change from x} }+\underbrace{ \frac{ \partial f }{ \partial y } \frac{dy}{dt} }_{ \text{change from y} } $$

# Observations

We can write the chain rule for $f:\mathbb{R^2}\to \mathbb{R}$ in terms of the gradient.

If $f=f(x(t),y(t)),$ then we saw
$$\begin{align}
\frac{df}{dt}&=\frac{ \partial f }{ \partial x } \frac{dx}{dt}+\frac{ \partial f }{ \partial y } \frac{dy}{dt} \\
 & =\left< \frac{ \partial f }{ \partial x } ,\frac{ \partial f }{ \partial y }  \right> \bullet \left< \frac{dx}{dt},\frac{dy}{dt} \right> \\
 & = \nabla f(x(t),y(t)) \bullet \vec{r}'(t)
\end{align}
$$
The chain rule can be used to model dynamic and geometric rates of change.
If $x$ and $y$ depend on $t$, $\frac{df}{dt}$ (the rate of change of height on the surface along a path) depends on:
1) "steepness" of the surface $(\frac{ \partial f }{ \partial x },\frac{ \partial f }{ \partial y })$
2) rate you move along it $(\frac{dx}{dt}, \frac{dy}{dt})$

---
# Related
---
- Next: [[Directional Derivatives]]
- Previous: [[Tangent Plane]]