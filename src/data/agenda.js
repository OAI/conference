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
        title: "What's New in OpenAPI 3.2",
        speakers: [
          {
            name: "Lorna Mitchell",
            job: "API Architect",
            company: "TM Forum",
            avatar: asset("/images/speakers/Lorna.jpg"),
            linkedin: "https://www.linkedin.com/in/lornajane/",
          },
        ],
      },
      {
        id: "3",
        time: "10:15",
        category: "Foundations",
        title: "Data Contracts: Treating Data as APIs",
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
        speakers: [
          {
            name: "Marjukka Niinioja",
            job: "Founding Partner",
            company: "Osaango",
            avatar: asset("/images/speakers/Marjukka.jpg"),
            linkedin: "https://www.linkedin.com/in/marjukkaniinioja/",
          },
        ],
      },
      {
        id: "5",
        time: "11:30",
        category: "Practices",
        title:
          "How the Dutch Government Uses an OpenAPI-First Approach to Leverage Developer Experience",
        speakers: [
          {
            name: "Dimitri van Hees",
            company: "Government of the Netherlands",
            avatar: asset("/images/speakers/Dimitri.jpg"),
            linkedin: "https://www.linkedin.com/in/dimitrivanhees/",
          },
        ],
      },
      {
        id: "6",
        time: "12:00",
        category: "Practices",
        title:
          "From REST to Events: API Workflow Testing and Mocking with a Single Arazzo Spec",
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
        title: "You May Have OpenAPI, but Is It AI-Ready?",
        speakers: [
          {
            name: "Frank Kilcommins",
            job: "Head of Enterprise Architecture",
            company: "Jentic",
            avatar: asset("/images/speakers/Frank.jpg"),
            linkedin: "https://www.linkedin.com/in/frank-kilcommins",
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
        title: "What's All the Fuss About TypeSpec?",
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
        title: "Is OpenAPI Still Relevant in the Age of AI?",
        speakers: [
          {
            name: "Emmanuel Paraskakis",
            job: "Founder",
            company: "Level250",
            avatar: asset("/images/speakers/Emmanuel.jpg"),
            linkedin: "https://www.linkedin.com/in/emmanuelparaskakis/",
          },
        ],
      },
    ],
  },
];
