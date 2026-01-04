# 강승준 포트폴리오

Backend Engineer의 개인 웹 포트폴리오입니다.

## 프로젝트 개요

이 포트폴리오는 완전 정적 웹사이트로, 서버 없이 Cloudflare Pages에서 호스팅됩니다.
PDF 이력서와 차별화하여 프로젝트의 문제 해결 과정과 성과를 설득력 있게 전달하는 것을 목표로 합니다.

## 기술 스택

- **빌드 도구**: Vite
- **프레임워크**: React 18
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **라우팅**: React Router DOM
- **호스팅**: Cloudflare Pages (예정)

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

http://localhost:5173 에서 확인할 수 있습니다.

### 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 디렉토리에 생성됩니다.

### 프리뷰

```bash
npm run preview
```

## 프로젝트 구조

```
src/
├── components/     # 재사용 가능한 컴포넌트
│   └── Layout.tsx
├── pages/          # 페이지 컴포넌트
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── ProjectDetail.tsx
│   └── Contact.tsx
├── data/           # 정적 데이터 파일
│   ├── personalInfo.ts
│   ├── skills.ts
│   ├── education.ts
│   └── projects.ts
├── types/          # TypeScript 타입 정의
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 페이지 구조

- **Home**: 한 줄 소개, 핵심 스택, 대표 프로젝트 요약
- **Projects**: 프로젝트 목록
- **Project Detail**: 프로젝트 상세 (Context, Problem, My Role, Decision & Architecture, Challenges, Results, Retrospective)
- **Contact**: 연락처 정보

## 설계 원칙

- PDF 이력서와 중복되지 않도록 설계
- 프로젝트의 "사고 과정, 판단 이유, 결과"를 보여주는 공간
- 소수의 프로젝트를 깊이 있게 다룸
- 가독성과 구조를 우선
- 모든 데이터는 파일 기반으로 관리

## 라이선스

© 2025 강승준. All rights reserved.
