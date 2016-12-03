**SPARK** is a [formally defined][0] [computer][1] [programming language][2] based on the [Ada][3] programming language, intended for the development of high integrity [software][4] used in systems where predictable and highly reliable operation is essential. It facilitates the development of applications that demand safety, security, or business integrity.

Originally, there were three versions of the SPARK language (SPARK83, SPARK95, SPARK2005) based on Ada 83, Ada 95 and Ada 2005 respectively.

A fourth version of the SPARK language, [SPARK 2014][5], based on Ada 2012, was released on April 30, 2014\. SPARK 2014 is a complete re-design of the language and supporting verification tools.

The SPARK language consists of a well-defined subset of the Ada language that uses contracts to describe the specification of components in a form that is suitable for both static and dynamic verification.

In SPARK83/95/2005, the contracts are encoded in Ada comments (and so are ignored by any standard Ada compiler), but are processed by the SPARK "Examiner" and its associated tools.

SPARK 2014, in contrast, uses Ada 2012's built-in "aspect" syntax to express contracts, bringing them into the core of the language. The main tool for SPARK 2014 (GNATprove) is based on the GNAT/GCC infrastructure, and re-uses almost the entirety of the GNAT Ada 2012 front-end.

## Technical overview

SPARK aims to exploit the strengths of Ada while trying to eliminate all its potential ambiguities and insecurities. SPARK programs are by design meant to be unambiguous, and their behavior is required to be unaffected by the choice of Ada [compiler][6]. These goals are achieved partly by omitting some of Ada's more problematic features (such as unrestricted [parallel tasking][7]) and partly by introducing contracts which encode the application designer's intentions and requirements for certain components of a program.

The combination of these approaches is meant to allow SPARK to meet its design objectives, which are:

## Contract examples

Consider the Ada subprogram specification below:

What does this subprogram actually do? In pure Ada, it could do virtually anything -- it might increment the `X` by one or one thousand; or it might set some global counter to `X` and return the original value of the counter in `X`; or it might do absolutely nothing with `X` at all.

With SPARK 2014, contracts are added to the code to provide additional information regarding what a subprogram actually does. For example, we may alter the above specification to say:

This specification tells us that the Increment procedure does not update or read from any global variables and that the only data item used in calculating the new value of X is X itself.

Alternatively, the designer might specify:

The second specification tells us that `Increment` will use some global variable called "`Count`" in the same package as `Increment` and that the exported value of `Count` is dependent on the imported values of `Count` and `X`, but that exported value of `X` does not depend on any variables at all -- it will be derived simply from constant data.

If GNATprove is then run on the specification and corresponding body of a subprogram, it will analyse the body of the subprogram to build up a model of the information flow. This model is then compared against that which has been specified by the annotations and any discrepancies reported to the user.

We can further extend these specifications by asserting various properties that either need to hold when a subprogram is called (_[preconditions][8]_) or that will hold once execution of the subprogram has completed (_[postconditions][9]_). For example, we could say the following:

This specification now says that not only is `X` only derived from itself, but that before `Increment` is called `X` must be strictly less than the last possible value of its type and that afterwards `X` will be equal to the initial value of `X` plus one -- no more and no less.

## Verification Conditions

GNATprove can also generate a set of _[Verification Conditions][10]_ or VCs. VCs are used to attempt to establish certain properties hold for a given subprogram. At a minimum, the GNATprove will generate VCs attempting to establish that all run-time errors cannot occur within a subprogram, such as

If a postcondition or other assertions are added to a subprogram, GNATprove will also generate VCs that require the user to show that these properties hold for all possible paths through the subprogram.

Under the hood, GNATprove uses the Why3 intermediate language and VC Generator, and the Alt-Ergo theorem prover to discharge VCs. Use of other provers (including interactive proof checkers) is also possible through other components of the Why3 toolset.

## History

The first version of SPARK (based on Ada 83) was produced at the [University of Southampton][11] (with UK [Ministry of Defence][12] sponsorship) by Bernard Carré and Trevor Jennings. Subsequently the language was progressively extended and refined, first by Program Validation Limited and then by Praxis Critical Systems Limited. In 2004, Praxis Critical Systems Limited changed its name to Praxis High Integrity Systems Limited. In January 2010, the company became [Altran Praxis][13].

In early 2009, Praxis formed a partnership with AdaCore, and released "SPARK Pro" under the terms of the GPL. This was followed in June 2009 by the SPARK GPL Edition 2009, aimed at the [FLOSS][14] and academic communities.

In June 2010, Altran-Praxis announced that the SPARK programming language would be used in the software of US Lunar project _CubeSat_, expected to be completed in 2015\.

In January 2013, Altran-Praxis changed its name to Altran.

The first Pro release of SPARK 2014 was announced on April 30, 2014, and was quickly followed by the SPARK 2014 GPL edition, aimed at the [FLOSS][14] and academic communities.

## Industrial applications

## Safety related systems

SPARK has been used in several high profile safety-critical systems, covering commercial aviation (Rolls-Royce Trent series jet engines, the ARINC ACAMS system, the Lockheed Martin C130J), military aviation (EuroFighter Typhoon, Harrier GR9, AerMacchi M346), air-traffic management (UK NATS iFACTS system), rail (numerous signalling applications), medical (the LifeFlow ventricular assist device), and space applications (the [Vermont Technical College CubeSat project][15]).

## Security related systems

SPARK has also been used in secure systems development. Users include Rockwell Collins (Turnstile and SecureOne cross-domain solutions), the development of the original MULTOS CA, the NSA Tokeneer demonstrator, the secunet multi-level workstation, and the Muen separation kernel.

In August 2010, Rod Chapman, principal engineer of Altran Praxis, implemented [Skein][16], one of candidates for [SHA-3][17], in SPARK. He wanted to compare the performance of the SPARK and C implementations. After careful optimization, he managed to have the SPARK version only about 5 to 10% slower than C. Later improvement to the Ada middle-end in GCC (implemented by Eric Botcazou of AdaCore) closed the gap, with the SPARK code matching the C in performance exactly.[\[1\]][18]

## See also

## Notes

## References

## External links

[0]: /wiki/Formal_semantics_of_programming_languages "Formal semantics of programming languages"
[1]: /wiki/Computer "Computer"
[2]: /wiki/Programming_language "Programming language"
[3]: /wiki/Ada_(programming_language) "Ada (programming language)"
[4]: /wiki/Computer_software "Computer software"
[5]: http://www.spark-2014.org
[6]: /wiki/Compiler "Compiler"
[7]: /wiki/Task_parallelism "Task parallelism"
[8]: /wiki/Precondition "Precondition"
[9]: /wiki/Postcondition "Postcondition"
[10]: /w/index.php?title=Verification_Condition&action=edit&redlink=1 "Verification Condition (page does not exist)"
[11]: /wiki/University_of_Southampton "University of Southampton"
[12]: /wiki/Ministry_of_Defence_(United_Kingdom) "Ministry of Defence (United Kingdom)"
[13]: /wiki/Altran_Praxis "Altran Praxis"
[14]: /wiki/FLOSS "FLOSS"
[15]: /wiki/Vermont_Lunar_CubeSat "Vermont Lunar CubeSat"
[16]: /wiki/Skein_(hash_function) "Skein (hash function)"
[17]: /wiki/Sha-3 "Sha-3"
[18]: #cite_note-1