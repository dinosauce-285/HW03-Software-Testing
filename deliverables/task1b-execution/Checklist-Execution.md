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
| Nguyễn Đình Thái Hưng | 23127373 | **D** | D1–D4 support request |

Không có thành viên nào trùng kịch bản, cũng không trùng màn hình.

---

## 1b. Ghi chú khảo sát ban đầu — 01/08/2026

Khảo sát bằng Playwright (chỉ mở và quan sát, **không lưu, không xoá** vì hệ thống dùng chung). Các quan sát dưới đây **cần bạn tự kiểm lại trên trình duyệt** trước khi đưa vào kết quả chính thức.

| Quan sát | Ảnh hưởng tới mục checklist |
|---|---|
| **Không có breadcrumb** ở khu admin | `N-03` sẽ Failed hoặc N/A ở cả 3 màn hình |
| Avatar là **chữ viết tắt trong vòng tròn**, không phải ảnh (`<img>` = 0) | `G-17` cần đổi cách kiểm: xem tên dài như "KHOA NGUYỄN QUANG ĐĂNG" → viết tắt "KNQĐ" có tràn vòng tròn không |
| Cột CREATED/UPDATED hiển thị chuỗi **"Tôi là Admin"** trong giao diện English | ~~Ứng viên Failed cho `G-14`~~ → **đã bác bỏ**: đó là *tên hiển thị của tài khoản admin* (dữ liệu), không phải chuỗi giao diện. Kiểm thực tế cho thấy i18n phủ 13/13 chuỗi |
| Trường bắt buộc **không có dấu `*`** trước khi submit | Ứng viên Failed cho `F-02` |
| Thông báo lỗi hiện **inline ngay dưới từng trường** | Ứng viên Passed cho `F-04` |
| Dialog xoá có câu *"This action cannot be undone"* | Ứng viên Passed cho `S-08` |
| Member Code rỗng hiển thị `-` | Kiểm `G-18` |
| Bộ lọc cột ROLE: All Roles / Admin / Guest / Lecturer / Student | Kiểm `N-16`, `N-09` |
| Chưa mở được menu đổi ngôn ngữ bằng script | Cần bạn tự bấm cờ ở header để kiểm `G-14`, `G-15`, `G-16` |

Ảnh khảo sát tham khảo: `scratchpad/ems-survey/` — **không dùng làm bằng chứng nộp bài**; đề §12 yêu cầu ảnh phải là màn hình **bạn** đã kiểm tra, nên hãy tự chụp lại khi chạy checklist.

---

## 2. Bảng chạy checklist

> **Nguồn:** 88 mục của [`../task1a-checklist/GUI-Checklist.md`](../task1a-checklist/GUI-Checklist.md).
> Mỗi ô nhận `Passed` · `Failed` · `N/A` — **không để trống khi nộp**.
> `Failed` bắt buộc kèm lý do ở cột Notes và ảnh trong `evidence/task1b/`.

**Cách các ô hiện có được điền — 02/08/2026:**

| Loại ô | Cách xác định | Độ tin cậy |
|---|---|---|
| **N/A** | Mục thuộc kịch bản A/B/D, không có control tương ứng trên C1–C3 | Chắc chắn — lý do ghi ở cột Notes |
| **Passed / Failed** | Đo trực tiếp trên EMS bằng Playwright: đọc DOM, computed style, thử submit, thử phím Esc | Có bằng chứng số ở cột Notes |
| *(trống)* | Cần mắt người xét (thẩm mỹ, ngữ nghĩa, luồng nhiều bước) hoặc cần thao tác ghi dữ liệu | **Bạn tự điền** |

> ⚠️ Các ô trống **không phải** đã kiểm mà không kết luận được — chúng là phần chưa kiểm. Đề §2 yêu cầu người review, nên phần này để bạn làm.

### IA-01 — Chuẩn UI chung (18 mục)

| ID | Mục kiểm tra | C1 | C2 | C3 | Notes / bằng chứng |
|---|---|---|---|---|---|
| G-01 | Tiêu đề trang khớp với mục đang được chọn trên sidebar/menu | Passed | N/A | N/A | **C1:** Tiêu đề "Users Management" khớp mục sidebar đang active<br>**C2:** Mục này nói về tiêu đề trang khớp mục sidebar — dialog không phải trang riêng nên không áp dụng<br>**C3:** Mục này nói về tiêu đề trang khớp mục sidebar — dialog không phải trang riêng nên không áp dụng |
| G-02 | Cùng một chức năng dùng cùng một nhãn ở mọi màn hình (không lúc "Export" lúc "Xuất file") |  |  |  | **C1:** ⏳ Đo được — nút trên 3 màn hình admin: Users [Export, Add User] · Categories [Add Category] · Campuses [Add Campus]. Bạn xét mẫu đặt tên "Add X" có nhất quán không |
| G-03 | Trong bảng dữ liệu: text canh trái, số canh phải, trạng thái canh giữa — nhất quán ở mọi bảng |  |  |  | **C1:** ⏳ Đo được — canh lề: USER=start, sáu cột còn lại=center. Bạn xét: MEMBER CODE là số nhưng canh giữa, có nhất quán với quy ước không |
| G-04 | Toàn hệ thống dùng tối đa 2 họ font; cỡ chữ theo thang nhất quán (tiêu đề / nội dung / chú thích) | Passed | Passed | Passed | **C1:** 1 họ font (ui-sans-serif), 6 cỡ chữ theo thang: 11/12/14/16/18/24px<br>**C2:** 1 họ font, cỡ chữ đồng nhất trong dialog<br>**C3:** 1 họ font, cỡ chữ đồng nhất trong dialog |
| G-05 | Màu dùng đúng ngữ nghĩa: màu chính cho hành động chính, **đỏ chỉ dành cho lỗi / hành động phá huỷ** |  |  |  | **C1:** ⏳ Đo được — phần tử màu đỏ duy nhất là nút "Delete user". Bạn xét xem có chỗ nào dùng đỏ sai ngữ cảnh không |
| G-06 | Mỗi màn hình chỉ có **một** nút hành động chính; các nút còn lại ở dạng phụ |  |  |  |  |
| G-07 | Nội dung không tràn ngang gây thanh cuộn ngang ở độ rộng màn hình ≥ 1280px | Passed | Passed | Passed | **C1:** scrollWidth 1425 = clientWidth 1425 → không cuộn ngang ở 1440px<br>**C2:** dialog scrollWidth 448 = clientWidth 448, không tràn ở desktop<br>**C3:** dialog scrollWidth 448 = clientWidth 448, không tràn ở desktop |
| G-08 | Trạng thái rỗng (empty state) có thông điệp giải thích **và** gợi ý hành động tiếp theo, không phải vùng trắng trơn | Failed |  |  | **C1:** Empty state hiện đúng thông điệp giải thích: *"No users found matching your filters."* nhưng **không có gợi ý hành động tiếp theo** — không nút "Xoá bộ lọc", không link nào. Mục này đòi cả hai. *(Ranh giới — câu chữ có ám chỉ "filters" nên bạn có thể nâng lên Passed nếu thấy đủ)* |
| G-09 | Trạng thái đang tải có skeleton/spinner; khi dữ liệu về **không gây nhảy layout** | Passed |  |  | **C1:** Thấy 2 phần tử skeleton/animate-pulse trong lúc tải dữ liệu bảng |
| G-10 | Ảnh giữ đúng tỉ lệ khung, không bị méo hay co giãn sai | N/A | N/A | N/A | Avatar là chữ viết tắt, không có thẻ ảnh nào trên C1–C3 |
| G-11 | Thuật ngữ dùng ngôn ngữ người dùng — **không lộ mã trạng thái nội bộ** ra giao diện (vd hiện thẳng `OUTSIDE_CHECKIN_WINDOW`) | Passed |  |  | **C1:** Không tìm thấy chuỗi dạng UPPER_SNAKE lộ ra giao diện |
| G-12 | Tỉ lệ tương phản chữ/nền ≥ 4.5:1 (chữ thường), ≥ 3:1 (chữ lớn) | Failed | Failed | Failed | **C1:** Tương phản dưới ngưỡng WCAG 1.4.3: sidebar active 2.08:1 · nút Export 2.71:1 · nút Add User 2.08:1 · badge 4.14:1 (cần 4.5). *(chỉ tính phần tử dùng màu rgb; 75 phần tử dùng lab() không quy đổi được nên chưa xét)*<br>**C2:** Nút **Save Changes**: chữ trắng trên nền xanh, tương phản **2.08:1** (cần 4.5). Bỏ qua 8 phần tử dùng lab()<br>**C3:** Nút **Create User**: chữ trắng trên nền xanh, tương phản **2.08:1** (cần 4.5). Bỏ qua 9 phần tử dùng lab() |
| G-13 | Nội dung vẫn đọc được và không vỡ layout khi zoom trình duyệt **200%** | Failed |  |  | **C1:** Ở khung nhìn 720px (tương đương zoom 200%): scrollWidth **1031** vs clientWidth **705** → nội dung tràn ngang, phải cuộn để đọc |
| G-14 | Chuyển EN/VI dịch **toàn bộ** text hiển thị — không còn chuỗi lẫn ngôn ngữ trên cùng màn hình | Passed |  |  | **C1:** Chuyển sang Tiếng Việt → **0/13** chuỗi EN kiểm tra còn sót. Toàn bộ sidebar, tiêu đề, nút và tiêu đề cột đều dịch: "Quản lý người dùng", "Xuất", "Thêm người dùng", "NGƯỜI DÙNG", "VAI TRÒ", "MÃ THÀNH VIÊN", "TRẠNG THÁI" |
| G-15 | Text tiếng Việt (dài hơn EN) không làm vỡ nút, cắt chữ, hay xuống dòng xấu | Passed |  |  | **C1:** Ở tiếng Việt không phần tử nào bị tràn hay cắt chữ (`scrollWidth` ≤ `clientWidth` với mọi button/th/span/a) |
| G-16 | Ngôn ngữ đã chọn được **lưu lại** và giữ nguyên sau khi tải lại trang / mở trang khác | Passed |  |  | **C1:** Tải lại trang sau khi đổi → ngôn ngữ vẫn giữ Tiếng Việt |
| G-17 | Avatar dạng chữ viết tắt phải nằm gọn trong vòng tròn với **tên dài nhiều từ** (vd "KHOA NGUYỄN QUANG ĐĂNG" → "KNQĐ"), không tràn, không đè lên tên | Passed |  |  | **C1:** 4 avatar viết tắt (AÂTN, KL, TPĐ, NAQ), không cái nào tràn khỏi vòng tròn |
| G-18 | Member Code hiển thị đầy đủ, không bị cắt bởi độ rộng cột; giá trị rỗng có ký hiệu thống nhất và định dạng đồng nhất giữa các dòng | Passed |  |  | **C1:** Member Code hiển thị đủ, không bị cắt; giá trị rỗng dùng ký hiệu "-" thống nhất |

### IA-02 — Forms (26 mục)

| ID | Mục kiểm tra | C1 | C2 | C3 | Notes / bằng chứng |
|---|---|---|---|---|---|
| F-01 | Mọi ô nhập có nhãn hiển thị **thường trực**, không chỉ dựa vào placeholder (placeholder biến mất khi gõ) |  | Passed | Passed | **C2:** Có nhãn thường trực cho cả 7 trường. **Ghi chú:** nhãn không gắn `for`/`id` với ô nhập → bấm nhãn không focus vào ô, screen reader không đọc đúng cặp<br>**C3:** Có nhãn thường trực cho cả 8 trường. **Ghi chú:** không gắn `for`/`id`, giống C2 |
| F-02 | Trường bắt buộc được đánh dấu rõ (dấu `*` hoặc chữ "bắt buộc") **trước khi** người dùng submit |  | Failed | Failed | **C2:** Không có dấu `*` nào, không có chữ "bắt buộc". Chỉ có thuộc tính HTML `required` (3 trường) — **vô hình với người dùng** trước khi submit<br>**C3:** Không dấu `*`, không chữ "bắt buộc"; chỉ có `required` ở tầng HTML (4 trường) |
| F-03 | Submit khi thiếu trường bắt buộc → hệ thống **chặn**, không cho lưu |  |  | Passed | **C3:** Submit rỗng → dialog vẫn mở, không tạo user |
| F-04 | Thông báo lỗi hiện **ngay cạnh trường bị lỗi**, không chỉ ở toast góc màn hình |  |  | Passed | **C3:** Lỗi hiện ngay dưới từng trường (class `mt-1 text-xs text-red-500`), không chỉ ở toast |
| F-05 | Thông báo lỗi nói rõ **cách sửa**, không chỉ nói "dữ liệu không hợp lệ" |  |  | Passed | **C3:** Lỗi nói rõ từng trường: "Last name is required" · "Invalid email address" · "Role is required" · "Password must be at least 8 characters" |
| F-06 | Giá trị mặc định của mỗi trường hợp lý (vd ngày bắt đầu = hôm nay), không rỗng hay vô nghĩa |  |  |  | **C2:** ⏳ Giá trị mặc định C2: điền sẵn dữ liệu user đang sửa (Nguyen / Trang / email), Active=true. Bạn xét có hợp lý không<br>**C3:** ⏳ Giá trị mặc định C3: mọi ô rỗng, riêng checkbox Active=true. Bạn xét mặc định bật Active có hợp lý không |
| F-07 | Ràng buộc được áp **ngay tại control** (date picker chặn ngày không hợp lệ) thay vì chỉ báo lỗi sau khi submit | N/A | N/A | N/A | Không có date picker / control ràng buộc kiểu này trên C1–C3 |
| F-08 | Sau khi submit lỗi, **focus tự nhảy về trường lỗi đầu tiên** |  |  | Failed | **C3:** Sau submit lỗi, focus vẫn nằm trên **nút Create User**, không nhảy về trường lỗi đầu tiên |
| F-09 | Upload nêu rõ **định dạng, dung lượng tối đa và tỉ lệ khung** yêu cầu *trước khi* người dùng chọn file | N/A | N/A | N/A | Không có upload file trong pool C |
| F-10 | Upload có chỉ báo tiến trình, có thể huỷ; thất bại thì báo lỗi rõ và cho thử lại | N/A | N/A | N/A | Không có upload file trong pool C |
| F-11 | Nút Submit bị khoá trong lúc đang gửi để tránh **submit trùng** (double-submit) |  |  |  |  |
| F-12 | Rời form khi đang nhập dở → **cảnh báo mất dữ liệu** trước khi điều hướng |  | Failed | Failed | **C2:** Nhập dở một trường rồi bấm Esc → dialog **đóng ngay, mất sạch nội dung đã nhập**, không có cảnh báo nào<br>**C3:** Nhập dở một trường rồi bấm Esc → dialog **đóng ngay, mất sạch nội dung đã nhập**, không có cảnh báo nào |
| F-13 | Mọi ô nhập và control thao tác được **hoàn toàn bằng bàn phím**, có viền focus nhìn thấy rõ |  | Passed | Passed | **C2:** Thao tác bàn phím được, ô đang focus có outline solid 1px<br>**C3:** Thao tác bàn phím được, outline solid 1px |
| F-14 | **Validation chéo ngày/giờ:** ngày kết thúc trước ngày bắt đầu bị chặn, có báo lỗi rõ | N/A | N/A | N/A | Validation ngày/giờ sự kiện — kịch bản A |
| F-15 | **Validation chéo:** thời gian đóng đăng ký không được sau thời điểm sự kiện kết thúc | N/A | N/A | N/A | Thời gian đóng đăng ký — kịch bản A |
| F-16 | **Trường bắt buộc có điều kiện:** khi bật một loại đăng ký (Student/Lecturer/Guest), mục con **Roles** hiện ra với công tắc **Is Unlimited**; khi tắt, | N/A | N/A | N/A | Công tắc loại đăng ký — kịch bản A |
| F-17 | Bật/tắt công tắc (Allow Additional Role, Allow Student/Lecturer/Guest Registration…) làm ẩn/hiện **đúng** nhóm trường phụ thuộc, không để lại trường m | N/A | N/A | N/A | Công tắc form sự kiện — kịch bản A |
| F-18 | Upload sai tỉ lệ quy định (thumbnail **4:3**, banner **24:9**) được báo trước khi lưu; preview hiển thị đúng tỉ lệ | N/A | N/A | N/A | Tỉ lệ ảnh 4:3 / 24:9 — kịch bản A |
| F-19 | Rich-text editor có Undo/Redo và **giữ nguyên định dạng** sau khi lưu rồi mở lại | N/A | N/A | N/A | Rich-text editor — kịch bản A |
| F-20 | Upload nhiều ảnh nêu rõ **định dạng hỗ trợ, dung lượng tối đa mỗi ảnh và số lượng ảnh tối đa** trước khi người dùng chọn file | N/A | N/A | N/A | Upload nhiều ảnh — kịch bản D |
| F-21 | Upload ảnh có preview và nút xoá theo từng file; file sai định dạng, vượt dung lượng hoặc vượt số lượng bị từ chối bằng thông báo nêu rõ giới hạn | N/A | N/A | N/A | Preview/xoá ảnh — kịch bản D |
| F-22 | Công tắc **Public Event**: trạng thái được lưu đúng và giữ nguyên sau khi Save rồi mở lại; khi tắt, sự kiện không còn hiển thị trên trang khám phá côn | N/A | N/A | N/A | Public Event — kịch bản A |
| F-23 | Trường **Album Link** từ chối URL sai định dạng bằng thông báo lỗi tại chỗ, trước khi lưu | N/A | N/A | N/A | Album Link — kịch bản A |
| F-24 | **Reminder before hours** chỉ nhận số nguyên không âm hợp lý; đơn vị (giờ) rõ ràng trong nhãn; giá trị 0/rỗng được xử lý nhất quán | N/A | N/A | N/A | Reminder before hours — kịch bản A |
| F-25 | **Validation chéo Check-in:** giờ đóng check-in phải sau giờ mở check-in, có báo lỗi rõ ràng và đúng ngữ cảnh (không lặp lại tên trường bị so sánh) | N/A | N/A | N/A | Giờ check-in — kịch bản A |
| F-26 | Khung giờ **Check-in** (mở/đóng) được đối chiếu hợp lý với khung giờ Start/End của sự kiện, có cảnh báo nếu lệch quá xa | N/A | N/A | N/A | Khung giờ check-in — kịch bản A |

### IA-03 — Navigation (19 mục)

| ID | Mục kiểm tra | C1 | C2 | C3 | Notes / bằng chứng |
|---|---|---|---|---|---|
| N-01 | Menu chính cho phép truy cập tới **mọi khu vực lớn** của ứng dụng | Passed |  |  | **C1:** 8 mục sidebar phủ mọi khu vực lớn: Users · Categories · Academic Years · Campuses · Events · Support · User Guide · Analytics |
| N-02 | Mục đang xem được đánh dấu **active** rõ ràng trên sidebar/menu | Passed |  |  | **C1:** Mục đang xem được tô nền và đổi màu chữ |
| N-03 | Breadcrumb phản ánh **đúng đường đi**, và mỗi cấp bấm được để quay lui | Failed |  |  | **C1:** Khu admin **không có breadcrumb** ở bất kỳ cấp nào |
| N-04 | Mọi trang chi tiết có đường quay lại danh sách cha (nút Back hoặc breadcrumb) |  |  |  |  |
| N-05 | Link và nút dẫn tới **đúng** màn hình/hành động kỳ vọng; không có link chết | Passed |  |  | **C1:** Mọi thẻ a đều có href thật, không có href="#" hay javascript:void(0) |
| N-06 | Tab trong trang giữ đúng nội dung khi chuyển qua lại; tab đang chọn nhận biết được | N/A | N/A | N/A | Không có tab trong trang ở C1–C3 |
| N-07 | **Nút Back của trình duyệt** hoạt động đúng — không mất trạng thái, không submit lại form | Passed |  |  | **C1:** Bấm Back trình duyệt từ /users → về đúng /dashboard/admin, không mất trạng thái |
| N-08 | **Deep link:** copy URL trang chi tiết, mở ở tab mới vẫn vào đúng bản ghi | Passed |  |  | **C1:** Mở thẳng URL /dashboard/admin/users → HTTP 200, bảng render đủ dữ liệu |
| N-09 | **Bộ lọc / từ khoá tìm kiếm / số trang được giữ lại** khi quay về từ trang chi tiết | Passed |  |  | **C1:** Gõ "nguyen" (5 kết quả) → mở dialog → đóng → ô search vẫn giữ "nguyen" |
| N-10 | Sau khi lưu, người dùng được trả về **đúng ngữ cảnh cũ**, không bị đá về dashboard |  |  |  |  |
| N-11 | Thứ tự Tab bàn phím đi theo thứ tự đọc trực quan; **Esc đóng modal**; không có bẫy focus trong modal |  | Passed | Passed | **C2:** Bấm Esc đóng dialog<br>**C3:** Bấm Esc đóng dialog Create New User |
| N-12 | **Kéo-thả reorder:** dòng đang kéo có phản hồi thị giác rõ (mờ đi), các nút khác bị vô hiệu trong lúc kéo | N/A | N/A | N/A | Kéo-thả reorder — Categories/Settings |
| N-13 | Thứ tự sau khi kéo-thả được **lưu đúng** sau khi Save và giữ nguyên khi tải lại trang | N/A | N/A | N/A | Kéo-thả reorder — Categories/Settings |
| N-14 | Kéo-thả có **phương án thay thế không dùng chuột** (nút lên/xuống hoặc nhập số thứ tự) | N/A | N/A | N/A | Kéo-thả reorder — Categories/Settings |
| N-15 | Truy cập URL khu vực admin bằng tài khoản không đủ quyền → chuyển hướng hoặc báo lỗi rõ ràng, **không hiện trang trắng** | Passed |  |  | **C1:** Chưa đăng nhập mở `/dashboard/admin/users` → chuyển hướng `/login?callbackUrl=%2Fdashboard%2Fadmin%2Fusers`, hiện form đăng nhập, không phải trang trắng |
| N-16 | Cột bảng sắp xếp được phải có **chỉ báo hướng sắp xếp** (mũi tên tăng/giảm) và giữ nguyên tiêu chí sắp xếp khi chuyển trang |  |  |  | **C1:** ⏳ Không bấm được tiêu đề cột bằng script, không có `aria-sort`. Bạn tự bấm để xem có sắp xếp và chỉ báo hướng không |
| N-17 | Thông tin audit (ai tạo / ai sửa lần cuối, thời điểm) hiển thị đủ **người thực hiện và mốc thời gian**; giá trị thiếu có ký hiệu rõ ràng thay vì để tr |  |  |  |  |
| N-18 | Danh sách support request có tab **Pending / Resolved** nhận biết được tab đang chọn; khi request được xử lý, bản ghi xuất hiện ở đúng tab trạng thái | N/A | N/A | N/A | Tab Pending/Resolved — kịch bản D |
| N-19 | Khi nhấn **Clear filters** trên Dashboard, hệ thống xoá từ khoá tìm kiếm và các lựa chọn Category, Academic Context, Campus, Event Date, đồng thời làm | N/A | N/A | N/A | Clear filters Dashboard — kịch bản B |

### IA-04 — Feedback / State (25 mục)

| ID | Mục kiểm tra | C1 | C2 | C3 | Notes / bằng chứng |
|---|---|---|---|---|---|
| S-01 | Mọi hành động làm thay đổi dữ liệu đều có phản hồi rõ ràng (toast hoặc thông báo tại chỗ) |  |  |  |  |
| S-02 | Mức độ phản hồi **tương xứng**: thao tác nhỏ phản hồi nhẹ, thao tác lớn/hiếm phản hồi rõ rệt |  |  |  |  |
| S-03 | Thao tác kéo dài (> ~400ms) có chỉ báo đang xử lý; màn hình không đứng im vô cớ |  |  |  | **C1:** ⏳ Đo được — thao tác Export mất 0,4s, không thấy chỉ báo nào. Ngưỡng trong mục là 400ms nên đây là ranh giới, bạn quyết |
| S-04 | Toast tự tắt sau 3–5 giây, **không che** nội dung đang thao tác, và đóng thủ công được | N/A |  |  | **C1:** Không thao tác nào trên C1 sinh ra toast để đo (Export không hiện toast) |
| S-05 | Thông báo lỗi hệ thống dùng ngôn ngữ thường — không lộ mã lỗi, stack trace hay tên bảng CSDL | Passed |  |  | **C1:** Mở route sai → trang 404 "Page Not Found · The page you are looking for does not exist or has been moved" kèm nút Go Back; không lộ stack trace, tên bảng hay mã lỗi kỹ thuật |
| S-06 | Hành động phá huỷ (Delete, Block) có **dialog xác nhận** nêu rõ hậu quả và đối tượng bị tác động | Passed |  |  | **C1:** Dialog xoá nêu rõ đối tượng: "Are you sure you want to delete user Trang Nguyen?" |
| S-07 | Trong dialog xác nhận: nút mặc định là nút **an toàn**; nút phá huỷ có nhãn động từ cụ thể ("Xoá sự kiện") thay vì "OK" |  |  |  | **C1:** ⏳ Đo được — nút Cancel nền trắng, nút Confirm nền đỏ. Bạn xét nhãn "Confirm" có đủ cụ thể không (so với "Xoá user") |
| S-08 | Hành động **hoàn tác được**; nếu không hoàn tác được thì phải nói rõ điều đó *trước khi* xác nhận | Passed |  |  | **C1:** Dialog có câu "This action cannot be undone" trước khi xác nhận |
| S-09 | Kết thúc một chuỗi thao tác nhiều bước có thông báo **hoàn tất** rõ ràng |  |  |  |  |
| S-10 | Trạng thái được phân biệt **không chỉ bằng màu** — có thêm icon hoặc nhãn chữ | Passed |  |  | **C1:** Cột STATUS có nhãn chữ ("Active"), không chỉ dựa vào màu |
| S-11 | Bảng có nhiều màu trạng thái (EMS: 6 màu ở tab Participants) phải có **chú giải** hoặc tooltip giải nghĩa | N/A | N/A | N/A | Bảng 6 màu tab Participants — kịch bản A |
| S-12 | Trạng thái của nút phản ánh đúng trạng thái dữ liệu (sự kiện đã PUBLISHED thì không còn nút Publish) |  |  |  |  |
| S-13 | **Progress bar** phản ánh đúng tiến độ thật và cập nhật ngay khi dữ liệu thay đổi | N/A | N/A | N/A | Progress bar duyệt đăng ký — kịch bản A |
| S-14 | Danh sách **real-time** (log quét check-in) tự cập nhật mà không cần tải lại trang, và không làm mất vị trí đang đọc | N/A | N/A | N/A | Log check-in real-time — kịch bản A |
| S-15 | Các nhánh kết quả khác nhau được hiển thị **phân biệt rõ** (SUCCESS / ALREADY_CHECKED_IN / OUTSIDE_CHECKIN_WINDOW / PENDING_REVIEW) | N/A | N/A | N/A | Bốn nhánh kết quả quét — kịch bản A |
| S-16 | Hành động bị chặn vì ràng buộc nghiệp vụ phải giải thích **lý do** (vd không xoá được Campus/Category vì đang được sự kiện tham chiếu; không xoá được  |  |  |  |  |
| S-17 | Xuất file (Export Excel) có chỉ báo đang xử lý và thông báo khi tải xong hoặc thất bại | Failed |  |  | **C1:** Bấm Export → file `users-export-1785684262119.xlsx` tải về sau 0,4s nhưng **không có bất kỳ chỉ báo đang xử lý hay thông báo hoàn tất nào**. *(0,4s là nhanh nên spinner có thể không cần; nhưng yêu cầu "thông báo khi tải xong" thì không có — bạn cân nhắc hạ xuống Passed nếu thấy chấp nhận được)* |
| S-18 | Badge / chấm thông báo phản ánh **đúng số lượng thật** và biến mất sau khi đã xử lý | N/A | N/A | N/A | Badge duyệt đăng ký — kịch bản A |
| S-19 | Sau khi đổi công tắc trạng thái (Active) và lưu, cột trạng thái trên danh sách cập nhật **ngay** mà không cần tải lại trang |  |  |  |  |
| S-20 | Trường mật khẩu nêu rõ **ràng buộc trước khi submit** (độ dài tối thiểu, ký tự bắt buộc), không để người dùng đoán rồi mới báo lỗi |  | N/A | Failed | **C2:** Dialog Edit User không có trường mật khẩu<br>**C3:** Ràng buộc "at least 8 characters" **chỉ hiện sau khi submit**; trước đó quanh ô mật khẩu không có gợi ý nào |
| S-21 | Gửi phản hồi support tạo thông báo hoàn tất rõ ràng, chuyển request **Pending → Resolved**, cập nhật số lượng/tab danh sách và hiển thị phản hồi chính | N/A | N/A | N/A | Gửi phản hồi support — kịch bản D |
| S-22 | **Internal note** được ghi nhãn chỉ admin thấy và tách khỏi phản hồi chính thức; nội dung note không xuất hiện trên trang chi tiết của requester | N/A | N/A | N/A | Internal note — kịch bản D |
| S-23 | Ảnh đính kèm mở trong **dialog lightbox** có nội dung ảnh, tên/nhãn và nút Close; đóng lightbox trả người dùng về đúng trang chi tiết request | N/A | N/A | N/A | Lightbox ảnh — kịch bản D |
| S-24 | Khi nhấn Save hoặc Unsave trên Event Card ở Dashboard, trạng thái nút được cập nhật ngay mà không cần tải lại toàn bộ trang | N/A | N/A | N/A | Save/Unsave Event Card — kịch bản B |
| S-25 | Carousel sự kiện nổi bật tự chuyển sau mỗi 7 giây phải tạm dừng khi người dùng đưa chuột vào để có đủ thời gian đọc nội dung | N/A | N/A | N/A | Carousel 7 giây — kịch bản B |

**Tiến độ:** 88 mục × 3 màn hình = 264 ô · đã có kết quả **150** (Passed 34 · Failed 13 · N/A 103) · **còn trống 114**

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
