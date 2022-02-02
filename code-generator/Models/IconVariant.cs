using System.Collections.Generic;
using System.Linq;

namespace CodeGenerator.Models;

internal record IconVariant
{
    public string Key { get; }
    public string Name { get; }
    public IconNode Node { get; }

    public string PropsName => $"{this.Name}Props";
    public readonly JavascriptType[] UsedTypes;
    public readonly IconNodeAttributeValueProp[] AllProps;

    public IconVariant(string key, string name, IconNode node)
    {
        this.Key = key;
        this.Name = name;
        this.Node = node;

        var allNodes = FlatNode(node).ToArray();

        this.AllProps = allNodes
            .SelectMany(s => s.Attributes)
            .Select(s => s.Value)
            .OfType<IconNodeAttributeValueProp>()
            .Distinct()
            .ToArray();

        this.UsedTypes = this.AllProps
            .Select(s => s.Type)
            .Union(allNodes.Select(s => s.Tag))
            .Distinct()
            .ToArray();
    }

    private static IEnumerable<IconNode> FlatNode(IconNode node)
    {
        yield return node;

        foreach (var child in node.Children.SelectMany(FlatNode))
            yield return child;
    }
}