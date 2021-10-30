
export function NeedNewLine(text: string): string {
    if (text != null && text.trim() != "" && !text.endsWith("\n"))
        return "\n";
    return "";
}