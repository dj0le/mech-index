# Mech Index

## description:

Mech Index is a FastAPI based app with Jinja templating for displaying various Battletech mechs

## Deploy locally:

Clone This repo, then:

- add a virtual environment

  ```
  python -m venv venv
  source venv/bin/activate
  ```

- install all from requirements.txt
  ```
  pip install -r requirements.txt
  ```
- start uvicorn:

  ```
  uvicorn mech_app.api:app --reload
  ```

- open [localhost](http://127.0.0.1:8000/)
