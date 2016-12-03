**Objective-C** is a [general-purpose][0], [object-oriented][1] [programming language][2] that adds [Smalltalk][3]-style [messaging][4] to the [C][5] programming language. It was the main programming language used by [Apple][6] for the [OS X][7] and [iOS][8] operating systems, and their respective [application programming interfaces][9] (APIs) [Cocoa][10] and [Cocoa Touch][11] prior to the introduction of [Swift][12].

The programming language Objective-C was originally developed in the early 1980s. It was selected as the main language used by [NeXT][13] for its [NeXTSTEP][14] operating system, from which OS X and iOS are derived.[\[3\]][15] Portable Objective-C programs that do not use the [Cocoa][10] or [Cocoa Touch][11] libraries, or those using parts that may be ported or reimplemented for other systems, can also be compiled for any system supported by [GNU Compiler Collection][16] (GCC) or [Clang][17].

Objective-C source code 'implementation' program files usually have .m filename extensions, while Objective-C 'header/interface' files have .h extensions, the same as C header files. Objective-C++ files are denoted with a .mm file extension.

## History

Objective-C was created primarily by [Brad Cox][18] and Tom Love in the early 1980s at their company [Stepstone][19].[\[4\]][20] Both had been introduced to [Smalltalk][3] while at [ITT Corporation][21]'s Programming Technology Center in 1981\. The earliest work on Objective-C traces back to around that time.[\[5\]][22] Cox was intrigued by problems of true reusability in [software design][23] and programming. He realized that a language like Smalltalk would be invaluable in building development environments for system developers at ITT. However, he and Tom Love also recognized that backward compatibility with C was critically important in ITT's telecom engineering milieu.[\[6\]][24]

Cox began writing a pre-processor for C to add some of the abilities of Smalltalk. He soon had a working implementation of an object-oriented extension to the C language, which he called "OOPC" for Object-Oriented Pre-Compiler.[\[7\]][25] Love was hired by Schlumberger Research in 1982 and had the opportunity to acquire the first commercial copy of Smalltalk-80, which further influenced the development of their brainchild.

In order to demonstrate that real progress could be made, Cox showed that making interchangeable [software components][26] really needed only a few practical changes to existing tools. Specifically, they needed to support objects in a flexible manner, come supplied with a usable set of libraries, and allow for the code (and any resources needed by the code) to be bundled into one cross-platform format.

Love and Cox eventually formed a new venture, [Productivity Products International][19] (PPI), to commercialize their product, which coupled an Objective-C compiler with class libraries. In 1986, Cox published the main description of Objective-C in its original form in the book _Object-Oriented Programming, An Evolutionary Approach_. Although he was careful to point out that there is more to the problem of reusability than just the language, Objective-C often found itself compared feature for feature with other languages.

## Popularization through NeXT

In 1988, [NeXT][13] licensed Objective-C from StepStone (the new name of PPI, the owner of the Objective-C trademark) and extended the [GCC][16] compiler to support Objective-C. NeXT developed the [AppKit][27] and [Foundation Kit][28] libraries on which the [NeXTSTEP][14] user interface and Interface Builder were based. While the NeXT workstations failed to make a great impact in the marketplace, the tools were widely lauded in the industry. This led NeXT to drop hardware production and focus on software tools, selling NeXTSTEP (and OpenStep) as a platform for custom programming.

In order to circumvent the terms of the [GPL][29], NeXT had originally intended to ship the Objective-C frontend separately, allowing the user to link it with GCC to produce the compiler executable. After being initially accepted by [Richard M. Stallman][30], this plan was rejected after Stallman consulted with GNU's lawyers and NeXT agreed to make Objective-C part of GCC.[\[8\]][31]

The work to extend [GCC][16] was led by Steve Naroff, who joined NeXT from StepStone. The compiler changes were made available as per [GPL][32] license terms, but the runtime libraries were not, rendering the open source contribution unusable to the general public. This led to other parties developing such runtime libraries under open source license. Later, Steve Naroff was also principal contributor to work at Apple to build the Objective-C frontend to [Clang][17].

The [GNU][33] project started work on its free software implementation of Cocoa, named [GNUstep][34], based on the [OpenStep][35] standard.[\[9\]][36] Dennis Glatting wrote the first GNU Objective-C [runtime][37] in 1992\. The GNU Objective-C runtime, which has been in use since 1993, is the one developed by Kresten Krab Thorup when he was a university student in [Denmark][38].\[_[citation needed][39]_\] Thorup also worked at NeXT from 1993 to 1996\.[\[10\]][40]

## Apple development and Swift

After acquiring NeXT in 1996, [Apple Computer][41] used OpenStep in its new operating system, [OS X][7]. This included Objective-C, NeXT's Objective-C based developer tool, [Project Builder][42], and its interface design tool, [Interface Builder][43], both now merged into one [Xcode][44] application. Most of Apple's current [Cocoa API][10] is based on OpenStep interface objects and is the most significant Objective-C environment being used for active development.

At [WWDC][45] 2014, Apple introduced a new language, [Swift][12], which was characterized as "Objective-C without the C".

## Syntax

Objective-C is a thin layer atop C, and is a "strict [superset][46]" of C, meaning that it is possible to compile any C program with an Objective-C compiler, and to freely include C language code within an Objective-C class.[\[11\]][47][\[12\]][48][\[13\]][49][\[14\]][50][\[15\]][51][\[16\]][52]

Objective-C derives its object syntax from [Smalltalk][3]. All of the syntax for non-object-oriented operations (including primitive variables, pre-processing, expressions, function declarations, and function calls) are identical to those of C, while the syntax for object-oriented features is an implementation of Smalltalk-style messaging.

## Messages

The Objective-C model of object-oriented programming is based on [message passing][4] to object instances. In Objective-C one does not _call a method_; one _sends a message_. This is unlike the [Simula][53]-style programming model used by [C++][54]. The difference between these two concepts is in how the code referenced by the method or message name is executed. In a Simula-style language, the method name is in most cases [bound][55] to a section of code in the target class by the compiler. In [Smalltalk][3] and Objective-C, the target of a message is resolved at runtime, with the receiving object itself interpreting the message. A method is identified by a _selector_ or SEL --- a NUL-terminated string representing its name --- and resolved to a C method [pointer][56] implementing it: an IMP.[\[17\]][57] A consequence of this is that the message-passing system has no type checking. The object to which the message is directed --- the _receiver_ --- is not guaranteed to respond to a message, and if it does not, it raises an exception.[\[18\]][58]

Sending the message method to the object pointed to by the pointer obj would require the following code in [C++][54]:

In Objective-C, this is written as follows:

Both styles of programming have their strengths and weaknesses. Object-oriented programming in the Simula (C++) style allows [multiple inheritance][59] and faster execution by using [compile-time binding][60] whenever possible, but it does not support [dynamic binding][61] by default. It also forces all methods to have a corresponding implementation unless they are [abstract][62]. The Smalltalk-style programming as used in Objective-C allows messages to go unimplemented, with the method resolved to its implementation at runtime. For example, a message may be sent to a collection of objects, to which only some will be expected to respond, without fear of producing runtime errors. Message passing also does not require that an object be defined at compile time. An implementation is still required for the method to be called in the derived object. (See the [dynamic typing][63] section below for more advantages of dynamic (late) binding.)

## Interfaces and implementations

Objective-C requires that the interface and implementation of a class be in separately declared code blocks. By convention, developers place the interface in a [header file][64] and the implementation in a code file. The header files, normally suffixed .h, are similar to C header files while the implementation (method) files, normally suffixed .m, can be very similar to C code files.

## Interface

In other programming languages, this is called a "class declaration".

The interface of a class is usually defined in a header file. A common convention is to name the header file after the name of the class, e.g. Ball.h would contain the interface for the class Ball.

An interface declaration takes the form:

In the above, plus signs denote [class methods][65], or methods that can be called on the class itself (not on an instance), and minus signs denote [instance methods][66], which can only be called on a particular instance of the class. Class methods also have no access to instance variables.

The code above is roughly equivalent to the following [C++][54] interface:

Note that instanceMethod2With2Parameters:param2\_callName: demonstrates the interleaving of selector segments with argument expressions, for which there is no direct equivalent in C/C++.

Return types can be any standard C type, a pointer to a generic Objective-C object, a pointer to a specific type of object such as NSArray \*, NSImage \*, or NSString \*, or a pointer to the class to which the method belongs (instancetype). The default return type is the generic Objective-C type id.

Method arguments begin with a name labeling the argument that is part of the method name, followed by a colon followed by the expected argument type in parentheses and the argument name. The label can be omitted.

## Implementation

The interface only declares the class interface and not the methods themselves: the actual code is written in the implementation file. Implementation (method) files normally have the file extension `.m`, which originally signified "messages".[\[19\]][67]

Methods are written using their interface declarations. Comparing Objective-C and C:

The syntax allows pseudo-[naming of arguments][68].

Internal representations of a method vary between different implementations of Objective-C. If myColor is of the class Color, instance method -changeColorToRed:green:blue: might be internally labeled \_i\_Color\_changeColorToRed\_green\_blue. The i is to refer to an instance method, with the class and then method names appended and colons changed to underscores. As the order of parameters is part of the method name, it cannot be changed to suit coding style or expression as with true named parameters.

However, internal names of the function are rarely used directly. Generally, messages are converted to function calls defined in the Objective-C runtime library. It is not necessarily known at link time which method will be called because the class of the receiver (the object being sent the message) need not be known until runtime.

## Instantiation

Once an Objective-C class is written, it can be instantiated. This is done by first allocating an uninitialized instance of the class (an object) and then by initializing it. An object is not fully functional until both steps have been completed. These steps should be accomplished with one line of code so that there is never an allocated object that hasn't undergone initialization (and because it is unwise to keep the intermediate result since `-init` can return a different object than that on which it is called).

Instantiation with the default, no-parameter initializer:

Instantiation with a custom initializer:

In the case where no custom initialization is being performed, the "new" method can often be used in place of the alloc-init messages:

Also, some classes implement class method initializers. Like `+new`, they combine `+alloc` and `-init`, but unlike `+new`, they return an autoreleased instance. Some class method initializers take parameters:

The _alloc_ message allocates enough memory to hold all the instance variables for an object, sets all the instance variables to zero values, and turns the memory into an instance of the class; at no point during the initialization is the memory an instance of the superclass.

The _init_ message performs the set-up of the instance upon creation. The _init_ method is often written as follows:

In the above example, notice the `id` return type. This type stands for "pointer to any object" in Objective-C (See the [Dynamic typing][63] section).

The initializer pattern is used to assure that the object is properly initialized by its superclass before the init method performs its initialization. It performs the following actions:

A non-valid object pointer has the value _nil_; conditional statements like "if" treat nil like a null pointer, so the initialization code will not be executed if \[super init\] returned nil. If there is an error in initialization the init method should perform any necessary cleanup, including sending a "release" message to self, and return _nil_ to indicate that initialization failed. Any checking for such errors must only be performed after having called the superclass initialization to ensure that destroying the object will be done correctly.

If a class has more than one initialization method, only one of them (the "designated initializer") needs to follow this pattern; others should call the designated initializer instead of the superclass initializer.

## Protocols

In other programming languages, these are called "interfaces".

Objective-C was extended at [NeXT][13] to introduce the concept of [multiple inheritance][59] of specification, but not implementation, through the introduction of [protocols][69]. This is a pattern achievable either as an abstract multiple inherited base class in [C++][54], or as an "interface" (as in Java and C\#). Objective-C makes use of ad hoc protocols called _informal protocols_ and compiler-enforced protocols called _formal protocols_.

An informal protocol is a list of methods that a class can opt to implement. It is specified in the documentation, since it has no presence in the language. Informal protocols are implemented as a [category][70] (see below) on NSObject and often include optional methods, which, if implemented, can change the behavior of a class. For example, a text field class might have a [delegate][71] that implements an informal protocol with an optional method for performing auto-completion of user-typed text. The text field discovers whether the delegate implements that method (via [reflection][72]) and, if so, calls the delegate's method to support the auto-complete feature.

A formal protocol is similar to an [interface][73] in Java, C\#, and [Ada 2005][74]. It is a list of methods that any class can declare itself to implement. Versions of Objective-C before 2.0 required that a class must implement all methods in a protocol it declares itself as adopting; the compiler will emit an error if the class does not implement every method from its declared protocols. Objective-C 2.0 added support for marking certain methods in a protocol optional, and the compiler will not enforce implementation of optional methods.

A class must be declared to implement that protocol to be said to conform to it. This is detectable at runtime. Formal protocols cannot provide any implementations; they simply assure callers that classes that conform to the protocol will provide implementations. In the NeXT/Apple library, protocols are frequently used by the Distributed Objects system to represent the abilities of an object executing on a remote system.

The syntax

denotes that there is the abstract idea of locking. By stating in the class definition that the protocol is implemented,

instances of NSLock claim that they will provide an implementation for the two instance methods.

## Dynamic typing

Objective-C, like Smalltalk, can use [dynamic typing][75]: an object can be sent a message that is not specified in its interface. This can allow for increased flexibility, as it allows an object to "capture" a message and send the message to a different object that can respond to the message appropriately, or likewise send the message on to another object. This behavior is known as _message forwarding_ or _delegation_ (see below). Alternatively, an error handler can be used in case the message cannot be forwarded. If an object does not forward a message, respond to it, or handle an error, then the system will generate a runtime exception.[\[20\]][76] If messages are sent to _nil_ (the null object pointer), they will be silently ignored or raise a generic exception, depending on compiler options.

Static typing information may also optionally be added to variables. This information is then checked at compile time. In the following four statements, increasingly specific type information is provided. The statements are equivalent at runtime, but the extra information allows the compiler to warn the programmer if the passed argument does not match the type specified.

In the above statement, _foo_ may be of any class.

In the above statement, _foo_ may be an instance of any class that conforms to the _`NSCopying`_ protocol.

In the above statement, _foo_ must be an instance of the _NSNumber_ class.

In the above statement, _foo_ must be an instance of the _NSNumber_ class, and it must conform to the _`NSCopying`_ protocol.

## Forwarding

Objective-C permits the sending of a message to an object that may not respond. Rather than responding or simply dropping the message, an object can forward the message to an object that can respond. Forwarding can be used to simplify implementation of certain [design patterns][77], such as the [observer pattern][78] or the [proxy pattern][79].

The Objective-C runtime specifies a pair of methods in Object

An object wishing to implement forwarding needs only to override the forwarding method with a new method to define the forwarding behavior. The action method performv:: need not be overridden, as this method merely performs an action based on the selector and arguments. Notice the `SEL` type, which is the type of messages in Objective-C.

Note: in OpenStep, Cocoa, and GNUstep, the commonly used frameworks of Objective-C, one does not use the Object class. The - (void)forwardInvocation:(NSInvocation \*)anInvocation method of the NSObject class is used to do forwarding.

## Example

Here is an example of a program that demonstrates the basics of forwarding.

## Notes

When compiled using [gcc][16], the compiler reports:

The compiler is reporting the point made earlier, that Forwarder does not respond to hello messages. In this circumstance, it is safe to ignore the warning since forwarding was implemented. Running the program produces this output:

## Categories

During the design of Objective-C, one of the main concerns was the maintainability of large code bases. Experience from the [structured programming][80] world had shown that one of the main ways to improve code was to break it down into smaller pieces. Objective-C borrowed and extended the concept of _categories_ from Smalltalk implementations to help with this process.[\[21\]][81]

Furthermore, the methods within a category are added to a class at [run-time][82]. Thus, categories permit the programmer to add methods to an existing class without the need to recompile that class or even have access to its source code. For example, if a system does not contain a [spell checker][83] in its String implementation, it could be added without modifying the String source code.

Methods within categories become indistinguishable from the methods in a class when the program is run. A category has full access to all of the instance variables within the class, including private variables.

If a category declares a method with the same [method signature][84] as an existing method in a class, the category's method is adopted. Thus categories can not only add methods to a class, but also replace existing methods. This feature can be used to fix bugs in other classes by rewriting their methods, or to cause a global change to a class's behavior within a program. If two categories have methods with the same name (not to be confused with method signature), it is undefined which category's method is adopted.

Other languages have attempted to add this feature in a variety of ways. [TOM][85] took the Objective-C system a step further and allowed for the addition of variables also. Other languages have used [prototype-based][86] solutions instead, the most notable being [Self][87].

The C\# and Visual Basic.NET languages implement superficially similar functionality in the form of [extension methods][88], but these lack access to the private variables of the class.[\[22\]][89] [Ruby][90] and several other dynamic programming languages refer to the technique as "[monkey patching][91]".

[Logtalk][92] implements a concept of categories (as first-class entities) that subsumes Objective-C categories functionality (Logtalk categories can also be used as fine-grained units of composition when defining e.g. new classes or prototypes; in particular, a Logtalk category can be virtually imported by any number of classes and prototypes).

## Example usage of categories

This example builds up an Integer class, by defining first a basic class with only [accessor methods][93] implemented, and adding two categories, Arithmetic and Display, which extend the basic class. While categories can access the base class's private data members, it is often good practice to access these private data members through the accessor methods, which helps keep categories more independent from the base class. Implementing such accessors is one typical usage of categories. Another is to use categories to add methods to the base class. However, it is not regarded as good practice to use categories for subclass overriding, also known as [monkey patching][91]. Informal protocols are implemented as a category on the base NSObject class. By convention, files containing categories that extend base classes will take the name _BaseClass+ExtensionClass.h_.

## Notes

Compilation is performed, for example, by:

One can experiment by leaving out the \#import "Integer+Arithmetic.h" and \[num1 add:num2\] lines and omitting Integer+Arithmetic.m in compilation. The program will still run. This means that it is possible to _mix-and-match_ added categories if needed; if a category does not need to have some ability, it can simply not be compile in.

## Posing

Objective-C permits a class to wholly replace another class within a program. The replacing class is said to "pose as" the target class.

Class posing was declared deprecated with [Mac OS X v10.5][94], and is unavailable in the 64-bit runtime. Similar functionality can be achieved by using method swizzling in categories, that swaps one method's implementation with another's that have the same signature.

For the versions still supporting posing, all messages sent to the target class are instead received by the posing class. There are several restrictions:

Posing, similarly with categories, allows global augmentation of existing classes. Posing permits two features absent from categories:

For example,

This intercepts every invocation of setMainMenu to NSApplication.

## \#import

In the C language, the `#include` pre-compile directive always causes a file's contents to be inserted into the source at that point. Objective-C has the `#import` directive, equivalent except that each file is included only once per compilation unit, obviating the need for [include guards][95].

## Other features

Objective-C's features often allow for flexible, and often easy, solutions to programming issues.

## Language variants

## Objective-C++

Objective-C++ is a language variant accepted by the front-end to the [GNU Compiler Collection][16] and [Clang][17], which can compile source files that use a combination of C++ and Objective-C syntax. Objective-C++ adds to C++ the extensions that Objective-C adds to C. As nothing is done to unify the semantics behind the various language features, certain restrictions apply:

## Objective-C 2.0

At the 2006 [Worldwide Developers Conference][96], Apple announced the release of "Objective-C 2.0," a revision of the Objective-C language to include "modern garbage collection, syntax enhancements,[\[25\]][97] runtime performance improvements,[\[26\]][98] and 64-bit support". [Mac OS X v10.5][94], released in October 2007, included an Objective-C 2.0 compiler. [GCC 4.6][16] supports many new Objective-C features, such as declared and synthesized properties, dot syntax, fast enumeration, optional protocol methods, method/protocol/class attributes, class extensions and a new GNU Objective-C runtime API.[\[27\]][99]

## Garbage collection

Objective-C 2.0 provided an optional conservative, generational [garbage collector][100]. When run in [backwards-compatible][101] mode, the runtime turned [reference counting][102] operations such as "retain" and "release" into [no-ops][103]. All objects were subject to garbage collection when garbage collection was enabled. Regular C pointers could be qualified with "\_\_strong" to also trigger the underlying write-barrier compiler intercepts and thus participate in garbage collection.[\[28\]][104] A zero-ing weak subsystem was also provided such that pointers marked as "\_\_weak" are set to zero when the object (or more simply, GC memory) is collected. The garbage collector does not exist on the iOS implementation of Objective-C 2.0\.[\[29\]][105] Garbage collection in Objective-C runs on a low-priority background thread, and can halt on user events, with the intention of keeping the user experience responsive.[\[30\]][106]

Garbage collection was deprecated in OS X v10.8 in favor of [Automatic Reference Counting][107] (ARC).[\[31\]][108] Objective-C on [iOS 7][109] running on [ARM64][110] uses 19 bits out of a 64-bit word to store the reference count, as a form of [tagged pointers][111].[\[32\]][112][\[33\]][113]

## Properties

Objective-C 2.0 introduces a new syntax to declare instance variables as [properties][114], with optional attributes to configure the generation of accessor methods. Properties are, in a sense, public instance variables; that is, declaring an instance variable as a property provides external classes with access (possibly limited, e.g. read only) to that property. A property may be declared as "readonly", and may be provided with storage semantics such as `assign`, `copy` or `retain`. By default, properties are considered `atomic`, which results in a lock preventing multiple threads from accessing them at the same time. A property can be declared as `nonatomic`, which removes this lock.

Properties are implemented by way of the `@synthesize` keyword, which generates getter (and setter, if not read-only) methods according to the property declaration. Alternatively, the getter and setter methods must be implemented explicitly, or the `@dynamic` keyword can be used to indicate that accessor methods will be provided by other means. When compiled using clang 3.1 or higher, all properties which are not explicitly declared with `@dynamic`, marked `readonly` or have complete user-implemented getter and setter will be automatically implicitly `@synthesize`'d.

Properties can be accessed using the traditional message passing syntax, dot notation, or, in Key-Value Coding, by name via the "valueForKey:"/"setValue:forKey:" methods.

In order to use dot notation to invoke property accessors within an instance method, the "self" keyword should be used:

A class or protocol's properties may be dynamically [introspected][115].

## Non-fragile instance variables

Objective-C 2.0 provides non-fragile instance variables where supported by the runtime (i.e. when building code for 64-bit Mac OS X, and all iOS). Under the modern runtime, an extra layer of indirection is added to instance variable access, allowing the dynamic linker to adjust instance layout at runtime. This feature allows for two important improvements to Objective-C code:

## Fast enumeration

Instead of using an NSEnumerator object or indices to iterate through a collection, Objective-C 2.0 offers the fast enumeration syntax. In Objective-C 2.0, the following loops are functionally equivalent, but have different performance traits.

Fast enumeration generates more efficient code than standard enumeration because method calls to enumerate over objects are replaced by pointer arithmetic using the NSFastEnumeration protocol.[\[34\]][116]

## Class extensions

A class extension has the same syntax as a category declaration with no category name, and the methods and properties declared in it are added directly to the main class. It is mostly used as an alternative to a category to add methods to a class without advertising them in the public headers, with the advantage that for class extensions the compiler checks that all the privately declared methods are actually implemented.[\[35\]][117]

## Implications for Cocoa development

All Objective-C applications developed for Mac OS X that make use of the above improvements for Objective-C 2.0 are incompatible with all operating systems prior to 10.5 (Leopard). Since fast enumeration does not generate exactly the same binaries as standard enumeration, its use will cause an application to crash on OS X version 10.4 or earlier.

## Blocks

Blocks is a nonstandard extension for Objective-C (and [C][5] and [C++][54]) that uses special syntax to create [closures][118]. Blocks are only supported in [Mac OS X 10.6 "Snow Leopard"][119] or later, [iOS 4][120] or later, and GNUstep with libobjc2 1.7 and compiling with [clang][17] 3.1 or later.[\[36\]][121]

## Modern Objective-C

## Automatic Reference Counting

Automatic Reference Counting (ARC) is a compile-time feature that eliminates the need for programmers to manually manage retain counts using `retain` and `release`.[\[37\]][122] Unlike [garbage collection][100], which occurs at run time, ARC eliminates the overhead of a separate process managing retain counts. ARC and manual memory management are not mutually exclusive; programmers can continue to use non-ARC code in ARC-enabled projects by disabling ARC for individual code files. XCode can also attempt to automatically upgrade a project to ARC.

## Literals

NeXT and Apple Obj-C runtimes have long included a short-form way to create new strings, using the literal syntax `@"a new string"`, or drop to CoreFoundation constants `kCFBooleanTrue` and `kCFBooleanFalse` for `NSNumber` with Boolean values. Using this format saves the programmer from having to use the longer `initWithString` or similar methods when doing certain operations.

When using Apple [LLVM][123] compiler 4.0 or later, arrays, dictionaries, and numbers (`NSArray`, `NSDictionary`, `NSNumber` classes) can also be created using literal syntax instead of methods.[\[38\]][124]

Example without literals:

Example with literals:

However, different from [string literals][125], which compile to constants in the executable, these literals compile to code equivalent to the above method calls. In particular, under manually reference-counted memory management, these objects are autoreleased, which requires added care when e.g., used with function-static variables or other kinds of globals.

## Subscripting

When using Apple [LLVM][123] compiler 4.0 or later, arrays and dictionaries (`NSArray` and `NSDictionary` classes) can be manipulated using subscripting.[\[38\]][124] Subscripting can be used to retrieve values from indexes (array) or keys (dictionary), and with mutable objects, can also be used to set objects to indexes or keys. In code, subscripting is represented using brackets `[ ]`.[\[39\]][126]

Example without subscripting:

Example with subscripting:

## "Modern" Objective-C syntax (1997)

After the purchase of NeXT by Apple, attempts were made to make the language more acceptable to programmers more familiar with [Java][127] than Smalltalk. One of these attempts was introducing what was dubbed "Modern Syntax" for Objective-C at the time[\[40\]][128] (as opposed to the current, "classic" syntax). There was no change in behaviour, this was merely an alternative syntax. Instead of writing a method invocation like

It was instead written as

Similarly, declarations went from the form

This "modern" syntax is no longer supported in current dialects of the Objective-C language.

## Portable Object Compiler

Besides the [GCC][16]/[NeXT][13]/[Apple][6] implementation, which added several extensions to the original [Stepstone][19] implementation, another [free, open-source][129] Objective-C implementation called the Portable Object Compiler[\[41\]][130] also exists. The set of extensions implemented by the Portable Object Compiler differs from the GCC/NeXT/Apple implementation; in particular, it includes [Smalltalk][3]-like blocks for Objective-C, while it lacks protocols and categories, two features used extensively in OpenStep and its derivatives and relatives. Overall, POC represents an older, pre-NeXT stage in the language's evolution, roughly conformant to Brad Cox's 1991 book.

It also includes a runtime library called ObjectPak, which is based on Cox's original ICPak101 library (which in turn derives from the Smalltalk-80 class library), and is quite radically different from the OpenStep FoundationKit.

## GEOS Objective-C

The [PC GEOS][131] system used a programming language known as **GEOS Objective-C** or **goc**;[\[42\]][132] despite the name similarity, the two languages are similar only in overall concept and the use of keywords prefixed with an @ sign.

## Clang

The [Clang][17] compiler suite, part of the [LLVM][123] project, implements Objective-C, and other languages.

## Library use

Objective-C today is often used in tandem with a fixed library of standard objects (often known as a "kit" or "framework"), such as [Cocoa][10], [GNUstep][34] or [ObjFW][133]. These libraries often come with the operating system: the GNUstep libraries often come with [Linux][134] based distributions and Cocoa comes with OS X. The programmer is not forced to inherit functionality from the existing base class (NSObject / OFObject). Objective-C allows for the declaration of new root classes that do not inherit any existing functionality. Originally, Objective-C based programming environments typically offered an Object class as the base class from which almost all other classes inherited. With the introduction of OpenStep, NeXT created a new base class named NSObject, which offered additional features over Object (an emphasis on using object references and reference counting instead of raw pointers, for example). Almost all classes in Cocoa inherit from NSObject.

Not only did the renaming serve to differentiate the new default behavior of classes within the OpenStep API, but it allowed code that used Object---the original base class used on NeXTSTEP (and, more or less, other Objective-C class libraries)---to co-exist in the same runtime with code that used NSObject (with some limitations). The introduction of the two letter prefix also became a simplistic form of namespaces, which Objective-C lacks. Using a prefix to create an informal packaging identifier became an informal coding standard in the Objective-C community, and continues to this day.

More recently, package managers have started appearing, such as [CocoaPods][135], which aims to be both a package manager and a repository of packages. A lot of open-source Objective-C code that was written in the last few years can now be installed using CocoaPods.

## Analysis of the language

Objective-C implementations use a thin [runtime system][37] written in C, which adds little to the size of the application. In contrast, most object-oriented systems at the time that it was created used large [virtual machine][136] runtimes. Programs written in Objective-C tend to be not much larger than the size of their code and that of the libraries (which generally do not need to be included in the software distribution), in contrast to Smalltalk systems where a large amount of memory was used just to open a window. Objective-C applications tend to be larger than similar C or C++ applications because Objective-C dynamic typing does not allow methods to be stripped or inlined. Since the programmer has such freedom to delegate, forward calls, build selectors on the fly and pass them to the runtime system, the Objective-C compiler cannot assume it is safe to remove unused methods or to inline calls.

Likewise, the language can be implemented atop extant C compilers (in [GCC][16], first as a preprocessor, then as a module) rather than as a new compiler. This allows Objective-C to leverage the huge existing collection of C code, libraries, tools, etc. Existing C libraries can be wrapped in Objective-C [wrappers][137] to provide an OO-style interface. In this aspect, it is similar to [GObject][138] library and [Vala][139] language, which are widely used in development of [GTK][140] applications.

All of these practical changes lowered the [barrier to entry][141], likely the biggest problem for the widespread acceptance of Smalltalk in the 1980s.

A common criticism is that Objective-C does not have language support for [namespaces][142]. Instead, programmers are forced to add prefixes to their class names, which are traditionally shorter than namespace names and thus more prone to collisions. As of 2007, all Mac OS X classes and functions in the [Cocoa][143] programming environment are prefixed with "NS" (e.g. NSObject, NSButton) to identify them as belonging to the Mac OS X or iOS core; the "NS" derives from the names of the classes as defined during the development of [NeXTSTEP][14].

Since Objective-C is a strict superset of C, it does not treat C primitive types as [first-class objects][144].

Unlike [C++][54], Objective-C does not support [operator overloading][145]. Also unlike C++, Objective-C allows an object to directly inherit only from one class (forbidding [multiple inheritance][59]). However, in most cases, categories and protocols may be used as alternative ways to achieve the same results.

Because Objective-C uses dynamic runtime typing and because all method calls are function calls (or, in some cases, syscalls), many common performance optimizations cannot be applied to Objective-C methods (for example: inlining, constant propagation, interprocedural optimizations, and scalar replacement of aggregates). This limits the performance of Objective-C abstractions relative to similar abstractions in languages such as C++ where such optimizations are possible.

## Memory management

The first versions of Objective-C did not support [garbage collection][100]. At the time this decision was a matter of some debate, and many people considered long "dead times" (when Smalltalk performed collection) to render the entire system unusable. Some 3rd party implementations have added this feature (most notably GNUstep) and Apple has implemented it as of [Mac OS X v10.5][94].[\[43\]][146] However, in more recent versions of Mac OS X and iOS, garbage collection has been deprecated in favor of [Automatic Reference Counting][107] (ARC), introduced in 2011\.

With ARC, the compiler inserts retain and release calls automatically into Objective-C code based on [static code analysis][147]. The automation relieves the programmer of having to write in memory management code. ARC also adds weak references to the Objective-C language.[\[44\]][148]

## Philosophical differences between Objective-C and C++

The design and implementation of [C++][54] and Objective-C represent fundamentally different approaches to extending C.

In addition to C's style of procedural programming, C++ directly supports certain forms of [object-oriented programming][1], [generic programming][149], and [metaprogramming][150]. C++ also comes with [a large standard library][151] that includes [several container classes][152]. Similarly, Objective-C adds [object-oriented programming][153], [dynamic typing][75], and [reflection][154] to C. Objective-C does not provide a standard library _per se_, but in most places where Objective-C is used, it is used with an [OpenStep][35]-like library such as [OPENSTEP][155], [Cocoa][10], or [GNUstep][34], which provides functionality similar to C++'s standard library.

One notable difference is that Objective-C provides runtime support for [reflective][154] features, whereas C++ adds only a small amount of runtime support to C. In Objective-C, an object can be queried about its own properties, e.g., whether it will respond to a certain message. In C++, this is not possible without the use of external libraries.

The use of reflection is part of the wider distinction between dynamic (run-time) features and static (compile-time) features of a language. Although Objective-C and C++ each employ a mix of both features, Objective-C is decidedly geared toward run-time decisions while C++ is geared toward compile-time decisions. The tension between dynamic and static programming involves many of the classic trade-offs in programming: dynamic features add flexibility, static features add speed and type checking.

[Generic programming][149] and metaprogramming can be implemented in both languages using [runtime polymorphism][156]. In C++ this takes the form of [virtual functions][157] and [runtime type identification][158], while Objective-C offers dynamic typing and reflection. Objective-C lacks compile-time polymorphism ([generic functions][159]) entirely, while C++ supports it via [function overloading][160] and [templates][161].

## See also

## References

## Further reading

## External links

[0]: /wiki/General-purpose_programming_language "General-purpose programming language"
[1]: /wiki/Object-oriented_programming "Object-oriented programming"
[2]: /wiki/Programming_language "Programming language"
[3]: /wiki/Smalltalk "Smalltalk"
[4]: /wiki/Message_passing "Message passing"
[5]: /wiki/C_(programming_language) "C (programming language)"
[6]: /wiki/Apple_Inc. "Apple Inc."
[7]: /wiki/OS_X "OS X"
[8]: /wiki/IOS "IOS"
[9]: /wiki/Application_programming_interface "Application programming interface"
[10]: /wiki/Cocoa_(API) "Cocoa (API)"
[11]: /wiki/Cocoa_Touch "Cocoa Touch"
[12]: /wiki/Swift_(programming_language) "Swift (programming language)"
[13]: /wiki/NeXT "NeXT"
[14]: /wiki/NeXTSTEP "NeXTSTEP"
[15]: #cite_note-3
[16]: /wiki/GNU_Compiler_Collection "GNU Compiler Collection"
[17]: /wiki/Clang "Clang"
[18]: /wiki/Brad_Cox "Brad Cox"
[19]: /wiki/Stepstone "Stepstone"
[20]: #cite_note-Wired1-4
[21]: /wiki/ITT_Corporation "ITT Corporation"
[22]: #cite_note-5
[23]: /wiki/Software_engineering "Software engineering"
[24]: #cite_note-love2009-6
[25]: #cite_note-7
[26]: /wiki/Software_component "Software component"
[27]: /wiki/Application_Kit "Application Kit"
[28]: /wiki/Foundation_Kit "Foundation Kit"
[29]: /wiki/GPL "GPL"
[30]: /wiki/Richard_M._Stallman "Richard M. Stallman"
[31]: #cite_note-8
[32]: /wiki/GNU_Public_License "GNU Public License"
[33]: /wiki/GNU "GNU"
[34]: /wiki/GNUstep "GNUstep"
[35]: /wiki/OpenStep "OpenStep"
[36]: #cite_note-GNUstep_site-9
[37]: /wiki/Run_time_system "Run time system"
[38]: /wiki/Denmark "Denmark"
[39]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[40]: #cite_note-10
[41]: /wiki/Apple_Computer "Apple Computer"
[42]: /wiki/Project_Builder "Project Builder"
[43]: /wiki/Interface_Builder "Interface Builder"
[44]: /wiki/Xcode "Xcode"
[45]: /wiki/WWDC "WWDC"
[46]: /wiki/Superset "Superset"
[47]: #cite_note-11
[48]: #cite_note-12
[49]: #cite_note-13
[50]: #cite_note-14
[51]: #cite_note-15
[52]: #cite_note-16
[53]: /wiki/Simula "Simula"
[54]: /wiki/C%2B%2B "C++"
[55]: /wiki/Name_binding "Name binding"
[56]: /wiki/Pointer_(computer_programming) "Pointer (computer programming)"
[57]: #cite_note-17
[58]: #cite_note-18
[59]: /wiki/Multiple_inheritance "Multiple inheritance"
[60]: /wiki/Compile-time_binding "Compile-time binding"
[61]: /wiki/Dynamic_dispatch "Dynamic dispatch"
[62]: /wiki/Abstract_method "Abstract method"
[63]: #Dynamic_typing
[64]: /wiki/Header_file "Header file"
[65]: /wiki/Class_method "Class method"
[66]: /wiki/Instance_method "Instance method"
[67]: #cite_note-19
[68]: /wiki/Named_parameter "Named parameter"
[69]: /wiki/Protocol_(object-oriented_programming) "Protocol (object-oriented programming)"
[70]: /wiki/Objective-C#Categories "Objective-C"
[71]: /wiki/Delegation_(programming) "Delegation (programming)"
[72]: /wiki/Reflection_(computer_programming) "Reflection (computer programming)"
[73]: /wiki/Interface_(computer_science) "Interface (computer science)"
[74]: /wiki/Ada_(programming_language) "Ada (programming language)"
[75]: /wiki/Dynamic_typing "Dynamic typing"
[76]: #cite_note-20
[77]: /wiki/Design_pattern_(computer_science) "Design pattern (computer science)"
[78]: /wiki/Observer_pattern "Observer pattern"
[79]: /wiki/Proxy_pattern "Proxy pattern"
[80]: /wiki/Structured_programming "Structured programming"
[81]: #cite_note-21
[82]: /wiki/Run_time_(program_lifecycle_phase) "Run time (program lifecycle phase)"
[83]: /wiki/Spell_checker "Spell checker"
[84]: /wiki/Method_signature "Method signature"
[85]: /wiki/TOM_(object-oriented_programming_language) "TOM (object-oriented programming language)"
[86]: /wiki/Prototype-based_programming "Prototype-based programming"
[87]: /wiki/Self_(programming_language) "Self (programming language)"
[88]: /wiki/Extension_method "Extension method"
[89]: #cite_note-22
[90]: /wiki/Ruby_(programming_language) "Ruby (programming language)"
[91]: /wiki/Monkey_patch "Monkey patch"
[92]: /wiki/Logtalk "Logtalk"
[93]: /wiki/Method_(computer_science) "Method (computer science)"
[94]: /wiki/Mac_OS_X_v10.5 "Mac OS X v10.5"
[95]: /wiki/Include_guard "Include guard"
[96]: /wiki/Worldwide_Developers_Conference "Worldwide Developers Conference"
[97]: #cite_note-25
[98]: #cite_note-26
[99]: #cite_note-27
[100]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[101]: /wiki/Backwards-compatible "Backwards-compatible"
[102]: /wiki/Reference_counting "Reference counting"
[103]: /wiki/No-op "No-op"
[104]: #cite_note-28
[105]: #cite_note-29
[106]: #cite_note-30
[107]: /wiki/Automatic_Reference_Counting "Automatic Reference Counting"
[108]: #cite_note-31
[109]: /wiki/IOS_7 "IOS 7"
[110]: /wiki/ARM64 "ARM64"
[111]: /wiki/Tagged_pointer "Tagged pointer"
[112]: #cite_note-32
[113]: #cite_note-33
[114]: /wiki/Property_(programming) "Property (programming)"
[115]: /wiki/Type_introspection "Type introspection"
[116]: #cite_note-34
[117]: #cite_note-35
[118]: /wiki/Closure_(programming) "Closure (programming)"
[119]: /wiki/Mac_OS_X_Snow_Leopard "Mac OS X Snow Leopard"
[120]: /wiki/IOS_4 "IOS 4"
[121]: #cite_note-Blocks_requirements-36
[122]: #cite_note-Transitioning_to_ARC-37
[123]: /wiki/LLVM "LLVM"
[124]: #cite_note-Programming_with_Obj-C_.E2.80.93_Values_and_Collections-38
[125]: /wiki/String_literal "String literal"
[126]: #cite_note-ObjCLiterals-39
[127]: /wiki/Java_(programming_language) "Java (programming language)"
[128]: #cite_note-40
[129]: /wiki/Free_and_open_source_software "Free and open source software"
[130]: #cite_note-41
[131]: /wiki/GEOS_(16-bit_operating_system) "GEOS (16-bit operating system)"
[132]: #cite_note-42
[133]: /w/index.php?title=ObjFW&action=edit&redlink=1 "ObjFW (page does not exist)"
[134]: /wiki/Linux "Linux"
[135]: /wiki/CocoaPods "CocoaPods"
[136]: /wiki/Virtual_machine "Virtual machine"
[137]: /wiki/Adapter_pattern "Adapter pattern"
[138]: /wiki/GObject "GObject"
[139]: /wiki/Vala_(programming_language) "Vala (programming language)"
[140]: /wiki/GTK "GTK"
[141]: /wiki/Barriers_to_entry "Barriers to entry"
[142]: /wiki/Namespaces "Namespaces"
[143]: /wiki/Cocoa_(software) "Cocoa (software)"
[144]: /wiki/First-class_object "First-class object"
[145]: /wiki/Operator_overloading "Operator overloading"
[146]: #cite_note-43
[147]: /wiki/Static_program_analysis "Static program analysis"
[148]: #cite_note-44
[149]: /wiki/Generic_programming "Generic programming"
[150]: /wiki/Metaprogramming "Metaprogramming"
[151]: /wiki/C%2B%2B_standard_library "C++ standard library"
[152]: /wiki/Sequence_container_(C%2B%2B) "Sequence container (C++)"
[153]: /wiki/Polymorphism_in_object-oriented_programming "Polymorphism in object-oriented programming"
[154]: /wiki/Reflection_(computer_science) "Reflection (computer science)"
[155]: /wiki/OPENSTEP "OPENSTEP"
[156]: /wiki/Runtime_polymorphism "Runtime polymorphism"
[157]: /wiki/Virtual_function "Virtual function"
[158]: /wiki/Runtime_type_identification "Runtime type identification"
[159]: /wiki/Generic_function "Generic function"
[160]: /wiki/Function_overloading "Function overloading"
[161]: /wiki/Template_(C%2B%2B) "Template (C++)"