using System;
using System.Text;

namespace CodeGenerator.Generation;

internal class SourceBuilder
{
    private readonly StringBuilder buffer;
    private uint ident = 0;
    private bool skipIdent;

    public SourceBuilder()
    {
        this.buffer = new StringBuilder();
    }

    public void Append(string value)
    {
        if (!this.skipIdent)
            for (int i = 0; i < this.ident * 4; i++)
                this.buffer.Append(' ');

        this.buffer.Append(value);

        this.skipIdent = true;
    }

    public void AppendLine(string? value = null)
    {
        if (!this.skipIdent)
            for (int i = 0; i < this.ident * 4; i++)
                this.buffer.Append(' ');

        this.skipIdent = false;

        if (value is not null)
            this.buffer.Append(value);

        this.buffer.AppendLine();
    }

    public IDisposable Ident()
    {
        this.ident++;
        return new DisposableAction(() => this.ident--);
    }

    public override string ToString()
    {
        return this.buffer.ToString();
    }

    private class DisposableAction : IDisposable
    {
        private readonly Action action;
        public DisposableAction(Action action) => this.action = action;
        public void Dispose() => this.action?.Invoke();
    }
}