#!/usr/bin/env bash
set -uo pipefail
cd /home/aman/nomad
LOG=/home/aman/nomad/agent-cron.log
echo "===== $(date '+%F %T') run start =====" >> "$LOG"
timeout 600 opencode run --auto "$(cat /home/aman/nomad/scripts/scheduled-agent-prompt.md)" >> "$LOG" 2>&1
code=$?
echo "----- exit code: $code -----" >> "$LOG"
exit 0
