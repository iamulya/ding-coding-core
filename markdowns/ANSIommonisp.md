**Common Lisp** (**CL**) is a dialect of the [Lisp][0] [programming language][1], published in [ANSI][2] standard document _ANSI INCITS 226-1994 (R2004)_ (formerly _X3.226-1994 (R1999)_).[\[1\]][3] The [Common Lisp HyperSpec][4], a hyperlinked HTML version, has been derived from the ANSI Common Lisp standard.[\[2\]][5]

The Common Lisp language was developed as a standardized and improved successor of [Maclisp][6]. By the early 1980s several groups were already at work on diverse successors to MacLisp: [Lisp Machine Lisp][7] (aka ZetaLisp), [Spice Lisp][8], [NIL][9] and [S-1 Lisp][10]. Common Lisp sought to unify, standardise, and extend the features of these MacLisp dialects. Common Lisp is not an implementation, but rather a language [specification][11].[\[3\]][12] Several [implementations][13] of the Common Lisp standard are available, including [free and open source software][14] and proprietary products.[\[4\]][15] Common Lisp is a general-purpose, [multi-paradigm programming language][16]. It supports a combination of [procedural][17], [functional][18], and [object-oriented programming][19] paradigms. As a [dynamic programming language][20], it facilitates evolutionary and [incremental software development][21], with iterative [compilation][22] into efficient run-time programs. This incremental development is often done interactively without interrupting the running application.

It also supports optional type annotation and casting, which can be added as necessary at the later profiling and optimization stages, to permit the compiler to generate more efficient code. For instance, `fixnum` can hold an [unboxed][23] integer in a range supported by the hardware and implementation, permitting more efficient arithmetic than on big integers or arbitrary precision types. Similarly, the compiler can be told on a per-module or per-function basis which type safety level is wanted, using _optimize_ declarations.

Common Lisp includes [CLOS][24], an [object system][25] that supports [multimethods][26] and method combinations. It is often implemented with a [Metaobject][27] Protocol.

Common Lisp is extensible through standard features such as Lisp [macros][28] (code transformations) and reader macros (input parsers for characters).

Common Lisp provides some backwards compatibility to [Maclisp][6] and to John McCarthy's original [Lisp][0]. This allows older Lisp software to be ported to Common Lisp.[\[5\]][29]

## History

Work on Common Lisp started in 1981 after an initiative by ARPA manager Bob Engelmore to develop a single community standard Lisp dialect.[\[6\]][30] Much of the initial language design was done via electronic mail.[\[7\]][31][\[8\]][32] [Guy Lewis Steele, Jr.][33] gave at the 1982 ACM Symposium on LISP and functional programming the first overview of Common Lisp.[\[9\]][34]

The first language documentation was published 1984 as [Common Lisp the Language][35], first edition. A second edition, published in 1990, incorporated many changes to the language, made during the ANSI Common Lisp standardization process. The final ANSI Common Lisp standard then was published in 1994\. Since then no update to the standard has been published. Various extensions and improvements to Common Lisp (examples are Unicode, Concurrency, CLOS-based IO) have been provided by implementations and libraries (many available via [Quicklisp][36]).

## Syntax

Common Lisp is a dialect of Lisp; it uses [S-expressions][37] to denote both code and data structure. Function calls, macro forms and special forms are written as lists, with the name of the function first, as in these examples:

## Data types

Common Lisp has many data types.

## Scalar types

_Number_ types include [integers][38], [ratios][39], [floating-point numbers][40], and [complex numbers][41].[\[10\]][42] Common Lisp uses [bignums][43] to represent numerical values of arbitrary size and precision. The ratio type represents fractions exactly, a facility not available in many languages. Common Lisp automatically coerces numeric values among these types as appropriate.

The Common Lisp _[character][44]_ type is not limited to [ASCII][45] characters. Most modern implementations allow [Unicode][46] characters.[\[11\]][47]

The _[symbol][48]_ type is common to Lisp languages, but largely unknown outside them. A symbol is a unique, named data object with several parts: name, value, function, property list and package. Of these, _value cell_ and _function cell_ are the most important. Symbols in Lisp are often used similarly to identifiers in other languages: to hold the value of a variable; however there are many other uses. Normally, when a symbol is evaluated, its value is returned. Some symbols evaluate to themselves, for example all symbols in the keyword package are self-evaluating. Boolean values in Common Lisp are represented by the self-evaluating symbols T and NIL. Common Lisp has namespaces for symbols, called 'packages'.

A number of functions are available for [rounding][49] scalar numeric values in various ways. The function `round` rounds the argument to the nearest integer, with halfway cases rounded to the even integer. The functions `truncate`, `floor`, and `ceiling` round towards zero, down, or up respectively. All these functions return the discarded fractional part as a secondary value. For example, `(floor -2.5)` yields -3, 0.5; `(ceiling -2.5)` yields -2, -0.5; `(round 2.5)` yields 2, 0.5; and `(round 3.5)` yields 4, -0.5\.

## Data structures

_Sequence_ types in Common Lisp include lists, vectors, bit-vectors, and strings. There are many operations which can work on any sequence type.

As in almost all other Lisp dialects, _lists_ in Common Lisp are composed of _conses_, sometimes called _cons cells_ or _pairs_. A cons is a data structure with two slots, called its _car_ and _cdr_. A list is a linked chain of conses or the empty list. Each cons's car refers to a member of the list (possibly another list). Each cons's cdr refers to the next cons---except for the last cons in a list, whose cdr refers to the `nil` value. Conses can also easily be used to implement trees and other complex data structures; though it is usually advised to use structure or class instances instead. It is also possible to create circular data structures with conses.

Common Lisp supports multidimensional _arrays_, and can dynamically resize _adjustable_ arrays if required. Multidimensional arrays can be used for matrix mathematics. A _vector_ is a one-dimensional array. Arrays can carry any type as members (even mixed types in the same array) or can be specialized to contain a specific type of members, as in a vector of bits. Usually only a few types are supported. Many implementations can optimize array functions when the array used is type-specialized. Two type-specialized array types are standard: a _string_ is a vector of characters, while a _bit-vector_ is a vector of [bits][50].

_[Hash tables][51]_ store associations between data objects. Any object may be used as key or value. Hash tables are automatically resized as needed.

_Packages_ are collections of symbols, used chiefly to separate the parts of a program into [namespaces][52]. A package may _export_ some symbols, marking them as part of a public interface. Packages can use other packages.

_Structures_, similar in use to [C][53] structs and [Pascal][54] records, represent arbitrary complex data structures with any number and type of fields (called _slots_). Structures allow single-inheritance.

_Classes_ are similar to structures, but offer more dynamic features and multiple-inheritance. (See [CLOS][24]). Classes have been added late to Common Lisp and there is some conceptual overlap with structures. Objects created of classes are called _Instances_. A special case are Generic Functions. Generic Functions are both functions and instances.

## Functions

Common Lisp supports [first-class functions][55]. For instance, it is possible to write functions that take other functions as arguments or return functions as well. This makes it possible to describe very general operations.

The Common Lisp library relies heavily on such higher-order functions. For example, the `sort` function takes a [relational operator][56] as an argument and key function as an optional keyword argument. This can be used not only to sort any type of data, but also to sort data structures according to a key.

The evaluation model for functions is very simple. When the evaluator encounters a form `(f a1 a2...)` then it presumes that the symbol named f is one of the following:

If f is the name of a function, then the arguments a1, a2, ..., an are evaluated in left-to-right order, and the function is found and invoked with those values supplied as parameters.

## Defining functions

The [macro `defun`][57] defines functions where a function definition gives the name of the function, the names of any arguments, and a function body:

Function definitions may include compiler [directives][58], known as _declarations_, which provide hints to the compiler about optimization settings or the data types of arguments. They may also include _documentation strings_ (docstrings), which the Lisp system may use to provide interactive documentation:

Anonymous functions ([function literals][59]) are defined using `lambda` expressions, e.g. `(lambda (x) (* x x))` for a function that squares its argument. Lisp programming style frequently uses higher-order functions for which it is useful to provide anonymous functions as arguments.

Local functions can be defined with `flet` and `labels`.

There are a number of other operators related to the definition and manipulation of functions. For instance, a function may be compiled with the `compile` operator. (Some Lisp systems run functions using an interpreter by default unless instructed to compile; others compile every function).

## Defining generic functions and methods

The macro `defgeneric` defines generic functions. The macro `defmethod` defines methods. Generic functions are a collection of methods.

Methods can specialize their parameters over CLOS _standard classes_, _system classes_, _structure classes_ or objects. For many types there are corresponding _system classes_.

When a generic function is called, multiple-dispatch will determine the effective method to use.

Generic Functions are also a first class data type. There are many more features to Generic Functions and Methods than described above.

## The function namespace

The namespace for function names is separate from the namespace for data variables. This is a key difference between Common Lisp and [Scheme][60]. For Common Lisp, operators that define names in the function namespace include `defun`, `flet`, `labels`, `defmethod` and `defgeneric`.

To pass a function by name as an argument to another function, one must use the `function` special operator, commonly abbreviated as `#'`. The first `sort` example above refers to the function named by the symbol `>` in the function namespace, with the code `#'>`. Conversely, to call a function passed in such a way, one would use the `funcall` operator on the argument.

[Scheme's][60] evaluation model is simpler: there is only one namespace, and all positions in the form are evaluated (in any order) -- not just the arguments. Code written in one dialect is therefore sometimes confusing to programmers more experienced in the other. For instance, many Common Lisp programmers like to use descriptive variable names such as _list_ or _string_ which could cause problems in Scheme, as they would locally shadow function names.

Whether a separate namespace for functions is an advantage is a source of contention in the Lisp community. It is usually referred to as the _Lisp-1 vs. Lisp-2 debate_. Lisp-1 refers to Scheme's model and Lisp-2 refers to Common Lisp's model. These names were coined in a 1988 paper by [Richard P. Gabriel][61] and [Kent Pitman][62], which extensively compares the two approaches.[\[12\]][63]

## Multiple return values

Common Lisp supports the concept of _multiple values_,[\[13\]][64] where any expression always has a single _primary value_, but it might also have any number of _secondary values_, which might be received and inspected by interested callers. This concept is distinct from returning a list value, as the secondary values are fully optional, and passed via a dedicated side channel. This means that callers may remain entirely unaware of the secondary values being there if they have no need for them, and it makes it convenient to use the mechanism for communicating information that is sometimes useful, but not always necessary. For example,

Multiple values are supported by a handful of standard forms, most common of which are the `MULTIPLE-VALUE-BIND` special form for accessing secondary values and `VALUES` for returning multiple values:

## Other types

Other data types in Common Lisp include:

## Scope

Like programs in many other programming languages, Common Lisp programs make use of names to refer to variables, functions, and many other kinds of entities. Named references are subject to scope.

The association between a name and the entity which the name refers to is called a binding.

Scope refers to the set of circumstances in which a name is determined to have a particular binding.

## Determiners of scope

The circumstances which determine scope in Common Lisp include:

To understand what a symbol refers to, the Common Lisp programmer must know what kind of reference is being expressed, what kind of scope it uses if it is a variable reference (dynamic versus lexical scope), and also the run-time situation: in what environment is the reference resolved, where was the binding introduced into the environment, et cetera.

## Kinds of environment

## Global

Some environments in Lisp are globally pervasive. For instance, if a new type is defined, it is known everywhere thereafter. References to that type look it up in this global environment.

## Dynamic

One type of environment in Common Lisp is the dynamic environment. Bindings established in this environment have dynamic extent, which means that a binding is established at the start of the execution of some construct, such as a `let` block, and disappears when that construct finishes executing: its lifetime is tied to the dynamic activation and deactivation of a block. However, a dynamic binding is not just visible within that block; it is also visible to all functions invoked from that block. This type of visibility is known as indefinite scope. Bindings which exhibit dynamic extent (lifetime tied to the activation and deactivation of a block) and indefinite scope (visible to all functions which are called from that block) are said to have dynamic scope.

Common Lisp has support for dynamically scoped variables, which are also called special variables. Certain other kinds of bindings are necessarily dynamically scoped also, such as restarts and catch tags. Function bindings cannot be dynamically scoped using `flet` (which only provides lexically scoped function bindings), but function objects (a first-level object in Common Lisp) can be assigned to dynamically scoped variables, bound using `let` in dynamic scope, then called using `funcall` or `APPLY`.

Dynamic scope is extremely useful because it adds referential clarity and discipline to [global variables][65]. Global variables are frowned upon in computer science as potential sources of error, because they can give rise to ad-hoc, covert channels of communication among modules that lead to unwanted, surprising interactions.

In Common Lisp, a special variable which has only a top-level binding behaves just like a global variable in other programming languages. A new value can be stored into it, and that value simply replaces what is in the top-level binding. Careless replacement of the value of a global variable is at the heart of bugs caused by use of global variables. However, another way to work with a special variable is to give it a new, local binding within an expression. This is sometimes referred to as "rebinding" the variable. Binding a dynamically scoped variable temporarily creates a new memory location for that variable, and associates the name with that location. While that binding is in effect, all references to that variable refer to the new binding; the previous binding is hidden. When execution of the binding expression terminates, the temporary memory location is gone, and the old binding is revealed, with the original value intact. Of course, multiple dynamic bindings for the same variable can be nested.

In Common Lisp implementations which support multithreading, dynamic scopes are specific to each thread of execution. Thus special variables serve as an abstraction for thread local storage. If one thread rebinds a special variable, this rebinding has no effect on that variable in other threads. The value stored in a binding can only be retrieved by the thread which created that binding. If each thread binds some special variable `*x*`, then `*x*` behaves like thread-local storage. Among threads which do not rebind `*x*`, it behaves like an ordinary global: all of these threads refer to the same top-level binding of `*x*`.

Dynamic variables can be used to extend the execution context with additional context information which is implicitly passed from function to function without having to appear as an extra function parameter. This is especially useful when the control transfer has to pass through layers of unrelated code, which simply cannot be extended with extra parameters to pass the additional data. A situation like this usually calls for a global variable. That global variable must be saved and restored, so that the scheme doesn't break under recursion: dynamic variable rebinding takes care of this. And that variable must be made thread-local (or else a big mutex must be used) so the scheme doesn't break under threads: dynamic scope implementations can take care of this also.

In the Common Lisp library, there are many standard special variables. For instance, all standard I/O streams are stored in the top-level bindings of well-known special variables. The standard output stream is stored in \*standard-output\*.

Suppose a function foo writes to standard output:

To capture its output in a character string, \*standard-output\* can be bound to a string stream and called:

## Lexical

Common Lisp supports lexical environments. Formally, the bindings in a lexical environment have [lexical scope][66] and may have either indefinite extent or dynamic extent, depending on the type of namespace. [Lexical scope][66] means that visibility is physically restricted to the block in which the binding is established. References which are not textually (i.e. lexically) embedded in that block simply do not see that binding.

The tags in a TAGBODY have lexical scope. The expression (GO X) is erroneous if it is not actually embedded in a TAGBODY which contains a label X. However, the label bindings disappear when the TAGBODY terminates its execution, because they have dynamic extent. If that block of code is re-entered by the invocation of a lexical closure, it is invalid for the body of that closure to try to transfer control to a tag via GO:

When the TAGBODY is executed, it first evaluates the setf form which stores a function in the special variable \*stashed\*. Then the (go end-label) transfers control to end-label, skipping the code (print "Hello"). Since end-label is at the end of the tagbody, the tagbody terminates, yielding NIL. Suppose that the previously remembered function is now called:

This situation is erroneous. One implementation's response is an error condition containing the message, "GO: tagbody for tag SOME-LABEL has already been left". The function tried to evaluate (go some-label), which is lexically embedded in the tagbody, and resolves to the label. However, the tagbody isn't executing (its extent has ended), and so the control transfer cannot take place.

Local function bindings in Lisp have [lexical scope][66], and variable bindings also have lexical scope by default. By contrast with GO labels, both of these have indefinite extent. When a lexical function or variable binding is established, that binding continues to exist for as long as references to it are possible, even after the construct which established that binding has terminated. References to lexical variables and functions after the termination of their establishing construct are possible thanks to [lexical closures][67].

Lexical binding is the default binding mode for Common Lisp variables. For an individual symbol, it can be switched to dynamic scope, either by a local declaration, by a global declaration. The latter may occur implicitly through the use of a construct like DEFVAR or DEFPARAMETER. It is an important convention in Common Lisp programming that special (i.e. dynamically scoped) variables have names which begin and end with an asterisk [sigil][68] `*` in what is called the "[earmuff][69] convention".[\[16\]][70] If adhered to, this convention effectively creates a separate namespace for special variables, so that variables intended to be lexical are not accidentally made special.

[Lexical scope][66] is useful for several reasons.

Firstly, references to variables and functions can be compiled to efficient machine code, because the run-time environment structure is relatively simple. In many cases it can be optimized to stack storage, so opening and closing lexical scopes has minimal overhead. Even in cases where full closures must be generated, access to the closure's environment is still efficient; typically each variable becomes an offset into a vector of bindings, and so a variable reference becomes a simple load or store instruction with a base-plus-offset [addressing mode][71].

Secondly, lexical scope (combined with indefinite extent) gives rise to the [lexical closure][67], which in turn creates a whole paradigm of programming centered around the use of functions being first-class objects, which is at the root of functional programming.

Thirdly, perhaps most importantly, even if lexical closures are not exploited, the use of lexical scope isolates program modules from unwanted interactions. Due to their restricted visibility, lexical variables are private. If one module A binds a lexical variable X, and calls another module B, references to X in B will not accidentally resolve to the X bound in A. B simply has no access to X. For situations in which disciplined interactions through a variable are desirable, Common Lisp provides special variables. Special variables allow for a module A to set up a binding for a variable X which is visible to another module B, called from A. Being able to do this is an advantage, and being able to prevent it from happening is also an advantage; consequently, Common Lisp supports both lexical and [dynamic scope][72].

## Macros

A _[macro][28]_ in Lisp superficially resembles a function in usage. However, rather than representing an expression which is evaluated, it represents a transformation of the program source code. The macro gets the source it surrounds as arguments, binds them to its parameters and computes a new source form. This new form can also use a macro. The macro expansion is repeated until the new source form does not use a macro. The final computed form is the source code executed at runtime.

Typical uses of macros in Lisp:

Various standard Common Lisp features also need to be implemented as macros, such as:

Macros are defined by the _defmacro_ macro. The special operator _macrolet_ allows the definition of local (lexically scoped) macros. It is also possible to define macros for symbols using _define-symbol-macro_ and _symbol-macrolet_.

[Paul Graham][73]'s book [On Lisp][74] describes the use of macros in Common Lisp in detail. [Doug Hoyte][75]'s book [Let Over Lambda][76] extends the discussion on macros, claiming "Macros are the single greatest advantage that lisp has as a programming language and the single greatest advantage of any programming language." Hoyte provides several examples of iterative development of macros.

## Example using a macro to define a new control structure

Macros allow Lisp programmers to create new syntactic forms in the language. One typical use is to create new control structures. The example macro provides an `until` looping construct. The syntax is:

The macro definition for _until_:

_tagbody_ is a primitive Common Lisp special operator which provides the ability to name tags and use the _go_ form to jump to those tags. The backquote _\`_ provides a notation that provides code templates, where the value of forms preceded with a comma are filled in. Forms preceded with comma and at-sign are _spliced_ in. The tagbody form tests the end condition. If the condition is true, it jumps to the end tag. Otherwise the provided body code is executed and then it jumps to the start tag.

An example form using above _until_ macro:

The code can be expanded using the function _macroexpand-1_. The expansion for above example looks like this:

During macro expansion the value of the variable _test_ is _(= (random 10) 0)_ and the value of the variable _body_ is _((write-line "Hello"))_. The body is a list of forms.

Symbols are usually automatically upcased. The expansion uses the TAGBODY with two labels. The symbols for these labels are computed by GENSYM and are not interned in any package. Two _go_ forms use these tags to jump to. Since _tagbody_ is a primitive operator in Common Lisp (and not a macro), it will not be expanded into something else. The expanded form uses the _when_ macro, which also will be expanded. Fully expanding a source form is called _code walking_.

In the fully expanded (_walked_) form, the _when_ form is replaced by the primitive _if_:

All macros must be expanded before the source code containing them can be evaluated or compiled normally. Macros can be considered functions that accept and return [abstract syntax trees][77] (Lisp S-expressions). These functions are invoked before the evaluator or compiler to produce the final source code. Macros are written in normal Common Lisp, and may use any Common Lisp (or third-party) operator available.

## Variable capture and shadowing

Common Lisp macros are capable of what is commonly called _variable capture_, where symbols in the macro-expansion body coincide with those in the calling context, allowing the programmer to create macros wherein various symbols have special meaning. The term _variable capture_ is somewhat misleading, because all namespaces are vulnerable to unwanted capture, including the operator and function namespace, the tagbody label namespace, catch tag, condition handler and restart namespaces.

_Variable capture_ can introduce software defects. This happens in one of the following two ways:

The Scheme dialect of Lisp provides a macro-writing system which provides the referential transparency that eliminates both types of capture problem. This type of macro system is sometimes called "hygienic", in particular by its proponents (who regard macro systems which do not automatically solve this problem as unhygienic).\[_[citation needed][78]_\]

In Common Lisp, macro hygiene is ensured one of two different ways.

One approach is to use [gensyms][79]: guaranteed-unique symbols which can be used in a macro-expansion without threat of capture. The use of gensyms in a macro definition is a manual chore, but macros can be written which simplify the instantiation and use of gensyms. Gensyms solve type 2 capture easily, but they are not applicable to type 1 capture in the same way, because the macro expansion cannot rename the interfering symbols in the surrounding code which capture its references. Gensyms could be used to provide stable aliases for the global symbols which the macro expansion needs. The macro expansion would use these secret aliases rather than the well-known names, so redefinition of the well-known names would have no ill effect on the macro.

Another approach is to use packages. A macro defined in its own package can simply use internal symbols in that package in its expansion. The use of packages deals with type 1 and type 2 capture.

However, packages don't solve the type 1 capture of references to standard Common Lisp functions and operators. The reason is that the use of packages to solve capture problems revolves around the use of private symbols (symbols in one package, which are not imported into, or otherwise made visible in other packages). Whereas the Common Lisp library symbols are external, and frequently imported into or made visible in user-defined packages.

The following is an example of unwanted capture in the operator namespace, occurring in the expansion of a macro:

The `until` macro will expand into a form which calls `do` which is intended to refer to the standard Common Lisp macro `do`. However, in this context, `do` may have a completely different meaning, so `until` may not work properly.

Common Lisp solves the problem of the shadowing of standard operators and functions by forbidding their redefinition. Because it redefines the standard operator `do`, the preceding is actually a fragment of non-conforming Common Lisp, which allows implementations to diagnose and reject it.

## Condition system

The _condition system_ is responsible for [exception handling][80] in Common Lisp.[\[17\]][81] It provides _conditions_, _handler_s and _restart_s. _Condition_s are objects describing an exceptional situation (for example an error). If a _condition_ is signaled, the Common Lisp system searches for a _handler_ for this condition type and calls the handler. The _handler_ can now search for restarts and use one of these restarts to repair the current problem. As part of a user interface (for example of a debugger), these restarts can also be presented to the user, so that the user can select and invoke one of the available restarts. Since the condition handler is called in the context of the error (without unwinding the stack), full error recovery is possible in many cases, where other exception handling systems would have already terminated the current routine. The debugger itself can also be customized or replaced using the `*debugger-hook*` dynamic variable.

In the following example (using [Symbolics Genera][82]) the user tries to open a file in a Lisp function _test_ called from the Read-Eval-Print-LOOP ([REPL][83]), when the file does not exist. The Lisp system presents four restarts. The user selects the _Retry OPEN using a different pathname_ restart and enters a different pathname (lispm-init.lisp instead of lispm-int.lisp). The user code does not contain any error handling code. The whole error handling and restart code is provided by the Lisp system, which can handle and repair the error without terminating the user code.

## Common Lisp Object System (CLOS)

Common Lisp includes a toolkit for [object-oriented programming][19], the Common Lisp Object System or [CLOS][24], which is one of the most powerful object systems available in any language. For example, [Peter Norvig][84] explains how many [Design Patterns][85] are simpler to implement in a dynamic language with the features of CLOS (Multiple Inheritance, Mixins, Multimethods, Metaclasses, Method combinations, etc.).[\[18\]][86] Several extensions to Common Lisp for object-oriented programming have been proposed to be included into the ANSI Common Lisp standard, but eventually CLOS was adopted as the standard object-system for Common Lisp. CLOS is a [dynamic][20] object system with [multiple dispatch][87] and [multiple inheritance][88], and differs radically from the OOP facilities found in static languages such as [C++][89] or [Java][90]. As a dynamic object system, CLOS allows changes at runtime to generic functions and classes. Methods can be added and removed, classes can be added and redefined, objects can be updated for class changes and the class of objects can be changed.

CLOS has been integrated into ANSI Common Lisp. Generic Functions can be used like normal functions and are a first-class data type. Every CLOS class is integrated into the Common Lisp type system. Many Common Lisp types have a corresponding class. There is more potential use of CLOS for Common Lisp. The specification does not say whether conditions are implemented with CLOS. Pathnames and streams could be implemented with CLOS. These further usage possibilities of CLOS for ANSI Common Lisp are not part of the standard. Actual Common Lisp implementations are using CLOS for pathnames, streams, input/output, conditions, the implementation of CLOS itself and more.

## Compiler and interpreter

Several implementations of earlier Lisp dialects provided both an interpreter and a compiler. Unfortunately often the semantics were different. These earlier Lisps implemented lexical scoping in the compiler and dynamic scoping in the interpreter. Common Lisp requires that both the interpreter and compiler use lexical scoping by default. The Common Lisp standard describes both the semantics of the interpreter and a compiler. The compiler can be called using the function _compile_ for individual functions and using the function _compile-file_ for files. Common Lisp allows type declarations and provides ways to influence the compiler code generation policy. For the latter various optimization qualities can be given values between 0 (not important) and 3 (most important): _speed_, _space_, _safety_, _debug_ and _compilation-speed_.

There is also a function to evaluate Lisp code: `eval`. `eval` takes code as pre-parsed s-expressions and not, like in some other languages, as text strings. This way code can be constructed with the usual Lisp functions for constructing lists and symbols and then this code can be evaluated with the function `eval`. Several Common Lisp implementations (like Clozure CL and SBCL) are implementing `eval` using their compiler. This way code is compiled, even though it is evaluated using the function `eval`.

The file compiler is invoked using the function _compile-file_. The generated file with compiled code is called a _fasl_ (from _fast load_) file. These _fasl_ files and also source code files can be loaded with the function _load_ into a running Common Lisp system. Depending on the implementation, the file compiler generates byte-code (for example for the [Java Virtual Machine][91]), [C language][53] code (which then is compiled with a C compiler) or, directly, native code.

Common Lisp implementations can be used interactively, even though the code gets fully compiled. The idea of an [Interpreted language][92] thus does not apply for interactive Common Lisp.

The language makes distinction between read-time, compile-time, load-time and run-time, and allows user code to also make this distinction to perform the wanted type of processing at the wanted step.

Some special operators are provided to especially suit interactive development; for instance, `defvar` will only assign a value to its provided variable if it wasn't already bound, while `defparameter` will always perform the assignment. This distinction is useful when interactively evaluating, compiling and loading code in a live image.

Some features are also provided to help writing compilers and interpreters. Symbols consist of first-level objects and are directly manipulable by user code. The `progv` special operator allows to create lexical bindings programmatically, while packages are also manipulable. The Lisp compiler itself is available at runtime to compile files or individual functions. These make it easy to use Lisp as an intermediate compiler or interpreter for another language.

## Code examples

## Birthday paradox

The following program calculates the smallest number of people in a room for whom the probability of completely unique birthdays is less than 50% (the [birthday paradox][93], where for 1 person the probability is obviously 100%, for 2 it is 364/365, etc.). The answer is 23\.

Calling the example function using the [REPL][83] (Read Eval Print Loop):

## Sorting a list of person objects

We define a class `person` and a method for displaying the name and age of a person. Next we define a group of persons as a list of `person` objects. Then we iterate over the sorted list.

It prints the three names with descending age.

## Exponentiating by squaring

Use of the LOOP macro is demonstrated:

Example use:

Compare with the built in exponentiation:

## Find the list of available shells

WITH-OPEN-FILE is a macro that opens a file and provides a stream. When the form is returning, the file is automatically closed. FUNCALL calls a function object. The LOOP collects all lines that match the predicate.

The function AVAILABLE-SHELLS calls above function LIST-MATCHING-LINES with a pathname and an anonymous function as the predicate. The predicate returns the pathname of a shell or NIL (if the string is not the filename of a shell).

Example results (on Mac OS X 10.6):

## Comparison with other Lisps

Common Lisp is most frequently compared with, and contrasted to, [Scheme][60]---if only because they are the two most popular Lisp dialects. Scheme predates CL, and comes not only from the same Lisp tradition but from some of the same engineers---[Guy L. Steele][94], with whom [Gerald Jay Sussman][95] designed Scheme, chaired the standards committee for Common Lisp.

Common Lisp is a general-purpose programming language, in contrast to Lisp variants such as [Emacs Lisp][96] and [AutoLISP][97] which are [extension languages][98] embedded in particular products. Unlike many earlier Lisps, Common Lisp (like [Scheme][60]) uses lexical variable [scope][99] by default for both interpreted and compiled code.

Most of the Lisp systems whose designs contributed to Common Lisp---such as [ZetaLisp][100] and Franz Lisp---used dynamically [scoped][99] variables in their interpreters and lexically scoped variables in their compilers. Scheme introduced the sole use of lexically scoped variables to Lisp; an inspiration from [ALGOL 68][101] which was widely recognized as a good idea. CL supports dynamically scoped variables as well, but they must be explicitly declared as "special". There are no differences in scoping between ANSI CL interpreters and compilers.

Common Lisp is sometimes termed a _Lisp-2_ and Scheme a _Lisp-1_, referring to CL's use of separate namespaces for functions and variables. (In fact, CL has _many_ namespaces, such as those for go tags, block names, and `loop` keywords). There is a long-standing controversy between CL and Scheme advocates over the tradeoffs involved in multiple namespaces. In Scheme, it is (broadly) necessary to avoid giving variables names which clash with functions; Scheme functions frequently have arguments named `lis`, `lst`, or `lyst` so as not to conflict with the system function `list`. However, in CL it is necessary to explicitly refer to the function namespace when passing a function as an argument---which is also a common occurrence, as in the `sort` example above.

CL also differs from Scheme in its handling of boolean values. Scheme uses the special values \#t and \#f to represent truth and falsity. CL follows the older Lisp convention of using the symbols T and NIL, with NIL standing also for the empty list. In CL, _any_ non-NIL value is treated as true by conditionals, such as `if`, whereas in Scheme all non-\#f values are treated as true. These conventions allow some operators in both languages to serve both as predicates (answering a boolean-valued question) and as returning a useful value for further computation, but in Scheme the value '() which is equivalent to NIL in Common Lisp evaluates to true in a boolean expression.

Lastly, the Scheme standards documents require [tail-call optimization][102], which the CL standard does not. Most CL implementations do offer tail-call optimization, although often only when the programmer uses an optimization directive. Nonetheless, common CL coding style does not favor the ubiquitous use of recursion that Scheme style prefers---what a Scheme programmer would express with tail recursion, a CL user would usually express with an iterative expression in `do`, `dolist`, `loop`, or (more recently) with the `iterate` package.

## Implementations

See the Category [Common Lisp implementations][103].

Common Lisp is defined by a specification (like [Ada][104] and [C][53]) rather than by one implementation (like [Perl][105] before version 6). There are many implementations, and the standard details areas in which they may validly differ.

In addition, implementations tend to come with extensions, which provide functionality not covered in the standard:

[Free and open source software][14] libraries have been created to support extensions to Common Lisp in a portable way, and are most notably found in the repositories of the [Common-Lisp.net][106] and [Common Lisp Open Code Collection][107] projects.

Common Lisp implementations may use any mix of native code compilation, byte code compilation or interpretation. Common Lisp has been designed to support [incremental compilers][108], file compilers and block compilers. Standard declarations to optimize compilation (such as function inlining or type specialization) are proposed in the language specification. Most Common Lisp implementations compile source code to native [machine code][109]. Some implementations can create (optimized) stand-alone applications. Others compile to interpreted [bytecode][110], which is less efficient than native code, but eases binary-code portability. There are also compilers that compile Common Lisp code to C code. The misconception that Lisp is a purely interpreted language is most likely because Lisp environments provide an interactive prompt and that code is compiled one-by-one, in an incremental way. With Common Lisp incremental compilation is widely used.

Some [Unix][111]-based implementations ([CLISP][112], [SBCL][113]) can be used as a [scripting language][114]; that is, invoked by the system transparently in the way that a [Perl][105] or [Unix shell][115] interpreter is.[\[19\]][116]

## List of implementations

## Commercial implementations

## Freely redistributable implementations

## Other implementations

## Applications

See the Category [Common Lisp software][117].

Common Lisp is used to develop research applications (often in Artificial Intelligence), for rapid development of prototypes or for deployed applications.

Common Lisp is used in many commercial applications, including the [Yahoo!][118] Store web-commerce site, which originally involved [Paul Graham][73] and was later rewritten in C++ and Perl.[\[44\]][119] Other notable examples include:

There also exist open-source applications written in Common Lisp, such as:

## Libraries

Since 2011 Zach Beane, with support of the Common Lisp Foundation, maintains the [Quicklisp][36] library manager. It allows easy access to several hundred libraries written in Common Lisp.

## See also

## References

## Bibliography

A chronological list of books published (or about to be published) about Common Lisp (the language) or about programming with Common Lisp (especially AI programming).

## External links

[0]: /wiki/Lisp_(programming_language) "Lisp (programming language)"
[1]: /wiki/Programming_language "Programming language"
[2]: /wiki/American_National_Standards_Institute "American National Standards Institute"
[3]: #cite_note-1
[4]: /wiki/Common_Lisp_HyperSpec "Common Lisp HyperSpec"
[5]: #cite_note-2
[6]: /wiki/Maclisp "Maclisp"
[7]: /wiki/Lisp_Machine_Lisp "Lisp Machine Lisp"
[8]: /wiki/Spice_Lisp "Spice Lisp"
[9]: /wiki/NIL_(programming_language) "NIL (programming language)"
[10]: /wiki/S-1_Lisp "S-1 Lisp"
[11]: /wiki/Specification "Specification"
[12]: #cite_note-3
[13]: #Implementations
[14]: /wiki/Free_and_open_source_software "Free and open source software"
[15]: #cite_note-4
[16]: /wiki/Multi-paradigm_programming_language "Multi-paradigm programming language"
[17]: /wiki/Procedural_programming "Procedural programming"
[18]: /wiki/Functional_programming "Functional programming"
[19]: /wiki/Object-oriented_programming "Object-oriented programming"
[20]: /wiki/Dynamic_programming_language "Dynamic programming language"
[21]: /wiki/Iterative_and_incremental_development "Iterative and incremental development"
[22]: /wiki/Compiler "Compiler"
[23]: /wiki/Boxing_(computer_science) "Boxing (computer science)"
[24]: /wiki/Common_Lisp_Object_System "Common Lisp Object System"
[25]: /wiki/Object_system "Object system"
[26]: /wiki/Multimethods "Multimethods"
[27]: /wiki/Metaobject "Metaobject"
[28]: /wiki/Macro_(computer_science) "Macro (computer science)"
[29]: #cite_note-5
[30]: #cite_note-6
[31]: #cite_note-7
[32]: #cite_note-8
[33]: /wiki/Guy_Lewis_Steele,_Jr. "Guy Lewis Steele, Jr."
[34]: #cite_note-9
[35]: /wiki/Common_Lisp_the_Language "Common Lisp the Language"
[36]: /wiki/Quicklisp "Quicklisp"
[37]: /wiki/S-expression "S-expression"
[38]: /wiki/Integer "Integer"
[39]: /wiki/Ratio "Ratio"
[40]: /wiki/Floating_point "Floating point"
[41]: /wiki/Complex_number "Complex number"
[42]: #cite_note-reddy-10
[43]: /wiki/Arbitrary-precision_arithmetic "Arbitrary-precision arithmetic"
[44]: /wiki/Character_(computing) "Character (computing)"
[45]: /wiki/ASCII "ASCII"
[46]: /wiki/Unicode "Unicode"
[47]: #cite_note-11
[48]: /wiki/Symbol_(programming) "Symbol (programming)"
[49]: /wiki/Rounding "Rounding"
[50]: /wiki/Bit "Bit"
[51]: /wiki/Hash_table "Hash table"
[52]: /wiki/Namespaces "Namespaces"
[53]: /wiki/C_(programming_language) "C (programming language)"
[54]: /wiki/Pascal_(programming_language) "Pascal (programming language)"
[55]: /wiki/First-class_function "First-class function"
[56]: /wiki/Relational_operator "Relational operator"
[57]: /wiki/Defun "Defun"
[58]: /wiki/Directive_(programming) "Directive (programming)"
[59]: /wiki/Function_literal "Function literal"
[60]: /wiki/Scheme_(programming_language) "Scheme (programming language)"
[61]: /wiki/Richard_P._Gabriel "Richard P. Gabriel"
[62]: /wiki/Kent_Pitman "Kent Pitman"
[63]: #cite_note-12
[64]: #cite_note-13
[65]: /wiki/Global_variable "Global variable"
[66]: /wiki/Lexical_scope "Lexical scope"
[67]: /wiki/Lexical_closure "Lexical closure"
[68]: /wiki/Sigil_(computer_programming) "Sigil (computer programming)"
[69]: /wiki/Earmuff "Earmuff"
[70]: #cite_note-16
[71]: /wiki/Addressing_mode "Addressing mode"
[72]: /wiki/Dynamic_scope "Dynamic scope"
[73]: /wiki/Paul_Graham_(computer_programmer) "Paul Graham (computer programmer)"
[74]: /wiki/On_Lisp "On Lisp"
[75]: /w/index.php?title=Doug_Hoyte&action=edit&redlink=1 "Doug Hoyte (page does not exist)"
[76]: /w/index.php?title=Let_Over_Lambda&action=edit&redlink=1 "Let Over Lambda (page does not exist)"
[77]: /wiki/Abstract_syntax_tree "Abstract syntax tree"
[78]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[79]: /w/index.php?title=Gensym&action=edit&redlink=1 "Gensym (page does not exist)"
[80]: /wiki/Exception_handling "Exception handling"
[81]: #cite_note-Seibel2005-17
[82]: /wiki/Symbolics_Genera "Symbolics Genera"
[83]: /wiki/REPL "REPL"
[84]: /wiki/Peter_Norvig "Peter Norvig"
[85]: /wiki/Design_pattern_(computer_science) "Design pattern (computer science)"
[86]: #cite_note-18
[87]: /wiki/Multiple_dispatch "Multiple dispatch"
[88]: /wiki/Multiple_inheritance "Multiple inheritance"
[89]: /wiki/C%2B%2B "C++"
[90]: /wiki/Java_(programming_language) "Java (programming language)"
[91]: /wiki/Java_Virtual_Machine "Java Virtual Machine"
[92]: /wiki/Interpreted_language "Interpreted language"
[93]: /wiki/Birthday_paradox "Birthday paradox"
[94]: /wiki/Guy_L._Steele,_Jr. "Guy L. Steele, Jr."
[95]: /wiki/Gerald_Jay_Sussman "Gerald Jay Sussman"
[96]: /wiki/Emacs_Lisp "Emacs Lisp"
[97]: /wiki/AutoLISP "AutoLISP"
[98]: /wiki/Extension_languages "Extension languages"
[99]: /wiki/Scope_(programming) "Scope (programming)"
[100]: /wiki/ZetaLisp "ZetaLisp"
[101]: /wiki/ALGOL_68 "ALGOL 68"
[102]: /wiki/Tail_recursion "Tail recursion"
[103]: /wiki/Category:Common_Lisp_implementations "Category:Common Lisp implementations"
[104]: /wiki/Ada_(programming_language) "Ada (programming language)"
[105]: /wiki/Perl "Perl"
[106]: http://common-lisp.net/
[107]: http://clocc.sourceforge.net/
[108]: /wiki/Incremental_compiler "Incremental compiler"
[109]: /wiki/Machine_code "Machine code"
[110]: /wiki/Bytecode "Bytecode"
[111]: /wiki/Unix "Unix"
[112]: /wiki/CLISP "CLISP"
[113]: /wiki/SBCL "SBCL"
[114]: /wiki/Scripting_language "Scripting language"
[115]: /wiki/Unix_shell "Unix shell"
[116]: #cite_note-19
[117]: /wiki/Category:Common_Lisp_software "Category:Common Lisp software"
[118]: /wiki/Yahoo! "Yahoo!"
[119]: #cite_note-doubt-not-corporate-foolishness-44