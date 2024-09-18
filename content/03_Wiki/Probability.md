> [!INFO] Define: probability
> refers to the study of randomness and uncertainty; is also a quantitative measure of house likely an event is to occur

There are three main types of probability:
- Classical (Theoretical): assumes all outcomes in sample space is equally likely 
	- e.g. rolling a die, flipping a coin
- Relative Frequency (Empirical): count the frequency of occurrences out of the total number of trials
- Subjective: Intuition, educated guess, estimates
	- e.g. probability of a sports team winning

> [!INFO] Define: Experiment
> Any activity or process whose outcome is subject to uncertainty

Although the word _experiment_ generally suggests a planned or carefully controlled laboratory testing situation, we use it here in a much wider sense. Thus experiments that may be of interest include tossing a coin once or several times, selecting a card or cards from a deck, weighing a loaf of bread, ascertaining the commuting time from home to work on a particular morning, obtaining blood types from a group of individuals, or measuring the compressive strengths of different steel beams.


> [!INFO] Define: Sample Space 
> The **sample space** of an experiment, denoted by $S$, is the set of all possible outcomes of that experiment.

Sample spaces are **mutually exclusive** and **exhaustive**.

Examples of **finite** samples spaces:
- Flip a coin once
	- $S=\{H,T\}$
- Flip a coin twice
	- $S=\{TT,HT,TH,HH\}$
- Roll a dice and record the numerical result
	- $S=\{1,2,3,4,5,6\}$
- Roll a dice and record whether it is even or odd
	- $S={even, odd}$

**Discrete** sample spaces have finite number or an infinite through countable number of elements.
	For example, the sample space for rolling a die as seen above, each outcome is a distinct and countable number.

**Continuous** sample space are not discrete and contain outcomes on an interval (continuum).
	For example, an experiment of how long it takes someone to get to class has a sample space of $S=[0,60]$ minutes or $S=\{x|0\leq x\leq 60\}$. 
	It is impossible to write out all values from $0$ to $60$


> [!INFO] Define: Event
> An **event** is any collection (subset) of outcomes contained in the sample space $S$. An event is *simple* if it consists of exactly one outcome and *compound* if it consists of more than one outcome.

Example of simple event: "Tossing heads and rolling a 3" 
	$S = \{H3\}$ and only has one outcome

Example of compound event: "Tossing heads and rolling an even number"
	$S=\{H2,H4,H6\}$


> [!NOTE] [[Set Operations|Set Theory]]
> An event is just a set, so relationships and results from [[Set Operations|elementary set theory]] can be used to study events. In particular, the following operations will be used to create new events from given events: complement, union, and intersection.

> [!NOTE] Corollary: Complementary Events
> If $A$ and $A^c$ are complementary events in a sample space $S$, then $P(A^c)=1-P(A)$

> [!INFO] Define: null event
> Let $\emptyset$ denote the *null event* (the event consisting of no outcomes whatsoever). When $A\cap B=\emptyset$, $A$ and $B$ are said to be **mutually exclusive** or **disjoint** events.

Given an experiment and a sample space, the objective of probability is to assign to each event $A$ a number, called the probability of the event $A$, which will give a precise measure of the chance that $A$ will occur. To ensure that the probability assignments will be consistent with our intuitive notions of probability, all assignments should satisfy the following axioms (basic properties) of probability:


> [!INFO] Axiom 1
> For any event $A$, $P(A)\geq 0$; that is, probability cannot be negative

> [!INFO] Axiom 2
> $P(S)=1$; that is, the sample space is mutually exclusive and exhaustive meaning that every outcome of an event is in the sample space. 
> 
> More simply: "The probability of an outcome that is in the sample space is 100%."

> [!NOTE] Corollary: Probability of Empty Set
> $P(\emptyset)=0$ for any sample space $S$
> The empty set represents an event that contains no outcomes and cannot occur; intuitively, the probability of an impossible event is zero.

> [!INFO] Axiom 3
> If $A_{1},A_{2},A_{2},\dots$ is an infinite collection of **mutually exclusive** events, then
> $$P(A_{1}\cup A_{2}\cup A_{2}\cup\dots)=\sum_{i=1}^{\infty}P(A_{i})$$

> [!INFO] General Additional Rule
> If $A$ and $B$ are any two events in the sample space $S$, then
> $$P(A\cup B)=P(A)+P(B)-P(A\cap B)$$



