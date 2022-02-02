using CodeGenerator.Models;
using System.Collections.Generic;
using System.IO;

namespace CodeGenerator.Services;

internal class IconLoader : IIconLoader
{
    public IconPath[] LoadAllIcons(string path)
    {
        var icons = new List<IconPath>();

        foreach (var filePath in Directory.GetFiles(path, "*.svg", SearchOption.AllDirectories))
        {
            var file = new FileInfo(filePath);
            icons.Add(new IconPath(file.Directory!.Name, file.Name, file.FullName));
        }

        return icons.ToArray();
    }
}

internal interface IIconLoader
{
    IconPath[] LoadAllIcons(string path);
}