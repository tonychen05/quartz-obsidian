
# With One Variable
> [!INFO] Define: Limits
> We say $\lim_{ x \to a }f(x)=L$ if $f(x)$ becomes arbitrarily close to $L$ as $x$ becomes arbitrarily close to $a$

### One-Sided Limits
Can approach from right or left: $x\to a^+$ or $x\to a^-$
# With Two Variables
> [!INFO] Define: Limits
> We say $\lim_{ (x,y) \to (a,b) }f(x,y)=L$ if $f(x,y)$ becomes arbitrarily close to $L$ as $(x,y)$ becomes arbitrarily close to $(a,b)$ **along any path in the domain of f**

Can approach along many different paths in the domain but limit techniques still hold from one variable limits:
- direct substitution
- factor and cancel

BUT, there is no version of L'Hopital's Rule so how to calculate limits of indeterminate forms?

> [!EXAMPLE] Indeterminate Form Limits
> $\lim_{ (x,y) \to (0,0) }\frac{{x^2-y^2}}{x^{2}+y^{2}}$ is of form $\frac{0}{0}$:
> - Try to approach along $y=0$:
> 	- $f(x,y)=f(x,0)=\frac{{x^2-0^2}}{x^2+0^2}=1,x\neq 0$
> - Try to approach along $x=0$:
> 	- $f(x,y)=f(0,y)=\frac{{0^2-y^2}}{0^2+y^2}=-1,y\neq 0$.
> 
> Thus, the limit DOES NOT EXIST as the two limits don't agree

> [!NOTE] Two Path Test
> If there are two different paths (curves) in the $xy$-plane that approach $(a,b)$, but $f(x,y)$ approaches different values as $(x,y)\to(a,b)$ along each path, then $$\lim_{ (x,y) \to (a,b) }f(x,y)\; DNE $$ 

**To find these potential paths**, we can take the limit along $y=mx$.

**Revisiting the previous example** with $f(x,y)=f(x,mx)=\frac{x^2-(mx)^2}{x^2+(mx)^2}=\frac{1-m^2}{1+m^2},x\neq 0$
**Note**: $y=mx$ is a different straight line path through $(0,0)$ for each $m$, so the value $f(x,y)$ approaches $\left( \frac{1-m^2}{1+m^2} \right)$ depends on $m$, meaning it depends on the path we chose. This arrives at the same conclusion that the limit does not exist.

This method analyzed an entire class class of paths (all straight lines through $(0,0)$) all at once.

## Continuity

> [!INFO] Define: Continuity of Two Variable Functions
> We say $f(x,y)$ is **continuous** at $(a,b)$ if $\lim_{ (x,y) \to (a,b) }f(x,y)=f(a,b)$




---
# Related
---
- Next: [[Differentiability of Multivariable Functions]]
- Previous: [[Planes]]
- [[Limit Laws]]
- [[Continuity]]