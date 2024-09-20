
> [!INFO] Define: Random Variable
> For a given sample space $S$ of some experiment, a **random variable (rv)** is any rule that associates a number with each outcome in $S$. In mathematical language, a random variable is a function whose domain is the sample space and whose range is the set of real numbers.

> [!NOTE] Notation
> Capital letters $\left( X,Y,Z \right)$ are used to represent random variables. Lower case letters are used to represent specific values of the random variable.

## Discrete Random Variables
> [!INFO] Define: Discrete Random Variable
> A **discrete** random variable is an rv whose possible values either constitute a finite set or else can be listed in an infinite sequence in which there is a first element, a second element, and so on ("countably" infinite)

If $X$ is a discrete random variable, the function given by $f(x)-P(X-x)$ for each $x$ within the range of $X$ is called the **probability distribution or probability mass function (pmf)** of $X$.

> [!INFO] Define: Probability Mass Function (pmf) (Formally)
> The **probability distribution** or **probability mass function** (pmf) of a *discrete* rv is defined for every number $x$ by $p(x)=P(X=x)=P(\text{all } \omega \in S:X(\omega)=x)$.

^811523

In English: for every possible value $x$ of the random variable, the pmf species the probability of observing that value when the experiment is preformed. The conditions $p(x)\geq 0$ and $\sum_{\text{all possible }x}p(x)=1$
#### Example (Discrete RV)
Suppose a family has 3 children. Let $X$ = the number of girls

Since $X=\{ 0,1,2,3,\dots \}$ is **finite and countable**, this is **[[Probability|discrete]]**

The sample space $S$:
	$S=\{ GGG,BBB,GBG,GGB,BGG,BBG,BGB,GBB \}$
Probability of each outcome is $\frac{1}{8}=0.125$

Since $X$ represents the number of girls, the sample space can also be expressed as:
	$S=\{ 3,0,2,2,2,1,1,1 \}$

Find the probability mass function (pmf) of x:

| $x$    | $0$   | $1$   | $2$   | $3$   |
| ------ | ----- | ----- | ----- | ----- |
| $p(x)$ | $1/8$ | $3/8$ | $3/8$ | $1/8$ |
$\sum p(x)=1$


> [!NOTE] Representing Probability Mass Function 
> You could use either a line graph or histogram with $x$ on the x-axis and $p(x)$ on the y-axis to represent pmf.

### Cumulative Distribution Function

> [!INFO] Define: Cumulative Distribution Function (CDF)
> The **cumulative distribution function** (cdf) $F(x)$ of a discrete rv variable $X$ with pmf $p(x)$ is defined for every number $x$ by $$F(x)=P(X\leq x)=\sum_{y:y \leq x}p(y)$$ For any number $x$, $F(x)$ is the probability that the observed value of $X$ will be at most $x$.

From the above [[Discrete Random Variables#Example (Discrete RV)|example]],
$$F(x) = \left\{ \begin{array}\ll  
0 & x<0  \\
\frac{1}{8} & 0\leq x\leq 1 \\
\frac{1}{8}+\frac{3}{8}=\frac{4}{8}=\frac{1}{2} & 1\leq x<2 \\
\frac{7}{8} & 2\leq x<3 \\
1 & x\geq 3
\end{array} \right.$$

> [!NOTE] Representation of CDF
> The CDF can be represented using a graph of the piecewise function.

### Expected Values and Variance

> [!INFO] Define: Expected Value
> Let $X$ be a discrete rv with set of possible values $D$ and pmf $p(x)$. The **expected value** or **mean value** of $X$, denoted by $E(X)$ or $\mu_{x}$, or just $\mu$, is $$E(X)=\mu_{x}=\sum_{x \in D}x\cdot p(x)$$

> [!INFO] Define: Variance and Standard Deviation
> Let $X$ have pmf $p(x)$ and expected value $\mu$. Then the **variance** of $X$, denoted by $V(X)$ or just $\sigma^2_{X}$, or just $\sigma^2$, is $$V(X)=\sum_{D}(x-\mu)^2\cdot p(x)=E[(X-\mu)^2]$$ The **standard deviation (SD)** of $X$ is $$\sigma_{x}=\sqrt{ \sigma^2_{x} }$$

> [!NOTE] Computationally Easier Formula for Variance
> $$V(X)=\sigma^2=\sum (x^{2}p(x))-\mu^2$$


