# Normal Vector
At each point on a "smooth" surface, there is a vector orthogonal to the surface called the **normal vector**.

> [!NOTE] Curved Surface
> If a surface is not flat, the orientation of normal vectors change at different points
![[curved_surface_normal_vector.png]]

> [!NOTE] Flat Surface
> If a surface is "flat", all of the normal vectors are parallel!
> ![[flat_surface_normal_vectors.png]]

# Finding Equation of Planes
To find a equation that defines a plane with normal vector $\left< a,b,c \right>$ that passes through a point $(x_{0},y_{0},z_{0})$:

Say $(x,y,z)$ is a point on the plane.
![[finding_normal_vectors.png]]
Thus, $\left< x-x_{0},y-y_{0},z-z_{0} \right> \bullet \left< a,b,c \right> =0$

> [!INFO] Finding Equation of Planes
> If we have a normal vector $\vec{n}=\left< a,b,c \right>$ and a point $(x_{0},y_{0},z_{0})$, the equation of the plane is $$a(x-x_{0})+b(y-y_{0})+c(z-z_{0})=0$$


> [!NOTE] Three Common Ways to Describe Planes
> - $a(x-x_{0})+b(y-y_{0})+c(z-z_{0})=0$
> 	- This is helpful if we have (or can find) a normal vector and a point
> - Standard form: $Ax+By+Cz=D$
> - $z=Ax+By+C$
> 	- Note: if we define the function $f(x,y)=Ax+By+C$, the plane is the surface defined by $z=f(x,y)$

# Finding Normal Vectors
Give a normal vector $\vec{n}$ to $2x-3y+4z=8$
- $\vec{n}=\left< 2,-3,4 \right>$ (use coefficient of $x,y,z$)

*Why?*
Recall that a normal vector is a vector orthogonal to the plane

So, pick $(x_{1},y_{1},z_{1}), (x_{2},y_{2},z_{2})$ on the plane
The vector $\left< x_{2}-x_{1},y_{2}-y_{1},z_{2}-z_{1} \right>$ is parallel to the plane. Then check if this vector is orthogonal to $\left< 2,-3,4 \right>$

$$\begin{align}
&\left< x_{2}-x_{1},y_{2}-y_{1},z_{2}-z_{1} \right> \bullet \left< 2,-3,4 \right> \\
&=2x_{2}-2x_{1}-3y_{2}+3y_{1}+4z_{2}-4z_{1} \\
&=[2x_{2}-3y_{2}+4z_{2}]-[2x_{1}-3y_{1}+4z_{1}] \\
&=8-8=0
\end{align}$$
**Conclusion**: $\left< 2,-3,4 \right>$ is a normal vector



> [!INFO] Finding Normal Vectors
> To find a normal vector for a plane, write it in standard form:
> $$Ax+By+Cz=D$$
> Then, $\vec{n}=\left< A,B,C \right>$ is a normal vector.

> [!INFO] Definition: Classifying Planes
> Suppose $P_{1}$ is a plane with normal vector $\vec{n_{1}}$, $P_{2}$ is a plane with normal vector $\vec{n_{2}}$
> - We say $P_{1}$ and $P_{2}$ are **parallel** if $n_{1}$ and $n_{2}$ are parallel
> - We say $P_{1}$ and $P_{2}$ are **orthogonal** if $\vec{n_{1}}$ and $n_{2}$ are orthogonal

---
# Related
---
- Next: [[Limits and Continuity]]
- Previous: [[Functions of Several Variables]]
- 


