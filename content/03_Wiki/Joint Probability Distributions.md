## Discrete Joint Probability Distribution

> [!INFO] Define: Discrete Joint Probability Mass Function
> Let $X$ and $Y$ be two [[Discrete Random Variables|discrete rv]]'s defined on the [[Probability|sample space]] $S$ of an experiment. The **joint probability mass function** $p(x,y)$ is defined for each pair of numbers $(x,y)$ by $$p(x,y)=P(X=x \text{ and } Y=y)$$
> It **must be the case** that $p(x,y)\geq 0$ and $$\sum_{x}\sum_{y}p(x,y)=1$$


> [!INFO] Define: Marginal Probability Mass Function
> The **marginal probability mass function of $X$**, denoted by $p_{X}(x)$, is given by $$p_{X}(x)=\sum_{y:\;p(x,y)>0}p(x,y)\qquad \text{for each possible value }x$$
> Similarly, the **marginal probability mass function of $Y$** is $$p_{Y}(y)=\sum_{x:\;p(x,y)>0}p(x,y) \qquad \text{for each possible value }y$$


> [!NOTE] Independency
> Two random variables are **independent** if for every pair of $x$ and $y$ values: $$p(x,y)=p_{X}(x)p_{Y}(y)$$


> [!NOTE] Conditional [[Discrete Random Variables#^811523|Probability Mass Function]]
> The conditional probability mass function of $Y$ given $X=x$ can be calculated by $$P_{Y|X}(y|x)=\frac{P(x,y)}{P_{X}(x)}$$

## Continuous Joint Probability Distribution

> [!INFO] Define: Continuous Joint Probability Mass Function
> Let $X$ and $Y$ be [[Continuous Random Variables|continuous rv's]]. A **joint probability density function** $f(x,y)$ for these two variables is a function satisfying $f(x,y)\geq 0$ and $\int _{-\infty}^{\infty}\int _{-\infty}^{\infty}f(x,y) \, dx \, dy$. Then for any two-dimension set $A$
> $$P[(X,Y)\in A]=\iint\limits_{A} f(x,y) \, dx  \, dy $$


> [!INFO] Define: Marginal Probability Density Function
> The **marginal probability density functions** of $X$ and $Y$, denoted by $f_{X}(x)$ and $f_{Y}(y)$, respectively, are given by
> $$f_{X}(x)=\int _{-\infty}^{\infty}f(x,y) \, dy \qquad \text{for }-\infty<x<\infty $$
> $$f_{Y}(y)=\int _{-\infty}^{\infty}f(x,y) \, dx \qquad \text{for }-\infty<y<\infty $$


> [!NOTE] Independency
> Two random variables are **independent** if for every pair of $x$ and $y$ values
> $$f(x,y)=f_{X}(x)f_{Y}(y)$$

> [!NOTE] Conditional [[Continuous Random Variables#^1198bb|Probability Density Function]]
> The conditional probability mass function of $Y$ given $X=x$ can be calculated by $$f_{Y|X}(y|x)=\frac{f(x,y)}{f_{X}(x)}$$

# Expected Values, Covariance, and Correlation

> [!NOTE] Expected Values of Joint Distributed Random Variable
> Let $X$ and $Y$ be jointly distributed rv's with pmf $p(x,y)$ or pdf $f(x,y)$ according to whether the variables are discrete or continuous. Then the expected value of a function $h(X,Y)$, denoted by $E[h(X,Y)]$ or $\mu_{h(X,Y)}$, is given by
> $$E[h(X,Y)]=\left\{ \begin{array}\ll
> \sum_{x}\sum_{y}h(x,y)\cdot p(x,y) & \mbox{if $X$ and $Y$ are discrete} \\
> \int _{-\infty}^{\infty}\int _{-\infty}^{\infty}h(x,y)\cdot f(x,y) \, dx  \,dy & \mbox{if $X$ and $Y$ are continuous}
> \end{array} \right . $$

When two random variables $X$ and $Y$ are not independent, it is frequently of interest to assess how strongly they are related to one another.

> [!INFO] Define: Covariance
> The **covariance** between two rv's $X$ and $Y$ is
> $$\begin{align}\text{Cov}(X,Y)&=E[(X-\mu_{X})(Y_{0}-\mu_{Y})] \\
> &=\left\{ \begin{array}\ll
> \sum_{x}\sum_{y}(x-\mu_{X})(y-\mu_{Y})p(x,y) & X,Y \text{ discrete} \\
> \int _{-\infty}^{\infty}\int _{-\infty}^{\infty} (x-\mu_{X})(y-\mu_{Y})f(x,y) \, dx  \, dy & X,Y \text{ continuous} 
> \end{array} \right . 
> \end{align}$$

The following shortcut formula for $\text{Cov}(X,Y)$ simplifies the computations

> [!NOTE] Simplification of Covariance Formula
> $$\text{Cov}(X,Y)=E(XY)-\mu_{X}\cdot \mu_{Y}$$

However, there is no scale for covariance so in practice, we measure the strength of the dependence between two random variables through their **correlation**.


> [!INFO] Define: Correlation
> The **correlation coefficient** of $X$ and $Y$, denoted by $\text{Corr}(X,Y),\rho_{X,Y}$, or just $\rho$, is defined by
> $$\rho_{X,Y}=\frac{\text{Cov}(X,Y)}{\sigma_{X}\cdot \sigma_{Y}}$$

## Properties of Correlation
$\rho$ denotes population correlation
$r$ denotes sample correlation

1. Correlation is the same regardless of which variable you label as $x$ and $y$.
2. Both variables must be **quantitative**
3. Possible values of $r$: $-1\leq r\leq 1$
4. $r>0$ = positive association 
	$r<0$ = negative association
5. $r$ measures strength of *linear* relationships
6. $r$ near 0: weak linear relationship (scattered points)
	$r$ near $-1$ or $1$: points lie close to a straight line
7. $r$ has no unit of measurement
8. Changing the units of measurable for one or both variables will not change the value of $r$
	By extension. $\text{Corr}(aX+b, cY+d)=\text{Corr}(X,Y)$
9. $r$ is strongly affected by **outliers**














