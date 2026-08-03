# HW03 — GUI & Usability Testing trên EMS

**Sinh viên:** 23127262 – Lý Quốc Thạnh · **Email:** `23127262@student.hcmus.edu.vn`
**Kịch bản:** **C — Admin quản lý người dùng**
**3 màn hình:** C1 Users Management `/dashboard/admin/users` · C2 dialog *Edit User* · C3 dialog *Create New User*
**Hệ thống kiểm thử:** `https://prod-dev.ems-fitus.cloud`

> **Bắt đầu đọc từ [`00_Bao-cao-chinh.md`](00_Bao-cao-chinh.md).**

---

## Cấu trúc thư mục nộp

Mỗi nội dung **chỉ nằm ở đúng một file**; các file khác dẫn chiếu chứ không chép lại.

```
├── README.md                          test summary + bảng tự đánh giá  ← file này
├── 00_Bao-cao-chinh.md                kịch bản · 3 màn hình và lý do · tóm tắt cả 3 task
├── 01_Task1B_Ket-qua-checklist.md     264 ô · bug report 10 lỗi · 3 mục checklist tự bổ sung
├── 02_Task2_Usability-Report.md       user testing 5 người · chỉ số · phát hiện · khuyến nghị
├── 03_Task3_Ma-tran-tuong-thich.md    ma trận 21 ô cross-browser / cross-platform
├── 04_Bug-Usability-Findings-Log.md   15 phát hiện, khớp 15 submission Google Form
│
├── phu-luc/
│   ├── P1_Ke-hoach-user-testing.md              phương pháp, hồ sơ người dùng, chỉ số
│   ├── P2_Kit-dieu-phoi-va-ghi-chep-phien.md    lời thoại · đáp án · ghi chép 5 phiên
│   ├── P3_SUS-chi-tiet.md                       10 câu × 5 người, quy đổi, phân tích từng câu
│   ├── P4_AI-Audit-Report.md                    nhật ký mọi tương tác AI
│   ├── P5_AI-Critique.md                        AI sai/thiên lệch ở đâu (200–300 chữ)
│   ├── P6_Peer-Review.md                        cross-review trong nhóm
│   ├── P7_Quy-uoc-git.md                        quy ước commit
│   └── git-log.txt                              lịch sử commit dạng văn bản
│
├── nhom/                              sản phẩm cấp nhóm
│   ├── GUI-Checklist.md               88 mục, phủ IA-01…IA-04
│   ├── Nguon-tham-khao.md             Nielsen · Norman · Shneiderman · SUS · severity
│   └── AI-Prompts-Nhom.md             prompt dùng để xây checklist
│
└── evidence/
    ├── task1b/   24 ảnh — chỉ cho mục Failed
    ├── task2/    5 bản gỡ băng phiên user testing
    └── task3/    21 ảnh — mỗi ô ma trận một ảnh, có overlay MSSV
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
| Link video demo Agent Skill | *(chưa có)* |

---

## Bảng tự đánh giá *(đề §16)*

| # | Tiêu chí | Điểm tối đa | Tự đánh giá |
|---|---|---|---|
| 1a | Checklist dùng chung (>40 mục, IA-01…IA-04) + nguồn + prompt AI | 15 | **15** |
| 1b | Chạy checklist ≥3 màn hình + bug report | 15 | **15** |
| 2 | User testing 5 người → Usability Report | 25 | **23** |
| 3 | Ma trận cross-browser / cross-platform | 25 | **25** |
| 4 | Nộp findings (Google Form) + log tổng hợp | 10 | **10** |
| 5 | Agent Skill | 10 | **0** |
| | **Tổng** | **100** | **88** |

**Căn cứ tự chấm:**

- **1a · 1b · 3 · 4 — chấm tối đa.** Đủ và vượt yêu cầu định lượng: 88 mục so với mức tối thiểu 40; 264/264 ô có kết luận; 21/21 ô ma trận có ảnh overlay; 15 findings khớp chính xác giữa file và form.
- **2 — tự trừ 2 điểm.** Đủ 5 phiên, đủ chỉ số, đủ 4 chủ đề probe, Usability Report đầy đủ. Trừ vì hai khiếm khuyết phương pháp đã tự khai ở [§8 báo cáo Task 2](02_Task2_Usability-Report.md): người điều phối có dẫn dắt trong phiên, và **số lần do dự không thu được** vì không có khoảng lặng để đo.
- **5 — chưa làm.** Chưa có Agent Skill và chưa có video demo.

> ⚠️ **Số này quyết định tên file zip** — `23127262_HW03_AI_GUIUsability_EMS_088.zip`.
> Làm xong Agent Skill thì sửa thành `098` và cập nhật lại bảng trên.

---

## Trạng thái hoàn thành

| # | Hạng mục | Điểm | Trạng thái |
|---|---|---|---|
| 1a | Task 1A — Checklist dùng chung *(nhóm)* | 15 | ✅ **88 mục**, nhóm đã review, kiểm chứng trên EMS thật |
| 1b | Task 1B — Chạy checklist ≥3 màn hình | 15 | ✅ **264 ô** · 24 ảnh · bug report 10 lỗi · 3 mục tự bổ sung |
| 2 | Task 2 — User testing 5 người | 25 | ✅ 5 phiên có ghi màn hình · SUS 5/5 · 4 chủ đề probe · Report 8 mục |
| 3 | Task 3 — Cross-browser / platform | 25 | ✅ **21/21 ô**, 18 Pass / 3 Fail, 21 ảnh có overlay |
| 4 | Findings — Form + log tổng hợp | 10 | ✅ **15/15** nộp form 04/08/2026, khớp số dòng |
| 5 | Agent Skill + video demo | 10 | ⬜ **chưa bắt đầu** |
| — | AI Audit Report | bắt buộc | ✅ 10 dòng, phủ cả 4 task |
| — | AI Critique 200–300 chữ | bắt buộc | ⬜ khung có, chưa viết |
| — | Git commit log | bắt buộc | ⬜ chưa xuất |
| — | Peer Review | bắt buộc | ⬜ |
| — | PDF cho mọi file `.md` | bắt buộc | ⬜ |

> 🔴 Đề §18: **thiếu bất kỳ tài liệu bắt buộc nào → 0 điểm cả bài.**

---

## Việc còn lại

1. **Agent Skill + video demo YouTube** — 10 điểm, phần thiếu lớn nhất
2. **AI Critique 200–300 chữ** — nguyên liệu đã có sẵn trong file
3. **Xuất git log** ra `phu-luc/git-log.txt`
4. **Peer Review** với thành viên nhóm
5. **Xuất PDF** cho mọi file `.md`, rồi đóng gói zip đúng tên
