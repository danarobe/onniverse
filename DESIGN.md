---
name: Onniverse
description: 온라인 셀러의 성장 궤도를 설계하는 컨설팅 브랜드 사이트 — 애플의 절제 위에 궤도 블루 한 점.
colors:
  orbit-blue: "#0071e3"
  orbit-blue-hover: "#0077ed"
  orbit-blue-bright: "#2997ff"
  ink: "#1d1d1f"
  ink-secondary: "#6e6e73"
  paper: "#ffffff"
  fog: "#f5f5f7"
  space-black: "#000000"
  space-black-lifted: "#111112"
  moonlight: "#a1a1a6"
  hairline: "#d2d2d7"
  hairline-dark: "#333336"
  status-good: "#1c8a44"
  status-warn: "#b9740a"
  status-bad: "#c62828"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro KR', 'Apple SD Gothic Neo', Pretendard, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.375rem, 6vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.07
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro KR', 'Apple SD Gothic Neo', Pretendard, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.875rem, 4.5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro KR', 'Apple SD Gothic Neo', Pretendard, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro KR', 'Apple SD Gothic Neo', Pretendard, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro KR', 'Apple SD Gothic Neo', Pretendard, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.06em"
rounded:
  sm: "8px"
  field: "10px"
  md: "14px"
  lg: "22px"
  pill: "980px"
spacing:
  gap: "20px"
  gap-lg: "24px"
  card-pad: "40px 32px"
  section-tight: "80px"
  section: "110px"
components:
  button-primary:
    backgroundColor: "{colors.orbit-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  button-primary-hover:
    backgroundColor: "{colors.orbit-blue-hover}"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  card:
    backgroundColor: "{colors.fog}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-pad}"
  card-dark:
    backgroundColor: "{colors.space-black-lifted}"
    textColor: "{colors.fog}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-pad}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "13px 16px"
---

# Design System: Onniverse

## 1. Overview

**Creative North Star: "조용한 관제센터 (The Quiet Mission Control)"**

모든 수치를 알고 있지만 목소리를 높이지 않는 공간. 온니버스의 화면은 셀러의 궤도를 지켜보는 관제센터처럼, 넓은 여백 속에 정확한 데이터 하나를 띄운다. 설득은 장식이 아니라 숫자와 침묵의 배치에서 나온다. PRODUCT.md의 언어로 말하면 — "매출은 우연이 아니라 설계다"라는 문장을 디자인 자체가 먼저 증명해야 한다.

이 시스템은 저가 대행사 이벤트 페이지의 소란(형광 배지, 빽빽한 정보, 팝업)과 딱딱한 기업 홈페이지의 무표정을 똑같이 거부한다. 밝은 종이 위 검은 잉크가 기본이고, 검은 우주(다크 섹션)가 리듬을 만들며, 궤도 블루는 행동이 일어나는 지점에만 켜지는 관제등이다.

**Key Characteristics:**
- 한 화면, 하나의 메시지 — 섹션마다 헤드라인 한 문장과 행동 하나
- 밝음(paper/fog)과 어둠(space-black)의 교차가 만드는 수직 리듬
- 궤도 블루는 희소하게 — 버튼, 링크, 핵심 수치에만
- 표면은 평평하게, 문서(리포트·진단)만 떠오르게
- 시스템 폰트의 큰 타이포와 음수 자간이 만드는 밀도

## 2. Colors

애플의 무채색 위에 궤도 블루 한 점 — 팔레트가 아니라 절제가 정체성이다.

### Primary
- **궤도 블루** (#0071e3): 모든 행동의 색. 주 버튼, 링크, 아이콘 배경, 진단 점수 링, 아이브로우 라벨. 화면에서 이 색을 본다면 그곳이 눌러야 할 곳이다. 호버 시 **궤도 블루 호버** (#0077ed)로 미세하게 밝아진다.
- **밝은 궤도 블루** (#2997ff): 다크 섹션 전용 변형. 검은 배경 위에서 #0071e3은 가라앉으므로, 어두운 우주에서는 이 밝은 변형이 수치를 비춘다.

### Neutral
- **잉크** (#1d1d1f): 기본 본문·헤드라인. 순수한 검정(#000)보다 아주 살짝 부드럽다.
- **보조 잉크** (#6e6e73): 서브카피, 설명문, 라벨. 위계의 두 번째 층.
- **종이** (#ffffff): 기본 배경.
- **안개** (#f5f5f7): 카드와 회색 섹션의 표면. 다크 섹션에서는 본문 텍스트 색으로 반전 사용된다.
- **우주 검정** (#000000): 다크 섹션의 배경. 문제 제기, 프리미엄(1% 트랙), CTA 배너처럼 무게가 필요한 순간.
- **떠 있는 우주** (#111112): 우주 검정 위의 카드 표면.
- **달빛** (#a1a1a6): 다크 섹션의 보조 텍스트.
- **헤어라인** (#d2d2d7) / **다크 헤어라인** (#333336): 1px 구분선과 테두리.

### Status (진단 배지 전용)
- **양호** (#1c8a44), **주의** (#b9740a), **위험** (#c62828): 진단 리포트의 항목 등급에만 쓴다. 연한 틴트 배경(#e6f7ec / #fff4e0 / #fde8e8) 위 진한 글자.

### Named Rules
**궤도 블루 희소성 규칙.** 궤도 블루는 어떤 화면에서도 면적의 10%를 넘지 않는다. 파란 것은 곧 눌러야 할 것 — 이 등식이 깨지는 순간 색은 신호가 아니라 장식이 된다.

## 3. Typography

**Display Font:** 시스템 산세리프 스택 — SF Pro / Apple SD Gothic Neo / Pretendard (환경별 자동)
**Body Font:** 동일 스택 (단일 서체 시스템)

**Character:** 서체를 사지 않고도 프리미엄을 만드는 애플의 방식. 크기·굵기·자간의 대비만으로 위계를 세운다. 한글 본문은 절대 자간을 넓히지 않는다.

### Hierarchy
- **Display** (700, clamp(38px→68px), lh 1.07, ls -0.02em): 히어로 헤드라인 전용. 두 줄을 넘기지 않는다.
- **Headline** (700, clamp(30px→48px), lh 1.1, ls -0.02em): 섹션 제목. 마침표로 끝나는 단정한 문장.
- **Title** (600, 22px, ls -0.01em): 카드 제목.
- **Body** (400, 15px, lh 1.6): 본문. 리드 문단은 17–19px까지 커진다. 한 줄이 길어지면 문장을 자를 것.
- **Label** (600, 14px, ls +0.06em, UPPERCASE): 아이브로우(눈썹 라벨) 전용. 영문 대문자 + 궤도 블루.

### Named Rules
**한 문장 헤드라인 규칙.** Display와 Headline은 언제나 완결된 한 문장이다. 명사 나열, 느낌표, 물음표 남용 금지 — 단정한 마침표가 자신감이다.

## 4. Elevation

이 시스템은 평평함이 기본이다. 카드는 그림자 없이 배경색(안개 #f5f5f7)의 차이만으로 구분되고, 깊이는 밝은 섹션과 검은 섹션의 교차라는 '수직 리듬'으로 표현된다. 그림자는 오직 **떠 있어야 할 문서**에만 허락된다.

### Shadow Vocabulary
- **떠 있는 문서** (`box-shadow: 0 20px 60px rgba(0,0,0,0.08~0.12)`): 진단 리포트 목업, 퀴즈 박스처럼 "실제 산출물"을 상징하는 요소. 페이지 위에 서류가 놓인 느낌.
- **드롭다운** (`box-shadow: 0 12px 28px rgba(0,0,0,0.12)`): 내비게이션 드롭다운 등 일시적 오버레이.
- **글래스 내비게이션** (`backdrop-filter: saturate(180%) blur(20px)`): 그림자 대신 블러로 떠 있음을 표현하는 유일한 상시 요소.

### Named Rules
**문서만 떠오른다 규칙.** 일반 카드·버튼·섹션은 평평하다. 그림자가 보인다면 그것은 리포트·진단·드롭다운 — 즉 '건네받는 것'이어야 한다. 호버로 그림자를 키우는 장식은 금지.

## 5. Components

모든 컴포넌트의 성격은 한 마디로 "정제되고 절제된". 조용하지만 정확하다.

### Buttons
- **Shape:** 완전한 알약형 (border-radius 980px)
- **Primary:** 궤도 블루 배경 + 흰 글자, padding 12px 22px (강조형은 14px 30px, 18px 글자)
- **Hover / Focus:** 배경만 #0077ed로 미세하게 밝아진다. 이동·확대·그림자 없음
- **Ghost:** 투명 배경 + 1px 헤어라인 테두리, 호버 시 테두리가 잉크색으로. 보조 행동(오픈채팅 입장) 전용
- **Text link:** 궤도 블루 텍스트 + "›" 화살표, 호버 시 밑줄

### Chips (레퍼런스 필터)
- **Style:** 알약형, 1px 헤어라인 테두리, 투명 배경, 14px
- **State:** 활성·호버 시 잉크색(#1d1d1f) 채움 + 흰 글자로 반전

### Cards / Containers
- **Corner Style:** 크게 둥근 22px (내부 요소는 14px, 12px로 단계 축소)
- **Background:** 밝은 면은 안개(#f5f5f7), 다크 섹션에서는 떠 있는 우주(#111112), 프리미엄(1% 트랙)은 우주 검정(#000)
- **Shadow Strategy:** 없음 — 4. Elevation의 문서만 떠오른다 규칙
- **Border:** 없음 (배경색 차이로만 구분)
- **Internal Padding:** 40px 32px
- **아이콘:** 52px 정사각, 14px 라운드, 궤도 블루 배경 + 이모지/글리프

### Inputs / Fields
- **Style:** 흰 배경, 1px 헤어라인 테두리, 10px 라운드, padding 13px 16px
- **Focus:** 테두리가 궤도 블루로 전환. 글로우·그림자 없음
- **Label:** 14px 600, 필수 항목은 * 표기

### Navigation
- **Style:** 52px 고정 헤더, 반투명 흰 배경 + 글래스 블러, 하단 1px 헤어라인
- **Typography:** 메뉴 12px — 애플처럼 의도적으로 작게
- **States:** 기본 85% 불투명도, 호버 시 100%. "솔루션"은 호버 드롭다운
- **Mobile (≤834px):** 햄버거 → 풀폭 슬라이드다운, 17px 링크

### 진단 리포트 목업 (Signature Component)
온니버스의 서명 같은 컴포넌트. 흰 종이(#fff) + 22px 라운드 + 떠 있는 문서 그림자 + 종합 점수(궤도 블루 40px) + 항목별 상태 배지. "실제로 이런 걸 받게 된다"는 증거물이므로, 실물 서류처럼 보이는 디테일(헤어라인 행 구분, 작은 메타 텍스트)을 유지할 것.

## 6. Do's and Don'ts

### Do:
- **Do** 궤도 블루(#0071e3)를 행동 지점에만 사용하고, 화면당 면적 10% 이하로 유지한다.
- **Do** 섹션마다 헤드라인 한 문장 + CTA 하나의 구조를 지킨다. 정보가 넘치면 섹션을 쪼갠다.
- **Do** 다크 섹션(#000)을 문제 제기·프리미엄·마무리 CTA 같은 무게 있는 순간에만 배치해 밝음-어둠 리듬을 만든다.
- **Do** 수치를 보여줄 때는 큰 숫자(궤도 블루, 32–48px) + 작은 회색 라벨 구조를 쓴다.
- **Do** 그림자는 진단 리포트·퀴즈처럼 '건네받는 문서'에만 허락한다.

### Don't:
- **Don't** "저가 대행사 이벤트 페이지"처럼 보이게 하지 않는다 — 형광색 할인 배지, 카운트다운 타이머, 팝업, 빽빽한 정보 밀도는 전면 금지.
- **Don't** "딱딱한 기업 홈페이지"처럼 보이게 하지 않는다 — 회색 관공서 톤, 무표정한 스톡 이미지, 명조체 공문 느낌 금지.
- **Don't** 그라디언트, 네온, 글래스모피즘 카드, 호버 시 떠오르는 그림자를 쓰지 않는다. 유일한 블러는 내비게이션뿐이다.
- **Don't** 궤도 블루 외의 색으로 버튼을 만들지 않는다. 상태색(양호/주의/위험)은 진단 배지 밖으로 나오지 않는다.
- **Don't** 검증할 수 없는 수치를 화면에 올리지 않는다 — PRODUCT.md의 원칙: "증명할 수 없는 숫자는 싣지 않는다."
- **Don't** 한글 헤드라인에 양수 자간을 주지 않는다. 자간은 항상 0 또는 음수.
