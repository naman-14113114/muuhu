Add-Type -AssemblyName System.Drawing

$dir = "E:\1st YEAR DTU\New folder\muuhu_ipl_generated_images\before_after"
$files = Get-ChildItem -Path $dir -Filter "trustoo-*.jpg" | Sort-Object Name

$outDir = "apps\us\public\media\products\buudy-led-mask\images"
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Force -Path $outDir }

# Also copy the two existing ones
Copy-Item "$dir\Weeks_1-4.png" "$outDir\Weeks_1-4.png" -Force
Copy-Item "$dir\Weeks_5-8.png" "$outDir\Weeks_5-8.png" -Force

$pairCount = 1
for ($i = 0; $i -lt $files.Count - 1; $i += 2) {
    if ($pairCount -gt 6) { break }
    
    $img1Path = $files[$i].FullName
    $img2Path = $files[$i+1].FullName
    
    try {
        $bmp1 = [System.Drawing.Image]::FromFile($img1Path)
        $bmp2 = [System.Drawing.Image]::FromFile($img2Path)
        
        # Calculate new dimensions: max height, combined width
        $newHeight = [math]::Max($bmp1.Height, $bmp2.Height)
        $newWidth = $bmp1.Width + $bmp2.Width
        
        $newBmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $g = [System.Drawing.Graphics]::FromImage($newBmp)
        $g.Clear([System.Drawing.Color]::White)
        
        # Center vertically if heights differ
        $y1 = ($newHeight - $bmp1.Height) / 2
        $y2 = ($newHeight - $bmp2.Height) / 2
        
        $g.DrawImage($bmp1, 0, $y1, $bmp1.Width, $bmp1.Height)
        $g.DrawImage($bmp2, $bmp1.Width, $y2, $bmp2.Width, $bmp2.Height)
        
        $outPath = "$outDir\stitched_ba_$pairCount.jpg"
        $newBmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        
        $g.Dispose()
        $bmp1.Dispose()
        $bmp2.Dispose()
        $newBmp.Dispose()
        
        $pairCount++
    } catch {
        Write-Host "Error stitching: $($_.Exception.Message)"
    }
}
Write-Host "Done stitching!"
