# Bug & Usability Findings Log

> **Đây là sản phẩm số 2 của đề §7** — *"Tổng hợp tất cả phát hiện của bạn thành một tập tin"*.
> Log phải gộp **mọi thứ đã gửi lên Google Form**, tối thiểu 9 cột: *ID · Kịch bản/Màn hình · Loại (Bug | Usability) · Mô tả · Bước tái hiện/Heuristic · Mức nghiêm trọng · Đề xuất sửa · Tham chiếu ảnh · Thời điểm gửi form.*
> *"Tập tin tổng hợp và các submission trên form phải nhất quán; TA có thể đối chiếu số lượng."*

**Sinh viên:** 23127262 – Lý Quốc Thạnh · **Kịch bản:** C — Admin quản lý người dùng
**Form nộp:** https://forms.gle/CJQFQCAXcsDbXDMM9 *(dùng email `23127262@student.hcmus.edu.vn`)*

---

## Quy ước

**ID:** `<Task>-<số thứ tự>` — `T1B-` từ chạy checklist · `T2-` từ user testing · `T3-` từ cross-platform

**Loại:**
- `Bug` — hệ thống làm **sai** so với thứ nó phải làm
- `Usability` — hệ thống làm đúng nhưng người dùng vẫn khó dùng

**Mức nghiêm trọng** — thang Nielsen 0–4, nguyên văn ở [`references/Task1A_Heuristics-Reference.md` §5](../../references/Task1A_Heuristics-Reference.md).
Ba yếu tố quyết định: **frequency** (bao nhiêu người gặp, gặp bao lâu một lần) · **impact** (vượt qua được không) · **persistence** (một lần rồi quen, hay lặp lại mãi).

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
| **T1B-01** | C / C3 — dialog Create New User | **Bug** | Nhãn, placeholder và thông báo lỗi của hai trường tên **không khớp nhau**: ô nhãn "First Name" có placeholder "Last Name" và báo lỗi "Last name is required"; ô nhãn "Last Name" thì ngược lại | 1. Đăng nhập admin → `/dashboard/admin/users`<br>2. Bấm **Add User**<br>3. Để trống toàn bộ, bấm **Create User**<br>4. Đối chiếu nhãn ↔ placeholder ↔ thông báo lỗi của 2 ô đầu.<br>**Kỳ vọng:** ba thứ cùng nói về một trường. **Thực tế:** nhãn nói một đằng, placeholder và lỗi nói một nẻo.<br>Tái hiện trên **cả 7 môi trường** đã kiểm ở Task 3.<br>Heuristic: Nielsen #2, #9 · checklist `F-01`, `F-04`, `F-05` | **3** | Sửa `label` / `placeholder` / thông báo lỗi cho khớp đúng trường. Nhiều khả năng hai trường bị hoán vị lúc khai báo schema validation | [`task1b/T1B-01-swapped-name-validation.png`](../../evidence/task1b/T1B-01-swapped-name-validation.png) | |
| **T3-01** | C / C1 — Users Management | **Usability** | Ở độ rộng điện thoại, bảng Users **mất 5 trên 7 cột** — chỉ còn USER và ACTIONS. ROLE, MEMBER CODE, STATUS, CREATED, UPDATED biến mất hoàn toàn. Tên và email trong cột còn lại cũng bị cắt cụt (`NAM ĐINH H`, `23127430@stu`) | 1. Mở `/dashboard/admin/users` trên điện thoại (Galaxy S24, Android 15, Chrome)<br>2. Đăng nhập admin<br>3. Đối chiếu số cột với bản desktop.<br>**Kỳ vọng:** vẫn xem được vai trò và trạng thái, hoặc có cách mở rộng. **Thực tế:** ẩn hẳn, không nút mở rộng, không cuộn ngang được.<br>Hệ quả: trên điện thoại admin **không biết user nào đang bị khoá hay giữ vai trò gì** — đúng mục đích của màn hình này.<br>Heuristic: Nielsen #1, #6 · checklist `G-07`, `G-18`, `S-10` | **2** | Chuyển bảng sang dạng thẻ trên màn hình hẹp, mỗi thẻ đủ Role · Member Code · Status; hoặc cho cuộn ngang; hoặc thêm nút mở rộng từng dòng | [`task3/C1_chrome_android_phone.png`](../../evidence/task3/C1_chrome_android_phone.png) | |
| **T3-02** | C / C2 + C3 — dialog Edit User và Create New User | **Bug** | Trên màn hình điện thoại **cả hai dialog tràn khỏi cạnh phải** và bị cắt. Hệ quả nặng nhất: **không nhìn thấy nút Save Changes / Create User** nên không hoàn thành được thao tác. Riêng C2 còn mất Role, Member Code và công tắc Active | 1. Mở `/dashboard/admin/users` trên điện thoại (Galaxy S24, Android 15, Chrome)<br>2. Chạm icon bút chì một dòng bất kỳ → dialog Edit User<br>3. Quan sát cạnh phải và đáy dialog<br>4. Lặp lại với nút **Add User** → dialog Create New User.<br>**Kỳ vọng:** dialog co vừa màn hình, luôn thấy nút xác nhận. **Thực tế:** dialog giữ nguyên bề rộng desktop, tràn ra ngoài, nút xác nhận nằm ngoài vùng nhìn thấy.<br>Heuristic: Nielsen #1, #3 · checklist `G-07`, `F-13` | **3** | Đặt `max-width: 100vw`, cho dialog cuộn dọc trên màn hình hẹp, ghim hàng nút Cancel/Save xuống đáy dialog | [`task3/C2_chrome_android_phone.png`](../../evidence/task3/C2_chrome_android_phone.png) · [`C3_...`](../../evidence/task3/C3_chrome_android_phone.png) | |

> ⏳ **Ba mức nghiêm trọng ở trên là đề xuất, chờ bạn duyệt.** Lý do chấm ở §Diễn giải bên dưới.

---

## Diễn giải mức nghiêm trọng

| ID | Mức | Frequency | Impact | Persistence | Vì sao không cao/thấp hơn |
|---|---|---|---|---|---|
| T1B-01 | **3** | Cao — mọi lần tạo user mới | Cao — người làm theo placeholder sẽ **nhập họ vào ô tên**, dữ liệu sai đi thẳng vào CSDL | Vĩnh viễn — nhãn và placeholder mâu thuẫn mãi, không "quen dần" được | Không phải **4** vì vẫn tạo được user và sửa lại được sau. Không phải **2** vì gây **sai dữ liệu**, không chỉ khó chịu |
| T3-01 | **2** | Thấp — chỉ khi admin dùng điện thoại | Trung bình — mất thông tin nhưng **không mất dữ liệu**, mở desktop là xem được | Vĩnh viễn ở độ rộng đó | Không phải **3** vì có đường vòng rõ ràng (dùng desktop) và quản trị viên chủ yếu làm trên desktop |
| T3-02 | **3** | Thấp — chỉ trên điện thoại | **Cao — tác vụ bất khả thi**, nút xác nhận không chạm tới được | Vĩnh viễn | Cao hơn T3-01 vì đây là **chặn hoàn toàn** chứ không chỉ ẩn thông tin. Không phải **4** vì không phải luồng chính của sản phẩm |

---

## Thống kê

| Chỉ số | Số lượng |
|---|---|
| **Tổng phát hiện** | **3** |
| — loại `Bug` | 2 |
| — loại `Usability` | 1 |
| Severity 4 | 0 |
| Severity 3 | 2 |
| Severity 2 | 1 |
| Severity 1 | 0 |
| Từ Task 1B | 1 |
| Từ Task 2 | 0 *(chưa chạy)* |
| Từ Task 3 | 2 |
| **Đã gửi Google Form** | **0** |

### Kế hoạch nộp form

Nộp **một lần duy nhất** sau khi hoàn tất cả ba task — không nộp lắt nhắt từng phát hiện. Đề §7 chỉ yêu cầu số lượng khớp nhau lúc nộp bài, không yêu cầu nộp ngay khi phát hiện.

| Nguồn | Trạng thái | Số phát hiện |
|---|---|---|
| Task 1B — chạy 88 mục × 3 màn hình | ⬜ **chưa chạy** | 1 *(mới có từ khảo sát ban đầu)* |
| Task 2 — 5 phiên user testing | ⬜ **chưa chạy** | 0 |
| Task 3 — ma trận 21 ô | ✅ xong | 2 |
| **Tổng hiện tại** | | **3** |

**Checklist trước khi nộp form:**

- [ ] Task 1B chạy xong, mọi mục `Failed` đáng kể đã thành một dòng ở bảng trên
- [ ] Task 2 chạy xong, mọi phát hiện severity ≥ 2 đã thành một dòng
- [ ] Duyệt lại mức nghiêm trọng của toàn bộ danh sách **theo cùng một thước đo** — chấm cả loạt cuối cùng nhất quán hơn chấm rời rạc từng lúc
- [ ] Nộp từng dòng lên https://forms.gle/CJQFQCAXcsDbXDMM9 bằng email `23127262@student.hcmus.edu.vn`
- [ ] Điền **Thời điểm gửi form** cho từng dòng
- [ ] Kiểm lần cuối: **số dòng bảng trên = số submission trên form**
