$ErrorActionPreference = "Stop"
$projectRoot = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
docker compose --project-directory $projectRoot --env-file "$projectRoot/.env" -f "$projectRoot/infrastructure/docker/compose.dev.yml" up --build -d
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
