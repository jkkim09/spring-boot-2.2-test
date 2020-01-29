# FROM tomcat:8.0.51-jre8-alpine
# RUN rm -rf /usr/local/tomcat/webapps/*
# COPY ./target/spring-boot-2.2-test-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war
# CMD ["catalina.sh","run"]

FROM openjdk:8-jdk-alpine
VOLUME /tmp
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]