FROM openjdk:11-jdk

COPY target/*.jar /server/
COPY entrypoint.sh /

RUN apt-get update && \
    apt-get clean && \
    chmod +x /entrypoint.sh

EXPOSE 8080

ENTRYPOINT ["/entrypoint.sh"]
CMD ["default"]