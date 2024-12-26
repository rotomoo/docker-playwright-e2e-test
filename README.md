# docker-playwright-e2e-test

**Playwright**, **TypeScript**, **AllureReport**를 사용하여 E2E(End-to-End) 테스트를 자동화합니다.
</br>
프로젝트에 E2E 테스트를 도입해보세요.
---

## **사용법**

```bash
1. docker-compose up --build

2. visit localhost:8080
```

## **주요 명령어**

| 명령어                                  | 설명                   |
|--------------------------------------|----------------------|
| `yarn start`                         | 모든 과정 실행             |
| `yarn test`                          | 모든 테스트 실행            |
| `yarn playwright test <file>`        | 특정 테스트 파일 실행         |
| `yarn allure`                        | 테스트 메인 페이지 실행        |
| `yarn show-report`                   | 테스트 상세 페이지 실행        |
| `yarn test-ui`                       | 테스트 실행 페이지 실행        |
| `yarn playwright test --headed`      | 브라우저를 띄운 상태에서 테스트 실행 |
| `yarn playwright test --slow-mo=500` | 테스트 실행 속도를 느리게 설정    |
| `yarn playwright codegen`            | 테스트 코드 자동 생성 (화면 녹화) |

---

## **프로젝트 구조**

```plaintext
📂 e2e-test
│
├── 📂 config            # config 폴더
├── 📂 tests             # 테스트 폴더
│   └── demo-todo-app.spec.ts  # 테스트 예제 파일
```