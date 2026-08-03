# HW03 — GUI & Usability Testing trên EMS · Báo cáo chính

**Sinh viên:** 23127262 – Lý Quốc Thạnh · **Email:** `23127262@student.hcmus.edu.vn`
**Kịch bản đã chọn:** **C — Admin quản lý người dùng**
**Hệ thống kiểm thử:** EMS `https://prod-dev.ems-fitus.cloud` · khu quản trị `/dashboard/admin`

---

## Báo cáo chính gồm những gì

Đề §15 yêu cầu báo cáo chính chứa: *kịch bản đã chọn · ≥3 màn hình và lý do · kết quả chạy checklist theo từng màn hình · Usability Report · báo cáo cross-platform*. Bốn phần đầu nằm ở đây và ba chương kèm theo; **mỗi nội dung chỉ xuất hiện ở đúng một chỗ**, các file khác dẫn chiếu chứ không chép lại.

| File | Nội dung |
|---|---|
| **`00_Bao-cao-chinh.md`** *(file này)* | Kịch bản · 3 màn hình và lý do chọn · tóm tắt kết quả cả ba task |
| [`01_Task1B_Ket-qua-checklist.md`](01_Task1B_Ket-qua-checklist.md) | Bảng 264 ô · bug report · mục checklist tự bổ sung |
| [`02_Task2_Usability-Report.md`](02_Task2_Usability-Report.md) | User testing 5 người · bảng chỉ số · phát hiện xếp hạng · khuyến nghị |
| [`03_Task3_Ma-tran-tuong-thich.md`](03_Task3_Ma-tran-tuong-thich.md) | Ma trận 21 ô cross-browser / cross-platform |
| [`04_Bug-Usability-Findings-Log.md`](04_Bug-Usability-Findings-Log.md) | 15 phát hiện, khớp với 15 submission trên Google Form |
| [`phu-luc/`](phu-luc/) · [`nhom/`](nhom/) · [`evidence/`](evidence/) | Phụ lục, sản phẩm cấp nhóm, bằng chứng |

---

## 1. Ba màn hình đã chọn và lý do

> ⚠️ Chính sách môn học: *"Choosing tasks that are too simple will limit the maximum achievable grade"* — chọn màn hình quá đơn giản sẽ **giới hạn điểm tối đa**, kể cả khi làm đủ.

| # | Mã | Tên màn hình | Cách mở | Lý do chọn | Chất liệu giao diện *(đã khảo sát thực tế)* |
|---|---|---|---|---|---|
| 1 | **C1** | Users Management | `/dashboard/admin/users` | Màn hình gốc của pool C, giàu chất liệu bảng và điều hướng nhất | 7 cột (USER · ROLE · MEMBER CODE · STATUS · CREATED · UPDATED · ACTIONS), ô Search, bộ lọc trên cột ROLE và STATUS, phân trang, chọn số dòng 5–100, nút **Export** và **Add User**, avatar dạng chữ viết tắt |
| 2 | **C2** | Dialog **Edit User** | Nút bút chì ở cột ACTIONS của C1 | Form sửa user — **nơi hiện thực cả Assign Role lẫn Block/Unblock** trong build này | 7 trường: First Name · Last Name · Email · Phone Number · **Role** (dropdown Admin/Guest/Lecturer/Student) · Member Code · **Active** (công tắc). Nút Cancel / Save Changes |
| 3 | **C3** | Dialog **Create New User** | Nút **Add User** ở C1 | Bề mặt validation lớn nhất của pool C — 8 trường, nhiều loại ràng buộc khác nhau | 8 trường (thêm **Password** có nút hiện/ẩn), validation inline khi submit rỗng, Active mặc định bật. Nút Cancel / Create User |

### Sai lệch so với danh sách gợi ý của đề — và lý do

Đề §5 gợi ý cho kịch bản C: *(C1) Danh sách Users · (C2) Assign Role / sửa user · (C3) Dialog Block-Unblock và Reset-Password · (C4) Export ra Excel*. Khảo sát thực tế trên EMS ngày 01/08/2026:

| Chức năng đề nêu | Thực tế trong build hiện tại |
|---|---|
| Assign Role | **Không có màn hình riêng** — là dropdown `Role` bên trong dialog Edit User |
| Block / Unblock | **Không có dialog riêng** — là công tắc `Active` bên trong dialog Edit User |
| **Reset Password** | **Không tồn tại.** Cột ACTIONS chỉ có 2 nút: sửa và xoá. Mật khẩu chỉ đặt được lúc tạo user mới |
| Cột **Audit** | Không có cột tên Audit; thông tin audit nằm ở hai cột CREATED / UPDATED |

Đề §5 cho phép *"chọn màn hình khác trong cùng nhóm nhưng phải giải thích lý do"* — đây là lý do. Bộ C1/C2/C3 bám sát pool C và **giữ nguyên phạm vi chức năng đề yêu cầu** (danh sách, gán vai trò, khoá/mở khoá), chỉ khác ở chỗ chúng được hiện thực trong dialog thay vì màn hình riêng.

### Hai chức năng kiểm kèm, không tính là màn hình riêng

- **Export ra Excel** — chỉ là một nút và một file tải về, quá mỏng để tính là màn hình. Kiểm trong C1 qua mục `S-17` và `G-03`.
- **Dialog Delete User** — nội dung ngắn (*"Are you sure you want to delete user X? This action cannot be undone."* + Cancel/Confirm). Kiểm trong C1 qua mục `S-06`, `S-07`, `S-08`.

### Phân bố phủ IA của bộ 3 màn hình

| Màn hình | Nhóm IA gánh chính |
|---|---|
| C1 | IA-01 *(bảng, cột, avatar, empty state)* + IA-03 *(search, lọc cột, phân trang, deep link)* |
| C2 | **IA-02** *(form sửa)* + IA-04 *(công tắc Active, phản hồi sau lưu)* |
| C3 | **IA-02** *(form tạo, validation đầy đủ)* + IA-04 *(dialog, thông báo lỗi)* |

Cả 4 IA đều có màn hình đại diện; ba màn hình không chồng lấn phạm vi chức năng.

### Không trùng với thành viên khác trong nhóm

*(đề §5 · Policies "Work Allocation")*

| Thành viên | MSSV | Kịch bản | 3 màn hình phụ trách |
|---|---|---|---|
| **Lý Quốc Thạnh** | **23127262** | **C** | **C1 Users Management · C2 dialog Edit User · C3 dialog Create New User** |
| Lê Thiên Phú | 23127244 | A | A1 Events list · A2 Add/Edit Event form · A4 Participants & Reviews |
| Đoàn Thành Phát | 23127241 | B | B1 Dashboard & Tìm kiếm · B1-b Saved Events · B2 Chi tiết sự kiện |
| Nguyễn Đình Thái Hưng | 23127373 | D | D1–D4 support request |

Không có thành viên nào trùng kịch bản, cũng không trùng màn hình.

---

## 2. Tóm tắt kết quả

### Task 1B — chạy checklist · chi tiết ở [chương 01](01_Task1B_Ket-qua-checklist.md)

88 mục × 3 màn hình = **264 ô**, không ô nào để trống.

| Màn hình | Passed | Failed | N/A | Tỉ lệ pass |
|---|---|---|---|---|
| C1 Users Management | 31 | 10 | 47 | **75,6 %** |
| C2 dialog Edit User | 16 | 7 | 65 | **69,6 %** |
| C3 dialog Create New User | 16 | 8 | 64 | **66,7 %** |
| **Tổng** | **63** | **25** | **176** | **71,6 %** |

25 ô Failed quy về **bốn nguyên nhân gốc** và gộp thành **10 lỗi** trong bug report. Bổ sung thêm **3 mục checklist của riêng tôi** — cả ba đều Failed ở mọi màn hình áp dụng được, cho thấy một vùng mù có hệ thống của checklist nhóm.

### Task 2 — user testing · chi tiết ở [chương 02](02_Task2_Usability-Report.md)

5 người thật ngoài lớp và ngoài ngành CNTT, mỗi người 2 tác vụ hướng mục tiêu, có ghi màn hình.

| Chỉ số | Giá trị |
|---|---|
| Tỉ lệ hoàn thành | **100 %** |
| SUS trung bình | **77,0** *(trung vị 72,5 · sd 11,0 · +9,0 so mốc ngành 68)* |
| Phát hiện xếp hạng | **5** — 2 ở severity 3, 3 ở severity 2 |

Phát hiện lớn nhất: **3/5 người không tự tìm được màn hình Users Management**. Điểm SUS tách thành hai cụm cách nhau ~18 điểm, và ranh giới đúng bằng biến "có tìm được đường vào hay không".

### Task 3 — cross-platform · chi tiết ở [chương 03](03_Task3_Ma-tran-tuong-thich.md)

7 tổ hợp × 3 màn hình = **21 ô**, mỗi ô một ảnh có overlay MSSV.

| | |
|---|---|
| Kết quả | **18 Pass · 3 Fail** |
| OS | Linux · macOS Sonoma · Android 15 |
| Browser | Chrome 149 · Firefox 153 · Edge 151 · Opera 133 · Safari 17.3 |
| Thiết bị | Desktop · Tablet *(Galaxy Tab S8+)* · Phone *(Galaxy S24)* |

Cả **3 ô Fail đều ở điện thoại** — bảng mất 5/7 cột và dialog tràn khỏi màn hình khiến không bấm được nút xác nhận.

### Findings · chi tiết ở [chương 04](04_Bug-Usability-Findings-Log.md)

**15 phát hiện** — 10 từ Task 1B · 3 từ Task 2 · 2 từ Task 3. Đã nộp **15/15** lên Google Form ngày 04/08/2026, khớp số dòng với file tổng hợp.

| Severity | 4 | 3 | 2 | 1 |
|---|---|---|---|---|
| Số lỗi | 0 | **6** | **8** | 1 |

---

## 3. Kết luận

EMS ở khu quản lý người dùng **dùng được nhưng khó vào**. Ba nguồn dữ liệu độc lập cùng chỉ về kết luận này:

- **Checklist** — IA-03 Navigation gần như sạch ngoại trừ đúng một mục: không có breadcrumb ở bất kỳ cấp nào
- **Người dùng thật** — 3/5 không tìm được đường vào, kể cả người có kinh nghiệm quản lý
- **SUS** — câu *"dễ sử dụng"* đạt 3,4/4 là câu mạnh nhất, trong khi ba người vấp ở khâu điều hướng lại cho điểm tổng thấp nhất

Sau khi vào được màn hình thì thao tác nhanh và form dễ hiểu — cả 5 người đều xác nhận. Vì vậy khuyến nghị số một không phải sửa form, mà là **làm cho khu quản trị tự chỉ đường**: thêm breadcrumb và một lối vào nhìn thấy được ngay từ dashboard.

Một kết quả nữa đáng ghi lại vì nó nói về **phương pháp** chứ không về sản phẩm: checklist dự đoán *"hệ thống không phản hồi sau khi lưu"* là lỗi nghiêm trọng mức 3, nhưng **5/5 người dùng thật nói họ hoàn toàn chắc chắn** vì bảng danh sách tự cập nhật trước mắt họ. Phát hiện đó đã bị hạ xuống mức 2. Đây là chỗ duy nhất trong cả bài mà hai phương pháp nói ngược nhau — và là lý do rõ nhất cho thấy vì sao đề bắt chạy **cả hai** thay vì chọn một.
