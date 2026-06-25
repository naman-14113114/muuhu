# Open the URL in the default browser
Start-Process "https://www.aliexpress.us/item/3256808856413208.html"

# Wait for the page to load (assuming 10 seconds is enough for AliExpress with VPN)
Start-Sleep -Seconds 10

# Initialize WScript.Shell for keystrokes
$wshell = New-Object -ComObject wscript.shell

# Select All (Ctrl+A)
$wshell.SendKeys("^a")
Start-Sleep -Milliseconds 500

# Copy (Ctrl+C)
$wshell.SendKeys("^c")
Start-Sleep -Milliseconds 1500

# Close the tab (Ctrl+W) so we don't leave a mess for the user
$wshell.SendKeys("^w")
Start-Sleep -Milliseconds 500

# Retrieve clipboard content
$clipboard = Get-Clipboard -Raw
if ($clipboard) {
    $clipboard | Out-File -FilePath "E:\1st YEAR DTU\New folder\muuhu\ali_data.txt" -Encoding utf8
    Write-Output "Successfully grabbed page text!"
} else {
    Write-Output "Clipboard was empty."
}
