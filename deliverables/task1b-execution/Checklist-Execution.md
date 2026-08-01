# Task 1B — Chạy checklist trên các màn hình đã chọn

> Yêu cầu: đề §6 Task 1B — chạy **checklist dùng chung của nhóm** (68 mục) trên **≥ 3 màn hình**, đánh `Passed` / `Failed` theo từng màn hình, cột **Notes** ghi lý do fail, **ảnh chụp chỉ cho mục Failed**.

**Sinh viên:** 23127262 – Lý Quốc Thạnh
**Kịch bản đã chọn:** **C — Admin quản lý người dùng**

---

## 1. Màn hình đã chọn và lý do

> ⚠️ Chính sách môn học: *"Choosing tasks that are too simple will limit the maximum achievable grade"* — chọn màn hình quá đơn giản sẽ **giới hạn điểm tối đa**, kể cả khi làm đủ.

| # | Mã | Tên màn hình | URL | Lý do chọn | Chất liệu giao diện |
|---|---|---|---|---|---|
| 1 | **C1** | Danh sách Users | `<điền>` | Màn hình gốc của pool C; giàu chất liệu bảng và điều hướng — là nơi duy nhất kiểm được search, lọc role/active, phân trang, empty state | Bảng (Avatar+Name, Role, Member Code, Active, Audit), search, filter, phân trang, Export |
| 2 | **C2** | Assign Role / sửa user | `<điền>` | **Màn hình duy nhất trong pool C có form thật** — nếu bỏ, gần như toàn bộ 19 mục IA-02 sẽ thành N/A và độ phủ checklist bị rỗng một mảng | Form, chọn role, validation, submit |
| 3 | **C3** | Dialog Block-Unblock + Reset Password | `<điền>` | **Nơi duy nhất có hành động phá huỷ và dialog xác nhận** — gánh phần lớn IA-04; đồng thời kiểm được ghi nhận audit sau thao tác | Dialog xác nhận, toast, đổi trạng thái Active, audit log |

### Vì sao không chọn C4 — Export ra Excel

Export chỉ gồm một nút và một file tải về, không đủ chất liệu để coi là một màn hình độc lập; chọn nó sẽ rơi vào đúng trường hợp *"tasks that are too simple"* mà chính sách môn cảnh báo.
**Không bỏ nội dung này:** Export vẫn được kiểm như một **chức năng bên trong C1**, qua các mục `S-17` (chỉ báo đang xử lý + thông báo khi tải xong/thất bại) và `G-03` (tính đầy đủ, nhất quán của các cột).

### Phân bố phủ IA của bộ 3 màn hình

| Màn hình | Nhóm IA gánh chính |
|---|---|
| C1 | IA-01 (bảng, cột, empty state) + IA-03 (search, lọc, phân trang, deep link) |
| C2 | **IA-02** (form, validation, trường bắt buộc) |
| C3 | **IA-04** (dialog, toast, màu trạng thái, phản hồi) |

> Ba màn hình gánh ba nhóm khác nhau → không chồng lấn phạm vi, và cả 4 IA đều có màn hình đại diện.

**Phương án dự phòng:** đề §4 liệt kê **audit log** cũng thuộc pool C. Nếu khảo sát thực tế cho thấy C3 quá mỏng, thay bằng màn hình audit log (đề §5 cho phép chọn màn hình khác trong cùng pool nếu giải thích lý do).

**Không trùng với thành viên khác trong nhóm:** *(ghi rõ ai làm kịch bản/màn hình nào)*

> ⚠️ **Chưa xác minh trên EMS thật** — tunnel ngrok báo `ERR_NGROK_3200` (offline) lúc 01/08/2026 05:15 UTC. Cần điền URL và xác nhận chất liệu giao diện của từng màn hình khi app online.

---

## 2. Bảng chạy checklist

> Sao chép toàn bộ 68 mục từ [`../task1a-checklist/GUI-Checklist.md`](../task1a-checklist/GUI-Checklist.md) vào bảng dưới.
> Giá trị mỗi ô: `Passed` · `Failed` · `N/A`. **Không được để trống.**
> Mỗi `Failed` bắt buộc có **Notes** và **ảnh** trong `evidence/task1b/`.

### IA-01 — Chuẩn UI chung

| ID | Mục kiểm tra | MH1 | MH2 | MH3 | Notes (lý do Failed) | Ảnh |
|---|---|---|---|---|---|---|
| G-01 | Tiêu đề trang khớp với mục đang chọn trên sidebar | | | | | |
| G-02 | Cùng chức năng dùng cùng nhãn ở mọi màn hình | | | | | |
| … | *(chép tiếp G-03 → G-16)* | | | | | |

### IA-02 — Forms

| ID | Mục kiểm tra | MH1 | MH2 | MH3 | Notes | Ảnh |
|---|---|---|---|---|---|---|
| F-01 | Mọi ô nhập có nhãn thường trực | | | | | |
| … | *(chép tiếp F-02 → F-19)* | | | | | |

### IA-03 — Navigation

| ID | Mục kiểm tra | MH1 | MH2 | MH3 | Notes | Ảnh |
|---|---|---|---|---|---|---|
| N-01 | Menu chính truy cập được mọi khu vực lớn | | | | | |
| … | *(chép tiếp N-02 → N-15)* | | | | | |

### IA-04 — Feedback / State

| ID | Mục kiểm tra | MH1 | MH2 | MH3 | Notes | Ảnh |
|---|---|---|---|---|---|---|
| S-01 | Mọi hành động đổi dữ liệu có phản hồi rõ ràng | | | | | |
| … | *(chép tiếp S-02 → S-18)* | | | | | |

---

## 3. Tổng hợp kết quả

| Màn hình | Số mục chạy | Passed | Failed | N/A | Tỉ lệ pass |
|---|---|---|---|---|---|
| MH1 — | | | | | |
| MH2 — | | | | | |
| MH3 — | | | | | |
| **Tổng** | | | | | |

> Tỉ lệ pass = `Passed / (Passed + Failed)` — **không tính N/A vào mẫu số**.

### Phân bố Failed theo IA

| IA | Số Failed | Nhận xét |
|---|---|---|
| IA-01 | | |
| IA-02 | | |
| IA-03 | | |
| IA-04 | | |

---

## 4. Bug report từ các mục Failed

> Mỗi lỗi đáng kể → một dòng trong [`../findings/Findings-Log.md`](../findings/Findings-Log.md) **và** một submission Google Form.

| ID Finding | Mục checklist | Màn hình | Bước tái hiện | Kỳ vọng | Thực tế | Mức | Ảnh |
|---|---|---|---|---|---|---|---|
| T1B-01 | | | | | | | |

---

## 5. Mục bổ sung của riêng tôi

> Chính sách môn: công việc **không được trùng** với thành viên khác. Đây là phần cá nhân hoá checklist nhóm.

| ID | IA | Mục kiểm tra | Phát hiện khi nào | Vì sao AI/nhóm bỏ sót |
|---|---|---|---|---|
| MY-01 | | | | |
| MY-02 | | | | |
