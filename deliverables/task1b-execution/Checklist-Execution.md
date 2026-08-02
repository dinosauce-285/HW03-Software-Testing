# Task 1B — Chạy checklist trên các màn hình đã chọn

> Yêu cầu: đề §6 Task 1B — chạy **checklist dùng chung của nhóm** (88 mục) trên **≥ 3 màn hình**, đánh `Passed` / `Failed` theo từng màn hình, cột **Notes** ghi lý do fail, **ảnh chụp chỉ cho mục Failed**.

**Sinh viên:** 23127262 – Lý Quốc Thạnh
**Kịch bản đã chọn:** **C — Admin quản lý người dùng**

---

## 1. Màn hình đã chọn và lý do

> ⚠️ Chính sách môn học: *"Choosing tasks that are too simple will limit the maximum achievable grade"* — chọn màn hình quá đơn giản sẽ **giới hạn điểm tối đa**, kể cả khi làm đủ.

> **URL hệ thống:** `https://prod-dev.ems-fitus.cloud` — EMS đã chuyển khỏi ngrok sang domain này. Khu quản trị nằm dưới `/dashboard/admin` (route `/admin/...` trả về 404).

| # | Mã | Tên màn hình | URL / cách mở | Lý do chọn | Chất liệu giao diện *(đã khảo sát thực tế)* |
|---|---|---|---|---|---|
| 1 | **C1** | Users Management | `/dashboard/admin/users` | Màn hình gốc của pool C, giàu chất liệu bảng và điều hướng nhất | 7 cột (USER · ROLE · MEMBER CODE · STATUS · CREATED · UPDATED · ACTIONS), ô Search, bộ lọc trên cột ROLE và STATUS, 2 cột sắp xếp được, phân trang (số user thay đổi theo thời điểm — 79→108 trong các lần khảo sát), chọn số dòng 5–100, nút **Export** và **Add User**, avatar dạng chữ viết tắt |
| 2 | **C2** | Dialog **Edit User** | Mở từ nút bút chì ở cột ACTIONS của C1 | Form sửa user — **nơi hiện thực cả Assign Role lẫn Block/Unblock** trong build này | 7 trường: First Name · Last Name · Email · Phone Number · **Role** (dropdown Admin/Guest/Lecturer/Student) · Member Code · **Active** (công tắc). Nút Cancel / Save Changes |
| 3 | **C3** | Dialog **Create New User** | Mở từ nút **Add User** ở C1 | Bề mặt validation lớn nhất của pool C — 8 trường, nhiều loại ràng buộc khác nhau | 8 trường (thêm **Password** có nút hiện/ẩn), validation inline khi submit rỗng, Active mặc định bật. Nút Cancel / Create User |

### ⚠️ Sai lệch so với danh sách gợi ý của đề — có lý do

Đề §5 gợi ý cho kịch bản C: *(C1) Danh sách Users · (C2) Assign Role / sửa user · (C3) Dialog Block-Unblock và Reset-Password · (C4) Export ra Excel*. Khảo sát thực tế trên EMS ngày 01/08/2026 cho thấy:

| Chức năng đề nêu | Thực tế trong build hiện tại |
|---|---|
| Assign Role | **Không có màn hình riêng** — là dropdown `Role` bên trong dialog Edit User |
| Block / Unblock | **Không có dialog riêng** — là công tắc `Active` bên trong dialog Edit User |
| **Reset Password** | **Không tồn tại.** Cột ACTIONS chỉ có 2 nút: sửa và xoá. Mật khẩu chỉ đặt được lúc tạo user mới |
| Cột **Audit** | Không có cột tên Audit; thông tin audit nằm ở hai cột CREATED / UPDATED (hiển thị người thao tác) |

Đề §5 cho phép *"chọn màn hình khác trong cùng nhóm nhưng phải giải thích lý do"* — đây là lý do. Bộ C1/C2/C3 ở trên bám sát pool C và **giữ nguyên phạm vi chức năng đề yêu cầu** (danh sách, gán vai trò, khoá/mở khoá), chỉ khác ở chỗ chúng được hiện thực trong dialog thay vì màn hình riêng.

### Hai chức năng kiểm kèm, không tính là màn hình riêng

- **Export ra Excel** — chỉ là một nút và một file tải về, quá mỏng để tính là màn hình *(chính sách môn: "tasks that are too simple will limit the maximum achievable grade")*. Kiểm trong C1 qua mục `S-17` và `G-03`.
- **Dialog Delete User** — nội dung ngắn (*"Are you sure you want to delete user X? This action cannot be undone."* + Cancel/Confirm). Kiểm trong C1 qua mục `S-06`, `S-07`, `S-08`.

### Phân bố phủ IA của bộ 3 màn hình

| Màn hình | Nhóm IA gánh chính |
|---|---|
| C1 | IA-01 (bảng, cột, avatar, empty state) + IA-03 (search, lọc cột, sắp xếp, phân trang, deep link) |
| C2 | **IA-02** (form sửa) + IA-04 (công tắc Active, phản hồi sau lưu) |
| C3 | **IA-02** (form tạo, validation đầy đủ) + IA-04 (dialog, thông báo lỗi) |

Cả 4 IA đều có màn hình đại diện; ba màn hình không chồng lấn phạm vi chức năng.

**Không trùng với thành viên khác trong nhóm** *(đề §5 · Policies "Work Allocation")*:

| Thành viên | MSSV | Kịch bản | 3 màn hình phụ trách |
|---|---|---|---|
| **Lý Quốc Thạnh** | **23127262** | **C** | **C1 Users Management · C2 dialog Edit User · C3 dialog Create New User** |
| Lê Thiên Phú | 23127244 | A | A1 Events list · A2 Add/Edit Event form · A4 Participants & Reviews |
| Đoàn Thành Phát | 23127241 | B | B1 Dashboard & Tìm kiếm · B1-b Saved Events · B2 Chi tiết sự kiện |

Không có thành viên nào trùng kịch bản, cũng không trùng màn hình.

---

## 1b. Ghi chú khảo sát ban đầu — 01/08/2026

Khảo sát bằng Playwright (chỉ mở và quan sát, **không lưu, không xoá** vì hệ thống dùng chung). Các quan sát dưới đây **cần bạn tự kiểm lại trên trình duyệt** trước khi đưa vào kết quả chính thức.

| Quan sát | Ảnh hưởng tới mục checklist |
|---|---|
| **Không có breadcrumb** ở khu admin | `N-03` sẽ Failed hoặc N/A ở cả 3 màn hình |
| Avatar là **chữ viết tắt trong vòng tròn**, không phải ảnh (`<img>` = 0) | `G-17` cần đổi cách kiểm: xem tên dài như "KHOA NGUYỄN QUANG ĐĂNG" → viết tắt "KNQĐ" có tràn vòng tròn không |
| Cột CREATED/UPDATED hiển thị chuỗi **"Tôi là Admin"** (tiếng Việt) trong giao diện đang để **English** | Ứng viên Failed cho `G-14` (i18n phủ toàn bộ) |
| Trường bắt buộc **không có dấu `*`** trước khi submit | Ứng viên Failed cho `F-02` |
| Thông báo lỗi hiện **inline ngay dưới từng trường** | Ứng viên Passed cho `F-04` |
| Dialog xoá có câu *"This action cannot be undone"* | Ứng viên Passed cho `S-08` |
| Member Code rỗng hiển thị `-` | Kiểm `G-18` |
| Bộ lọc cột ROLE: All Roles / Admin / Guest / Lecturer / Student | Kiểm `N-16`, `N-09` |
| Chưa mở được menu đổi ngôn ngữ bằng script | Cần bạn tự bấm cờ ở header để kiểm `G-14`, `G-15`, `G-16` |

Ảnh khảo sát tham khảo: `scratchpad/ems-survey/` — **không dùng làm bằng chứng nộp bài**; đề §12 yêu cầu ảnh phải là màn hình **bạn** đã kiểm tra, nên hãy tự chụp lại khi chạy checklist.

---

## 2. Bảng chạy checklist

> Sao chép toàn bộ 88 mục từ [`../task1a-checklist/GUI-Checklist.md`](../task1a-checklist/GUI-Checklist.md) vào bảng dưới.
> Giá trị mỗi ô: `Passed` · `Failed` · `N/A`. **Không được để trống.**
> Mỗi `Failed` bắt buộc có **Notes** và **ảnh** trong `evidence/task1b/`.

### IA-01 — Chuẩn UI chung

| ID | Mục kiểm tra | MH1 | MH2 | MH3 | Notes (lý do Failed) | Ảnh |
|---|---|---|---|---|---|---|
| G-01 | Tiêu đề trang khớp với mục đang chọn trên sidebar | | | | | |
| G-02 | Cùng chức năng dùng cùng nhãn ở mọi màn hình | | | | | |
| … | *(chép tiếp G-03 → G-18)* | | | | | |

### IA-02 — Forms

| ID | Mục kiểm tra | MH1 | MH2 | MH3 | Notes | Ảnh |
|---|---|---|---|---|---|---|
| F-01 | Mọi ô nhập có nhãn thường trực | | | | | |
| … | *(chép tiếp F-02 → F-26)* | | | | | |

### IA-03 — Navigation

| ID | Mục kiểm tra | MH1 | MH2 | MH3 | Notes | Ảnh |
|---|---|---|---|---|---|---|
| N-01 | Menu chính truy cập được mọi khu vực lớn | | | | | |
| … | *(chép tiếp N-02 → N-19)* | | | | | |

### IA-04 — Feedback / State

| ID | Mục kiểm tra | MH1 | MH2 | MH3 | Notes | Ảnh |
|---|---|---|---|---|---|---|
| S-01 | Mọi hành động đổi dữ liệu có phản hồi rõ ràng | | | | | |
| … | *(chép tiếp S-02 → S-25)* | | | | | |

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
