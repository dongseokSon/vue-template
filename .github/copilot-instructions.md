# CLAUDE.md - vue-test2

이 문서는 Claude가 `vue-test2` 프로젝트와 상호작용하는 데 필요한 컨텍스트와 가이드라인을 제공합니다.

## 1. 프로젝트 개요

이 프로젝트는 최신 도구를 사용하여 구축된 Vue.js 웹 애플리케이션입니다.

- **저장소 유형**: 단일 프로젝트
- **주요 프레임워크**: Vue 3

## 2. 핵심 기술 스택

### Vue 앱

- **프레임워크**: Vue 3.5
- **언어**: TypeScript 5.9
- **빌드 도구**: Vite 7
- **패키지 매니저**: pnpm
- **주요 라이브러리**:
  - `pinia`: 상태 관리
  - `vue-router`: 라우팅
  - `sass`: SCSS 스타일링
  - `unplugin-auto-import`: Vue API 자동 임포트
  - `vue-tsc`: Vue용 TypeScript 타입 검사

## 3. 전체 아키텍처

Composition API와 TypeScript를 사용하는 표준 Vue 3 싱글 페이지 애플리케이션입니다.

## 4. 주요 디렉토리 설명

### `vue-test2`

- `src/main.ts`: 앱의 메인 진입점.
- `src/App.vue`: 루트 Vue 컴포넌트.
- `src/assets/`: 정적 에셋 저장소.
  - `scss/`: SCSS 스타일 파일.
    - `_index.scss`: 디자인 시스템 배럴 파일. `vite.config.ts`에서 전역으로 import되어 모든 Vue 컴포넌트에서 별도 import 없이 사용 가능.
    - `abstracts/`: 디자인 토큰 및 유틸리티 (`_colors.scss`, `_sizes.scss`, `_typography.scss`, `_mixins.scss`).
    - `main.scss`: 전역 스타일.
- `src/components/`: Vue 컴포넌트 저장소.
  - `icons/`: 아이콘 컴포넌트.
- `src/views/`: 페이지 뷰 컴포넌트 (HomeView, AboutView 등).
- `src/router/`: Vue Router 설정 및 라우트 정의.
- `src/stores/`: Pinia 상태 관리 스토어.
- `public/`: 공개 정적 에셋 저장소.

## 5. 개발 환경 설정 및 실행

```bash
pnpm install && pnpm run dev
```

### 사용 가능한 스크립트

- `pnpm run dev`: 개발 서버 시작
- `pnpm run build`: 프로덕션 빌드 (타입 검사 포함)
- `pnpm run preview`: 빌드된 앱 미리보기
- `pnpm run type-check`: TypeScript 타입 검사
- `pnpm run lint`: ESLint 검사 및 자동 수정
- `pnpm run format`: Prettier 포맷팅

## 6. Claude 사용 가이드

Claude는 이 프로젝트에서 다음 작업을 수행할 수 있습니다:

- **기능 구현**: 새로운 기능 또는 컴포넌트 생성.
- **코드 분석**: 기존 코드 구조 분석 및 개선 제안.
- **리팩토링**: 기존 코드 개선 및 구조 최적화.
- **파일 정리 및 오타 수정**: 코드베이스 일관성 및 가독성 유지.
- **문서화**: 코드 이해도 향상을 위한 주석 및 문서 추가.
- **디버깅**: 코드베이스의 문제 식별 및 수정 지원.

## 7. 중요 제한 사항

- **.env 파일 수정 금지**: 프로젝트의 `.env` 파일을 절대 편집, 생성 또는 수정하지 마세요. 민감한 설정 데이터가 포함되어 있습니다.

## 8. AI 어시스턴트 가이드라인

- **필수**: 모든 응답은 반드시 한국어로 제공해야 합니다. 프로젝트 일관성을 위한 필수 요구사항입니다.
- `old_string` 관련 오류가 발생하면 사과하지 말고, 즉시 파일을 다시 읽고 재시도하세요.
- 사용자가 요청한 것보다 더 나은 솔루션이 있거나, 추가로 고려할 사항이 있다면 적용 전에 사용자에게 확인을 요청하세요.
- **파일 인코딩**: 파일을 생성하거나 수정할 때 항상 UTF-8 인코딩을 사용하세요. 한글 문자와 주석을 포함한 모든 텍스트 콘텐츠가 UTF-8로 올바르게 인코딩되어야 합니다.

### JSDoc 주석 스타일

TypeScript 인터페이스나 타입을 작성할 때 다음 JSDoc 주석 형식을 사용하세요:

```typescript
/**
 * 사용자 정보를 나타내는 인터페이스입니다.
 * @property {`string`} `id` - 사용자 고유 ID. Example: "1"
 * @property {`string`} `name` - 사용자 이름. Example: "홍길동"
 * @property {`string`} `email?` - 이메일 주소. Example: "user@example.com"
 * @property {`number`} `age` - 나이. Example: 25
 * @property {`boolean`} `isActive` - 활성화 여부. Example: true
 * @property {`string[]`} `roles` - 사용자 역할 목록. Example: ["admin", "user"]
 * @property {`UserProfile`} `profile?` - 사용자 프로필 정보.
 * @property {`Date`} `createdAt` - 생성 일시. Example: "2025-01-01T00:00:00Z"
 */
```

## 9. 문서 동기화

**중요**: 이 프로젝트는 동기화가 필요한 AI 어시스턴트 문서 파일들을 관리합니다:

- `.github/copilot-instructions.md` - GitHub Copilot 문서
- `CLAUDE.md` - Claude AI 문서 (존재하는 경우)

**이 파일들 중 하나를 업데이트할 때는 모든 파일을 동시에 업데이트해야** 다양한 AI 어시스턴트 간의 콘텐츠 일관성을 유지할 수 있습니다.
