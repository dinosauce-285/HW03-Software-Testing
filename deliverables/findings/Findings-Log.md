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
| **T1B-02** | C / C2 + C3 — dialog Edit User và Create New User | **Usability** | Trường bắt buộc **không có dấu hiệu nào nhìn thấy được** trước khi submit. Không dấu `*`, không chữ "bắt buộc". Ràng buộc chỉ tồn tại ở thuộc tính HTML `required` (3 trường ở C2, 4 trường ở C3) — vô hình với người dùng | 1. Mở dialog Add User hoặc Edit User<br>2. Quan sát nhãn các trường trước khi bấm gì.<br>**Kỳ vọng:** biết trường nào bắt buộc trước khi điền. **Thực tế:** phải submit rồi mới biết, qua thông báo lỗi.<br>Đo được: `*` xuất hiện 0 lần trong dialog; `required` có ở tầng HTML nhưng không render ra giao diện.<br>Heuristic: Nielsen #5 (Error prevention) · checklist `F-02` | *(chấm)* | Thêm dấu `*` đỏ cạnh nhãn của trường bắt buộc, hoặc ghi "(bắt buộc)" | `evidence/task1b/C3-validation-audit.png` | |
| **T1B-03** | C / C3 — dialog Create New User | **Usability** | Sau khi submit lỗi, **focus không nhảy về trường lỗi đầu tiên** mà vẫn nằm trên nút Create User. Người dùng bàn phím phải Tab ngược lên để sửa | 1. Mở Add User → bấm **Create User** khi form rỗng<br>2. Kiểm `document.activeElement`.<br>**Kỳ vọng:** focus về trường lỗi đầu tiên. **Thực tế:** `BUTTON[button]` — vẫn ở nút submit.<br>Heuristic: S13 tr.18 *"proper focus order"* · checklist `F-08` | *(chấm)* | Sau khi validate thất bại, gọi `.focus()` vào trường lỗi đầu tiên | `evidence/task1b/C3-validation-audit.png` | |
| **T1B-04** | C / C3 — dialog Create New User | **Usability** | Ràng buộc mật khẩu (**tối thiểu 8 ký tự**) chỉ hiện **sau khi** submit thất bại. Trước đó quanh ô Password không có gợi ý nào | 1. Mở Add User<br>2. Quan sát vùng quanh ô Password → không có text hướng dẫn<br>3. Submit rỗng → mới thấy "Password must be at least 8 characters".<br>Heuristic: Nielsen #5 · checklist `S-20` | *(chấm)* | Ghi sẵn "Tối thiểu 8 ký tự" dưới ô Password ngay khi mở form | `evidence/task1b/C3-validation-audit.png` | |
| **T1B-05** | C / C1 — Users Management | **Usability** | Tương phản màu dưới ngưỡng WCAG 1.4.3 ở các thành phần chính: mục sidebar đang chọn **2.08:1**, nút **Export 2.71:1**, nút **Add User 2.08:1**, badge thông báo **4.14:1** — đều là chữ trắng trên nền màu nhạt, ngưỡng cần là 4.5:1 | 1. Mở `/dashboard/admin/users`<br>2. Đo tỉ lệ tương phản chữ/nền của sidebar active, nút Export, nút Add User.<br>**Kỳ vọng:** ≥ 4.5:1 với chữ thường. **Thực tế:** 2.08–4.14:1.<br>*Giới hạn phép đo: chỉ tính phần tử khai màu bằng `rgb()`; 75 phần tử dùng `lab()` chưa quy đổi được.*<br>Heuristic: WCAG 1.4.3 · Shneiderman #2 · checklist `G-12` | *(chấm)* | Làm đậm màu nền nút, hoặc đổi chữ trắng sang chữ tối trên nền nhạt | `evidence/task1b/C1-G-12-contrast.png` | |
| **T1B-06** | C / C1 — Users Management | **Usability** | Khu quản trị **không có breadcrumb** ở bất kỳ cấp nào; người dùng chỉ định vị được bằng mục active trên sidebar | 1. Mở bất kỳ trang nào dưới `/dashboard/admin`<br>2. Tìm breadcrumb → không có phần tử nào.<br>Heuristic: S13 tr.17 *"Breadcrumb Navigation"* · checklist `N-03` | *(chấm)* | Thêm breadcrumb `Dashboard / Admin / Users Management` | `evidence/task1b/C1-N-03-no-breadcrumb.png` | |
| **T1B-07** | C / C1 — Users Management | **Usability** | Ở mức **zoom 200%** (khung nhìn ~720px) nội dung **tràn ngang**: `scrollWidth` 1031 so với `clientWidth` 705. Người dùng phải cuộn ngang mới đọc hết bảng | 1. Mở `/dashboard/admin/users` trên desktop<br>2. Zoom trình duyệt lên 200% (hoặc thu cửa sổ còn ~720px)<br>3. So `document.documentElement.scrollWidth` với `clientWidth`.<br>**Kỳ vọng:** nội dung xuống dòng / thu gọn, không cuộn ngang. **Thực tế:** tràn 326px.<br>Heuristic: WCAG 1.4.4 (Resize text) · checklist `G-13` | *(chấm)* | Cho bảng cuộn trong khung riêng (`overflow-x:auto` ở container) thay vì đẩy cả trang tràn; hoặc thu gọn cột ở breakpoint hẹp | `evidence/task1b/C1-G-13-zoom200.png` | |
| **T1B-08** | C / C2 + C3 — dialog Edit User và Create New User | **Bug** | Nhập dở dữ liệu rồi bấm **Esc** → dialog **đóng ngay và mất sạch nội dung đã nhập**, không có cảnh báo nào. Với form 8 trường như Create New User, một phím Esc lỡ tay là mất toàn bộ công nhập | 1. Mở dialog **Add User**<br>2. Nhập nội dung vào một hoặc nhiều trường<br>3. Bấm phím **Esc**.<br>**Kỳ vọng:** hỏi "Bạn có chắc muốn huỷ? Dữ liệu chưa lưu sẽ mất". **Thực tế:** đóng thẳng, không hỏi, mở lại thì form rỗng.<br>Đo được: sau Esc, `[role="dialog"]` biến mất; không có chuỗi "unsaved/discard/chưa lưu" nào trong DOM.<br>Heuristic: Nielsen #5 (Error prevention), Shneiderman #6 · checklist `F-12` | *(chấm)* | Chặn Esc khi form đã có thay đổi, hoặc hiện dialog xác nhận huỷ | `evidence/task1b/C3-F-12-no-warning.png` | |
| **T1B-09** | C / C2 + C3 — dialog Edit User và Create New User | **Usability** | Dialog **không có tên có thể truy cập được**. Tiêu đề "Edit User" / "Create New User" chỉ là `<div>` bình thường, không phải thẻ heading, và dialog không có `aria-labelledby` lẫn `aria-label` → trình đọc màn hình chỉ đọc "dialog" mà không biết là dialog gì | 1. Mở dialog Add User<br>2. Kiểm `[role="dialog"]`: `querySelectorAll('h1,h2,h3,h4')` → **rỗng**; `aria-labelledby` và `aria-label` → **không có**.<br>**Kỳ vọng:** dialog có tên đọc được. **Thực tế:** chỉ có text trong div, không liên kết ngữ nghĩa.<br>Đi kèm: nhãn các trường cũng không gắn `for`/`id` với ô nhập.<br>Heuristic: WCAG 4.1.2 · Shneiderman #2 (Seek universal usability) · checklist `F-01`, `G-01` | *(chấm)* | Đổi tiêu đề dialog thành `<h2 id="dlg-title">` và thêm `aria-labelledby="dlg-title"` vào `[role="dialog"]`; gắn `for`/`id` cho từng cặp nhãn–ô nhập | `evidence/task1b/C3-validation-audit.png` | |
| **T1B-10** | C / C1 + C2 + C3 — toàn luồng quản lý user | **Bug** | Hệ thống **im lặng hoàn toàn sau mọi thao tác ghi dữ liệu**. Chạy trọn chuỗi tạo → sửa → xoá một user: cả ba lần đều **không có toast, không có thông báo tại chỗ, không có dấu hiệu nào**. Người dùng chỉ suy ra kết quả nhờ bảng tự thay đổi | 1. Đăng nhập admin → `/dashboard/admin/users`<br>2. **Tạo**: Add User → điền đủ → Create User → quan sát<br>3. **Sửa**: mở Edit User → đổi công tắc Active → Save Changes → quan sát<br>4. **Xoá**: nút thùng rác → Confirm → quan sát.<br>**Kỳ vọng:** mỗi thao tác có thông báo xác nhận thành công. **Thực tế:** cả ba lần không có thông báo nào.<br>Đo được: sau mỗi thao tác, `document.querySelector('[class*=toast],[role=status],[role=alert],[data-sonner-toast]')` đều **rỗng**.<br>Hệ quả: nếu thao tác thất bại ở phía máy chủ, admin cũng **không biết** — dễ nghĩ đã lưu trong khi chưa.<br>Heuristic: Nielsen #1 (Visibility of system status), Shneiderman #3 (Offer informative feedback) · checklist `S-01`, `S-02`, `S-09` | *(chấm)* | Thêm toast xác nhận cho cả ba luồng tạo / sửa / xoá, và toast lỗi khi máy chủ trả về thất bại | `evidence/task1b/C3-S-01-no-toast.png` | |
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
