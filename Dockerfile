FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY . .

EXPOSE 80

CMD ["uvicorn", "mech_app.api:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "80"]
