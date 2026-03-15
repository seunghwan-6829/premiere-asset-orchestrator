# Premiere Integration

## 현재 구현

현재 앱은 Premiere에서 가져올 수 있는 마커 기반 XML과, 후속 자동화용 JSON 매니페스트를 export합니다.

- XML: 자막 구간별 추천 정보를 마커 comment에 기록
- JSON 매니페스트: 선택한 구간의 설명, 프롬프트, 비율, variants 수를 구조화해서 저장

이 단계만으로도 편집자가 Premiere에서 타임라인 기준으로 어떤 보조 소재를 넣을지 빠르게 확인할 수 있습니다.

## 아직 구현되지 않은 부분

- MOGRT 자동 삽입
- 실제 에셋 파일 자동 배치
- Premiere UXP 플러그인
- XML + assets ZIP 패키징

## 다음 단계 권장안

1. JSON 매니페스트를 기준으로 worker가 이미지/영상 파일 생성
2. 생성 결과를 storage에 업로드
3. XML 또는 별도 manifest에 실제 파일 경로 반영
4. 필요하면 Premiere UXP 플러그인으로 MOGRT 배치 자동화

## JSON 매니페스트 예시

```json
{
  "projectName": "episode-01",
  "exportedAt": "2026-03-15T07:00:00.000Z",
  "aspectRatio": "16:9",
  "variantsPerSegment": 2,
  "selectedCount": 1,
  "items": [
    {
      "segmentId": "001",
      "startTimecode": "00:00:02,000",
      "endTimecode": "00:00:05,200",
      "sourceText": "이 기능을 넣으면 편집 시간이 크게 줄어듭니다.",
      "kind": "video",
      "title": "편집 시간 절감 장면",
      "visualCue": "빠르게 정리되는 편집 화면",
      "prompt": "짧은 영상 장면. 편집 타임라인이 빠르게 정리되는 모습을 보여준다.",
      "reason": "변화가 느껴지는 문장은 짧은 영상이 더 자연스럽습니다."
    }
  ]
}
```

## 권장 운영 방식

- 1차: 현재 XML + JSON 매니페스트로 운영
- 2차: worker와 storage 추가
- 3차: Premiere UXP 플러그인 연동
