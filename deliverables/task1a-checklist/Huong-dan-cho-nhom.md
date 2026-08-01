# Task 1A — Hướng dẫn cho nhóm

> Gửi kèm bản nháp checklist GUI dùng chung. Đây **chưa phải bản chốt** — cần cả nhóm review rồi mới nộp.

**Người soạn bản nháp:** 23127262 – Lý Quốc Thạnh *(kịch bản C — Admin quản lý người dùng)*
**Ngày:** 01/08/2026

---

## 1. Ba file trong gói này

| File | Là gì | Đề yêu cầu ở đâu |
|---|---|---|
| `GUI-Checklist.md` | Checklist 74 mục, phủ IA-01…IA-04 | §15 — sản phẩm nhóm (1) |
| `Task1A_Heuristics-Reference.md` | Danh sách nguồn R1–R10 (Nielsen, Norman, Shneiderman, slide S13, WCAG, SUS, severity, compatibility) | §15 — sản phẩm nhóm (2) |
| `AI-Prompts-Log.md` | Các prompt đã dùng để sinh và tinh chỉnh checklist | §15 — sản phẩm nhóm (3) |

Đề §15: *"Nộp một lần cho cả nhóm; mỗi thành viên giữ một bản."*

---

## 2. Bản nháp này được xây thế nào

- **30 mục** do AI sinh từ heuristic phổ quát ở lượt đầu
- **44 mục** bổ sung sau khi review phản biện — đọc slide `S13`, tài liệu E2E của EMS, và tra cứu nguồn sơ cấp (nngroup.com, trang chính chủ của Shneiderman, WCAG 2.2)
- **6 mục** đã phải **viết lại** sau khi khảo sát EMS thật, vì suy từ tài liệu ra sai *(chi tiết §6 của checklist)*

§5 của checklist giải thích **vì sao AI bỏ sót** từng mục, chia ba nhóm nguyên nhân: `[EMS]` không nhìn thấy sản phẩm · `[Prompt]` prompt chưa đủ dẫn dắt · `[Model]` giới hạn tri thức của model. Đây là phần đề §6 Task 1A bắt buộc phải có.

---

## 3. ⚠️ Vấn đề quan trọng nhất cần cả nhóm xử lý

Checklist mới chỉ được **kiểm chứng trên kịch bản C**. Các mục thuộc kịch bản khác vẫn đang là suy đoán từ tài liệu:

| Kịch bản | Tình trạng | Mục cần người phụ trách xác minh |
|---|---|---|
| **C** — quản lý người dùng | ✅ đã kiểm trên EMS thật | — |
| **A** — quản lý sự kiện | ⚠️ **chưa ai kiểm** | `F-14` `F-15` (validation ngày/giờ) · `F-16` `F-17` (Max Slots, công tắc đăng ký) · `F-18` (tỉ lệ ảnh **4:3 / 24:9**) · `F-19` (rich-text) · `N-12`–`N-14` (kéo-thả reorder) · `S-11` (**6 màu** trạng thái) · `S-13` (progress bar) · `S-15` (**4 nhánh** kết quả check-in) · `S-16` (chặn xoá Campus) · `S-18` (badge) |
| **B** — đăng ký sự kiện | ⚠️ **gần như không có mục riêng** | Cần bổ sung: carousel, form đăng ký chọn role, vé QR/barcode, đánh giá sao |
| **D** — support request | ⚠️ **gần như không có mục riêng** | Cần bổ sung: đính kèm ảnh, lightbox, internal note, tab Pending/Resolved |

**Bài học từ kịch bản C:** khảo sát thực tế cho thấy **Reset Password không tồn tại**, Assign Role và Block/Unblock nằm chung trong một dialog — khác hẳn mô tả trong đề. Khả năng cao các kịch bản khác cũng lệch tương tự. **Đừng tin tài liệu, mở app ra kiểm.**

---

## 4. Việc mỗi thành viên phải làm

- [ ] **Mở EMS** (`https://prod-dev.ems-fitus.cloud`, admin `admin@gmail.com` / `Admin@123`) và đối chiếu từng mục với 3 màn hình mình phụ trách
- [ ] **Sửa hoặc bỏ** mục nào không áp dụng được cho sản phẩm thật — ghi lý do
- [ ] **Bổ sung ít nhất 2 mục của riêng mình**, kèm giải thích **vì sao AI bỏ sót** (theo mẫu §5 của checklist)
- [ ] **Xác nhận các con số** trong mục mình phụ trách ở bảng §3 phía trên
- [ ] **Không trùng phạm vi** với người khác — điền vào bảng ở §5

> Đề §2: *"nộp thẳng output thô của AI là không chấp nhận được"*. Mục nào chưa ai mở app kiểm thì vẫn còn là output thô.

---

## 5. Bảng phân công — điền để chứng minh không trùng

Đề §5 + Chính sách môn (*Work Allocation*): không hai thành viên nào được cùng kịch bản **và** cùng tập màn hình.

| Thành viên | MSSV | Kịch bản | 3 màn hình phụ trách |
|---|---|---|---|
| Lý Quốc Thạnh | 23127262 | **C** | C1 Users Management · C2 dialog Edit User · C3 dialog Create New User |
| | | | |
| | | | |
| | | | |

---

## 6. Quy ước thống nhất khi chạy checklist (Task 1B)

Mỗi ô nhận **một** trong: `Passed` · `Failed` · `N/A` — **không để trống**.

- `Failed` bắt buộc kèm **Notes (lý do)** và **ảnh chụp**
- `N/A` ghi ngắn lý do không áp dụng
- **Tỉ lệ pass = `Passed / (Passed + Failed)`** — không tính `N/A` vào mẫu số

Vì checklist phủ cả 4 kịch bản nên **N/A nhiều là bình thường**: ước tính mỗi màn hình thực chạy 35–45 mục trên tổng 74.

---

## 7. 🔴 Ranh giới được phép giống nhau

Đề §18 ghi rõ:

> *"Sao chép giữa sinh viên — **kể cả prompt** — → **0 điểm cho cả hai bên**. Checklist dùng chung được phép giống nhau trong cùng nhóm; mọi thứ còn lại (chọn màn hình, thực thi, usability, cross-platform, findings) phải là của riêng bạn."*

| Được phép giống nhau | **Phải khác nhau hoàn toàn** |
|---|---|
| Checklist GUI (74 mục) | Chọn màn hình và lý do chọn |
| Danh sách nguồn tham khảo | Kết quả chạy checklist + ảnh |
| Prompt dùng để **xây checklist nhóm** | Prompt dùng cho Task 1B / 2 / 3 của riêng mình |
| | Usability Report, người tham gia |
| | Ma trận cross-platform |
| | Findings Log |
| | AI Audit Report, AI Critique |

**Chỉ gửi cho nhóm 3 file ở §1.** Các file khác trong bài của mình đừng chia sẻ — người khác chép vào là **cả hai cùng 0 điểm**.
