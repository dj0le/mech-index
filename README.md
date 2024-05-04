# Mech Index

## description:

This is the backend only version of the Mech Index. Written in fastapi.

## Deploy locally:

Clone This repo:

- open [mech-index](https://github.com/dj0le/mech-index/)

Then:

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
