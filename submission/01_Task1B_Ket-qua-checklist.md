# Task 1B — Chạy checklist trên các màn hình đã chọn

> Yêu cầu: đề §6 Task 1B — chạy **checklist dùng chung của nhóm** (88 mục) trên **≥ 3 màn hình**, đánh `Passed` / `Failed` theo từng màn hình, cột **Notes** ghi lý do fail, **ảnh chụp chỉ cho mục Failed**.

**Sinh viên:** 23127262 – Lý Quốc Thạnh
**Kịch bản đã chọn:** **C — Admin quản lý người dùng**

---

## 1. Màn hình đã kiểm

Ba màn hình **C1 Users Management · C2 dialog Edit User · C3 dialog Create New User**, cùng lý do chọn, phần giải thích sai lệch so với đề §5, phân bố phủ IA và bảng phân công không trùng thành viên — tất cả nằm ở [`00_Bao-cao-chinh.md §1`](00_Bao-cao-chinh.md). Chương này chỉ trình bày **kết quả chạy**.

---

## 2. Bảng chạy checklist

> **Nguồn:** 88 mục của [`nhom/GUI-Checklist.md`](nhom/GUI-Checklist.md).
> Mỗi ô nhận `Passed` · `Failed` · `N/A` — **264/264 ô đã có kết luận, không ô nào trống**.
> Mỗi ô `Failed` kèm lý do ở cột Notes và ảnh trong [`evidence/task1b/`](evidence/task1b/).

**Cách từng ô được xác định:**

| Loại ô | Cách xác định | Bằng chứng |
|---|---|---|
| **N/A** | Mục thuộc kịch bản A/B/D, không có control tương ứng trên C1–C3 | Lý do cụ thể ghi ở cột Notes |
| **Passed / Failed** — đo được | Chạy trên EMS thật bằng Playwright trong Chrome: đọc DOM, computed style, thử submit, thử phím Esc, đo tỉ lệ tương phản, đo `scrollWidth` khi zoom 200 % | Số đo ghi thẳng vào cột Notes |
| **Passed / Failed** — thị giác | Đọc từ ảnh chụp màn hình *(thẩm mỹ, thứ bậc nút, khoảng cách, ngữ nghĩa nhãn)* | Ảnh trong `evidence/task1b/` |

### IA-01 — Chuẩn UI chung (18 mục)

| ID | Mục kiểm tra | C1 | C2 | C3 | Notes / bằng chứng |
|---|---|---|---|---|---|
| G-01 | Tiêu đề trang khớp với mục đang được chọn trên sidebar/menu | Passed | N/A | N/A | **C1:** Tiêu đề "Users Management" khớp mục sidebar đang active<br>**C2:** Mục này nói về tiêu đề trang khớp mục sidebar — dialog không phải trang riêng nên không áp dụng<br>**C3:** Mục này nói về tiêu đề trang khớp mục sidebar — dialog không phải trang riêng nên không áp dụng |
| G-02 | Cùng một chức năng dùng cùng một nhãn ở mọi màn hình (không lúc "Export" lúc "Xuất file") | Passed | N/A | N/A | **C1:** Nhãn nút nhất quán giữa các màn hình admin: Users "Add User" · Categories "Add Category" · Campuses "Add Campus" — cùng mẫu "Add <đối tượng>"<br>**C2:** Tính nhất quán nhãn đo ở cấp ứng dụng trên C1<br>**C3:** Tính nhất quán nhãn đo ở cấp ứng dụng trên C1 |
| G-03 | Trong bảng dữ liệu: text canh trái, số canh phải, trạng thái canh giữa — nhất quán ở mọi bảng | Passed | N/A | N/A | **C1:** Nhìn ảnh: USER canh trái, ROLE/STATUS (badge) canh giữa, MEMBER CODE canh giữa, CREATED/UPDATED canh giữa — **nhất quán toàn bảng**. Member Code là mã có cả chữ (`G8D308E4C`) chứ không phải số lượng nên canh giữa hợp lý<br>**C2:** Dialog không có bảng dữ liệu<br>**C3:** Dialog không có bảng dữ liệu |
| G-04 | Toàn hệ thống dùng tối đa 2 họ font; cỡ chữ theo thang nhất quán (tiêu đề / nội dung / chú thích) | Passed | Passed | Passed | **C1:** 1 họ font (ui-sans-serif), 6 cỡ chữ theo thang: 11/12/14/16/18/24px<br>**C2:** 1 họ font, cỡ chữ đồng nhất trong dialog<br>**C3:** 1 họ font, cỡ chữ đồng nhất trong dialog |
| G-05 | Màu dùng đúng ngữ nghĩa: màu chính cho hành động chính, **đỏ chỉ dành cho lỗi / hành động phá huỷ** | Passed | Passed | Passed | **C1:** Nhìn ảnh: đỏ chỉ dùng cho icon Xoá và nút Confirm trong dialog xoá — đúng ngữ nghĩa phá huỷ. *(Ngoại lệ: badge "9" ở Support requests cũng đỏ nhưng là số thông báo — quy ước phổ biến, bạn có thể hạ xuống Failed nếu muốn chặt)*<br>**C2:** Nhìn ảnh: trong dialog màu đỏ chỉ dùng cho **chữ thông báo lỗi**, không dùng cho hành động thường<br>**C3:** Nhìn ảnh: trong dialog màu đỏ chỉ dùng cho **chữ thông báo lỗi**, không dùng cho hành động thường |
| G-06 | Mỗi màn hình chỉ có **một** nút hành động chính; các nút còn lại ở dạng phụ | Failed | Passed | Passed | **C1:** Nhìn ảnh: **hai nút đặc cùng nổi bật cạnh nhau** — "Export" nền xanh lá và "Add User" nền xanh dương, cùng kích thước, cùng độ đậm. Không phân biệt được đâu là hành động chính<br>**C2:** Nhìn ảnh: đúng **một** nút chính (Save Changes / Create User, nền đặc), Cancel để dạng viền nhạt<br>**C3:** Nhìn ảnh: đúng **một** nút chính (Save Changes / Create User, nền đặc), Cancel để dạng viền nhạt |
| G-07 | Nội dung không tràn ngang gây thanh cuộn ngang ở độ rộng màn hình ≥ 1280px | Passed | Passed | Passed | **C1:** scrollWidth 1425 = clientWidth 1425 → không cuộn ngang ở 1440px<br>**C2:** dialog scrollWidth 448 = clientWidth 448, không tràn ở desktop<br>**C3:** dialog scrollWidth 448 = clientWidth 448, không tràn ở desktop |
| G-08 | Trạng thái rỗng (empty state) có thông điệp giải thích **và** gợi ý hành động tiếp theo, không phải vùng trắng trơn | Passed | N/A | N/A | **C1:** Empty state có thông điệp giải thích *"No users found matching your filters."*, và khi có bộ lọc đang áp thì cột tương ứng hiện **nút × xoá lọc** ngay trên tiêu đề (thấy rõ ở ảnh `S-12-inactive-row.png`) — vừa giải thích vừa có đường thoát. *(Nhược điểm còn lại: nút × nằm ở tiêu đề cột chứ không nằm trong vùng trống, bạn có thể hạ xuống Failed nếu muốn chặt)*<br>**C2:** Dialog không có trạng thái rỗng<br>**C3:** Dialog không có trạng thái rỗng |
| G-09 | Trạng thái đang tải có skeleton/spinner; khi dữ liệu về **không gây nhảy layout** | Passed | N/A | N/A | **C1:** Thấy 2 phần tử skeleton/animate-pulse trong lúc tải dữ liệu bảng<br>**C2:** Dialog mở tức thì từ dữ liệu đã có, không có pha tải riêng<br>**C3:** Dialog mở tức thì từ dữ liệu đã có, không có pha tải riêng |
| G-10 | Ảnh giữ đúng tỉ lệ khung, không bị méo hay co giãn sai | N/A | N/A | N/A | Avatar là chữ viết tắt, không có thẻ ảnh nào trên C1–C3 |
| G-11 | Thuật ngữ dùng ngôn ngữ người dùng — **không lộ mã trạng thái nội bộ** ra giao diện (vd hiện thẳng `OUTSIDE_CHECKIN_WINDOW`) | Passed | Passed | Passed | **C1:** Không tìm thấy chuỗi dạng UPPER_SNAKE lộ ra giao diện<br>**C2:** Không lộ mã trạng thái nội bộ trong dialog<br>**C3:** Không lộ mã trạng thái nội bộ trong dialog |
| G-12 | Tỉ lệ tương phản chữ/nền ≥ 4.5:1 (chữ thường), ≥ 3:1 (chữ lớn) | Failed | Failed | Failed | **C1:** Tương phản dưới ngưỡng WCAG 1.4.3: sidebar active 2.08:1 · nút Export 2.71:1 · nút Add User 2.08:1 · badge 4.14:1 (cần 4.5). *(chỉ tính phần tử dùng màu rgb; 75 phần tử dùng lab() không quy đổi được nên chưa xét)*<br>**C2:** Nút **Save Changes**: chữ trắng trên nền xanh, tương phản **2.08:1** (cần 4.5). Bỏ qua 8 phần tử dùng lab()<br>**C3:** Nút **Create User**: chữ trắng trên nền xanh, tương phản **2.08:1** (cần 4.5). Bỏ qua 9 phần tử dùng lab() |
| G-13 | Nội dung vẫn đọc được và không vỡ layout khi zoom trình duyệt **200%** | Failed | Failed | Failed | **C1:** Ở khung nhìn 720px (tương đương zoom 200%): scrollWidth **1031** vs clientWidth **705** → nội dung tràn ngang, phải cuộn để đọc<br>**C2:** Mở dialog rồi thu về 720px (zoom 200%): scrollWidth **1031** vs clientWidth **720** → tràn ngang<br>**C3:** Mở dialog rồi thu về 720px (zoom 200%): scrollWidth **1031** vs clientWidth **720** → tràn ngang |
| G-14 | Chuyển EN/VI dịch **toàn bộ** text hiển thị — không còn chuỗi lẫn ngôn ngữ trên cùng màn hình | Passed | N/A | N/A | **C1:** Chuyển sang Tiếng Việt → **0/13** chuỗi EN kiểm tra còn sót. Toàn bộ sidebar, tiêu đề, nút và tiêu đề cột đều dịch: "Quản lý người dùng", "Xuất", "Thêm người dùng", "NGƯỜI DÙNG", "VAI TRÒ", "MÃ THÀNH VIÊN", "TRẠNG THÁI"<br>**C2:** i18n đo ở cấp ứng dụng trên C1<br>**C3:** i18n đo ở cấp ứng dụng trên C1 |
| G-15 | Text tiếng Việt (dài hơn EN) không làm vỡ nút, cắt chữ, hay xuống dòng xấu | Passed | N/A | N/A | **C1:** Ở tiếng Việt không phần tử nào bị tràn hay cắt chữ (`scrollWidth` ≤ `clientWidth` với mọi button/th/span/a)<br>**C2:** i18n đo ở cấp ứng dụng trên C1<br>**C3:** i18n đo ở cấp ứng dụng trên C1 |
| G-16 | Ngôn ngữ đã chọn được **lưu lại** và giữ nguyên sau khi tải lại trang / mở trang khác | Passed | N/A | N/A | **C1:** Tải lại trang sau khi đổi → ngôn ngữ vẫn giữ Tiếng Việt<br>**C2:** i18n đo ở cấp ứng dụng trên C1<br>**C3:** i18n đo ở cấp ứng dụng trên C1 |
| G-17 | Avatar dạng chữ viết tắt phải nằm gọn trong vòng tròn với **tên dài nhiều từ** (vd "KHOA NGUYỄN QUANG ĐĂNG" → "KNQĐ"), không tràn, không đè lên tên | Passed | N/A | N/A | **C1:** 4 avatar viết tắt (AÂTN, KL, TPĐ, NAQ), không cái nào tràn khỏi vòng tròn<br>**C2:** Dialog không hiển thị avatar<br>**C3:** Dialog không hiển thị avatar |
| G-18 | Member Code hiển thị đầy đủ, không bị cắt bởi độ rộng cột; giá trị rỗng có ký hiệu thống nhất và định dạng đồng nhất giữa các dòng | Passed | N/A | N/A | **C1:** Member Code hiển thị đủ, không bị cắt; giá trị rỗng dùng ký hiệu "-" thống nhất<br>**C2:** Member Code trong dialog là ô nhập, không phải cột bảng<br>**C3:** Member Code trong dialog là ô nhập, không phải cột bảng |

### IA-02 — Forms (26 mục)

| ID | Mục kiểm tra | C1 | C2 | C3 | Notes / bằng chứng |
|---|---|---|---|---|---|
| F-01 | Mọi ô nhập có nhãn hiển thị **thường trực**, không chỉ dựa vào placeholder (placeholder biến mất khi gõ) | Failed | Passed | Passed | **C1:** C1 chỉ có một ô nhập là ô tìm kiếm — **không có nhãn thường trực**, chỉ dựa vào placeholder "Search users..." vốn biến mất khi gõ<br>**C2:** Có nhãn thường trực cho cả 7 trường. **Ghi chú:** nhãn không gắn `for`/`id` với ô nhập → bấm nhãn không focus vào ô, screen reader không đọc đúng cặp<br>**C3:** Có nhãn thường trực cho cả 8 trường. **Ghi chú:** không gắn `for`/`id`, giống C2 |
| F-02 | Trường bắt buộc được đánh dấu rõ (dấu `*` hoặc chữ "bắt buộc") **trước khi** người dùng submit | N/A | Failed | Failed | **C1:** Ô tìm kiếm không phải trường bắt buộc<br>**C2:** Không có dấu `*` nào, không có chữ "bắt buộc". Chỉ có thuộc tính HTML `required` (3 trường) — **vô hình với người dùng** trước khi submit<br>**C3:** Không dấu `*`, không chữ "bắt buộc"; chỉ có `required` ở tầng HTML (4 trường) |
| F-03 | Submit khi thiếu trường bắt buộc → hệ thống **chặn**, không cho lưu | N/A | Passed | Passed | **C1:** C1 không có form submit<br>**C2:** Xoá Email (trường bắt buộc) rồi Save → dialog vẫn mở, hệ thống chặn không cho lưu<br>**C3:** Submit rỗng → dialog vẫn mở, không tạo user |
| F-04 | Thông báo lỗi hiện **ngay cạnh trường bị lỗi**, không chỉ ở toast góc màn hình | N/A | Passed | Passed | **C1:** C1 không có validation form<br>**C2:** Lỗi hiện ngay dưới trường: "Invalid email address"<br>**C3:** Lỗi hiện ngay dưới từng trường (class `mt-1 text-xs text-red-500`), không chỉ ở toast |
| F-05 | Thông báo lỗi nói rõ **cách sửa**, không chỉ nói "dữ liệu không hợp lệ" | N/A | Passed | Passed | **C1:** C1 không có thông báo lỗi form<br>**C2:** Lỗi nêu đúng vấn đề của trường: "Invalid email address"<br>**C3:** Lỗi nói rõ từng trường: "Last name is required" · "Invalid email address" · "Role is required" · "Password must be at least 8 characters" |
| F-06 | Giá trị mặc định của mỗi trường hợp lý (vd ngày bắt đầu = hôm nay), không rỗng hay vô nghĩa | N/A | Passed | Passed | **C1:** Ô tìm kiếm không cần giá trị mặc định<br>**C2:** Dialog sửa điền sẵn đúng dữ liệu hiện tại của user (họ, tên, email, Member Code, Role, Active) — mặc định hợp lý cho form sửa<br>**C3:** Nhìn ảnh: form tạo mới để trống đúng, Role mặc định "Select a Role" (trung tính), Member Code ghi rõ "(Optional)", **Active bật sẵn** — hợp lý vì user mới tạo thường cần dùng được ngay |
| F-07 | Ràng buộc được áp **ngay tại control** (date picker chặn ngày không hợp lệ) thay vì chỉ báo lỗi sau khi submit | N/A | N/A | N/A | Không có date picker / control ràng buộc kiểu này trên C1–C3 |
| F-08 | Sau khi submit lỗi, **focus tự nhảy về trường lỗi đầu tiên** | N/A | Failed | Failed | **C1:** C1 không có submit để xét focus sau lỗi<br>**C2:** Sau submit lỗi, focus vẫn ở **BUTTON**, không nhảy về trường lỗi — giống C3<br>**C3:** Sau submit lỗi, focus vẫn nằm trên **nút Create User**, không nhảy về trường lỗi đầu tiên |
| F-09 | Upload nêu rõ **định dạng, dung lượng tối đa và tỉ lệ khung** yêu cầu *trước khi* người dùng chọn file | N/A | N/A | N/A | Không có upload file trong pool C |
| F-10 | Upload có chỉ báo tiến trình, có thể huỷ; thất bại thì báo lỗi rõ và cho thử lại | N/A | N/A | N/A | Không có upload file trong pool C |
| F-11 | Nút Submit bị khoá trong lúc đang gửi để tránh **submit trùng** (double-submit) | N/A | N/A | Passed | **C1:** C1 không có nút submit<br>**C2:** Đo chống double-submit ở C3 (luồng tạo mới)<br>**C3:** Bấm **Create User** → nút **bị khoá trong lúc gửi**, chặn được submit trùng |
| F-12 | Rời form khi đang nhập dở → **cảnh báo mất dữ liệu** trước khi điều hướng | N/A | Failed | Failed | **C1:** C1 không có form nhập dở để mất<br>**C2:** Nhập dở một trường rồi bấm Esc → dialog **đóng ngay, mất sạch nội dung đã nhập**, không có cảnh báo nào<br>**C3:** Nhập dở một trường rồi bấm Esc → dialog **đóng ngay, mất sạch nội dung đã nhập**, không có cảnh báo nào |
| F-13 | Mọi ô nhập và control thao tác được **hoàn toàn bằng bàn phím**, có viền focus nhìn thấy rõ | Passed | Passed | Passed | **C1:** Nhìn ảnh cắt sát: ô tìm kiếm khi focus có **viền chuyển sang xanh dương rõ rệt**. `outline` tuy trong suốt nhưng cue thật là màu viền — nhìn thấy rõ. Tab đi qua được mọi control<br>**C2:** Thao tác được hoàn toàn bằng bàn phím. **Chỉ báo focus yếu:** `outline` là `solid 1px rgba(0,0,0,0)` — **trong suốt**, `box-shadow: none`; cue duy nhất là viền input đổi sang màu đậm (`lab(8.1 …)`). Có nhìn thấy nhưng mảnh, không có ring. *(Bạn có thể hạ xuống Failed nếu cho rằng chưa đủ "nhìn thấy rõ")*<br>**C3:** Thao tác được hoàn toàn bằng bàn phím. **Chỉ báo focus yếu:** outline trong suốt, không box-shadow, chỉ có viền đổi màu đậm — giống C2 |
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
| N-01 | Menu chính cho phép truy cập tới **mọi khu vực lớn** của ứng dụng | Passed | N/A | N/A | **C1:** 8 mục sidebar phủ mọi khu vực lớn: Users · Categories · Academic Years · Campuses · Events · Support · User Guide · Analytics<br>**C2:** Menu chính không thuộc phạm vi dialog<br>**C3:** Menu chính không thuộc phạm vi dialog |
| N-02 | Mục đang xem được đánh dấu **active** rõ ràng trên sidebar/menu | Passed | N/A | N/A | **C1:** Mục đang xem được tô nền và đổi màu chữ<br>**C2:** Trạng thái active của sidebar không thuộc phạm vi dialog<br>**C3:** Trạng thái active của sidebar không thuộc phạm vi dialog |
| N-03 | Breadcrumb phản ánh **đúng đường đi**, và mỗi cấp bấm được để quay lui | Failed | N/A | N/A | **C1:** Khu admin **không có breadcrumb** ở bất kỳ cấp nào<br>**C2:** Dialog không có cấp breadcrumb riêng<br>**C3:** Dialog không có cấp breadcrumb riêng |
| N-04 | Mọi trang chi tiết có đường quay lại danh sách cha (nút Back hoặc breadcrumb) | N/A | Passed | Passed | **C1:** C1 chính là màn hình danh sách gốc, không có cấp cha để quay lại<br>**C2:** Có nút Cancel để thoát khỏi dialog, cạnh Save Changes<br>**C3:** Có nút Cancel để thoát khỏi dialog, cạnh Create User |
| N-05 | Link và nút dẫn tới **đúng** màn hình/hành động kỳ vọng; không có link chết | Passed | N/A | N/A | **C1:** Mọi thẻ a đều có href thật, không có href="#" hay javascript:void(0)<br>**C2:** Dialog không chứa link điều hướng nào<br>**C3:** Dialog không chứa link điều hướng nào |
| N-06 | Tab trong trang giữ đúng nội dung khi chuyển qua lại; tab đang chọn nhận biết được | N/A | N/A | N/A | Không có tab trong trang ở C1–C3 |
| N-07 | **Nút Back của trình duyệt** hoạt động đúng — không mất trạng thái, không submit lại form | Passed | N/A | N/A | **C1:** Bấm Back trình duyệt từ /users → về đúng /dashboard/admin, không mất trạng thái<br>**C2:** Dialog không đổi URL nên không xét nút Back<br>**C3:** Dialog không đổi URL nên không xét nút Back |
| N-08 | **Deep link:** copy URL trang chi tiết, mở ở tab mới vẫn vào đúng bản ghi | Passed | N/A | N/A | **C1:** Mở thẳng URL /dashboard/admin/users → HTTP 200, bảng render đủ dữ liệu<br>**C2:** Dialog không có URL riêng để deep link<br>**C3:** Dialog không có URL riêng để deep link |
| N-09 | **Bộ lọc / từ khoá tìm kiếm / số trang được giữ lại** khi quay về từ trang chi tiết | Passed | N/A | N/A | **C1:** Gõ "nguyen" (5 kết quả) → mở dialog → đóng → ô search vẫn giữ "nguyen"<br>**C2:** Bộ lọc thuộc màn hình danh sách, đã đo ở C1<br>**C3:** Bộ lọc thuộc màn hình danh sách, đã đo ở C1 |
| N-10 | Sau khi lưu, người dùng được trả về **đúng ngữ cảnh cũ**, không bị đá về dashboard | Passed | Passed | Passed | **C1:** Sau khi tạo và sau khi lưu sửa, vẫn ở đúng màn hình danh sách Users, không bị đá về dashboard<br>**C2:** Sau khi Save, ở lại đúng danh sách Users<br>**C3:** Sau khi tạo, ở lại đúng danh sách Users, user mới xuất hiện trong bảng |
| N-11 | Thứ tự Tab bàn phím đi theo thứ tự đọc trực quan; **Esc đóng modal**; không có bẫy focus trong modal | N/A | Passed | Passed | **C1:** C1 không có modal riêng; Esc đã đo ở C2/C3<br>**C2:** Bấm Esc đóng dialog<br>**C3:** Bấm Esc đóng dialog Create New User |
| N-12 | **Kéo-thả reorder:** dòng đang kéo có phản hồi thị giác rõ (mờ đi), các nút khác bị vô hiệu trong lúc kéo | N/A | N/A | N/A | Kéo-thả reorder — Categories/Settings |
| N-13 | Thứ tự sau khi kéo-thả được **lưu đúng** sau khi Save và giữ nguyên khi tải lại trang | N/A | N/A | N/A | Kéo-thả reorder — Categories/Settings |
| N-14 | Kéo-thả có **phương án thay thế không dùng chuột** (nút lên/xuống hoặc nhập số thứ tự) | N/A | N/A | N/A | Kéo-thả reorder — Categories/Settings |
| N-15 | Truy cập URL khu vực admin bằng tài khoản không đủ quyền → chuyển hướng hoặc báo lỗi rõ ràng, **không hiện trang trắng** | Passed | N/A | N/A | **C1:** Chưa đăng nhập mở `/dashboard/admin/users` → chuyển hướng `/login?callbackUrl=%2Fdashboard%2Fadmin%2Fusers`, hiện form đăng nhập, không phải trang trắng<br>**C2:** Phân quyền đo ở cấp route trên C1<br>**C3:** Phân quyền đo ở cấp route trên C1 |
| N-16 | Cột bảng sắp xếp được phải có **chỉ báo hướng sắp xếp** (mũi tên tăng/giảm) và giữ nguyên tiêu chí sắp xếp khi chuyển trang | N/A | N/A | N/A | **C1:** Nhìn ảnh tiêu đề bảng: **không cột nào sắp xếp được** — chỉ có icon phễu lọc ở ROLE và STATUS, không có mũi tên sắp xếp. Bấm tiêu đề MEMBER CODE không đổi thứ tự (trước và sau đều `-,-,23127148`). Mục này chỉ áp dụng khi có cột sắp xếp được<br>**C2:** Dialog không có cột sắp xếp<br>**C3:** Dialog không có cột sắp xếp |
| N-17 | Thông tin audit (ai tạo / ai sửa lần cuối, thời điểm) hiển thị đủ **người thực hiện và mốc thời gian**; giá trị thiếu có ký hiệu rõ ràng thay vì để tr | Passed | N/A | N/A | **C1:** Nhìn ảnh: cột CREATED/UPDATED hiển thị **người thực hiện + mốc thời gian** (vd "TLA Tôi là Admin · 01/08/2026 21:33"); dòng không có người thực hiện dùng ký hiệu `-` rõ ràng thay vì để trống<br>**C2:** Dialog không hiển thị cột audit<br>**C3:** Dialog không hiển thị cột audit |
| N-18 | Danh sách support request có tab **Pending / Resolved** nhận biết được tab đang chọn; khi request được xử lý, bản ghi xuất hiện ở đúng tab trạng thái | N/A | N/A | N/A | Tab Pending/Resolved — kịch bản D |
| N-19 | Khi nhấn **Clear filters** trên Dashboard, hệ thống xoá từ khoá tìm kiếm và các lựa chọn Category, Academic Context, Campus, Event Date, đồng thời làm | N/A | N/A | N/A | Clear filters Dashboard — kịch bản B |

### IA-04 — Feedback / State (25 mục)

| ID | Mục kiểm tra | C1 | C2 | C3 | Notes / bằng chứng |
|---|---|---|---|---|---|
| S-01 | Mọi hành động làm thay đổi dữ liệu đều có phản hồi rõ ràng (toast hoặc thông báo tại chỗ) | Failed | Failed | Failed | **C1:** Xoá user thành công nhưng **không có toast hay thông báo tại chỗ** — người dùng chỉ biết nhờ dòng biến mất khỏi bảng<br>**C2:** Lưu thay đổi thành công nhưng **không hiện thông báo nào** — không toast, không thông báo tại chỗ<br>**C3:** Tạo user thành công nhưng **không thấy toast hay thông báo tại chỗ nào** |
| S-02 | Mức độ phản hồi **tương xứng**: thao tác nhỏ phản hồi nhẹ, thao tác lớn/hiếm phản hồi rõ rệt | Failed | Failed | Failed | **C1:** Cả ba thao tác lớn (tạo · sửa · xoá user) đều **phản hồi bằng 0** — không có mức phản hồi nào để nói là tương xứng<br>**C2:** Sửa và lưu dữ liệu user là thao tác đáng kể nhưng phản hồi bằng 0<br>**C3:** Tạo mới một user là thao tác lớn nhưng phản hồi bằng 0 |
| S-03 | Thao tác kéo dài (> ~400ms) có chỉ báo đang xử lý; màn hình không đứng im vô cớ | Passed | N/A | N/A | **C1:** Thao tác nặng nhất trên C1 là Export, mất **0,4s** và file tải về ngay — không có pha chờ đủ dài để cần chỉ báo. Màn hình không đứng im lúc nào<br>**C2:** Không có thao tác kéo dài trong dialog khi chưa lưu<br>**C3:** Không có thao tác kéo dài trong dialog khi chưa lưu |
| S-04 | Toast tự tắt sau 3–5 giây, **không che** nội dung đang thao tác, và đóng thủ công được | N/A | N/A | N/A | **C1:** Không thao tác nào trên C1 sinh ra toast để đo (Export không hiện toast)<br>**C2:** Không có toast phát sinh trong dialog khi chưa lưu<br>**C3:** Không có toast phát sinh trong dialog khi chưa lưu |
| S-05 | Thông báo lỗi hệ thống dùng ngôn ngữ thường — không lộ mã lỗi, stack trace hay tên bảng CSDL | Passed | N/A | N/A | **C1:** Mở route sai → trang 404 "Page Not Found · The page you are looking for does not exist or has been moved" kèm nút Go Back; không lộ stack trace, tên bảng hay mã lỗi kỹ thuật<br>**C2:** Không có lỗi hệ thống phát sinh trong dialog<br>**C3:** Không có lỗi hệ thống phát sinh trong dialog |
| S-06 | Hành động phá huỷ (Delete, Block) có **dialog xác nhận** nêu rõ hậu quả và đối tượng bị tác động | Passed | N/A | N/A | **C1:** Dialog xoá nêu rõ đối tượng: "Are you sure you want to delete user Trang Nguyen?"<br>**C2:** Dialog sửa/tạo không chứa hành động phá huỷ<br>**C3:** Dialog sửa/tạo không chứa hành động phá huỷ |
| S-07 | Trong dialog xác nhận: nút mặc định là nút **an toàn**; nút phá huỷ có nhãn động từ cụ thể ("Xoá sự kiện") thay vì "OK" | Failed | N/A | N/A | **C1:** Nhìn ảnh dialog xoá: nút nổi bật (nền đỏ đặc) là **Confirm** — tức nút phá huỷ, không phải nút an toàn; và nhãn "Confirm" **chung chung**, không nói rõ hành động như "Delete user"<br>**C2:** Không có dialog xác nhận lồng bên trong<br>**C3:** Không có dialog xác nhận lồng bên trong |
| S-08 | Hành động **hoàn tác được**; nếu không hoàn tác được thì phải nói rõ điều đó *trước khi* xác nhận | Passed | N/A | N/A | **C1:** Dialog có câu "This action cannot be undone" trước khi xác nhận<br>**C2:** Sửa/tạo không phải hành động phá huỷ cần cảnh báo hoàn tác<br>**C3:** Sửa/tạo không phải hành động phá huỷ cần cảnh báo hoàn tác |
| S-09 | Kết thúc một chuỗi thao tác nhiều bước có thông báo **hoàn tất** rõ ràng | Failed | N/A | N/A | **C1:** Chạy trọn chuỗi tạo → sửa → xoá một user test: **xoá xong không có bất kỳ thông báo hoàn tất nào**<br>**C2:** Sửa user là thao tác một bước, không phải chuỗi nhiều bước cần thông báo kết thúc<br>**C3:** Tạo user là thao tác một bước |
| S-10 | Trạng thái được phân biệt **không chỉ bằng màu** — có thêm icon hoặc nhãn chữ | Passed | Passed | Passed | **C1:** Cột STATUS có nhãn chữ ("Active"), không chỉ dựa vào màu<br>**C2:** Công tắc trạng thái có nhãn chữ "Active", không chỉ dựa vào màu<br>**C3:** Công tắc trạng thái có nhãn chữ "Active", không chỉ dựa vào màu |
| S-11 | Bảng có nhiều màu trạng thái (EMS: 6 màu ở tab Participants) phải có **chú giải** hoặc tooltip giải nghĩa | N/A | N/A | N/A | Bảng 6 màu tab Participants — kịch bản A |
| S-12 | Trạng thái của nút phản ánh đúng trạng thái dữ liệu (sự kiện đã PUBLISHED thì không còn nút Publish) | Passed | N/A | N/A | **C1:** Nhìn ảnh lọc STATUS = Inactive: user bị khoá vẫn hiện đúng hai nút Sửa và Xoá — cả hai đều hợp lệ với user ở mọi trạng thái, không có nút nào lẽ ra phải ẩn đi<br>**C2:** Dialog không có nút nào phụ thuộc trạng thái dữ liệu; đã đo ở C1 qua bộ lọc Inactive<br>**C3:** Dialog không có nút nào phụ thuộc trạng thái dữ liệu; đã đo ở C1 qua bộ lọc Inactive |
| S-13 | **Progress bar** phản ánh đúng tiến độ thật và cập nhật ngay khi dữ liệu thay đổi | N/A | N/A | N/A | Progress bar duyệt đăng ký — kịch bản A |
| S-14 | Danh sách **real-time** (log quét check-in) tự cập nhật mà không cần tải lại trang, và không làm mất vị trí đang đọc | N/A | N/A | N/A | Log check-in real-time — kịch bản A |
| S-15 | Các nhánh kết quả khác nhau được hiển thị **phân biệt rõ** (SUCCESS / ALREADY_CHECKED_IN / OUTSIDE_CHECKIN_WINDOW / PENDING_REVIEW) | N/A | N/A | N/A | Bốn nhánh kết quả quét — kịch bản A |
| S-16 | Hành động bị chặn vì ràng buộc nghiệp vụ phải giải thích **lý do** (vd không xoá được Campus/Category vì đang được sự kiện tham chiếu; không xoá được  | N/A | N/A | N/A | **C1:** Trong suốt quá trình chạy chưa gặp thao tác nào bị chặn vì ràng buộc nghiệp vụ trên pool C — xoá user test diễn ra bình thường. Không có trường hợp để xét<br>**C2:** Chưa gặp ràng buộc nghiệp vụ chặn trong dialog<br>**C3:** Chưa gặp ràng buộc nghiệp vụ chặn trong dialog |
| S-17 | Xuất file (Export Excel) có chỉ báo đang xử lý và thông báo khi tải xong hoặc thất bại | Failed | N/A | N/A | **C1:** Bấm Export → file `users-export-1785684262119.xlsx` tải về sau 0,4s nhưng **không có bất kỳ chỉ báo đang xử lý hay thông báo hoàn tất nào**. *(0,4s là nhanh nên spinner có thể không cần; nhưng yêu cầu "thông báo khi tải xong" thì không có — bạn cân nhắc hạ xuống Passed nếu thấy chấp nhận được)*<br>**C2:** Dialog không có chức năng xuất file<br>**C3:** Dialog không có chức năng xuất file |
| S-18 | Badge / chấm thông báo phản ánh **đúng số lượng thật** và biến mất sau khi đã xử lý | N/A | N/A | N/A | Badge duyệt đăng ký — kịch bản A |
| S-19 | Sau khi đổi công tắc trạng thái (Active) và lưu, cột trạng thái trên danh sách cập nhật **ngay** mà không cần tải lại trang | Passed | Passed | N/A | **C1:** Quan sát từ danh sách: sau khi lưu ở dialog, cột STATUS đổi "Active" → "Inactive" **ngay trên bảng**, không cần tải lại<br>**C2:** Tắt công tắc Active rồi Save → cột STATUS trên danh sách đổi **"Active" → "Inactive" ngay lập tức**, không cần tải lại trang<br>**C3:** Công tắc Active lúc tạo mới chưa có trạng thái cũ để so |
| S-20 | Trường mật khẩu nêu rõ **ràng buộc trước khi submit** (độ dài tối thiểu, ký tự bắt buộc), không để người dùng đoán rồi mới báo lỗi | N/A | N/A | Failed | **C1:** C1 không có trường mật khẩu<br>**C2:** Dialog Edit User không có trường mật khẩu<br>**C3:** Ràng buộc "at least 8 characters" **chỉ hiện sau khi submit**; trước đó quanh ô mật khẩu không có gợi ý nào |
| S-21 | Gửi phản hồi support tạo thông báo hoàn tất rõ ràng, chuyển request **Pending → Resolved**, cập nhật số lượng/tab danh sách và hiển thị phản hồi chính | N/A | N/A | N/A | Gửi phản hồi support — kịch bản D |
| S-22 | **Internal note** được ghi nhãn chỉ admin thấy và tách khỏi phản hồi chính thức; nội dung note không xuất hiện trên trang chi tiết của requester | N/A | N/A | N/A | Internal note — kịch bản D |
| S-23 | Ảnh đính kèm mở trong **dialog lightbox** có nội dung ảnh, tên/nhãn và nút Close; đóng lightbox trả người dùng về đúng trang chi tiết request | N/A | N/A | N/A | Lightbox ảnh — kịch bản D |
| S-24 | Khi nhấn Save hoặc Unsave trên Event Card ở Dashboard, trạng thái nút được cập nhật ngay mà không cần tải lại toàn bộ trang | N/A | N/A | N/A | Save/Unsave Event Card — kịch bản B |
| S-25 | Carousel sự kiện nổi bật tự chuyển sau mỗi 7 giây phải tạm dừng khi người dùng đưa chuột vào để có đủ thời gian đọc nội dung | N/A | N/A | N/A | Carousel 7 giây — kịch bản B |

**Tiến độ:** 88 mục × 3 màn hình = 264 ô · đã có kết quả **264** (Passed 63 · Failed 25 · N/A 176) · **còn trống 0**

---

## 3. Tổng hợp kết quả

> **264/264 ô đã có kết luận** — không còn ô trống. Số liệu đếm bằng lệnh trên chính bảng §2, không nhập tay.

| Màn hình | Passed | Failed | N/A | Tỉ lệ pass |
|---|---|---|---|---|
| C1 Users Management | 31 | 10 | 47 | 31/41 ≈ **75,6 %** |
| C2 dialog Edit User | 16 | 7 | 65 | 16/23 ≈ **69,6 %** |
| C3 dialog Create New User | 16 | 8 | 64 | 16/24 ≈ **66,7 %** |
| **Tổng** | **63** | **25** | **176** | 63/88 ≈ **71,6 %** |

> Tỉ lệ pass = `Passed / (Passed + Failed)` — **không tính N/A vào mẫu số**.
> N/A chiếm 176/264 vì checklist dùng chung phủ cả 4 kịch bản A–D, còn 3 màn hình ở đây chỉ thuộc pool C. Mỗi ô N/A đều ghi lý do cụ thể ở cột Notes.

### Phân bố Failed theo IA

| IA | Failed | Các mục |
|---|---|---|
| **IA-01 — Chuẩn UI chung** | 7 | `G-06` hai nút chính ngang nhau · `G-12` tương phản dưới ngưỡng (×3) · `G-13` tràn ngang khi zoom 200% (×3) |
| **IA-02 — Forms** | 7 | `F-01` ô tìm kiếm không nhãn · `F-02` không dấu hiệu bắt buộc (×2) · `F-08` focus không về trường lỗi (×2) · `F-12` Esc mất dữ liệu (×2) |
| IA-03 — Navigation | 1 | `N-03` không có breadcrumb |
| **IA-04 — Feedback / State** | 10 | `S-01` không phản hồi sau tạo/sửa/xoá (×3) · `S-02` mức phản hồi bằng 0 (×3) · `S-07` nút phá huỷ nổi bật + nhãn chung chung · `S-09` chuỗi thao tác không báo kết thúc · `S-17` Export không thông báo · `S-20` mật khẩu báo ràng buộc muộn |

### Nhận xét — 25 ô Failed quy về **bốn** nguyên nhân gốc

**1. Hệ thống im lặng sau mọi thao tác ghi dữ liệu.** Nhóm lớn nhất, 10 ô ở IA-04. Chạy trọn chuỗi **tạo → sửa → xoá** một user test: cả ba lần đều **không có toast, không có thông báo tại chỗ**. Người dùng chỉ suy ra kết quả nhờ bảng thay đổi. Nguy hiểm hơn: nếu thao tác thất bại ở phía máy chủ, admin cũng không biết. Vi phạm trực diện Nielsen #1 *Visibility of system status*.

**2. Bảng màu và layout bỏ qua accessibility.** `G-12` + `G-13` = 6 ô, cùng gốc: chữ trắng trên nền nhạt, bố cục không co theo bề rộng.

**3. Thiếu phòng ngừa lỗi.** `F-02` `F-08` `F-12` `S-20` — hệ thống chỉ báo cho người dùng **sau khi** họ đã làm sai.

**4. Phân cấp hành động chưa rõ.** `G-06` hai nút chính ngang nhau; `S-07` nút phá huỷ lại là nút nổi bật nhất trong dialog xoá.

**Điểm sáng:** IA-03 gần như sạch — deep link, nút Back trình duyệt, giữ bộ lọc, Esc đóng modal, chuyển hướng khi chưa đăng nhập đều đạt. Hai cơ chế an toàn quan trọng cũng làm đúng: `F-11` khoá nút chống submit trùng, `S-19` cập nhật trạng thái tức thì trên danh sách.

---

## 4. Bug report từ các mục Failed

> Mỗi lỗi đáng kể → một dòng trong [`04_Bug-Usability-Findings-Log.md`](04_Bug-Usability-Findings-Log.md) **và** một submission Google Form.

**25 ô Failed → 10 lỗi.** Nhiều ô cùng mô tả một khiếm khuyết trên nhiều màn hình *(ví dụ `S-01` Failed ở cả C1, C2, C3 nhưng chỉ là một lỗi: hệ thống không phản hồi sau thao tác ghi)*, nên gộp lại theo lỗi thay vì theo ô.

| ID Finding | Mục checklist | Màn hình | Bước tái hiện | Kỳ vọng | Thực tế | Mức | Ảnh |
|---|---|---|---|---|---|---|---|
| **T1B-01** | `F-01` `F-04` `F-05` | C3 | Add User → để trống → **Create User** → đối chiếu nhãn ↔ placeholder ↔ thông báo lỗi của 2 ô tên | Ba thứ cùng nói về một trường | Ô nhãn *First Name* có placeholder *Last Name* và báo *"Last name is required"*; ô kia ngược lại | **3** | [`T1B-01-swapped-name-validation.png`](evidence/task1b/T1B-01-swapped-name-validation.png) |
| **T1B-02** | `F-02` | C2 · C3 | Mở dialog → quan sát nhãn **trước khi** bấm gì | Biết trường nào bắt buộc trước khi điền | Dấu `*` xuất hiện **0 lần**; ràng buộc chỉ nằm ở thuộc tính HTML `required`, không render ra giao diện | **2** | [`C3-validation-audit.png`](evidence/task1b/C3-validation-audit.png) |
| **T1B-03** | `F-08` | C2 · C3 | Submit form rỗng → đọc `document.activeElement` | Focus nhảy về trường lỗi đầu tiên | Vẫn là `BUTTON` — người dùng bàn phím phải Tab ngược lên | **2** | [`C3-validation-audit.png`](evidence/task1b/C3-validation-audit.png) |
| **T1B-04** | `S-20` | C3 | Mở Add User → quan sát vùng quanh ô Password | Ghi sẵn "tối thiểu 8 ký tự" | Không có gợi ý nào; ràng buộc chỉ hiện **sau khi** submit thất bại | **1** | [`C3-validation-audit.png`](evidence/task1b/C3-validation-audit.png) |
| **T1B-05** | `G-12` | C1 · C2 · C3 | Đo tỉ lệ tương phản chữ/nền của sidebar active, nút Export, nút Add User | ≥ 4.5:1 *(WCAG 1.4.3)* | Sidebar **2.08:1** · Export **2.71:1** · Add User **2.08:1** · badge **4.14:1** | **3** | [`C1-G-12-contrast.png`](evidence/task1b/C1-G-12-contrast.png) |
| **T1B-06** | `N-03` | C1 | Mở bất kỳ trang nào dưới `/dashboard/admin` → tìm breadcrumb | Có breadcrumb định vị | Không có phần tử nào ở mọi cấp | **3** | [`C1-N-03-no-breadcrumb.png`](evidence/task1b/C1-N-03-no-breadcrumb.png) |
| **T1B-07** | `G-13` | C1 · C2 · C3 | Zoom 200% *(khung nhìn ~720px)* → so `scrollWidth` với `clientWidth` | Nội dung xuống dòng, không cuộn ngang | Tràn **326px** — 1031 so với 705 *(WCAG 1.4.4)* | **2** | [`C1-G-13-zoom200.png`](evidence/task1b/C1-G-13-zoom200.png) |
| **T1B-08** | `F-12` | C2 · C3 | Nhập dở dữ liệu → bấm **Esc** | Hỏi xác nhận trước khi bỏ dữ liệu chưa lưu | Đóng thẳng, mất sạch nội dung; không có chuỗi *unsaved/discard* nào trong DOM | **3** | [`C3-F-12-no-warning.png`](evidence/task1b/C3-F-12-no-warning.png) |
| **T1B-09** | `F-01` `G-01` | C2 · C3 | Kiểm `[role="dialog"]`: tìm `h1–h4`, `aria-labelledby`, `aria-label` | Dialog có tên đọc được | Cả ba đều **rỗng** — trình đọc màn hình chỉ đọc "dialog" *(WCAG 4.1.2)* | **2** | [`C3-validation-audit.png`](evidence/task1b/C3-validation-audit.png) |
| **T1B-10** | `S-01` `S-02` `S-09` `S-17` | C1 · C2 · C3 | Chạy trọn chuỗi **tạo → sửa → xoá** một user, sau mỗi bước đọc `[class*=toast],[role=status],[role=alert]` | Mỗi thao tác có thông báo xác nhận | Cả ba lần đều **rỗng**. Nếu máy chủ thất bại, admin cũng không biết | **3** | [`C3-S-01-no-toast.png`](evidence/task1b/C3-S-01-no-toast.png) |

**Phân bố mức nghiêm trọng:** 3 → 5 lỗi · 2 → 4 lỗi · 1 → 1 lỗi. Không lỗi nào ở mức **4**, vì cả 10 đều còn đường vòng: người dùng vẫn hoàn thành được tác vụ trên desktop. Diễn giải từng mức ở [`04_Bug-Usability-Findings-Log.md §Diễn giải`](04_Bug-Usability-Findings-Log.md).

**Hai lỗi được người dùng thật xác nhận độc lập ở Task 2:**
- `T1B-01` — P4 Ngô Bảo Long tự phát hiện: *"nó bị ngược nhá đúng không bạn… thì nó là 1 cái lỗi"*
- `T1B-06` — **3/5 người** không tìm được màn hình Users Management

---

## 5. Mục bổ sung của riêng tôi

> Chính sách môn: công việc **không được trùng** với thành viên khác. Đây là phần cá nhân hoá checklist nhóm.

Ba mục dưới đây **không có trong bộ 88 mục của nhóm**. Cả ba đều nảy ra khi tôi chạy checklist bằng script DOM chứ không chỉ nhìn mắt — đó chính là lý do nhóm bỏ sót: nhìn bằng mắt thì màn hình *trông* đúng.

| ID | IA | Mục kiểm tra | Cách kiểm | Phát hiện khi nào | Vì sao AI/nhóm bỏ sót |
|---|---|---|---|---|---|
| **MY-01** | IA-02 | Mỗi ô nhập phải có `<label>` **gắn đúng** vào ô bằng cặp `for`/`id` *(hoặc bọc trong label)* — không chỉ có chữ nằm cạnh | `document.querySelectorAll('label[for]')` rồi đối chiếu `for` ↔ `id` của input | Khi kiểm `F-01` ở C3: script báo "thiếu nhãn" nhưng ảnh chụp cho thấy **có** chữ nhãn. Đào ra thì nhãn tồn tại nhưng **không liên kết** với ô | Mục `F-01` của nhóm chỉ hỏi *"ô nhập có nhãn không"* — hỏi về **thứ nhìn thấy**. Nhãn có gắn hay không là thứ chỉ trình đọc màn hình mới biết, mắt thường không phân biệt được |
| **MY-02** | IA-01 | `[role="dialog"]` phải có **tên truy cập được** — heading `h1–h4` bên trong kèm `aria-labelledby`, hoặc `aria-label` | Kiểm 3 thứ trong dialog: `querySelectorAll('h1,h2,h3,h4')`, `aria-labelledby`, `aria-label` | Khi kiểm `G-01` *(tiêu đề trang)* ở C2/C3 và nhận ra dialog không phải trang nên phải chấm N/A — nhưng dialog **cũng cần** tiêu đề, chỉ là theo chuẩn khác | Checklist nhóm xây quanh mô hình **trang**: tiêu đề trang, breadcrumb, URL. Không ai nghĩ tới việc dialog có bộ quy tắc ngữ nghĩa riêng *(WCAG 4.1.2)*, trong khi kịch bản C có **2 trong 3 màn hình là dialog** |
| **MY-03** | IA-03 | Bảng dữ liệu nhiều dòng phải cho **sắp xếp theo cột chính** *(tên, ngày tạo, trạng thái)* | Kiểm `th` có `aria-sort`, `role="columnheader"` có thể bấm, hoặc icon sắp xếp | Khi chạy `S-19` trên bảng Users C1 — bảng chỉ có phân trang và tìm kiếm, **không cột nào bấm để sắp xếp** | Nhóm có mục cho **lọc** và **tìm kiếm** nhưng không có mục cho **sắp xếp**. Ba thứ này hay bị gộp làm một khi liệt kê nhanh, mà chúng giải quyết ba nhu cầu khác nhau |

### Kết quả chạy 3 mục này trên C1 · C2 · C3

| ID | C1 Users Management | C2 Edit User | C3 Create New User |
|---|---|---|---|
| MY-01 | **Failed** — ô tìm kiếm không có nhãn gắn | **Failed** — nhãn có chữ nhưng không gắn `for`/`id` | **Failed** — như C2 |
| MY-02 | N/A — không phải dialog | **Failed** — không heading, không `aria-labelledby`, không `aria-label` | **Failed** — như C2 |
| MY-03 | **Failed** — không cột nào sắp xếp được | N/A — không có bảng | N/A — không có bảng |

→ Thêm **7 ô**: 6 Failed, 3 N/A. Cả ba mục đều Failed ở mọi màn hình áp dụng được — cho thấy đây là **vùng mù có hệ thống** của checklist nhóm, không phải ba lỗi lẻ.

MY-01 và MY-02 đã được ghi thành lỗi `T1B-09`; MY-03 chưa đủ nghiêm trọng để lập finding riêng *(bảng hiện chỉ vài chục dòng, tìm kiếm vẫn thay thế được)* nhưng sẽ thành vấn đề thật khi dữ liệu lớn dần.

☐ **Cần verify:** MY-03 chấm từ lần audit `S-19`. Bấm thử vào tiêu đề cột **USER** và **CREATED** ở C1 một lần cho chắc.
