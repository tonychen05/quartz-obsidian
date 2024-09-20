[[Binary Tree]] can be used to arrange the labels on binary tree nodes in a variety of useful ways

A common arrangement of labels, which supports searching that is much faster than linear search, is called a **binary search tree (BST)**

### Very General
BSTs may be used to search for items of any type `T` for which one has defined a *total preorder*, i.e., a *binary relation* on `T` that is *total*, *reflexive*, and *transitive*

> [!INFO] Define: binary relation
> A *binary relation* on `T` may be viewed as a set of ordered pairs of `T`, or as a `boolean`-valued function $R$ of two parameters of type `T` that is **true** iff that pair is in the set.
> - Examples:
> 	- `Rob.isInstructor(Me) = true`

The binary relation $R$ is *total* whenever:
$(\forall x,y \in T)(R(x,y)\vee R(y,x))$
**Example**:
- for all x, y, x is <= y or y <= x

The binary relation $R$ is *reflexive* whenever:
$(\forall x \in T)(R(x,x))$
**Example**:
- given all possible x, x is equal to x

The binary relation $R$ is *transitive* whenever:
$(\forall x,y,z \in T)((R(x,y)\wedge R(y,z)) \implies R(x,z))$
**Example**:
- if x < y and y < z, then x < z

## BST Arrangement Properties
A [[Binary Tree]] is a BST whenever the arrangement of node labels satisfies these two properties:
1. For every node in the tree, if its label is $x$ and if $y$ is a label in that node's *left* subtree, then $y<x$
2. For every node in the tree, if its label is $x$ and if $y$ is a label in that node's *right* subtree, then $y>x$


