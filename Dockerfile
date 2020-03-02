FROM openjdk:11-jdk

RUN apt-get update && \
    apt-get clean && \
    curl -sL https://deb.nodesource.com/setup_13.x | bash && \
    apt-get install nodejs && \
    mkdir /server && \
    mkdir /app

COPY flights-service/target/*.jar /server
COPY flights-app/build /app/build
COPY entrypoint.sh /

RUN ["chmod", "+x", "/entrypoint.sh"]
RUN ["npm", "install", "-g", "serve"]

EXPOSE 8080
EXPOSE 5000

ENTRYPOINT ["/entrypoint.sh"]
CMD ["default"]