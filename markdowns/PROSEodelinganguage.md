PROSE[\[1\]][0][\[2\]][1][\[3\]][2][\[4\]][3] was the mathematical [4GL][4] [virtual machine][5] which established the holistic modeling paradigm known as Synthetic Calculus[\[5\]][6][\[6\]][7][\[7\]][8] (AKA MetaCalculus). A successor to the SLANG[\[8\]][9]/CUE[\[9\]][10] simulation and optimization language developed at TRW Systems, it was introduced in 1974 on Control Data supercomputers. It was the first commercial language[\[10\]][11][\[11\]][12][\[12\]][13][\[13\]][14] to employ [automatic differentiation (AD)][15], which was optimized to loop in the instruction-stack of the [CDC 6600 CPU][16].

Although PROSE was a rich block-structured procedural language, its focus was the blending of simultaneous-variable _mathematical systems_ such as:

Each of these kinds of system models were distinct and had operator templates to automate and solve them, added to the procedural syntax. These automated system problems were considered "holistic" because their unknowns were simultaneous, and they could not be reduced in formulation to solve piecewise, or by algebra manipulation (e.g. substitution), but had to be solved as wholes. And wholeness also pertained to algorithmic determinacy or mathematical "closure", which made solution convergence possible and certain in principle, if not corrupted by numerical instability.

## Holarchies of Differential Propagation

Since these holistic problem models could be independently automated and solved due to this closure, they could be _blended_ into higher wholes by nesting one inside of another, in the manner of subroutines. And users could regard them as if they were ordinary subroutines.

Yet semantically, this mathematical blending was considerably more complex than the mechanics of subroutines, because an iterative solution engine was attached to each problem model by its _calling_ operator template above it in the program hierarchy. In its numerical solution process, this engine would take control and would call the problem model subroutine iteratively, not returning to the calling template until its system problem was solved. During some or maybe all of the iterative model-subroutine calls the engine would invoke automatic differentiation of the formulas in the model holarchy with respect to the model's input-unknowns (arguments) defined in the calling template. Additional mechanisms were performed in the semantics to accommodate ubiquitous nesting of these holistic models.

## Differentiation of Prediction Processes

If the nested solution was a prediction (e.g. numerical integration), then its solution algorithm, in addition to the model formulas, would also be automatically differentiated. Since this differentiation propagated (via the chain rule) throughout the integration from initial conditions to boundary conditions, the differentiation of boundary conditions with respect to initial conditions (so called [Fréchet derivatives][17]) would be performed. This enabled the routine solution of boundary-value problems by iterative "shooting" methods using Newton-method engines. Of course, at the same time this propagated differentiation could also be performed with respect to arbitrary parameters of the differential equations to further shape the integrated functions. And these parameters could be solved for as unknowns of any nest in the holarchy above the integration process, a significant convenience in overall problem formulation.

## Differentiation of Search Processes

If the inner nested problem was a search, and the outer problem was also a search (e.g. optimization), then the partial derivatives produced with respect to the inner-search unknowns had to be converted into partial derivatives of the outer search via a differential-geometry coordinate transformation. This was also an iterative process involving higher order differentiation and sometimes different independent variables.

Yet these extended and iterative differential-arithmetic processes were totally hidden from the user, and were hardly more significant in his modeling task than if only ordinary subroutines and their calls were involved. The fact that they were iterative and the number and kind of iterations were indefinite, because a whole sub-problem was being solved which was also a part of a higher problem, it was natural to call each problem nest a "[holon][18]", as this dynamic entity perfectly fitted the theory of [Arthur Koestler][19] who coined that term. This was not done in the original PROSE documentation, because in those years, Koestler's theory was new, and somewhat controversial. This term was later used after [Ken Wilber][20] had ratified Koestler's holon concepts.

## Automation Operator Templates

The complete modeling paradigm consisted of only three classes of holons, as distinguished by their operator templates below.

## Optimization

## Correlation

## Simulation

These three operator templates created dynamic holons encapsulating an equations model subroutine hierarchy which could contain other nested holons, because the model subroutines could contain any of the operator templates encapsulating sub-problems. Each holon in the [holarchy][21] had a solver algorithm engine, which could be interchanged with others in its holon class. The extended arithmetic of automatic differentiation and its ability to dynamically differentiate numerical integration gave rise to the unique mode of [holarchy][21] modeling illustrated in Figure 1\.

This example problem was originally a FORTRAN application from a [RAND report][22] about an algorithm used for optimization of boundary-value problem applications. This report, also published as a textbook,[\[14\]][23] described Quasilinearization, an alternative to "dynamic programming", invented by the same author, [Richard Bellman][24]. The FORTRAN program in Appendix Two of the textbook contains over five times the amount of code as the 25-line PROSE program, entirely embedded in the white boxes (visible syntax) of Figure 1\. More significant in this modeling versus programming discussion is that the FORTRAN program contains 14 DO loops, whereas the PROSE program contains no loops. Another point to make about program simplification is that dynamic memory management could be taken for granted by the user. At the return from a holon to its calling operator template, the holon was destroyed and its memory was freed for other use.

This application is actually trivial in the amount of code required to state the problem. That is why the PROSE program is so small. All of its iterative solution methodology is under the hood in the solver engines (ellipses in Figure 1). Models seldom need loops. This is why spreadsheets, which are modeling tools, don't even have them.

This example problem provides a full encapsulation of the holon paradigm in a single application. All three of its holon types are employed: _optimization searching_ at the highest level of the holarchy, _correlation searching_ (a restricted subset of optimization searching) as the middle holon, and [system dynamics][25] _simulation_ as the innermost holon. Another PROSE program with this same anatomy is illustrated in Figure 2\. This is a somewhat larger application of the optimization of a cantilevered wing structure to maximize lift, subject to structure and weight constraints. In this case there are ten coordinate dimensions of the optimization unknowns that are being searched by the outer holon solver.

The two outer holons each has a hidden coordinate system of unknowns that its search engine solves for. And these engines require partial derivatives of all downstream variables dependent upon those unknowns, which are evaluated by automatic differentiation arithmetic. The derivatives of the outer coordinate system must be computed from the derivatives of the inner coordinate system, after the inner search engine has converged (found a local solution). This is where a differential-geometry coordinate transformation is applied. The wing problem of Figure 2 has more downstream subprograms, not shown, including an integral quadrature function.

As these subprograms include the numerical integration of the system dynamics (differential equations) model, the automatic differentiation arithmetic includes differentiation of the integration algorithm of the simulation engine (and the quadrature solver), to evaluate derivatives of the boundary (end-point of the integrated curves) conditions with respect to the initial conditions. This calculation is not possible via formal symbolic differentiation. Nor is it feasible with finite difference approximation. Only automatic differentiation, with its exact chain-rule propagation is feasible.

## Automated Holon Architecture

Figure 3 shows the generalized architecture of a holon in profile, showing the visible modeling syntax and the invisible semantics architecture with its characteristic 5-step iteration process. A holon is a calculus problem-solving unit, mathematically associated with a coordinate system dynamically created by the operation template. Its operator is a solver engine, either a numerical predictor in the case of simulation, or a search engine in the case of correlation and optimization. Its operand is a model procedure (which may itself be a holarchy of subordinated holons).

In essence a holon is a metaphoric computation container like a spreadsheet, but allowing procedural looping like an ordinary algebraic language. Yet its purpose is to frame algebraic formulas that represent higher mathematics (e.g. differential equations are algebraic formulas, in which some of their variables are rates).

Figures 4-7 show how the different holon classes of simulation, correlation, and optimization reflect this architecture, separating modeling (science equations) from algorithmic solver engines of the art of numerical approximation mathematics.

## Holons are formula-system solution processes

As mentioned above, a Holon is a computation container like a spreadsheet that encapsulates a set of _input_ algebraic formulas. But unlike a spreadsheet, these formulas are parts of an irreducible whole which can only be solved together as a unit, involving a succession of approximations (iterations). A spreadsheet, which only involves a single pass of formula calculations, may therefore be thought of as a "degenerate" or "reduced" holon, one that only involves single-pass calculations.

A holon model elevates an encapsulated system of algebraic formulas to a higher problem archetype relating simultaneous unknowns to a definable solution condition other than a single pass through the set of formulas. Iterative calculus "under the hood" is required to "converge" multiple-pass approximations to the solution condition.

## Metaphoric Problem Archetypes

Each holon automates one of the three system-problem archetypes that have emerged from higher math with a distinct class of solution methods, applicable as interchangeable operators. These methods operate on the input formulas and their calculations, to guide the successive approximations to the holon solution. These problem archetypes easily precipitate out of the formula collections that represent modeling of natural phenomena, and can be used as building blocks to synthesize whole computation programs as holarchies of sequential or nested holons. Used together as an alphabet these archetypal problems become a topology of higher math modeling within an algebraic programming language containing special semantic "glue" methodologies which propagate calculus "influence" through the collections of holons.

As the holons combine to form greater wholes via alphabetic combination, such holarchies also tend to become problem archetypes, which often precipitate out of natural phenomena modeling. Examples are boundary-value problems, solved by the combination of correlation and simulation holons.

## PROSE Pantheon

PROSE introduced a pantheon of interchangeable solvers named for mythical gods in the three engine categories:

## Optimization

## Correlation

## System-Dynamics Simulation

## Nesting Contexts

These solvers applied different numerical methods in the three engine categories, depending upon the nesting context in which they were applied. Some simulation solvers (JANUS, MERCURY, MINERVA, MERLIN and PEGASUS) could not be nested in automatic differentiation contexts of correlation and optimization because they were not _overloaded_ for automatic-differentiation arithmetic. Thus hybrid versions, JANISIS (ISIS or JANUS) and GEMINI (MERLIN or NEPTUNE) were introduced, which would work efficiently in automatic differentiation mode or ordinary arithmetic mode (differentiation internally turned off). This greatly speeded up the iterative searches of solvers like AJAX, MARS, JOVE, ZEUS, and JUPITER, which iteratively called their models many more times in non-differentation mode, when various modes of non-derivative search sub-steps were applied.

## References

[0]: #cite_note-ProseProc-1
[1]: #cite_note-ProseCalcOp-2
[2]: #cite_note-ProseCalcAp-3
[3]: #cite_note-ProseTS-4
[4]: /wiki/4GL "4GL"
[5]: /wiki/Virtual_machine "Virtual machine"
[6]: #cite_note-ThamesEvoSC-5
[7]: #cite_note-KrinThaStrSC-6
[8]: #cite_note-ThamesSynCalc-7
[9]: #cite_note-SLANG-8
[10]: #cite_note-McCullyQ-9
[11]: #cite_note-NilKarp-10
[12]: #cite_note-ThamesCinC-11
[13]: #cite_note-PfeifferSomeAdvNLP-12
[14]: #cite_note-PfeifferADinPROSE-13
[15]: /wiki/Automatic_differentiation "Automatic differentiation"
[16]: /wiki/CDC_6600#Central_Processor "CDC 6600"
[17]: /wiki/Fr%C3%A9chet_derivative "Fréchet derivative"
[18]: /wiki/Holon "Holon"
[19]: /wiki/Arthur_Koestler "Arthur Koestler"
[20]: /wiki/Ken_Wilber "Ken Wilber"
[21]: /wiki/Holarchy "Holarchy"
[22]: http://www.rand.org/pubs/reports/R438.html
[23]: #cite_note-QuasiLin-14
[24]: /wiki/Dynamic_programming "Dynamic programming"
[25]: /wiki/System_dynamics "System dynamics"