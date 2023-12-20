.phony: build

start:
	- docker compose up $(ARGS)

start-frontend:
	- make start ARGS=frontend

test-frontend:
	- docker compose run --rm frontend npm run test:frontend $(ARGS)

stop:
	- docker compose down

install-dependencies-local:
	- npm install ./frontend/ --prefix ./frontend/