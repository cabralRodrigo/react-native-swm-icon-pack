using CodeGenerator.Generation;
using CodeGenerator.Services;
using CodeGenerator.Svg;
using StrongInject;

namespace CodeGenerator;

[Register<App>]
[Register<IconLoader, IIconLoader>]
[Register<IconParser, IIconParser>]
[Register<SvgTransformer, ISvgTransformer>]
[Register<SvgTagTransformer, ISvgTagTransformer>]
[Register<PathTagTransformer, ISvgTagTransformer>]
[Register<GroupTagTransformer, ISvgTagTransformer>]
[Register<IconCodeGenerator, IIconCodeGenerator>]
[Register<IndexCodeGenerator, IIndexCodeGenerator>]
[Register<CodeWriter, ICodeWriter>]
[Register<IgnoreAttributeTransformer, ISvgAttributeTransformer>]
[Register<LiteralAttributeTransformer, ISvgAttributeTransformer>]
[Register<PathStrokeAttributeTransformer, ISvgAttributeTransformer>]
[Register<PathStrokeWidthAttributeTransformer, ISvgAttributeTransformer>]
[Register<PathFillAttributeTransformer, ISvgAttributeTransformer>]
internal partial class Container : IContainer<App> { }