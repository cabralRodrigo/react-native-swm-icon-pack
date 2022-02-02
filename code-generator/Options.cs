using CommandLine;

namespace CodeGenerator;

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
internal class Options
{
    [Option('f', "folder", Required = true, HelpText = "The folder containg all icons.")]
    public string IconsFolder { get; set; }

    [Option('o', "output", Required = true, HelpText = "The output folder.")]
    public string OutputFolder { get; set; }
}
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.