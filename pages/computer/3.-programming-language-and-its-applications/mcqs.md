# MCQs

### 1. Which of the following statements is true?

1. We cannot create any program without using tokens in C
2. We can create a program without using tokens in C
3. Can use tokens to create a program if necessary
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) We cannot create any program without using tokens in C

**Explanation:**\
Tokens are the basic building blocks of a C program. They include:

* **Keywords**: Reserved words like `int`, `char`, `if`, etc.
* **Identifiers**: Names given to variables, functions, etc.
* **Operators**: Symbols like `+`, `-`, `*`, etc.
* **Constants**: Fixed values like `10`, `3.14`, etc.
* **Special symbols**: Symbols like `{}`, `[]`, `()`, etc.

Without tokens, it is impossible to write any valid C program. Therefore, the correct answer is that we cannot create any program without using tokens in C.

</details>

### 2. Which of the following are the types of tokens?

1. Identifiers and Keywords
2. Operators and Strings
3. Special Characters and Constants
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
Tokens in C programming are categorized into several types:

* **Identifiers**: Names given to variables, functions, etc. (e.g., `int x;`).
* **Keywords**: Reserved words with special meanings (e.g., `int`, `char`, `if`).
* **Operators**: Symbols that perform operations (e.g., `+`, `-`, `*`).
* **Strings**: Text enclosed in quotes (e.g., `"Hello"`).
* **Special characters**: Symbols like `{}`, `[]`, `()`, etc.
* **Constants**: Fixed values like `10`, `3.14`, etc.

Therefore, all the options listed are types of tokens.

</details>

### 3. Which of the following is not a keyword in C?

1. Double
2. Ripple
3. Default
4. Static

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Ripple

**Explanation:**\
Keywords in C are reserved words that have special meaning and cannot be used as variable names. Examples include:

* `Double`: A valid keyword used for double-precision floating-point numbers.
* `Default`: A valid keyword used in switch-case statements.
* `Static`: A valid keyword used to define static variables.

However, `Ripple` is not a keyword in C. Therefore, the correct answer is Ripple.

</details>

### 4. We can classify the operator as:

1. Unary and Binary
2. Binary and Ternary
3. Unary and Ternary
4. Unary, Binary, and Ternary

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Unary, Binary, and Ternary

**Explanation:**\
Operators in C can be classified based on the number of operands they work with:

* **Unary operators**: Work on a single operand. Examples include:
  * Increment (`++`), Decrement (`--`).
  * Address-of (`&`), Dereference (`*`).
* **Binary operators**: Work on two operands. Examples include:
  * Arithmetic operators (`+`, `-`, `*`, `/`).
  * Relational operators (`==`, `!=`, `<`, `>`).
* **Ternary operators**: Work on three operands. The only ternary operator in C is the conditional operator (`? :`).

Therefore, the correct classification is Unary, Binary, and Ternary.

</details>

### 5. What are the special characters in C?

1. () and \[]
2. (.) and {}
3. and #
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
Special characters in C are symbols that have specific meanings in the language. These include:

* Parentheses `()`: Used for function calls and expressions.
* Square brackets `[]`: Used for array indexing.
* Curly braces `{}`: Used to define blocks of code.
* Dot operator `.`: Used to access members of a structure.
* Asterisk `*`: Used for pointers and multiplication.
* Hash `#`: Used for preprocessor directives.

Therefore, all the options listed are special characters in C.

</details>

### 6. Which of the following are examples of formatted input and output functions?

1. Print()
2. Scan()
3. Both A & B
4. Getch()

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Both A & B

**Explanation:**\
Formatted input and output functions in C allow users to specify the format of the data being read or written. Examples include:

* **Formatted output**: `printf()` is used to display data in a specified format.
* **Formatted input**: `scanf()` is used to read data in a specified format.

Therefore, both `Print()` and `Scan()` are examples of formatted input and output functions.

</details>

### 7. Which of the following is false?

1. Unformatted I/O functions are used for storing data more compactly.
2. Formatted input and output functions contain format specifiers in their syntax.
3. getch(), getche(), getchar(), gets(), puts(), putchar() are examples of unformatted input/output functions.
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) None of the Above

**Explanation:**\
Let's analyze each statement:

* **Statement 1**: Unformatted I/O functions (e.g., `getch()`, `putchar()`) are used for compact data handling, as they do not use format specifiers. This statement is **true**.
* **Statement 2**: Formatted I/O functions (e.g., `printf()`, `scanf()`) use format specifiers like `%d`, `%f`, etc. This statement is **true**.
* **Statement 3**: Functions like `getch()`, `getche()`, `getchar()`, `gets()`, `puts()`, and `putchar()` are indeed unformatted I/O functions. This statement is **true**.

Since all statements are true, the correct answer is "None of the Above."

</details>

### 8. Which of the following is not a looping structure?

1. While
2. If Else
3. Do-While
4. For

<details>

<summary>Show me the answer</summary>

**Answer:** 2) If Else

**Explanation:**\
Looping structures in C are used to repeat a block of code multiple times. Examples include:

* **While loop**: Repeats a block of code while a condition is true.
* **Do-While loop**: Similar to the `while` loop but guarantees at least one execution.
* **For loop**: Repeats a block of code for a fixed number of iterations.

However, `If Else` is a conditional statement, not a looping structure. It is used to execute a block of code based on a condition. Therefore, the correct answer is `If Else`.

</details>

### 9. Which of the following is an unconditional control structure?

1. Goto
2. While
3. For
4. Do-while

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Goto

**Explanation:**\
Unconditional control structures in C allow the program to jump to a specific part of the code without any condition. Examples include:

* **Goto**: Transfers control to a labeled statement unconditionally.
* **While**, **For**, and **Do-While**: These are conditional looping structures that execute based on a condition.

Therefore, the correct answer is `Goto`.

</details>

### 10. The main function of the continue statement is:

1. Starts from the beginning of the program
2. Does not break the loop but starts a new iteration
3. Exits the program
4. Breaks the loop and goes to the next statement after the loop

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Does not break the loop but starts a new iteration

**Explanation:**\
The `continue` statement is used in loops to skip the remaining code in the current iteration and move to the next iteration. For example:&#x20;

```c
for (int i = 0; i < 5; i++) { 
    if (i == 2) continue; // Skip iteration when i == 2 printf("%d\n", i); } 
```

In this case, the loop skips the iteration where `i == 2` and continues with the next iteration. Therefore, the correct answer is that the `continue` statement does not break the loop but starts a new iteration.

</details>

### 11. In the program, if we use a switch case:

1. The default case must be present
2. The default case need not be present
3. The default case, if used, should be the last case
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) The default case, if used, should be the last case

**Explanation:**\
The `switch` statement in C is used to execute one block of code from multiple options. Key points:

* The `default` case is optional and is executed when no other case matches.
* If the `default` case is used, it is conventionally placed at the end of the `switch` block, but it is not mandatory.

Therefore, the correct answer is that the `default` case, if used, should be the last case.

</details>

### 12. How long does the for(x=0; x=5; x++) loop run?

1. 3 times
2. 5 times
3. 6 times
4. 2 times

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 6 times

**Explanation:**\
The `for` loop syntax is:

* Initialization: `x = 0`
* Condition: `x = 5` (assignment, not comparison)
* Increment: `x++`

The condition `x = 5` assigns the value `5` to `x` and evaluates to `true` (non-zero). Since the condition is always `true`, the loop runs indefinitely. However, if we assume the condition is `x <= 5`, the loop runs 6 times (for `x = 0, 1, 2, 3, 4, 5`). Therefore, the correct answer is 6 times.

</details>

### 13. Skip the rest of the loop and carry on from the top of the loop again?

1. Break
2. If-else
3. Continue
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Continue

**Explanation:**\
The `continue` statement is used to skip the remaining code in the current iteration of a loop and move to the next iteration.&#x20;

For example:&#x20;

<pre class="language-c"><code class="lang-c">for (int i = 0; i &#x3C; 5; i++) { 
<strong>    if (i == 2) 
</strong>    continue; // Skip iteration when i == 2 
    printf("%d\n", i); 
}
</code></pre>

In this case, the loop skips the iteration where `i == 2` and continues with the next iteration. Therefore, the correct answer is `Continue`.

</details>

### 14. Which of the following is used to transfer control from a function back to the calling function?

1. Return
2. Back
3. Goto
4. Break

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Return

**Explanation:**\
The `return` statement is used to transfer control from a function back to the calling function. For example: int add(int a, int b) { return a + b; // Returns the sum of a and b to the calling function } In this case, the `return` statement sends the result back to the caller. Therefore, the correct answer is `Return`.

</details>

### 15. Which of the following statements is true?

1. No value is passed to the function during the function call
2. Value is passed to the function during the function call
3. Function with argument is declared and defined with a parameter list
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Function with argument is declared and defined with a parameter list

**Explanation:**\
Functions in C can be declared and defined with or without arguments. Key points:

* A function with arguments is declared and defined with a parameter list (e.g., `int add(int a, int b)`).
* Values can be passed to a function during the function call (e.g., `add(5, 10)`).
* A function can also be defined without arguments (e.g., `void printHello()`).

Therefore, the correct answer is that a function with arguments is declared and defined with a parameter list.

</details>

### 16. Which of the following data structures is used to implement recursive function calls?

1. Array
2. Stack
3. Linked List
4. Circular List

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Stack

**Explanation:**\
Recursive function calls in C are implemented using the **stack** data structure. Key points:

* Each recursive call pushes a new frame onto the stack, storing local variables and the return address.
* When the function returns, the frame is popped from the stack, and control is transferred back to the caller.

Therefore, the correct answer is `Stack`.

</details>

### 17. The following error can arise if there is an absence of an exit condition in a recursive function:

1. Compile Time Error
2. Run Time Error
3. Depends on the program
4. Logical Error

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Run Time Error

**Explanation:**\
If a recursive function lacks an exit condition (base case), it will keep calling itself indefinitely, leading to a **stack overflow**. This results in a **run-time error**, as the program crashes due to excessive memory usage.

Therefore, the correct answer is `Run Time Error`.

</details>

### 18. A loop is similar to which of the following?

1. Switch Case
2. Recursion
3. If-else
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Recursion

**Explanation:**\
A loop and recursion are both used to repeat a block of code. Key points:

* A loop repeats a block of code using iteration (e.g., `for`, `while`).
* Recursion repeats a block of code by calling the function itself.

Therefore, the correct answer is `Recursion`.

</details>

### 19. Which of the following statements is true?

1. Recursion is always better than iteration
2. Iteration is always better than recursion
3. Recursion uses more memory
4. Iteration uses more memory

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Recursion uses more memory

**Explanation:**\
Recursion and iteration have their own advantages and disadvantages:

* **Recursion**: Uses more memory due to the overhead of maintaining the call stack.
* **Iteration**: Generally uses less memory and is more efficient for simple tasks.

Therefore, the correct answer is that recursion uses more memory.

</details>

### 20. An array is:

1. A collection of similar types of elements
2. A collection of different types of elements
3. A collection of both types of elements
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) A collection of similar types of elements

**Explanation:**\
An array in C is a collection of elements of the **same data type**.&#x20;

For example:&#x20;

```c
int arr[5] = {1, 2, 3, 4, 5}; // Array of integers 
```

All elements in the array must be of the same type.

Therefore, the correct answer is that an array is a collection of similar types of elements.

</details>

### 21. Initialization of an array is done through:

1. int publication\[3]={1,2,3};
2. int publication\[3]={1,2,3};
3. int publication\[3]={1,2,3};
4. int publication\[3]={1,2,3}

<details>

<summary>Show me the answer</summary>

**Answer:** 1) int publication\[3]={1,2,3};

**Explanation:**\
Arrays in C can be initialized at the time of declaration.&#x20;

The correct syntax is:&#x20;

```c
int publication[3] = {1, 2, 3}; // Correct initialization 
```

The size of the array is optional if the number of elements is specified (e.g., `int publication[] = {1, 2, 3};`).

Therefore, the correct answer is `int publication[3]={1,2,3};`.

</details>

### 22. The index of the first element in an array is:

1. 0
2. 1
3. -1
4. 2

<details>

<summary>Show me the answer</summary>

**Answer:** 1) 0

**Explanation:**\
In C, arrays are zero-indexed, meaning the first element is at index `0`.&#x20;

For example:&#x20;

```c
int arr[3] = {10, 20, 30};
```

* `arr[0]` is `10`
* `arr[1]` is `20`
* `arr[2]` is `30`

Therefore, the correct answer is `0`.

</details>

### 23. Elements in an array are accessed:

1. Sequentially
2. Randomly
3. Both
4. None

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Randomly

**Explanation:**\
Elements in an array can be accessed **randomly** using their index.&#x20;

For example:&#x20;

```c
int arr[3] = {10, 20, 30}; 
printf("%d", arr[1]); // Directly access the second element (20) 
```

This is known as random access, as elements can be accessed in any order.

Therefore, the correct answer is `Randomly`.

</details>

### 24. Array elements are stored:

1. Randomly
2. Sequentially
3. Both
4. As Necessary

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Sequentially

**Explanation:**\
Elements in an array are stored in **contiguous memory locations**, meaning they are stored sequentially.&#x20;

For example:&#x20;

```c
int arr[3] = {10, 20, 30};
```

* `arr[0]` is stored at memory location `1000`
* `arr[1]` is stored at memory location `1004`
* `arr[2]` is stored at memory location `1008`

Therefore, the correct answer is `Sequentially`.

</details>

### 25. If we pass an array as an argument to a function, what actually gets passed?

1. First element of the array
2. Value of elements in the array
3. Address of elements
4. Base address of the array

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Base address of the array

**Explanation:**\
When an array is passed as an argument to a function, the **base address** (address of the first element) of the array is passed.&#x20;

For example:&#x20;

```c
#include <stdio.h>

// Function to print elements of an array
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]); // Print each element of the array
    }
    printf("\n"); // Move to the next line after printing all elements
}

int main() {
    int arr[3] = {1, 2, 3};   // Initialize an array with 3 elements
    printArray(arr, 3);       // Base address of arr is passed to the function

    return 0; // Indicate successful execution
}

```

In this case, the base address of `arr` is passed to the function `printArray`.

Therefore, the correct answer is `Base address of the array`.

</details>

### 26. In a two-dimensional array, the number of elements can be determined by:

1. Multiplying the number of rows and the number of rows
2. Multiplying the number of columns and the number of columns
3. Multiplying the number of rows and the number of columns
4. Adding the number of rows and the number of columns

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Multiplying the number of rows and the number of columns

**Explanation:**\
The total number of elements in a two-dimensional array is calculated by multiplying the number of rows by the number of columns.&#x20;

For example:&#x20;

```c
int arr[3][4]; // 3 rows and 4 columns 
```

Total elements = 3 \* 4 = 12.

Therefore, the correct answer is `Multiplying the number of rows and the number of columns`.

</details>

### 27. The row and column subscripts start at:

1. 0
2. 1
3. -1
4. 2

<details>

<summary>Show me the answer</summary>

**Answer:** 1) 0

**Explanation:**\
In C, arrays are zero-indexed, meaning both row and column subscripts start at `0`. For example:&#x20;

```c
int arr[2][3] = {{1, 2, 3}, {4, 5, 6}};
```

* `arr[0][0]` is `1`
* `arr[0][1]` is `2`
* `arr[1][2]` is `6`

Therefore, the correct answer is `0`.

</details>

### 28. Two loops that are required to traverse a two-dimensional array are named:

1. Inner and Nested Loop
2. Outer and Nested Loop
3. Inner and Outer Loop
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Inner and Outer Loop

**Explanation:**\
To traverse a two-dimensional array, two loops are required:

* **Outer loop**: Iterates over the rows.
* **Inner loop**: Iterates over the columns.

For example:&#x20;

```c
#include <stdio.h>

int main() {
    // Define a 2D array
    int arr[2][3] = {
        {1, 2, 3}, // Row 0
        {4, 5, 6}  // Row 1
    };

    // Outer loop iterates through the rows
    for (int i = 0; i < 2; i++) {
        // Inner loop iterates through the columns
        for (int j = 0; j < 3; j++) {
            printf("%d ", arr[i][j]); // Prints each element in the current row
        }
        printf("\n"); // Move to the next line after each row
    }

    return 0; // Indicate successful execution
}
```

**Output**:

```
1 2 3
4 5 6
```

Therefore, the correct answer is `Inner and Outer Loop`.

</details>

### 29. Copying a string to another is done by which function?

1. Strcpy()
2. Strcmp()
3. Strcat()
4. Strcopy()

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Strcpy()

**Explanation:**\
The `strcpy()` function is used to copy one string to another.&#x20;

For example:&#x20;

```c
#include <stdio.h>
#include <string.h>

int main() {
    char src[] = "Hello";      // Source string
    char dest[10];             // Destination array with sufficient space

    strcpy(dest, src);         // Copies the content of 'src' to 'dest'
    printf("%s\n", dest);      // Output: Hello

    return 0; // Indicate successful execution
}
```

}

Therefore, the correct answer is `Strcpy()`.

</details>

### 30. The gets() and puts() functions are defined in:

1. Conio.h
2. String.h
3. Stdio.h
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Stdio.h

**Explanation:**\
The `gets()` and `puts()` functions are part of the standard input/output library in C, which is included using `#include <stdio.h>`.&#x20;

Therefore, the correct answer is `Stdio.h`.

</details>

### 31. Which of the following is true in the case of pointer declaration?

1. Int p\*;
2. Int \*p;
3. Int _p_;
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Int \*p;

**Explanation:**\
The correct syntax for declaring a pointer in C is:&#x20;

{% code overflow="wrap" %}
```c
int *p; // p is a pointer to an integer.
```
{% endcode %}

The `*` symbol is placed before the variable name to indicate that it is a pointer.

Therefore, the correct answer is `Int *p;`.

</details>

### 32. A pointer variable can be:

1. Returned by a function
2. Passed to a function
3. Changed to a function
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Returned by a function

**Explanation:**\
A pointer variable can be returned by a function.&#x20;

For example:&#x20;

```c
int* createArray(int size) {
    int* arr = (int*)malloc(size * sizeof(int)); // Allocate memory for an array of integers
    return arr; // Returns a pointer to the allocated memory
}
```

#### Key Points:

Therefore, the correct answer is `Returned by a function`.

</details>

### 33. Which of the following is true?

1. To pass large structures so that a complete copy of the structure can be avoided
2. Pointers enable complex data structures like linked lists and binary trees
3. Pointers allow different functions to share and modify their local variables
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
Pointers in C are powerful and versatile. They are used for:

* Avoiding the overhead of copying large structures.
* Implementing complex data structures like linked lists and binary trees.
* Allowing functions to share and modify local variables.

Therefore, the correct answer is `All of the Above`.

</details>

### 34. A wild pointer is:

1. Which is wild in nature
2. Which has no value
3. Which is not initialized
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Which is not initialized

**Explanation:**\
A wild pointer is a pointer that has not been initialized to point to a valid memory location. For example:&#x20;

```c
int *p; // Wild pointer (not initialized) 
```

Using a wild pointer can lead to undefined behavior.

Therefore, the correct answer is `Which is not initialized`.

</details>

### 35. What is a pointer?

1. A keyword used to create variables
2. A variable that stores the address of an instruction
3. A variable that stores the address of another variable
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) A variable that stores the address of another variable

**Explanation:**\
A pointer is a variable that stores the memory address of another variable.&#x20;

For example:&#x20;

```c
int x = 10; 
int *p = &x; // p stores the address of x
```

Therefore, the correct answer is `A variable that stores the address of another variable`.

</details>

### 36. The operator used to get the value at the address stored in a pointer variable is:

1. \*
2. \*\*
3. &
4. ->

<details>

<summary>Show me the answer</summary>

**Answer:** 1) \*

**Explanation:**\
The `*` operator is used to dereference a pointer, meaning it retrieves the value stored at the memory address pointed to by the pointer.&#x20;

For example:&#x20;

```c
#include <stdio.h>

int main() {
    int x = 10;          // Declare an integer variable x and initialize it with 10
    int *p = &x;         // p stores the address of x (pointer to x)

    printf("%d\n", *p);  // Output: 10 (value at the address stored in p)

    return 0;            // Indicate successful execution
}

```

Therefore, the correct answer is `*`.

</details>

### 37. A void pointer points to:

1. Int
2. Float
3. Double
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
A void pointer (`void*`) is a generic pointer that can point to any data type.&#x20;

For example:&#x20;

```c
#include <stdio.h>

int main() {
    int x = 10;          // Declare an integer variable
    float y = 3.14;      // Declare a float variable
    void *p;             // Declare a void pointer (can point to any data type)

    p = &x;              // p points to the address of x
    printf("Value of x: %d\n", *(int *)p); // Output: 10 (cast void pointer to int pointer)

    p = &y;              // p now points to the address of y
    printf("Value of y: %.2f\n", *(float *)p); // Output: 3.14 (cast void pointer to float pointer)

    return 0; // Indicate successful execution
}

```

Therefore, the correct answer is `All of the Above`.

</details>

### 38. Which of the following are types of pointers?

1. Null, Void, and Wild
2. Near, Far, and Huge
3. Complex and Dangling
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
Pointers in C can be categorized into various types, including:

* **Null pointer**: Points to nothing (`NULL`).
* **Void pointer**: Generic pointer that can point to any data type.
* **Wild pointer**: Uninitialized pointer.
* **Near, Far, and Huge pointers**: Used in segmented memory architectures.
* **Complex and Dangling pointers**: Pointers that point to invalid memory locations.

Therefore, the correct answer is `All of the Above`.

</details>

### 39. Which of the following are a few operations that are allowed to perform on pointers in C?

1. Increment/Decrement and Addition of Integer
2. Subtracting two pointers and comparison of pointers
3. Both A and B
4. Count of Integer

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Both A and B

**Explanation:**\
The following operations are allowed on pointers in C:

* **Increment/Decrement**: Moves the pointer to the next/previous memory location.
* **Addition of Integer**: Adds an integer to the pointer to move it forward.
* **Subtracting two pointers**: Calculates the distance between two pointers.
* **Comparison of pointers**: Compares two pointers to check their relative positions.

Therefore, the correct answer is `Both A and B`.

</details>

### 40. User-defined data types can be derived by:

1. Struct
2. Enum
3. Typedef
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
User-defined data types in C can be created using:

* **Struct**: Defines a structure with multiple members.
* **Enum**: Defines a set of named integer constants.
* **Typedef**: Creates an alias for an existing data type.

Therefore, the correct answer is `All of the Above`.

</details>

### 41. Which of the following can be a structure member?

1. Function
2. Array
3. Another Structure
4. Both B & C

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Both B & C

**Explanation:**\
A structure in C can have members of various types, including:

* **Arrays**: A structure can contain arrays.
* **Another Structure**: A structure can contain another structure as a member.

However, a structure cannot directly contain a function as a member. Functions can be accessed through function pointers.

Therefore, the correct answer is `Both B & C`.

</details>

### 42. The size of a union is determined by the size of the:

1. Biggest member in the union
2. First member in the union
3. Last member in the union
4. Sum of the sizes of all members

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Biggest member in the union

**Explanation:**\
A union in C allocates memory equal to the size of its largest member.&#x20;

For example:&#x20;

```c
union Data { 
    int x; 
    char y; 
    double z; 
}; 
```

The size of the union `Data` is equal to the size of `double` (the largest member).

Therefore, the correct answer is `Biggest member in the union`.

</details>

### 43. To create a structure, which keyword is used?

1. Structure
2. Structs
3. Struct
4. Str

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Struct

**Explanation:**\
The `struct` keyword is used to define a structure in C.&#x20;

For example:&#x20;

```c
struct Student { 
    int id; 
    char name[50]; 
};
```

Therefore, the correct answer is `Struct`.

</details>

### 44. We can use a structure if the number of variables is:

1. Fixed
2. Not Fixed
3. Both
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Not Fixed

**Explanation:**\
Structures in C are used when the number of variables is **not fixed**. They allow grouping of different data types under a single name.&#x20;

For example:&#x20;

```c
struct Student { 
    int id; 
    char name[50]; 
    float marks; 
};
```

Therefore, the correct answer is `Not Fixed`.

</details>

### 45. Which of the following is correct?

1. A collection of variables of different data types in the same memory location
2. Allows data members which are mutually exclusive to share the same memory
3. Can define with many members, only one member can contain a value at a given point in time
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
A union in C is a special data type that allows storing different data types in the same memory location. Key points:

* Only one member can contain a value at a given time.
* The size of the union is equal to the size of its largest member.
* Members share the same memory location.

Therefore, the correct answer is `All of the Above`.

</details>

### 46. In the case of a union, which is correct?

1. Shared by individual members
2. Several members can be initialized at once
3. Each member is assigned a unique storage area of location
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Shared by individual members

**Explanation:**\
A union in C allows its members to share the same memory location. Only one member can hold a value at a given time.&#x20;

For example:&#x20;

```c
#include <stdio.h>

union Data {
    int x;   // Integer member
    char y;  // Character member
};

int main() {
    union Data d;        // Declare a union variable

    d.x = 10;            // Assign value to the integer member
    printf("Value of d.x: %d\n", d.x); // Output: 10

    d.y = 'A';           // Assign value to the character member (overwrites d.x)
    printf("Value of d.y: %c\n", d.y); // Output: A
    printf("Value of d.x: %d\n", d.x); // Output: Undefined (x is overwritten)

    return 0; // Indicate successful execution
}

```

Therefore, the correct answer is `Shared by individual members`.

</details>

### 47. Which of the following is true about call by value?

1. The value of the actual parameters is copied into the formal parameters
2. Cannot modify the value of the actual parameter by the formal parameter
3. Can modify the value of the actual parameter by the formal parameter
4. Both A & B

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Both A & B

**Explanation:**\
In **call by value**, the value of the actual parameter is copied into the formal parameter. Key points:

* Changes made to the formal parameter do not affect the actual parameter.
* The actual parameter remains unchanged.

For example:&#x20;

```c
#include <stdio.h>

void modify(int x) {
    x = x + 10;  // Modifies the value of x (local to the function)
    // Changes here do not affect the original variable
}

int main() {
    int a = 5;            // Declare and initialize an integer variable
    modify(a);            // Pass 'a' by value to the function
    printf("Value of a: %d\n", a); // Output: 5 (unchanged)

    return 0; // Indicate successful execution
}

```

Therefore, the correct answer is `Both A & B`.

</details>

### 48. Which of the following is true about call by reference?

1. The value of the actual parameters is copied into the formal parameters
2. Cannot modify the value of the actual parameter by the formal parameter
3. The address of the variable is passed into the function call as the actual parameter
4. Both A & B

<details>

<summary>Show me the answer</summary>

**Answer:** 3) The address of the variable is passed into the function call as the actual parameter

**Explanation:**\
In **call by reference**, the address of the actual parameter is passed to the function. Key points:

* Changes made to the formal parameter affect the actual parameter.
* The actual parameter is modified.

For example:&#x20;

```c
#include <stdio.h>

void modify(int *x) {
    *x = *x + 10; // Dereferences the pointer and modifies the actual value
}

int main() {
    int a = 5;           // Declare and initialize an integer variable
    modify(&a);          // Pass the address of 'a' to the function
    printf("Value of a: %d\n", a); // Output: 15 (modified)

    return 0; // Indicate successful execution
}

```

Therefore, the correct answer is `The address of the variable is passed into the function call as the actual parameter`.

</details>

### 49. Which of the following is used for invoking a function?

1. Call by Reference
2. Call by Value
3. Call by Functions
4. Both A and B

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Both A and B

**Explanation:**\
Functions in C can be invoked using:

* **Call by Value**: Passes the value of the actual parameter.
* **Call by Reference**: Passes the address of the actual parameter.

Therefore, the correct answer is `Both A and B`.

</details>

### 50. Which of the following are two ways to access the members of a structure with the help of a structure pointer?

1. (\*) asterisk or indirection operator and (.) dot operator
2. (-) asterisk or indirection operator and (.) dot operator
3. (+) asterisk or indirection operator and (.) dot operator
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) (\*) asterisk or indirection operator and (.) dot operator

**Explanation:**\
To access the members of a structure using a structure pointer, the following operators are used:

* **Indirection operator (\*)**: Dereferences the pointer.
* **Dot operator (.)**: Accesses the member of the structure.

For example:&#x20;

```c
#include <stdio.h>
#include <string.h>

// Define the Student structure
struct Student {
    int id;           // Student ID
    char name[50];    // Student Name
};

int main() {
    struct Student s1;           // Declare a structure variable
    struct Student *ptr = &s1;   // Declare a pointer to the structure and assign the address of s1

    // Assign values using the pointer and different notations
    (*ptr).id = 101;             // Using dereferencing (*) and dot (.) operator
    strcpy((*ptr).name, "John"); // Assign name using dereferencing

    // Assign values using the arrow (->) operator
    ptr->id = 102;               // Arrow operator directly accesses members
    strcpy(ptr->name, "Doe");    // Update name using the arrow operator

    // Print the values
    printf("ID: %d\n", s1.id);         // Output: 102
    printf("Name: %s\n", s1.name);     // Output: Doe

    return 0; // Indicate successful execution
}

```

Therefore, the correct answer is `(*) asterisk or indirection operator and (.) dot operator`.

</details>

### 51. Which of the following statements is correct?

1. Structure elements can be initialized at the time of declaration
2. Structure members cannot be initialized at the time of declaration
3. Only integer members of a structure can be initialized at the time of declaration
4. None of the Above

<details>

<summary>Show me the answer</summary>

&#x20;**Answer:** 1) Structure elements can be initialized at the time of declaration

**Explanation:**\
Structure elements can be initialized at the time of declaration.&#x20;

For example:&#x20;

```c
struct Student { 
    int id; char name[50]; 
}; 
struct Student s1 = {101, "John"}; // Initialization at declaration
```

Therefore, the correct answer is `Structure elements can be initialized at the time of declaration`.

</details>

### 52. User-defined data types are also called:

1. Aggregate
2. Derived
3. Secondary
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
User-defined data types in C are also referred to as:

* **Aggregate**: Combines multiple data types (e.g., structures).
* **Derived**: Derived from existing data types (e.g., typedef).
* **Secondary**: Created by the user, not built into the language.

Therefore, the correct answer is `All of the Above`.

</details>

### 53. Functions used to read or write a file in Text Mode:

1. fprintf(), fscanf()
2. fread(), fwrite()
3. fprintf(), fscanf()
4. read(), write()

<details>

<summary>Show me the answer</summary>

**Answer:** 1) fprintf(), fscanf()

**Explanation:**\
The functions `fprintf()` and `fscanf()` are used to read or write data in text mode.&#x20;

For example:&#x20;

```c
FILE *fp = fopen("file.txt", "w"); 
fprintf(fp, "Hello World"); // Write to file fclose(fp);
FILE *fp = fopen("file.txt", "r"); 
char str[100]; 
fscanf(fp, "%s", str); // Read from file fclose(fp);
```

Therefore, the correct answer is `fprintf(), fscanf()`.

</details>

### 54. Correct syntax for opening a file:

1. FILE \*fopen(const char \*filename, const char \*mode);
2. FILE \*fopen(const char filename, const char mode);
3. FILE \*open(const \*filename, const char \*mode);
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) FILE \*fopen(const char \*filename, const char \*mode);

**Explanation:**\
The correct syntax for opening a file in C is:&#x20;

```c
FILE *fopen(const char *filename, const char *mode);
```

&#x20;For example:&#x20;

```c
FILE *fp = fopen("file.txt", "r"); // Opens file.txt in read mode
```

Therefore, the correct answer is `FILE *fopen(const char *filename, const char *mode);`.

</details>

### 55. What is the function of the mode ‘w+’?

1. Write and Open for both reading and writing
2. Open for both reading and writing
3. Open for writing
4. Open for both reading and appending in binary mode

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Open for both reading and writing

**Explanation:**\
The mode `w+` opens a file for both reading and writing. If the file exists, its contents are truncated. If the file does not exist, it is created.

Therefore, the correct answer is `Open for both reading and writing`.

</details>

### 56. What is the function of the mode ‘a+’?

1. Write and Open for both reading and writing
2. Open for both reading and writing
3. Open for reading and appending
4. Open for both reading and appending in binary mode

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Open for reading and appending

**Explanation:**\
The mode `a+` opens a file for both reading and appending. If the file exists, new data is appended to the end of the file. If the file does not exist, it is created.

Therefore, the correct answer is `Open for reading and appending`.

</details>

### 57. If the mode includes 'b' after the initial letter, what does it indicate?

1. Text file
2. Binary file
3. Big file
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Binary file

**Explanation:**\
The `b` in the mode (e.g., `rb`, `wb`, `ab`) indicates that the file is opened in **binary mode**. Binary mode is used for non-text files, such as images or executable files.

Therefore, the correct answer is `Binary file`.

</details>

### 58. What does tmpfile() return when it could not create the file?

1. Stream
2. NULL
3. Both Stream and NULL
4. No result

<details>

<summary>Show me the answer</summary>

**Answer:** 2) NULL

**Explanation:**\
The `tmpfile()` function creates a temporary file and returns a pointer to the file stream. If the file cannot be created, it returns `NULL`.

Therefore, the correct answer is `NULL`.

</details>

### 59. fwrite() can be used only with files that are opened in binary mode:

1. True
2. False
3. Depends on the Situation
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) True

**Explanation:**\
The `fwrite()` function is used to write data to a file in binary mode. It is typically used with files opened in binary mode (e.g., `wb`, `ab`).

Therefore, the correct answer is `True`.

</details>

### 60. What are the functions that help to randomly access the file?

1. fseek()
2. ftell()
3. rewind()
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
The following functions are used for random access in files:

* **fseek()**: Moves the file pointer to a specific location.
* **ftell()**: Returns the current position of the file pointer.
* **rewind()**: Moves the file pointer to the beginning of the file.

Therefore, the correct answer is `All of the Above`.

</details>

### 61. Data stored in a file can be accessed in:

1. Sequential and Random
2. Semi-Sequential and Random
3. Random only
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Sequential and Random

**Explanation:**\
Data in a file can be accessed in two ways:

* **Sequential access**: Data is read or written in a linear manner.
* **Random access**: Data can be accessed at any position using functions like `fseek()` and `ftell()`.

Therefore, the correct answer is `Sequential and Random`.

</details>

### 62. The causes of function overloading are:

1. Type Conversion
2. Function with Default Arguments
3. Function with pass by reference
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
Function overloading in C++ can occur due to:

* **Type Conversion**: Different parameter types.
* **Default Arguments**: Functions with optional parameters.
* **Pass by Reference**: Functions with reference parameters.

Therefore, the correct answer is `All of the Above`.

</details>

### 63. Which of the following is true?

1. Existing operators can only be overloaded, but new operators cannot be overloaded
2. The overloaded operator contains at least one operand of the user-defined data type
3. We cannot use a friend function to overload certain operators
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) The overloaded operator contains at least one operand of the user-defined data type

**Explanation:**\
Operator overloading in C++ requires at least one operand to be of a user-defined data type. For example:&#x20;

```c
#include <iostream>
using namespace std;

class Complex {
    int real, imag; // Private data members to store real and imaginary parts

public:
    // Constructor to initialize real and imaginary parts
    Complex(int r = 0, int i = 0) : real(r), imag(i) {}

    // Overloading the + operator
    Complex operator+(Complex c) {
        Complex temp; // Temporary Complex object to store the result
        temp.real = real + c.real; // Add the real parts
        temp.imag = imag + c.imag; // Add the imaginary parts
        return temp; // Return the result
    }

    // Function to display the Complex number
    void display() const {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(3, 4), c2(1, 2); // Create two Complex objects
    Complex c3 = c1 + c2;       // Add two Complex objects using overloaded +
    
    cout << "Result: ";
    c3.display();               // Display the result

    return 0; // Indicate successful execution
}

```

Therefore, the correct answer is `The overloaded operator contains at least one operand of the user-defined data type`.

</details>

### 64. Which of the following operators cannot be overloaded?

1. Scope operator (::) and Sizeof
2. Member selector(.) and member pointer selector(\*)
3. Ternary operator(?:)
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
The following operators cannot be overloaded in C++:

* Scope operator (`::`)
* Sizeof operator (`sizeof`)
* Member selector (`.`)
* Member pointer selector (`.*`)
* Ternary operator (`?:`)

Therefore, the correct answer is `All of the Above`.

</details>

### 65. Which of the following can be overloaded?

1. Methods
2. Constructors
3. Indexed Properties
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
In C++, the following can be overloaded:

* **Methods**: Functions with the same name but different parameters.
* **Constructors**: Multiple constructors with different parameters.
* **Indexed Properties**: Overloaded subscript operator (`[]`).

Therefore, the correct answer is `All of the Above`.

</details>

### 66. The function whose definition can be substituted at a place where its function call is made is:

1. Inline Function
2. Offline Function
3. Friend Function
4. Normal Function

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Inline Function

**Explanation:**\
An **inline function** is a function whose definition is substituted at the place where it is called. This avoids the overhead of a function call.&#x20;

For example:&#x20;

```c
#include <iostream>
using namespace std;

// Inline function to add two integers
inline int add(int a, int b) {
    return a + b; // Returns the sum of a and b
}

int main() {
    int result = add(5, 10); // The code of add() is substituted here
    cout << "Result: " << result << endl; // Output: Result: 15

    return 0; // Indicates successful execution
}

```

Therefore, the correct answer is `Inline Function`.

</details>

### 67. How many ways are there to invoke a function in C++?

1. 1
2. 3
3. 2
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 2

**Explanation:**\
In C++, a function can be invoked in two ways:

* **Call by Value**: Passes the value of the actual parameter.
* **Call by Reference**: Passes the address of the actual parameter.

Therefore, the correct answer is `2`.

</details>

### 68. At what time does the inline function get expanded?

1. Compile time
2. Run time
3. At the end
4. Depends on the program

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Compile time

**Explanation:**\
An inline function is expanded at **compile time**. The compiler replaces the function call with the actual code of the function.

Therefore, the correct answer is `Compile time`.

</details>

### 69. In a Function Prototype, where should default parameters appear?

1. Leftmost side
2. Rightmost side
3. In the middle
4. Anywhere

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Rightmost side

**Explanation:**\
Default parameters in a function prototype must appear on the **rightmost side**.&#x20;

For example:&#x20;

```c
#include <iostream>
using namespace std;

// Function declaration with default parameters for 'b' and 'c'
void print(int a, int b = 10, int c = 20);

int main() {
    print(5);           // Output: 5 10 20 (default values for 'b' and 'c')
    print(5, 15);       // Output: 5 15 20 (overrides 'b', default for 'c')
    print(5, 15, 25);   // Output: 5 15 25 (overrides all default values)

    return 0; // Indicates successful execution
}

// Function definition
void print(int a, int b, int c) {
    cout << a << " " << b << " " << c << endl;
}
```

Therefore, the correct answer is `Rightmost side`.

</details>

### 70. Which one of the following is correct?

1. Only one parameter of a function can be a default parameter
2. A minimum of one parameter of a function must be a default parameter
3. All the parameters of a function can be default parameters
4. No parameter of a function can be default

<details>

<summary>Show me the answer</summary>

**Answer:** 3) All the parameters of a function can be default parameters

**Explanation:**\
In C++, all parameters of a function can have default values.&#x20;

For example:&#x20;

```c
#include <iostream>
using namespace std;

void print(int a = 1, int b = 2, int c = 3) {
    cout << a << " " << b << " " << c; // Prints the values of a, b, and c
}

int main() {
    print();          // Output: 1 2 3 (uses default values)
    print(10);        // Output: 10 2 3 (overrides only 'a', uses default for 'b' and 'c')
    print(10, 20);    // Output: 10 20 3 (overrides 'a' and 'b', uses default for 'c')
    print(10, 20, 30); // Output: 10 20 30 (overrides all default values)

    return 0; // Indicates successful execution
}

```

Therefore, the correct answer is `All the parameters of a function can be default parameters`.

</details>

### 71. Execution of the program starts from:

1. Main
2. Void
3. User Defined
4. Loop

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Main

**Explanation:**\
In C++, the execution of a program always starts from the `main()` function.&#x20;

For example:&#x20;

```c
int main() { 
    cout << "Hello, World!"; 
    return 0; 
}
```

Therefore, the correct answer is `Main`.

</details>

### 72. In the program, if user and default values are given, the program will take:

1. Default Value
2. User Value
3. NULL Value
4. Own Value

<details>

<summary>Show me the answer</summary>

**Answer:** 2) User Value

**Explanation:**\
If both user and default values are provided, the program will use the **user value**.&#x20;

For example:&#x20;

```c
#include <iostream>
using namespace std;

void print(int a = 10) {
    cout << a; // Prints the value of 'a'
}

int main() {
    print(20); // Output: 20 (user value overrides default value)
    return 0;  // Return 0 to indicate successful execution
}

```

Therefore, the correct answer is `User Value`.

</details>

### 73. The default return type of a function is:

1. INT
2. FLOAT
3. CHAR
4. VOID

<details>

<summary>Show me the answer</summary>

**Answer:** 4) VOID

**Explanation:**\
If no return type is specified for a function, the default return type is `int` in C. However, in C++, the return type must always be explicitly specified. Therefore, the correct answer is `VOID`.

</details>

### 74. Which of the following is correct?

1. An object is a runtime entity and created at runtime
2. An object is an entity that has state and behavior
3. An object is an instance of a class
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**\
An object in C++ is:

* A runtime entity created at runtime.
* An entity that has state (data members) and behavior (member functions).
* An instance of a class.

Therefore, the correct answer is `All of the Above`.

</details>

### 75. Which of the following entities can be connected by the dot operator?

1. A class object and a member of that class
2. A class object and a class
3. A class member and a class object
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) A class object and a member of that class

**Explanation:**\
The dot operator (`.`) is used to access members of a class through an object.&#x20;

For example:&#x20;

```c
class Student { 
    public: int id; 
}; 
Student s1; 
s1.id = 101; // Dot operator connects object and member
```

Therefore, the correct answer is `A class object and a member of that class`.

</details>

### 76. Which of the following is also known as an instance of a class?

1. Member Functions
2. Class
3. Object
4. Member Variables

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Object

**Explanation:**\
An **object** is an instance of a class. It represents a specific realization of the class, with its own state (data members) and behavior (member functions). For example: class Student { public: int id; }; Student s1; // s1 is an object (instance of the Student class)

Therefore, the correct answer is `Object`.

</details>

### 77. How many objects can be created from an abstract class?

1. 0
2. 1
3. 2
4. 3

<details>

<summary>Show me the answer</summary>

**Answer:** 1) 0

**Explanation:**\
An **abstract class** in C++ cannot be instantiated directly. It is meant to be a base class for other classes. Therefore, no objects can be created from an abstract class.

Therefore, the correct answer is `0`.

</details>

### 78. We can overload:

1. Operator
2. Function
3. Both A & B
4. Object

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Both A & B

**Explanation:**\
In C++, both **operators** and **functions** can be overloaded. For example:

* **Function overloading**: Multiple functions with the same name but different parameters.
* **Operator overloading**: Defining custom behavior for operators like `+`, `-`, etc.

Therefore, the correct answer is `Both A & B`.

</details>

### 79. How many types of access specifiers are there?

1. 2
2. 3
3. 4
4. 5

<details>

<summary>Show me the answer</summary>

**Answer:** 2) 3

**Explanation:**\
In C++, there are **three access specifiers**:

* **Public**: Members are accessible from outside the class.
* **Private**: Members are accessible only within the class.
* **Protected**: Members are accessible within the class and derived classes.

Therefore, the correct answer is `3`.

</details>

### 80. In a single class, which of the following can be used together?

1. Private Only
2. Public Only
3. Protected Only
4. All

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All

**Explanation:**\
In a single class, all three access specifiers (`private`, `public`, and `protected`) can be used together. For example: class Student { private: int id; public: string name; protected: float marks; };

Therefore, the correct answer is `All`.

</details>

### 81. Which of the following can restrict class members from being inherited?

1. Private Only
2. Public Only
3. Protected Only
4. All

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Private Only

**Explanation:**\
**Private members** of a class cannot be inherited by derived classes. They are accessible only within the class itself.

Therefore, the correct answer is `Private Only`.

</details>

### 82. Which access specifier is used for data members of a class?

1. Private
2. Default
3. Protected
4. Public

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Private

**Explanation:**\
Data members of a class are typically declared as **private** to enforce encapsulation and prevent direct access from outside the class.

Therefore, the correct answer is `Private`.

</details>

### 83. Which access specifier should be used for member functions of a class?

1. Private
2. Default
3. Protected
4. Public

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Public

**Explanation:**\
Member functions that need to be accessed from outside the class should be declared as **public**. For example: class Student { public: void display() { cout << "Hello, World!"; } };

Therefore, the correct answer is `Public`.

</details>

### 84. In which access specifier can all the parent class members be inherited and accessed from outside the class?

1. Private
2. Default
3. Protected
4. Public

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Public

**Explanation:**\
When a class is inherited using the **public** access specifier, all public members of the parent class remain public in the derived class and can be accessed from outside.

Therefore, the correct answer is `Public`.

</details>

### 85. Which access specifier should be used in a class where the instances can’t be created?

1. Private default constructor
2. All private constructors
3. Public
4. Protected

<details>

<summary>Show me the answer</summary>

**Answer:** 2) All private constructors

**Explanation:**\
If all constructors of a class are declared as **private**, instances of the class cannot be created from outside the class. This is often used in singleton design patterns.

Therefore, the correct answer is `All private constructors`.

</details>

### hich of the following is the scope resolution operator?

1. ::
2. :::
3. &
4. &&

<details>

<summary>Show me the answer</summary>

**Answer:** 1) ::

**Explanation:**

* The **scope resolution operator** in C++ is `::`.
* It is used to:
  * Access global variables when a local variable with the same name exists.
  * Define member functions outside the class.
  * Access static members of a class.
  * Access members of a namespace.
* Therefore, the correct answer is `::`.

</details>

### 88. Which of the following is the address operator?

1. @
2. &
3. \#
4. %

<details>

<summary>Show me the answer</summary>

**Answer:** 2) &

**Explanation:**

* The **address operator** in C++ is `&`.
* It is used to:
  * Get the memory address of a variable.
  * Pass arguments by reference in functions.
*   For example:

    ```cpp
    int x = 10;
    int* ptr = &x; // ptr stores the address of x
    ```
* Therefore, the correct answer is `&`.

</details>

### 89. To become a pure object-oriented programming language, which features must be supported?

1. Encapsulation
2. Inheritance
3. Polymorphism
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* A pure object-oriented programming language must support:
  * **Encapsulation**: Bundling data and methods that operate on the data.
  * **Inheritance**: Deriving a class from another class to reuse code.
  * **Polymorphism**: Allowing objects of different classes to be treated as objects of a common superclass.
* Therefore, the correct answer is `All of the Above`.

</details>

### 90. The scope resolution operator is used to:

1. Overload a function in inheritance
2. Override a function in inheritance
3. Both of the Above
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Both of the Above

**Explanation:**

* The **scope resolution operator** (`::`) is used to:
  * **Overload a function**: Define a function outside the class.
  * **Override a function**: Access the base class version of an overridden function in derived classes.
* Therefore, the correct answer is `Both of the Above`.

</details>

### 91. The scope resolution operator is used for:

1. To specify a particular class
2. Provides a conceptual framework
3. Addition
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) To specify a particular class

**Explanation:**

* The **scope resolution operator** (`::`) is primarily used to:
  * Specify a particular class or namespace when accessing its members.
  * Resolve ambiguity when multiple classes or namespaces have members with the same name.
* Therefore, the correct answer is `To specify a particular class`.

</details>

### 92. Which class allows declaring only one object of it?

1. Abstract Class
2. Singleton class
3. Friend class
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Singleton class

**Explanation:**

* A **Singleton class** is designed to allow only one instance of itself to be created.
* This is achieved by:
  * Making the constructor private.
  * Providing a static method to access the single instance.
* Therefore, the correct answer is `Singleton class`.

</details>

### 93. Which of the following is a member of a class?

1. Static function
2. Constant function
3. Virtual function
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the following are members of a class:
  * **Static function**: A function that belongs to the class rather than an instance.
  * **Constant function**: A function that does not modify the state of the object.
  * **Virtual function**: A function that can be overridden in derived classes.
* Therefore, the correct answer is `All of the Above`.

</details>

### 94. The other name used for functions inside a class is:

1. Own Functions
2. Member Functions
3. Inside Functions
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Member Functions

**Explanation:**

* Functions defined inside a class are called **member functions**.
* They operate on the data members of the class and can be public, private, or protected.
* Therefore, the correct answer is `Member Functions`.

</details>

### 95. Generally, how many types of member functions are there in C++?

1. 2
2. 3
3. 4
4. 5

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 4

**Explanation:**

* The main types of member functions in C++ are:
  1. **Simple member functions**: Regular functions defined inside a class.
  2. **Static member functions**: Functions that belong to the class rather than an instance.
  3. **Const member functions**: Functions that do not modify the state of the object.
  4. **Virtual member functions**: Functions that can be overridden in derived classes.
* Therefore, the correct answer is `4`.

</details>

### 96. In the main function, how can a static member function be called?

1. Using the Dot Operator
2. Using the Arrow Operator
3. Using the Dot or Arrow Operator
4. Using the Dot, Arrow, or using the 'scope resolution operator with class name'

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Using the Dot, Arrow, or using the 'scope resolution operator with class name'

**Explanation:**

* A **static member function** can be called in the following ways:
  * Using the **dot operator** (`.`) with an object.
  * Using the **arrow operator** (`->`) with a pointer to an object.
  * Using the **scope resolution operator** (`::`) with the class name (no object required).
*   For example:

    ```cpp
    class MyClass {
    public:
        static void myFunction() {
            cout << "Static function called!";
        }
    };

    int main() {
        MyClass::myFunction(); // Using scope resolution operator
        MyClass obj;
        obj.myFunction();      // Using dot operator
        MyClass* ptr = &obj;
        ptr->myFunction();     // Using arrow operator
        return 0;
    }
    ```
* Therefore, the correct answer is `Using the Dot, Arrow, or using the 'scope resolution operator with class name'`.

</details>

### 97. Which of the following is correct?

1. If no constructor is explicitly declared, the compiler automatically creates a default constructor with no data members (variables) or initialization
2. A constructor is used in classes to initialize data members of the class to avoid errors/segmentation faults.
3. A copy constructor is a constructor to initialize an object with the values of another object
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the statements are correct:
  * If no constructor is explicitly declared, the compiler provides a **default constructor**.
  * A **constructor** is used to initialize data members of a class.
  * A **copy constructor** initializes an object using another object of the same class.
* Therefore, the correct answer is `All of the Above`.

</details>

### 98. A constructor is used to:

1. Modify the data whenever required
2. Destroy an object
3. Initialize the data members of an object when it is created
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Initialize the data members of an object when it is created

**Explanation:**

* The primary purpose of a **constructor** is to initialize the data members of an object when it is created.
* It is automatically called when an object is instantiated.
* Therefore, the correct answer is `Initialize the data members of an object when it is created`.

</details>

### 99. What will happen if we forget to define a constructor inside a class?

1. Error Occurs
2. Segmentation faults
3. The compiler provides a default constructor
4. Destructor called

<details>

<summary>Show me the answer</summary>

**Answer:** 3) The compiler provides a default constructor

**Explanation:**

* If no constructor is defined in a class, the **compiler automatically provides a default constructor**.
* This default constructor does not initialize data members but allows object creation.
* Therefore, the correct answer is `The compiler provides a default constructor`.

</details>

### 100. How many types of constructors exist in C++?

1. 2
2. 3
3. 4
4. 5

<details>

<summary>Show me the answer</summary>

**Answer:** 2) 3

**Explanation:**

* The main types of constructors in C++ are:
  1. **Default Constructor**: No parameters.
  2. **Parameterized Constructor**: Takes parameters to initialize data members.
  3. **Copy Constructor**: Initializes an object using another object of the same class.
* Therefore, the correct answer is `3`.

</details>

### 101. Why do we use a destructor in C++?

1. To destroy an object when the lifetime of the object ends
2. To create an object when the object needs to be created
3. To initialize the data members of an object when it is created
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) To destroy an object when the lifetime of the object ends

**Explanation:**

* A **destructor** is used to:
  * Release resources (e.g., memory, file handles) allocated to an object.
  * Perform cleanup tasks when the object goes out of scope or is explicitly deleted.
* Therefore, the correct answer is `To destroy an object when the lifetime of the object ends`.

</details>

### 102. A destructor is preceded by:

1. /
2. |
3. ?
4. \~

<details>

<summary>Show me the answer</summary>

**Answer:** 4) \~

**Explanation:**

* A **destructor** is preceded by the **tilde symbol (`~`)**.
*   For example:

    ```cpp
    class MyClass {
    public:
        ~MyClass() {
            cout << "Destructor called!";
        }
    };
    ```
* Therefore, the correct answer is `~`.

</details>

### 103. Which of the following statements is correct?

1. A constructor has the same name as that of the class
2. A destructor has the same name as that of the class with a tilde symbol at the beginning.
3. A constructor is a member function of the class
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the statements are correct:
  * A **constructor** has the same name as the class.
  * A **destructor** has the same name as the class but is preceded by a tilde (`~`).
  * Both constructors and destructors are **member functions** of the class.
* Therefore, the correct answer is `All of the Above`.

</details>

### 104. When an object goes out of scope, which of the following gets called?

1. Constructor
2. Destructor
3. Main
4. Void

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Destructor

**Explanation:**

* When an object goes out of scope, its **destructor** is automatically called to clean up resources.
* Therefore, the correct answer is `Destructor`.

</details>

### 105. Which of the following can be declared as virtual?

1. Destructor
2. Constructor
3. Data Members
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Destructor

**Explanation:**

* A **destructor** can be declared as **virtual** to ensure proper cleanup of derived class objects when deleted through a base class pointer.
* Constructors and data members **cannot** be declared as virtual.
* Therefore, the correct answer is `Destructor`.

</details>

### 106. The constructor that either has no parameters, or if it has parameters, all the parameters have default values:

1. Default
2. Copy
3. Parameterized
4. Friend function

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Default

**Explanation:**

* A **default constructor** is either:
  * A constructor with no parameters.
  * A constructor where all parameters have default values.
* Therefore, the correct answer is `Default`.

</details>

### 107. Per class, how many default constructors are possible?

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 1) 1

**Explanation:**

* Only **one default constructor** can exist per class.
* If multiple constructors are defined, only one can be the default constructor.
* Therefore, the correct answer is `1`.

</details>

### 108. A destructor takes how many arguments?

1. 0
2. 1
3. 2
4. 3

<details>

<summary>Show me the answer</summary>

**Answer:** 1) 0

**Explanation:**

* A **destructor** does not take any arguments. It is called automatically when an object goes out of scope.
* Therefore, the correct answer is `0`.

</details>

### 109. How many times is a constructor called in the lifetime of an object?

1. Only once
2. 3
3. 2
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Only once

**Explanation:**

* A **constructor** is called **only once** when an object is created.
* Therefore, the correct answer is `Only once`.

</details>

### 110. The area where the local variables are stored is called:

1. Heap
2. Stack
3. Free Memory
4. Cache

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Stack

**Explanation:**

* Local variables are stored in the **stack**, which is a memory area used for function calls and local data.
* Therefore, the correct answer is `Stack`.

</details>

### 111. What is the return type of malloc()?

1. Char\*
2. Int \*
3. Void \*
4. Void \*\*

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Void \*

**Explanation:**

* The `malloc()` function returns a **void pointer (`void*`)**, which can be cast to any data type.
*   For example:

    ```cpp
    int* ptr = (int*)malloc(sizeof(int));
    ```
* Therefore, the correct answer is `Void *`.

</details>

### 112. Which of the following obtains a block of memory dynamically?

1. Malloc
2. Calloc
3. Free
4. Both A & B

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Both A & B

**Explanation:**

* Both `malloc` and `calloc` are used to allocate memory dynamically:
  * `malloc` allocates memory without initializing it.
  * `calloc` allocates memory and initializes it to zero.
* Therefore, the correct answer is `Both A & B`.

</details>

### 113. Which of the following operators is used to release the dynamically allocated memory in C++?

1. New
2. Delete
3. Free
4. Remove

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Delete

**Explanation:**

* The **`delete`** operator is used to release memory allocated using `new` in C++.
*   For example:

    ```cpp
    int* ptr = new int;
    delete ptr;
    ```
* Therefore, the correct answer is `Delete`.

</details>

### 114. Which of the following is used to free the allocated memory for an object in C++?

1. Free
2. Delete
3. Release
4. Either delete or free

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Delete

**Explanation:**

* In C++, the **`delete`** operator is used to free memory allocated for an object using `new`.
* The `free` function is used in C, not C++.
* Therefore, the correct answer is `Delete`.

</details>

### 115. Which of the following is correct?

1. The 'this' pointer is accessible within all the member functions of the class
2. The 'this' pointer is accessible only within functions returning void
3. The 'this' pointer is accessible only within non-static functions
4. The 'this' pointer is accessible within the member functions with zero arguments

<details>

<summary>Show me the answer</summary>

**Answer:** 3) The 'this' pointer is accessible only within non-static functions

**Explanation:**

* The **`this` pointer** is a hidden pointer available in all **non-static member functions** of a class.
* It points to the object for which the member function is called.
* Therefore, the correct answer is `The 'this' pointer is accessible only within non-static functions`.

</details>

### 116. The 'this' pointer can be used to:

1. Guard against any kind of reference
2. Guard against self-reference
3. Guard from other pointers
4. Guard from parameter referencing

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Guard against self-reference

**Explanation:**

* The **`this` pointer** is used to:
  * Avoid ambiguity between class members and function parameters with the same name.
  * Guard against **self-reference** in assignment operations.
* Therefore, the correct answer is `Guard against self-reference`.

</details>

### 117. The 'this' pointer is:

1. Modifiable
2. Non-Modifiable
3. Are made variables
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Non-Modifiable

**Explanation:**

* The **`this` pointer** is a **constant pointer**, meaning its value cannot be changed.
* Therefore, the correct answer is `Non-Modifiable`.

</details>

### 118. Which of the following are types of 'this' pointer?

1. Const
2. Volatile
3. Both A & B
4. Int

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Both A & B

**Explanation:**

* The **`this` pointer** can be:
  * **Const**: When used in a `const` member function.
  * **Volatile**: When used in a `volatile` member function.
* Therefore, the correct answer is `Both A & B`.

</details>

### 119. The static member functions have access to:

1. All the members of a class
2. Only constant members of a class
3. Only the static members of a class
4. All other class members also

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Only the static members of a class

**Explanation:**

* **Static member functions** can only access **static data members** and other **static member functions** of the class.
* They cannot access non-static members directly.
* Therefore, the correct answer is `Only the static members of a class`.

</details>

### 120. The static members are:

1. Created and initialized only once
2. Created and initialized twice
3. Created when necessary
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Created and initialized only once

**Explanation:**

* **Static members** are:
  * Created and initialized **only once** when the program starts.
  * Shared among all objects of the class.
* Therefore, the correct answer is `Created and initialized only once`.

</details>

### 121. Which of the following is correct?

1. The static data member can’t be mutable
2. If static data members are made inline, those can be initialized within the class
3. We can use the static member functions and static data members even if the class object is not created
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the statements are correct:
  * Static data members **cannot** be declared as `mutable`.
  * Static data members can be **initialized within the class** if they are declared as `inline`.
  * Static members (functions and data) can be accessed **without creating an object** of the class.
* Therefore, the correct answer is `All of the Above`.

</details>

### 122. The keyword 'friend' is placed only in the:

1. Function Declaration
2. Function Definition
3. Main Function
4. Void Function

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Function Declaration

**Explanation:**

* The **`friend` keyword** is used in the **function declaration** inside the class to grant access to private and protected members.
* It is **not** used in the function definition or other parts of the program.
* Therefore, the correct answer is `Function Declaration`.

</details>

### 123. Which of the following is correct?

1. Friend functions can be invoked as a normal function
2. Friend functions cannot access the members of the class directly
3. Friend functions can be private or public
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the statements are correct:
  * Friend functions are **not member functions** and can be invoked like normal functions.
  * Friend functions **can access private and protected members** of the class directly.
  * Friend functions can be declared in the **private or public** section of the class.
* Therefore, the correct answer is `All of the Above`.

</details>

### 124. The syntax of a friend function is:

1. Friend class;
2. Friend class
3. Friend class1, class2
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Friend class

**Explanation:**

*   The correct syntax for declaring a **friend function** is:

    ```cpp
    friend returnType functionName(parameters);
    ```
*   For example:

    ```cpp
    class MyClass {
    private:
        int data;
    public:
        friend void display(MyClass obj);
    };
    ```
* Therefore, the correct answer is `Friend class`.

</details>

### 125. A binary operator performs its action on:

1. A single operand
2. Two operands
3. Three operands
4. Any number of operands

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Two operands

**Explanation:**

* A **binary operator** operates on **two operands**.
* Examples include `+`, `-`, `*`, `/`, `==`, etc.
* Therefore, the correct answer is `Two operands`.

</details>

### 126. Which of the following is a unary operator?

1. &
2. \==
3.
   *
4. /

<details>

<summary>Show me the answer</summary>

**Answer:** 3) -

**Explanation:**

* A **unary operator** operates on a **single operand**.
* Examples include `-` (negation), `++`, `--`, `!`, etc.
* Therefore, the correct answer is `-`.

</details>

### 127. Which of the following is a binary operator?

1. &
2. \==
3. /
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the given operators are **binary operators**:
  * `&` (bitwise AND)
  * `==` (equality)
  * `/` (division)
* Therefore, the correct answer is `All of the Above`.

</details>

### 128. Which is called the ternary operator?

1. ?:
2. &&
3. ||
4. \===

<details>

<summary>Show me the answer</summary>

**Answer:** 1) ?:

**Explanation:**

* The **ternary operator** is `?:`.
* It takes **three operands** and is used as a shorthand for `if-else` statements.
*   For example:

    ```cpp
    int result = (a > b) ? a : b;
    ```
* Therefore, the correct answer is `?:`.

</details>

### 129. C-style type casting is also known as:

1. Cast notation
2. Type casting
3. Function notation
4. C notation

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Type casting

**Explanation:**

* **C-style type casting** is also known as **type casting**.
*   It uses the syntax:

    ```cpp
    (type) expression;
    ```
* Therefore, the correct answer is `Type casting`.

</details>

### 130. There are three major ways in which we can use explicit conversion in C++:

1. 2
2. 3
3. 4
4. 5

<details>

<summary>Show me the answer</summary>

**Answer:** 2) 3

**Explanation:**

* The three major ways to perform **explicit conversion** in C++ are:
  1. **C-style casting**: `(type) expression`
  2. **Static casting**: `static_cast<type>(expression)`
  3. **Reinterpret casting**: `reinterpret_cast<type>(expression)`
* Therefore, the correct answer is `3`.

</details>

### 131. How many parameters does a conversion operator may take?

1. 0
2. 1
3. 2
4. 3

<details>

<summary>Show me the answer</summary>

**Answer:** 1) 0

**Explanation:**

* A **conversion operator** does not take any parameters.
* It is used to convert an object of one type to another type.
* Therefore, the correct answer is `0`.

</details>

### 132. What type of operator is a cast operator?

1. Unary
2. Binary
3. Ternary
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Unary

**Explanation:**

* A **cast operator** is a **unary operator** because it operates on a single operand.
* Therefore, the correct answer is `Unary`.

</details>

### 133. The compiler carries out which type of casting?

1. Implicit
2. Explicit
3. Ex-Implicit
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Implicit

**Explanation:**

* The **compiler** performs **implicit casting** automatically when data types are compatible.
*   For example:

    ```cpp
    int x = 10;
    double y = x; // Implicit casting from int to double
    ```
* Therefore, the correct answer is `Implicit`.

</details>

### 134. The programmer initiates which type of casting?

1. Implicit
2. Explicit
3. Ex-Implicit
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Explicit

**Explanation:**

* The **programmer** initiates **explicit casting** using casting operators like `static_cast`, `dynamic_cast`, etc.
* Therefore, the correct answer is `Explicit`.

</details>

### 135. How many types of inheritance are there in C++?

1. 3
2. 4
3. 5
4. 6

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 5

**Explanation:**

* The **five types of inheritance** in C++ are:
  1. Single inheritance
  2. Multiple inheritance
  3. Multilevel inheritance
  4. Hierarchical inheritance
  5. Hybrid inheritance
* Therefore, the correct answer is `5`.

</details>

### 136. Single-level inheritance is:

1. A class inheriting a derived class
2. A class inheriting a base class
3. A class inheriting a nested class
4. A class which gets inherited by 2 classes

<details>

<summary>Show me the answer</summary>

**Answer:** 2) A class inheriting a base class

**Explanation:**

* **Single-level inheritance** occurs when a **derived class** inherits from a **single base class**.
*   For example:

    ```cpp
    class Base {};
    class Derived : public Base {};
    ```
* Therefore, the correct answer is `A class inheriting a base class`.

</details>

### 137. Multiple Inheritance is not supported by:

1. JAVA
2. C++
3. C
4. JAVA and Smalltalk

<details>

<summary>Show me the answer</summary>

**Answer:** 1) JAVA

**Explanation:**

* **Multiple inheritance** is not supported by **JAVA** to avoid complexity and ambiguity (e.g., the diamond problem).
* C++ supports multiple inheritance.
* Therefore, the correct answer is `JAVA`.

</details>

### 138. The feature of multiple inheritance in JAVA is done through:

1. Interfaces Concept
2. Diamond Problem
3. Reusability concept
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Interfaces Concept

**Explanation:**

* In **JAVA**, the concept of **multiple inheritance** is achieved using **interfaces**.
* A class can implement multiple interfaces, thus simulating multiple inheritance.
* Therefore, the correct answer is `Interfaces Concept`.

</details>

### 139. The diamond problem is associated with:

1. Single
2. Multiple
3. Multi-Level
4. Hierarchical

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Multiple

**Explanation:**

* The **diamond problem** occurs in **multiple inheritance** when a class inherits from two classes that both inherit from a common base class.
* This creates ambiguity in accessing the base class members.
* Therefore, the correct answer is `Multiple`.

</details>

### 140. Which constructor is called first if a derived class object is created?

1. Base Class Constructor
2. Copy Constructor
3. Default
4. Not possible

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Base Class Constructor

**Explanation:**

* When a derived class object is created, the **base class constructor** is called first to initialize the base class part of the object.
* Then, the derived class constructor is called.
* Therefore, the correct answer is `Base Class Constructor`.

</details>

### 141. In a single program, how many types of inheritance can be used?

1. 2
2. 3
3. 4
4. Any type, any number of times

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Any type, any number of times

**Explanation:**

* In a single program, **any type of inheritance** (single, multiple, multilevel, hierarchical, hybrid) can be used **any number of times**.
* Therefore, the correct answer is `Any type, any number of times`.

</details>

### 142. If we use single inheritance, then the program will contain how many classes?

1. At least 2
2. 3
3. 4
4. At most 4

<details>

<summary>Show me the answer</summary>

**Answer:** 1) At least 2

**Explanation:**

* In **single inheritance**, there must be **at least two classes**: a base class and a derived class.
* Therefore, the correct answer is `At least 2`.

</details>

### 143. Which constructor will be called first from the classes involved in single inheritance from the object of the derived class?

1. Base class constructor
2. Derived class constructor
3. Both class constructors at a time
4. Runtime error

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Base class constructor

**Explanation:**

* In **single inheritance**, the **base class constructor** is called first when a derived class object is created.
* Therefore, the correct answer is `Base class constructor`.

</details>

### 144. Multilevel inheritance is:

1. A class derived from another derived class
2. Classes being derived from other derived classes
3. Continuing single-level inheritance
4. A class which has more than one parent

<details>

<summary>Show me the answer</summary>

**Answer:** 1) A class derived from another derived class

**Explanation:**

* **Multilevel inheritance** occurs when a class is derived from another derived class.
*   For example:

    ```cpp
    class A {};
    class B : public A {};
    class C : public B {};
    ```
* Therefore, the correct answer is `A class derived from another derived class`.

</details>

### 145. The minimum number of levels for implementing multilevel inheritance is:

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 3

**Explanation:**

* **Multilevel inheritance** requires at least **three levels**: a base class, a derived class, and a further derived class.
* Therefore, the correct answer is `3`.

</details>

### 146. In multilevel inheritance, one class inherits:

1. 1 class
2. 2 classes
3. 3 classes
4. 4 classes

<details>

<summary>Show me the answer</summary>

**Answer:** 1) 1 class

**Explanation:**

* In **multilevel inheritance**, each class inherits from **only one class**.
* Therefore, the correct answer is `1 class`.

</details>

### 147. In multilevel inheritance, which is the most significant feature of OOP used?

1. Code readability
2. Flexibility
3. Code reusability
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Code reusability

**Explanation:**

* The most significant feature of OOP used in **multilevel inheritance** is **code reusability**.
* Derived classes reuse the code from their base classes.
* Therefore, the correct answer is `Code reusability`.

</details>

### 148. Multiple inheritance is defined as:

1. A class is derived from another class
2. A class is derived from two or more classes
3. When a class is derived from other two derived classes
4. When a class is derived from exactly one class

<details>

<summary>Show me the answer</summary>

**Answer:** 2) A class is derived from two or more classes

**Explanation:**

* **Multiple inheritance** occurs when a class is derived from **two or more base classes**.
*   For example:

    ```cpp
    class A {};
    class B {};
    class C : public A, public B {};
    ```
* Therefore, the correct answer is `A class is derived from two or more classes`.

</details>

### 149. To implement multiple inheritance, at least how many classes should a program contain?

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 3

**Explanation:**

* To implement **multiple inheritance**, a program must contain at least **three classes**: two base classes and one derived class.
* Therefore, the correct answer is `3`.

</details>

### 150. Why does the diamond problem arise due to multiple inheritance?

1. Methods with the same name create ambiguity and conflict
2. Methods with the same name create ambiguity
3. The derived class gets overloaded with more than two class methods
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Methods with the same name create ambiguity and conflict

**Explanation:**

* The **diamond problem** arises in **multiple inheritance** when:
  * Two base classes have methods with the same name.
  * The derived class faces ambiguity in choosing which method to call.
* Therefore, the correct answer is `Methods with the same name create ambiguity and conflict`.

</details>

### 151. We can overcome the diamond problem by:

1. Using Alias Name
2. Using the Virtual Keyword with the same name function
3. Both A & B
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Using the Virtual Keyword with the same name function

**Explanation:**

* The **diamond problem** can be overcome by using the **`virtual` keyword** when inheriting from the base classes.
* This ensures that only one instance of the common base class is created.
* Therefore, the correct answer is `Using the Virtual Keyword with the same name function`.

</details>

### 152. Which members can’t be accessed in the derived class in multiple inheritance?

1. Private members of the base
2. Public members of the base
3. Protected members of the base
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Private members of the base

**Explanation:**

* In **multiple inheritance**, **private members** of the base class cannot be accessed in the derived class.
* Public and protected members can be accessed.
* Therefore, the correct answer is `Private members of the base`.

</details>

### 153. To implement hierarchical inheritance, at least how many classes must be there?

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 3

**Explanation:**

* To implement **hierarchical inheritance**, there must be at least **three classes**: one base class and two derived classes.
* Therefore, the correct answer is `3`.

</details>

### 154. Hierarchical inheritance can be a subset of:

1. Single
2. Multiple
3. Multi-level
4. Hybrid

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Hybrid

**Explanation:**

* **Hierarchical inheritance** can be a subset of **hybrid inheritance**, which combines multiple types of inheritance.
* Therefore, the correct answer is `Hybrid`.

</details>

### 155. Hybrid Inheritance is the:

1. Combination of two or more inheritance types
2. Combination of the same type of inheritance
3. Inheritance of more than 5 classes
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Combination of two or more inheritance types

**Explanation:**

* **Hybrid inheritance** is a combination of **two or more types of inheritance** (e.g., single, multiple, multilevel, hierarchical).
* Therefore, the correct answer is `Combination of two or more inheritance types`.

</details>

### 156. In hybrid inheritance, which is true?

1. Constructor calls are in reverse
2. Constructor calls are priority-based
3. The constructor of only the derived class is called
4. Constructor calls are usual

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Constructor calls are usual

**Explanation:**

* In **hybrid inheritance**, the **constructor calls** follow the usual order:
  * Base class constructors are called first.
  * Derived class constructors are called next.
* Therefore, the correct answer is `Constructor calls are usual`.

</details>

### 157. Which of the following is correct?

1. Virtual functions must be members of some class, and the virtual function must be defined in the base class
2. Virtual functions cannot be static members.
3. Virtual Functions are accessed through object pointers.
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the statements are correct:
  * Virtual functions must be **members of a class** and are typically defined in the base class.
  * Virtual functions **cannot** be static members.
  * Virtual functions are accessed through **object pointers** to achieve runtime polymorphism.
* Therefore, the correct answer is `All of the Above`.

</details>

### 158. Which of the following is true about pure virtual functions?

1. A class is abstract if it has at least one pure virtual function.
2. We can have pointers and references of abstract class type.
3. Abstract classes cannot be instantiated.
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the statements are correct:
  * A class with at least one **pure virtual function** is an **abstract class**.
  * We can have **pointers and references** of abstract class type.
  * Abstract classes **cannot** be instantiated.
* Therefore, the correct answer is `All of the Above`.

</details>

### 159. Static Binding is also called as:

1. Early Binding
2. Compile-Time Binding
3. Late Binding
4. Both A & B

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Both A & B

**Explanation:**

* **Static binding** is also known as:
  * **Early binding**: The function call is resolved at compile time.
  * **Compile-time binding**: The function call is resolved during compilation.
* Therefore, the correct answer is `Both A & B`.

</details>

### 160. Static Binding Happens:

1. At compile time
2. At run time
3. When all information needed to call a function is available at compile-time
4. Both A & C

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Both A & C

**Explanation:**

* **Static binding** occurs:
  * At **compile time**.
  * When all information needed to call a function is available at **compile-time**.
* Therefore, the correct answer is `Both A & C`.

</details>

### 161. To implement late binding, which concept is used?

1. Static Functions
2. Virtual Functions
3. Non-Static Functions
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Virtual Functions

**Explanation:**

* **Late binding** is implemented using **virtual functions**.
* The function call is resolved at **runtime** based on the object type.
* Therefore, the correct answer is `Virtual Functions`.

</details>

### 162. For achieving file handling, we need:

1. Naming and opening a file
2. Writing data and reading data into/from the file
3. Closing a file
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* To achieve **file handling**, we need to:
  * Name and open a file.
  * Write data to or read data from the file.
  * Close the file after operations are complete.
* Therefore, the correct answer is `All of the Above`.

</details>

### 163. Default open modes in a file are:

1. Ifstream, ofstream, and fstream
2. IfStream, ofstream, and fstream
3. Ifstream and ofstream
4. Ofstream and fstream

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Ifstream, ofstream, and fstream

**Explanation:**

* The **default open modes** for file handling in C++ are:
  * `ifstream`: For input operations.
  * `ofstream`: For output operations.
  * `fstream`: For both input and output operations.
* Therefore, the correct answer is `Ifstream, ofstream, and fstream`.

</details>

### 164. Which class is derived from the class ios?

1. Istream
2. Ostream
3. Streambuf
4. Fstreambase

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Ostream

**Explanation:**

* The **`ostream`** class is derived from the **`ios`** class.
* It is used for output operations.
* Therefore, the correct answer is `Ostream`.

</details>

### 165. Which class declares input functions such as get(), getline(), and read()?

1. Ios
2. Istream
3. Ostream
4. Streambuf

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Istream

**Explanation:**

* The **`istream`** class declares input functions like:
  * `get()`: Reads a single character.
  * `getline()`: Reads a line of text.
  * `read()`: Reads a block of data.
* Therefore, the correct answer is `Istream`.

</details>

### 166. Which class inherits the functions get(), getline(), read(), seekg(), and tellg()?

1. Ofstream
2. Fstreambase
3. Ifstream
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Ifstream

**Explanation:**

* The **`ifstream`** class inherits input functions like:
  * `get()`, `getline()`, `read()`: For reading data.
  * `seekg()`, `tellg()`: For file pointer manipulation.
* Therefore, the correct answer is `Ifstream`.

</details>

### 167. How many types of output stream classes are there in C++?

1. 1
2. 2
3. 3
4. 4

<details>

<summary>Show me the answer</summary>

**Answer:** 3) 3

**Explanation:**

* The **output stream classes** in C++ are:
  1. `ostream`: General output stream.
  2. `ofstream`: File output stream.
  3. `ostringstream`: String output stream.
* Therefore, the correct answer is `3`.

</details>

### 168. Which of the following are built-in functions to handle file errors?

1. Int bad()
2. Int fail()
3. Int good()
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* The built-in functions to handle file errors are:
  * `bad()`: Checks for unrecoverable errors.
  * `fail()`: Checks for input/output failures.
  * `good()`: Checks if no errors have occurred.
* Therefore, the correct answer is `All of the Above`.

</details>

### 169. Which of the following returns a non-zero (true) value when an input or output operation has failed?

1. Int bad()
2. Int fail()
3. Int good()
4. Int eof()

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Int fail()

**Explanation:**

* The **`fail()`** function returns a non-zero (true) value when an input or output operation has failed.
* Therefore, the correct answer is `Int fail()`.

</details>

### 170. Which of the following returns a non-zero (true) value when no error has occurred?

1. Int bad()
2. Int fail()
3. Int good()
4. Int eof()

<details>

<summary>Show me the answer</summary>

**Answer:** 3) Int good()

**Explanation:**

* The **`good()`** function returns a non-zero (true) value when no error has occurred.
* Therefore, the correct answer is `Int good()`.

</details>

### 171. Which of the following returns a non-zero (true) value if an invalid operation is attempted or an unrecoverable error has occurred?

1. Int bad()
2. Int fail()
3. Int good()
4. Int eof()

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Int bad()

**Explanation:**

* The **`bad()`** function returns a non-zero (true) value if an invalid operation is attempted or an unrecoverable error has occurred.
* Therefore, the correct answer is `Int bad()`.

</details>

### 172. Which of the following returns a non-zero (true) value when the end-of-file is encountered while reading?

1. Int bad()
2. Int fail()
3. Int good()
4. Int eof()

<details>

<summary>Show me the answer</summary>

**Answer:** 4) Int eof()

**Explanation:**

* The **`eof()`** function returns a non-zero (true) value when the end-of-file is encountered while reading.
* Therefore, the correct answer is `Int eof()`.

</details>

### 173. Which of the following is true?

1. All the built-in functions return either non-zero to indicate true or zero to indicate false.
2. eof() returns true if eofbit is set
3. The good() returns true if there are no errors
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the statements are correct:
  * Built-in functions return **non-zero (true)** or **zero (false)**.
  * `eof()` returns true if the **eofbit** is set.
  * `good()` returns true if there are **no errors**.
* Therefore, the correct answer is `All of the Above`.

</details>

### 174. Which of the following is true about manipulators?

1. Used to make up the program structure
2. Are special stream functions that change certain formats and characteristics of the input and output
3. To carry out the operations of the manipulators, \<iomanip.h> must be included.
4. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 4) All of the Above

**Explanation:**

* All the statements are correct:
  * Manipulators are used to **format input and output**.
  * They are special stream functions that change **formats and characteristics**.
  * The `<iomanip.h>` header must be included to use manipulators.
* Therefore, the correct answer is `All of the Above`.

</details>

### 175. Which of the following are Integer Manipulators?

1. Hex, oct, dec
2. Fixed, scientific
3. Hex, Fixed, and Scientific
4. Dec, Fixed, and Scientific

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Hex, oct, dec

**Explanation:**

* The **integer manipulators** are:
  * `hex`: For hexadecimal output.
  * `oct`: For octal output.
  * `dec`: For decimal output.
* Therefore, the correct answer is `Hex, oct, dec`.

</details>

### 176. Which of the following are float manipulators?

1. Hex, oct, dec
2. Fixed, scientific
3. Hex, Fixed, and Scientific
4. Dec, Fixed, and Scientific

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Fixed, scientific

**Explanation:**

* The **float manipulators** are:
  * `fixed`: For fixed-point notation.
  * `scientific`: For scientific notation.
* Therefore, the correct answer is `Fixed, scientific`.

</details>

### 177. Which of the following is not a manipulator?

1. Base
2. Ends
3. Oct
4. Skipws

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Base

**Explanation:**

* The **manipulators** in C++ include:
  * `ends`: Adds a null character to the output.
  * `oct`: Sets the output to octal format.
  * `skipws`: Skips whitespace during input.
* `Base` is **not** a manipulator.
* Therefore, the correct answer is `Base`.

</details>

### 178. Which of the following header files is used for manipulators?

1. Iomanipulator.h
2. Sidiomanip.h
3. iomanip.h
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 3) iomanip.h

**Explanation:**

* The **`<iomanip.h>`** header file is used for manipulators in C++.
* Therefore, the correct answer is `iomanip.h`.

</details>

### 179. \_\_\_\_\_\_ functions allow supplying input or displaying output in the user's desired format.

1. Formatted I/O
2. Unformatted I/O
3. Scattered I/O
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Formatted I/O

**Explanation:**

* **Formatted I/O functions** allow input and output to be displayed in a specific format (e.g., using `printf` and `scanf`).
* Therefore, the correct answer is `Formatted I/O`.

</details>

### 180. \_\_\_\_\_\_ functions are the most basic form of input and output, and they do not allow supplying input or displaying output in the user's desired format.

1. Formatted I/O
2. Unformatted I/O
3. Scattered I/O
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Unformatted I/O

**Explanation:**

* **Unformatted I/O functions** are the most basic and do not allow formatting (e.g., `getchar`, `putchar`).
* Therefore, the correct answer is `Unformatted I/O`.

</details>

### 181. Printf() and scanf() are examples of \_\_\_\_\_\_.

1. Formatted I/O
2. Unformatted I/O
3. Scattered I/O
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Formatted I/O

**Explanation:**

* **`printf()`** and **`scanf()`** are examples of **formatted I/O functions** because they allow input and output in a specific format.
* Therefore, the correct answer is `Formatted I/O`.

</details>

### 182. Getch(), getche(), getchar(), gets(), puts(), putchar(), etc. are examples of \_\_\_\_\_\_.

1. Formatted I/O
2. Unformatted I/O
3. Scattered I/O
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Unformatted I/O

**Explanation:**

* Functions like **`getch()`**, **`getchar()`**, **`puts()`**, and **`putchar()`** are examples of **unformatted I/O functions** because they do not allow formatting.
* Therefore, the correct answer is `Unformatted I/O`.

</details>

### 183. \_\_\_\_\_\_ contain format specifiers in their syntax.

1. Formatted I/O
2. Unformatted I/O
3. Scattered I/O
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Formatted I/O

**Explanation:**

* **Formatted I/O functions** (e.g., `printf`, `scanf`) contain **format specifiers** in their syntax (e.g., `%d`, `%f`).
* Therefore, the correct answer is `Formatted I/O`.

</details>

### 184. \_\_\_\_\_\_ do not contain format specifiers in their syntax.

```c
#include<stdio.h>
#include<conio.h>
void main() { 
    int x; 
    printf("Please enter value of x:"); 
    scanf("%d", &x); 
    printf("x = %d", x); 
    getch(); 
}
```

1. Formatted I/O
2. Unformatted I/O
3. Scattered I/O
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 2) Unformatted I/O

**Explanation:**

* **Unformatted I/O functions** (e.g., `getchar`, `putchar`) do not use **format specifiers**.
* Therefore, the correct answer is `Unformatted I/O`.

</details>

### 185. Consider an example and determine which Input/Output function this example belongs to:

```c
#include<stdio.h> 
#include<conio.h> 
void main() { 
    int x; 
    printf("Please enter value of x:"); 
    scanf("%d", &x); 
    printf("x = %d", x); 
    getch(); 
}
```

1. Formatted I/O
2. Unformatted I/O
3. Scattered I/O
4. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** 1) Formatted I/O

**Explanation:**

* The example uses **`printf()`** and **`scanf()`**, which are **formatted I/O functions** because they use format specifiers (`%d`).
* Therefore, the correct answer is `Formatted I/O`.

</details>

### 186. The iomanip.h and iostream.h header files are used to perform the \_\_\_\_\_\_ operations in C++.

A. Formatted I/O\
B. Unformatted I/O\
C. Scattered I/O\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Formatted I/O

**Explanation:**

* The **`iomanip.h`** and **`iostream.h`** header files are used for **formatted I/O operations** in C++.
* They provide functions and manipulators to format input and output (e.g., `setw`, `setprecision`).
* Therefore, the correct answer is `Formatted I/O`.

</details>

### 187. In C++, \_\_\_\_\_\_ is one of the ways to perform the formatted I/O operations.

A. Using the member functions of the ios class.\
B. Using the special functions called manipulators defined in iomanip.h.\
C. Both A and B\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** C. Both A and B

**Explanation:**

* In C++, **formatted I/O operations** can be performed using:
  1. Member functions of the **`ios` class** (e.g., `width`, `precision`).
  2. Special functions called **manipulators** defined in `<iomanip.h>` (e.g., `setw`, `setprecision`).
* Therefore, the correct answer is `Both A and B`.

</details>

### 188. Width(int), fill(char), precision(int) provides the details of the functions of the ios class used to perform \_\_\_\_\_\_ in C++.

A. Formatted I/O\
B. Unformatted I/O\
C. Scattered I/O\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Formatted I/O

**Explanation:**

* Functions like **`width(int)`**, **`fill(char)`**, and **`precision(int)`** are part of the **`ios` class** and are used for **formatted I/O operations**.
* Therefore, the correct answer is `Formatted I/O`.

</details>

### 189. The functions width(int), fill(char), precision(int) are called using the built-in object \_\_\_\_\_\_ in formatted I/O in OOP.

A. Cin()\
B. Cout()\
C. Printf()\
D. Scanf()

<details>

<summary>Show me the answer</summary>

**Answer:** B. Cout()

**Explanation:**

* The functions **`width(int)`**, **`fill(char)`**, and **`precision(int)`** are called using the built-in object **`cout`** in C++.
* Therefore, the correct answer is `Cout()`.

</details>

### 190. A template can be represented in how many ways?

A. 2\
B. 3\
C. 4\
D. 5

<details>

<summary>Show me the answer</summary>

**Answer:** A. 2

**Explanation:**

* A **template** can be represented in **two ways**:
  1. **Function templates**: For generic functions.
  2. **Class templates**: For generic classes.
* Therefore, the correct answer is `2`.

</details>

### 191. The ways in which the template can be represented are:

A. Function and Class Templates\
B. Function and Structure Templates\
C. Class and Structure Templates\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Function and Class Templates

**Explanation:**

* Templates can be represented as:
  1. **Function templates**: For generic functions.
  2. **Class templates**: For generic classes.
* Therefore, the correct answer is `Function and Class Templates`.

</details>

### 192. Which of the following is true?

A. A generic function is created by using the keyword template\
B. Generic functions use the concept of a function template\
C. The type of the data that the function will operate on depends on the type of the data passed as a parameter\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. All of the Above

**Explanation:**

* All the statements are correct:
  1. A **generic function** is created using the **`template`** keyword.
  2. Generic functions use the concept of a **function template**.
  3. The type of data the function operates on depends on the type of data passed as a parameter.
* Therefore, the correct answer is `All of the Above`.

</details>

### 193. Which of the following is correct?

A. Template classes and functions eliminate the code duplication of different data types\
B. Multiple parameters can be used in both class and function templates.\
C. Template functions can also be overloaded.\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. All of the Above

**Explanation:**

* All the statements are correct:
  1. Template classes and functions eliminate **code duplication** for different data types.
  2. Multiple parameters can be used in **class and function templates**.
  3. Template functions can be **overloaded**.
* Therefore, the correct answer is `All of the Above`.

</details>

### 194. We can restrict a function to throw certain exceptions by:

A. Defining the function with a throw clause\
B. Defining multiple try and catch blocks inside a function\
C. Both A & B\
D. Not possible in C++

<details>

<summary>Show me the answer</summary>

**Answer:** A. Defining the function with a throw clause

**Explanation:**

* A function can be restricted to throw certain exceptions by defining it with a **`throw` clause**.
* For example:

```c
void myFunction() 
throw(int, char) { 
// Function body 
}
```

* Therefore, the correct answer is `Defining the function with a throw clause`.

</details>

### 195. What is the return type of an uncaught exception?

A. String\
B. Char\
C. Bool\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. None of the Above

**Explanation:**

* An **uncaught exception** does not have a return type. It causes the program to terminate abnormally.
* Therefore, the correct answer is `None of the Above`.

</details>

### 196. STL stands for:

A. SQL Template Library\
B. Standard Template Library\
C. Standardized Template Library\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** B. Standard Template Library

**Explanation:**

* **STL** stands for **Standard Template Library**, which is a collection of template classes and functions in C++.
* Therefore, the correct answer is `Standard Template Library`.

</details>

### 197. The Standard Template Library is:

A. A set of C++ template classes to provide common programming data structures and functions\
B. A set of Functions\
C. A set of programming data structures only\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. A set of C++ template classes to provide common programming data structures and functions

**Explanation:**

* The **Standard Template Library (STL)** is a set of **C++ template classes** that provide common data structures (e.g., vectors, lists) and functions (e.g., sorting, searching).
* Therefore, the correct answer is `A set of C++ template classes to provide common programming data structures and functions`.

</details>

### 198. Which of the following provides a different interface for sequential containers?

A. Associative Container\
B. Container Adaptors\
C. Unordered Associative Containers\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** B. Container Adaptors

**Explanation:**

* **Container adaptors** (e.g., stack, queue) provide a different interface for sequential containers.
* Therefore, the correct answer is `Container Adaptors`.

</details>

### 199. The number of components that STL has:

A. 2\
B. 3\
C. 4\
D. 5

<details>

<summary>Show me the answer</summary>

**Answer:** C. 4

**Explanation:**

* The **STL** has **four components**:
  1. Containers
  2. Algorithms
  3. Iterators
  4. Functors
* Therefore, the correct answer is `4`.

</details>

### 200. What are containers?

A. That stores all the algorithms\
B. That contain overloaded functions\
C. That stores objects and data\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** C. That stores objects and data

**Explanation:**

* **Containers** in STL are used to **store objects and data** (e.g., vectors, lists, maps).
* Therefore, the correct answer is `That stores objects and data`.

</details>

### 201. How many types of Container Adaptors are present?

A. 3\
B. 4\
C. 5\
D. 6

<details>

<summary>Show me the answer</summary>

**Answer:** A. 3

**Explanation:**

* The **Container Adaptors** in STL are:
  1. **Stack**: LIFO (Last In First Out) data structure.
  2. **Queue**: FIFO (First In First Out) data structure.
  3. **Priority Queue**: Elements are ordered by priority.
* Therefore, the correct answer is `3`.

</details>

### 202. How many types of associative containers are present?

A. 1\
B. 2\
C. 3\
D. 4

<details>

<summary>Show me the answer</summary>

**Answer:** C. 3

**Explanation:**

* The **associative containers** in STL are:
  1. **Set**: Stores unique elements in a sorted order.
  2. **Map**: Stores key-value pairs in a sorted order.
  3. **Multiset**: Allows duplicate elements in a sorted order.
* Therefore, the correct answer is `3`.

</details>

### 203. How many Unordered Associative containers are present?

A. 2\
B. 3\
C. 4\
D. 5

<details>

<summary>Show me the answer</summary>

**Answer:** C. 4

**Explanation:**

* The **Unordered Associative Containers** in STL are:
  1. **Unordered Set**: Stores unique elements in no particular order.
  2. **Unordered Map**: Stores key-value pairs in no particular order.
  3. **Unordered Multiset**: Allows duplicate elements in no particular order.
  4. **Unordered Multimap**: Allows duplicate key-value pairs in no particular order.
* Therefore, the correct answer is `4`.

</details>

### 204. Unordered associative containers are containers that:

A. Implement unsorted (hashed) data structures for quick search in O(1)\
B. Implement sorted data structures that can be quickly searched (O(log n) complexity)\
C. Provide a different interface for sequential containers.\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Implement unsorted (hashed) data structures for quick search in O(1)

**Explanation:**

* **Unordered associative containers** use **hash tables** to implement unsorted data structures, allowing for **O(1)** average time complexity for search operations.
* Therefore, the correct answer is `Implement unsorted (hashed) data structures for quick search in O(1)`.

</details>

### 205. A container adaptor is that:

A. Containers that implement unsorted (hashed) data structures for quick search in O(1)\
B. Implement sorted data structures that can be quickly searched (O(log n) complexity)\
C. Provide a different interface for sequential containers.\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** C. Provide a different interface for sequential containers.

**Explanation:**

* **Container adaptors** (e.g., stack, queue) provide a **different interface** for sequential containers, allowing them to be used in specific ways (e.g., LIFO, FIFO).
* Therefore, the correct answer is `Provide a different interface for sequential containers.`.

</details>

### 206. An associative container is that:

A. Containers that implement unsorted (hashed) data structures for quick search in O(1)\
B. Implement sorted data structures that can be quickly searched (O(log n) complexity)\
C. Provide a different interface for sequential containers.\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** B. Implement sorted data structures that can be quickly searched (O(log n) complexity)

**Explanation:**

* **Associative containers** (e.g., set, map) implement **sorted data structures** that allow for quick search operations with **O(log n)** complexity.
* Therefore, the correct answer is `Implement sorted data structures that can be quickly searched (O(log n) complexity)`.

</details>

### 207. Exception specification is:

A. A function is limited to throwing only a specified list of exceptions\
B. A function is allowed to throw all list of exceptions\
C. Both A & B\
D. A function can throw any type of exceptions

<details>

<summary>Show me the answer</summary>

**Answer:** A. A function is limited to throwing only a specified list of exceptions

**Explanation:**

* **Exception specification** restricts a function to throwing only a **specified list of exceptions**.
*   For example:

    ```cpp
    void myFunction() throw(int, char) {
        // Function body
    }
    ```
* Therefore, the correct answer is `A function is limited to throwing only a specified list of exceptions`.

</details>

### 208. When a program throws any other type of exception other than specified, then?

A. Run\
B. Arises error\
C. No response\
D. Throw

<details>

<summary>Show me the answer</summary>

**Answer:** B. Arises error

**Explanation:**

* If a program throws an exception **not specified** in the exception specification, it results in a **runtime error**.
* Therefore, the correct answer is `Arises error`.

</details>

### 209. No Exception specification means:

A. Throw Nothing\
B. Catch nothing\
C. Throw anything\
D. Catch anything

<details>

<summary>Show me the answer</summary>

**Answer:** C. Throw anything

**Explanation:**

* If a function has **no exception specification**, it means the function can **throw any type of exception**.
* Therefore, the correct answer is `Throw anything`.

</details>

### 210. Which of the following operations does not throw anything?

A. Operations which are irreversible\
B. Operations which are reversible\
C. Operations which are continuous\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Operations which are irreversible

**Explanation:**

* **Irreversible operations** (e.g., deleting a file) typically do not throw exceptions because they cannot be undone.
* Therefore, the correct answer is `Operations which are irreversible`.

</details>

### 211. The ellipsis operator is used to:

A. Catch all handlers\
B. Throw all handlers\
C. Catch and throw all handlers\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Catch all handlers

**Explanation:**

* The **ellipsis operator (`...`)** is used in a `catch` block to **catch all types of exceptions**.
*   For example:

    ```cpp
    try {
        // Code that may throw exceptions
    } catch (...) {
        // Catches all exceptions
    }
    ```
* Therefore, the correct answer is `Catch all handlers`.

</details>

### 212. When we move the try block far away from the catch block, then?

A. Reduces the amount of code in the cache\
B. Increases the amount of code in the cache\
C. Doesn’t alter anything\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** B. Increases the amount of code in the cache

**Explanation:**

* Moving the `try` block far away from the `catch` block **increases the amount of code in the cache** because the compiler has to handle the exception handling mechanism over a larger scope.
* Therefore, the correct answer is `Increases the amount of code in the cache`.

</details>

### 213. It is expensive to use objects for exceptions because:

A. The exception object is created only if an error actually happens\
B. Large time and space\
C. Both A & B\
D. Large execution time

<details>

<summary>Show me the answer</summary>

**Answer:** C. Both A & B

**Explanation:**

* Using objects for exceptions is expensive because:
  1. The exception object is created **only if an error occurs**, which adds overhead.
  2. It requires **large time and space** to handle the exception.
* Therefore, the correct answer is `Both A & B`.

</details>

### 214. Iterators are used to:

A. Point to memory addresses of STL containers\
B. Iterate over pointers\
C. Iterate over C-like arrays\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. All of the Above

**Explanation:**

* **Iterators** are used to:
  1. Point to memory addresses of STL containers.
  2. Iterate over pointers.
  3. Iterate over C-like arrays.
* Therefore, the correct answer is `All of the Above`.

</details>

### 215. Exception handling consists of how many keywords?

A. 2\
B. 3\
C. 4\
D. 5

<details>

<summary>Show me the answer</summary>

**Answer:** B. 3

**Explanation:**

* Exception handling in C++ consists of **three keywords**:
  1. **`try`**: Defines a block of code to be tested for errors.
  2. **`catch`**: Defines a block of code to handle the error.
  3. **`throw`**: Throws an exception when a problem is detected.
* Therefore, the correct answer is `3`.

</details>

### 216. The advantages of exception handling are:

A. Separation of Error Handling code from Normal Code\
B. Functions/Methods can handle only the exceptions they choose\
C. Grouping of Error Types\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. All of the Above

**Explanation:**

* The advantages of exception handling include:
  1. **Separation of error handling code** from normal code.
  2. Functions/methods can handle **only the exceptions they choose**.
  3. **Grouping of error types** for better organization.
* Therefore, the correct answer is `All of the Above`.

</details>

### 217. Which of the following statements is true?

A. Exceptions are runtime anomalies or abnormal conditions that a program encounters during its execution.\
B. Types of exceptions are synchronous and asynchronous\
C. Grouping of error types is an advantage of error handling\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. All of the Above

**Explanation:**

* All the statements are correct:
  1. Exceptions are **runtime anomalies** or abnormal conditions.
  2. Types of exceptions are **synchronous** (e.g., division by zero) and **asynchronous** (e.g., hardware interrupts).
  3. Grouping of error types is an **advantage of error handling**.
* Therefore, the correct answer is `All of the Above`.

</details>

### 218. Which of the following is used to catch all the exceptions?

A. Catch(.....)\
B. Catch(...)\
C. Catch()\
D. Catch(&)

<details>

<summary>Show me the answer</summary>

**Answer:** B. Catch(...)

**Explanation:**

* The **`catch(...)`** block is used to **catch all types of exceptions**.
* Therefore, the correct answer is `Catch(...)`.

</details>

### 219. Which of the following is used to handle exceptions in C++?

A. Catch\
B. Throw\
C. Exception\
D. Exception handler

<details>

<summary>Show me the answer</summary>

**Answer:** D. Exception handler

**Explanation:**

* The **exception handler** is used to handle exceptions in C++. It consists of `try`, `catch`, and `throw` blocks.
* Therefore, the correct answer is `Exception handler`.

</details>

### 220. In C++, what types of exceptions are available?

A. Static\
B. Dynamic\
C. Both A & B\
D. Unhandled

<details>

<summary>Show me the answer</summary>

**Answer:** C. Both A & B

**Explanation:**

* In C++, exceptions can be:
  1. **Static**: Known at compile time (e.g., syntax errors).
  2. **Dynamic**: Occur at runtime (e.g., division by zero).
* Therefore, the correct answer is `Both A & B`.

</details>

### 221. Which of the following is used to check the error in the block?

A. Try\
B. Catch\
C. Throw\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Try

**Explanation:**

* The **`try`** block is used to **check for errors** in a block of code.
* Therefore, the correct answer is `Try`.

</details>

### 222. The C++ code which causes abnormal termination/behavior of a program should be written under:

A. Try\
B. Catch\
C. Throw\
D. Any one of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Try

**Explanation:**

* Code that may cause **abnormal termination or behavior** should be written inside a **`try`** block to handle potential exceptions.
* Therefore, the correct answer is `Try`.

</details>

### 223. What does a program do when it detects an exception?

A. Continue running\
B. Calls other functions of the program\
C. Results in the termination of the program\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** C. Results in the termination of the program

**Explanation:**

* When a program detects an **unhandled exception**, it **terminates abnormally**.
* Therefore, the correct answer is `Results in the termination of the program`.

</details>

### 224. What will happen if the try-catch block is not used?

A. Error will arise\
B. Error will not arise\
C. Program generates output\
D. None of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. Error will arise

**Explanation:**

* If the **`try-catch` block** is not used, the program will **terminate abnormally** when an exception occurs.
* Therefore, the correct answer is `Error will arise`.

</details>

### 225. We can take Exception in C++ as:

A. Divide by zero\
B. Variable not declared\
C. An expression is not complete\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. All of the Above

**Explanation:**

* Exceptions in C++ can occur due to:
  1. **Divide by zero**.
  2. **Variable not declared**.
  3. **Incomplete expressions**.
* Therefore, the correct answer is `All of the Above`.

</details>

### 226. Which of the following is correct?

A. Exceptions can be handled at runtime, but errors cannot\
B. There are two types of exceptions\
C. The throw keyword is used to throw an exception\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. All of the Above

**Explanation:**

* All the statements are correct:
  1. Exceptions can be **handled at runtime**, but errors (e.g., syntax errors) cannot.
  2. There are **two types of exceptions**: synchronous and asynchronous.
  3. The **`throw`** keyword is used to throw an exception.
* Therefore, the correct answer is `All of the Above`.

</details>

### 227. Rethrowing Means?

A. An exception that is thrown again as it is not handled by that catching block\
B. An exception that is caught twice\
C. An exception that is not handled in one caught hence thrown again\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** A. An exception that is thrown again as it is not handled by that catching block

**Explanation:**

* **Rethrowing** means an exception is **thrown again** because it was not handled by the current `catch` block.
* Therefore, the correct answer is `An exception that is thrown again as it is not handled by that catching block`.

</details>

### 228. What is encapsulation in object-oriented programming?

A. The process of hiding implementation details from users of a class.\
B. The process of exposing implementation details to users of a class.\
C. The process of defining variables and methods in a class.\
D. The process of creating objects from a class.

<details>

<summary>Show me the answer</summary>

**Answer:** A. The process of hiding implementation details from users of a class.

**Explanation:**

* **Encapsulation** is the process of **hiding implementation details** from users of a class, exposing only necessary functionality.
* Therefore, the correct answer is `The process of hiding implementation details from users of a class.`.

</details>

### 229. Which access modifiers can be used to implement encapsulation in Java?

A. Public and private\
B. Public and protected\
C. Private and protected\
D. Public, private, and protected

<details>

<summary>Show me the answer</summary>

**Answer:** D. Public, private, and protected

**Explanation:**

* **Encapsulation** in Java is implemented using **access modifiers**:
  1. **Public**: Accessible from anywhere.
  2. **Private**: Accessible only within the class.
  3. **Protected**: Accessible within the class and its subclasses.
* Therefore, the correct answer is `Public, private, and protected`.

</details>

### 230. Which of the following is an example of encapsulation?

A. A class with all public methods and variables.\
B. A class with all private methods and variables.\
C. A class with some public and some private methods and variables\
D. A class with no methods or variables.

<details>

<summary>Show me the answer</summary>

**Answer:** C. A class with some public and some private methods and variables

**Explanation:**

* **Encapsulation** is demonstrated when a class has:
  1. **Private** members to hide implementation details.
  2. **Public** methods to provide controlled access to the data.
* Therefore, the correct answer is `A class with some public and some private methods and variables`.

</details>

### 231. Which of the following best describes the relationship between encapsulation and information hiding?

A. Encapsulation and information hiding are two different terms for the same thing.\
B. Encapsulation is a broader concept that includes information hiding.\
C. Information hiding is a broader concept that includes encapsulation.\
D. Encapsulation and information hiding are unrelated concepts.

<details>

<summary>Show me the answer</summary>

**Answer:** B. Encapsulation is a broader concept that includes information hiding.

**Explanation:**

* **Encapsulation** is a broader concept that includes **information hiding** as one of its principles.
* Therefore, the correct answer is `Encapsulation is a broader concept that includes information hiding.`.

</details>

### 232. Which of the following is NOT a benefit of encapsulation?

A. Improved security of data\
B. Better organization of code\
C. Easier debugging of code\
D. Increased speed of execution

<details>

<summary>Show me the answer</summary>

**Answer:** D. Increased speed of execution

**Explanation:**

* **Encapsulation** provides benefits like improved security, better organization, and easier debugging, but it does not directly increase the **speed of execution**.
* Therefore, the correct answer is `Increased speed of execution`.

</details>

### 233. Which of the following best describes the principle of "separation of concerns" in relation to encapsulation?

A. The idea that different classes should be responsible for different tasks, and that each class should be responsible for a single concern.\
B. The idea that all code related to a particular feature should be located in a single class.\
C. The idea that classes should be designed to be easily extended and modified without breaking existing code.\
D. The idea that all variables and methods in a class should be accessible to other classes.

<details>

<summary>Show me the answer</summary>

**Answer:** A. The idea that different classes should be responsible for different tasks, and that each class should be responsible for a single concern.

**Explanation:**

* The **separation of concerns** principle states that each class should handle a **single responsibility** or concern, making the code more modular and maintainable.
* Therefore, the correct answer is `The idea that different classes should be responsible for different tasks, and that each class should be responsible for a single concern.`.

</details>

### 234. Which of the following statements about encapsulation in C++ is true?

A. Encapsulation is achieved through the use of access modifiers such as public, private, and protected.\
B. Encapsulation is not possible in C++.\
C. Encapsulation in C++ is achieved through the use of pointers.\
D. Encapsulation in C++ is achieved through the use of inheritance.

<details>

<summary>Show me the answer</summary>

**Answer:** A. Encapsulation is achieved through the use of access modifiers such as public, private, and protected.

**Explanation:**

* **Encapsulation** in C++ is achieved using **access modifiers** like `public`, `private`, and `protected` to control access to class members.
* Therefore, the correct answer is `Encapsulation is achieved through the use of access modifiers such as public, private, and protected.`.

</details>

### 235. Which of the following best describes the relationship between encapsulation and inheritance?

A. Encapsulation and inheritance are two different terms for the same thing.\
B. Encapsulation is a broader concept that includes inheritance.\
C. Inheritance is a broader concept that includes encapsulation.\
D. Encapsulation and inheritance are unrelated concepts.

<details>

<summary>Show me the answer</summary>

**Answer:** D. Encapsulation and inheritance are unrelated concepts.

**Explanation:**

* **Encapsulation** and **inheritance** are separate concepts in OOP. Encapsulation focuses on data hiding, while inheritance focuses on code reuse and hierarchy.
* Therefore, the correct answer is `Encapsulation and inheritance are unrelated concepts.`.

</details>

### 236. Which type of polymorphism is resolved at compile-time?

A. Runtime polymorphism\
B. Dynamic polymorphism\
C. Method overloading\
D. Subtyping

<details>

<summary>Show me the answer</summary>

**Answer:** C. Method overloading

**Explanation:**

* **Method overloading** is an example of **compile-time polymorphism** because the method to be called is determined at compile time based on the method signature.
* Therefore, the correct answer is `Method overloading`.

</details>

### 237. Which type of polymorphism allows objects of a subclass to be treated as objects of its superclass?

A. Compile-time polymorphism\
B. Dynamic polymorphism\
C. Subtyping\
D. Method overriding

<details>

<summary>Show me the answer</summary>

**Answer:** B. Dynamic polymorphism

**Explanation:**

* **Dynamic polymorphism** allows objects of a subclass to be treated as objects of its superclass, enabling runtime method resolution (e.g., using virtual functions).
* Therefore, the correct answer is `Dynamic polymorphism`.

</details>

### 238. Which of the following is NOT a form of polymorphism?

A. Method overloading\
B. Method overriding\
C. Subclassing\
D. Interface-based programming

<details>

<summary>Show me the answer</summary>

**Answer:** C. Subclassing

**Explanation:**

* **Subclassing** is a mechanism of inheritance, not a form of polymorphism.
* Therefore, the correct answer is `Subclassing`.

</details>

### 239. Which type of polymorphism allows an object of a subclass to be used in place of an object of its superclass?

A. Subtyping\
B. Method overloading\
C. Method overriding\
D. Interface-based programming

<details>

<summary>Show me the answer</summary>

**Answer:** A. Subtyping

**Explanation:**

* **Subtyping** allows an object of a subclass to be used in place of an object of its superclass, enabling polymorphism.
* Therefore, the correct answer is `Subtyping`.

</details>

### 240. Which of the following is correct?

A. Virtual functions must be members of some class, and the virtual function must be defined in the base class\
B. Virtual functions cannot be static members.\
C. Virtual Functions are accessed through object pointers.\
D. All of the Above

<details>

<summary>Show me the answer</summary>

**Answer:** D. All of the Above

**Explanation:**

* All the statements are correct:
  1. Virtual functions must be **members of a class** and are typically defined in the base class.
  2. Virtual functions **cannot** be static members.
  3. Virtual functions are accessed through **object pointers** to achieve runtime polymorphism.
* Therefore, the correct answer is `All of the Above`.

</details>
