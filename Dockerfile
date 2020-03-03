FROM openjdk:11-jdk

COPY flights-service/target/*.jar /server
COPY entrypoint.sh /

RUN apt-get update && \
    apt-get clean && \
    mkdir /server && \
    chmod +x /entrypoint.sh

EXPOSE 8080
EXPOSE 5000

ENTRYPOINT ["/entrypoint.sh"]
CMD ["default"]