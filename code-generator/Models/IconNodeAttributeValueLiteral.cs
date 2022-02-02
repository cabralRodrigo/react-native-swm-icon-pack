using CodeGenerator.Generation;

namespace CodeGenerator.Models;

internal record IconNodeAttributeValueLiteral(string Literal) : IconNodeAttributeValue
{
    public override void Write(SourceBuilder source) => source.Append($"\"{this.Literal}\"");
}
