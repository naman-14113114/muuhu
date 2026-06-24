const fs = require("fs");
function extract(filePath) {
    let content = fs.readFileSync(filePath, "utf-8");
    // very basic strip tags
    let text = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                      .replace(/<[^>]+>/g, ' ')
                      .replace(/\s+/g, ' ')
                      .trim();
    console.log(text.substring(0, 3000));
}
console.log("=== AMAZON ===");
extract("C:\\Users\\sahil\\.gemini\\antigravity\\brain\\f29cb73d-dc8c-4575-841d-ccc1df791e42\\.system_generated\\steps\\2152\\content.md");
console.log("\n=== ALIBABA ===");
extract("C:\\Users\\sahil\\.gemini\\antigravity\\brain\\f29cb73d-dc8c-4575-841d-ccc1df791e42\\.system_generated\\steps\\2146\\content.md");
