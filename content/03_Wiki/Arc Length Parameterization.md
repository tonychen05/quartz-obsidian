# Arc Length

> [!CHECK] RECALL
> When we discuss curves in $\mathbb{R}^3$, it is necessary to describe them by giving a [[Parameterization and Classifying Lines|parameterization]]


> [!INFO] Define: Arc Length
> The length of $\vec{r}(t)$ from $t=a$ to $t=b$ is given by $$s=\int_{t=a}^{t=b} |\vec{r}\,'(t)|\, dt $$

# Arc Length as a Parameter
By requiring that $s(0)=0$, the distance travelled from time $0$ to time $t$ is $$s(t)=\int_{0}^{t} \lvert \vec{r}\,'(u) \rvert  \, du$$
A curve can be described by:
$\vec{r}(t):$ the $(x,y,z)$ location after travelling for $t$ units of time along the curve
$\vec{p}(s):$ the $(x,y,z)$ location after I travel $s$ units along the curve


> [!INFO] Theorem: Arc Length
> A curve traced out by a differentiable vector-valued function $\vec{r}(t)$ is parameterized by arclength iff $$\lvert \vec{r}\,'(t) \rvert=1$$ for **all** $t$


## Finding an Arclength Parameterization
For $\vec{r}(t)=\left< \cos(2t),\sin(2t),t \right>$:
	$\lvert \vec{r}\,'(t) \rvert=\sqrt{ 5 }\neq 1,$ so the helix is not parameterized by arclength

1) Calculate $s$ in terms of $t$
	$s=\int _{0}^{t} \lvert \vec{r}\,'(u) \rvert \, du=\int _{0}^{t}\sqrt{ 5 } \, du=\sqrt{ 5 }t$
2) Find $t$ in terms of $s$
	Since $s=\sqrt{ 5 }t,t=\frac{1}{\sqrt{ 5 }}s$
3) Replace $t$ with $s$ in the original parameterization
	$\vec{r}(t)=\left< \cos(2t), \sin(2t),t \right>$
	$\vec{p}(s)=\left< \cos\left( 2 \cdot \frac{1}{\sqrt{ 5 }}s \right),\sin\left( 2 \cdot \frac{1}{\sqrt{ 5 }}s \right),1 \right>$


> [!NOTE] Remark
> This process is troublesome . . . but arclength is a VERY important parameter


