#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
run_user="${SUDO_USER:-$(id -un)}"
node_bin="$(command -v node)"

if [[ -z "$node_bin" ]]; then
  echo "Node is not on PATH. Install Node 20 LTS, then run this again." >&2
  exit 1
fi

if [[ ! -f /etc/portfolio.env ]]; then
  echo "OPENAI_API_KEY=" | sudo tee /etc/portfolio.env >/dev/null
  sudo chmod 600 /etc/portfolio.env
  echo "Created /etc/portfolio.env. Put the OpenAI key in it before starting the service."
fi

unit="$(sed \
  -e "s|__RUN_USER__|${run_user}|g" \
  -e "s|__APP_ROOT__|${root}|g" \
  -e "s|__NODE__|${node_bin}|g" \
  "$root/deploy/portfolio.service")"
echo "$unit" | sudo tee /etc/systemd/system/portfolio.service >/dev/null

sudo cp "$root/deploy/nginx-portfolio.conf" /etc/nginx/sites-available/portfolio
sudo ln -sfn /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio

sudo nginx -t
sudo systemctl daemon-reload
sudo systemctl enable portfolio
sudo systemctl reload nginx

echo "Installed. Add OPENAI_API_KEY to /etc/portfolio.env, then run: bash deploy/deploy.sh"
