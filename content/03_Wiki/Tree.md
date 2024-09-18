A **tree** is made up of:
- A *root node*
- A string of zero or more *child nodes* of the root, each of which is the root of its own tree

> [!EXAMPLS] Tree
> ![[Tree.png|300]]

> [!NOTE] Terms and Definitions
> - *root* - top most node (B)
> - *branches* (*edges*)
> - *children* of root node (K, R, S)
> - *parent* of node S (B)
> - *siblings* of node S (K, R)
> - *leaf* nodes - nodes without children (A, T, G, L, H, E, P)
> - *size* - total number of nodes (12)
> - *path* from node B to L has a *length* of 3 (B, R, S)
> - *height* - length of a longest path from root to leaf {4} (B, R, C, G)

> [!TIP] Recursive Structure 
> Since a tree may contain other trees, its structure is *[[Recursion|recursive]]*

Example of Recursive Code:
```java
/**
* Reports whether the given tag appears in the given {@code XMLTree}.
* 
 * @param xml
 *            the {@code XMLTree}
 * @param tag
 *            the tag name
 * @return true if the given tag appears in the given {@code XMLTree},
 *         false otherwise
 * @ensures <pre>
 * findTag =
 *    [true if the given tag appears in the given {@code XMLTree}, false otherwise]
 * </pre>
 */
private static boolean findTag(XMLTree xml, String tag) {
	if (xml.isTag() && xml.label().equals(tag)) {
		return true;
	}
	for (int i = 0; i < xml.numberOfChildren(); i++) {
		XMLTree child = xml.child(i);
		if (findTag(child, tag)) {
			return true;
		}
	}
	return false;
}
```

