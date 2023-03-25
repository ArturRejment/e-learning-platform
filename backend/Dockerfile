FROM python:3.10
ENV PYTHONUNBUFFERED=1

ENV WAIT_VERSION 2.8.0
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

WORKDIR /backend

RUN pip install poetry==1.2.*
