# HW03 — GUI & Usability Testing trên EMS

**Sinh viên:** 23127262 – Lý Quốc Thạnh · **Email:** `23127262@student.hcmus.edu.vn`
**Kịch bản:** **C — Admin quản lý người dùng**
**3 màn hình:** C1 Users Management `/dashboard/admin/users` · C2 dialog *Edit User* · C3 dialog *Create New User*
**Hệ thống kiểm thử:** `https://prod-dev.ems-fitus.cloud`

> **Bắt đầu đọc từ [`00-main-report.md`](00-main-report.md).**

---

## Cấu trúc thư mục nộp

Mỗi nội dung **chỉ nằm ở đúng một file**; các file khác dẫn chiếu chứ không chép lại.

```
├── README.md                          test summary + bảng tự đánh giá  ← file này
├── 00-main-report.md                kịch bản · 3 màn hình và lý do · tóm tắt cả 3 task
├── 01-checklist-execution.md     264 ô · bug report 10 lỗi · 3 mục checklist tự bổ sung
├── 02-usability-report.md       user testing 5 người · chỉ số · phát hiện · khuyến nghị
├── 03-compatibility-matrix.md    ma trận 21 ô cross-browser / cross-platform
├── 04-findings-log.md   15 phát hiện, khớp 15 submission Google Form
│
├── appendix/
│   ├── a1-session-notes.md             lời thoại · đáp án · ghi chép 5 phiên
│   ├── a2-sus-scoring.md               10 câu × 5 người, quy đổi, phân tích từng câu
│   ├── a3-ai-audit-report.md           nhật ký mọi tương tác AI
│   ├── a4-ai-critique.md               AI sai/thiên lệch ở đâu (291 chữ)
│   └── git-log.txt                     lịch sử commit dạng văn bản
│
├── team/                               sản phẩm cấp nhóm
│   ├── gui-checklist.md                88 mục, phủ IA-01…IA-04
│   ├── references.md                   Nielsen · Norman · Shneiderman · SUS · severity
│   └── ai-prompts.md                   prompt dùng để xây checklist
│
├── skill/                              Agent Skill (đề §8)
│   ├── SKILL.md                        hướng dẫn dùng skill
│   ├── scripts/audit.js                chạy checklist đo được trên 1 màn hình
│   ├── scripts/matrix.js               chụp ảnh ma trận tương thích có overlay
│   └── reference/checks.md             ánh xạ mục checklist ↔ phép đo ↔ giới hạn
│
└── evidence/
    ├── task1b/                         24 ảnh — chỉ cho mục Failed
    ├── task2/                          5 bản gỡ băng phiên user testing
    └── task3/                          21 ảnh — mỗi ô ma trận một ảnh, có overlay MSSV
```

---

## Test summary *(đề §15)*

| Chỉ số | Giá trị |
|---|---|
| Kịch bản đã chọn | **C — Admin quản lý người dùng** |
| Màn hình đã kiểm | C1 Users Management · C2 dialog Edit User · C3 dialog Create New User |
| Số mục checklist thiết kế | **88** *(nhóm)* + **3** *(tự bổ sung)* |
| Số ô đã chạy / Passed / Failed | **264** / 63 / 25 *(176 N/A)* — tỉ lệ pass **71,6 %** |
| Số lỗi phát hiện | **15** — 10 từ Task 1B · 3 từ Task 2 · 2 từ Task 3 *(4 `Bug` · 11 `Usability`)* |
| Số người tham gia user-testing | **5** — SUS trung bình **77,0** *(trung vị 72,5 · sd 11,0)* |
| Số vấn đề usability theo severity *(4/3/2/1)* | **0 / 6 / 8 / 1** |
| Số ô tương thích đã phủ | **21** *(7 tổ hợp × 3 màn hình)* — 18 Pass / 3 Fail |
| Findings đã nộp Google Form | **15 / 15** — 04/08/2026 |
| Link video demo Agent Skill | *(điền sau khi up YouTube)* |

---

## Bảng tự đánh giá *(đề §16)*

| # | Tiêu chí | Điểm tối đa | Tự đánh giá |
|---|---|---|---|
| 1a | Checklist dùng chung (>40 mục, IA-01…IA-04) + nguồn + prompt AI | 15 | **15** |
| 1b | Chạy checklist ≥3 màn hình + bug report | 15 | **15** |
| 2 | User testing 5 người → Usability Report | 25 | **23** |
| 3 | Ma trận cross-browser / cross-platform | 25 | **25** |
| 4 | Nộp findings (Google Form) + log tổng hợp | 10 | **10** |
| 5 | Agent Skill | 10 | **8** |
| | **Tổng** | **100** | **96** |

**Căn cứ tự chấm:**

- **1a · 1b · 3 · 4 — chấm tối đa.** Đủ và vượt yêu cầu định lượng: 88 mục so với mức tối thiểu 40; 264/264 ô có kết luận; 21/21 ô ma trận có ảnh overlay; 15 findings khớp chính xác giữa file và form.
- **2 — tự trừ 2 điểm.** Đủ 5 phiên, đủ chỉ số, đủ 4 chủ đề probe, Usability Report đầy đủ. Trừ vì hai khiếm khuyết phương pháp đã tự khai ở [§8 báo cáo Task 2](02-usability-report.md): người điều phối có dẫn dắt trong phiên, và **số lần do dự không thu được** vì không có khoảng lặng để đo.
- **5 — tự trừ 2 điểm.** Skill có `SKILL.md`, hai script chạy được và tài liệu ánh xạ mục kiểm ↔ phép đo ↔ giới hạn. Trừ vì link video demo điền sau khi quay.

> ⚠️ **Số này quyết định tên file zip** — `23127262_HW03_AI_GUIUsability_EMS_096.zip`.

---

## Trạng thái hoàn thành

| # | Hạng mục | Điểm | Trạng thái |
|---|---|---|---|
| 1a | Task 1A — Checklist dùng chung *(nhóm)* | 15 | ✅ **88 mục**, nhóm đã review, kiểm chứng trên EMS thật |
| 1b | Task 1B — Chạy checklist ≥3 màn hình | 15 | ✅ **264 ô** · 24 ảnh · bug report 10 lỗi · 3 mục tự bổ sung |
| 2 | Task 2 — User testing 5 người | 25 | ✅ 5 phiên có ghi màn hình · SUS 5/5 · 4 chủ đề probe · Report 8 mục |
| 3 | Task 3 — Cross-browser / platform | 25 | ✅ **21/21 ô**, 18 Pass / 3 Fail, 21 ảnh có overlay |
| 4 | Findings — Form + log tổng hợp | 10 | ✅ **15/15** nộp form 04/08/2026, khớp số dòng |
| 5 | Agent Skill + video demo | 10 | 🟡 skill **xong** — [`skill/SKILL.md`](skill/SKILL.md) + 2 script chạy được. Chờ link video demo |
| — | AI Audit Report | bắt buộc | ✅ 10 dòng, phủ cả 4 task |
| — | AI Critique 200–300 chữ | bắt buộc | ✅ **291 chữ**, đã đếm bằng lệnh |
| — | Git commit log | bắt buộc | ✅ [`appendix/git-log.txt`](appendix/git-log.txt) |
| — | PDF cho mọi file `.md` | bắt buộc | ⬜ |

> 🔴 Đề §18: **thiếu bất kỳ tài liệu bắt buộc nào → 0 điểm cả bài.**

---

## Việc còn lại

1. **Quay video demo Agent Skill** rồi dán link YouTube vào bảng test summary bên trên; và 5 link phiên user testing vào [`evidence/task2/recordings.md`](evidence/task2/recordings.md)
2. **Xuất PDF** cho mọi file `.md`, rồi đóng gói zip `23127262_HW03_AI_GUIUsability_EMS_096.zip`

---

## Bản ghi màn hình 5 phiên

Cả 5 phiên đều được quay đầy đủ — **dữ liệu phiên thô** theo đề §12. Bản gốc 2880×1800 @ 60 fps tổng 1,55 GB, vượt giới hạn 20 MB/file của link nộp, nên đặt trên YouTube chế độ Unlisted.

**Danh sách link: [`evidence/task2/recordings.md`](evidence/task2/recordings.md)**

Kèm theo trong zip: 5 bản gỡ băng có mốc thời gian ([`evidence/task2/`](evidence/task2/)) và ghi chép quan sát từng phiên ([`appendix/a1-session-notes.md`](appendix/a1-session-notes.md)). Mọi mốc thời gian trích dẫn trong báo cáo đều tua thẳng được trong video.
