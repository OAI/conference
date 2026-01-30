/**
 * Agenda Data
 *
 * Contains all conference agenda sections and items
 */

import { asset } from "../config.js";

export const agendaSections = [
  {
    id: "morning-sessions",
    title: "Morning Sessions",
    timeRange: "09:30 — 12:00",
    items: [
      {
        id: "1",
        time: "09:30",
        category: "OpenAPI Summit",
        title: "Summit Welcome and OpenAPI in the Age of AI",
        description:
          "Welcome to the OpenAPI Summit! We have an exciting program to share, with presentations talking about new specifications as well as presentations that dive into practices, applications, and an outlook of things are going. We also we have a brief look of where OpenAPI is situated in the age of AI and MCP, and how things are going to develop after the recent publication of version 3.2 of the specification.",
        speakers: [
          {
            name: "Erik Wilde",
            job: "Head of Enterprise Strategy",
            company: "Jentic",
            avatar: asset("/images/speakers/Erik.jpg"),
            linkedin: "https://www.linkedin.com/in/erikwilde/",
            isOaiMember: true,
          },
        ],
      },
      {
        id: "2",
        time: "10:00",
        category: "OpenAPI Summit",
        title: "You May Have OpenAPI, But Is It AI-Ready?",
        description:
          "I have worked with and reviewed thousands of APIs across startups, enterprises, and global platforms. Almost all shipped an OpenAPI Description. Yet through the lens of AI systems and intelligent agents, most failed a simple test. They were designed for humans (often badly), not machines. In this session I will share what I have learned from helping organisations make their APIs truly AI-ready, breaking down the six dimensions that determine whether an API can be understood, reasoned over, discovered, and safely executed by intelligent systems. These include foundational compliance, developer experience, semantic clarity, agent usability, security, and AI discoverability. Using the Jentic API Scoring Framework as a visual guide, I will show how to assess AI-readiness, where most teams stumble, and the simple changes that dramatically improve both human and machine understanding.",
        speakers: [
          {
            name: "Frank Kilcommins",
            job: "Head of Enterprise Architecture",
            company: "Jentic",
            avatar: asset("/images/speakers/Frank.jpg"),
            linkedin: "https://www.linkedin.com/in/frank-kilcommins",
            isOaiMember: true,
          },
        ],
      },
      {
        id: "3",
        time: "10:30",
        category: "OpenAPI Summit",
        title: "What's new in OpenAPI 3.2?",
        description:
          "Come hear how and when to use the new features of the OpenAPI Specification 3.2! This talk will highlight AI-friendly features such as streaming media, structured tags, and improved examples, among other features. It will also include a brief look at areas we are researching for 3.3.",
        speakers: [
          {
            name: "Henry Andrews",
            company: "OpenAPI Initiative",
            avatar: asset("/images/speakers/Henry.jpg"),
            linkedin: "https://www.linkedin.com/in/handrews",
            isOaiMember: true,
          },
        ],
      },
      {
        id: "4",
        time: "11:00",
        category: "OpenAPI Summit",
        title:
          "10x Boost in API Development Velocity Using Practical AI Tooling",
        description:
          "This session focuses on accelerating development velocity using Generative AI tooling. In this session, we will use various AI tools to aid with API design, development / code generation, APIs unit/integration testing, and observability. We’ll outline various stages in API development lifecycle, and highlight practical examples of automated help using Microsoft Copilot with GPT 5 and Cursor AI with Claude Sonnet. We’ll cover generating refined API specs, developer documentation, data contracts and general API service scaffolding, unit and integration test code, and injecting observability hooks to establish granular alerts and dashboards.",
        speakers: [
          {
            name: "Sumit Amar",
            job: "API Development Expert",
            company: "WEX",
            avatar: asset("/images/speakers/Sumit.jpg"),
          },
        ],
      },
      {
        id: "5",
        time: "11:30",
        category: "OpenAPI Summit",
        title:
          "The New Developer Stack: Integrating AI into the Core of Enterprise Systems",
        description:
          "AI is no longer a sidecar, it’s the new runtime for enterprise software. This talk explores how to embed AI capabilities within existing platforms and micro-services. We’ll cover architecture evolution patterns, API design for AI endpoints, and change management strategies for teams transitioning from traditional systems to AI-native infrastructure. Whether you’re building for internal developers or customer-facing apps, this session provides a roadmap for sustainable AI adoption. Key takeaways: - Patterns for integrating LLMs and APIs with enterprise systems - How to align AI initiatives with platform goals - Strategies to balance innovation speed with governance.",
        speakers: [
          {
            name: "Manideep Galala",
            job: "Enterprise Systems Architect",
            company: "Microsoft",
            avatar: asset("/images/speakers/ManideepGalala.jpg"),
          },
          {
            name: "Aditya Tangirala",
            job: "Enterprise Systems Engineer",
            company: "Venmo",
            avatar: asset("/images/speakers/AdityaTangirala.jpg"),
          },
        ],
      },
    ],
  },
  {
    id: "afternoon-sessions",
    title: "Afternoon Sessions",
    timeRange: "1:00pm — 3:30pm",
    items: [
      {
        id: "6",
        time: "1:00pm",
        category: "OpenAPI Summit",
        title:
          "Bridging SDKs, OpenAPI, and AI: A Unified Schema for LLM-Safe API Chunking",
        description:
          "API teams today work with multiple representations of the same system: SDKs encode behavior and types in code, OpenAPI describes surface contracts, and documentation explains intent in prose. These artifacts evolve independently, resulting in fragmented semantics and no single source of truth. This fragmentation becomes especially problematic when APIs are consumed by LLMs. Common approaches such as simply chunking OpenAPI files, SDK code, or documentation, often split schemas, workflows, and error semantics across boundaries that destroy context. The result is brittle reasoning and hallucinations, even when the underlying API is well-designed. In this talk, we focus on two practical concepts: A unified intermediate schema that preserves semantic intent across SDKs and OpenAPI, acting as a shared backbone for tooling and automation LLM-safe chunking, where schemas, types, workflows, and errors are structured into stable, meaningful units that models can reason over without losing context Drawing from real-world, multi-language API codebases (Node.js, Python, Go, Java, TypeScript, etc), we discuss why existing representations fall short, what properties such a unified schema must have, and how it enables both accurate OpenAPI generation and more reliable LLM-driven use cases.",
        speakers: [
          {
            name: "Aditya Rohit",
            job: "SDK & API Architect",
            company: "",
            avatar: asset("/images/speakers/AdityaRohit.jpg"),
          },
        ],
      },
      {
        id: "7",
        time: "1:30pm",
        category: "OpenAPI Summit",
        title: "Coming Soon!",
        description: "Coming Soon!",
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
      {
        id: "8",
        time: "2:00pm",
        category: "OpenAPI Summit",
        title: "APIs Weren't Built for AI: Now What?",
        description:
          "APIs power modern digital systems. But they were designed for human developers building deterministic applications. Today, those APIs are increasingly consumed by AI-driven and agentic systems that are probabilistic, non-deterministic, and autonomous by nature. This mismatch introduces real risks: runaway costs, unexpected behavior, security gaps, and brittle integrations. Making APIs “AI-ready” requires more than adding an OpenAPI description or exposing an endpoint to an LLM. It demands rethinking APIs across multiple dimensions: how they are designed, how they are consumed, and how they are governed at runtime. In this session, we explore why traditional API assumptions break down in AI-driven environments and what architectural changes are required to address them. We’ll examine design patterns for AI-friendly APIs, challenges introduced by agentic consumption, and the critical role of API gateways, policies, and observability in controlling risk. AI-ready APIs aren’t accidental, they’re intentional. This talk shows what that intent looks like in practice.",
        speakers: [
          {
            name: "Nuwan Dias",
            job: "API Platform Expert",
            company: "WSO2",
            avatar: asset("/images/speakers/Nuwan.jpg"),
          },
        ],
      },
      {
        id: "9",
        time: "2:30pm",
        category: "OpenAPI Summit",
        title:
          "The API-to-AI Pipeline: Building the Composable Backbone of AI-Ready Platforms",
        description:
          "95% of all AI initiatives failed across organizations in 2025! Why? Lack of AI-readiness, underestimating the complexities of the AI value chain and treating MCP as the entire AI strategy! Yes, every organization wants to be “AI-ready,” but few realize that the journey starts long before the first LLM prompt is written — it begins with APIs and API management. However, rigid, inflexible, and proprietary API platforms only compound the problem since they can't keep up or cater to the evolving needs of the business. So, in this workshop, we’ll explore how open standards like OpenAPI, OAuth, and OpenTelemetry can help you build a composable API layer that’s secure, observable, and built for scale. We’ll then turn your APIs into AI-ready tools using the Model Context Protocol (MCP), connecting them to LLMs, data sources, and other services to create AI-native applications. Key takeaways: 1. Why APIs are the first step toward AI-readiness. 2. How OAS, OAuth, and Otel work together to build strong foundations. 3. What the Model Context Protocol (MCP) unlocks for developers building AI-native applications Expect practical examples, clear patterns, and a few “aha” moments about where APIs fit in the AI era.",
        speakers: [
          {
            name: "Kuldeepak Angrish",
            job: "Technology Leader",
            company: "Tyk",
            avatar: asset("/images/speakers/Kuldeepak.jpg"),
          },
          {
            name: "Budhaditya Bhattacharya",
            job: "Enterprise Architect",
            company: "Tyk",
            avatar: asset("/images/speakers/Budhaditya.jpg"),
          },
        ],
      },
      {
        id: "10",
        time: "3:00pm",
        category: "OpenAPI Summit",
        title:
          "From API Chaos to Clarity: The Role of OpenAPI in Standardized Tooling",
        description:
          "As API ecosystems grow, teams often struggle with fragmented tooling and inconsistent practices. This session explores how the OpenAPI Specification (OAS) brings order to API development by enabling standardized, interoperable, and vendor-agnostic tooling. We’ll examine how standards-based approaches improve automation, governance, and collaboration across the API lifecycle, and why they offer clear advantages over proprietary solutions. Through practical examples, the talk shows how OAS-driven tools help organizations reduce complexity, accelerate digital transformation, and build scalable API platforms without vendor lock-in.",
        speakers: [
          {
            name: "Raúl Nogales",
            job: "Founder & CEO",
            company: "101OBEX",
            avatar: asset("/images/speakers/Raul.jpg"),
            linkedin: "https://www.linkedin.com/in/raulnogales/",
          },
        ],
      },
    ],
  },
];
