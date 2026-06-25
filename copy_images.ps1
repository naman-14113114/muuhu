$countries = @("us", "uk", "ca", "au")
$images = @(
    "massage_kit_hero_1782393135937.png",
    "massage_kit_gallery_1_1782393158361.png",
    "massage_kit_gallery_2_1782393168736.png",
    "massage_kit_gallery_3_1782393189189.png",
    "massage_kit_gallery_4_1782393200151.png",
    "massage_kit_spotlight_1782393225650.png"
)

$sourceDir = "C:\Users\sahil\.gemini\antigravity\brain\f29cb73d-dc8c-4575-841d-ccc1df791e42\"

foreach ($country in $countries) {
    $destDir = "E:\1st YEAR DTU\New folder\muuhu\apps\$country\public\media\products\muuhu-massage-kit\images"
    if (!(Test-Path -Path $destDir)) {
        New-Item -ItemType Directory -Force -Path $destDir | Out-Null
    }

    # Rename the files cleanly while copying
    Copy-Item "$sourceDir\massage_kit_hero_1782393135937.png" "$destDir\massage_kit_hero.png" -Force
    Copy-Item "$sourceDir\massage_kit_gallery_1_1782393158361.png" "$destDir\massage_kit_gallery_1.png" -Force
    Copy-Item "$sourceDir\massage_kit_gallery_2_1782393168736.png" "$destDir\massage_kit_gallery_2.png" -Force
    Copy-Item "$sourceDir\massage_kit_gallery_3_1782393189189.png" "$destDir\massage_kit_gallery_3.png" -Force
    Copy-Item "$sourceDir\massage_kit_gallery_4_1782393200151.png" "$destDir\massage_kit_gallery_4.png" -Force
    Copy-Item "$sourceDir\massage_kit_spotlight_1782393225650.png" "$destDir\massage_kit_spotlight.png" -Force

    Write-Output "Copied to $country"
}
