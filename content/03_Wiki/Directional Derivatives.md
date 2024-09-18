
> [!INFO] Define: Directional Derivative
> Denoted by $D_{\hat{u}}f(a,b)$, we have $$D_{\hat{u}}f(a,b)=\lim_{ h \to 0 } \frac{{f(a+u_{1}h,n+u_{2}h)-f(a,b)}}{h}.$$ This measures how $f(x,y)$ changes at $(a,b)$ in the $\hat{u}$-direction.

> [!NOTE] Theorem: Directional Derivative
> If $f:\mathbb{R^2}\to \mathbb{R}$ is differentiable, then: $$D_{\hat{u}}f(a,b)=\nabla f(a,b)\bullet \hat{u}$$ NOTE: $\hat{u}$ **MUST** be a unit vector

**Conceptually**:
If $\hat{u}=\left< 1,0 \right>,$ then $D_{\hat{u}}f(a,b)=f_{x}(a,b)$

*Why?*
- $D_{\hat{u}}f(a,b)$ is the rate of change of $f$ at $(a,b)$ in the $\hat{u}$-direction
- $f_{x}(a,b)$ is the rate of change of $f$ at $(a,b)$ in the $x$-direction
Since $\hat{u}$ IS a unit vector in the $x$-direction, the two statements are equal.

---
# Related
---
- Next: [[Interpreting the Gradient]]
- Previous: [[Multivariable Chain Rule]]



