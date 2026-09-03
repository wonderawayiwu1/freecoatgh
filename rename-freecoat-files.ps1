# PowerShell Script to Rename FreeCoat Images
# This script renames all WhatsApp images and videos to a simple sequential format

$folderPath = "c:\Users\user\Desktop\UpConstruction-main\freecoat"

# Get all image files (jpeg)
$imageFiles = Get-ChildItem -Path $folderPath -Filter "*.jpeg" | Sort-Object Name

# Get all video files (mp4)
$videoFiles = Get-ChildItem -Path $folderPath -Filter "*.mp4" | Sort-Object Name

Write-Host "Found $($imageFiles.Count) image files and $($videoFiles.Count) video files" -ForegroundColor Green
Write-Host ""

# Rename image files
$counter = 1
foreach ($file in $imageFiles) {
    $newName = "freecoat-project-{0:D2}.jpg" -f $counter
    $newPath = Join-Path -Path $folderPath -ChildPath $newName
    
    Write-Host "Renaming: $($file.Name) -> $newName" -ForegroundColor Cyan
    Rename-Item -Path $file.FullName -NewName $newName
    
    $counter++
}

Write-Host ""
Write-Host "Image files renamed successfully!" -ForegroundColor Green
Write-Host ""

# Rename video files
$videoCounter = 1
foreach ($file in $videoFiles) {
    $newName = "freecoat-video-{0:D2}.mp4" -f $videoCounter
    $newPath = Join-Path -Path $folderPath -ChildPath $newName
    
    Write-Host "Renaming: $($file.Name) -> $newName" -ForegroundColor Cyan
    Rename-Item -Path $file.FullName -NewName $newName
    
    $videoCounter++
}

Write-Host ""
Write-Host "Video files renamed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "All files have been renamed!" -ForegroundColor Yellow
Write-Host "Total: $($imageFiles.Count) images + $($videoFiles.Count) videos = $($imageFiles.Count + $videoFiles.Count) files" -ForegroundColor Yellow
