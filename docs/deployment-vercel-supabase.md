# Vercel + Supabase Deploy

## 권장 구성

- Frontend/API: Vercel
- Auth: Supabase Auth
- Database: Supabase Postgres
- Storage: 추후 Supabase Storage 또는 Google Cloud Storage

## 현재 앱의 배포 특성

- 로그인은 Supabase Auth를 사용합니다.
- 프로젝트 본문 데이터는 현재 브라우저 `localStorage`에 저장됩니다.
- 추천 생성은 서버 환경변수 `ANTHROPIC_API_KEY`가 있으면 Claude를 사용합니다.
- 해당 키가 없으면 기본 추천 엔진으로 fallback 됩니다.

즉, 초기 배포는 비교적 가볍게 가능하지만, 다중 사용자 협업 저장소까지 포함된 구조는 아직 아닙니다.

## Vercel 환경 변수

필수:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` 또는 `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

선택:

- `ANTHROPIC_API_KEY`
- `NEXT_PUBLIC_ADMIN_EMAIL`

예약 필드:

- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_PROJECT_ID`
- `ENCRYPTION_SECRET`
- `NANOBANANA_API_KEY`
- `GOOGLE_CLOUD_PROJECT_ID`
- `GOOGLE_CLOUD_LOCATION`
- `GOOGLE_APPLICATION_CREDENTIALS_JSON`
- `OPENAI_API_KEY`

## Supabase 설정 순서

1. Supabase 프로젝트 생성
2. Auth 이메일 로그인 활성화
3. Site URL과 Redirect URL에 Vercel 도메인 등록
4. 필요하면 `supabase/schema.sql`을 참고해 후속 저장 구조를 준비

## Vercel 설정 순서

1. GitHub 저장소 import
2. Framework Preset은 `Next.js`
3. Root Directory는 프로젝트 루트
4. 환경 변수 입력
5. 첫 배포 실행

## 운영 메모

- `ANTHROPIC_API_KEY` 없이도 데모는 동작합니다.
- 실제 이미지/영상 생성 워커는 아직 포함되지 않았습니다.
- 향후에는 프로젝트 데이터도 Supabase DB로 옮기는 것이 좋습니다.
