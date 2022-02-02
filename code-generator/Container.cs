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
[Register<SvgAttributeExcludeList, IAttributeExcludeList>]
[Register<PathAttributePropExtractor, IAttributePropExtractor>]
[Register<IconCodeGenerator, IIconCodeGenerator>]
[Register<IndexCodeGenerator, IIndexCodeGenerator>]
[Register<CodeWriter, ICodeWriter>]
internal partial class Container : IContainer<App> { }