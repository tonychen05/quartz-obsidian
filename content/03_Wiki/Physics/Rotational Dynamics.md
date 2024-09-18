> [!WARNING] Specify Axis
> In solving rotation problems, you must specify an axis of rotation. This new feature does not exist in translational motion. The choice of axis is arbitrary, but once you make it, you must maintain that choice consistently throughout the problem. In some problems, the physical situation suggests a natural axis, such as one along the axle of an automobile wheel. In other problems, there may not be an obvious choice, and you must exercise judgment.
# Introduction
When a rigid object rotates about a fixed axis, the angular position, angular speed, and angular acceleration are related to the translational position, translational speed, and translational acceleration through the relationships
## Position
angular position = $\theta$ (radians)
translational/linear position = $r\theta$, where $r$ is radius

## Velocity
angular velocity = $\bar{\omega}=\frac{\Delta \theta}{\Delta t}$ ($rad/s$)
translational velocity $v$ = $r\omega$, where $r$ is radius

## Acceleration
angular acceleration = $\alpha=\frac{\Delta \omega}{\Delta t}$ ($rad/s^2$)
centripetal/radial acceleration (points towards center) = $A_{c}=\frac{v^2}{r}=\frac{(\omega r)^2}{r}\to A_{c}=w^2r$
translational/tangential acceleration = $a_{\tan}=r\alpha$

# Rotational Kinematics
> [!NOTE] Rotational Kinematic Equations for Rigid Object Under Constant Angular Acceleration
>Translated from [[Linear Kinematics]]:
>$$\omega_{f}=\omega_{i}+\alpha t$$
>$$\Delta\theta=\frac{1}{2}(\omega_{f}+\omega_{i})t$$
>$$\theta=\theta_{i}+\omega_{i}t+\frac{1}{2}\alpha t^2$$
>$$\omega_{f}^2=\omega_{i}^2+2\alpha(\Delta \theta)$$
>where $\theta$ is angular position, $t$ is time, $\omega$ is angular velocity, and $\alpha$ is angular acceleration

# Torque and [[Moment of Inertia]]
Net torque changes an object's angular velocity
> [!NOTE] Torque
> $$\tau=r\times F_{\perp}=rF\sin \phi$$
> From [[Newton's Laws of Motion#Second Law]] $$\tau_{net}=I\alpha$$
> where $\tau$ is torque, $r$ is radius, $I$ is moment of inertia, and $\phi$ is the angle between the position vector of the point of application of the force and the force vector

Moment of inertia is the tendency for an object to keep doing what it's doing
> [!NOTE] Moment of Inertia
> $$I=\Sigma mr^2$$
> where $m$ is mass and $r$ is the distance of mass from axis of rotation

>[!WARNING] No Single Moment of Inertia
>There is one major difference between mass and moment of inertia. Mass is an inherent property of an object. The moment of inertia of an object depends on your choice of rotation axis. Therefore, there is no single value of the moment of inertia for an object. There is a minimum value of the moment of inertia, which is that calculated about an axis passing through the center of mass of the object.


> [!NOTE] Kinetic Energy of Rotational Motion
> $$KE_{rotational}=\frac{1}{2}I\omega^2$$

# Angular Momentum
[[Momentum]] is always conserved
> [!NOTE] Angular Momentum
> $$L=I\omega$$




#physics/mechanics 