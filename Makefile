# Vibe-Trading: Your Personal Trading Agent Makefile

.PHONY: help setup dev serve chat test clean

# Default target
help: ## Show this help message
	@echo "Vibe-Trading: Your Personal Trading Agent Terminal Makefile"
	@echo "============================================================"
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

setup: ## Install python dependencies in editable mode and build the frontend bundle
	pip install -e ".[dev]"
	vibe-trading setup

dev: ## Start backend and frontend dev servers concurrently in one process
	vibe-trading dev

serve: ## Start the FastAPI server on port 8899 and serve the built static frontend
	vibe-trading serve --port 8899

chat: ## Launch the interactive terminal-based TUI chat terminal
	vibe-trading chat

test: ## Run the backend unit and integration test suite (excluding slow/live-e2e tests)
	python -m pytest --ignore=agent/tests/e2e_backtest --ignore=agent/tests/test_e2e_harness_v2.py --tb=short -q

clean: ## Remove temporary python artifacts, build folders, and frontend build outputs
	rm -rf build/ dist/ *.egg-info/ .pytest_cache/ .coverage
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	rm -rf frontend/dist/ frontend/tsconfig.tsbuildinfo
