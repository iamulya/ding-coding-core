**XSLT** (**Extensible Stylesheet Language Transformations**) is a language for [transforming][0] [XML][1] documents into other XML documents,[\[1\]][2] or other formats such as [HTML][3] for [web pages][4], [plain text][5] or [XSL Formatting Objects][6], which may subsequently be converted to other formats, such as [PDF][7], [PostScript][8] and [PNG][9].[\[2\]][10] XSLT 1.0 is widely supported in modern web browsers.

The original document is not changed; rather, a new document is created based on the content of an existing one.[\[3\]][11] Typically, input documents are XML files, but anything from which the processor can build an [XQuery and XPath Data Model][12] can be used, such as [relational database][13] tables or [geographical information systems][14].[\[1\]][2]

XSLT is a [Turing-complete][15] language, meaning it can specify any computation that can be performed by a computer.[\[4\]][16]

## History

XSLT is influenced by [functional languages][17],[\[5\]][18] and by text-based pattern matching languages like [SNOBOL][19] and [AWK][20]. Its most direct predecessor is [DSSSL][21], which did for [SGML][22] what XSLT does for XML.[\[6\]][23]

## Design and processing model

The XSLT processor takes one or more XML source documents, plus one or more XSLT stylesheets, and processes them to produce an output document. In contrast to widely implemented [imperative][24] programming languages like [C][25], XSLT is [declarative][26].[\[15\]][27] The basic processing paradigm is pattern matching.[\[16\]][28] Rather than listing an imperative sequence of actions to perform in a stateful environment, template rules only define how to handle a node matching a particular XPath-like pattern, if the processor should happen to encounter one, and the contents of the templates effectively comprise [functional][17] [expressions][29] that directly represent their evaluated form: the result tree, which is the basis of the processor's output.

The processor follows a fixed algorithm.[\[17\]][30] First, assuming a stylesheet has already been read and prepared, the processor builds a source [tree][31] from the input XML document. It then processes the source tree's root node, finds the best-matching template for that node in the stylesheet, and evaluates the template's contents. Instructions in each template generally direct the processor to either create nodes in the result tree, or to process more nodes in the source tree in the same way as the root node. Output derives from the result tree.

## Processor implementations

## Performance

Most early XSLT processors were interpreters. More recently, code generation is increasingly common, using portable intermediate languages (such as [Java bytecode][32] or .NET [Common Intermediate Language][33]) as the target. However, even the interpretive products generally offer separate analysis and execution phases, allowing an optimized expression tree to be created in memory and reused to perform multiple transformations. This gives substantial performance benefits in online publishing applications, where the same transformation is applied many times per second to different source documents.[\[42\]][34] This separation is reflected in the design of XSLT processing APIs (such as [JAXP][35]).

Early XSLT processors had very few optimizations. Stylesheet documents were read into [Document Object Models][36] and the processor would act on them directly. [XPath][37] engines were also not optimized. Increasingly, however, XSLT processors use optimization techniques found in functional programming languages and database query languages, such as static rewriting of an expression tree (e.g., to move calculations out of loops), and lazy pipelined evaluation to reduce the memory footprint of intermediate results (and allow "early exit" when the processor can evaluate an expression such as `following-sibling::*[1]` without a complete evaluation of all subexpressions). Many processors also use tree representations that are significantly more efficient (in both space and time)[\[43\]][38] than general-purpose DOM implementations.

In June 2014, Debbie Lockett and [Michael Kay][39] introduced an open-source benchmarking framework for XSLT processors called XT-Speedo.[\[44\]][40]

## XSLT and XPath

XSLT uses [XPath][37] to identify subsets of the source document tree and perform calculations. XPath also provides a range of [functions][41], which XSLT itself further augments.

XSLT 1.0 uses XPath 1.0\. XSLT 2.0 uses XPath 2.0\. And XSLT 3.0 uses XPath 3.0\. In the case of 1.0 and 2.0, the specifications were published on the same date. With 3.0, however, they were no longer synchronized; XPath 3.0 became a Recommendation in April 2014, while XSLT 3.0 was still work in progress.

## XSLT and XQuery compared

XSLT functionalities overlap with those of [XQuery][42], which was initially conceived as a query language for large collections of XML documents.

The XSLT 2.0 and XQuery 1.0 standards were developed by separate working groups within [W3C][43], working together to ensure a common approach where appropriate. They share the same data model, type system, and function library, and both include [XPath][37] 2.0 as a sublanguage.

The two languages, however, are rooted in different traditions and serve the needs of different communities. XSLT was primarily conceived as a stylesheet language whose primary goal was to render XML for the human reader on screen, on [the web][44] (as [web template language][45]), or on paper. XQuery was primarily conceived as a [database query language][46] in the tradition of [SQL][47].

Because the two languages originate in different communities, XSLT is stronger in its handling of narrative documents with more flexible structure, while XQuery is stronger in its data handling, for example when performing relational joins.\[_[citation needed][48]_\]

## XSLT media types

The `<output>` element can optionally take the attribute `media-type`, which allows one to set the [media type][49] (or MIME type) for the resulting output, for example: `<xsl:output output="xml" media-type="application/xml"/>`. The XSLT 1.0 recommendation recommends the more general attribute types `text/xml` and `application/xml` since for a long time there was no registered media type for XSLT. During this time `text/xsl` became the de facto standard. In XSLT 1.0 it was not specified how the `media-type` values should be used.

With the release of the XSLT 2.0, the W3C recommended the registration of the MIME media type `application/xslt+xml`[\[45\]][50] and it was later registered with the [Internet Assigned Numbers Authority][51].[\[46\]][52]

Pre-1.0 working drafts of XSLT used `text/xsl` in their embedding examples, and this type was implemented and continues to be promoted by Microsoft in Internet Explorer[\[47\]][53] and MSXML. It is also widely recognized in the `xml-stylesheet` processing instruction by other browsers. In practice, therefore, users wanting to control transformation in the browser using this processing instruction are obliged to use this unregistered media type.[\[48\]][54]

## XSLT examples

For grouping problems, see [XSLT/Muenchian grouping][55]. Below is a sample of incoming XML document

## Example 1 (transforming XML to XML)

This XSLT stylesheet provides templates to transform the XML document:

Its evaluation results in a new XML document, having another structure:

## Example 2 (transforming XML to XHTML)

Processing the following example XSLT file

with the XML input file shown above results in the following [XHTML][56] ([whitespace][57] has been adjusted here for clarity):

This XHTML generates the output below when rendered in a web browser.

In order for a web browser to be able automatically to apply an XSL transformation to an XML document on display, an XML stylesheet processing instruction can be inserted into XML. So, for example, if the stylesheet in Example 2 above were available as "example2.xsl", the following instruction could be added to the original incoming XML:[\[49\]][58]

In this example, `text/xsl` is technically incorrect according to the W3C specifications[\[49\]][58] (which say the type should be `text/xml`), but it is the only media type that is widely supported across browsers as of 2009\.

## See also

## References

## Further reading

## External links

[0]: /wiki/XML_transformation_language "XML transformation language"
[1]: /wiki/XML "XML"
[2]: #cite_note-Transformation-1
[3]: /wiki/HTML "HTML"
[4]: /wiki/Web_page "Web page"
[5]: /wiki/Plain_text "Plain text"
[6]: /wiki/XSL_Formatting_Objects "XSL Formatting Objects"
[7]: /wiki/Portable_Document_Format "Portable Document Format"
[8]: /wiki/PostScript "PostScript"
[9]: /wiki/Portable_Network_Graphic "Portable Network Graphic"
[10]: #cite_note-2
[11]: #cite_note-3
[12]: /wiki/XQuery_and_XPath_Data_Model "XQuery and XPath Data Model"
[13]: /wiki/Relational_database "Relational database"
[14]: /wiki/Geographical_information_systems "Geographical information systems"
[15]: /wiki/Turing-complete "Turing-complete"
[16]: #cite_note-4
[17]: /wiki/Functional_programming "Functional programming"
[18]: #cite_note-5
[19]: /wiki/SNOBOL "SNOBOL"
[20]: /wiki/AWK_(programming_language) "AWK (programming language)"
[21]: /wiki/DSSSL "DSSSL"
[22]: /wiki/SGML "SGML"
[23]: #cite_note-6
[24]: /wiki/Imperative_programming "Imperative programming"
[25]: /wiki/C_(programming_language) "C (programming language)"
[26]: /wiki/Declarative_programming "Declarative programming"
[27]: #cite_note-15
[28]: #cite_note-IBM-16
[29]: /wiki/Expression_(programming) "Expression (programming)"
[30]: #cite_note-17
[31]: /wiki/Tree_data_structure "Tree data structure"
[32]: /wiki/Java_bytecode "Java bytecode"
[33]: /wiki/Common_Intermediate_Language "Common Intermediate Language"
[34]: #cite_note-42
[35]: /wiki/Java_API_for_XML_Processing "Java API for XML Processing"
[36]: /wiki/Document_Object_Model "Document Object Model"
[37]: /wiki/XPath "XPath"
[38]: #cite_note-43
[39]: /wiki/Michael_Howard_Kay "Michael Howard Kay"
[40]: #cite_note-44
[41]: /wiki/Subroutine "Subroutine"
[42]: /wiki/XQuery "XQuery"
[43]: /wiki/W3C "W3C"
[44]: /wiki/The_web "The web"
[45]: /wiki/Web_template "Web template"
[46]: /wiki/Database_query_language "Database query language"
[47]: /wiki/SQL "SQL"
[48]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[49]: /wiki/Internet_media_type "Internet media type"
[50]: #cite_note-45
[51]: /wiki/Internet_Assigned_Numbers_Authority "Internet Assigned Numbers Authority"
[52]: #cite_note-46
[53]: #cite_note-47
[54]: #cite_note-48
[55]: /wiki/XSLT/Muenchian_grouping "XSLT/Muenchian grouping"
[56]: /wiki/XHTML "XHTML"
[57]: /wiki/Whitespace_(computer_science) "Whitespace (computer science)"
[58]: #cite_note-w3cxslt-49