﻿namespace CodeGenerator.Svg;

internal interface IAttributeExcludeList
{
    string Tag { get; }
    string[] Attributes { get; }
}

internal class SvgAttributeExcludeList : IAttributeExcludeList
{
    public string Tag => "Svg";

    public string[] Attributes => new[] { "xmlns", "width", "height" };
}

internal class PathAttributeExcludeList : IAttributeExcludeList
{
    public string Tag => "Path";

    public string[] Attributes => new[] { "id" };
}