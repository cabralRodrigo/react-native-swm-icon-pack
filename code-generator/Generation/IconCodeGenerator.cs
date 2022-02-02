using CodeGenerator.Models;
using System.Linq;

namespace CodeGenerator.Generation;

internal class IconCodeGenerator : IIconCodeGenerator
{
    public string Generate(Icon icon)
    {
        var source = new SourceBuilder();

        WriteImports(source, icon);
        WriteVariantsProps(source, icon);
        WriteIconProps(source, icon);
        WriteVariants(source, icon);
        WriteIcon(source, icon);
        WriteExports(source, icon);

        return source.ToString();
    }

    private static void WriteImports(SourceBuilder source, Icon icon)
    {
        source.AppendLine("import React, { VFC } from 'react';");

        var types = icon.Variants
            .SelectMany(s => s.UsedTypes)
            .Where(s => s.Package is not null)
            .Where(s => s.Name != "Svg" || s.Package != "react-native-svg")
            .Distinct();

        foreach (var group in types.GroupBy(s => s.Package))
        {
            source.Append("import { ");
            source.Append(string.Join(", ", group.Select(s => s.Name).OrderBy(s => s)));
            source.AppendLine($" }} from '{group.Key}';");
        }

        source.AppendLine("import { createIcon } from '../helpers';");
        source.AppendLine();
    }

    private static void WriteVariantsProps(SourceBuilder source, Icon icon)
    {
        if (icon.Variants.Length < 2)
            return;

        foreach (var variant in icon.Variants)
        {
            source.Append($"type {variant.PropsName} = {{ ");

            foreach (var prop in variant.AllProps.OrderBy(s => s.Prop))
                source.Append($"{prop.Prop}: {prop.Type.Name}, ");

            source.AppendLine("};");
        }

        source.AppendLine();
    }

    private static void WriteIconProps(SourceBuilder source, Icon icon)
    {
        source.Append($"type {icon.PropsName} = ");

        if (icon.Variants.Length > 1)
        {
            source.AppendLine();

            using (source.Ident())
                for (int i = 0; i < icon.Variants.Length; i++)
                {
                    var variant = icon.Variants[i];
                    source.Append($"{{ variant: '{variant.Key}' }} & {variant.PropsName}");

                    if (i < icon.Variants.Length - 1)
                        source.AppendLine(" |");
                    else
                        source.AppendLine(";");
                }
        }
        else
        {
            source.Append("{ ");

            foreach (var prop in icon.Variants.Single().AllProps.OrderBy(s => s.Prop))
                source.Append($"{prop.Prop}: {prop.Type.Name}, ");

            source.AppendLine("};");
        }

        source.AppendLine();
    }

    private static void WriteVariants(SourceBuilder source, Icon icon)
    {
        if (icon.Variants.Length <= 1)
            return;

        foreach (var variant in icon.Variants)
        {
            source.AppendLine($"const {variant.Name}: VFC<{variant.PropsName}> = (props) => (");

            using (source.Ident())
                WriteNode(source, variant.Node, true);

            source.AppendLine(");");
            source.AppendLine();
        }
    }

    private static void WriteIcon(SourceBuilder source, Icon icon)
    {
        source.Append($"const {icon.Name}: VFC<{icon.PropsName}> = (props) => ");

        if (icon.Variants.Length > 1)
        {
            source.AppendLine("{");

            using (source.Ident())
            {
                source.AppendLine("switch (props.variant) {");

                using (source.Ident())
                    foreach (var variant in icon.Variants)
                    {
                        source.AppendLine($"case '{variant.Key}':");

                        using (source.Ident())
                            source.AppendLine($"return <{variant.Name} {{...props}} />;");
                    }

                source.AppendLine("}");
            }

            source.Append("}");
        }
        else
        {
            source.AppendLine("(");

            using (source.Ident())
                WriteNode(source, icon.Variants.Single().Node, true);

            source.Append(")");
        }

        source.AppendLine(";");
        source.AppendLine();
    }

    private static void WriteExports(SourceBuilder source, Icon icon)
    {
        source.Append($"export default createIcon({icon.Name});");
    }

    private static void WriteNode(SourceBuilder source, IconNode node, bool skipSvg = true)
    {
        if (skipSvg && node.Tag.Name == "Svg")
        {
            if (node.Children.Length > 1)
            {
                source.AppendLine("<>");

                using (source.Ident())
                    foreach (var child in node.Children)
                        WriteNode(source, child, false);

                source.AppendLine("</>");
            }
            else
                foreach (var child in node.Children)
                    WriteNode(source, child, false);

            return;
        }

        source.Append($"<{node.Tag.Name}");

        foreach (var attribute in node.Attributes)
        {
            source.Append($" {attribute.Name}=");
            attribute.Value.Write(source);
        }

        if (node.Children.Any())
            source.AppendLine(">");
        else
            source.AppendLine(" />");

        using (source.Ident())
            foreach (var child in node.Children)
                WriteNode(source, child, false);

        if (node.Children.Any())
            source.AppendLine($"</{node.Tag.Name}>");
    }
}

interface IIconCodeGenerator
{
    string Generate(Icon icon);
}