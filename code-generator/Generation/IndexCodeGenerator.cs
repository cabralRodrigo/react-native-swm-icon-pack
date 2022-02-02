using CodeGenerator.Models;

namespace CodeGenerator.Generation;

internal class IndexCodeGenerator : IIndexCodeGenerator
{
    public string Generate(Icon[] icons)
    {
        var source = new SourceBuilder();

        foreach (var icon in icons)
            source.AppendLine($"export {{ default as {icon.Name} }} from './{icon.Name}';");

        return source.ToString();
    }
}

internal interface IIndexCodeGenerator
{
    string Generate(Icon[] icons);
}