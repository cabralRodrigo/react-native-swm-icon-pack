using CodeGenerator.Models;
using System.Collections.Generic;
using System.IO;

namespace CodeGenerator.Services
{
    internal class CodeWriter : ICodeWriter
    {
        public void WriteIcons(string folder, IEnumerable<(Icon icon, string Code)> icons)
        {
            Directory.CreateDirectory(folder);

            foreach (var (icon, code) in icons)
                File.WriteAllText(Path.Join(folder, $"{icon.Name}.tsx"), code);
        }

        public void WriteIndex(string folder, string code)
        {
            Directory.CreateDirectory(folder);
            File.WriteAllText(Path.Join(folder, "index.ts"), code);
        }
    }

    internal interface ICodeWriter
    {
        void WriteIcons(string folder, IEnumerable<(Icon icon, string Code)> icons);
        void WriteIndex(string folder, string code);
    }
}