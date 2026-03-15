# Premiere Asset Orchestrator

SRT를 시작점으로 자막 구간을 정리하고, 구간별 보조 소재 추천을 만든 뒤, Premiere에서 가져갈 XML과 JSON 매니페스트를 내보내는 Next.js 기반 MVP입니다.

## 현재 포함된 기능

- SRT 업로드 및 직접 편집
- 자막 타임코드 파싱
- 추천 빈도 설정
- AI 추천 생성
  - `ANTHROPIC_API_KEY`가 있으면 서버에서 Claude 사용
  - 키가 없으면 내장 규칙 기반 추천 엔진으로 fallback
- 추천 검수 및 항목별 수정
- Premiere용 마커 기반 XML export
- 후속 워커 연동용 JSON 매니페스트 export

## 현재 범위에 없는 기능

- 실제 이미지 생성
- 실제 영상 생성
- 큐/워커 기반 장기 작업 처리
- Premiere UXP 플러그인 자동 삽입
- 팀 공유용 서버 저장소

현재 프로젝트 데이터는 브라우저 `localStorage`에 저장됩니다. 즉, 같은 계정으로 로그인해도 브라우저나 기기가 바뀌면 프로젝트가 자동 동기화되지는 않습니다.

## 실행

PowerShell 환경에서는 `npm.cmd`를 사용하는 편이 안전합니다.

```powershell
npm.cmd install
npm.cmd run dev
```

## 환경 변수

필수:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` 또는 `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

선택:

- `ANTHROPIC_API_KEY`
- `NEXT_PUBLIC_ADMIN_EMAIL`

예시는 `.env.example` 파일을 참고하세요.

## 주요 파일

- `app/page.tsx`: 메인 대시보드
- `app/api/recommendations/route.ts`: 추천 생성 API
- `lib/srt.ts`: SRT 파싱, 추천/내보내기 helper
- `components/DashboardApp.tsx`: 전체 워크플로 UI
- `docs/deployment-vercel-supabase.md`: Vercel 배포 메모
- `docs/premiere-integration.md`: Premiere 연동 방향
