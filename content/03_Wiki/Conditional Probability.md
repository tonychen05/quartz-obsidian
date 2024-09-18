The probabilities assigned to various events depend on what is known about the experimental situation when the assignment is made.

> [!INFO] Define: Conditional Probability
> For any two events $A$ and $B$ in the Sample Space with $P(B)>0$, **the conditional probability of $B$ *given* that $A$ has occurred** is defined by $$P(B|A) = \frac{P(A \cap B)}{P(A)}$$

The conditional probability is expressed as a ratio of unconditional probabilities: The numerator is the probability of the intersection of the two events, whereas the denominator is the probability of the **conditioning event** $A$. This relationship is demonstrated in the figure below.

> [!EXAMPLE] Motivating the Definition of Conditional Probability
> ![[conditional_probability.excalidraw]]

By extension, we get the multiplication rule for conditional events:

> [!NOTE] Multiplication Rule for Conditional Events
> $$
> \begin{align}
> P(A\cap B)&=P(B|A)P(A) \\
> &=P(A|B)P(B)
> \end{align}
> $$

> [!WARNING] 
> $P(A\cap B)=P(A)P(B)$ is true for **INDEPENDENT** events only.

## Independent or Dependent

> [!INFO] Define: Independent Events
> Two events $A$ and $B$ are **independent** if their occurrence or nonoccurrence of either does not affect the probability of the occurrence of the other

> [!NOTE] Two ways to show $A$ and $B$ are independent
> - $P(A\cap B)=P(A)P(B)$
> 	- if the event is mutually exclusive, $P(A \cap B)=0$
> - $P(A|B)=P(A)$
> 	- "the probability of A given B is the same as probability of A" since in an independent event, B will have no effect

# Bayes' Theorem

> [!INFO] Bayes' Theorem on Inverting Conditional Probabilities
> $$P(A|B)=\frac{P(B|A)P(A)}{P(B)}$$

> [!INFO] The Law of Total Probability
> 

> [!INFO] The Law of Total Probability
> Let $A_{1},\dots,A_{k}$ be mutually exclusive and exhaustive events. Then for any other event $B$,
> $$
> \begin{align}
> P(B)&=P(B|A_{1})P(A_{1})+\dots+P(B|A_{k})P(A_{k}) \\
> &=\sum_{i=1}^{k}P(B|A_{i})P(A_{1})
> \end{align}
> $$




