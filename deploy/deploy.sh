#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

git pull
npm ci
npm run build

mkdir -p .next/standalone/.next
rm -rf .next/standalone/public
if [[ -d public ]]; then
  cp -a public .next/standalone/public
fi
cp -a .next/static .next/standalone/.next/static

sudo systemctl restart portfolio
