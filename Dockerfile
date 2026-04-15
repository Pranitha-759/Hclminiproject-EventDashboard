From maven:3.8.4-openjdk-17-slim AS build

WORKDIR /app

COPY . .

RUN mvn clean package -DskipTests

EXPOSE 8082

CMD ["java" , "-jar" , "target/app.js"]
