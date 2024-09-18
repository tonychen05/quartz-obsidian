---
aliases:
  - power series
---

The goal of Taylor polynomials is to be able to approximate functions.

**To make an approximation:**
- choose an x-value where the approximation is based (called the center)
- choose **order** of approximation (highest power in the polynomial)
- make the approximation by requiring the function and the appx have the same value at the center, as do all of the derivatives up to the order we want

> [!INFO] Define: Taylor Polynomial
> The n-th order Taylor Polynomial centered at $x=c$ is given by $$p_{n}(x)=a_{0}+a_{1}(x-c)+a_{2}(x-c)^{2}+ \dots + a_{n}(x-c)^n$$ where $$a_{k}=\frac{f^{(k)}(c)}{k!}$$ 


> [!INFO] Define: Power Series
> We call a series of the form $$f(x)=\sum_{k=0}^{\infty}a_{k}(x-c)^k$$ a **power series centered at $x=c$** 



# Convergence
Higher order Taylor Polynomials provide better and better approximations when they approximate at x-values for which the corresponding power series **converges**. If the series diverges, the approximations will get worse and worse.

> [!EXAMPLE]- Example
> ![[Taylor Polynomials graph.png]]

To determine at which x-values does a series converge, [[Ratio Test]] or modeling the series as [[Series (Sums of Sequences)#Geometric Series]]

### Ratio Test
For the sum: $\sum_{k=0}^{\infty}{\frac{4}{3}\left( \frac{2}{3} \right)^kx^k}$

Using ratio test:
$$\text{Let }L=L(x)=\lim_{ n \to \infty }\left|\frac{a_{n+1}(x)}{a_{n}{(x)}}\right|=\lim_{ n \to \infty }\left|\frac{\frac{4}{3}\left( \frac{2}{3} \right)^{n+1}x^{n+1}}{\frac{4}{3}\left( \frac{2}{3} \right)^{n}x^{n}}\right|=\frac{2}{3}|x|$$
By ratio test: If $L<1$, the series converges and if $L>1$, the series diverges.

**SO**: 
Set $L(x)<1$
$$\frac{2}{3}|x|<1$$
$$|x|<\frac{3}{2}$$
**Thus**: The series $\sum_{k=0}^{\infty}{\frac{4}{3}\left( \frac{2}{3} \right)^kx^k}$ converges if $|x|<\frac{3}{2}$ meaning $-\frac{3}{2}<x<\frac{3}{2}$

### Geometric Series
Treat the sum: $\sum_{k=0}^{\infty}{\frac{4}{3}\left( \frac{2}{3} \right)^kx^k}$ as geometric

$\sum_{k=0}^{\infty}{\frac{4}{3}\left( \frac{2}{3} \right)^kx^k}$=$\sum_{k=0}^{\infty}{\frac{4}{3}\left( \frac{2}{3}x \right)^k}$ is geometric with $a=\frac{4}{3},r(x)=\frac{2}{3}x$

From the result of [[Series (Sums of Sequences)#Geometric Series|geometric series]], here, the series converges when $|r(x)|=\frac{2}{3}|x|<1=|x|<{\frac{3}{2}}$

> [!NOTE] To find when a power series converges:
> 1) Use ratio test to find the radius of convergence (ROC)
> 2) Make the open interval of convergence

> [!INFO] Define: Radius of Convergence and Open Interval of Convergence
> Let $f(x)=\sum_{k=0}^{\infty}a_{k}(x-c)^k$
> - The **radius of convergence** is the largest value of $r$ for which $f(x)=\sum_{k=0}^{\infty}a_{k}(x-c)^k$ converges for all $x$ that satisfy $|x-c|<r$
> 	- *Intuitively:* this is the furthest distance from the center until the series diverges
> - The **open interval of convergence** is the largest open interval $I$ for which $f(x)=\sum_{k=0}^{\infty}a_{k}(x-c)^k$ converges for all $x$ in $I$
> 	- *Intuitvely:* These are the x-values where higher degree Taylor polynomials will approximate the function better!



---
# Related
---
- **Next**: [[Taylor Series]]