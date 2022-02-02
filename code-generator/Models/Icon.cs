namespace CodeGenerator.Models;

internal record Icon(string Name, IconVariant[] Variants)
{
    public string PropsName => $"{this.Name}Props";
}