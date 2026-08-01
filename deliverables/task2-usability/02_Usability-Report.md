# Task 2 — Usability Report

> Yêu cầu đề §6 Task 2 Giai đoạn 3: báo cáo gồm **kịch bản · bảng 5 người tham gia (đã che) · bảng chỉ số · danh sách phát hiện đã xếp hạng kèm ảnh · khuyến nghị theo ưu tiên**.

**Sinh viên:** *(MSSV – Họ tên)* · **Kịch bản:** *(A/B/C/D)* · **Ngày chạy:** *(…)*

---

## 1. Tóm tắt điều hành

*(3–5 câu: đã test gì, với ai, kết quả nổi bật nhất, khuyến nghị số 1.)*

| Chỉ số tổng quan | Giá trị |
|---|---|
| Số người tham gia | 5 |
| Tỉ lệ hoàn thành tác vụ | |
| Thời gian trung bình | |
| Điểm SUS trung bình | |
| Số phát hiện severity ≥ 3 | |

## 2. Kịch bản tác vụ đã dùng

*(Chép từ `01_Test-Plan-and-Kit.md` §3.)*

## 3. Người tham gia

*(Chép bảng đã che liên hệ từ `01_Test-Plan-and-Kit.md` §10.)*

## 4. Bảng chỉ số

### 4.1 Theo từng người

| Người | Kết quả | Time on task | Số lỗi | Số lần do dự | Can thiệp | SUS |
|---|---|---|---|---|---|---|
| P1 | | | | | | |
| P2 | | | | | | |
| P3 | | | | | | |
| P4 | | | | | | |
| P5 | | | | | | |

### 4.2 Tổng hợp *(theo mẫu "Summarizing performance results" — S13)*

| Chỉ số | Giá trị |
|---|---|
| % hoàn thành | |
| % hoàn thành trong thời gian benchmark | |
| % hoàn thành có can thiệp | |
| Thời gian trung bình (mean) | |
| Thời gian trung vị (median) | |
| Khoảng (min–max) | |
| Độ lệch chuẩn | |
| Số lỗi trung bình | |
| **SUS trung bình** | |

### 4.3 Chi tiết chấm SUS

| Câu | P1 | P2 | P3 | P4 | P5 |
|---|---|---|---|---|---|
| 1 | | | | | |
| … | | | | | |
| **Tổng thô (0–40)** | | | | | |
| **× 2.5 → SUS** | | | | | |

## 5. Phát hiện đã xếp hạng

> Đề §6: gom điểm đau tương tự, **tách lỗi đơn lẻ khỏi vấn đề thiết kế hệ thống**, xếp hạng severity 0–4.
> S13 (tr.51) bổ sung: *criticality = severity **AND** probability of occurrence* → giữ thêm cột `Gặp phải`.

| ID | Phát hiện | Màn hình | Heuristic vi phạm | Gặp phải | Loại | **Severity** | Ảnh |
|---|---|---|---|---|---|---|---|
| U-01 | | | | __/5 | Hệ thống / Đơn lẻ | | `evidence/task2/` |
| U-02 | | | | __/5 | | | |

**Quy tắc phân loại:** ≥ 3/5 người gặp cùng một chỗ → **vấn đề thiết kế hệ thống**; 1/5 → cân nhắc là **trường hợp đơn lẻ**.

### Chi tiết từng phát hiện

#### U-01 — *(tiêu đề)*

- **Quan sát được ở:** P_, P_, P_
- **Điều gì xảy ra:**
- **Trích dẫn người dùng:** *"…"*
- **Heuristic vi phạm:**
- **Severity:** _ — *lý do chấm mức này (frequency / impact / persistence)*
- **Ảnh:** `evidence/task2/…`

## 6. Khuyến nghị theo ưu tiên

| # | Khuyến nghị | Giải quyết phát hiện | Mức ưu tiên | Ước lượng công sức |
|---|---|---|---|---|
| 1 | | U-0_ | Cao | |
| 2 | | | | |

## 7. Đối chiếu với Task 1B

> Phân tích so sánh — phần này thể hiện năng lực **G9.3 (Analyse)**.

| | Số phát hiện |
|---|---|
| Checklist bắt được **và** user cũng vấp | |
| Checklist bắt được nhưng user **không** bận tâm | |
| Checklist **không** phủ nhưng user vấp ngay | |

**Nhận xét:** *(Vì sao có khoảng chênh này? Cần bổ sung mục nào vào checklist nhóm?)*

## 8. Hạn chế của nghiên cứu

*(Cỡ mẫu 5, môi trường không phải phòng lab, dữ liệu EMS bị reset, thiên lệch người quen…)*
