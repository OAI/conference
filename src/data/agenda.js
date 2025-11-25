/**
 * Agenda Data
 *
 * Contains all conference agenda sections and items
 */

import { asset } from "../config.js";

export const agendaSections = [
  {
    id: "foundations",
    title: "Foundations",
    timeRange: "08:30 — 10:40",
    items: [
      {
        id: "breakfast",
        time: "08:30",
        category: "",
        title: "Executive Breakfast",
        badge: "Invite Only",
        speakers: [],
        icon: asset("/images/break-fest.svg"),
        disableHover: true,
      },
      {
        id: "1",
        time: "09:15",
        category: "Foundations",
        title: "Conference Welcome and OpenAPI in the Age of AI",
        description:
          "Welcome to the OpenAPI Conference! We have an exciting program to share, with presentations talking about new specifications as well as presentations that dive into practices, applications, and an outlook of things are going. We also we have a brief look of where OpenAPI is situated in the age of AI and MCP, and how things are going to develope after the recent publication of version 3.2 of the specification.",
        speakers: [
          {
            name: "Erik Wilde",
            job: "Head of Enterprise Strategy",
            company: "Jentic",
            avatar: asset("/images/speakers/Erik.jpg"),
            linkedin: "https://www.linkedin.com/in/erikwilde/",
          },
        ],
      },
      {
        id: "2",
        time: "09:45",
        category: "Foundations",
        title: "What's new in OpenAPI 3.2",
        description:
          "Keeping up with all the new standards all the time can be hard work! Instead, come to this session and get an overview of what's new in the OpenAPI 3.2 release so you know what to expect when it's time to upgrade. You'll hear about support for more HTTP methods, multipart formats, and for handling the full query string as one input. There's a big upgrade to tags, allowing nesting, multiple tag types, and more metadata - replacing the extensions you're probably already using with tags. Also included are document identities, security scheme additions, and upgraded support for XML-format APIs. Come along to learn more and prepare for the future!",
        speakers: [
          {
            name: "Lorna Mitchell",
            job: "API Architect",
            company: "TM Forum",
            avatar: asset("/images/speakers/Lorna.jpg"),
            linkedin: "https://www.linkedin.com/in/lornajane/",
            isTscMember: true,
          },
        ],
      },
      {
        id: "3",
        time: "10:15",
        category: "Foundations",
        title: "Data Contracts: Treating Data as APIs",
        description:
          "APIs brought order to software development through contracts, lifecycle management, and clear ownership. Yet in data, chaos often reigns: schema drift, silent breakages, and no shared language between producers and consumers. Enter the Open Data Contract Standard (ODCS), an open initiative under the Linux Foundation that applies API thinking to data. Think of OpenAPI, but for data: a contract-first approach that enables robust data pipelines, clearly defined interfaces, and enforceable guarantees across teams. This talk will show how ODCS enables API-like discipline in data sharing, supports contract-driven development for data products, and introduces schema validation and lifecycle management into data workflows. These capabilities lay the foundation for scalable data marketplaces within organizations, making data assets discoverable, reliable, and reusable. As an outlook, we'll explore the emerging Open Data Product Standard (ODPS), which builds on ODCS by grouping contracts into coherent, reusable building blocks. Together, ODCS and ODPS pave the way for a composable data architecture that aligns with data mesh and data-as-a-product principles.",
        speakers: [
          {
            name: "Dr. Simon Harrer",
            job: "Co-Founder and CEO",
            company: "Entropy Data",
            avatar: asset("/images/speakers/Simon.jpg"),
            linkedin: "https://www.linkedin.com/in/simonharrer/",
          },
        ],
      },
    ],
  },
  {
    id: "practices",
    title: "Practices",
    timeRange: "11:00 — 12:55",
    items: [
      {
        id: "4",
        time: "11:00",
        category: "Practices",
        title:
          "From Zero to Spec-Hero: Eliminating Lean Wastes When Adopting OpenAPI",
        description:
          "Many organisations recognise the value of the OpenAPI Specification yet struggle to make it part of their everyday API delivery. In this session you'll learn how to treat OpenAPI not as a checkbox, but as a Lean instrument for eliminating waste in API design, implementation and consumption. We'll unpack the six major barriers that keep teams from transitioning, map each barrier to a Lean waste, and then walk through a practical adoption roadmap—starting from one API, embedding spec-first thinking, applying governance and tooling, and measuring the outcomes. If you're ready to move from spec-ignored to spec-embedded, this talk shows you how.",
        speakers: [
          {
            name: "Marjukka Niinioja",
            job: "Founding Partner",
            company: "Osaango",
            avatar: asset("/images/speakers/Marjukka.jpg"),
            linkedin: "https://www.linkedin.com/in/marjukkaniinioja/",
            isTscMember: true,
          },
        ],
      },
      {
        id: "5",
        time: "11:30",
        category: "Practices",
        title:
          "How the Dutch Government Uses an OpenAPI-First Approach to Leverage Developer Experience",
        description:
          "The Dutch government recently launched a new OpenAPI-first API Register, designed to make public sector APIs easier to discover, understand, and reuse. Unlike traditional catalogs, the register is built around OpenAPI specifications as the single source of truth. This enables automated validation, consistent documentation, and machine-readable contracts right from the start. To further ensure quality and consistency, the register applies the Dutch API Strategy's API Design Rules. These rules standardize everything from security schemes to error handling, so developers know what to expect when working with APIs from different ministries or municipalities. The result is a more predictable and streamlined developer experience. The register also looks beyond single APIs. By supporting the emerging Arazzo standard, it can describe how multiple APIs interact to deliver complete government use cases — for example, registering a new business or applying for permits. This brings context and guidance to developers who need to orchestrate across domains.",
        speakers: [
          {
            name: "Dimitri van Hees",
            company: "Government of the Netherlands",
            avatar: asset("/images/speakers/Dimitri.jpg"),
            linkedin: "https://www.linkedin.com/in/dimitrivanhees/",
            isTscMember: true,
          },
        ],
      },
      {
        id: "6",
        time: "12:00",
        category: "Practices",
        title:
          "From REST to Events: API Workflow Testing and Mocking with a Single Arazzo Spec",
        description:
          "APIs rarely work in isolation. Real-world usage involves multiple steps across both synchronous REST calls and asynchronous events, where the outcome of each step determines the journey a particular interaction takes. While testing individual endpoints is necessary, it's not sufficient. It is equally important to validate how those endpoints and events work together as part of a real workflow. Enter the Arazzo Specification V1.1, which describes complete workflows including inputs, outputs, step dependencies, and success/failure criteria, across OpenAPI (REST) and AsyncAPI (events). In this talk, we'll demonstrate how you can leverage Arazzo to drive end-to-end API workflow testing and mocking in a completely no-code manner.",
        speakers: [
          {
            name: "Naresh Jain",
            job: "Founder, CEO",
            company: "Specmatic",
            avatar: asset("/images/speakers/Naresh.jpg"),
            linkedin: "https://www.linkedin.com/in/nareshjain/",
          },
        ],
      },
      {
        id: "7",
        time: "12:30",
        category: "Practices",
        title: "You may have OpenAPI, but is it AI-Ready?",
        description:
          "I have worked with and reviewed thousands of APIs across startups, enterprises, and global platforms. Almost all shipped an OpenAPI Description. Yet through the lens of AI systems and intelligent agents, most failed a simple test. They were designed for humans (often badly), not machines. In this session I will share what I have learned from helping organisations make their APIs truly AI-ready, breaking down the six dimensions that determine whether an API can be understood, reasoned over, discovered, and safely executed by intelligent systems. These include foundational compliance, developer experience, semantic clarity, agent usability, security, and AI discoverability. Using the Jentic API Scoring Framework as a visual guide, I will show how to assess AI-readiness, where most teams stumble, and the simple changes that dramatically improve both human and machine understanding.",
        speakers: [
          {
            name: "Frank Kilcommins",
            job: "Head of Enterprise Architecture",
            company: "Jentic",
            avatar: asset("/images/speakers/Frank.jpg"),
            linkedin: "https://www.linkedin.com/in/frank-kilcommins",
            isTscMember: true,
          },
        ],
      },
    ],
  },
  {
    id: "applications",
    title: "Applications",
    timeRange: "14:00 — 15:25",
    items: [
      {
        id: "8",
        time: "14:00",
        category: "Applications",
        title: "What's All The Fuss About TypeSpec?",
        description:
          "Ok, so you know OpenAPI and you love OpenAPI. You cannot imagine any other means to describe your APIs. You understand Operations Objects, Security Schemes, and the role Schema Objects play in well-described request and response payloads. You trust it, and so does your developer community. Enter TypeSpec, the new kid on the block for modelling APIs. In your ongoing love affair with OpenAPI, why should you care? In this session we'll take a look at TypeSpec from the angle of an ardent OpenAPI fan and look at what TypeSpec can actually do for you.",
        speakers: [
          {
            name: "Chris Wood",
            job: "Principal Architect",
            company: "Ozone API",
            avatar: asset("/images/speakers/Chris.jpg"),
            linkedin: "https://www.linkedin.com/in/sensiblewood/",
          },
        ],
      },
      {
        id: "9",
        time: "14:30",
        category: "Applications",
        title:
          "Control Surfaces in OpenAPI: Designing Specs for Task, Plan, and Agent Modes",
        description:
          "Your API is a control panel — but what controls should your OpenAPI specification expose? The answer depends on whether you're building for tasks, plans, or agents. A simple task needs input schemas and error responses. A multi-step plan requires lifecycle endpoints (pause/resume) and progress schemas. An autonomous agent demands budget parameters, approval callbacks, and emergency stop operations. Get the spec wrong, and you'll frustrate users trying to pause an atomic operation or micromanage a self-optimizing system. This talk explores how different AI operational modes—task, plan, and agent—require fundamentally different API control surfaces, and how to express these in OpenAPI. Through real-world specification examples and anti-patterns, you'll learn what endpoints, parameters, and schemas each mode needs, why mode mismatches cause design pain, and how to structure your OpenAPI specifications to expose the right level of control. Whether you're documenting a simple REST endpoint or a complex autonomous system, understanding control surfaces will help you design more intuitive and maintainable OpenAPI specifications.",
        speakers: [
          {
            name: "Miguel Quintero",
            job: "Technical Trainer",
            company: "Postman",
            avatar: asset("/images/speakers/Miguel.jpg"),
            linkedin: "https://www.linkedin.com/in/miguel-quintero-a558531/",
          },
        ],
      },
      {
        id: "10",
        time: "15:00",
        category: "Applications",
        title: "Spec-First API Designs Without Codegen",
        description:
          "The talk is about keeping the two things that matter at the centre: The users and the spec, the OpenAPI spec and how to design your code around it. It talks about the various real life challenges of not doing this and things like generating code and how popular open source tooling can address this. It gives a practical way to approach this problem and work with teams at scale.",
        speakers: [
          {
            name: "Rahul Dé",
            job: "VP, Platform and Site Reliability Engineering, Public Cloud",
            company: "Citi",
            avatar: asset("/images/speakers/Rahul.jpg"),
            linkedin: "https://www.linkedin.com/in/lispyclouds",
          },
        ],
      },
    ],
  },
  {
    id: "looking-glass",
    title: "The Looking Glass",
    timeRange: "15:55 — 16:50",
    items: [
      {
        id: "11",
        time: "15:55",
        category: "The Looking Glass",
        title: "OpenAPI and Spring-Boot 4 - What's New?",
        description:
          "Spring Boot remains the most widely used Java framework for modern application development, powering millions of applications globally. With Spring Boot 4, the framework enters a new era of performance, cloud-native support, and developer productivity. This talk will showcase the key innovations in Spring Boot 4 that make it a powerful choice for building scalable APIs. A major focus will be on OpenAPI and its integration via springdoc-openapi, a community-driven project that now exceeds 30 million downloads per month. We'll dive into the core features of springdoc-openapi, including support for Scalar project in addition to swagger-ui, Spring MVC, WebFlux, GraalVM, Kotlin. You'll also learn how to leverage advanced features like actuator integration, Javadoc reuse for API descriptions, HATEOAS, Data REST, and OAuth2 security.",
        speakers: [
          {
            name: "Badr Nass Lahsen",
            job: "Lead Cloud and Security Architect",
            company: "CyberArk",
            avatar: asset("/images/speakers/Badr.jpg"),
            linkedin: "https://www.linkedin.com/in/nasslahsen/",
          },
        ],
      },
      {
        id: "12",
        time: "16:25",
        category: "The Looking Glass",
        title: "Is OpenAPI still relevant in the age of AI?",
        description:
          "Count the times when you said 'OpenAPI' and others heard 'OpenAI'... Just when API Design, machine-readable API documentation, and OpenAPI have finally been normalized and gained traction, AI and agents throw a wrench into the works. At a time when you can vibecode an API in minutes and instantly stand up an MCP server, how useful is it to write and maintain OpenAPI documents? Join me to examine where and how OpenAPI remains relevant for your organization & product delivery and where it's no longer that useful (and what we could do instead).",
        speakers: [
          {
            name: "Emmanuel Paraskakis",
            job: "Founder",
            company: "Level 250",
            avatar: asset("/images/speakers/Emmanuel.jpg"),
            linkedin: "https://www.linkedin.com/in/emmanuelparaskakis/",
          },
        ],
      },
    ],
  },
];
