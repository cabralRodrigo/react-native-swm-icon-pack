using CodeGenerator.Generation;
using CodeGenerator.Services;
using System;
using System.IO;
using System.Linq;

namespace CodeGenerator;

internal class App
{
    private readonly IIconLoader iconLoader;
    private readonly IIconParser iconParser;
    private readonly IIconCodeGenerator iconCodeGenerator;
    private readonly IIndexCodeGenerator indexCodeGenerator;
    private readonly ICodeWriter codeWriter;

    public App(IIconLoader iconLoader, IIconParser iconParser, IIconCodeGenerator iconCodeGenerator, IIndexCodeGenerator indexCodeGenerator, ICodeWriter codeWriter)
    {
        this.iconLoader = iconLoader ?? throw new ArgumentNullException(nameof(iconLoader));
        this.iconParser = iconParser ?? throw new ArgumentNullException(nameof(iconParser));
        this.iconCodeGenerator = iconCodeGenerator ?? throw new ArgumentNullException(nameof(iconCodeGenerator));
        this.indexCodeGenerator = indexCodeGenerator ?? throw new ArgumentNullException(nameof(indexCodeGenerator));
        this.codeWriter = codeWriter ?? throw new ArgumentNullException(nameof(codeWriter));
    }

    public int Run(Options options)
    {
        if (!Directory.Exists(options.IconsFolder))
        {
            Console.Error.WriteLine($"The path '{options.IconsFolder}' does not exists.");
            return -1;
        }

        var paths = this.iconLoader.LoadAllIcons(options.IconsFolder).ToArray();
        if (!paths.Any())
        {
            Console.Write("Could not find any icons.");
            return 0;
        }

        Console.WriteLine($"Found {paths.Length} icons with {paths.Select(s => s.Variant).Distinct().Count()} variants.");

        Console.WriteLine();
        Console.WriteLine("Parsing icons.");
        var icons = this.iconParser.Parse(paths);

        Console.WriteLine();
        Console.WriteLine("Generating code.");
        var iconsWithCode = icons.Select(s => (Icon: s, Code: this.iconCodeGenerator.Generate(s))).ToArray();
        var indexCode = this.indexCodeGenerator.Generate(icons);

        Console.WriteLine();
        Console.WriteLine("Saving code.");
        this.codeWriter.WriteIcons(options.OutputFolder, iconsWithCode);
        this.codeWriter.WriteIndex(options.OutputFolder, indexCode);

        return 0;
    }
}