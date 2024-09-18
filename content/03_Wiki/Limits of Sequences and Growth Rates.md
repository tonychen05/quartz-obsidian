# Limits of Sequences

> [!INFO] Define: Limit of Sequence (Conceptual)
> Suppose ${\{a_{n}\}}_{n=n_{0}}$ is a sequence. We say that **the sequence has a limit $L$** and that $\lim_{ n \to \infty }a_{n} =L$ if $a_{n}$ becomes arbitrarily close to $L$ as $n$ grows arbitrarily large.

> [!INFO]- Define: Limit of Sequence (Formal)
> $\lim_{ n \to \infty }a_{n} =L$ **iff** for any $\epsilon>0$, there exists an integer $N$ (depending on $\epsilon$) so $|a_{n}-L|<\epsilon$ for all $n\to N$

# Growth Rates
We want to establish results that allow us to determine limits of other types of functions quickly.

> [!NOTE] Notation
> We say "$a_{n}\ll b_{n}$" if $\lim_{ n \to \infty }\frac{a_{n}}{b_{n}}=0$
> 	"$b_{n}$ grows much faster than $a_{n}$"

> [!INFO] Theorem: Growth Rates
> Let $p,q>0,$ $a>1$. Then:
> $$(\ln n)^{p}\ll n^{q}\ll a^n\ll n!\ll n^n$$

Using Growth Rates, we are able to determine limits by inspection using **Dominant Term Analysis**
The **dominant terms** are the highest power in numerator and denominator.

ex1: $\lim_{ n \to \infty }\frac{5n^3+4n^2+1}{3n^3-2n+7}=\lim_{ n \to \infty }\frac{5n^3}{3n^3}=\frac{5}{3}$
ex2: $\lim_{ n \to \infty }\frac{(2n+1)^3}{(2n+1)(4n-3)}=\infty$ because by G.R. $\frac{8n^{3}}{8n^{2}} {\sim\:}n$

ex3: $\lim_{ n \to \infty }\frac{(\ln n)^{10000000}}{n^{.00001}}=0$ 
ex4: $\lim_{ n \to \infty }\frac{3^n+n!}{n^{100}+n^n}=0$ because by G.R. $\frac{n!}{n^n}\sim 0$

---
# Related
---
- [[Series (Sums of Sequences)]]

#calculusII/sequences 