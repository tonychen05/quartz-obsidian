
> [!INFO] Define: Exponential Distribution
> $X$ is said to have an **exponential distribution** with (scale) parameter $\lambda(\lambda>0)$ if the pdf of $X$ is 
> $$f(x;\lambda)=\left\{ \begin{array}\ll
> \lambda e^{-\lambda x} & x\geq 0 \\
> 0 &\text{otherwise}
> \end{array}\right .$$


> [!NOTE] Expected Value, Variance, and Standard Deviation
> $$\mu=\frac{1}{\lambda}$$
> $$\sigma^2=\frac{1}{\lambda^2}$$
> $$\sigma=\frac{1}{\lambda}$$

Note that the mean and standard deviation is always the same for exponential distribution.


> [!NOTE] CDF of Exponential Distribution
> $$F(x)=\int _{0}^{x} {\lambda e^{-\lambda t}} \, dt = 1-e^{-\lambda x}$$

$P(x<\#)=1-e^{-\lambda x}$
$P(x>\#)=e^{-\lambda x}$
$P(a<x<b) = e^{-\lambda a}-e^{-\lambda b}$
$x=\frac{\ln(1-P)}{-\lambda}$

The median is the value at which the cumulative distribution function is $1/2$:
$\text{median}(X)=\frac{\ln 2}{\lambda}$