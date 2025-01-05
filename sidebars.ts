import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "서문",
      link: {
        type: "doc",
        id: "preface/overview",
      },
      items: [
        {
          type: "doc",
          id: "preface/what-is-postgresql",
          label: "PostgreSQL이란?",
        },
        {
          type: "doc",
          id: "preface/a-breif-history-of-postgresql",
          label: "PostgreSQL의 간략한 역사",
        },
        {
          type: "doc",
          id: "preface/conventions",
          label: "표기법",
        },
        {
          type: "doc",
          id: "preface/further-information",
          label: "추가 정보",
        },
        {
          type: "doc",
          id: "preface/bug-reporting-guidelines",
          label: "버그 신고 지침",
        },
      ],
    },
    {
      type: "category",
      label: "튜토리얼",
      link: {
        type: "doc",
        id: "tutorial/overview",
      },
      items: [
        {
          type: "doc",
          id: "tutorial/getting-started",
          label: "시작하기",
        },
        {
          type: "doc",
          id: "tutorial/sql-language",
          label: "SQL 언어",
        },
        {
          type: "doc",
          id: "tutorial/advanced-features",
          label: "고급 기능",
        },
      ],
    },
    {
      type: "category",
      label: "SQL 언어",
      link: {
        type: "doc",
        id: "sql-language/overview",
      },
      items: [
        {
          type: "doc",
          id: "sql-language/sql-syntax",
          label: "SQL 문법",
        },
        {
          type: "doc",
          id: "sql-language/data-definition",
          label: "데이터 정의",
        },
        {
          type: "doc",
          id: "sql-language/data-manipulation",
          label: "데이터 조작",
        },
        {
          type: "doc",
          id: "sql-language/queries",
          label: "쿼리",
        },
        {
          type: "doc",
          id: "sql-language/data-types",
          label: "데이터 타입",
        },
        {
          type: "doc",
          id: "sql-language/functions-and-operators",
          label: "함수와 연산자",
        },
        {
          type: "doc",
          id: "sql-language/type-conversion",
          label: "타입 변환",
        },
        {
          type: "doc",
          id: "sql-language/indexes",
          label: "인덱스",
        },
        {
          type: "doc",
          id: "sql-language/full-text-search",
          label: "전체 텍스트 검색",
        },
        {
          type: "doc",
          id: "sql-language/concurrency-control",
          label: "동시성 제어",
        },
        {
          type: "doc",
          id: "sql-language/performance-tips",
          label: "성능 팁",
        },
        {
          type: "doc",
          id: "sql-language/parallel-query",
          label: "병렬 쿼리",
        },
      ],
    },
    
  ],
};

export default sidebars;
