# Architecture

## 현재 MVP 흐름

1. 사용자가 로그인
2. 프로젝트를 만들고 SRT를 업로드 또는 붙여넣기
3. 클라이언트가 SRT를 파싱해 자막 구간 목록 생성
4. 추천 API가 각 구간에 대한 보조 소재 추천 생성
   - Claude 사용 가능 시 AI 추천
   - 불가능하면 규칙 기반 fallback
5. 사용자가 추천 내용을 검수하고 수정
6. XML 또는 JSON 매니페스트로 export

## 현재 구성

### Frontend

- Next.js App Router
- 브라우저 기반 프로젝트 저장
- 검수 중심 단일 페이지 워크플로

### API

- `/api/health`
- `/api/recommendations`

### Auth

- Supabase Auth 이메일 로그인

### Storage

- 현재 프로젝트 데이터는 브라우저 `localStorage`
- 향후 생성 결과물은 외부 storage로 확장 예정

## 설계상 남은 과제

- 프로젝트와 추천 데이터를 DB로 이전
- 실제 이미지/영상 생성 워커 연결
- asset job 상태 추적
- export package와 storage path 관리
- Premiere UXP 플러그인 확장

## 목표 상태

- Frontend/API: Vercel
- Auth/DB: Supabase
- Worker: Cloud Run Jobs 또는 별도 worker
- File storage: Supabase Storage 또는 Google Cloud Storage
