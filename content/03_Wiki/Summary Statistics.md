## Measure of Central Tendency

> [!INFO] Define: measure of central tendency
> a value that represents a typical, or central, entry of a data set

The most common measures are mean, median, and mode.

### Mean
For a given set of numbers $x_{1},x_{2},\dots,x_{n}$, the most familiar and user measure of center is the *mean*, or arithmetic average of the set.

> [!INFO] Define: Sample Mean
> The sample mean $\bar{x}$ (x-bar) of observations $x_{1},x_{2},\dots,x_{n}$ is given by $$\bar{x}=\frac{x_{1}+x_{2}+\dots+x_{n}}{n}=\frac{\sum_{i=1}^{n}x_{i}}{n}$$

### Median
The word *median* is synonymous with "middle," and the sample median is indeed the middle once the observations are **ordered** from smallest to largest. When the observations are denoted by $x_{1},x_{2},\dots,x_{n}$, we will use the symbol $\tilde{x}$ to represent the sample median.

> [!INFO] Define: Sample Median
> The **sample median** is obtained by first ordering the $n$ observations from smallest to largest (with any repeated values included so that every sample observation appears in the ordered list). Then,
> $$ 
> \tilde{x}= \left\{ \begin{array}{ll}
> \mbox{The single middle value if $n$ is odd} & \mbox{$= \left( \frac{n+1}{2} \right)^{\text{th}}$ ordered value}\\
> \mbox{The average of the two middle values if $n$ is even} & \mbox{= average of $\left( ?\frac{n}{2} \right)^{\text{th}}$ and $(\frac{n}{2}+1)^{\text{th}}$ ordered values} \end{array} \right.
> $$

The median is the most **robust** (not sensitive to the largest and smallest observations)

### Mode
Most frequent value, often used for categorical (qualitative) data

## Measures of Variability
Reporting a measure of center gives only partial information about a data set or distribution. Several samples or populations may have identical measures of center yet differ from one another in other important ways.


> [!INFO] Define: measures of variability
> the measure of variation, spread, and volatility

### Range
The simplest measure of variability in a sample is the **range**.

> [!INFO] Define: range
> $$R=max-min$$

Range is heavily influenced by outliers.


### Sample Variance and Standard Deviation
The primary measures of variability involve **deviations from the mean**, that is, subtracting $\bar{x}$ from each of the $n$ sample observations.

A deviation will be positive if the observation is larger than the mean and negative if the observation is smaller than the mean.

If all the deviations are small in magnitude, then all $x_{i}$'s are close to the mean and there is little variability.

Combining these deviations into a single quantity for use is trickier than one might imagine. Simply taking the average of the deviations will not work as:
$$\text{sum of deviations}=\sum_{i=1}^{n}(x_{i}-\bar{x})=0$$
Thus, the average deviation is always zero.

There are several ways to prevent negative and positive deviations from counteracting one another when they are combined like using absolute values. But, for some theoretical reason on absolute values that are not explained to me and thus I don't know, absolute values are tricky and thus not a solution. Instead, somehow and for some reason, statisticians opted to use the squared deviations $(x_{i}-\bar{x})^2$, and for some other god-forsaken reason that I am not interested in delving into right now, we divide the sum of squared deviations by $n-1$ instead of $n$.

So... all that is to say:

> [!INFO] Sample Variance and Standard Deviation
> The **sample variance**, denoted by $s^2$, is given by
> $$s^2=\frac{\sum(x_{i}-\bar{x})^2}{n-1}=\frac{S_{xx}}{n-1}$$
> The **sample standard deviation**, denoted by $s$, is the (positive) square root of the variance and symbolizes the "typical distance from the mean:": $$s=\sqrt{ s^2 }$$

Note that both $s^2$ and $s$ are both nonnegative. 

> [!EXAMPLE] Alternative Formula for $s^2$
> $$s^2=\frac{1}{n-1}\left( \sum{x_{i}}^2 -\frac{\left( \sum{x_{i}} \right)^2}{n}\right)$$

## Five Number Summary

> [!INFO] Define: Five-Number Summary
> Another way to measure spread: $min,Q_{1},Q_{2},Q_{3},max$
> Also used to draw boxplots

$min$ = smallest value
$Q_{1}$ (lowest fourth) = 25th percentile
$Q_{2}$ (median) = 50th percentile
$Q_{3}$ (upper fourth) = 75th percentile
$max$ = largest value

Fourth Spread (Interquartile Range/IQR) = $Q_{3}-Q_{1}$
- very resistant to outliers like the median

Outliers = unusual values compared to rest of data
- a general rule is $1.5\times IQR$



