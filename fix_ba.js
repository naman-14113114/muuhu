
const fs = require("fs");
const apps = ["us", "uk", "ca", "au"];

apps.forEach(app => {
    const path = `apps/${app}/src/data/productSections.ts`;
    if (!fs.existsSync(path)) return;
    let content = fs.readFileSync(path, "utf8");
    
    // Replace the entire transformations array with empty
    content = content.replace(
        /export const transformations: Transformation\[\] = \[[\s\S]*?\];/,
        "export const transformations: Transformation[] = [];"
    );
    
    fs.writeFileSync(path, content, "utf8");
    console.log(`Cleared transformations in ${path}`);
});

