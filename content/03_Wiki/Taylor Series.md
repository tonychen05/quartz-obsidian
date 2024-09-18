
The following table displays four common Taylor Series:

|    Function     |                  Longhand                   |                        Summation                        | ROC                |
| :-------------: | :-----------------------------------------: | :-----------------------------------------------------: | ------------------ |
|      $e^x$      | $1+x+\frac{1}{2!}x^2+\frac{1}{3!}x^3+\dots$ |        $$\sum_{k=0}^{\infty}{\frac{1}{k!}x^k}$$         | $$\infty$$         |
|    $\sin(x)$    |  $x-\frac{1}{3!}x^3+\frac{1}{5!}x^5-\dots$  | $$\sum_{k=0}^{\infty}{\frac{(-1)^k}{(2k+1)!}x^{2k+1}}$$ | $$\infty$$         |
|    $cos(x)$     |  $1-\frac{1}{2!}x^2+\frac{1}{4!}x^4-\dots$  |   $$\sum_{k=0}^{\infty}{\frac{(-1)^k}{(2k)!}x^{2k}}$$   | $$\infty$$         |
| $\frac{1}{1-x}$ |             $1+x+x^2+x^3+\dots$             |              $$\sum_{k=0}^{\infty}{x^k}$$               | $\vert x\vert < 1$ |

We can make new series by:
1) Adding
2) Multiplying
3) Composing
4) Differentiating
5) Integrating

> [!EXAMPLE]- Adding
> ![[Taylor Series Adding Example.png]]

> [!EXAMPLE]- Multiplying
> ![[Taylor Series Multiply Example.png]]

> [!EXAMPLE]- Composition
> ![[Taylor Series Composition Example.png]]
## Differentiating and Integrating

> [!CHECK] Differentiating Taylor Series
> 1) We can differentiate/integrate a series term-by-term
> 2) The derivative/integral of a series is the sum of the derivatives/integral of each term
> 3) Differentiating does **not** change the ROC (or open IOC)

> [!EXAMPLE]- Differentiating
> ![[Taylor Series Differentiating Example.png]]

> [!EXAMPLE]- Integrating
> ![[Taylor Series Integration Example.png]]

1
