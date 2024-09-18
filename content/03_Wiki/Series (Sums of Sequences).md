
> [!NOTE] Reminder: Summation Notation
> $$\sum_{k=k_{0}}^{n}{a_{k}}$$ sums all integers between $k_{0}$ and $n$ (inclusive)

Simply, series, or sums of sequences, are **infinite sums**

> [!INFO] Define: Series
> Given a sequence $\{a_{n}\}_{n=n_{0}}$, define a **NEW** sequence $\{s_{n}\}_{n=n_{0}}$ by $s_{n}=\sum_{k=n_{0}}^{n}a_{k}$ for all $n\geq n_{0}$.
> - We call the sequence $\{s_{n}\}_{n=n_{0}}$ the ***sequence of partial sums***
> - We say $\sum_{k=n_{0}}^{n}a_{k}$ **converges** if and only if $\lim_{ n \to \infty }s_{n}$ exists
> 	- Furthermore, $\sum_{k=n_{0}}^{n}a_{k}=L$ if and only if $\lim_{ n \to \infty }s_{n}=L$
> - We say $\sum_{k=n_{0}}^{n}a_{k}$ **diverges** if and only if $\lim_{ n \to \infty }s_{n}$ does not exist

> [!NOTE] Definition of Convergence
> $$\sum_{k=1}^{\infty}a^k=\lim_{ n \to \infty } s_{n}$$


> [!CHECK] Starting Value
> - The starting value does not affect if $\sum_{k=k_{0}}^{n}{a_{k}}$ converges
> - IF $\sum_{k=k_{0}}^{n}{a_{k}}$ converges, it **DOES** affect the value to which it converges

## Determining Convergence

### Definition of Convergence
Find a formula for $s_{n}$ and take the limit but in practice, it's often not possible to find an explicit formula for $s_{n}$.

But there are two nice examples:
#### Geometric Series
A geometric **series** is a sum of terms in a geometric *sequence* (Recall: [[Sequences#Geometric Sequence]])

> [!INFO] Theorem: Geometric Series
> $$
> \sum_{k=k_{0}}^{\infty}ar^k = \left\{ \begin{array}{ll}
> \mbox{converges to $\frac{ar^{k_{0}}}{1-r}$}, & \mbox{if $|r| < 1$}\\
> \mbox{diverges} & \mbox{if $|r| \geq 1$} \end{array} \right.
> $$
> 
#### Telescoping Series
Write out terms for $a_{n}$ and $s_{n}$ to find a formula for $s_{n}$ from pattern recognition.


### [[Divergence Test]]
### [[Ratio Test]]

---
# Related
---
- **Next**: [[Taylor Polynomials]]
- [[Limits of Sequences and Growth Rates]]

#calculusII/sequences #calculusII/series 