using CodeGenerator.Models;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace CodeGenerator.Svg;

internal interface IAttributePropExtractor
{
    string Tag { get; }
    IReadOnlyDictionary<string, (string Prop, JavascriptType Type)> AttributesProps { get; }
}

internal class PathAttributePropExtractor : IAttributePropExtractor
{
    public string Tag => "Path";

    public IReadOnlyDictionary<string, (string Prop, JavascriptType Type)> AttributesProps => new ReadOnlyDictionary<string, (string, JavascriptType)>(new Dictionary<string, (string, JavascriptType)>
    {
        ["fill"] = ("fillColor", new("Color", "react-native-svg")),
        ["stroke"] = ("strokeColor", new("Color", "react-native-svg")),
        ["stroke-width"] = ("strokeWidth", new("number", null)),
    });
}