using Aspose.Svg.Dom;
using CodeGenerator.Models;
using System.Collections.Generic;
using System.Linq;

namespace CodeGenerator.Svg
{
    internal interface ISvgAttributeTransformer
    {
        bool CanTransform(Element element, Attr attribute);
        IconNodeAttribute? Tranform(Element element, Attr attribute);
    }

    internal class IgnoreAttributeTransformer : ISvgAttributeTransformer
    {
        private static readonly Dictionary<string, string[]> IgnoreList = new()
        {
            ["svg"] = new[] { "xmlns", "width", "height" },
            ["path"] = new[] { "id" }
        };

        public bool CanTransform(Element element, Attr attribute)
        {
            if (!IgnoreList.TryGetValue(element.TagName, out var attributes))
                return false;

            return attributes.Contains(attribute.Name);
        }

        public IconNodeAttribute? Tranform(Element element, Attr attribute)
        {
            return null;
        }
    }

    internal class LiteralAttributeTransformer : ISvgAttributeTransformer
    {
        private static readonly Dictionary<string, string[]> Map = new()
        {
            ["svg"] = new[] { "fill", "viewBox" },
            ["path"] = new[] { "d", "stroke-linecap", "stroke-linejoin", "opacity", "fill-rule", "clip-rule" },
            ["g"] = new[] { "opacity" },
        };

        public bool CanTransform(Element element, Attr attribute)
        {
            if (!Map.TryGetValue(element.TagName, out var attributes))
                return false;

            return attributes.Contains(attribute.Name);
        }

        public IconNodeAttribute? Tranform(Element element, Attr attribute)
        {
            var name = attribute.Name;
            if (name.Contains('-'))
                name = string.Join(string.Empty, name.Split('-').Select((s, i) => i == 0 ? s : (char.ToUpper(s[0]) + s[1..])));

            return new IconNodeAttribute(name, new IconNodeAttributeValueLiteral(attribute.Value));
        }
    }

    internal class PathStrokeAttributeTransformer : ISvgAttributeTransformer
    {
        public bool CanTransform(Element element, Attr attribute)
        {
            return element.TagName == "path" && attribute.Name == "stroke";
        }

        public IconNodeAttribute? Tranform(Element element, Attr attribute)
        {
            return new IconNodeAttribute("stroke", new IconNodeAttributeValueProp("color", new JavascriptType("Color", "react-native-svg")));
        }
    }

    internal class PathStrokeWidthAttributeTransformer : ISvgAttributeTransformer
    {
        public bool CanTransform(Element element, Attr attribute)
        {
            return element.TagName == "path" && attribute.Name == "stroke-width";
        }

        public IconNodeAttribute? Tranform(Element element, Attr attribute)
        {
            return new IconNodeAttribute("strokeWidth", new IconNodeAttributeValueProp("strokeWidth", new JavascriptType("number", null)));
        }
    }

    internal class PathFillAttributeTransformer : ISvgAttributeTransformer
    {
        public bool CanTransform(Element element, Attr attribute)
        {
            return element.TagName == "path" && attribute.Name == "fill";
        }

        public IconNodeAttribute? Tranform(Element element, Attr attribute)
        {
            return new IconNodeAttribute("fill", new IconNodeAttributeValueProp("color", new JavascriptType("Color", "react-native-svg")));
        }
    }
}