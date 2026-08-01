# HW03 — GUI & Usability Testing trên EMS

**Sinh viên:** 23127262 – Lý Quốc Thạnh · **Kịch bản:** **C — Admin quản lý người dùng** · **Repo:** https://github.com/dinosauce-285/HW03-Software-Testing

**3 màn hình:** C1 Danh sách Users · C2 Assign Role / sửa user · C3 Dialog Block-Unblock + Reset Password

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
│   ├── task1a-checklist/     GUI-Checklist.md (68 mục) · AI-Prompts-Log.md
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
| 3 | Task 3 — Cross-browser / platform | 25 | ⬜ Mẫu đã sẵn sàng |
| 4 | Findings (Form + log tổng hợp) | 10 | ⬜ Mẫu đã sẵn sàng |
| 5 | Agent Skill + video demo | 10 | ⬜ Chưa bắt đầu |
| — | Phụ lục *(AI Audit · AI Critique · Peer Review · Git log)* | bắt buộc | ⬜ Mẫu đã sẵn sàng |

---

## Test summary *(điền khi hoàn tất — đề §15)*

| Chỉ số | Giá trị |
|---|---|
| Kịch bản đã chọn | |
| Màn hình đã kiểm | |
| Số mục checklist thiết kế | 68 |
| Số mục đã chạy / Passed / Failed | |
| Số lỗi phát hiện | |
| Số người tham gia user-testing | 5 |
| Số vấn đề usability theo severity (4/3/2/1) | |
| Số ô tương thích đã phủ | |
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

1. **Điền §0 của [`CLAUDE.md`](CLAUDE.md)** — MSSV, họ tên, kịch bản, 3 màn hình.
2. **Chốt kịch bản + 3 màn hình** — Task 1B, 2, 3 đều làm trên cùng bộ này. Lưu ý chính sách: màn hình quá đơn giản sẽ **giới hạn điểm tối đa**.
3. **Nhóm review checklist** trên EMS thật — xem §3 của `task1a-checklist/AI-Prompts-Log.md`.
4. **Tuyển 5 người tham gia sớm** — Task 2 là phần duy nhất không thể làm bù vào phút chót.
5. **Đăng ký trial BrowserStack/LambdaTest sớm** — đề ghi rõ tự chịu trách nhiệm xin quyền trial.
