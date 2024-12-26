FROM node:20
WORKDIR /app

# java 설치
RUN apt-get update && \
    apt-get install -y --no-install-recommends default-jre-headless && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Node.js 의존성 설치
COPY package.json yarn.lock ./
RUN yarn install && \
    yarn playwright install && \
    yarn playwright install-deps && \
    yarn add --dev @playwright/test allure-playwright allure-js-commons && \
    yarn global add allure-commandline

# 환경 변수 설정
ENV JAVA_HOME="/usr/lib/jvm/default-java"
ENV PATH="$JAVA_HOME/bin:/root/.yarn/bin:/root/.config/yarn/global/node_modules/.bin:$PATH"

# 프로젝트 파일 복사
COPY . .