using Aspose.Svg;
using Aspose.Svg.Dom;
using CodeGenerator.Models;
using CodeGenerator.Svg;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CodeGenerator.Services;

internal class SvgTransformer : ISvgTransformer
{
    private readonly Dictionary<string, JavascriptType> tagTransformers;
    private readonly Dictionary<string, string[]> attributeExcludeList;
    private readonly Dictionary<string, IReadOnlyDictionary<string, (string Prop, JavascriptType Type)>> attributePropExtractors;

    public SvgTransformer(ISvgTagTransformer[] tagTransformers, IAttributeExcludeList[] attributeExcludeLists, IAttributePropExtractor[] attributePropExtractors)
    {
        ArgumentNullException.ThrowIfNull(tagTransformers);
        ArgumentNullException.ThrowIfNull(attributeExcludeLists);
        ArgumentNullException.ThrowIfNull(attributePropExtractors);

        this.tagTransformers = tagTransformers.ToDictionary(s => s.Original, s => s.Transformed);
        this.attributeExcludeList = attributeExcludeLists.ToDictionary(s => s.Tag, s => s.Attributes);
        this.attributePropExtractors = attributePropExtractors.ToDictionary(s => s.Tag, s => s.AttributesProps);
    }

    public IconNode TransformSvg(string svg)
    {
        using var document = new SVGDocument(svg, ".");
        return this.Transform(document.RootElement);
    }

    private IconNode Transform(Element element)
    {
        if (!this.tagTransformers.TryGetValue(element.TagName, out var tag))
            throw new Exception($"Could not found tag tranformer for tag '{element.TagName}'.");

        return new(tag, this.TransformAttributes(tag, element).ToArray(), element.Children.Select(this.Transform).ToArray());
    }

    private IEnumerable<IconNodeAttribute> TransformAttributes(JavascriptType tag, Element element)
    {
        this.attributeExcludeList.TryGetValue(tag.Name, out var attributeExcludeList);
        this.attributePropExtractors.TryGetValue(tag.Name, out var propExtractors);

        foreach (var attribute in element.Attributes)
        {
            if (attributeExcludeList?.Contains(attribute.Name) == true)
                continue;

            if (propExtractors?.TryGetValue(attribute.Name, out var prop) == true)
                yield return new(attribute.Name, new IconNodeAttributeValueProp(prop.Prop, prop.Type));
            else
                yield return new(attribute.Name, new IconNodeAttributeValueLiteral(attribute.Value));
        }
    }
}

internal interface ISvgTransformer
{
    IconNode TransformSvg(string svg);
}