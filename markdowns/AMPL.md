**A Mathematical Programming Language** (**AMPL**) is an [algebraic modeling language][0] to describe and solve high-complexity problems for large-scale mathematical computing (i.e., large-scale optimization and scheduling-type problems).[\[1\]][1] It was developed by [Robert Fourer][2], David Gay, and [Brian Kernighan][3] at [Bell Laboratories][4]. AMPL supports dozens of [solvers][5], both [open source][6] and [commercial software][7], including CBC, [CPLEX][8], [FortMP][9], [Gurobi][10], [MINOS][11], [IPOPT][12], [SNOPT][13], [KNITRO][14], and LGO. Problems are passed to solvers as [nl][15] files. AMPL is used by more than 100 corporate clients, and by government agencies and academic institutions.[\[2\]][16]

One advantage of AMPL is the similarity of its syntax to the mathematical notation of [optimization][17] problems. This allows for a very concise and readable definition of problems in the domain of [optimization][18]. Many modern solvers available on the [NEOS Server][19] (formerly hosted at the [Argonne National Laboratory][20], currently hosted at the [University of Wisconsin, Madison][21][\[3\]][22]) accept AMPL input. According to the NEOS statistics AMPL is the most popular format for representing mathematical programming problems.

## Features

AMPL features a mix of [declarative][23] and [imperative][24] programming styles. Formulating optimization models occurs via declarative language elements such as sets, scalar and multidimensional parameters, decision variables, objectives and constraints, which allow for concise description of most problems in the domain of mathematical optimization.

Procedures and [control flow][25] statements are available in AMPL for

To support re-use and simplify construction of large-scale optimization problems, AMPL allows separation of model and data.

AMPL supports a wide range of problem types, among them:

AMPL invokes a solver in a separate process which has these advantages:

Interaction with the solver is done through a well-defined [nl interface][15].

## Availability

AMPL is available for many popular 32- and 64-bit [operating systems][26] including [Linux][27], Mac [OS X][28], some [Unix][29], and [Windows][30].[\[5\]][31] The translator is proprietary software maintained by AMPL Optimization LLC. However, several online services exist, providing free modeling and solving facilities using AMPL.[\[6\]][32][\[7\]][33] A free student version with limited functionality and a free full-featured version for academic courses are also available.[\[8\]][34]

AMPL can be used from within [Microsoft Excel][35] via the [SolverStudio][36] Excel add-in.

The AMPL Solver Library (ASL), which allows reading nl files and provides the automatic differentiation, is open-source. It is used in many solvers to implement AMPL connection.

## Status history

This table present significant steps in AMPL history.

## A sample model

A transportation problem from [George Dantzig][37] is used to provide a sample AMPL model. This problem finds the least cost shipping schedule that meets requirements at markets and supplies at factories.[\[14\]][38]

## Solvers

Here is an partial list of [solvers][5] supported by AMPL:[\[15\]][39]

## See also

## References

## External links

[0]: /wiki/Algebraic_modeling_language "Algebraic modeling language"
[1]: #cite_note-ampl-book-1
[2]: /wiki/Robert_Fourer "Robert Fourer"
[3]: /wiki/Brian_Kernighan "Brian Kernighan"
[4]: /wiki/Bell_Labs "Bell Labs"
[5]: /wiki/Solver "Solver"
[6]: /wiki/Open_source "Open source"
[7]: /wiki/Commercial_software "Commercial software"
[8]: /wiki/CPLEX "CPLEX"
[9]: /wiki/FortMP "FortMP"
[10]: /wiki/Gurobi "Gurobi"
[11]: /wiki/MINOS_(optimization_software) "MINOS (optimization software)"
[12]: /wiki/IPOPT "IPOPT"
[13]: /wiki/SNOPT "SNOPT"
[14]: /wiki/KNITRO "KNITRO"
[15]: /wiki/Nl_(format) "Nl (format)"
[16]: #cite_note-2
[17]: /wiki/Optimization_(mathematics) "Optimization (mathematics)"
[18]: /wiki/Mathematical_programming "Mathematical programming"
[19]: /wiki/NEOS_Server "NEOS Server"
[20]: /wiki/Argonne_National_Laboratory "Argonne National Laboratory"
[21]: /wiki/University_of_Wisconsin,_Madison "University of Wisconsin, Madison"
[22]: #cite_note-neos-uwm-3
[23]: /wiki/Declarative_programming "Declarative programming"
[24]: /wiki/Imperative_programming "Imperative programming"
[25]: /wiki/Control_flow "Control flow"
[26]: /wiki/Operating_system "Operating system"
[27]: /wiki/Linux "Linux"
[28]: /wiki/OS_X "OS X"
[29]: /wiki/Unix "Unix"
[30]: /wiki/Microsoft_Windows "Microsoft Windows"
[31]: #cite_note-5
[32]: #cite_note-neos-6
[33]: #cite_note-7
[34]: #cite_note-8
[35]: /wiki/Microsoft_Excel "Microsoft Excel"
[36]: /wiki/SolverStudio "SolverStudio"
[37]: /wiki/George_Dantzig "George Dantzig"
[38]: #cite_note-14
[39]: #cite_note-15