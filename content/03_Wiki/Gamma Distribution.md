The gamma distribution has many important applications in analysis of [[Poisson Distribution|Poisson]] processes and reliability theory. The gamma distribution can be used to model the extent of degradation such as corrosion, creep, or wear.

To define the family of gamma distributions, we first need to introduce a function that plays an important role in many branches of mathematics.


> [!INFO] Gamma Function
> For $\alpha>0$, the **gamma function** $\Gamma(\alpha)$ is defined by: $$\Gamma(\alpha)=\int _{0}^{\infty}x^{\alpha-1}e^{-x} \, dx$$

The most important properties of the gamma function are the following:
1. For any $\alpha>1$, $\Gamma(\alpha)=(\alpha-1)\cdot \Gamma(\alpha-1)$ \[via [[Integration by Parts]]]
2. For any positive integer, $n$, $\Gamma(n)=(n-1)!$
3. $\Gamma\left( \frac{1}{2} \right)=\sqrt{ \pi }$

Now...

> [!INFO] Define: Gamma Distribution (with $\beta=1$)
> $$f(x;\alpha)=\left\{ \begin{array}\ll
> {\frac{x^{\alpha-1}e^{-x}}{\Gamma(\alpha)}} & {x\geq 0} \\
> 0 & \text{otherwise}
> \end{array} \right . $$

^362b68


> [!INFO] Define: Gamma Distribution (General)
> A continuous random variable $X$ is said to have a **gamma distribution** if the pdf of $X$ is
> $$f(x;\alpha,\beta)=\left\{ \begin{array}\ll
> {\frac{1}{\beta^\alpha \Gamma(\alpha)}x^{\alpha-1}e^{-\frac{x}{\beta}}} & {x\geq 0} \\
> 0 & \text{otherwise}
> \end{array} \right . $$
> where the paramters $\alpha$ and $\beta$ satisfy $\alpha>0,\beta>0$. The **standard gamma distribution** has $\beta=1$, so the pdf of a standard gamma rv is given by [[Gamma Distribution#^362b68]]

> [!NOTE] Expected Value and Variance
> $$E(x)=\mu=\alpha \beta$$
> $$V(X)=\sigma^2=\alpha \beta^2$$

#statistics



