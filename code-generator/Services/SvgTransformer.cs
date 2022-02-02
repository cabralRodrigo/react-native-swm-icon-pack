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
    private readonly ISvgAttributeTransformer[] attributeTransformers;

    public SvgTransformer(ISvgTagTransformer[] tagTransformers, ISvgAttributeTransformer[] attributeTransformers)
    {
        ArgumentNullException.ThrowIfNull(tagTransformers);

        this.tagTransformers = tagTransformers.ToDictionary(s => s.Original, s => s.Transformed);
        this.attributeTransformers = attributeTransformers ?? throw new ArgumentNullException(nameof(attributeTransformers));
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
        foreach (var attribute in element.Attributes)
        {
            foreach (var attributeTransformer in this.attributeTransformers)
            {
                if (!attributeTransformer.CanTransform(element, attribute))
                    continue;

                var nodeAttribute = attributeTransformer.Tranform(element, attribute);
                if (nodeAttribute is not null)
                    yield return nodeAttribute;

                goto next;
            }

            throw new Exception($"Transformer not found for attribute '{attribute.Name}' of element tag '{element.TagName}'.");
        next:;
        }
    }
}

internal interface ISvgTransformer
{
    IconNode TransformSvg(string svg);
}