# ================================
# VARIABLES DE CONFIGURACIÓN
# ================================
$repo = "https://github.com/enri123/portfolio-angular.git"
$branch = "gh-pages"
$projectName = "portfolio-angular"
$distPath = ".\dist\$projectName\browser"
$useDocsFolder = $true     # true = publica en /docs 
# ================================

Write-Host "Construyendo Angular con localize (es/en)..." -ForegroundColor Cyan
ng build --configuration production --localize

if ($LASTEXITCODE -ne 0) {
    Write-Error "Error al ejecutar 'ng build'. Publicación abortada."
    exit 1
}

Write-Host "Preparando archivos..." -ForegroundColor Cyan

# ================================
# MODO 1: PUBLICAR USANDO /docs EN LA RAMA main
# ================================
if ($useDocsFolder -eq $true) {

    $docsPath = ".\docs"

    if (Test-Path $docsPath) {
        Remove-Item -Recurse -Force $docsPath
    }

    New-Item -ItemType Directory -Path $docsPath | Out-Null

    Write-Host "Copiando archivos generados a /docs..." -ForegroundColor Yellow
    Copy-Item "$distPath\*" $docsPath -Recurse -Force

    Copy-Item "$distPath\es\index.html" "$docsPath\index.html" -Force

    Write-Host "Añadiendo .nojekyll..." -ForegroundColor Yellow
    New-Item -Path "$docsPath\.nojekyll" -ItemType File | Out-Null

    Write-Host "Commit y push a la rama main..." -ForegroundColor Yellow
    git add docs
    git commit -m "Deploy actualizado para GitHub Pages"
    git push origin main

    Write-Host "Publicado correctamente usando /docs en la rama main." -ForegroundColor Green
    exit 0
}
