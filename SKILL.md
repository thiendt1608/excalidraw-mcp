---
name: excalidraw-diagram-designer
description: Professional Excalidraw diagram designer. Designs system architectures, tech roadmaps, 4-quadrant deep dives, pipelines, and sequence diagrams using excalidraw-mcp tools with senior aesthetic standards.
globs:
  - "**/*.excalidraw"
  - "**/*.excalidraw.json"
---

# Excalidraw Diagramming Skill & Agent Guide (Senior & Production Standard)

## 1. Core Purpose & Highest Standards
Guide AI Agents / LLMs to conceptualize, design, and render diagrams (System Architecture, Tech Roadmap, Multi-Layer Deep Dive, Research/Paper Taxonomy, Enterprise Pipelines, and Flowcharts) using Excalidraw MCP Tools that meet the aesthetic and structural standards of a **Senior Principal Architect & ByteByteGo / DailyDoseofDS style**.

Every diagram generated MUST satisfy the following criteria:
- **High Visual Density & Rich Visual Cues:** Never draw plain, boring rectangles filled with raw text. Masterfully combine Icons, Micro-diagrams (miniature charts/cards), Badges, Pills, and Tags.
- **Card-in-Card Layered Architecture:** Establish a clear 3-tier visual hierarchy (Master Container -> Section/Sub-card -> Atomic Components/Items).
- **Semantic Pastel Palette:** Subtle, eye-soothing, high-contrast pastel colors where every color represents a specific domain or architectural layer.
- **Smart Routing & Numbered Steps:** Numbered sequential steps, clear action labels, and dashed feedback loops routed along outer margins—never cutting diagonally through sibling nodes.
- **Precision Typography & Clean Geometry:** Set `roughness: 0` and `fontFamily: 2` (Helvetica/Sans) for technical authority, maintaining crisp alignments and uniform padding.

---

## 2. The 7 Signature Archetypes

When receiving a user request, immediately identify which of the following 7 Archetypes best fits the prompt:

### Archetype A: The ByteByteGo Central Spine Roadmap (Tech Stack & Learning Paths)
- **Central Spine Layout:**
  - **Top & Bottom Anchors:** Place a central Persona/Avatar (e.g., Full Stack Dev, Cloud Architect, Client) with an identification badge.
  - **Vertical Spine:** A central dashed vertical line (`dashed`, `strokeWidth: 2`).
  - **Step Anchors:** Dark or high-contrast circular badges (`1`, `2`, `3`, `4`...) pinned directly along the vertical spine.
  - **Symmetrical Alternating Branches:** Dashed arrows branch out horizontally from step anchors to Left and Right columns following logical learning/execution order (e.g., Left: Frontend, Mobile, DB... | Right: Backend, Cloud, DevOps...).
- **"Folder Tab / Capsule Header" Technique:**
  - On top of each major container, attach a **Capsule Pill Tab** overlapping the top edge or top-left corner, color-coded by domain (e.g., Blue for Web Frontend, Green for Backend, Purple for Mobile, Yellow for Database, Orange for UI/UX, Teal for Infra).
- **Nested Card-in-Card Groups:**
  - Inside each major card, split into 2–3 rounded sub-boxes (`Basics`, `Frameworks`, `Styles`...).
  - Center-align sub-box titles at the top (Bold, 14px).
  - **Icon-on-Top Pattern:** Brand/Tech Logo on top (~40x40 px), technology label below (font 12–14px), evenly spaced horizontally.

### Archetype B: The DailyDoseofDS 4-Quadrant Deep Dive (Multi-Layer & Iterative Loops)
- **2x2 Matrix Layout:**
  - Enclosed in a master frame with smooth rounded corners (`roundness: { type: 3 }`) and crisp outlines.
  - **Top Title Banner:** System title in bold uppercase (fontSize: 28–34px) + Subtitle summarizing the core engineering philosophy (fontSize: 14–16px).
  - **4 Quadrant Modules:**
    - Top-left of each quadrant features a **Numbered Circular Badge** (`①`, `②`, `③`, `④`).
    - **Header Pill:** A slightly deeper pastel pill containing `[Icon] + [Module Name (Bold)] + [Role Subtitle]`.
    - Harmonious dual-tone coloring across layers (e.g., Quadrants 1 & 3 in Mint/Teal; Quadrants 2 & 4 in Sky Blue).
- **Standard Input / Processor / Output / Loop Pipeline:**
  - **Inputs Box (Fieldset style):** Labeled "Inputs" overlapping the border, containing nested pill chips (`Role`, `Instructions`, `Examples`, `Format`...)—each chip with an individual icon.
  - **Funnel / Curator Shape:** Inverted trapezoid/triangle representing data filtering, compression, and selection.
  - **Numbered Step Arrows:** Step badges along flow arrows with action verbs: `(1) Compose`, `(2) Send`, `(3) Generate`...
  - **External Feedback Loop:** Dashed arrow (`dashed`) originating from the final Output, routed 90° along the card's outermost margin back to the initial Inputs. NEVER slice diagonally across intermediate nodes.
  - **Footer Takeaway Banner:** Bottom banner stating an impactful architectural takeaway.

### Archetype C: The Research / AI Paper Taxonomy & System Architecture
- **Horizontal Staged Rows with Numbered Modules:**
  - Divided by rows: Row 1 (Foundations A vs B) -> Row 2 (Interactions A for B, B for A) -> Row 3 (Applications & Challenges).
  - Module headers always numbered: `(1) Graph Methodology`, `(2) AI Agent Methodology`, `(3) AI Agents for Graphs`...
  - Center bridge/collision point features a bidirectional orange cross-arrow or block arrow representing interface synthesis.
- **Micro-diagrams (Visual Miniatures over Plain Text):**
  - Node-link Graph: Clustered colored circles with connector links representing graphs.
  - Chat Bubble: "Please help me [...]" dialog box for user prompt/task.
  - Hollow Process Arrows (Block chevrons): `[Input] => [Foundation Model] => [Processing with Gears/Brain] => [Trophy/Complete]`.
  - Reasoning Chains: `Task Reasoning (List -> Robot -> Lightbulb)`, `Decision Search (Branching tree with checkmarks and crosses)`, `Memory (Book -> Robot -> Brain -> Database)`.
- **2–3 Column Grid for Applications & Challenges:**
  - Instead of boring bullet points, organize into a 2-column card grid: Each item consists of `[Left Accent Icon (32x32)] + [Right 2-line Bold Title & Subtitle]`.

### Archetype D: The End-to-End Enterprise Pipeline
- Horizontal Left-to-Right Swimlanes (Client -> API Gateway -> Message Broker / Queue -> Microservices Cluster -> Cache & Primary DB).
- Group service/data clusters using light gray dashed containers with solid white fills to elevate key nodes.

### Archetype E: Enterprise Multi-Tier Platform Architecture
- **Fully Numbered Sub-system Hierarchy (1 -> 11):**
  - `1. CLIENTS / CHANNELS`: Left vertical column (Web App, Mobile, Messaging, Teams, API Clients).
  - `2. FRONTEND & GATEWAY LAYER`: Top layer with Frontend (React/Next), API Gateway (Nginx/Traefik), and Auth Service. Flanked by an auxiliary Features column (Auth, Rate Limiting, Routing, Load Balancing).
  - `3. BACKEND SERVICES (MICROSERVICES)`: Horizontal cluster of microservice cards.
  - `4. MODEL & AI SERVICES`: Right vertical column for AI workloads (LLM Service, Embedding, Rerank, Model Serving).
  - `5. SHARED INFRASTRUCTURE (Shared Bus)`: A wide, slim horizontal pill bar bridging compute services and the data layer with bidirectional dashed connections (Redis Caching, MinIO/S3 Storage, Kafka/RabbitMQ Task Queue).
  - `6. DATA & STORAGE LAYER`: Row of 5 specialized databases (PostgreSQL relational, Vector DB for RAG, Object Storage for blobs, Cache for sessions, Analytics DB for metrics).
  - `7. EXTERNAL SYSTEMS`: CRM, Knowledge Bases, 3rd-party APIs.
  - `8, 9, 10. GOVERNANCE & INFRA (Bottom Row)`: 3 horizontal boxes covering Observability (Logging/Monitoring/Tracing), Security (WAF/Secrets/Encryption), and DevOps (Docker/K8s/CI-CD).
  - `11. FLOW OVERVIEW BOX`: 5-step sequence card featuring a User <-> Bot interaction visual with numbered bidirectional arrows `①, ②, ③, ④, ⑤`.
  - **Footer "WHY THIS DESIGN?" Banner:** 5-column architectural value grid: `SCALABLE`, `HIGH PERFORMANCE`, `RELIABLE`, `SECURE`, `MAINTAINABLE`.

### Archetype F: Multi-Track Horizontal Pipeline / Maturity Roadmap
- **Global Stage Header along Top:**
  - Canonical standardized stages across the top: `1. CODE`, `2. GIT`, `3. CI`, `4. ARTIFACT`, `5. DEPLOY`, `6. LIVE`.
  - Each stage column has a prominent icon (~50x50 px) connected by horizontal arrows `->`.
- **Parallel Swimlanes / Maturity Tracks:**
  - Side-by-side progression comparison (e.g., `Beginner` vs `Pro/Production`, `Current` vs `Target`).
  - Each track is an expansive rounded card styled with its own thematic color (Beginner in soft Blue, Pro in soft Green).
  - Left side contains Track Title + 2-line concise summary.
  - Right side houses a sequence of crisp white cards (`#FFFFFF`) with `[Top Icon] + [Bottom Label]`, linked by arrows matching the track's theme color.
- **Value Proposition Footer Banner:**
  - Bottom row divided into 5 equal columns: `Fast`, `Reliable`, `Secure`, `Scalable`, `Automated`—each item pairing `[Left Icon] + [Right Bold Title & 2-line detail]`.

### Archetype G: Before vs. After & Tree-Mapping Architecture
- **Split-Screen Layout (Left & Right Halves):**
  - **Left Half (Directory Tree Knowledge Mapping):**
    - Repository structure (`agent-ready-project/`, `AGENTS.md`, `specs/...`, `src/...`) rendered using tree branches `├──` and `└──`.
    - **Large Curly Braces (`{` or `}`)** grouping related file sets.
    - Each file/group endpoint marked with an **Anchor Dot** in a distinct accent color.
    - **Curved Rainbow Connectors:** Flowing curved lines linking anchor dots to matching category pills on the right (`ORIENTATION` in blue, `PROCEDURES` in orange, `CHANGE DESIGN` in purple, `CONSTRAINTS` in dark slate, `DOMAIN INTENT` in pink, `IMPLEMENTATION` in green).
  - **Right Half (Before vs. Now Evolution):**
    - `BEFORE: KNOWLEDGE SCATTERED`: Fragmented silos in dashed boxes -> assembled manually by Developer -> Source code.
    - `NOW: AN AGENT-READY REPOSITORY`: Unified versioned knowledge -> AI Coding Agent (Intent Compiler) -> Source code -> Runtime & Feedback loop in green returning to Memory.

---

## 3. Semantic Pastel Palette

To achieve clean, professional, senior-level diagrams, the Agent **MUST** use these exact Hex codes:

| Domain / Semantic Role | Background Color (`backgroundColor`) | Border / Stroke Color (`strokeColor`) | Text Color (`strokeColor` on Text) |
|---|---|---|---|
| **Frontend / UI / Web** | `#EFF6FF` (Soft Sky Blue) | `#3B82F6` (Blue) | `#1E40AF` (Deep Navy) |
| **Backend / Service / Prompt** | `#ECFDF5` (Soft Mint Green) | `#10B981` (Emerald) | `#065F46` (Deep Forest) |
| **Database / Storage / Cache** | `#FFFBEB` (Soft Warm Amber) | `#F59E0B` (Amber Gold) | `#92400E` (Deep Bronze) |
| **Mobile / Cross-platform / Harness** | `#F5F3FF` (Soft Lavender) | `#8B5CF6` (Purple) | `#5B21B6` (Deep Violet) |
| **UI/UX / Design / Warning** | `#FFF7ED` (Soft Peach/Orange) | `#F97316` (Orange) | `#9A3412` (Deep Rust) |
| **Security / Error / Brake** | `#FEF2F2` (Soft Rose) | `#EF4444` (Red) | `#991B1B` (Deep Red) |
| **Neutral Container / Grouping** | `#F8FAFC` (Slate Gray) | `#CBD5E1` (Border) | `#334155` (Slate Dark) |
| **Elevated Sub-Cards / White** | `#FFFFFF` (Pure White) | `#E2E8F0` (Thin Border) | `#0F172A` (Charcoal) |
| **Step Badges / Highlight Accents** | `#EA580C` (Deep Orange) or `#2563EB` | `#EA580C` | `#FFFFFF` (White text) |

*Palette Rules:*
- Never use raw 100% saturated primary colors (e.g., avoid harsh `#FF0000` or `#00FF00`).
- Outer containers use light pastel tints (50–100 tint level).
- Inner sub-cards use pure `#FFFFFF` fill to create visual elevation and depth.
- Header tabs and step badges use deeper saturated tones to establish clear visual anchors.

---

## 4. Typography Hierarchy & Text Guidelines

Agents must configure typography sizes and styles adhering to these exact specifications:

1. **Master Diagram Title:** `fontSize: 28 - 36`, `fontFamily: 2` (Normal/Sans), `textAlign: "center"`, bold.
2. **Master Subtitle / Takeaway:** `fontSize: 13 - 15`, `fontFamily: 2`, color `#64748B`, regular or italic.
3. **Section / Category Header (Folder Tab / Pill):** `fontSize: 16 - 20`, bold, `textAlign: "center"`.
4. **Sub-section Title (Inner Card Header):** `fontSize: 14 - 16`, bold.
5. **Component Title / Technology Name:** `fontSize: 12 - 14`, bold.
6. **Detail / Subtitle / Bullet Points:** `fontSize: 11 - 13`, regular, color `#475569`.
7. **Step Number Badge:** `fontSize: 11 - 13`, bold, centered in a `22x22` or `26x26` circle.

*Font Family Guidance in Excalidraw:*
- `fontFamily: 1`: Virgil (Hand-drawn sketch style)—suitable for informal brainstorming or casual concept maps.
- `fontFamily: 2`: Helvetica / Sans-serif (Normal)—**HIGHLY RECOMMENDED** for System Architecture, ByteByteGo style, and Technical Diagrams for maximum legibility and authority.
- `fontFamily: 3`: Cascadia / Monospace—Reserved for code snippets, HTTP verbs (`GET`, `POST`), file paths, and endpoints (`/api/v1/...`).

---

## 5. Shape Specifications & Visual Tokens

### A. Folder Tab Technique ("Folder Tab" Style)
To craft ByteByteGo-style folder tabs:
1. Draw a master rounded rectangle container (`roundness: { type: 3 }`), `x: 100, y: 100, width: 320, height: 420`.
2. Draw a smaller rounded rectangle tab overlapping the top-left or top-center edge: `x: 120, y: 85, width: 140, height: 32`, `backgroundColor: "#EFF6FF"`, `strokeColor: "#3B82F6"`, rounded corners.
3. Place centered bold label text inside the tab rectangle.

### B. Nested Chips / Pills
- Standard height: `28 - 34px`.
- Fully rounded corners, white or ultra-soft pastel fill.
- Inner layout: `[Icon 16x16] + [Chip Title]`.

### C. Numbered Step Markers
- Ellipse diameter: `24px` (width: 24, height: 24).
- Fill: Deep Orange (`#EA580C`) or Vivid Blue (`#2563EB`).
- Centered bold white number `1`, `2`, `3` (`#FFFFFF`), `fontSize: 12`.
- Position directly along connector lines or beside action labels.

### D. External Feedback Loops
- Forward flow: Straight solid lines (`strokeStyle: "solid"`), dark tone.
- Feedback / Retry flow:
  - Dashed orthogonal lines (`strokeStyle: "dashed"`), neutral gray (`#64748B`) or accent orange.
  - Route from output bottom, turn 90° outward past the margin (20–30px gutter), run upward parallel to the container, then turn 90° directly into the input.
  - NEVER route feedback loops diagonally across intermediate node faces!

### E. 3-Part Microservice Cards
- Dimensions: `width: 140 - 180px`, `height: 160 - 200px`, rounded (`roundness: { type: 3 }`).
- 3-tier structure:
  1. **Header:** `[Top-left Icon 24x24]` + `[Bold Service Title (13px)]`.
  2. **Separator:** Thin divider line (`strokeColor: "#E2E8F0"`).
  3. **Body (Bullet Points):** 2–4 concise bullet points (font 11–12px, color `#475569`) describing key duties. E.g.:
     ```text
     • Receive Message
     • Stream Response
     • Message Status
     ```
- Each microservice card features a distinct light pastel border tint (blue, emerald, purple, amber).

### F. Shared Infrastructure Bus
- Wide, slim horizontal bar (`width: 800 - 1000px`, `height: 48 - 60px`), soft blue fill (`#EFF6FF`), rounded corners.
- Contains infrastructure icon + distributed cluster labels: `Caching (Redis)  •  File Storage (MinIO/S3)  •  Task Queue (Kafka/RabbitMQ)`.
- Connected via vertical bidirectional dashed arrows (`<-->`) upward to Microservices and downward to Databases.

### G. Directory Tree & Curly Braces
- Render directory branches using monospace font (`fontFamily: 3`) or standard text using tree symbols `├──` and `└──`.
- Root directory enclosed in a rounded pill badge (`agent-ready-project/`).
- Use large curly braces `{` to bundle 2–4 related files into a logical functional unit.
- Anchor Dots: Small filled circles (`ellipse`, diameter `10px`) in distinct semantic colors placed at tree branch endpoints.

### H. Curved Rainbow Connectors
- When mapping multiple tree endpoints to right-hand functional modules:
  - **AVOID** uniform black lines which create a confusing spiderweb.
  - **MUST** use curved arrows/lines matching the target module's semantic color:
    - Target `ORIENTATION`: Blue (`#2563EB`).
    - Target `PROCEDURES`: Orange (`#EA580C`).
    - Target `CHANGE DESIGN`: Purple (`#7C3AED`).
    - Target `SYSTEM CONSTRAINTS`: Dark Slate (`#334155`).
    - Target `DOMAIN INTENT`: Magenta/Pink (`#DB2777`).
    - Target `IMPLEMENTATION`: Emerald Green (`#16A34A`).

### I. Flow Overview Summary Card
- Compact summary box (`width: 240 - 280px`, light blue border).
- Header: `FLOW OVERVIEW` (bold).
- 5-step numbered breakdown with color-coded circular step icons:
  - `1` User sends message (Green)
  - `2` Gateway verifies & routes (Blue)
  - `3` Backend orchestrates & processes (Purple)
  - `4` Retrieve data, invoke model, evaluate (Amber)
  - `5` Stream response back to user (Green)
  - Bottom mini visual: User icon on left, Bot icon on right, with 5 numbered bidirectional arrows simulating the interaction sequence.

### J. Architectural Value Proposition Banner ("Why This Design?")
- Bottom-docked 5-column grid across the full diagram width.
- Each column includes:
  - `[Colored Icon 28x28]`
  - `[UPPERCASE BOLD TITLE (12–13px)]` (e.g., `SCALABLE`, `HIGH PERFORMANCE`, `RELIABLE`, `SECURE`, `MAINTAINABLE`)
  - `[2-line description (11px)]` (e.g., `Scale horizontally with Kubernetes`, `Caching, Async, Streaming for low latency`).

---

## 6. Spatial Math & Reference Layout Templates

### Template A: 2-Column Spine Roadmap Layout (ByteByteGo style)
```text
X: 700                           [Central Spine X: 800]                          X: 900
[Col 1: Web Frontend (W: 420)]             (Avatar Top Y: 80)          [Col 2: Backend (W: 420)]
Y: 160                                            |                    Y: 160
                                          (Badge 1 Y: 220) --->
                                                  |
                                          <--- (Badge 2 Y: 380)
[Col 1: Mobile (W: 420)]                          |                    [Col 2: Cloud (W: 420)]
Y: 520                                    (Badge 3 Y: 580) --->        Y: 520
...
```

### Template B: 4-Quadrant Matrix Layout (DailyDoseofDS style)
```text
Title Banner (Y: 50, Center X: 800, W: 1000)
[Quadrant 1: Prompt Eng (X: 100, Y: 140)]      [Quadrant 2: Context Eng (X: 820, Y: 140)]
Width: 680, Height: 480                        Width: 680, Height: 480

[Quadrant 3: Harness Eng (X: 100, Y: 660)]     [Quadrant 4: Loop Eng (X: 820, Y: 660)]
Width: 680, Height: 480                        Width: 680, Height: 480

Takeaway Banner (Y: 1180, Center X: 800, W: 1200)
```

### Template E: Enterprise Multi-Tier Architecture Layout (AI Platform style)
```text
Title: AI PLATFORM CHATBOT SYSTEM DESIGN (Y: 40, Center X: 800)
Subtitle: Scalable • Modular • Secure • Production Ready (Y: 80)

[1. Clients (X: 60, Y: 140, W: 160)]  [2. Frontend & Gateway (X: 250, Y: 140, W: 780)]  [4. Model Services (X: 1060, Y: 140, W: 240)]
                                      [3. Backend Microservices (X: 250, Y: 320, W: 780)]
                                      [5. Shared Infra Bus (X: 250, Y: 560, W: 780, H: 50)]
                                      [6. Data & Storage Layer (X: 60, Y: 640, W: 970)]  [11. Flow Overview (X: 1060, Y: 640, W: 240)]

[8. Observability (X: 60, Y: 820)]    [9. Security (X: 380, Y: 820)]   [10. DevOps / Infra (X: 700, Y: 820)]

Why This Design? Banner (X: 60, Y: 1020, W: 1240, 5 Columns Grid)
```

### Template F: Multi-Track Horizontal Pipeline Layout (Git Roadmap style)
```text
Master Stage Header: [1. CODE] -> [2. GIT] -> [3. CI] -> [4. ARTIFACT] -> [5. DEPLOY] -> [6. LIVE] (Y: 120)

[Track 1: Beginner Track (X: 80, Y: 260, W: 1300, H: 160)]
  Title Box (Left) | [Code] -> [GitHub] -> [Basic CI] -> [Zip Artifact] -> [SSH Deploy] -> [Live]

[Track 2: Pro/Student Track (X: 80, Y: 460, W: 1300, H: 160)]
  Title Box (Left) | [Code] -> [GitHub] -> [CI Pipeline] -> [Docker Image] -> [Deploy K8s] -> [Live]

Value Proposition Footer (Y: 660, 5 Equal Columns: Fast, Reliable, Secure, Scalable, Automated)
```

---

## 7. Excalidraw MCP Tool Guide (`excalidraw-mcp`)

The `excalidraw-mcp` server provides 12 tools fully compliant with the Excalidraw v2 specification, accompanied by an integrated library of 499+ official icons.

### A. Invocation Methods Across Environments

1. **In Oh My Pi (Current Harness):**
   - Write JSON arguments directly to device endpoints via the `write` tool:
     - Canvas management: `xd://mcp__excalidraw_clear_canvas`
     - Create single element: `xd://mcp__excalidraw_create_element`
     - Create batch elements: `xd://mcp__excalidraw_create_elements_batch`
     - Auto-layout flowchart: `xd://mcp__excalidraw_create_flowchart`
     - Icon management: `xd://mcp__excalidraw_list_library_items` & `xd://mcp__excalidraw_insert_library_item`
     - Update / Delete: `xd://mcp__excalidraw_update_element`, `xd://mcp__excalidraw_delete_element`
     - Query / Inspect: `xd://mcp__excalidraw_query_elements`, `xd://mcp__excalidraw_get_scene_json`
     - File operations: `xd://mcp__excalidraw_export_file`, `xd://mcp__excalidraw_import_file`
2. **In Claude Desktop / Cursor / Cline / Roo Code:**
   - Call standard MCP tools directly: `clear_canvas`, `create_elements_batch`, `insert_library_item`, `export_file`... with JSON object parameters.

---

### B. Quick Lookup for All 12 MCP Tools

| Tool Name | Core Purpose | Key Parameters |
|---|---|---|
| `clear_canvas` | Wipes the canvas clean before starting a new diagram session | `{}` |
| `list_library_items` | Search 499+ official icons by keyword or library | `query`, `library`, `category`, `limit` |
| `insert_library_item` | Insert an icon onto canvas at coordinate $(x, y)$ with optional scale | `itemId` (required), `x`, `y`, `scale`, `library` |
| `create_elements_batch` | **[Most Important]** Batch-create containers, cards, text, lines, and arrows in a single call | `elements: Array<Element>` |
| `create_flowchart` | Generate a flowchart with DagreJS auto-layout to prevent overlapping nodes | `graphSpec`, `rankdir` (`LR`/`TB`/`BT`/`RL`), `startX`, `startY`, `strokeColor`, `backgroundColor`, `nodeType` |
| `create_element` | Create a single standalone element (prefer batch creation for performance) | `type`, `x`, `y`, `width`, `height`, `text`, ... |
| `update_element` | Update properties of an existing element by ID without recreating it | `id` (required), `x`, `y`, `width`, `height`, `strokeColor`, `backgroundColor`, `text`, ... |
| `delete_element` | Delete an element by ID | `id` (required) |
| `query_elements` | Search and filter existing canvas elements by type or properties | `type`, `filter` |
| `export_file` | **[Mandatory Final Step]** Export the entire canvas to an `.excalidraw` file | `filePath` (e.g., `architecture.excalidraw`) |
| `import_file` | Load an existing `.excalidraw` file into memory for editing or inspection | `filePath` |
| `get_scene_json` | Retrieve the full valid Excalidraw JSON string of the current scene | `{}` |

---

### C. Official Icon Libraries Catalog (499+ Icons)

Leverage pre-built official icons rather than manually drawing complex shapes:

1. **`aws-architecture-icons` (249 icons):**
   - Popular: `dynamodb`, `s3`, `ec2`, `lambda`, `rds`, `vpc`, `kinesis`, `sqs`, `sns`, `api-gateway`, `cloudwatch`, `iam`, `ecs`, `eks`, `elasticache`, `route-53`.
2. **`google-icons` (139 icons):**
   - Popular: `anthos`, `bigquery`, `compute-engine`, `cloud-run`, `gke`, `firestore`, `cloud-functions`, `cloud-storage`, `pub-sub`, `cloud-sql`, `vertex-ai`.
3. **`system-design-components` (24 items):**
   - Popular: `application-server`, `multi-instance-server`, `load-balancer`, `cache`, `database-primary`, `database-replica`, `message-broker`.
4. **`uml-er-diagrams` (21 items):**
   - UML building blocks: `entity`, `weak-entity`, `relationship`, `diamond`, `cylinder-db`.
5. **`software-logos` (18 icons):**
   - Tech brands: `docker`, `git`, `json`, `database`, `python`, `java`, `redis`, `kafka`.
6. **`architecture-diagram-components` (11 components):**
   - `slack`, `github`, `vpc`, `subnets`, `docker`, `kubernetes`.
7. **`software-architecture` (7 core components):**
   - Standard architectural model blocks.
8. **`robots` (7 items):**
   - Expressive Robot/AI Agent illustrations for agentic workflows.
9. **`built-in` (23 items):**
   - Native common icons: `server`, `database`, `user`, `cloud`, `browser`, `mobile`, `lock`, `gear`.

*Quick Lookup & Insertion Workflow:*
```json
// 1. Search icon:
{ "query": "redis" }
// Returns itemId, e.g.: "software-logos:redis"

// 2. Insert at x=300, y=200 with scale 1.2:
{
  "itemId": "software-logos:redis",
  "x": 300,
  "y": 200,
  "scale": 1.2
}
```

---

### D. Ready-to-Use JSON Payloads

#### 1. Clear Canvas Before New Diagram (`clear_canvas`)
```json
{}
```

#### 2. Create Master Container & Header Tab with `create_elements_batch`
```json
{
  "elements": [
    {
      "id": "container_frontend",
      "type": "rectangle",
      "x": 100,
      "y": 140,
      "width": 420,
      "height": 520,
      "strokeColor": "#3B82F6",
      "backgroundColor": "#EFF6FF",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "roundness": { "type": 3 }
    },
    {
      "id": "tab_frontend",
      "type": "rectangle",
      "x": 120,
      "y": 124,
      "width": 160,
      "height": 32,
      "strokeColor": "#2563EB",
      "backgroundColor": "#DBEAFE",
      "fillStyle": "solid",
      "roundness": { "type": 3 }
    },
    {
      "type": "text",
      "x": 140,
      "y": 130,
      "text": "Web Frontend",
      "fontSize": 14,
      "fontFamily": 2,
      "strokeColor": "#1E40AF"
    }
  ]
}
```

#### 3. Create 3-Part Microservice Card with `create_elements_batch`
```json
{
  "elements": [
    {
      "id": "svc_message",
      "type": "rectangle",
      "x": 280,
      "y": 320,
      "width": 170,
      "height": 180,
      "strokeColor": "#10B981",
      "backgroundColor": "#FFFFFF",
      "fillStyle": "solid",
      "roundness": { "type": 3 },
      "strokeWidth": 1.5
    },
    {
      "type": "text",
      "x": 295,
      "y": 335,
      "text": "Message Service",
      "fontSize": 13,
      "fontFamily": 2,
      "strokeColor": "#065F46"
    },
    {
      "type": "line",
      "x": 290,
      "y": 360,
      "width": 150,
      "height": 0,
      "points": [[0, 0], [150, 0]],
      "strokeColor": "#E2E8F0",
      "strokeWidth": 1
    },
    {
      "type": "text",
      "x": 295,
      "y": 375,
      "text": "• Receive Message\n• Stream Response\n• Message Status",
      "fontSize": 11,
      "fontFamily": 2,
      "strokeColor": "#475569",
      "lineHeight": 1.4
    }
  ]
}
```

#### 4. Draw Connector Arrow with Numbered Step Badge with `create_elements_batch`
```json
{
  "elements": [
    {
      "type": "arrow",
      "x": 450,
      "y": 410,
      "width": 80,
      "height": 0,
      "points": [[0, 0], [80, 0]],
      "strokeColor": "#64748B",
      "strokeWidth": 2,
      "endArrowhead": "arrow"
    },
    {
      "type": "ellipse",
      "x": 478,
      "y": 398,
      "width": 24,
      "height": 24,
      "backgroundColor": "#EA580C",
      "strokeColor": "#EA580C",
      "fillStyle": "solid"
    },
    {
      "type": "text",
      "x": 486,
      "y": 402,
      "text": "2",
      "fontSize": 12,
      "fontFamily": 2,
      "strokeColor": "#FFFFFF"
    }
  ]
}
```

#### 5. Generate Flowchart with DagreJS Auto-Layout (`create_flowchart`)
```json
{
  "graphSpec": "Client --> API_Gateway --> Auth_Service\nAPI_Gateway --> Message_Service --> Task_Queue --> Worker\nWorker --> Database",
  "rankdir": "LR",
  "startX": 100,
  "startY": 200,
  "strokeColor": "#2563EB",
  "backgroundColor": "#EFF6FF",
  "nodeType": "rectangle"
}
```
*Supported rankdir directions:* `LR` (left to right), `TB` (top to bottom), `BT` (bottom to top), `RL` (right to left).

#### 6. Inspect & Incrementally Update Elements (`query_elements`, `update_element`)
```json
// Query elements by filter
query_elements({ filter: { type: "rectangle" } })

// Update element properties without redrawing
update_element({
  "id": "mybox1",
  "strokeColor": "#099268",
  "backgroundColor": "#E6FCF5",
  "text": "Updated Service Label",
  "width": 200
})
```
**Updatable fields:** `type`, `x`, `y`, `width`, `height`, `strokeColor`, `backgroundColor`, `text`, `fontSize`, `fontFamily`, `strokeStyle`, `fillStyle`, `roughness`, `opacity`, `textAlign`, etc.

#### 7. Export Completed Scene (`export_file`)
```json
{
  "filePath": "architecture-diagram.excalidraw"
}
```

---

## 8. The 7-Step Implementation Workflow

When tasked with generating any diagram:

1. **Step 1: Identify Archetype & Grid Structure:**
   - Symmetrical tech roadmap? -> **Archetype A** (Central Spine 2 Columns).
   - Multi-layer iterative engine / deep dive? -> **Archetype B** (4-Quadrant Matrix).
   - Research taxonomy / paper architecture? -> **Archetype C** (Horizontal Rows + Micro-diagrams).
   - Sequential end-to-end data pipeline? -> **Archetype D** (Enterprise Pipeline).
   - Comprehensive multi-tier platform architecture? -> **Archetype E** (Numbered Multi-Tier Platform).
   - Parallel maturity or deployment comparison? -> **Archetype F** (Horizontal Multi-Track Pipeline).
   - Codebase structure & Before-vs-Now evolution? -> **Archetype G** (Tree-Mapping & Split-Screen).

2. **Step 2: Spatial Math & Coordinate Planning:**
   - Pre-compute X, Y, Width, Height bounds logically before calling tools:
     - Master Frame Width: `1200 - 1800px`, Height: `800 - 1400px`.
     - Node spacing: Minimum **60px – 100px** apart.
     - Gutters: Major cards separated by `40 - 60px`; internal sub-cards by `16 - 24px`.
     - Internal padding inside boundary containers: Minimum **30px**.

3. **Step 3: Query Icon Libraries:**
   - Call `list_library_items` with relevant keywords (`database`, `server`, `cloud`, `react`, `docker`, `robot`, `user`, `brain`, `message`, `git`, `kubernetes`...).
   - Capture matching item IDs for placement.

4. **Step 4: Draw Containers & Header Tabs (Batch 1):**
   - Execute `create_elements_batch` to lay down outer frames, header pills, and nested sub-cards to establish the visual skeleton.

5. **Step 5: Insert Nodes, Icons & Micro-diagrams (Batch 2):**
   - Position components into their respective sub-cards.
   - Call `insert_library_item` or draw geometric visual cues (cluster nodes, funnels, cylinders, chat bubbles, braces).
   - Insert hierarchical typography (Bold titles, bullet points, captions).

6. **Step 6: Route Connectors & Step Badges (Batch 3):**
   - Draw connector lines and arrows (`arrow`).
   - Assign `strokeStyle: "solid"` for forward paths and `strokeStyle: "dashed"` for feedback/retry loops.
   - Attach step badges `①, ②, ③` with action verbs (`Compose`, `Send`, `Inference`, `Verify`).

7. **Step 7: Quality Gate Checklist & Export:**
   - *Checklist:*
     - [ ] Clear master title and explanatory subtitle?
     - [ ] Sibling components aligned with uniform dimensions?
     - [ ] Soft pastel containers with crisp white elevated inner cards?
     - [ ] Rich visual tokens (icons, badges, micro-diagrams) instead of text-only boxes?
     - [ ] Clean connector routing with zero diagonal collisions?
     - [ ] Numbered sequence indicators along data paths?
     - [ ] Concluding takeaway quote or architectural value banner?
   - Complete by invoking `export_file` to save the `.excalidraw` file.

---

## 9. 6 Golden Rules When Using `excalidraw-mcp`

1. **Always start with `clear_canvas`:** When initiating a new diagram, invoke `clear_canvas` first to prevent residual elements from corrupting the new canvas.
2. **Prioritize `create_elements_batch`:** Batch all containers, cards, lines, and text into 1–2 calls. Never invoke `create_element` 30–40 times sequentially—it wastes context tokens and degrades speed.
3. **Query Icons via `list_library_items` First:** When diagramming real-world technologies (Redis, Docker, Postgres, AWS, K8s), search for the exact `itemId` and place them using `insert_library_item` to maximize diagram authority.
4. **Relative Coordinates for Line/Arrow Points:**
   - Origin point is always `[0, 0]` at element position `(x, y)`.
   - Endpoint is `[dx, dy]`, where $dx = x_{end} - x$, $dy = y_{end} - y$.
5. **Use `update_element` & `query_elements` for Iterations:** When refining a diagram or fixing small details, query elements or update specific attributes instead of redrawing the entire scene from scratch.
6. **Always finish with `export_file`:** After completing and validating the diagram, export the file to `.excalidraw` and return the file path so the user can open it directly on [excalidraw.com](https://excalidraw.com) or via the VS Code/Cursor Excalidraw extension.

---
*Architect's Note for Agents:* Always remember that an exceptional diagram communicates its high-level architectural intent within the first 5 seconds through balanced zoning, semantic pastel coloring, and visual icons, while inviting the viewer to dive into rich details without visual friction.
