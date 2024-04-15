FROM python:3.10
WORKDIR /mech-index
COPY ./requirements.txt /mech-index/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /mech-index/requirements.txt
COPY ./ /mech-index
EXPOSE 8000
CMD ["uvicorn", "mech_app.api:app", "--host", "0.0.0.0", "--port", "80"]