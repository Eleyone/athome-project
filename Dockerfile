FROM ubuntu:latest
MAINTAINER Arnaud 'Eleyone' Grousset <grousset.a@gmail.com>

# MaJ depot APT-GET
RUN apt-get update -y

# Install common lib
RUN apt-get install -y build-essential

# MongoDB
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
RUN echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.0.list
RUN apt-get update -y && apt-get install -y mongodb-org

# NodeJS
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get update -y && apt-get install -y nodejs

EXPOSE 27017
EXPOSE 3000

ENTRYPOINT ["/usr/bin/mongodb"]

