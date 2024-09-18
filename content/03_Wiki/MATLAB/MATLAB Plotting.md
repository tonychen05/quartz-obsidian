# Initialization Command
> [!NOTE] close all
> Similar to clear and clc, this ensures that we have a blank slate to start with, and in the case of plots, makes sure that new figure windows will pop up for the user to see, rather than remaining minimized behind the MATLAB window.

`close all`
# Simple 2D Plotting
`plot (x, y, 'specifiers', x1, y1, 'specifiers'...)` = simplest plotting command
	- $x$ and $y$ are vectors containing the $x$ and $y$ values of the data to be plotted
	- $y$ can be a function of $x$
	- vectors $x$ and $y$ must be the same length
## Format:
### Legend
Syntax: `legend('theoretical', 'experimental','Location','southeast')`
### Axis 
To set limits of axis: (x1, x2, y1, y2)
`inf` uses an automatically calculated value

```matlab
axis([-10 10 0 inf])
```

```matlab
xlabel('Weight (lbf)','FontSize',14)
ylabel('Deflection (in)','FontSize',14)
```
### Title
`title('Theoretical and Measured Deflection - Rectangular Copper Beam','FontSize',13)`

## Specifiers:

### Smooth/Scatter
To change between smooth line plots and scatter plots, to change the line type or marker type, and to change the color of the plot, use line specifiers. You can always type "doc linespec" or "help linespec" to see all of the options available in MATLAB. Below is the syntax used to include these specifiers, and a table of commonly used styles and colors.

![[MATLAB Plotting Line Specifiers.png]]
Syntax: `plot(Force, MeasuredDeflection,'or')`

### Linewidth/Markersize
Changing the marker size or line width can help to ensure the plot is clear, readable, and aesthetically pleasing. To do this, add 'LineWidth" or 'MarkerSize' as arguments into the plot command, followed by the desired value. The default line width is 0.5, and the default marker size is 6.

Syntax: `plot(x,y,'specifiers','LineWidth',1)`

### FontSize
The size of title and axes label fonts can also make a significant impact on the clarity of your figures. To change font size, enter 'FontSize' as an argument into the title, xlabel, and ylabel commands as shown below. The default value is 11.

Syntax: 
```matlab
xlabel('Force (lbf)','FontSize',14)
ylabel('Deflection (in)','FontSize',14)
title('Deflection of the Square Copper Beam','FontSize',16)
```

# Multiple Figure Windows
MATLAB also allows us to create multiple figure windows for plots that need to be separated. To do this, we use the "figure" command which simply instructs MATLAB to open a new figure window. Without the figure command, or a hold on command, a plot command will overwrite any previous plot commands.

Syntax: 
`figure(n)`
`figure(1)`
`f = figure(___)` 
`figure(f)` 

# Subplot
Another plotting option is to plot multiple graphs within one figure window. We can do this using the "subplot" function. subplot divides a figure window into an m by n grid and creates axes in the position specified by p:
`subplot(m, n, p)`

# hold
hold retains current plot when adding new plots

`hold on` retains plots in the current axes so that new plots added to the axes do not delete existing plots. New plots use the next colors and line styles based on the `ColorOrder` and `LineStyleOrder` properties of the axes. MATLAB® adjusts axes limits, tick marks, and tick labels to display the full range of data. If axes do not exist, then the `hold` command creates them.

`hold off` sets the hold state to off so that new plots added to the axes clear existing plots and reset all axes properties. The next plot added to the axes uses the first color and line style based on the `ColorOrder` and `LineStyleOrder` properties of the axes. This option is the default behavior.

`hold` toggles the hold state between on and off.

> [!EXAMPLE]
> ```matlab
> x = linspace(-pi,pi);
> y1 = sin(x);
> plot(x,y1)
> 
> hold on
> y2 = cos(x);
> plot(x,y2)
> hold off
> ```


#matlab/plot