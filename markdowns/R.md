**R** is a [programming language][0] and software environment for [statistical computing][1] and graphics supported by the R Foundation for Statistical Computing.[\[4\]][2] The R language is widely used among [statisticians][3] and [data miners][4] for developing [statistical software][5][\[5\]][6] and [data analysis][7].[\[6\]][8] Polls, [surveys of data miners][9], and studies of scholarly literature databases show that R's popularity has increased substantially in recent years.[\[7\]][10]

R is a [GNU package][11].[\[8\]][12] The [source code][13] for the R software environment is written primarily in [C][14], [Fortran][15], and R.[\[9\]][16] R is freely available under the [GNU General Public License][17], and pre-compiled binary versions are provided for various [operating systems][18]. While R has a [command line interface][19], there are several [graphical front-ends][20] available.[\[10\]][21]

## History

R is an implementation of the [S programming language][22] combined with [lexical scoping][23] semantics inspired by [Scheme][24].[\[11\]][25] [S][22] was created by [John Chambers][26] while at [Bell Labs][27]. There are some important differences, but much of the code written for S runs unaltered.[\[12\]][28]

R was created by [Ross Ihaka][29] and [Robert Gentleman][30][\[13\]][31] at the [University of Auckland][32], New Zealand, and is currently developed by the _R Development Core Team_, of which Chambers is a member. R is named partly after the first names of the first two R authors and partly as a play on the name of [S][22].[\[14\]][33] The project was conceived in 1992, with an initial version released in 1995 and a stable beta version in 2000\.[\[15\]][34][\[16\]][35][\[17\]][36]

## Statistical features

R and its libraries implement a wide variety of statistical and [graphical][37] techniques, including [linear][38] and [nonlinear][39] modeling, classical statistical tests, [time-series analysis][40], classification, clustering, and others. R is easily extensible through functions and extensions, and the R community is noted for its active contributions in terms of packages. Many of R's standard functions are written in R itself, which makes it easy for users to follow the algorithmic choices made. For computationally intensive tasks, [C][14], [C++][41], and [Fortran][15] code can be linked and called at run time. Advanced users can write C, C++,[\[18\]][42] [Java][43],[\[19\]][44] [.NET][45][\[20\]][46] or [Python][47] code to manipulate R objects directly.[\[21\]][48] R is highly extensible through the use of user-submitted packages for specific functions or specific areas of study. Due to its [S][22] heritage, R has stronger [object-oriented programming][49] facilities than most statistical computing languages. Extending R is also eased by its [lexical scoping][23] rules.[\[22\]][50]

Another strength of R is static graphics, which can produce publication-quality graphs, including mathematical symbols. Dynamic and interactive graphics are available through additional packages.[\[23\]][51]

R has Rd, its own [LaTeX][52]-like documentation format, which is used to supply comprehensive documentation, both on-line in a number of formats and in hard copy.[\[24\]][53]

## Programming features

R is an [interpreted language][54]; users typically access it through a [command-line interpreter][55]. If a user types `2+2` at the R command prompt and presses enter, the computer replies with 4, as shown below:

Like other similar languages such as [APL][56] and [MATLAB][57], R supports [matrix arithmetic][58]. R's [data structures][59] include [vectors][60], [matrices][58], arrays, data frames (similar to [tables][61] in a [relational database][62]) and [lists][63].[\[25\]][64] R's extensible object system includes objects for (among others): [regression models][65], [time-series][66] and [geo-spatial coordinates][67]. The scalar data type was never a data structure of R.[\[26\]][68] Instead, a scalar is represented as a vector with length one.[\[27\]][69]

R supports [procedural programming][70] with [functions][71] and, for some functions, [object-oriented programming][49] with [generic functions][72]. A generic function acts differently depending on the [classes][73] of arguments passed to it. In other words, the generic function [dispatches][74] the function ([method][75]) specific to that [class][73] of [object][76]. For example, R has a [generic][72] `print` function that can print almost every [class][73] of [object][76] in R with a simple `print(objectname)` syntax.[\[28\]][77]

Although used mainly by statisticians and other practitioners requiring an environment for statistical computation and software development, R can also operate as a [general matrix calculation][78] toolbox -- with performance benchmarks comparable to [GNU Octave][79] or [MATLAB][57].[\[29\]][80] Arrays are stored in [column-major order][81].[\[30\]][82]

## Packages

The capabilities of R are extended through user-created _packages_, which allow specialized statistical techniques, graphical devices (such as the [ggplot2][83] package developed by [Hadley Wickham][84]), import/export capabilities, reporting tools ([knitr][85], [Sweave][86]), etc. These packages are developed primarily in R, and sometimes in [Java][43], [C][14], [C++][41], and [Fortran][15].\[_[citation needed][87]_\]

A core set of packages is included with the installation of R, with more than 7,801 additional packages (as of January 2016) available at the Comprehensive R Archive Network (CRAN),[\[31\]][88] [Bioconductor][89], [Omegahat][90],[\[32\]][91] [GitHub][92], and other repositories.[\[33\]][93]

The "Task Views" page (subject list) on the CRAN website[\[34\]][94] lists a wide range of tasks (in fields such as Finance, Genetics, High Performance Computing, Machine Learning, Medical Imaging, Social Sciences and Spatial Statistics) to which R has been applied and for which packages are available. R has also been identified by the FDA as suitable for interpreting data from clinical research.[\[35\]][95]

Other R package resources include Crantastic, a community site for rating and reviewing all CRAN packages, and R-Forge, a central platform for the collaborative development of R packages, R-related software, and projects. R-Forge also hosts many unpublished beta packages, and development versions of CRAN packages.[\[36\]][96][\[37\]][97]

The [Bioconductor][89] project provides R packages for the analysis of genomic data, such as [Affymetrix][98] and [cDNA][99] [microarray][100] object-oriented data-handling and analysis tools, and has started to provide tools for analysis of data from next-generation [high-throughput sequencing][101] methods.[\[38\]][102]

## Milestones

The full list of changes is maintained in the "R News" file at CRAN.[\[39\]][103] Some highlights are listed below for several major releases.\[_[citation needed][87]_\]

## Interfaces

## Graphical user interfaces

A special issue of the _[Journal of Statistical Software][104]_ discusses GUIs for R.[\[46\]][105]

## Editors and IDEs

[Text editors][106] and [Integrated development environments][107] (IDEs) with some support for R include: [ConTEXT][108], [Eclipse][109] (StatET),[\[47\]][110] [Emacs][111] ([Emacs Speaks Statistics][112]), [LyX][113] (modules for [knitr][85] and [Sweave][86]), [Vim][114], [jEdit][115],[\[48\]][116] [Kate][117],[\[49\]][118] Revolution R Enterprise DevelopR (part of Revolution R Enterprise),[\[50\]][119] [RStudio][120],[\[51\]][121] [Sublime Text][122], [TextMate][123], [Atom][124], [WinEdt][125] (R Package RWinEdt), [Tinn-R][126], [Notepad++][127],[\[52\]][128] [Visual Studio][129][\[53\]][130] and [Architect][131].[\[54\]][132]

## Scripting languages

R functionality has been made accessible from several scripting languages such as [Python][47],[\[55\]][133] [Perl][134],[\[56\]][135] [Ruby][136],[\[57\]][137] [F\#][138][\[58\]][139] and [Julia][140].[\[59\]][141] Scripting in R itself is possible via a front-end called littler.[\[60\]][142]

## useR! conferences

The official annual gathering of R users is called "[useR!][143]".[\[61\]][144]

The first such event was [useR! 2004][145] in May 2004, [Vienna][146], Austria.[\[62\]][147] After skipping 2005, the useR conference has been held annually, usually alternating between locations in Europe and North America.[\[63\]][148]

Subsequent conferences have included:[\[61\]][144]

## R Journal

[The R Journal][149] is the [open access][150], [refereed][151] journal of the R project for statistical computing. It features short to medium length articles on the use, and development of R, including packages, programing tips, CRAN news, and foundation news.

## Comparison with SAS, SPSS, and Stata

The general consensus is that R compares well with other popular statistical packages, such as [SAS][152], [SPSS][153], and [Stata][154].[\[64\]][155] In a [comparison of all basic features for a statistical software][156] R is heads up with the best of statistical software.

In January 2009, the _[New York Times][157]_ ran an article about R gaining acceptance among data analysts and presenting a potential threat for the market share occupied by commercial statistical packages, such as SAS.[\[65\]][158]

## Commercial support for R

While R is an open source project supported by the community developing it, some companies strive to provide commercial support and/or extensions for their customers. In this section, some examples of those companies are mentioned.

In 2007, [Revolution Analytics][159] was founded to provide commercial support for Revolution R, its distribution of R, which also includes components developed by the company. Major additional components include: ParallelR, the R Productivity Environment IDE, RevoScaleR (for [big data][160] analysis), RevoDeployR, web services framework, and the ability for reading and writing data in the SAS file format.[\[66\]][161] They also offer a distribution of R designed to comply with established [IQ/OQ/PQ][162] criteria which enables clients in the pharmaceutical sector to validate their installation of REvolution R.[\[67\]][163] In 2015, Microsoft Corporation completed the acquisition of Revolution Analytics.[\[68\]][164]

For organizations in highly regulated sectors requiring a validated version of R, [Mango Solutions][165] has developed the [ValidR][166] product which fully complies with the [Food and Drug Administration][167] guidelines for [Software verification and validation][168].\[_[citation needed][87]_\] They also offer to validate additional packages if the customer demands it and validate customer's self written packages.[\[69\]][169]

In October 2011, [Oracle][170] announced the _Big Data Appliance_, which integrates R, [Apache Hadoop][171], [Oracle Linux][172], and a [NoSQL][173] database with the [Exadata][174] hardware.[\[70\]][175] Oracle R Enterprise[\[71\]][176] is now one of two components of the "Oracle Advanced Analytics Option"[\[72\]][177] (the other component is [Oracle Data Mining][178]).\[_[citation needed][87]_\]

[IBM][179] offers support for in-[Hadoop][180] execution of R,[\[73\]][181] and provides a programming model for massively parallel in-database analytics in R.[\[74\]][182]

Other major commercial software systems supporting connections to or integration with R include: [JMP][183],[\[75\]][184] [Mathematica][185],[\[76\]][186] [MATLAB][57],[\[77\]][187] [Spotfire][188],[\[78\]][189] [SPSS][153],[\[79\]][190] [Statistica][191],[\[80\]][192] [Platform Symphony][193],[\[81\]][194] [SAS][152],[\[82\]][195] [Tableau Software][196],[\[83\]][197] [Esri ArcGis][198],[\[84\]][199] [Dundas][200][\[85\]][201] and [Statgraphics][202].[\[86\]][203]

Tibco offers a runtime version R as a part of [Spotfire][188].[\[87\]][204]

## Examples

## Basic syntax

The following examples illustrate the basic [syntax of the language][205] and use of the command-line interface.\[_[citation needed][87]_\]

In R, the widely preferred[\[88\]][206] [assignment operator][207] is an arrow made from two characters `<-`, although `=` can be used instead.[\[89\]][208]

[![Diagnostic graphs produced by plot.lm() function. Features include mathematical notation in axis labels, as at lower left.](//upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Plots_from_lm_example.svg/540px-Plots_from_lm_example.svg.png)][209]

## Structure of a function

The ease of function creation by the user is one of the strengths of using R. Objects remain local to the function, which can be returned as any data type.[\[90\]][210] Below is an example of the structure of a function:

## Mandelbrot set

Short R code calculating [Mandelbrot set][211] through the first 20 iterations of equation _z_ = _z_2 + _c_ plotted for different complex constants _c_. This example demonstrates:

[!["Mandelbrot.gif" – Graphics created in R with 14 lines of code in Example 2](//upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Mandelbrot_Creation_Animation.gif/400px-Mandelbrot_Creation_Animation.gif)][212]

## See also

## References

## External links

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/Statistical_computing "Statistical computing"
[2]: #cite_note-4
[3]: /wiki/Statistician "Statistician"
[4]: /wiki/Data_mining "Data mining"
[5]: /wiki/Statistical_software "Statistical software"
[6]: #cite_note-5
[7]: /wiki/Data_analysis "Data analysis"
[8]: #cite_note-6
[9]: /wiki/Rexer%27s_Annual_Data_Miner_Survey "Rexer's Annual Data Miner Survey"
[10]: #cite_note-7
[11]: /wiki/List_of_GNU_packages "List of GNU packages"
[12]: #cite_note-8
[13]: /wiki/Source_code "Source code"
[14]: /wiki/C_(programming_language) "C (programming language)"
[15]: /wiki/Fortran "Fortran"
[16]: #cite_note-9
[17]: /wiki/GNU_General_Public_License "GNU General Public License"
[18]: /wiki/Operating_system "Operating system"
[19]: /wiki/Command_line_interface "Command line interface"
[20]: /wiki/Graphical_user_interface "Graphical user interface"
[21]: #cite_note-R_gui-10
[22]: /wiki/S_(programming_language) "S (programming language)"
[23]: /wiki/Lexical_scoping "Lexical scoping"
[24]: /wiki/Scheme_(programming_language) "Scheme (programming language)"
[25]: #cite_note-11
[26]: /wiki/John_Chambers_(programmer) "John Chambers (programmer)"
[27]: /wiki/Bell_Laboratories "Bell Laboratories"
[28]: #cite_note-12
[29]: /wiki/Ross_Ihaka "Ross Ihaka"
[30]: /wiki/Robert_Gentleman_(statistician) "Robert Gentleman (statistician)"
[31]: #cite_note-13
[32]: /wiki/University_of_Auckland "University of Auckland"
[33]: #cite_note-14
[34]: #cite_note-15
[35]: #cite_note-16
[36]: #cite_note-17
[37]: /wiki/Graphical "Graphical"
[38]: /wiki/Linear "Linear"
[39]: /wiki/Nonlinear "Nonlinear"
[40]: /wiki/Time-series_analysis "Time-series analysis"
[41]: /wiki/C%2B%2B "C++"
[42]: #cite_note-18
[43]: /wiki/Java_(programming_language) "Java (programming language)"
[44]: #cite_note-19
[45]: /wiki/.NET_Framework ".NET Framework"
[46]: #cite_note-20
[47]: /wiki/Python_(programming_language) "Python (programming language)"
[48]: #cite_note-SASvsR-21
[49]: /wiki/Object-oriented_programming "Object-oriented programming"
[50]: #cite_note-22
[51]: #cite_note-23
[52]: /wiki/LaTeX "LaTeX"
[53]: #cite_note-R_Rd-24
[54]: /wiki/Interpreted_language "Interpreted language"
[55]: /wiki/Command-line_interpreter "Command-line interpreter"
[56]: /wiki/APL_(programming_language) "APL (programming language)"
[57]: /wiki/MATLAB "MATLAB"
[58]: /wiki/Matrix_(mathematics) "Matrix (mathematics)"
[59]: /wiki/Data_structure "Data structure"
[60]: /wiki/Column_vector "Column vector"
[61]: /wiki/Table_(database) "Table (database)"
[62]: /wiki/Relational_database "Relational database"
[63]: /wiki/List_(computing) "List (computing)"
[64]: #cite_note-25
[65]: /wiki/Regression_analysis "Regression analysis"
[66]: /wiki/Time-series "Time-series"
[67]: /wiki/Spatial_analysis "Spatial analysis"
[68]: #cite_note-26
[69]: #cite_note-27
[70]: /wiki/Procedural_programming "Procedural programming"
[71]: /wiki/Function_(computer_science) "Function (computer science)"
[72]: /wiki/Generic_function "Generic function"
[73]: /wiki/Class_(computer_programming) "Class (computer programming)"
[74]: /wiki/Dynamic_dispatch "Dynamic dispatch"
[75]: /wiki/Method_(computer_science) "Method (computer science)"
[76]: /wiki/Object_(computer_science) "Object (computer science)"
[77]: #cite_note-help_print-28
[78]: /wiki/Numerical_linear_algebra "Numerical linear algebra"
[79]: /wiki/GNU_Octave "GNU Octave"
[80]: #cite_note-29
[81]: /wiki/Column-major_order "Column-major order"
[82]: #cite_note-30
[83]: /wiki/Ggplot2 "Ggplot2"
[84]: /wiki/Hadley_Wickham "Hadley Wickham"
[85]: /wiki/Knitr "Knitr"
[86]: /wiki/Sweave "Sweave"
[87]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[88]: #cite_note-31
[89]: /wiki/Bioconductor "Bioconductor"
[90]: /w/index.php?title=Omegahat&action=edit&redlink=1 "Omegahat (page does not exist)"
[91]: #cite_note-32
[92]: /wiki/GitHub "GitHub"
[93]: #cite_note-33
[94]: #cite_note-CRANTasks-34
[95]: #cite_note-35
[96]: #cite_note-36
[97]: #cite_note-37
[98]: /wiki/Affymetrix "Affymetrix"
[99]: /wiki/Complementary_DNA "Complementary DNA"
[100]: /wiki/Microarray "Microarray"
[101]: /wiki/High-throughput_sequencing "High-throughput sequencing"
[102]: #cite_note-38
[103]: #cite_note-RNews-39
[104]: /wiki/Journal_of_Statistical_Software "Journal of Statistical Software"
[105]: #cite_note-46
[106]: /wiki/Text_editor "Text editor"
[107]: /wiki/Integrated_development_environment "Integrated development environment"
[108]: /wiki/ConTEXT "ConTEXT"
[109]: /wiki/Eclipse_(software) "Eclipse (software)"
[110]: #cite_note-47
[111]: /wiki/Emacs "Emacs"
[112]: /wiki/Emacs_Speaks_Statistics "Emacs Speaks Statistics"
[113]: /wiki/LyX "LyX"
[114]: /wiki/Vim_(text_editor) "Vim (text editor)"
[115]: /wiki/JEdit "JEdit"
[116]: #cite_note-48
[117]: /wiki/Kate_(text_editor) "Kate (text editor)"
[118]: #cite_note-49
[119]: #cite_note-50
[120]: /wiki/RStudio "RStudio"
[121]: #cite_note-51
[122]: /wiki/Sublime_Text "Sublime Text"
[123]: /wiki/TextMate "TextMate"
[124]: /wiki/Atom_(text_editor) "Atom (text editor)"
[125]: /wiki/WinEdt "WinEdt"
[126]: http://nbcgib.uesc.br/lec/software/editores/tinn-r/en
[127]: /wiki/Notepad%2B%2B "Notepad++"
[128]: #cite_note-52
[129]: /wiki/Microsoft_Visual_Studio "Microsoft Visual Studio"
[130]: #cite_note-53
[131]: /wiki/Architect_(software) "Architect (software)"
[132]: #cite_note-54
[133]: #cite_note-55
[134]: /wiki/Perl "Perl"
[135]: #cite_note-56
[136]: /wiki/Ruby_(programming_language) "Ruby (programming language)"
[137]: #cite_note-57
[138]: /wiki/F_Sharp_(programming_language) "F Sharp (programming language)"
[139]: #cite_note-58
[140]: /wiki/Julia_(programming_language) "Julia (programming language)"
[141]: #cite_note-59
[142]: #cite_note-60
[143]: https://www.r-project.org/conferences.html
[144]: #cite_note-user-61
[145]: http://www.ci.tuwien.ac.at/Conferences/useR-2004/
[146]: /wiki/Vienna "Vienna"
[147]: #cite_note-62
[148]: #cite_note-63
[149]: /wiki/The_R_Journal "The R Journal"
[150]: /wiki/Open_access "Open access"
[151]: /wiki/Academic_journal "Academic journal"
[152]: /wiki/SAS_(software) "SAS (software)"
[153]: /wiki/SPSS "SPSS"
[154]: /wiki/Stata "Stata"
[155]: #cite_note-64
[156]: /wiki/Comparison_of_statistical_packages "Comparison of statistical packages"
[157]: /wiki/New_York_Times "New York Times"
[158]: #cite_note-65
[159]: /wiki/Revolution_Analytics "Revolution Analytics"
[160]: /wiki/Big_data "Big data"
[161]: #cite_note-prickett-66
[162]: /wiki/Verification_and_validation "Verification and validation"
[163]: #cite_note-67
[164]: #cite_note-Machine_Learning_Blog-68
[165]: http://www.mango-solutions.com/
[166]: http://www.mango-solutions.com/wp/products-services/products/validr/
[167]: /wiki/Food_and_Drug_Administration "Food and Drug Administration"
[168]: /wiki/Software_verification_and_validation "Software verification and validation"
[169]: #cite_note-69
[170]: /wiki/Oracle_Corporation "Oracle Corporation"
[171]: /wiki/Apache_Hadoop "Apache Hadoop"
[172]: /wiki/Oracle_Linux "Oracle Linux"
[173]: /wiki/NoSQL "NoSQL"
[174]: /wiki/Exadata "Exadata"
[175]: #cite_note-70
[176]: #cite_note-OracleRabc-71
[177]: #cite_note-OracleAAO-72
[178]: /wiki/Oracle_Data_Mining "Oracle Data Mining"
[179]: /wiki/IBM "IBM"
[180]: /wiki/Hadoop "Hadoop"
[181]: #cite_note-73
[182]: #cite_note-74
[183]: /wiki/JMP_(statistical_software) "JMP (statistical software)"
[184]: #cite_note-75
[185]: /wiki/Mathematica "Mathematica"
[186]: #cite_note-76
[187]: #cite_note-77
[188]: /wiki/Spotfire "Spotfire"
[189]: #cite_note-78
[190]: #cite_note-79
[191]: /wiki/Statistica "Statistica"
[192]: #cite_note-80
[193]: /wiki/Symphony_(software) "Symphony (software)"
[194]: #cite_note-81
[195]: #cite_note-82
[196]: /wiki/Tableau_Software "Tableau Software"
[197]: #cite_note-83
[198]: /wiki/ArcGIS "ArcGIS"
[199]: #cite_note-84
[200]: /wiki/Dundas_Data_Visualization "Dundas Data Visualization"
[201]: #cite_note-85
[202]: /wiki/Statgraphics "Statgraphics"
[203]: #cite_note-86
[204]: #cite_note-87
[205]: /wiki/Programming_language_syntax "Programming language syntax"
[206]: #cite_note-88
[207]: /wiki/Assignment_(computer_science) "Assignment (computer science)"
[208]: #cite_note-89
[209]: /wiki/File:Plots_from_lm_example.svg "Diagnostic graphs produced by plot.lm() function. Features include mathematical notation in axis labels, as at lower left."
[210]: #cite_note-90
[211]: /wiki/Mandelbrot_set "Mandelbrot set"
[212]: /wiki/File:Mandelbrot_Creation_Animation.gif ""Mandelbrot.gif" – Graphics created in R with 14 lines of code in Example 2"