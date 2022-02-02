using CodeGenerator.Models;

namespace CodeGenerator.Svg;

internal interface ISvgTagTransformer
{
    string Original { get; }
    JavascriptType Transformed { get; }
}

internal class SvgTagTransformer : ISvgTagTransformer
{
    public string Original => "svg";
    public JavascriptType Transformed => new("Svg", "react-native-svg");
}

internal class PathTagTransformer : ISvgTagTransformer
{
    public string Original => "path";
    public JavascriptType Transformed => new("Path", "react-native-svg");
}

internal class GroupTagTransformer : ISvgTagTransformer
{
    public string Original => "g";
    public JavascriptType Transformed => new("G", "react-native-svg");
}