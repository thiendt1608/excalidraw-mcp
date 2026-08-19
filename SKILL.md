# Excalidraw Diagramming Skill & Agent Guide

> **Mục đích:** Hướng dẫn AI Agent / LLM cách sử dụng bộ MCP Tool của Excalidraw để thiết kế kiến trúc hệ thống, flowchart, sequence diagram đẹp mắt, chuẩn tỉ lệ và tận dụng tối đa 499+ official icons có sẵn.

---

## 🧭 1. Workflow Chuẩn Khi Vẽ Diagram

Mỗi khi người dùng yêu cầu vẽ diagram, Agent nên tuân theo quy trình 4 bước:

```
[Hiểu yêu cầu kiến trúc] 
        ↓
[Bước 1: Tìm kiếm Icon cần dùng] ──> list_library_items({ query: "..." })
        ↓
[Bước 2: Xây khung / Auto-layout] ──> create_flowchart(...) hoặc tự tính toạ độ
        ↓
[Bước 3: Chèn Icon & Polish chi tiết] ──> insert_library_item(...) + create_elements_batch(...)
        ↓
[Bước 4: Xuất file] ──> export_file({ filePath: "docs/architecture.excalidraw" })
```

---

## 🛠️ 2. Hướng Dẫn Sử Dụng Chi Tiết Từng Tool

### A. Tìm & Lấy Icon (`list_library_items`)
Khi cần vẽ icon đặc thù (AWS, Google Cloud, Docker, Database, K8s, UML...), **luôn gọi `list_library_items` trước** để tìm ID chính xác.

```json
// Tìm icon theo từ khoá:
{ "query": "dynamodb" }
{ "query": "docker" }
{ "query": "anthos" }
{ "query": "postgres" }

// Hoặc duyệt theo thư viện:
{ "library": "aws-architecture-icons", "limit": 20 }
{ "library": "google-icons", "limit": 20 }
{ "library": "system-design-components" }
{ "library": "uml-er-diagrams" }
```

### B. Chèn Icon Vào Canvas (`insert_library_item`)
Chèn icon vào đúng vị trí $(x, y)$ và scale kích thước:

```json
// Chèn icon AWS DynamoDB
{
  "itemId": "aws-architecture-icons:dynamodb",
  "x": 400,
  "y": 200,
  "scale": 1.2
}

// Chèn icon Google Anthos
{
  "itemId": "google-icons:anthos",
  "x": 200,
  "y": 200,
  "scale": 1.0
}

// Chèn logo Docker
{
  "itemId": "architecture-diagram-components:docker",
  "x": 100,
  "y": 100
}
```

### C. Tạo Flowchart / Graph Nhanh Với Auto-Layout (`create_flowchart`)
Nếu sơ đồ có nhiều luồng kết nối phức tạp, hãy dùng `create_flowchart` để engine DagreJS tự động căn chỉnh toạ độ, tránh đè node:

```json
{
  "graphSpec": "User --> Cloudflare --> API_Gateway --> Auth_Service --> Postgres\nAPI_Gateway --> Order_Service --> Kafka --> Notification_Service",
  "rankdir": "LR",
  "startX": 100,
  "startY": 150,
  "strokeColor": "#1971c2",
  "backgroundColor": "#e8f4fd",
  "nodeType": "rectangle"
}
```
*Hướng rankdir hỗ trợ:* `LR` (trái qua phải), `TB` (trên xuống dưới), `BT` (dưới lên trên), `RL` (phải qua trái).

### D. Vẽ Shapes & Mũi Tên Tuỳ Biến (`create_elements_batch`)
Dùng khi muốn vẽ box bao ngoài (Subnet, VPC, Boundary) hoặc mũi tên kết nối tuỳ chỉnh:

```json
{
  "elements": [
    {
      "type": "rectangle",
      "x": 50,
      "y": 50,
      "width": 600,
      "height": 400,
      "strokeColor": "#868e96",
      "backgroundColor": "#f8f9fa",
      "fillStyle": "solid",
      "strokeStyle": "dashed",
      "roughness": 0
    },
    {
      "type": "text",
      "x": 70,
      "y": 65,
      "text": "VPC (10.0.0.0/16)",
      "fontSize": 14,
      "fontFamily": 2,
      "strokeColor": "#495057"
    }
  ]
}
```

### E. Xuất File (`export_file`)
Luôn kết thúc bằng việc export ra file `.excalidraw` theo yêu cầu của user hoặc đường dẫn mặc định:
```json
{
  "filePath": "architecture.excalidraw"
}
```

---

## 🎨 3. Quy Chuẩn Thẩm Mỹ & Layout (Design Best Practices)

1. **Khoảng cách (Spacing):**
   - Node cách nhau tối thiểu **60px – 100px**.
   - Padding bên trong boundary box tối thiểu **30px**.

2. **Bảng màu Excalidraw khuyến nghị (Clean & Modern):**
   - **Xanh dương (Frontend/Gateway):** Nền `#e8f4fd`, Viền `#1971c2`
   - **Xanh lá (Services/Active):** Nền `#e6fcf5`, Viền `#099268`
   - **Vàng/Cam (Queue/Events/AWS):** Nền `#fff9db`, Viền `#f08c00`
   - **Tím (Database/Cache):** Nền `#f3f0ff`, Viền `#845ef7`
   - **Xám (Boundary/Group/VPC):** Nền `#f8f9fa`, Viền `#ced4da` (nét đứt `dashed`)

3. **Typography:**
   - Tiêu đề nhóm / Boundary: `fontSize: 16`, `fontFamily: 2` (Helvetica).
   - Label node: `fontSize: 14`, `fontFamily: 2`.
   - Chú thích phụ: `fontSize: 11-12`, `fontFamily: 2`.

4. **Stroke & Roughness:**
   - Diagram kỹ thuật / Architecture: set `roughness: 0` để nét vẽ thẳng thắn, chuyên nghiệp.
   - Mindmap / Brainstorm: set `roughness: 1` hoặc `2` để tạo phong cách vẽ tay sketch tự nhiên.
