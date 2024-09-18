> [!ABSTRACT] Quick Introduction
> The normal distribution is the most important one in all of probability and statistics. Many numerical populations have distributions that can be fit very closely by an appropriate normal curve. Examples include heights, weights, and other physical characteristics, measurement errors in scientific experiments, anthropometric measurements on fossils, reaction times in psychological experiments, measurements of intelligence and aptitude, scores on various tests, and numerous economic measures and indicators. In addition, even when individual variables themselves are not normally distributed, sums and averages of the variables will under suitable conditions have approximately a normal distribution; this is the content of the [[Central Limit Theorem]] discussed later.
> 


> [!INFO] Define: Normal Distribution
> A *continuous* rv $X$ is said to have a **normal distribution** with parameters $\mu$ and $\sigma$ (or $\mu$ and $\sigma^2$), where $-\infty<\mu<\infty$ and $0<\sigma$, if the pdf of $X$ is $$f(x;\mu,\sigma)=\frac{1}{\sqrt{ 2\pi }\sigma}e^{-(x-\mu)^2/(2\sigma^{2})}\qquad-\infty<x<\infty$$

Each normal distribution is completely described by its mean $\mu$ and standard deviation $\sigma$.
	- $\mu$ controls the center
	- $\sigma$ controls the spread


> [!NOTE] Define: Empirical Rule
> A statistical rule which states that in a *bell-shaped* normal distribution, almost all observed data will fall within three standard deviations of the mean of the data:
> 1. Roughly $68\%$ of the values are within $1$ SD of the mean.
> 2. Roughly $95\%$ of the values are within $2$ SDs of the mean.
> 3. Roughly $99.7\%$ of the values are within $3$ SDs of the mean.

> [!EXAMPLE] Visual of the Empirical Rule
> ![[empirical_rule_figure.png|500]]


> [!INFO] Define: Standard Normal Distribution
> The normal distribution with parameter values $\mu=0$ and $\sigma=1$ is called the **standard normal distribution**. A random variable having a standard normal distribution is called a **standard normal random variable** and will be denoted by $Z$. The pdf of $Z$ is $$f(z;0,1)=\frac{1}{\sqrt{ 2\pi }}{e^{-z^{2}/2}}\qquad-\infty<z<\infty$$
> The graph of $f(z;0,1)$ is called the *standard normal* (or *z*) curve. Its inflection points are at $-1$ and $1$. The cdf of $Z$ is $P(Z\leq z)=\int _{-\infty}^{z}f(y;0,1) \, dy$, which we will denote by $\phi(z)$
> 

> [!INFO] Define: Z-Score
> If $x$ is an observation from a distributions that has mean $\mu$, and standard deviation, $\sigma$. the **Z-Score** of $x$ is $$Z=\frac{x-\mu}{\sigma}$$
> A z-score tells how many standard deviations the observation $x$ falls from the mean, and in which direction.


> [!NOTE] $z_{\alpha}$ notation for $z$ critical values
> $z_{\alpha}$ will denote the value on the $z$ axis for which $\alpha$ of the area under the $z$ curve lies to the right of $z_{\alpha}$

To find the percentiles for the standard normal distribution, we use the inverse cumulative distribution function (also known as the quantile function). 

**Example: 91st percentile**

The 91st percentile corresponds to $\phi^{-1}(0.91)$, where $\phi$ is the CDF of the standard normal distribution.
- Using a standard normal distribution table or a calculator, find the z-score corresponding to a cumulative probability of 0.91.
- invNorm(0.91) = 1.34
- **91st Percentile: 1.34​**



