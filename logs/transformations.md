---
layout: post
---

# tranformations

Rules of transformation *shall* be obeyed:

- Origin must not change
- Straight lines must remain straight
- Parallel lines must remain parallel

Some operations: rotation, shear, scaling, etc.

---

## Linear Transformation


$T(\mathbf{x}) = A\mathbf{x}$

Properties:

- $T(\mathbf{u} + \mathbf{v}) = A\mathbf{u} + A\mathbf{v}$

- $T(0) = 0$

This is where matrices appear.  
A matrix behaves like a function: it takes a vector from its **domain** (dimension of input vectors) and produces another vector in its **codomain** (column space).

*(animation here)*

---

## System of equations

$$
A\mathbf{x} = \mathbf{b}
$$

$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}
= \mathbf{b}
$$

This equals a linear combination of columns:


$$
\mathbf{b} =
x
\begin{bmatrix}
1 \\
4 \\
7
\end{bmatrix}
+
y
\begin{bmatrix}
2 \\
5 \\
8
\end{bmatrix}
+
z
\begin{bmatrix}
3 \\
6 \\
9
\end{bmatrix}
$$


So $(\mathbf{b}$) lies in the span of the column vectors, i.e linear combination of column vectors.

---

## Matrix multiplication (composition of transformations)

Let:

- $(A_1$) = shear
- $(A_2$) = rotation

Horizontal shear: $A_1 =
\begin{bmatrix}
1 & k \\
0 & 1
\end{bmatrix}$

$(x,y) \mapsto (x + ky,\; y)$

---

Vertical shear:  $A_2 =
\begin{bmatrix}
1 & 0 \\
k & 1
\end{bmatrix}$

$(x,y) \mapsto (x,\; y + kx)$

---

Rotational: $A_2 =
\begin{bmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{bmatrix}$


$\mathbf{v'} = A_2\mathbf{v}$

---


Applying rotation then shear:

$f(g(\mathbf{x})) = A_1(A_2\mathbf{x})$

Equivalent to:

$C = A_1A_2$

$C\mathbf{x}$

applying shear then rotation results in different matrix:

$D = A_2A_1$

$D\mathbf{x}$


Order matters: $A_1A_2 \neq A_2A_1$

therefore, matrices follow associative property but not commutative.

---

## Rank

$\text{rank}(A) = \dim(\text{Col}(A))$ =  number of linearly independent columns.

(Row echelon form later)
