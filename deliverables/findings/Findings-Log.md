# Bug & Usability Findings Log

> Yêu cầu: đề §7 — mọi phát hiện phải báo cáo **hai lần**: (1) nộp từng phát hiện lên Google Form <https://forms.gle/CJQFQCAXcsDbXDMM9> bằng email MSSV, và (2) tổng hợp vào file này.
> **File này và số submission trên form phải khớp nhau — TA đối chiếu số lượng.**

**Sinh viên:** *(MSSV – Họ tên)*
**Kịch bản:** *(A / B / C / D)*

---

## Quy ước

**ID:** `<Task>-<số thứ tự>` — vd `T1B-01` (từ chạy checklist), `T2-01` (từ user testing), `T3-01` (từ cross-platform)

**Loại:**
- `Bug` — hệ thống làm **sai** so với thứ nó phải làm
- `Usability` — hệ thống làm đúng nhưng người dùng vẫn khó dùng

**Mức nghiêm trọng** (thang Nielsen 0–4, xem `references/Task1A_Heuristics-Reference.md` §5):

| Mức | Nghĩa |
|---|---|
| 0 | Không phải vấn đề |
| 1 | Chỉ mỹ quan — sửa nếu còn thời gian |
| 2 | Nhỏ — ưu tiên thấp |
| 3 | Lớn — quan trọng, ưu tiên cao |
| 4 | Thảm hoạ — bắt buộc sửa trước khi phát hành |

---

## Bảng tổng hợp

| ID | Kịch bản / Màn hình | Loại | Mô tả | Bước tái hiện / Heuristic | Mức | Đề xuất sửa | Ảnh | Gửi form lúc |
|---|---|---|---|---|---|---|---|---|
| T1B-01 | C / C3 — Dialog Create New User | **Bug** | Nhãn, placeholder và thông báo lỗi của hai trường tên **không khớp nhau**: ô có nhãn "First Name" lại có placeholder "Last Name" và báo lỗi "Last name is required"; ô nhãn "Last Name" thì ngược lại | 1. Đăng nhập admin → `/dashboard/admin/users`<br>2. Bấm **Add User**<br>3. Để trống toàn bộ, bấm **Create User**<br>4. Đối chiếu nhãn ↔ placeholder ↔ thông báo lỗi của 2 ô đầu.<br>**Kỳ vọng:** ba thứ cùng nói về một trường. **Thực tế:** nhãn nói một đằng, placeholder và lỗi nói một nẻo.<br>Heuristic: Nielsen #2 (Match system & real world), #9 (Recover from errors); checklist `F-01`, `F-04`, `F-05` | *(chấm)* | Sửa lại `name`/`label`/`placeholder`/thông báo lỗi cho khớp đúng trường. Nhiều khả năng hai trường bị hoán vị lúc khai báo schema validation | `evidence/task1b/T1B-01-swapped-name-validation.png` | |
| T1B-02 | | | | | | | | |
| T3-02 ⏳ | C / C2 + C3 — dialog Edit User và Create New User | **Bug** | Trên màn hình điện thoại, **cả hai dialog tràn khỏi cạnh phải** và bị cắt. Hệ quả nặng nhất: **không nhìn thấy nút Save Changes / Create User**, nên không hoàn thành được thao tác. Với C2 còn mất luôn Role, Member Code và công tắc Active | 1. Mở `/dashboard/admin/users` trên điện thoại (Galaxy S24, Android 15, Chrome)<br>2. Chạm icon bút chì ở một dòng bất kỳ → dialog Edit User<br>3. Quan sát cạnh phải và đáy dialog.<br>4. Lặp lại với nút **Add User** → dialog Create New User.<br>**Kỳ vọng:** dialog co lại vừa màn hình, luôn thấy nút xác nhận. **Thực tế:** dialog giữ nguyên bề rộng desktop, tràn ra ngoài, nút xác nhận nằm ngoài vùng nhìn thấy.<br>Heuristic: Nielsen #1, #3 (User control and freedom); checklist `G-07`, `F-13` | *(chấm)* | Đặt `max-width: 100vw` và cho dialog cuộn dọc trên màn hình hẹp; ghim hàng nút Cancel/Save xuống đáy dialog | `evidence/task3/C2_chrome_android_phone.png` · `C3_chrome_android_phone.png` | |
| T3-01 | C / C1 — Users Management | **Usability** | Ở độ rộng điện thoại, bảng Users **mất 5 trên 7 cột** — chỉ còn USER và ACTIONS. Các cột ROLE, MEMBER CODE, STATUS, CREATED, UPDATED biến mất hoàn toàn, không có cách nào xem được. Tên và email trong cột còn lại cũng bị cắt cụt ("NAM ĐINH H", "23127430@stu") | 1. Mở `/dashboard/admin/users` trên điện thoại (đã kiểm trên Galaxy S24, Android 15, Chrome)<br>2. Đăng nhập admin<br>3. Đối chiếu số cột với bản desktop.<br>**Kỳ vọng:** admin vẫn biết được vai trò và trạng thái của user, hoặc ít nhất có cách mở rộng để xem. **Thực tế:** thông tin bị ẩn hẳn, không có nút mở rộng, không cuộn ngang được.<br>Hệ quả: trên điện thoại admin **không thể biết user nào đang bị khoá hay giữ vai trò gì** — mà đó chính là mục đích của màn hình này.<br>Heuristic: Nielsen #1 (Visibility of system status), #6 (Recognition rather than recall); checklist `G-07`, `G-18`, `S-10` | *(chấm)* | Chuyển bảng sang dạng thẻ (card) trên màn hình hẹp, mỗi thẻ hiển thị đủ Role · Member Code · Status; hoặc cho phép cuộn ngang; hoặc thêm nút mở rộng từng dòng | `evidence/task3/C1_chrome_android_phone.png` | |
| T2-01 | | | | | | | `evidence/task2/` | |
| T3-01 | | | | | | | `evidence/task3/` | |

---

## Thống kê (điền khi hoàn tất — dùng cho README self-assessment)

| Chỉ số | Số lượng |
|---|---|
| Tổng phát hiện | |
| — loại Bug | |
| — loại Usability | |
| Severity 4 | |
| Severity 3 | |
| Severity 2 | |
| Severity 1 | |
| Số submission đã gửi Google Form | |

> ⚠️ Số dòng trong bảng trên **phải bằng** số submission Google Form.
