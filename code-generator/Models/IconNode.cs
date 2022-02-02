namespace CodeGenerator.Models;

internal record IconNode(JavascriptType Tag, IconNodeAttribute[] Attributes, IconNode[] Children);