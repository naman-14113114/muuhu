const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Rename files globally using PowerShell
const renameCmds = [
  'Get-ChildItem -Path "E:\\1st YEAR DTU\\New folder\\muuhu\\apps" -Recurse -File | Where-Object { $_.Name -match "Torch" -and $_.Name -notmatch "node_modules" -and $_.Name -notmatch ".next" } | Rename-Item -NewName { $_.Name -replace "Torch", "MassageKit" }'
];
try {
  execSync(`powershell -Command "${renameCmds[0]}"`, { stdio: 'inherit' });
} catch (e) {
  console.log("Renaming files encountered an issue, or no files needed renaming.");
}

// 2. Perform global text replacements for imports, paths, and identifiers
const replaceCmds = [
  `Get-ChildItem -Path "E:\\1st YEAR DTU\\New folder\\muuhu\\apps" -Recurse -File -Include *.ts,*.tsx | Where-Object { $_.FullName -notmatch "node_modules|\\.next|dist" } | ForEach-Object { $content = Get-Content $_.FullName -Raw; if ($content -match "Torch") { $content = $content -replace "Torch", "MassageKit"; Set-Content -Path $_.FullName -Value $content -NoNewline -Encoding UTF8; Write-Host "Updated $($_.Name)" } }`,
  
  `Get-ChildItem -Path "E:\\1st YEAR DTU\\New folder\\muuhu\\apps" -Recurse -File -Include *.ts,*.tsx | Where-Object { $_.FullName -notmatch "node_modules|\\.next|dist" } | ForEach-Object { $content = Get-Content $_.FullName -Raw; if ($content -match "red-light-torch") { $content = $content -replace "red-light-torch", "muuhu-massage-kit"; Set-Content -Path $_.FullName -Value $content -NoNewline -Encoding UTF8; Write-Host "Updated $($_.Name)" } }`,

  `Get-ChildItem -Path "E:\\1st YEAR DTU\\New folder\\muuhu\\apps" -Recurse -File -Include *.ts,*.tsx | Where-Object { $_.FullName -notmatch "node_modules|\\.next|dist" } | ForEach-Object { $content = Get-Content $_.FullName -Raw; if ($content -match "buudy-red-torch") { $content = $content -replace "buudy-red-torch", "muuhu-massage-kit"; Set-Content -Path $_.FullName -Value $content -NoNewline -Encoding UTF8; Write-Host "Updated $($_.Name)" } }`,
  
  `Get-ChildItem -Path "E:\\1st YEAR DTU\\New folder\\muuhu\\apps" -Recurse -File -Include *.ts,*.tsx | Where-Object { $_.FullName -notmatch "node_modules|\\.next|dist" } | ForEach-Object { $content = Get-Content $_.FullName -Raw; if ($content -match "torchSpotlight") { $content = $content -replace "torchSpotlight", "massagerSpotlight"; Set-Content -Path $_.FullName -Value $content -NoNewline -Encoding UTF8; Write-Host "Updated $($_.Name)" } }`
];

for (const cmd of replaceCmds) {
  try {
    execSync(`powershell -Command "${cmd}"`, { stdio: 'inherit' });
  } catch (e) {
    console.log("Error running replacement:", e.message);
  }
}

// 3. Rename JSON reviews files
const countries = ['us', 'uk', 'ca', 'au'];
countries.forEach(country => {
  const oldReviewPath = path.join(__dirname, 'apps', country, 'src', 'data', 'reviews', 'buudy-red-torch-reviews.json');
  const newReviewPath = path.join(__dirname, 'apps', country, 'src', 'data', 'reviews', 'muuhu-massage-kit-reviews.json');
  if (fs.existsSync(oldReviewPath)) {
    fs.renameSync(oldReviewPath, newReviewPath);
    console.log(`Renamed reviews for ${country}`);
  }
});

console.log("Component overhaul completed.");
