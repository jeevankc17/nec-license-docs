# MCQs on Theory of Computation

### 1. Let $$R_1$$ and $$R_2$$ be regular sets defined over alphabet $$\sum$$ then

1. $$R_1 \cup R_2$$ is regular
2. $$\sum \cap R_2$$is not regular
3. $$R_1 \cap R_2$$ is not regular
4. $$R_2$$ is not regular

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$R_1 \cup R_2$$ is regular

**Explanation:**

* The union of two regular sets is also regular.

</details>

### 2. Consider the production of the grammar

$$S \rightarrow AA$$\
$$A \rightarrow aa$$\
$$A \rightarrow bb$$

Describe the language specified by the production grammar

1. $$L = \{aaaa, aabb, bbaa, bbbb\}$$
2. $$L = \{abab, abaa, aaab, baaa\}$$
3. $$L = \{aaab, baba, bbaa, bbbb\}$$
4. $$L = \{aaaa, ababa, bbaa, aaab\}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$L = \{aaaa, aabb, bbaa, bbbb\}$$

**Explanation:**

* The grammar generates strings of even length with $$a$$ and $$b$$.

</details>

### 3. Give a production grammar that specifies the language

$$L = \{a^i b^{2j} / i \geq 1\}$$

1. $$\{S \rightarrow aSbb, S \rightarrow abb\}$$
2. $$\{S \rightarrow aA, S \rightarrow b, A \rightarrow b\}$$
3. $$\{S \rightarrow aSb, S \rightarrow b\}$$
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\{S \rightarrow aSbb, S \rightarrow abb\}$$

**Explanation:**

* The grammar generates strings with $$a^i b^{2j}$$ where $$i \geq 1$$.

</details>

### 4. Which of the following string can be obtained by the language

$$L = \{a^i b^{2j} / i \geq 1\}$$

1. Aaabbbbbb
2. Abbabbba
3. aabb
4. aaaabbbbbb

<details>

<summary>Show me the answer</summary>

**Answer:** 4. aaaabbbbbb

**Explanation:**

* The string $$aaaabbbbbb$$ fits the pattern $$a^i b^{2j}$$ with $$i = 4$$ and $$j = 3$$.

</details>

### 5. Give a production grammar for the language $$L = \{x / x \in (a, b)^*$$, the number of $$a$$’s in $$x$$ is multiple of 3}

1. $$\{S \rightarrow bS, S \rightarrow b, S \rightarrow aA, S \rightarrow bA, A \rightarrow aB, B \rightarrow bB, B \rightarrow aS, S \rightarrow a\}$$
2. $$\{S \rightarrow aS, S \rightarrow bA, A \rightarrow bB, B \rightarrow bBa, B \rightarrow bB\}$$
3. $$\{S \rightarrow aaS, S \rightarrow bbA, A \rightarrow bB, B \rightarrow ba\}$$
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\{S \rightarrow bS, S \rightarrow b, S \rightarrow aA, S \rightarrow bA, A \rightarrow aB, B \rightarrow bB, B \rightarrow aS, S \rightarrow a\}$$

**Explanation:**

* The grammar ensures that the number of $$a$$’s in the string is a multiple of 3.

</details>

### 6. Let $$L1 = \{a^b / i > j\}$$ and $$L2 = \{a^b / i < j\}$$: the union of $$L1$$ and $$L2$$ is given by

1. $$\{a^b / i, j \geq 1\}$$
2. $$a^b / i > j \geq 1\}$$
3. $$\{a^b / i, j \geq 1\}$$
4. $$\{a^b / i, j \geq 1, i \neq j\}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$\{a^b / i, j \geq 1, i \neq j\}$$

**Explanation:**

* The union of $$L1$$ and $$L2$$ includes all strings where $$i \neq j$$.

</details>

### 7. Give a production grammar for the language

$$L = \{a^b / I, j \geq 1, i \neq j\}$$

1. $$\{S \rightarrow aS, S \rightarrow aB, B \rightarrow ab, A \rightarrow aaB, B \rightarrow b\}$$
2. $$\{S \rightarrow A, S \rightarrow C, A \rightarrow aA, A \rightarrow aB, B \rightarrow aBb, B \rightarrow ab, C \rightarrow Cb, E \rightarrow Bb\}$$
3. $$\{S \rightarrow A, A \rightarrow aA, A \rightarrow aB, B \rightarrow ab\}$$
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$\{S \rightarrow A, S \rightarrow C, A \rightarrow aA, A \rightarrow aB, B \rightarrow aBb, B \rightarrow ab, C \rightarrow Cb, E \rightarrow Bb\}$$

**Explanation:**

* The grammar generates strings where the number of $$a$$’s and $$b$$’s are not equal.

</details>

### 8. The production grammar is $$\{S \rightarrow aSbb, S \rightarrow abb\}$$ is

1. Type-3 grammar
2. Type-1 grammar
3. Type-3 grammar
4. Type-0 grammar

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Type-3 grammar

**Explanation:**

* The grammar is a regular (Type-3) grammar as it generates regular languages.

</details>

### 9. Which of the following statement is wrong?

1. A Turing machine cannot solve halting problem
2. Set of recursively enumerable languages is closed under union
3. A finite State Machine with 2 stacks
4. Context sensitive grammar can be recognized by a linearly bounded memory machine

<details>

<summary>Show me the answer</summary>

**Answer:** 3. A finite State Machine with 2 stacks

**Explanation:**

* A finite state machine cannot have 2 stacks; it is a characteristic of a pushdown automaton.

</details>

### 10. Which of the following statement is wrong?

1. Recursive language are closed under union
2. Recursive language are closed under union
3. If a language and its complement are both regular, then the language must be recursive
4. A language is accepted by FA if and only if it is recursive

<details>

<summary>Show me the answer</summary>

**Answer:** 4. A language is accepted by FA if and only if it is recursive

**Explanation:**

* A language accepted by a finite automaton (FA) is regular, not necessarily recursive.

</details>

### 11. Which of the following statement is wrong?

1. Every recursive language is recursively enumerable
2. A language is accepted by FA if and only if it is context free
3. Recursive languages are closed under intersection
4. A language is accepted by a FA if and only if it is right linear

<details>

<summary>Show me the answer</summary>

**Answer:** 2. A language is accepted by FA if and only if it is context free

**Explanation:**

* A language accepted by a finite automaton (FA) is regular, not necessarily context-free.

</details>

### 12. Which of the following statement is true?

1. All language can be generated by CFG
2. The number of symbols unnecessary to simulate a Turing Machine (TM) with $$m$$ symbols and $$n$$ states is $$mn$$
3. Any regular language has an equivalent CFG
4. The class of CFG is not closed under union

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Any regular language has an equivalent CFG

**Explanation:**

* Every regular language can be represented by a context-free grammar (CFG).

</details>

### 13. Recursively enumerable languages are not closed under

1. Complementation
2. Intersection
3. Union
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Complementation

**Explanation:**

* Recursively enumerable languages are not closed under complementation.

</details>

### 14. Regular expression $$(x/y)$$ denotes the set

1. $$\{xy, xy\}$$
2. $$\{x,y\}$$
3. $$\{xx,xy,yx,yy\}$$
4. $$\{x,y,xy\}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$\{x,y\}$$

**Explanation:**

* The regular expression $$(x/y)$$ represents the set $$\{x, y\}$$.

</details>

### 15. Regular expression $$x/y$$ denotes the set

1. $$\{x,y\}$$
2. $$\{xy\}$$
3. $$\{x\}$$
4. $$\{y\}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\{x,y\}$$

**Explanation:**

* The regular expression $$x/y$$ represents the set $$\{x, y\}$$.

</details>

### 16. The regular expressions denote a language comprising all possible strings of even length over the alphabet $$\{0,1\}$$

1. $$1 + 0 (1 + 0)^*$$
2. $$(1 + 0)$$
3. $$(0 + 1) (1 + 0)^*$$
4. $$(00 + 011 + 10)^*$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$(00 + 011 + 10)^*$$

**Explanation:**

* The regular expression $$(00 + 011 + 10)^*$$ generates all strings of even length over $$\{0,1\}$$.

</details>

### 17. The regular expressions denote zero or more instances of an $$x$$ or $$y$$ is

1. $$(x + y)$$
2. $$(x^* + y)$$
3. $$(x + y)^*$$
4. $$(xy)^*$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$(x + y)^*$$

**Explanation:**

* The regular expression $$(x + y)^*$$ denotes zero or more instances of $$x$$ or $$y$$.

</details>

### 18. The regular expression has all strings in which any number of 0's is followed by any number of 1's followed by any number of 2's is:

1. $$(0 + 1 + 2)^*$$
2. $$0^* + 1 + 2$$
3. $$0^* 1^* 2^*$$
4. $$(0 + 1)^* 2^*$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$0^* 1^* 2^*$$

**Explanation:**

* The regular expression $$0^* 1^* 2^*$$ generates strings with any number of 0's, followed by any number of 1's, followed by any number of 2's.

</details>

### 19. The regular expression have all strings of 0's and 1's with no two consecutive 0's, is

1. $$(0 + 1)$$
2. $$(0 + \epsilon) (1 + 10)^*$$
3. $$(0 + 1)^*$$
4. $$(0 + 1)^* 011$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$(0 + \epsilon) (1 + 10)^*$$

**Explanation:**

* The regular expression $$(0 + \epsilon) (1 + 10)^*$$ ensures no two consecutive 0's.

</details>

### 20. The regular expression with all strings of 0's and 1's with at least two consecutive 0's is:

1. $$1 + (10)^*$$
2. $$(0 + 1)^0$$
3. $$(0 + 1)^0(0 + 1)^*$$
4. $$0^1$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$(0 + 1)^0(0 + 1)^*$$

**Explanation:**

* The regular expression $$(0 + 1)^0(0 + 1)^*$$ generates strings with at least two consecutive 0's.

</details>

### 21. Which of the following is NOT the set of regular expression $$R = (ab + abb)^*bbab$$

1. Ababbbbab
2. Ababbabbbbab
3. Abbbab
4. Abababab

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Abababab

**Explanation:**

* The string $$abababab$$ does not fit the pattern $$(ab + abb)^*bbab$$.

</details>

### 22. Which string can be generated by

$$S \rightarrow aS/bA, A \rightarrow d/cA$$

1. Aabccd
2. Abcca
3. Adabcca
4. Abababd

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Aabccd

**Explanation:**

* The string $$aabccd$$ can be generated by the given grammar.

</details>

### 23. The regular sets are closed under

1. Union
2. Kleene's closure
3. Concentration
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* Regular sets are closed under union, Kleene's closure, and concatenation.

</details>

### 24. Which of the following statement(s) is (are) wrong?

1. The regular sets are closed under intersection
2. The class of regular sets is closed under substitution
3. The class of regular sets is closed under homomorphisms
4. Context sensitive Grammar (CGS) can be recognized by Finite State Machine

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Context sensitive Grammar (CGS) can be recognized by Finite State Machine

**Explanation:**

* Context-sensitive grammars cannot be recognized by finite state machines.

</details>

### 25. A Finite State Machine can be considered, having finite tape length without rewinding capability and unidirectional tape movement

1. Turing machine
2. Context free languages
3. Pushdown automata
4. Regular language

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Turing machine

**Explanation:**

* A finite state machine with finite tape length and unidirectional tape movement behaves like a Turing machine.

</details>

### 26. Which of the following statement is wrong?

1. A finite state machine can be considered to be a Turing Machine of finite tape length without rewinding capability and unidirectional tape movement
2. Turing machine is more powerful than finite state machine because it has the capability to remember arbitrary long sequences of input symbol
3. Palindromes can't be recognized by any Finite State Machine (FSM) because an FSM can't remember arbitrarily large amount of information
4. Turing machine is more powerful than FMS because it has no final state

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Turing machine is more powerful than FMS because it has no final state

**Explanation:**

* Turing machines are more powerful due to their ability to read/write and move in both directions, not because they lack a final state.

</details>

### 27. Let $$L$$ be a Language recognizable by Finite automation. The Language REVERSE $$L' = \{ \omega / \omega$$ is the reverse of $$v$$ where $$v \in L\}$$ is

1. Regular language
2. Context-free language
3. Context-sensitive language
4. Recursively enumerable language

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Regular language

**Explanation:**

* The reverse of a regular language is also regular.

</details>

### 28. The Grammar $$G = <\{S\}, \{0, 1\}, P, S>$$ Where $$p$$ is $$S \rightarrow 0SI, S \rightarrow 0S, S \rightarrow SI, S \rightarrow 0$$ is

1. Recursively enumerable language
2. Regular expression
3. Context-sensitive language
4. Context free language

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Context free language

**Explanation:**

* The grammar is context-free as it generates a context-free language.

</details>

### 29. Any given transition graph has an equivalent

1. Regular expression
2. DFSM (Deterministic Finite State Machine)
3. NDFSM
4. All of them

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of them

**Explanation:**

* A transition graph can be converted into a regular expression, DFSM, or NDFSM.

</details>

### 30. The intersection of CFL and regular language

1. Is always regular
2. Both (A) and (C) above
3. Is always context-free
4. Need not be regular

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Both (A) and (C) above

**Explanation:**

* The intersection of a context-free language (CFL) and a regular language is always context-free.

</details>

### 31. Context-sensitive Grammar can be recognized by

1. Deterministic pushdown Automata
2. Non-deterministic pushdown automata
3. Finite State Machine (FSM)
4. Linearly Bounded Memory Machine

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Linearly Bounded Memory Machine

**Explanation:**

* Context-sensitive grammars are recognized by linearly bounded memory machines.

</details>

### 32. Which of the following regular expression identity's are true?

1. $$r' = r$$
2. $$rS' = r + S$$
3. $$(r + S)' = r' + S'$$
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$r' = r$$

**Explanation:**

* The identity $$r' = r$$ is true for regular expressions.

</details>

### 33. The Language $$L = \{0:1n2k3k \text{ where } n, k > 0\}$$

1. Context-sensitive language
2. Context-free language
3. Regular languages
4. Recursively enumerable language

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Context-free language

**Explanation:**

* The language $$L$$ is context-free as it can be generated by a context-free grammar.

</details>

### 34. Consider the production grammar

$$S \rightarrow XY/XS$$\
$$X \rightarrow a/aX$$\
$$Y \rightarrow b$$\
Which of the following regular expressions corresponding to the production grammar?

1. $$(ab)$$
2. $$a(ab)^{b}$$
3. $$a^a b^b$$
4. $$a^a b$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$a^a b$$

**Explanation:**

* The grammar generates strings of the form $$a^a b$$.

</details>

### 35. Which of the following sentences is generated by production grammar?

$$S \rightarrow aSbX$$\
$$X \rightarrow dccX$$

1. Abblod
2. aabccd
3. aabd
4. ababccd

<details>

<summary>Show me the answer</summary>

**Answer:** 2. aabccd

**Explanation:**

* The string $$aabccd$$ can be generated by the given grammar.

</details>

### 36. Consider a NDFA shown in figure below. The Automation accepts

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

1. All words that contain the substring ab and end with a
2. All words that contain the substring ba and end with a
3. All words that end with a, but not the null string $$\epsilon$$
4. All words that end with a, and also the null string

<details>

<summary>Show me the answer</summary>

**Answer:** 3. All words that end with a, but not the null string $$\epsilon$$

**Explanation:**

* The NDFA accepts words ending with $$a$$ but not the null string.

</details>

### 37. Which of the following is accepted by deterministic pushdown machine but not accepted by non-deterministic pushdown machine (NDPDM)?

1. Strings end with a particular alphabet
2. All strings in which a given symbol is present at least twice
3. Even palindrome
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Even palindrome

**Explanation:**

* Even palindromes are accepted by deterministic pushdown machines but not by non-deterministic ones.

</details>

### 38. Consider the following grammar

$$X \rightarrow Xx/Yy$$\
$$X \rightarrow Yy/Z\omega$$\
$$Y \rightarrow y/Yw$$\
$$Z \rightarrow y$$\
Which of the regular expressions describe the same set of strings as the grammar?

1. $$x\omega y + x\omega yx + y\omega x$$
2. $$x\omega y + x\omega xy + y\omega x$$
3. $$x\omega y + x\omega xyx + y\omega x + y\omega x$$
4. $$x\omega xy + x\omega \omega y + y\omega x$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$x\omega y + x\omega yx + y\omega x$$

**Explanation:**

* The regular expression $$x\omega y + x\omega yx + y\omega x$$ matches the strings generated by the grammar.

</details>

### 39. Which of the following instance of the post correspondence problem have a viable sequence?

1. $$\{(x, xx), (xx, xyx), (xyx, yxx), (yyxx, xyyx)\}$$
2. $$\{(yx, yxy), (xyy, yy), (yyxy, yyy)\}$$
3. $$\{(yx, yxx), (xy, yyy), (yy, y)\}$$
4. None of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\{(yx, yxx), (xy, yyy), (yy, y)\}$$

**Explanation:**

* The instance $$\{(yx, yxx), (xy, yyy), (yy, y)\}$$ has a viable sequence.

</details>

### 40. Which of the following statement(s) is (are) correct?

1. Recursively languages are closed under complementation
2. If a language and its complement are both recursively enumerable then language is recursive
3. Set of recursively enumerable language is closed under union
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* All the statements are correct regarding recursively enumerable languages.

</details>

### 41. Consider the following FA shown in figure below. The language accepted by the FA is

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

1. $$(a + b)^* b$$
2. $$(a + b)^* b$$
3. $$a^* b$$
4. $$a^* b$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$(a + b)^* b$$

**Explanation:**

* The FA accepts all strings ending with $$b$$.

</details>

### 42. Which of the following statement is wrong

1. Any regular language has an equivalent context-free grammar
2. Some non-regular languages can't be generated by any context-free grammar
3. The intersection of context free languages and a regular language is always context-free
4. All language can be generated by CFG

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All language can be generated by CFG

**Explanation:**

* Not all languages can be generated by context-free grammars (CFGs).

</details>

### 43. Consider a grammar

$$S \rightarrow SS$$\
$$S \rightarrow 0S1$$\
$$S \rightarrow 1S0$$\
$$S \rightarrow \epsilon$$\
The grammar will generate

1. Regular language
2. Context-free language
3. Context sensitive language
4. Recursively enumerable language

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Recursively enumerable language

**Explanation:**

* The grammar generates a recursively enumerable language.

</details>

### 44. The language constructs which are useful in describing nested structures such as balanced parenthesis

1. Regular expression
2. Non-context free grammars
3. Context-free grammar
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Context-free grammar

**Explanation:**

* Context-free grammars are used to describe nested structures like balanced parentheses.

</details>

### 45. A grammar that produce more than one parse free for same sentence is called

1. Ambiguous
2. Regular
3. Unambiguous
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Ambiguous

**Explanation:**

* A grammar that produces more than one parse tree for the same sentence is ambiguous.

</details>

### 46. Which of the regular expression denotes a language containing all possible strings over the alphabet $$\{a, b\}$$?

1. $$a^* b^*$$
2. $$(a, b)^*$$
3. $$(ab)^*$$
4. $$(a + b)^*$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$(a + b)^*$$

**Explanation:**

* The regular expression $$(a + b)^*$$ denotes all possible strings over $$\{a, b\}$$.

</details>

### 47. Palindromes can't be recognized by any Finite State Machine because

1. An FSM can't remember arbitrarily large amount of information
2. An FSM can't fix the mid-point
3. FSM can't find whether the second half of the string matches the first half
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* Finite State Machines (FSMs) cannot recognize palindromes due to their inability to remember large amounts of information and determine mid-points.

</details>

### 48. A language $$L$$ is accepted by FA if and only if it is

1. Context-free
2. Recursive
3. Context sensitive
4. Right-linear

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Right-linear

**Explanation:**

* A language accepted by a finite automaton (FA) is right-linear.

</details>

### 49. A language is denoted by a regular expression $$L = \{x^*(x/y)x\}$$. Which of the following is not a legal string within $$L$$?

1. Yx
2. yxx
3. x
4. xy xyx

<details>

<summary>Show me the answer</summary>

**Answer:** 4. xy xyx

**Explanation:**

* The string $$xy xyx$$ does not fit the pattern $$x^*(x/y)x$$.

</details>

### 50. Can a DFA simulate NFA?

1. No
2. Sometimes
3. Yes
4. Depends on NFA

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Yes

**Explanation:**

* A Deterministic Finite Automaton (DFA) can simulate a Non-deterministic Finite Automaton (NFA).

</details>

### 51. Let $$L$$ be set of strings from alphabet. The Kleen closure of $$L$$ is given as

1. $$L' = \bigcup_{i=0} L^i$$
2. $$L^+ = \bigcup_{i=1} L^i$$
3. $$L' = \bigcup_{i=0} L^i$$
4. $$L^+ = \bigcup_{i=1} L^i$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$L' = \bigcup_{i=0} L^i$$

**Explanation:**

* The Kleene closure of $$L$$ is defined as $$L' = \bigcup_{i=0} L^i$$.

</details>

### 52. If a source language supports some macro pre-processor functions then these functions can be implemented in

1. Lexical analysis phase
2. Code generation
3. Parsing
4. Syntax analysis phase

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Lexical analysis phase

**Explanation:**

* Macro pre-processor functions are typically implemented in the lexical analysis phase.

</details>

### 53. If $$e1$$ and $$e2$$ are the regular expressions denoting the language $$L1$$ and $$L2$$ respectively, then which of the following is wrong?

1. $$\{e_1\} + \{e_2\}$$ is regular expression denoting $$L1 \cup L2$$
2. $$e2 e3$$ regular expression denoting $$L1L2$$
3. $$\emptyset$$ is not regular expression
4. $$\{e_1\}^*$$ is regular expression denoting $$L^*$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$\emptyset$$ is not regular expression

**Explanation:**

* The empty set $$\emptyset$$ is a valid regular expression.

</details>

### 54. The regular expression $$(a + b)^*$$ denotes all strings

1. With zero or more instances of $$a$$ and $$b$$ both simultaneously
2. With one or more instances of $$a$$ and $$b$$
3. Equal to regular expression $$(a^* + b)^*$$
4. Any combination of $$a$$'s and $$b$$'s including null string

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Any combination of $$a$$'s and $$b$$'s including null string

**Explanation:**

* The regular expression $$(a + b)^*$$ denotes any combination of $$a$$'s and $$b$$'s, including the null string.

</details>

### 55. Every CFG can be transferred into equivalent

1. Greiback normal form
2. Either (a) or (b)
3. CNF
4. All of the above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of the above

**Explanation:**

* Every context-free grammar (CFG) can be converted into Greibach Normal Form (GNF) or Chomsky Normal Form (CNF).

</details>

### 56. Consider the following regular expression

$$R = (ab + abb)^*$$\
Which of the following is not in $$R$$?

1. Ababab
2. Abbab
3. Abababbbab
4. Abbabbbab

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Ababab

**Explanation:**

* The string $$ababab$$ does not fit the pattern $$(ab + abb)^*$$.

</details>

### 57. In the figure shown, a DFA $$m$$ has start state $$A$$ and accepting state $$D$$. Which of the following regular expression denoted the set of all words accepted by $$m$$?

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

1. 001
2. $$(0 + 1)^* 011$$
3. $$10^* 1^* 0$$
4. $$1^* 0^* 001$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$(0 + 1)^* 011$$

**Explanation:**

* The regular expression $$(0 + 1)^* 011$$ matches the language accepted by the DFA.

</details>

### 58. Which of the following is most general phase-structured grammar?

1. Regular
2. Context-free
3. Context-sensitive
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Context-sensitive

**Explanation:**

* Context-sensitive grammars are the most general phase-structured grammars.

</details>

### 59. Context-free grammar can be recognized by

1. Finite state automation
2. 2-way linear bounded automata
3. Push down automata
4. Both (B) and (C) above

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both (B) and (C) above

**Explanation:**

* Context-free grammars can be recognized by pushdown automata and 2-way linear bounded automata.

</details>

### 60. Context sensitive grammar (CSG) can be recognized by

1. Finite state automata
2. Push down automata
3. 2-way linear bounded automata
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. 2-way linear bounded automata

**Explanation:**

* Context-sensitive grammars are recognized by 2-way linear bounded automata.

</details>

### 61. Consider the grammar $$G$$, where the productions are numbered as shown

1. $$E \rightarrow E + T$$
2. $$E \rightarrow T$$
3. $$T \rightarrow T^* F$$
4. $$T \rightarrow F$$
5. $$F \rightarrow e$$
6. $$F \rightarrow a$$

If a shift-reduce (bottom-up) parser writes the production number used immediately after performing any reduction, what will be printed if the parser input is $$a + a * a$$?

1. 62461
2. 6262441
3. 64642331
4. 64264631

<details>

<summary>Show me the answer</summary>

**Answer:** 2. 6262441

**Explanation:**

* The sequence of reductions for the input $$a + a * a$$ corresponds to the production numbers 6, 2, 6, 2, 4, 4, 1.

</details>

### 62. Which sentence can be generated by

$$S \rightarrow As/bA$$\
$$A \rightarrow d/ccA$$

1. Becddd
2. abbbd
3. aabccd
4. ababccd

<details>

<summary>Show me the answer</summary>

**Answer:** 3. aabccd

**Explanation:**

* The string $$aabccd$$ can be generated by the given grammar.

</details>

### 63. Which of the following recognizes variables prefixes of the grammar?

1. DFA
2. NFA
3. Both errors can be detected
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. DFA

**Explanation:**

* A Deterministic Finite Automaton (DFA) can recognize variable prefixes of the grammar.

</details>

### 64. Dynamic errors can be detected

1. Only at compile time
2. Only at run time
3. Both at compile time and at run time
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Only at run time

**Explanation:**

* Dynamic errors are detected during the execution (run time) of the program.

</details>

### 65. Compiler is a software which converts

1. High level language program into low level language program
2. Source program into object program
3. Program in high level language into program in low level language
4. Program in source language into program in object language

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Source program into object program

**Explanation:**

* A compiler converts the source program into an object program.

</details>

### 66. The language $$L = \{a^n b^m c^n b^m / n \geq 1, m \geq 1\}$$.

1. Is a context free
2. Both (a) and (b)
3. Is not context free
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Is not context free

**Explanation:**

* The language $$L$$ is not context-free as it requires matching counts of $$a$$'s, $$b$$'s, and $$c$$'s.

</details>

### 67. The language $$L = \{0n 1n 2n \text{ where } n > 0\}$$ is a

1. CFL
2. Context-sensitive language
3. Regular language
4. Recursive enumerable language

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Context-sensitive language

**Explanation:**

* The language $$L$$ is context-sensitive as it requires matching counts of $$0$$'s, $$1$$'s, and $$2$$'s.

</details>

### 68. Which of the choice in an operator grammar equivalent for

$$S \rightarrow SAS/a$$\
$$A \rightarrow bSb/b$$\
Assume $$S$$ is start symbol

1. $$S \rightarrow SAS/a, A \rightarrow bSb/b$$
2. $$S \rightarrow SbAbS/a, A \rightarrow b$$
3. $$S \rightarrow SbSbS/SbS/a$$
4. $$S \rightarrow SbS/b$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$S \rightarrow SbSbS/SbS/a$$

**Explanation:**

* The grammar $$S \rightarrow SbSbS/SbS/a$$ is equivalent to the given operator grammar.

</details>

### 69. Let $$S$$ and $$T$$ be language over $$\Sigma = \{a, b\}$$ represent by regular expression $$(a + b^*) *$$ and $$(a + b)^*$$ respectively then

1. $$S \subset T$$
2. $$T \subset S$$
3. $$S = T$$
4. $$S \cap T = 0$$

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$S = T$$

**Explanation:**

* The regular expressions $$(a + b^*) *$$ and $$(a + b)^*$$ are equivalent.

</details>

### 70. Let $$L$$ denote the language generated by the grammar $$S \rightarrow 050100$$ then

1. $$L = 0^*$$
2. $$L$$ is regular but not $$0^*$$
3. $$L$$ is context free but not regular
4. $$L$$ is not context free

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$L$$ is context free but not regular

**Explanation:**

* The language $$L$$ generated by the grammar is context-free but not regular.

</details>

### 71. Consider the regular expression $$(0 + 1) (0 + 1)^*$$......n times. The minimum state finite automation that recognizes the language represented by this regular expression contains

1. $$n$$ states
2. $$n + 2$$ states
3. $$n + 1$$ states
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$n + 1$$ states

**Explanation:**

* The minimum state finite automaton for the regular expression $$(0 + 1) (0 + 1)^*$$ repeated $$n$$ times requires $$n + 1$$ states.

</details>

### 72. A grammar that is both left and right recursive for non-terminal is

1. Ambiguous
2. Information is not sufficient
3. Unambiguous
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Ambiguous

**Explanation:**

* A grammar that is both left and right recursive for a non-terminal is ambiguous.

</details>

### 73. If the regular set $$A$$ is represented by $$A = (01 + 1)^*$$ and the regular set $$B$$ represented by $$B = [(01)^* 1^*]$$ then

1. $$A \subset B$$
2. $$A$$ and $$B$$ are uncomparable
3. $$B \subset A$$
4. $$A = B$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$A = B$$

**Explanation:**

* The regular sets $$A$$ and $$B$$ are equivalent.

</details>

### 74. Which of the following can be recognized by a DFA

1. The number 1, 2, 4 ......$$x^n$$......written in binary
2. The number 1, 2, 4, ......$$x^n$$......written in un binary
3. The set of binary strings in which the number of zeros is the same as the number of ones
4. The set $$\{1, 101, 11011, 1110111 ...\}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. The number 1, 2, 4 ......$$x^n$$......written in binary

**Explanation:**

* A DFA can recognize the set of numbers written in binary.

</details>

### 75. The string 1101 does not belong to the set represented by

1. $$110'(0+1)$$
2. $$(10)^* (01)^* (00 + 11)^*$$
3. $$1(0 + 1)^* 101$$
4. $$[00+(11)^* 0]$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$(10)^* (01)^* (00 + 11)^*$$

**Explanation:**

* The string 1101 does not fit the pattern $$(10)^* (01)^* (00 + 11)^*$$.

</details>

### 76. Regarding the power of recognition of language, which of the following statements is false?

1. The NDFA is equivalent to DFA
2. NPDA is equivalent to DPDA
3. Non-deterministic Turing machines are equivalent to deterministic push-down automata
4. Multi-tape Turing-machine are equivalent to Single-Tape Turing machine

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Non-deterministic Turing machines are equivalent to deterministic push-down automata

**Explanation:**

* Non-deterministic Turing machines are more powerful than deterministic push-down automata.

</details>

### 77. Let $$*$$ be defined as $$a * b = a + y$$. Let $$c = a * b$$; value of $$c * a$$ is

1. $$a + b$$
2. $$a$$
3. $$0$$
4. $$1$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$a$$

**Explanation:**

* The operation $$c * a$$ results in $$a$$.

</details>

### 78. Which one of the following regular expressions over $$\{0, 1\}$$ denotes the set of all string not containing 100 as a substring?

1. $$0' (1 + 0)$$
2. $$1' 01$$
3. $$0' 1010$$
4. $$0' (10 + 1)$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$0' (10 + 1)$$

**Explanation:**

* The regular expression $$0' (10 + 1)$$ ensures that the substring 100 is not present.

</details>

### 79. Which of the following languages over $$\{a, b, c\}$$ is accepted by deterministic push down automata?

1. $$\{\omega \subset \omega^b / \omega \in (a, b)\}$$
2. $$\{\omega \omega^b / \omega \in \{a, b, c\}\}$$
3. $$\{a^b c^m / n \geq 0\}$$
4. $$\{\omega / \omega \text{ is palindrome } \{a, b, c\}\}$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$\{\omega \subset \omega^b / \omega \in (a, b)\}$$

**Explanation:**

* The language $$\{\omega \subset \omega^b / \omega \in (a, b)\}$$ is accepted by a deterministic pushdown automaton.

</details>

### 80. Two of following four regular expressions are equivalent, which two?

1. $$(00)^* (\epsilon + 0)$$
2. $$(00)^*$$
3. $$0^*$$
4. $$0(00)^*$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$(00)^*$$ and 3. $$0^*$$

**Explanation:**

* The regular expressions $$(00)^*$$ and $$0^*$$ are equivalent.

</details>

### 81. The major difference between a Moore and Mealy machine is that

1. The output of the former depends only on the present state and present input
2. The output of the former depends only on the present state
3. The output of the former depends only on the present input
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. The output of the former depends only on the present state

**Explanation:**

* In a Moore machine, the output depends only on the present state, while in a Mealy machine, it depends on both the present state and input.

</details>

### 82. Finite state machine can recognize

1. Any grammar
2. Any unambiguous grammar
3. Only CG
4. Only regular grammar

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Only regular grammar

**Explanation:**

* Finite state machines can recognize only regular grammars.

</details>

### 83. Pumping Lemma is generally used for proving

1. A given grammar is regular
2. A given grammar is not regular
3. Whether two given regular expressions are equivalent or not
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. A given grammar is not regular

**Explanation:**

* The Pumping Lemma is used to prove that a language is not regular.

</details>

### 84. Which of the following is not regular?

1. String of 0's whose length is a perfect square
2. Set of all palindrome made up of 0's and 1's
3. Set of all 0's whose length is prime
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* None of the given languages are regular.

</details>

### 85. Choose the correct statements

1. $$A = \{a^n b^n / n = 0, 1, 2, 3, \ldots\}$$ is regular language
2. The set $$B$$ of all strings of equal number of $$a$$'s and $$b$$'s defines a regular language
3. $$L(A^* B^*) \cap B$$ gives the set $$A$$
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of these

**Explanation:**

* None of the statements are correct regarding regular languages.

</details>

### 86. The basic limitations of finite state machine is that

1. It cannot remember arbitrary large amount of information
2. It cannot recognize grammars are regular
3. It sometimes recognize grammars are not regular
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. It cannot remember arbitrary large amount of information

**Explanation:**

* Finite state machines have limited memory and cannot remember arbitrarily large amounts of information.

</details>

### 87. Palindrome cannot be recognized by any FSM because

1. An FSM can't remember arbitrary information
2. An FSM can't deterministically fix the mid point
3. Both (A) and (B)
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Both (A) and (B)

**Explanation:**

* Finite state machines cannot recognize palindromes due to their inability to remember arbitrary information and fix the mid-point.

</details>

### 88. An FSM can be considered to be a TM (Turing machine)

1. Of finite tape length, rewinding capability and unidirectional tape movement
2. Of finite tape length, without rewinding and unidirectional tape movement
3. Of finite tape length, rewinding capability and bidirectional tape movement
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Of finite tape length, without rewinding and unidirectional tape movement

**Explanation:**

* A finite state machine can be considered a Turing machine with finite tape length, no rewinding, and unidirectional tape movement.

</details>

### 89. Turing machine is more powerful than FSM because

1. Tape movement is confined to one direction
2. It has no finite state control
3. It has the capability to remember arbitrary long sequence of input symbols
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. It has the capability to remember arbitrary long sequence of input symbols

**Explanation:**

* Turing machines are more powerful due to their ability to remember arbitrarily long sequences of input symbols.

</details>

### 90. For given picture the FSM recognizes

1. All strings
2. $$\epsilon$$-alone
3. No strings
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$\epsilon$$-alone

**Explanation:**

* The FSM recognizes only the empty string $$\epsilon$$.

</details>

### 91. In given picture, the FSM represents

1. Mealy machine
2. Kleen machine
3. Moore machine
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Mealy machine

**Explanation:**

* The FSM represents a Mealy machine as its output depends on both the current state and input.

</details>

### 92. The language of all words with at least $$2a$$'s can be described by the regular expression:

1. $$(ab)^*a$$ and $$a(ba)^*$$
2. $$b^*a^*b^*a(a + b)^*$$
3. $$(a + b)^*ab^*a(a + b)^*$$
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* All the given regular expressions describe the language of words with at least $$2a$$'s.

</details>

### 93. Which of the following pairs of regular expressions are not equivalent?

1. $$(ab)^*a$$ and $$a(ba)^*$$
2. $$b^*a^*b^*a(a + b)^*$$
3. $$(a + b)^*ab^*a(a + b)^*$$
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$b^*a^*b^*a(a + b)^*$$

**Explanation:**

* The regular expression $$b^*a^*b^*a(a + b)^*$$ is not equivalent to the others.

</details>

### 94. Any given transition graph has an equivalent

1. Regular expression
2. NDFSM
3. DFSM
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* A transition graph can be converted into a regular expression, NDFSM, or DFSM.

</details>

### 95. The following CFG

$$S \rightarrow aS/bS/a/b$$ is equivalent to regular expression

1. $$(a + b)$$
2. $$(a + b)(a + b)$$
3. $$(a + b)(a + b)$$
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$(a + b)(a + b)$$

**Explanation:**

* The CFG is equivalent to the regular expression $$(a + b)(a + b)$$.

</details>

### 96. Any string of terminals that can be generated by the following CFG is

$$S \rightarrow XY$$\
$$X \rightarrow ax/bx/a$$\
$$Y \rightarrow Ya/Yb/a$$

1. Has at least one 'b'
2. Has no consecutive $$a$$'s or $$b$$'s
3. Should end in a 'a'
4. Has at least two $$a$$'s

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Has at least two $$a$$'s

**Explanation:**

* The CFG generates strings with at least two $$a$$'s.

</details>

### 97. The following CFG

$$S \rightarrow aB/Ba$$\
$$A \rightarrow b/aS/Baa$$\
$$B \rightarrow a/bS/aBB$$\
Generates strings of terminals that have

1. Equal number of $$a$$'s and $$b$$'s
2. Odd number of $$a$$'s and odd number of $$b$$'s
3. Even number of $$a$$'s and even number of $$a$$'s
4. Odd number of $$a$$'s and even number of $$a$$'s

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Equal number of $$a$$'s and $$b$$'s

**Explanation:**

* The CFG generates strings with an equal number of $$a$$'s and $$b$$'s.

</details>

### 98. The set $$\{a^n b^n / n = 1, 2, 3, \ldots\}$$ can be generated by the CFG

1. $$S \rightarrow ab/aSb$$
2. $$S \rightarrow ab/aSb/\epsilon$$
3. $$S \rightarrow aaSbb/ab$$
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$S \rightarrow ab/aSb$$

**Explanation:**

* The CFG $$S \rightarrow ab/aSb$$ generates the set $$\{a^n b^n / n = 1, 2, 3, \ldots\}$$.

</details>

### 99. Choose the correct statement

1. All language can be generated CFG
2. Any regular language has an equivalent CFG
3. Some non-regular languages can't be generated by an CFG
4. Some regular language can't be simulated by an FSM

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Any regular language has an equivalent CFG

**Explanation:**

* Every regular language can be represented by a context-free grammar (CFG).

</details>

### 100. Which of the following CFG's can't be simulated by an FSM?

1. $$S \rightarrow Sa/a$$
2. $$S \rightarrow abX, X \rightarrow cY, Y \rightarrow a/aX$$
3. $$S \rightarrow aSb/ab$$
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$S \rightarrow aSb/ab$$

**Explanation:**

* The CFG $$S \rightarrow aSb/ab$$ generates a non-regular language and cannot be simulated by an FSM.

</details>

### 101. The set $$A = \{a^n b^n c^n / n = 1, 2, 3, \ldots\}$$ is an example of

1. Regular language
2. Non context free language
3. Context free language
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Non context free language

**Explanation:**

* The language $$A = \{a^n b^n c^n / n = 1, 2, 3, \ldots\}$$ is not context-free as it requires matching counts of $$a$$'s, $$b$$'s, and $$c$$'s.

</details>

### 102. The intersection of CFL and a regular language

1. Need not be regular
2. Is always regular
3. Need not be context free
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Is always regular

**Explanation:**

* The intersection of a context-free language (CFL) and a regular language is always context-free.

</details>

### 103. Choose the correct statements:

1. The power of DFSM and NDFSM are same.
2. The power of DFSM and NDFSM are different.
3. The power of DPDM and NDPDM are different.
4. Both (A) and (C) above.

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both (A) and (C) above.

**Explanation:**

* Deterministic and non-deterministic finite state machines (DFSM and NDFSM) are equivalent in power, while deterministic and non-deterministic pushdown automata (DPDM and NDPDM) are not.

</details>

### 104. Which of the following is accepted by an NDPDM but not by a DPDM?

1. All strings in which a given symbol is present at least twice
2. Even palindromes.
3. Strings ending with a particular alphabet.
4. None of these.

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Even palindromes.

**Explanation:**

* Even palindromes are accepted by non-deterministic pushdown automata (NDPDM) but not by deterministic pushdown automata (DPDM).

</details>

### 105. Bounded minimization is a technique for

1. Proving whether a promotive recursive function is Turing computable or not.
2. Providing whether a primitive recursive function is a total function or not.
3. Generating primitive recursive functions.
4. Generating partial recursive functions.

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Generating primitive recursive functions.

**Explanation:**

* Bounded minimization is used to generate primitive recursive functions.

</details>

### 106. Universal Turing machine influenced the concept of

1. Stored program computers
2. Interpretive implementation of programming language
3. Computability
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* The Universal Turing Machine influenced the concepts of stored program computers, interpretive implementation of programming languages, and computability.

</details>

### 107. The statement "A Turing machine can't solve halting problem" is

1. True
2. Still at open question
3. False
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. True

**Explanation:**

* The halting problem is undecidable, meaning no Turing machine can solve it.

</details>

### 108. If there exists a TM which when applied to any problem in the class, terminates, if the correct answer is yes and may or may not terminate otherwise is said to be

1. Stable
2. Partially solvable
3. Unstable
4. Unstable

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Partially solvable

**Explanation:**

* A problem is partially solvable if a Turing machine terminates for "yes" instances but may not terminate for "no" instances.

</details>

### 109. The vernacular language English, if considered a formal language is a

1. Regular language
2. Context sensitive language
3. Context free language
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Context free language

**Explanation:**

* English, as a formal language, is context-free.

</details>

### 110. P, Q, R are three languages, if P and R are regular and if PQ = R then

1. Q = R
2. Both A and B
3. Q = P
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of these

**Explanation:**

* The relationship between P, Q, and R cannot be determined from the given information.

</details>

### 111. Consider the grammar

$$S \rightarrow PQ/SQ/PS$$\
$$P \rightarrow X,$$\
$$Q \rightarrow Y$$\
To get string of n terminals, the number of productions to be used is

1. N
2. n + 1
3. 2^n
4. 2^{n-1}

<details>

<summary>Show me the answer</summary>

**Answer:** 4. 2^{n-1}

**Explanation:**

* The number of productions required to generate a string of $$n$$ terminals is $$2^{n-1}$$.

</details>

### 112. The following grammar

$$S \rightarrow aab/bac/ab$$\
$$S \rightarrow abb/ab$$\
$$S \rightarrow aS/b$$\
$$B \rightarrow bab/b$$

1. CFG
2. Context sensitive
3. Regular
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Context sensitive

**Explanation:**

* The grammar is context-sensitive as it allows for context-dependent productions.

</details>

### 113. Let $$A = \{0,1\}$$ and $$L = A^*$$. Let $$R = \{0^n, n > 0\}$$ then the language $$L \cup R$$ and $$R$$ are respectively.

1. Regular, regular
2. Regular, not regular
3. Not regular, regular
4. Not regular, not regular

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Regular, not regular

**Explanation:**

* $$L \cup R$$ is regular, while $$R$$ is not regular.

</details>

### 114. Which of the following is not possible algorithmically?

1. Regular grammar to context free grammar
2. Non-deterministic finite state Automata to deterministic FSA
3. Non-deterministic PDA to deterministic PDA
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Non-deterministic PDA to deterministic PDA

**Explanation:**

* Converting a non-deterministic PDA to a deterministic PDA is not always possible algorithmically.

</details>

### 115. As FSM can be used to add two given integers. That is

1. True
2. False
3. May be true
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. False

**Explanation:**

* Finite state machines (FSMs) cannot perform arithmetic operations like addition.

</details>

### 116. A grammar is said to be in CNF, if all the productions are of the form $$A \rightarrow BC$$ or $$A \rightarrow a$$. Let $$G$$ be a CFG in CNF. To derive a string of terminals of length $$x$$, the number of production to be used is

1. $$2x - 1$$
2. $$2x$$
3. $$2x + 1$$
4. $$2^x$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$2x - 1$$

**Explanation:**

* In Chomsky Normal Form (CNF), deriving a string of length $$x$$ requires $$2x - 1$$ productions.

</details>

### 117. In given fig

1. Both are equivalent
2. The first FSM accepts nothing
3. The second FSM accepts $$\epsilon$$-only
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of these

**Explanation:**

* The given FSMs are not equivalent, and neither accepts only $$\epsilon$$.

</details>

### 118. The number of tokens in the Fortran statement DO 10 I = 1.25 is

1. 3
2. 4
3. 5
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. None of these

**Explanation:**

* The number of tokens in the statement is 6.

</details>

### 119. The word 'formal' in formal languages means

1. The symbols used have well-defined language meaning
2. They are unnecessary in reality
3. Only the form of the string of symbols is significant
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Only the form of the string of symbols is significant

**Explanation:**

* In formal languages, the structure (form) of the string is significant, not the meaning.

</details>

### 120. If $$A = \{0, 1\}$$, the number of possible strings of length 'n' is

1. $$n!$$
2. $$n \times n$$
3. $$n^n$$
4. $$2^n$$

<details>

<summary>Show me the answer</summary>

**Answer:** 4. $$2^n$$

**Explanation:**

* For alphabet $$A = \{0, 1\}$$, the number of possible strings of length $$n$$ is $$2^n$$.

</details>

### 121. A mealy machine

1. May be machine
2. Has an equivalent more
3. Only context-free grammar
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Has an equivalent more

**Explanation:**

* A Mealy machine has an equivalent Moore machine.

</details>

### 122. The recognizing capability of NDFSM and DFSM

1. May be different
2. Must be same
3. Must be different
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Must be same

**Explanation:**

* Non-deterministic finite state machines (NDFSM) and deterministic finite state machines (DFSM) have the same recognizing capability.

</details>

### 123. Which of the following are not regular

1. String of 0's whose length is a perfect square
2. Set of all palindromes made up of 0's and 1's
3. Strings of 0's, whose length is a prime number
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* None of the given languages are regular.

</details>

### 124. Which of the following pairs of regular expressions are equivalent?

1. $$1(01)^*$$ and $$(10)^*$$
2. $$y^+$$ and $$y^*y^+$$
3. $$Y(yy)^*$$ and $$(yy)^*y$$
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* All the given pairs of regular expressions are equivalent.

</details>

### 125. The logic of pumping Lemma is a good example of

1. The pigeon-hole principle
2. The divide and conquer technique
3. Recursion
4. Iteration

<details>

<summary>Show me the answer</summary>

**Answer:** 1. The pigeon-hole principle

**Explanation:**

* The Pumping Lemma is based on the pigeon-hole principle.

</details>

### 126. The FSM pictured shown in the figure

1. Mealy machine
2. Kleene machine
3. Moore machine
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Mealy machine

**Explanation:**

* The FSM represents a Mealy machine as its output depends on both the current state and input.

</details>

### 127. The above machine

1. Complements a given bit pattern
2. Generates all strings of 0's and 1's
3. Adds 1 to a given bit pattern
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Complements a given bit pattern

**Explanation:**

* The machine complements a given bit pattern.

</details>

### 128. The language of all words with at least 2a's can be described by the regular expression

1. $$(a + b)^*a(a + b)^*a(a + b)^*$$
2. $$b^*a^*b^*a(a + b)^*$$
3. $$(a + b)^*ab^*a(a + b)^*$$
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* All the given regular expressions describe the language of words with at least 2a's.

</details>

### 129. For the following figure

1. Complements a given bit pattern
2. Finds 2's complement of a given bit pattern
3. Increment a given bit pattern by 1
4. Change the sign bit

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Increment a given bit pattern by 1

**Explanation:**

* The machine increments a given bit pattern by 1.

</details>

### 130. For which of the following applications regular expression can't be used?

1. Designing compilers
2. Simulating sequential circuits
3. Developing text editors
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Simulating sequential circuits

**Explanation:**

* Regular expressions are not suitable for simulating sequential circuits.

</details>

### 131. The following CFG

$$S \rightarrow xS/yS/x/y$$\
Is equivalent to the regular expression

1. $$(x + y)^*$$
2. $$(x + y)^*(x + y)$$
3. $$(x + y)(x + y)^*$$
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* The CFG is equivalent to all the given regular expressions.

</details>

### 132. Any string of terminals that can be generated by the following CFG

$$S \rightarrow AB$$\
$$A \rightarrow aA/bB/a$$\
$$B \rightarrow Ba/Bb/a$$

1. Has at least one b
2. Has no consecutive a's or b's
3. Should end in an 'a'
4. Has at least two a's

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Has at least two a's

**Explanation:**

* The CFG generates strings with at least two a's.

</details>

### 133. The following CFG

$$S \rightarrow aB/bA$$\
$$A \rightarrow b/aS/bAA$$\
$$B \rightarrow b/bs/aBB$$\
Generates strings of terminals that have

1. Equal number of a's and b's
2. Odd number of a's and odd number of b's
3. Even number of a's and number of b's
4. Odd number a's and een number of a's

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Equal number of a's and b's

**Explanation:**

* The CFG generates strings with an equal number of a's and b's.

</details>

### 134. The set $$\{a^n b^n / n = 1, 2, \ldots\}$$ can be generated by a CFG

1. $$S \rightarrow ab/aSb$$
2. $$S \rightarrow ab/aSb/\epsilon$$
3. $$S \rightarrow aSbb/ab$$
4. $$S \rightarrow aSbb/ab/aabb$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$S \rightarrow ab/aSb$$

**Explanation:**

* The CFG $$S \rightarrow ab/aSb$$ generates the set $$\{a^n b^n / n = 1, 2, \ldots\}$$.

</details>

### 135. Which of the following CFG's can't be simulated by an FSM?

1. $$S \rightarrow Sa/a$$
2. $$S \rightarrow a/X, X \rightarrow cY, Y \rightarrow -d/aX$$
3. $$S \rightarrow aSb/ab$$
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$S \rightarrow aSb/ab$$

**Explanation:**

* The CFG $$S \rightarrow aSb/ab$$ generates a non-regular language and cannot be simulated by an FSM.

</details>

### 136. CFG is not closed under

1. Union
2. Complementation's
3. Kleene star
4. Product

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Complementation's

**Explanation:**

* Context-free grammars (CFGs) are not closed under complementation.

</details>

### 137. The set $$A = \{a^n b^n c^n / n = 1, 2, 3, \ldots\}$$ is an example of a grammar that is

1. Regular
2. Not context free
3. Context-free
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Not context free

**Explanation:**

* The language $$A = \{a^n b^n c^n / n = 1, 2, 3, \ldots\}$$ is not context-free.

</details>

### 138. Let

$$L_1 = \{a^n b^n a^m / n, m = 1, 2, 3, \ldots\}$$\
$$L_2 = \{a^n b^m a^m / n, m = 1, 2, 3, \ldots\}$$\
$$L_3 = \{a^n b^n c^n / n = 1, 2, 3, \ldots\}$$\
Of the following the correct answer is

1. $$L_3 = L_1 \cap L_2$$
2. $$L_1$$ and $$L_2$$ are not CFL, but $$L_3$$ is CFL
3. $$L_1$$ is a subset of $$L_3$$
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$L_3 = L_1 \cap L_2$$

**Explanation:**

* The language $$L_3$$ is the intersection of $$L_1$$ and $$L_2$$.

</details>

### 139. The intersection of a CFL, and a regular language

1. Need not be regular
2. Is always regular
3. Need not be context free
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Need not be context free

**Explanation:**

* The intersection of a context-free language (CFL) and a regular language is always context-free.

</details>

### 140. A PDM behave lie an FSM when the number of auxiliary memory it has is

1. 0
2. 1
3. 2
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. 0

**Explanation:**

* A pushdown automaton (PDM) behaves like a finite state machine (FSM) when it has no auxiliary memory (stack).

</details>

### 141. CSG can be recognized by a

1. FSM
2. NDPDM
3. DPDM
4. Linearly bounded memory machine

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Linearly bounded memory machine

**Explanation:**

* Context-sensitive grammars (CSG) are recognized by linearly bounded memory machines.

</details>

### 142. An FSM with

1. A stack is more powerful than a FSM with no stack.
2. 2 stacks is more powerful than a FSM 1 stack
3. Both (A) and (B) above
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Both (A) and (B) above

**Explanation:**

* Adding stacks to an FSM increases its computational power.

</details>

### 143. Recursive languages are

1. Closed under intersection
2. Closed under complementation
3. Recursively enumerable
4. All of these

<details>

<summary>Show me the answer</summary>

**Answer:** 4. All of these

**Explanation:**

* Recursive languages are closed under intersection, complementation, and are recursively enumerable.

</details>

### 144. If $$\omega \in (a, b)^*$$ satisfy $$ab\omega = \omega ab$$ then $$'\omega'$$ is

1. Even
2. Odd
3. Null
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. Even

**Explanation:**

* The string $$\omega$$ must be even in length to satisfy the equation $$ab\omega = \omega ab$$.

</details>

### 145. Let $$f : (a, b)^* \rightarrow (a, b)^*$$ be given by $$f(n) = ax$$ for every value of $$n \in \{a, b\}$$ then $$f$$ is

1. One to one not onto
2. Not one to one and not onto
3. One to one and onto
4. Not one to one and onto

<details>

<summary>Show me the answer</summary>

**Answer:** 1. One to one not onto

**Explanation:**

* The function $$f$$ is one-to-one but not onto.

</details>

### 146. Let if $$G = (\{S\}, \{a\}, \{S \rightarrow SS\}, S)$$, find language generated by $$G$$

1. $$L(G) = \phi$$
2. $$L(G) = a^*$$
3. $$L(G) = a^n$$
4. $$L(G) = a^n ba^n$$

<details>

<summary>Show me the answer</summary>

**Answer:** 2. $$L(G) = a^*$$

**Explanation:**

* The grammar generates the language $$a^*$$.

</details>

### 147. What is the highest type number which can be applied to the following grammar

$$S \varphi \rightarrow Aa; A \rightarrow Ba, B \rightarrow abc$$

1. Type0
2. Type1
3. Type2
4. Type3

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Type3

**Explanation:**

* The grammar is of Type 3 (regular grammar).

</details>

### 148. Construct a grammar to generate $$\{(ab)^n / n \geq 1\} \cup \{(\text{ba})^n / n \geq 1\}$$

1. $$S \rightarrow S_1, S_1 \rightarrow abS_1, S_1 \rightarrow ab, S \rightarrow S_2, S_2 \rightarrow baS_2, S_2 \rightarrow ba$$
2. $$S \rightarrow S_1, S_1 \rightarrow aS_1, S_1 \rightarrow ab, S \rightarrow S_2, S_2 \rightarrow bS_2, S_2 \rightarrow bc$$
3. $$S \rightarrow S_1, S_1 \rightarrow S_2, S_2 \rightarrow S_1a, S_1 \rightarrow ab, S_2 \rightarrow ba$$
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$S \rightarrow S_1, S_1 \rightarrow abS_1, S_1 \rightarrow ab, S \rightarrow S_2, S_2 \rightarrow baS_2, S_2 \rightarrow ba$$

**Explanation:**

* The grammar generates the language $$\{(ab)^n / n \geq 1\} \cup \{(\text{ba})^n / n \geq 1\}$$.

</details>

### 149. Which string recognize it?

1. $$(a + b)^*$$
2. $$a + b (a + bb)^* (a + (b + aa)^*)^*$$
3. $$a^*b (b + aa)^*ba(b + aa)^*a$$
4. Information is not complete

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Information is not complete

**Explanation:**

* The question lacks sufficient information to determine the correct answer.

</details>

### 150. Regular expression corresponding to the state diagram given in below figure

1. $$(0 + 1 (1 + 01) '00)'$$
2. $$(0 + 1 (1 + 10) 00)'$$
3. $$(1 + 0)(0 + 10) '00)'$$
4. $$(1 + 0 (1 + 00) 11)'$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$(0 + 1 (1 + 01) '00)'$$

**Explanation:**

* The regular expression $$(0 + 1 (1 + 01) '00)'$$ corresponds to the given state diagram.

</details>

### 151. $$L = \{a^p / p \text{ is a prime}\}$$ is a

1. Regular
2. Accepted by DFA
3. Not regular
4. Accepted by PDA

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Not regular

**Explanation:**

* The language $$L = \{a^p / p \text{ is a prime}\}$$ is not regular as it requires checking for primality, which cannot be done by a finite automaton.

</details>

### 152. Regular expression corresponding to the automata given in figure below are:

1. $$1 (1 + 0 (0 + 10) '11)' 0 (0 + 10) '1$$
2. $$0 (1 + 0 (1 + 01) '11)' 1 (1 + 10) '1$$
3. $$1 (1 + 0 (1 + 01) '00)' 1 (1 + 01)'$$
4. $$0 (1 + 0 (1 + 01) '00)' 1 (1 + 01)' 1$$

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$1 (1 + 0 (0 + 10) '11)' 0 (0 + 10) '1$$

**Explanation:**

* The regular expression $$1 (1 + 0 (0 + 10) '11)' 0 (0 + 10) '1$$ corresponds to the given automaton.

</details>

### 153. Grammar $$S \rightarrow aAb, A \rightarrow aAb/a$$ is in

1. LR(1) not in LR(0)
2. LR(0) but not in LR(1)
3. Both LR(0) and LR(1)
4. Neither LR(0) nor in LR(1)

<details>

<summary>Show me the answer</summary>

**Answer:** 1. LR(1) not in LR(0)

**Explanation:**

* The grammar is LR(1) but not LR(0).

</details>

### 154. The language $$L = \{a^n b^n c^n / n \geq 1\}$$ is a

1. Regular language
2. Context-free language
3. Context-sensitive language
4. Recursively enumerable language

<details>

<summary>Show me the answer</summary>

**Answer:** 3. Context-sensitive language

**Explanation:**

* The language $$L = \{a^n b^n c^n / n \geq 1\}$$ is context-sensitive as it requires matching counts of $$a$$'s, $$b$$'s, and $$c$$'s.

</details>

### 155. The set $$\{a^n b^n / n = 1, 2, 3, \ldots\}$$ can be generated by the CFG

1. $$S \rightarrow ab/aSb$$
2. $$S \rightarrow ab/aSb/\epsilon$$
3. $$S \rightarrow aaSbb/ab$$
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 1. $$S \rightarrow ab/aSb$$

**Explanation:**

* The CFG $$S \rightarrow ab/aSb$$ generates the set $$\{a^n b^n / n = 1, 2, 3, \ldots\}$$.

</details>

### 156. Which of the following CFG's can't be simulated by an FSM?

1. $$S \rightarrow Sa/a$$
2. $$S \rightarrow abX, X \rightarrow cY, Y \rightarrow a/aX$$
3. $$S \rightarrow aSb/ab$$
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 3. $$S \rightarrow aSb/ab$$

**Explanation:**

* The CFG $$S \rightarrow aSb/ab$$ generates a non-regular language and cannot be simulated by an FSM.

</details>

### 157. The set $$A = \{a^n b^n c^n / n = 1, 2, 3, \ldots\}$$ is an example of

1. Regular language
2. Non context free language
3. Context free language
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Non context free language

**Explanation:**

* The language $$A = \{a^n b^n c^n / n = 1, 2, 3, \ldots\}$$ is not context-free.

</details>

### 158. The intersection of CFL and a regular language

1. Need not be regular
2. Is always regular
3. Need not be context free
4. None of these

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Is always regular

**Explanation:**

* The intersection of a context-free language (CFL) and a regular language is always context-free.

</details>

### 159. Choose the correct statements:

1. The power of DFSM and NDFSM are same.
2. The power of DFSM and NDFSM are different.
3. The power of DPDM and NDPDM are different.
4. Both (A) and (C) above.

<details>

<summary>Show me the answer</summary>

**Answer:** 4. Both (A) and (C) above.

**Explanation:**

* Deterministic and non-deterministic finite state machines (DFSM and NDFSM) are equivalent in power, while deterministic and non-deterministic pushdown automata (DPDM and NDPDM) are not.

</details>

### 160. Which of the following is accepted by an NDPDM but not by a DPDM?

1. All strings in which a given symbol is present at least twice
2. Even palindromes.
3. Strings ending with a particular alphabet.
4. None of these.

<details>

<summary>Show me the answer</summary>

**Answer:** 2. Even palindromes.

**Explanation:**

* Even palindromes are accepted by non-deterministic pushdown automata (NDPDM) but not by deterministic pushdown automata (DPDM).

</details>
