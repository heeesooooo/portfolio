import { Github, Mail } from "lucide-react";
import { Header } from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";
import { ResumeCardItem } from "./components/ResumeCardItem";
import { Button } from "./components/ui/button";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ContactForm } from "./components/ContactForm";

// Types
interface Project {
  title: string;
  description: string;
  role: string;
  achievements: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

interface ResumeItem {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

// Data
const projects: Project[] = [
   {
    title: "dotdotdot (Memo Timetable)",
    description: "순간의 아이디어나 경험을 빠르게 기록하면 자동으로 시간대별로 정리되는 메모 앱입니다. 달력과 연동되어 날짜별 기록을 직관적으로 확인할 수 있습니다.",
    role: "Frontend Developer (React + TypeScript + Vite, IndexedDB)",
    achievements: "시간대별 메모 정리 UI 구현, 달력·타임테이블 연동, IndexedDB 기반 데이터 저장 및 오프라인 지원, 심플한 흑백 UX 디자인",
    technologies: ["React", "TypeScript", "Tailwind CSS","Vite", "IndexedDB"],
    image: "/dotdotdot.png",
    demoUrl: "https://dotdotdot-seven.vercel.app/",
    githubUrl: "https://github.com/heeesooooo/dotdotdot"
  },
  {
    title: "HowRU (Cycle Tracker)",
    description: "마지막 월경일과 주기 길이만 입력하면 월경·배란·황체·여포기를 자동 계산해 달력에 표시합니다. 오프라인에서도 기록이 유지되어, 컨디션 예측과 일정 계획을 더 똑똑하게 도와줍니다",
    role: "FE (React+TS+Vite, IndexedDB)",
    achievements: "사용자 입력 기반 주기 계산 로직 구현, 월경·배란·황체·여포기 자동 구간 분류, 달력 시각화",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "IndexedDB"],
    image: "/HowRU.png",
    demoUrl: "https://how-ru.vercel.app/",
    githubUrl: "https://github.com/heeesooooo/howRU"
  },
];

const experiences: ResumeItem[] = [
  {
    company: "주식회사 에이젠글로벌 (aiZEN Global)",
    role: "프론트엔드 개발 · 매니저",
    period: "2022.03 - 2024.11 (2년 9개월)",
    achievements: [
      "셀러크레딧커넥트 - 대출 중개 플랫폼 화면 구축 및 유지 보수",
      "React 기반 웹 서비스 및 어드민 대시보드 신규 구축",
      "SCSS 기반 반응형 UI 및 재사용 가능한 컴포넌트 설계",
      "Context API 기반 상태관리 구조 설계 및 렌더링 최적화",
      "어드민 승인/관리 기능 구축 및 운영 리소스 절감",
      "코드 리뷰 룰 정립, 폴더 구조 표준화로 온보딩 기간 단축",
      "기술 스택: React, JavaScript, Context API, SCSS, Styled Component, Tailwind CSS, REST API, Git",
    ],
  },
];

const educationList: ResumeItem[] = [
  {
    company: "위코드 부트캠프",
    role: "프론트엔드 부트캠프 수료",
    period: "2021.12 - 2022.03",
    achievements: ["JavaScript, HTML/CSS, React 기반 프론트엔드 교육 수료, 2개 팀 프로젝트 및 1개 실무 인턴십 프로젝트 참여"],
  },
  {
    company: "숙명여자대학교",
    role: "경영학부 경영학전공",
    period: "2014.03 - 2020.02",
    achievements: [],
  },
];

// App
export default function App() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  // Skills data
  const skillCategories: { title: string; items: string[] }[] = [
    {
      title: "Front-End",
      items: ["html", "CSS", "React", "TypeScript", "JavaScript (ES6+)", "React Router", "Vite","CSS",
        "SCSS(Sass)",
        "styled-components (CSS-in-JS)",
        "Tailwind CSS",
        "CSS Modules",
        "Figma",
        "RESTful APIs", "PWA (Manifest/Service Worker)", "IndexedDB","Git/GitHub", "JIRA", "Notion", "Vercel"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Header />

      {/* Hero */}
      <section id="main" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">
                Frontend Developer
              </p>
              <h1 className="main-text mb-6">K I M J I Y O O N</h1>
              <p className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-muted-foreground leading-relaxed mb-8">
                비즈니스 이해와 UX 감각으로 작동하는 인터페이스를 만듭니다. <br/>사용자 중심 경험과 성능 최적화에 집중합니다.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-sm uppercase tracking-wider"
                >
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-border hover:bg-accent px-8 py-3 text-sm uppercase tracking-wider"
                >
                  Contact
                </Button>
              </div>
            </div>
            <section className="py-20">
            <div className="my-20 hidden md:flex md:justify-end">
              <div className="my-20  w-80 h-80 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="/profile.png"
                  alt="김지윤 프로필 사진"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            </section>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">
              Featured Work
            </p>
            <h2 className="mb-8">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="experience" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Resume</p>
            <h2 className="mb-8">Experience & Education</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experience */}
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <ResumeCardItem
                  key={idx}
                  company={exp.company}
                  role={exp.role}
                  period={exp.period}
                  achievements={exp.achievements}
                />
              ))}
            </div>
            {/* Education */}
            <div className="space-y-6">
              {educationList.map((edu, idx) => (
                <ResumeCardItem
                  key={idx}
                  company={edu.company}
                  role={edu.role}
                  period={edu.period}
                  achievements={edu.achievements}
                  className={idx === 1 ? "mt-6" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div>
            <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Skills</p>
            <h2 className="mb-8">Skills and Language</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="dark-card p-6">
                <h4 className="font-medium mb-4">{cat.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-1 rounded border border-black/10 dark:border-white/10 text-foreground/80 bg-black/5 dark:bg-white/5"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
              ))}
               <div className="dark-card p-6">
              <h4 className="font-medium mb-2">Language</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">JLPT N3</p>
                  <p>2025.08.12</p>
                </div>
              </div>
            </div>
           
       
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Get In Touch</p>
              <h2 className="mb-8">
                Need help with professional
                <br />
                support? Let's work together!
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                새로운 기회나 협업에 대해 이야기하고 싶다면 언제든 연락주세요. 함께 멋진 프로젝트를 만들어가요!
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <a
                    href="mailto:heeesooooo@gmail.com"
                    className="hover:text-foreground/80 transition-colors"
                  >
                    heeesooooo@gmail.com
                  </a>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild className="border-border hover:bg-accent">
                    <a href="https://github.com/heeesooooo" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 K I M J I Y O O N.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}