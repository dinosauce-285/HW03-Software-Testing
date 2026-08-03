# HW03 — GUI & Usability Testing trên EMS

**Sinh viên:** 23127262 – Lý Quốc Thạnh · **Kịch bản:** **C — Admin quản lý người dùng** · **Repo:** https://github.com/dinosauce-285/HW03-Software-Testing

**3 màn hình:** C1 Users Management `/dashboard/admin/users` · C2 dialog *Edit User* · C3 dialog *Create New User*

> Quy trình làm việc: [`CLAUDE.md`](CLAUDE.md) · Checklist nộp bài đầy đủ: [`SUBMISSION-CHECKLIST.md`](SUBMISSION-CHECKLIST.md)

---

## Cấu trúc

```
hw03/
├── CLAUDE.md        quy trình làm việc xuyên suốt (đọc đầu mỗi phiên)
├── SUBMISSION-CHECKLIST.md   đối chiếu toàn bộ yêu cầu đề + policy
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
│   ├── task1a-checklist/     GUI-Checklist.md (88 mục) · AI-Prompts-Nhom.md · AI-Prompts-Log.md
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
| 1a | Task 1A — Checklist dùng chung *(nhóm)* | 15 | ✅ **88 mục** — nhóm đã review, kiểm chứng Pool A/C/D trên EMS thật |
| 1b | Task 1B — Chạy checklist ≥3 màn hình | 15 | ✅ **Xong** — 264 ô *(63 P · 25 F · 176 N/A)* · 24 ảnh · §4 bug report 10 lỗi · §5 ba mục bổ sung |
| 2 | Task 2 — User testing 5 người | 25 | 🟡 **Usability Report xong** — 5 phiên · SUS TB 77,0 · 5 phát hiện xếp hạng. Còn 3 câu probe hỏi bù |
| 3 | Task 3 — Cross-browser / platform | 25 | ✅ **Xong** — 21/21 ô, 18 Pass / 3 Fail, 21 ảnh có overlay |
| 4 | Findings (Form + log tổng hợp) | 10 | ✅ **Xong** — 15 phát hiện, log đủ 9 cột, **15/15 đã nộp form** 04/08/2026 |
| 5 | Agent Skill + video demo | 10 | ⬜ Chưa bắt đầu |
| — | Phụ lục *(AI Audit · AI Critique · Peer Review · Git log)* | bắt buộc | ⬜ Mẫu đã sẵn sàng |

---

## Test summary *(điền khi hoàn tất — đề §15)*

| Chỉ số | Giá trị |
|---|---|
| Kịch bản đã chọn | C — Admin quản lý người dùng |
| Màn hình đã kiểm | C1 Users Management · C2 Edit User · C3 Create New User |
| Số mục checklist thiết kế | 88 |
| Số mục đã chạy / Passed / Failed | **264** / 63 / 25 *(176 N/A)* — tỉ lệ pass **71,6 %** |
| Số lỗi phát hiện | **15** — 10 từ Task 1B · 3 từ Task 2 · 2 từ Task 3 *(4 `Bug` · 11 `Usability`)* |
| Số người tham gia user-testing | **5** — SUS trung bình **77,0** *(trung vị 72,5 · sd 11,0)* |
| Số vấn đề usability theo severity (4/3/2/1) | **0 / 7 / 7 / 1** |
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

1. **Nhắn 5 người tham gia** 3 câu probe còn thiếu *(error recovery · speed · trust)* — mẫu tin nhắn ở [`06_Thu-thap-bo-sung.md`](deliverables/task2-usability/06_Thu-thap-bo-sung.md). Phần duy nhất phụ thuộc người khác.
2. **Điền bảng tự đánh giá** ở README *(đề §16)* — hiện còn trống.
3. **Agent Skill + video demo** (10đ) — chưa bắt đầu, là phần thiếu lớn nhất.
4. **AI Critique 200–300 chữ** và **xuất git log** ra file văn bản.
5. **Gửi nhóm 4 file Task 1A** — xem [`Huong-dan-cho-nhom.md`](deliverables/task1a-checklist/Huong-dan-cho-nhom.md).

Đối chiếu đầy đủ mọi yêu cầu: [`SUBMISSION-CHECKLIST.md`](SUBMISSION-CHECKLIST.md)
