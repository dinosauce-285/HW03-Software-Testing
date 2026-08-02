# HW03 — GUI & Usability Testing trên EMS

**Sinh viên:** 23127262 – Lý Quốc Thạnh · **Kịch bản:** **C — Admin quản lý người dùng** · **Repo:** https://github.com/dinosauce-285/HW03-Software-Testing

**3 màn hình:** C1 Users Management `/dashboard/admin/users` · C2 dialog *Edit User* · C3 dialog *Create New User*

> Quy trình làm việc và các quy tắc bắt buộc: xem [`CLAUDE.md`](CLAUDE.md)

---

## Cấu trúc

```
hw03/
├── CLAUDE.md        quy trình làm việc xuyên suốt (đọc đầu mỗi phiên)
│
├── docs/            tài liệu đề bài & SUT — CHỈ ĐỌC
│   ├── 2026.HW03.GUI Usability EMS_Vi.md        đề bài chính thức
│   ├── ___2026.Homework.Policies.md             chính sách môn học
│   ├── HW03_EMS_Intro_EN.pdf                    slide giới thiệu
│   └── Kịch-bản-E2E-Test-Flow-Luồng-Admin.docx  mô tả chức năng EMS
│
├── references/      nguồn tham khảo
│   ├── S13_GUI Testing & Usability Testing.pdf
│   └── Task1A_Heuristics-Reference.md    Nielsen · Norman · Shneiderman · SUS · severity · compat
│
├── deliverables/    bài làm
│   ├── task1a-checklist/     GUI-Checklist.md (74 mục) · AI-Prompts-Nhom.md · AI-Prompts-Log.md
│   ├── task1b-execution/     Checklist-Execution.md
│   ├── task2-usability/      01_Test-Plan-and-Kit.md · 02_Usability-Report.md
│   ├── task3-crossplatform/  Compatibility-Matrix.md
│   ├── findings/             Findings-Log.md
│   └── appendix/             AI-Audit-Report · AI-Critique · Peer-Review · Git-Commit-Log
│
└── evidence/        ảnh chụp — task1b/ (chỉ mục Failed) · task2/ · task3/ (overlay MSSV)
```

---

## Trạng thái

| # | Hạng mục | Điểm | Trạng thái |
|---|---|---|---|
| 1a | Task 1A — Checklist dùng chung *(nhóm)* | 15 | ✅ **74 mục**, đã đối chiếu EMS thật 01/08/2026 — chờ nhóm chốt |
| 1b | Task 1B — Chạy checklist ≥3 màn hình | 15 | 🟡 Đã chốt C1/C2/C3 + có 5 ảnh bằng chứng, **1 lỗi đã ghi log** — chưa chạy đủ 74 mục |
| 2 | Task 2 — User testing 5 người | 25 | ⬜ Mẫu đã sẵn sàng |
| 3 | Task 3 — Cross-browser / platform | 25 | 🟡 **21/21 ô**, 18 Pass / 3 Fail — 4 ô chờ sinh viên verify |
| 4 | Findings (Form + log tổng hợp) | 10 | 🟡 3 phát hiện đã ghi log — **chưa nộp Google Form** |
| 5 | Agent Skill + video demo | 10 | ⬜ Chưa bắt đầu |
| — | Phụ lục *(AI Audit · AI Critique · Peer Review · Git log)* | bắt buộc | ⬜ Mẫu đã sẵn sàng |

---

## Test summary *(điền khi hoàn tất — đề §15)*

| Chỉ số | Giá trị |
|---|---|
| Kịch bản đã chọn | C — Admin quản lý người dùng |
| Màn hình đã kiểm | C1 Users Management · C2 Edit User · C3 Create New User |
| Số mục checklist thiết kế | 74 |
| Số mục đã chạy / Passed / Failed | |
| Số lỗi phát hiện | |
| Số người tham gia user-testing | 5 |
| Số vấn đề usability theo severity (4/3/2/1) | |
| Số ô tương thích đã phủ | **21** (7 tổ hợp × 3 màn hình) |
| Link video demo Agent Skill | |

## Bảng tự đánh giá *(đề §16)*

| # | Tiêu chí | Điểm tối đa | Tự đánh giá |
|---|---|---|---|
| 1a | Checklist dùng chung (>40 mục, IA-01…IA-04) + nguồn + prompt AI | 15 | |
| 1b | Chạy checklist ≥3 màn hình + bug report | 15 | |
| 2 | User testing 5 người → Usability Report | 25 | |
| 3 | Ma trận cross-browser / cross-platform | 25 | |
| 4 | Nộp findings (Google Form) + log tổng hợp | 10 | |
| 5 | Agent Skill | 10 | |
| | **Tổng** | **100** | |

---

## Việc cần làm ngay

1. **Tuyển 5 người tham gia Task 2** — phần duy nhất phụ thuộc người khác, không nén lại được. Bắt đầu càng sớm càng tốt.
2. **Chạy 74 mục checklist trên C1/C2/C3** (Task 1B) — không phụ thuộc ai, EMS đang chạy.
3. **Chấm Pass/Fail cho 4 ô còn trống** trong ma trận Task 3 — mở ảnh trong `evidence/task3/` và tự đánh giá.
4. **Nộp 2 findings đã có lên Google Form** — đề §7 bắt buộc báo cáo hai lần, log và form phải khớp số lượng.
5. **Gửi nhóm 4 file Task 1A** — xem `task1a-checklist/Huong-dan-cho-nhom.md`.
