FROM python:3.9-slim

ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /app

COPY requirements.txt .
COPY setup.py .

RUN pip install -r requirements.txt \
    && pip install -e ./

CMD ["python", "main.py"]
