$appsPath = "e:\1st YEAR DTU\New folder\muuhu\apps"
$files = Get-ChildItem -Path $appsPath -Recurse -File -Include *.ts,*.tsx,*.json | Where-Object { 
    $_.DirectoryName -notmatch '\\node_modules' -and $_.DirectoryName -notmatch '\\\.next' 
}

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -match '(?i)buudy') {
        Write-Host "Modifying $($file.FullName)"
        $content = $content -replace '(?i)Buudy LED Mask', 'Muuhu IPL Hair Removal'
        $content = $content -replace '(?i)Buudy\.com', 'Muuhu.com'
        $content = $content -replace 'support@buudy\.com', 'support@muuhu.com'
        $content = $content -replace '(?i)Buudy', 'Muuhu'
        $content = $content -replace 'buudy-led-torch', 'red-light-torch'
        $content | Set-Content $file.FullName
    }
}
