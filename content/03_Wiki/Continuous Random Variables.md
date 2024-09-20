## Random Variables
> [!NOTE] [[Discrete Random Variables|RECALL]]: Random Variable
> For a given sample space $S$ of some experiment, a **random variable (rv)** is any rule that associates a number with each outcome in $S$. In mathematical language, a random variable is a function whose domain is the sample space and whose range is the set of real numbers.

## Continuous Random Variables
> [!INFO] Define: Continuous Random Variables
> A random variable is **continuous** if *both* of the following apply:
> 1. Its set of possible values consists either of all numbers in a single interval on the number line (possibly infinite in extend, e.g., from $-\infty$ to $\infty$) or all numbers in a disjoint union of such intervals (e.g., $\left[ 0,10 \right]\cup[20,30]$).
> 2. No possible value of the variable has positive probability, that is, $P(X=c)=0$ for any possible value $c$


> [!INFO] Define: Probability Density Function of a Continuous Random Variable
> Let $X$ be a continuous rv. Then a **probability distribution** or **probability density function** (pdf) of $X$ is a function $f(x)$ such that for any two numbers $a$ and $b$ with $a \leq b$,
> $$P(a\leq X\leq b)=\int_{a}^{b} f(x) \, dx $$
> That is, the probability that $X$ takes on a value in the interval $\left[ a,b \right]$ is the area above this interval and under the graph of the density function. The graph of $f(x)$ is often referred to as the *density curve*.

^1198bb

For $f(x)$ to be a legitimate pdf, it must satisfy the following two conditions:
1. $f(x)\geq 0$ for all $x$
2. $\int _{-\infty}^{\infty}f(x) \, dx=\text{area under the entire graph of } f(x)=1$

> [!TIP] Endpoints
> If $X$ is a continuous rv and $a$ and $b$ are real constants with $a\leq b$, then
> $$P(a\leq X\leq h)=P(a\leq X<h)=P(a<X\leq h)=P(a<X<h)$$
> **Implication**: Including or not including the endpoints does not matter *for continuous rv*

Why?
This comes from the fact that an area under a curve at a certain point is 0 ($\int _{a}^{a}f(x) \, d=0$). Thus, it does not matter whether or not you include that point.

> [!INFO] Define: Cumulative Distribution Function of a Continuous rv
> The **cumulative distribution function** $F(x)$ for a continuous rv $X$ is defined for every number $x$ by $$F(x)=P(X\leq x)=\int _{-\infty}^{x}f(y) \, dy $$
> For each $x$, $F(x)$ is the area under the density curve to the left of $x$.

The importance of the cdf here, just as for discrete rv's, is that probabilities of various intervals can be computed from a formula for or table of $F(x)$.

> [!NOTE] Proposition
> Let $X$ be a continuous rv with pdf $f(x)$ and cdf $F(x)$. Then for any number $a$, $$P(X>a)=1-F(a)$$ and for any two numbers $a$ and $b$ with $a<b$, $$P(a\leq X\leq b)=F(b)-F(a)$$

For  $X$ discrete, the pmf is obtained from the cdf by taking the difference between two $F(x)$ values. The continuous analog of a difference is a derivative. The following result is a consequence of the [[Fundamental Theorem of Calculus]].

### Expected Values

> [!INFO] Define: Expected values of a continuous rv
> The **expected** or **mean value** of a continuous rv $X$ with pdf $f(x)$ is $$\mu_{x}=E(X)=\int_{-\infty}^{\infty}x\cdot f(x) \, dx $$


> [!NOTE] Proposition
> If $X$ is a continuous rv with pdf $f(x)$ and $h(X)$ is any function of $X$, then
> $$E[h(X)]=\mu_{h(X)}=\int _{-\infty}^{\infty}h(x)\cdot f(x) \, dx $$


> [!INFO] Define: Variance of a continuous rv
> The **variance** of a continuous random variable $X$ with pdf $f(x)$ and mean value $\mu$ is $$\sigma^{2}_{x}=V(X)=\int _{-\infty}^{\infty}(x-\mu)^2f(x) \, dx $$
> The **standard deviation** (SD) of $X$ is $\sigma_{x}=\sqrt{ V(X) }$

> [!TIP] Easier Computation for Variance
> $$Var(X)=\int _{-\infty}^{\infty}x^2f(x) \, dx-\mu^2 $$








