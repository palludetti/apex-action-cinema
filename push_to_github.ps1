param (
    [string]$RepoUrl = ""
)

if ($RepoUrl -eq "") {
    Write-Host "=========================================" -ForegroundColor Cyans
    Write-Host " APEX ACTION CINEMA - PUSH TO GITHUB" -ForegroundColor Yellow
    Write-Host "=========================================" -ForegroundColor Cyans
    Write-Host ""
    $RepoUrl = Read-Host "Digite a URL do seu repositorio no GitHub (ex: https://github.com/seu-usuario/apex-action-cinema.git)"
}

if ($RepoUrl -ne "") {
    Write-Host "Configurando remote origin..." -ForegroundColor Green
    git remote remove origin 2>$null
    git remote add origin $RepoUrl
    git branch -M main
    Write-Host "Enviando arquivos para o GitHub..." -ForegroundColor Green
    git push -u origin main
    Write-Host ""
    Write-Host "Projeto enviado com sucesso para o GitHub!" -ForegroundColor Yellow
} else {
    Write-Host "Nenhuma URL fornecida. Operacao cancelada." -ForegroundColor Red
}
