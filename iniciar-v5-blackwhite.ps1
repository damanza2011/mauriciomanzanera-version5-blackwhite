Write-Host "=====================================================================" -ForegroundColor White
Write-Host "   LANZANDO PLATAFORMA WEB MAURICIO MANZANERA JARAMILLO - VERSION 5" -ForegroundColor Yellow
Write-Host "         EDICION MONOCROMATICA NEGRO Y BLANCO - ALTO IMPACTO" -ForegroundColor White
Write-Host "=====================================================================" -ForegroundColor White
Write-Host ""
$htmlPath = Join-Path $PSScriptRoot "index.html"
Write-Host "Abriendo $htmlPath en el navegador..." -ForegroundColor Green
Start-Process $htmlPath
Write-Host "Listo. Despliegue local completado." -ForegroundColor Yellow
