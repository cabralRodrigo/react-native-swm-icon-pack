using CodeGenerator.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace CodeGenerator.Services;

internal class IconParser : IIconParser
{
    private readonly ISvgTransformer svgTransformer;

    public IconParser(ISvgTransformer svgTransformer)
    {
        this.svgTransformer = svgTransformer ?? throw new ArgumentNullException(nameof(svgTransformer));
    }

    public Icon[] Parse(IconPath[] paths)
    {
        return paths.GroupBy(s => s.Name).Select(s => this.Parse(s.Key, s)).ToArray();
    }

    private Icon Parse(string fileName, IEnumerable<IconPath> paths)
    {
        Console.WriteLine(fileName);
        return new Icon(ConvertFileNameToIconName(fileName), paths.Select(this.Parse).ToArray());
    }

    private IconVariant Parse(IconPath icon)
    {
        var svg = File.ReadAllText(icon.FullName);
        return new IconVariant(icon.Variant, ToTitleCase(icon.Variant), this.svgTransformer.TransformSvg(svg));
    }

    private static string ConvertFileNameToIconName(string fileName)
    {
        var parts = Path.GetFileNameWithoutExtension(fileName).Split('-');
        return string.Join(string.Empty, parts.Select(ToTitleCase));
    }

    private static string ToTitleCase(string value)
    {
        return char.ToUpper(value[0]) + value[1..];
    }
}

internal interface IIconParser
{
    Icon[] Parse(IconPath[] paths);
}