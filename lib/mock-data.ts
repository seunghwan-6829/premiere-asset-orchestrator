export const sampleSrt = `1
00:00:02,000 --> 00:00:05,200
이 기능을 넣으면 편집 시간이 크게 줄어듭니다.

2
00:00:05,800 --> 00:00:09,000
예시 화면은 일러스트 스타일로 보여주는 게 좋습니다.

3
00:00:09,300 --> 00:00:13,000
실제 결과는 짧은 모션 클립으로 보여주는 게 더 강합니다.`;

export const mockApiKeyFields = [
  {
    id: "anthropic",
    label: "Claude API",
    placeholder: "Anthropic API Key",
    help: "서버 환경변수가 없을 때만 현재 브라우저 세션에서 임시로 사용합니다."
  },
  {
    id: "google",
    label: "Google Vertex AI / Veo 3.1",
    placeholder: "Vertex AI service account 또는 API key",
    help: "향후 영상 생성 워커 연동용 예약 필드입니다."
  },
  {
    id: "nanobanana",
    label: "NanoBanana Pro",
    placeholder: "NanoBanana Pro API Key",
    help: "향후 이미지 생성 워커 연동용 예약 필드입니다."
  }
];
