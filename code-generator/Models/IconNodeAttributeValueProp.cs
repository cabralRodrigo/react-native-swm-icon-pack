using CodeGenerator.Generation;

namespace CodeGenerator.Models;

internal record IconNodeAttributeValueProp(string Prop, JavascriptType Type) : IconNodeAttributeValue
{
    public override void Write(SourceBuilder source) => source.Append($"{{props.{this.Prop}}}");
}