
> [!INFO] Define: Binary Tree
> A binary tree is a [[tree]] comprising zero or more *nodes* where each node has exactly two children.

A binary tree is either
- the **empty** tree, which has no nodes at all; or
- a **non-empty** tree, which consists of:
	- a *root* node
	- two *subtrees* of the root

## The Empty Tree
The empty binary tree is denoted by `empty_tree` and is shown in diagrams as simply the absence of a tree where there could be one, or (when it's not completely clear from context) as a filled-in square.

## Non-Empty Trees
Every non-empty tree is the result of the mathematical function `compose` applied a value of label type `T` and two other values of type `binary tree of T`, which are the root and the left and right subtrees of the resulting binary tree.

# Size, Height, and Labels
- The **size** of `t`, i.e., the total number of nodes in `t`, is denoted by `|t|`
	- The size of an `empty_tree` is 0
	- The size of a non-empty tree is `1 + |ls| + |rs|`
- The **height** of `t`, i.e., the number of nodes on the longest path from the root to an empty subtree of `t`, is denoted by `ht(t)`
	- The height of an `empty_tree` is 0
	- The height of a non-empty tree is `1 + max(ht(ls), ht(rs))`
- The **labels** of `t`, i.e., the set whose elements are exactly the labels of `t` (i.e., the tree's labels without duplicates and ignoring order) is denoted by `labels(t)`
	- The labels of an empty tree is `{ }`
	- The labels of an non-empty tree is `{13} union labels(ls) union labels(rs)`

# Traversal Orders
There are three named **traversal orders** for the nodes of a binary tree, named according to when the root is "visited" relative to the (recursive) traversals of the left and right subtrees
- **Pre-order**: root is visited *before* left and right
- **In-order**: root is visited *between* left and right
- **Post-order**: root is visited *after* left and right

