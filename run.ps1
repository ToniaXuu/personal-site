# ============================================================
#  personal-site  double-click run.bat to launch
# ============================================================

$Host.UI.RawUI.WindowTitle = "personal-site"

function Menu {
    Write-Host ""
    Write-Host "========================================"
    Write-Host "      personal-site"
    Write-Host "========================================"
    Write-Host ""
    Write-Host "   1. Start Dev Server"
    Write-Host "   2. Build + Preview"
    Write-Host "   3. Generate Static"
    Write-Host "   4. Clean All"
    Write-Host "   0. Exit"
    Write-Host "========================================"
    Write-Host ""
    $choice = Read-Host "Enter option [0-4]"
    return $choice
}

$keepRunning = $true

Write-Host "[*] Checking Node.js ..."
try {
    $nodeVer = node -v 2>$null
    if (-not $nodeVer) { throw }
    $major = [int]($nodeVer -replace 'v','' -split '\.')[0]
    if ($major -lt 20) {
        Write-Host "[ERR] Node.js v20+ required, current: $nodeVer" -ForegroundColor Red
        $keepRunning = $false
    } else {
        Write-Host "[OK] Node.js $nodeVer"
    }
} catch {
    Write-Host "[ERR] Node.js not found! Install v20+: https://nodejs.org" -ForegroundColor Red
    $keepRunning = $false
}

if ($keepRunning) {
    Write-Host "[*] Checking dependencies ..."
    if (-not (Test-Path "node_modules")) {
        Write-Host "     Installing, please wait..."
        npm install
        if ($LASTEXITCODE -ne 0) {
            Write-Host "[ERR] Install failed!" -ForegroundColor Red
            $keepRunning = $false
        }
    }
    if ($keepRunning) {
        Write-Host "[OK] Dependencies ready"
    }
}

while ($keepRunning) {
    $c = Menu
    switch ($c) {
        "0" { $keepRunning = $false; break }
        "1" {
            Write-Host "Starting dev server... Ctrl+C to stop" -ForegroundColor Cyan
            npm run dev
        }
        "2" {
            Write-Host "Building..." -ForegroundColor Cyan
            npm run build
            if ($LASTEXITCODE -ne 0) {
                Write-Host "[ERR] Build failed!" -ForegroundColor Red
                pause; continue
            }
            Write-Host "[OK] Build done"
            Write-Host "Starting preview server... Ctrl+C to stop" -ForegroundColor Cyan
            npm run preview
        }
        "3" {
            Write-Host "Generating static files..." -ForegroundColor Cyan
            npm run generate
            if ($LASTEXITCODE -ne 0) {
                Write-Host "[ERR] Generate failed!" -ForegroundColor Red
            } else {
                Write-Host "[OK] Static files -> .output\\public\\" -ForegroundColor Green
            }
            pause
        }
        "4" {
            @(".output", ".nuxt", ".data", "node_modules") | ForEach-Object {
                if (Test-Path $_) {
                    Remove-Item $_ -Recurse -Force -ErrorAction SilentlyContinue
                    Write-Host "[OK] Removed $_"
                }
            }
            Write-Host "[OK] Clean complete" -ForegroundColor Green
            pause
        }
        default {
            if ($c -ne "0") {
                Write-Host "[ERR] Invalid option!" -ForegroundColor Red
            }
        }
    }
}