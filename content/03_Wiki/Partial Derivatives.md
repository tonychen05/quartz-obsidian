# Partial Derivatives and Gradient Vector
> [!NOTE] Notation
> $$f_{x}(x,y),\hspace{35pt}\frac{\partial f}{\partial x}(x,y),\hspace{35pt}f^{(1,0)}(x,y)$$

**Visually**: $\frac{ \partial f }{ \partial x }(a,b)$ is the initial rate of change in $x$-direction

**Computationally**: change one variable and hold the other constant
	Examples:
		$f(x,y)=2x^2+3xy-4y^3$
			$f_{x}(x,y)$=4x+3y-0
		$g(x,y)=4e^{2x^2y}$
			$g_{y}(x,y)=8x^2e^{2x^2y}$

# Gradient Vector
The **gradient of f** is defined by $\nabla f(x,y)=\left< f_{x}(x,y), f_{y}(x,y) \right>$