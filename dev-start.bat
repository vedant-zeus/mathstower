@echo off
echo Starting Trigno Tower (Backend & Frontend)...

start cmd /k "cd backend && npm run dev"
start cmd /k "cd frontend && npm run dev -- --hostname 10.9.125.95"

echo Servers are initializing in separate windows.
echo - Frontend: http://localhost:3000 (and your LAN IP)
echo - Backend: http://localhost:5000 (and your LAN IP)
pause
