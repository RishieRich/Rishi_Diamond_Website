# CLAUDE.md — Rishi Pote Portfolio Website

## Project Goal
Update and maintain a personal portfolio website for **Rishi Pote** (AI Engineering Architect / Senior GenAI Engineer).

## Privacy Rule (STRICT)
- **Never mention client or company names**
- Use neutral labels instead:
  - "Large pharma enterprise"
  - "Consulting engineering track"
  - "Enterprise platform evaluation"
  - "Personal / open-source experiment"

---

## Site Structure
Pages to maintain: **Home · About · Skills · Case Studies · Projects/Demos · Writing & Enablement · Certifications · Contact**

---

## Owner Bio (use verbatim or paraphrase)
Senior AI/Data Architect and hands-on GenAI Engineer focused on agentic automation for regulated analytics workflows. Deep experience building end-to-end LLM systems (RAG + multi-agent orchestration + evaluation/QC + governance) on cloud-scale data platforms, with strong emphasis on correctness, auditability, and enterprise integration. Known for converting ambiguous domain processes (protocol/spec → code → QC) into repeatable AI pipelines with measurable quality gates.

---

## Core Skills (for Skills page)

**Agentic AI & Orchestration**
- Multi-agent design: Supervisor/Worker, Critic/Reviewer loops, Router patterns
- LangGraph / LangChain orchestration (sequential + iterative workflows)
- Tool invocation, guarded execution, idempotency, failure recovery

**RAG & Knowledge Layer**
- Vector search RAG (chunking, overlap, top-k retrieval)
- Metadata-driven retrieval (doc versioning, filtering, confidence thresholds)
- Evidence-first answer shaping (citations, claim-to-evidence checks)
- Long-term memory / active learning from HITL feedback (roadmap)

**LLM Evaluation & QC**
- LLM-as-Judge feedback loops
- Structural QC + logic QC frameworks (spec ↔ code alignment)
- Evaluation matrix engines (AI output vs gold standards, accuracy tracking)
- Confidence scoring, thresholds, sampling for QA review

**Code & Spec Automation (Regulated Analytics)**
- Protocol/document → structured specification generation
- Spec → analytics code generation (R / statistical programming)
- Debugger agents with consolidated QC reports

**Enterprise Platform Engineering**
- Cloud-native lakehouse architecture (compute, storage, secrets, search)
- API gateway patterns for LLM key authorization/routing
- Git-based SDLC: CI/CD, release hygiene, environment parity
- Audit logging + operational metadata (traceability, run history)

**Productization & Demos**
- RAG copilots with polished UI (Gradio / Streamlit), latency display, sources table
- Dependency pinning, reproducible builds, secrets management

---

## Case Studies (for Case Studies page)

### Case Study A — Clinical GenAI: SDTM → ADaM Automation
- **Label:** Large pharma enterprise
- **Role:** AI Engineering Architect / Senior AI Engineer
- **Summary:** End-to-end agentic pipeline automating SDTM → ADaM dataset generation + QC reporting.
- **Agents built:** Spec Generation → Code Generation → RAG Grounding → LLM-as-Judge QC → Debugger/QC → Final Reporting
- **Stack:** Lakehouse (compute + storage + secrets), Vector search RAG, Git SDLC, API gateway, Claude + OpenAI model families
- **Results:** 16 ADaM domains · ~10 studies · ~45–60 min runtime · ~75% efficiency improvement vs manual baseline
- **Deliverables:** HLD/LLD + architecture diagrams, repo structure + guardrails, stakeholder walkthroughs

### Case Study B — Clinical GenAI: Raw → SDTM Automation
- **Label:** Consulting engineering track
- **Role:** SME / AI & Data Engineering Architect
- **Summary:** Architecture and engineering for automating Raw → SDTM transformations in a Databricks/lakehouse pipeline.
- **Key contributions:** Pipeline design + orchestration, toolchain integration, LLM-powered code review utility (readability, standards, defect hints), repo conventions + maintainability guardrails

### Case Study C — RWD Agentic System: Protocol PDF → Spec → Code → QC
- **Label:** Large pharma enterprise (ongoing)
- **Role:** AI Engineering Architect / Senior AI Engineer (Lead)
- **Summary:** Automates the full analyst workflow — Protocol PDF (30–40 pages) → Programming Spec → R code → QC.
- **Components:**
  - Authoring Agent (Protocol → Spec) with Critic/Review loop
  - QC Agent (Structural + Logic QC, analyst-reviewable reports)
  - RAG Knowledge Layer (~15 historical protocol/spec pairs)
  - Evaluation Matrix Engine (scores AI spec vs gold references, tracks metric trends)
- **Platform direction:** Streamlit UI · LangChain/LangGraph · Vector RAG · Data lake · SQL ops/audit store

---

## Personal Projects / Demos (for Projects page)

### Dr. Assistant — RAG Copilot Demo
- Local-first RAG chatbot: PDFs → chunk/embed → FAISS → LLM answers with sources + latency display
- UI: Gradio (dark theme), sources table (file/page/chunk/preview), loaded PDFs list
- Stack: FAISS · sentence-transformers · Groq-hosted LLM · Gradio

### Local RAG App — Ollama + Chroma + Streamlit
- Local privacy-first RAG pipeline: Ollama LLM + embeddings · Persistent Chroma DB · Streamlit UI

### Manufacturing Domain RAG — "Knowledge + Actions + Audit" Architecture
- Designed sellable architecture: RAG as knowledge layer + agents for workflow, safety, auditability
- Reliability controls: doc revision prioritization, evidence thresholds, RBAC + action allowlists, full audit logs

---

## Platform Evaluations (can include on Case Studies or About page)

### Enterprise Agent Runtime Evaluation
- Assessed: runtime behavior, observability maturity, memory handling, gateway/API integration
- Built working agent to validate flows + limitations; produced leadership-level POV artifact

### MCP (Model Context Protocol) Proof-of-Concept
- Built MCP client/server prototype for tool-access patterns
- Integrated agent with MCP for tool execution; validated tool-grounded responses

---

## Certifications (for Certifications page)
- AWS Certified Solutions Architect – Associate (SAA-C03)
- AWS Certified AI Practitioner (AIF-C01)
- Databricks Certified Data Engineer Associate
- Databricks Certified Associate Developer for Apache Spark
- Databricks Generative AI Fundamentals (Badge)
- Databricks Lakehouse Fundamentals (Badge)
- SAP LeanIX Practitioner Level 1
- SAP LeanIX Practitioner Level 2

---

## Engineering Philosophy (use in About or Home page)
- **Spec-first workflows:** structured outputs as contracts for downstream code/QC
- **Closed-loop improvement:** Critic + LLM-as-Judge signals drive refinement
- **Deterministic kernel + probabilistic shell:** rules for safety/consistency; LLM for flexibility
- **Confidence thresholds:** auto-accept vs mandatory review vs high-priority escalation
- **Observability mindset:** run metadata, audit trails, error recovery, rollback plans

---

## SEO Keywords (use naturally across pages)
Agentic AI · LangGraph · LangChain · RAG · Vector Search · FAISS · Chroma · LLM-as-Judge · Spec-to-Code Automation · QC Automation · Clinical Programming Automation · SDTM · ADaM · RWD · Databricks · Data Lake · API Gateway · GitHub · Evaluation Frameworks · Active Learning · Auditability · RBAC · Observability · Gradio · Streamlit

---

## Content & Tone Guidelines
- Tone: Senior, credible, "real builder" — avoid buzzword-only copy
- Always emphasize: agentic automation · RAG grounding · evaluation/QC · enterprise-grade integration · auditability · demo-ready productization
- Quantify results wherever available (75% efficiency, 16 domains, 10 studies, etc.)
- Do not invent new metrics or client details
