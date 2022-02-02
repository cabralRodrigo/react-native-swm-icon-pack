using CommandLine;

namespace CodeGenerator;

internal static class Entry
{
    public static int Main(string[] args)
    {
        var code = -1;
        Parser.Default.ParseArguments<Options>(args).WithParsed(options => code = Run(options));

        return code;
    }

    private static int Run(Options options)
    {
        using var container = new Container();
        var app = container.Resolve();

        return app.Value.Run(options);
    }
}