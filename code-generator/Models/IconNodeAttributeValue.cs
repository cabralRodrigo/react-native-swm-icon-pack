using CodeGenerator.Generation;

namespace CodeGenerator.Models;

internal abstract record IconNodeAttributeValue
{
    public abstract void Write(SourceBuilder source);
}