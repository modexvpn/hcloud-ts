export type LabelSelector =
| { key: string; op: "eq" | "neq"; value: string }
| { key: string; op: "in" | "notin"; values: string[] }
| { key: string; op: "exists" }
| { key: string; op: "notExists" };

export function parseLabelSelector(selector: string): LabelSelector[] {
    const parts = selector.split(",").map((part) => part.trim());
    const selectors: LabelSelector[] = [];
    
    for (const part of parts) {
        if (part.includes(" notin ")) {
            const [key, values] = part.split(" notin ");
            const parsed = values.match(/\(([^)]+)\)/);
            if (parsed) {
                selectors.push({ key, op: "notin", values: parsed[1].split(",") });
            }
        } else if (part.includes(" in ")) {
            const [key, values] = part.split(" in ");
            const parsed = values.match(/\(([^)]+)\)/);
            if (parsed) {
                selectors.push({ key, op: "in", values: parsed[1].split(",") });
            }
        } else if (part.includes("!=")) {
            const [key, value] = part.split("!=");
            selectors.push({ key, op: "neq", value });
        } else if (part.includes("=")) {
            const [key, value] = part.split("=");
            selectors.push({ key, op: "eq", value });
        } else if (part.startsWith("!")) {
            selectors.push({ key: part.slice(1), op: "notExists" });
        } else {
            selectors.push({ key: part, op: "exists" });
        }
    }
    
    return selectors;
}