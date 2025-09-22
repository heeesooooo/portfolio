# One-Page Portfolio

반응형 원페이지 포트폴리오 템플릿입니다. React + Vite 기반으로 제작되었고, Tailwind CSS v4 스타일 토큰과 shadcn/ui 패턴을 응용한 재사용 가능한 UI 컴포넌트를 포함합니다.

## 주요 기능

- 반응형 레이아웃과 스무스 스크롤 내비게이션(Header → 섹션 이동)
- 다크 모드 토글(LocalStorage + prefers-color-scheme)
- 프로젝트 카드(기술 스택 배지, 데모/GitHub 링크)
- 경력/학력 타임라인, 스킬 진행도 바
- 간단한 문의 폼(프론트엔드 제출 데모: console + alert)
- 이미지 로드 실패 대비 `ImageWithFallback` 제공

## 기술 스택

- 빌드: Vite 6 (React SWC 플러그인)
- 프론트엔드: React 18, TypeScript
- 스타일: Tailwind CSS v4 스타일 레이어 + 커스텀 토큰(`src/styles/globals.css`)
- 아이콘: `lucide-react`
- UI 유틸: class-variance-authority(cva), Radix UI 기반 컴포넌트 패턴
- 기타: Embla Carousel, Recharts, Sonner 등 선택적 의존성 포함(프로젝트 확장 대비)

## 빠른 시작

사전 요구 사항: Node.js 18 이상 권장(macOS zsh 환경 기준)

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (기본 포트: 3000, 자동 브라우저 오픈)
npm run dev
```

빌드 산출물은 `vite.config.ts` 설정에 따라 `build/` 폴더에 출력됩니다.

```bash
# 프로덕션 빌드
npm run build
```

## 스크립트

- `npm run dev`: 개발 서버 실행(Vite)
- `npm run build`: 프로덕션 빌드(outDir: `build/`)

## 폴더 구조(요약)

```
index.html
package.json
vite.config.ts
src/
  App.tsx               # 메인 페이지 구성(섹션/데이터)
  main.tsx              # React 진입점
  index.css             # Tailwind v4 빌드 아웃풋(레이어 포함)
  styles/
    globals.css         # 테마 토큰/다크 모드/유틸리티 확장
  components/
    Header.tsx          # 상단 고정 헤더 + 섹션 스크롤
    DarkModeToggle.tsx  # 다크 모드 토글(localStorage 연동)
    ProjectCard.tsx     # 프로젝트 카드 컴포넌트
    ExperienceItem.tsx  # 경력 아이템(사용 시)
    PhotoGrid.tsx       # 사진 그리드(사용 시)
    ContactForm.tsx     # 문의 폼(프론트엔드 데모 제출)
    figma/
      ImageWithFallback.tsx # 이미지 로드 실패 대체 처리
    ui/                 # shadcn 스타일의 재사용 컴포넌트 집합
  guidelines/
    Guidelines.md       # 생성 가이드(임의 규칙 정의용)
```

## 커스터마이징 가이드

1. 기본 정보/문구 수정

- 메인 히어로/프로젝트/경력/스킬/문의 섹션 데이터는 `src/App.tsx` 상단의 배열/객체에서 수정합니다.
- 헤더 로고 텍스트, 메뉴 항목은 `src/components/Header.tsx`에서 변경합니다.
- 이력서 다운로드 링크(`/resume.pdf`)는 `App.tsx` 히어로 섹션의 앵커를 교체하세요.

2. 색상/테마

- 라이트/다크 테마 토큰은 `src/styles/globals.css`에서 CSS 변수로 관리합니다.
  - Light: `:root { --background, --foreground, --primary ... }`
  - Dark: `.dark { --background, --foreground, --primary ... }`
- 유틸리티 확장(`@layer utilities`)에 `.skill-bar`, `.skill-progress`, `.main-text` 등 커스텀 클래스가 정의되어 있습니다.

3. Tailwind 유틸리티

- 프로젝트는 Tailwind v4 스타일 레이어가 `src/index.css`에 포함되어 있습니다.
- 전역 타이포그래피 기본값은 `globals.css`의 `@layer base`에서 설정됩니다.

4. 이미지/아이콘

- 프로젝트와 포토 그리드의 이미지 URL은 `App.tsx` 및 각 컴포넌트 props에서 교체하세요.
- 아이콘은 `lucide-react`를 사용합니다. 필요한 아이콘을 개별 import 하세요.

5. 문의 폼 연동

- 현재 `ContactForm.tsx`는 제출 시 콘솔 로그 + alert 표시만 합니다.
- 실제 백엔드/폼 서비스로 연결하려면 `handleSubmit`에서 API 요청을 추가하세요.

## 배포

1. 정적 호스팅(예: Netlify, Vercel)

- `npm run build` 후 생성되는 `build/` 폴더를 배포합니다.
- Single Page App 라우팅을 사용할 경우, 호스팅 제공자 설정에서 SPA fallback을 활성화하세요.

2. GitHub Pages

- 빌드 산출물(`build/`)을 `gh-pages` 브랜치로 푸시하도록 워크플로를 구성하거나, 수동 업로드하세요.

## 접근성/성능 노트

- 키보드 포커스 링(`focus-visible`)과 대비를 고려한 버튼/링 스타일이 적용되어 있습니다.
- 다크 모드는 시스템 선호도(`prefers-color-scheme`)를 우선하며, 토글 시 LocalStorage에 저장됩니다.
- 이미지 실패 대비 `ImageWithFallback`으로 빈칸 대신 대체 그래픽을 표시합니다.

## 크레딧(Attributions)

- 일부 컴포넌트 패턴은 [shadcn/ui](https://ui.shadcn.com/)를 참고했으며 MIT 라이선스 하에 사용 가능합니다.
- 예시 이미지 출처: [Unsplash](https://unsplash.com) 라이선스 범위 내 사용.
- 자세한 출처 표기: `src/Attributions.md` 참고.

## 라이선스

본 저장소에는 별도의 라이선스 파일이 포함되어 있지 않습니다. 외부 리소스(shadcn/ui, Unsplash)는 각 라이선스를 반드시 준수하세요. 이 프로젝트를 공개 배포/포크할 계획이라면 프로젝트 루트에 라이선스 파일을 추가하는 것을 권장합니다.

## 트러블슈팅

- 포트 충돌: `vite.config.ts`의 `server.port`(기본 3000)를 변경하세요.
- 빌드 경로: 기본 `build/`로 설정되어 있습니다. 호스팅 설정 시 이 폴더를 사용하세요.
- 스타일이 반영되지 않는 경우: 브라우저 캐시 삭제 후 재시도하거나, `index.css`/`globals.css` 변경 사항을 확인하세요.
