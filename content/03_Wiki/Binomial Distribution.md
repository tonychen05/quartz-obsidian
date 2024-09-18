> [!INFO] Define: Binomial Experiment
> An experiment for which four conditions (a fixed number of dichotomous, independent, homogenous trials) are satisfied:
> 1. The experiment consists of a sequence of $n$ smaller experiments called *trials*, where $n$ is **fixed** in advance of the experiment
> 2. Each trial can result in one of the same two possible outcomes (**dichotomous** trials), which we generically denote by success ($S$) and failure ($F$). The assignment of the $S$ and $F$ labels to the two sides of the dichotomy is arbitrary.
> 3. The trials are **independent**, so that the outcome on any particular trial does not influence the outcome on any other trial
> 4. The probability of success $P(S)$ is *constant* from trial to trial (**homogenous**); we denote this probability by $p$

> [!NOTE] Notation: Binomial [[Discrete Random Variables|rv]]
> $X\sim Bin(n,p)$ or $b(x;n,p)$
> Read: X is "distributed" as a binomial random variable with parameters $n$ and $p$

The **binomial distribution** provides the probability distribution for the number of "successes" in a fixed number of independent trials, when the probability of success is the same each trial.

> [!INFO] Theorem: Binomial Distribution
> $$b(x;n,p)=\left\{ \begin{array}\ll
> {n \choose x} p^{x(1-p)^{n-x}} &x=0,1,2,\dots,n \\
> 0 & \text{otherwise}
> \end{array} \right. $$

> [!NOTE] $n \choose x$
> Denotes number of ways to $x$ successes out of $n$ trials
> $$\binom nx=_{n}C_{x}=\frac{n!}{x!(n-x)!}$$

The **mean** and **variance** of the binomial distribution are $\mu=np$ and $\sigma^2=np(1-p)$
	!! HAS TO BE BINOMIAL !!


> [!NOTE] Visual Representation of Binomial Probability Distribution
> Larger values of $n$ will cause the graph to become more symmetric. Also, if $p$ is close to $0.50$, the probability will by symmetric. If $p<0.5$, the probability distribution will be right skewed. If $p>0.5$, the probability distribution will be left skewed.


