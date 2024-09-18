For a sum: $$\sum_{k=k_{0}}^{n}{a_{k}}$$
The divergence test for convergence takes the limit of $a_{k}$ and analyzes the result.

For example, take the following sum:
$$\sum_{k=1}^{\infty}\frac{k^2}{k^2+1}:\frac{(1)^2}{(1)^2+1}+\frac{(2)^2}{(2)^2+1}+\frac{(3)^2}{(3)^2+1}+\frac{(4)^2}{(4)^2+1}=\frac{1}{2}+\frac{4}{5}+\frac{9}{10}+\frac{16}{17}$$
Notice the individual terms become closer and closer to $1$ because $\lim_{ n \to \infty }\frac{k^2}{k^2+1}=1$.
But this essentially results in adding $1$ over and over. . . obviously resulting in infinity

Thus, it can be stated that for a series to converge, the series has to start adding $0$s at some point. 

From this deduction, it can be stated that for the series to **converge**, the limit of $a_{k}$ **must** be 0 which means as a corollary, if the limit of $a_{k}$ is *not* 0, then the series *diverges*.

BUT. If the limit of $a_{k}$ is 0, **MUST** the series diverge? NO.

Take the famous [[Harmonic Series]]:

> [!NOTE]- Harmonic Series
> The **harmonic series** is the infinite series formed by summing all positive unit fractions:
> $$\sum_{n=1}^{\infty}{\frac{1}{n}}=1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\frac{1}{5}+\dots$$

Although $\lim_{ n \to \infty }{\frac{1}{n}}=0$, this is a **divergent** series as proven in the 14th century. It can also be proven according to the [[Integral Test for Convergence]]

Thus, from the above findings, the following theorem can be stated:

> [!INFO] Theorem: Divergence Test
> If $\lim_{ n \to \infty }a_{n}\neq 0$, then $\sum_{k=1}^{\infty}a_{k}$ **diverges**
> If $\lim_{ n \to \infty }a_{n}= 0$, then $\sum_{k=1}^{\infty}a_{k}$ could converge or diverge and the test is **inconclusive**

> [!NOTE] Corollary: Divergence Test
> If $\sum_{k=1}^{\infty}a_{k}$ converges, then $\lim_{ n \to \infty }a_{n}=0$

---
# Related
---
- [[Series (Sums of Sequences)]]
- [[Ratio Test]]
- [[Limits of Sequences and Growth Rates]]
