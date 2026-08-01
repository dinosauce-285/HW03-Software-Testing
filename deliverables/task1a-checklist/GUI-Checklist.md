# HW03 · Task 1 Phần A — GUI Checklist dùng chung (sản phẩm nhóm)

**SUT:** EMS — Event Management System · https://prod-dev.ems-fitus.cloud *(khu quản trị: `/dashboard/admin`)*
**Phạm vi phủ:** IA-01 (chuẩn UI chung) · IA-02 (forms) · IA-03 (navigation) · IA-04 (feedback/state)
**Tổng số mục:** **74** (yêu cầu tối thiểu: > 40)

| IA | Số mục | Do AI sinh | Nhóm bổ sung |
|---|---|---|---|
| IA-01 — Chuẩn UI chung | 18 | 10 | 8 |
| IA-02 — Forms | 19 | 8 | 11 |
| IA-03 — Navigation | 17 | 6 | 11 |
| IA-04 — Feedback / State | 20 | 6 | 14 |
| **Tổng** | **74** | **30** | **44** |

**Trạng thái xác minh:** toàn bộ 74 mục đã được đối chiếu với EMS thật (`https://prod-dev.ems-fitus.cloud`) ngày 01/08/2026. Sáu mục đặc thù pool C (G-17, G-18, N-16, N-17, S-19, S-20) đã **viết lại theo giao diện thực tế** — chi tiết ở §6.

---

## Cách dùng khi chạy (Task 1B)

Mỗi mục đánh **một** trong bốn giá trị, **theo từng màn hình**:

| Giá trị | Nghĩa | Bắt buộc kèm |
|---|---|---|
| **Passed** | Đã kiểm, đạt | — |
| **Failed** | Đã kiểm, không đạt | **Notes (lý do) + ảnh chụp** |
| **N/A** | Mục không áp dụng cho màn hình này | Ghi ngắn lý do N/A |
| *(trống)* | Chưa kiểm — **không được để trống khi nộp** | — |

> Do checklist phủ rộng cả 4 IA, **N/A là bình thường và được dự kiến**: một màn hình chỉ hiển thị sẽ N/A gần hết nhóm IA-02. Ước tính mỗi màn hình thực chạy khoảng **35–45 mục**.
> Tỉ lệ pass tính trên `Passed / (Passed + Failed)`, **không tính N/A vào mẫu số**.

**Ký hiệu cột Nguồn:** `R1` Nielsen · `R2` Norman · `R3` Shneiderman · `R4` Slide S13 · `R8` Tài liệu E2E EMS · `R10` WCAG 2.2 — chi tiết ở [Task1A_Heuristics-Reference.md](../../references/Task1A_Heuristics-Reference.md)

**Ký hiệu cột Nguồn gốc:** `AI` = do AI sinh ở lượt đầu · `RV` = bổ sung ở lượt review phản biện của nhóm (xem §5 để biết lý do AI bỏ sót)

---

## 1. IA-01 — Chuẩn UI chung (18 mục)

| ID | Mục kiểm tra | Nguồn | Nguồn gốc |
|---|---|---|---|
| G-01 | Tiêu đề trang khớp với mục đang được chọn trên sidebar/menu | R1#4, R4 p.16 | AI |
| G-02 | Cùng một chức năng dùng cùng một nhãn ở mọi màn hình (không lúc "Export" lúc "Xuất file") | R3#1, R4 p.16 (Labels) | AI |
| G-03 | Trong bảng dữ liệu: text canh trái, số canh phải, trạng thái canh giữa — nhất quán ở mọi bảng | R4 p.16 (Layout and alignment) | AI |
| G-04 | Toàn hệ thống dùng tối đa 2 họ font; cỡ chữ theo thang nhất quán (tiêu đề / nội dung / chú thích) | R4 p.16 (Typography) | AI |
| G-05 | Màu dùng đúng ngữ nghĩa: màu chính cho hành động chính, **đỏ chỉ dành cho lỗi / hành động phá huỷ** | R4 p.16 (Color scheme), R2-Consistency | AI |
| G-06 | Mỗi màn hình chỉ có **một** nút hành động chính; các nút còn lại ở dạng phụ | R1#8 | AI |
| G-07 | Nội dung không tràn ngang gây thanh cuộn ngang ở độ rộng màn hình ≥ 1280px | R4 p.16 | AI |
| G-08 | Trạng thái rỗng (empty state) có thông điệp giải thích **và** gợi ý hành động tiếp theo, không phải vùng trắng trơn | R1#1 | AI |
| G-09 | Trạng thái đang tải có skeleton/spinner; khi dữ liệu về **không gây nhảy layout** | R1#1 | AI |
| G-10 | Ảnh giữ đúng tỉ lệ khung, không bị méo hay co giãn sai | R4 p.16 | AI |
| G-11 | Thuật ngữ dùng ngôn ngữ người dùng — **không lộ mã trạng thái nội bộ** ra giao diện (vd hiện thẳng `OUTSIDE_CHECKIN_WINDOW`) | R1#2, R8 bước 9 | **RV** |
| G-12 | Tỉ lệ tương phản chữ/nền ≥ 4.5:1 (chữ thường), ≥ 3:1 (chữ lớn) | R10 SC 1.4.3, R3#2 | **RV** |
| G-13 | Nội dung vẫn đọc được và không vỡ layout khi zoom trình duyệt **200%** | R10 SC 1.4.4 | **RV** |
| G-14 | Chuyển EN/VI dịch **toàn bộ** text hiển thị — không còn chuỗi lẫn ngôn ngữ trên cùng màn hình | R1#2, R3#2, R8 bước 1 | **RV** |
| G-15 | Text tiếng Việt (dài hơn EN) không làm vỡ nút, cắt chữ, hay xuống dòng xấu | R3#2, R8 bước 1 | **RV** |
| G-16 | Ngôn ngữ đã chọn được **lưu lại** và giữ nguyên sau khi tải lại trang / mở trang khác | R1#1, R8 bước 1 | **RV** |
| G-17 | Avatar dạng chữ viết tắt phải nằm gọn trong vòng tròn với **tên dài nhiều từ** (vd "KHOA NGUYỄN QUANG ĐĂNG" → "KNQĐ"), không tràn, không đè lên tên | R8 bước 2, R1#1 | **RV** |
| G-18 | Member Code hiển thị đầy đủ, không bị cắt bởi độ rộng cột; giá trị rỗng có ký hiệu thống nhất và định dạng đồng nhất giữa các dòng | R8 bước 2, R3#1 | **RV** |

---

## 2. IA-02 — Forms (19 mục)

| ID | Mục kiểm tra | Nguồn | Nguồn gốc |
|---|---|---|---|
| F-01 | Mọi ô nhập có nhãn hiển thị **thường trực**, không chỉ dựa vào placeholder (placeholder biến mất khi gõ) | R1#6, R4 p.16 (Labels) | AI |
| F-02 | Trường bắt buộc được đánh dấu rõ (dấu `*` hoặc chữ "bắt buộc") **trước khi** người dùng submit | R1#5 | AI |
| F-03 | Submit khi thiếu trường bắt buộc → hệ thống **chặn**, không cho lưu | R4 p.11 (Mandatory fields, not mandatory) | AI |
| F-04 | Thông báo lỗi hiện **ngay cạnh trường bị lỗi**, không chỉ ở toast góc màn hình | R1#9, R4 p.16 (Error messages) | AI |
| F-05 | Thông báo lỗi nói rõ **cách sửa**, không chỉ nói "dữ liệu không hợp lệ" | R1#9, R3#5 | AI |
| F-06 | Giá trị mặc định của mỗi trường hợp lý (vd ngày bắt đầu = hôm nay), không rỗng hay vô nghĩa | R4 p.11 (Incorrect field default) | **RV** |
| F-07 | Ràng buộc được áp **ngay tại control** (date picker chặn ngày không hợp lệ) thay vì chỉ báo lỗi sau khi submit | R2-Constraints, R1#5 | AI |
| F-08 | Sau khi submit lỗi, **focus tự nhảy về trường lỗi đầu tiên** | R4 p.18 (Form Navigation – proper focus order) | **RV** |
| F-09 | Upload nêu rõ **định dạng, dung lượng tối đa và tỉ lệ khung** yêu cầu *trước khi* người dùng chọn file | R1#5 | AI |
| F-10 | Upload có chỉ báo tiến trình, có thể huỷ; thất bại thì báo lỗi rõ và cho thử lại | R1#1, R1#9 | AI |
| F-11 | Nút Submit bị khoá trong lúc đang gửi để tránh **submit trùng** (double-submit) | R1#5 | **RV** |
| F-12 | Rời form khi đang nhập dở → **cảnh báo mất dữ liệu** trước khi điều hướng | R3#6, R1#5 | **RV** |
| F-13 | Mọi ô nhập và control thao tác được **hoàn toàn bằng bàn phím**, có viền focus nhìn thấy rõ | R3#2, R10 SC 2.4.7 | **RV** |
| F-14 | **Validation chéo ngày/giờ:** ngày kết thúc trước ngày bắt đầu bị chặn, có báo lỗi rõ | R8 bước 4, R4 p.11 | **RV** |
| F-15 | **Validation chéo:** thời gian đóng đăng ký không được sau thời điểm sự kiện kết thúc | R8 bước 4 | **RV** |
| F-16 | **Trường bắt buộc có điều kiện:** tắt "không giới hạn" thì Max Slots trở thành bắt buộc và bị chặn nếu bỏ trống | R8 bước 5, R4 p.11 | **RV** |
| F-17 | Bật/tắt công tắc làm ẩn/hiện **đúng** nhóm trường liên quan, không để lại trường mồ côi hay giá trị rác | R8 bước 5, R2-Visibility | **RV** |
| F-18 | Upload sai tỉ lệ quy định (thumbnail **4:3**, banner **24:9**) được báo trước khi lưu; preview hiển thị đúng tỉ lệ | R8 bước 4 | **RV** |
| F-19 | Rich-text editor có Undo/Redo và **giữ nguyên định dạng** sau khi lưu rồi mở lại | R3#6, R8 bước 4 | **RV** |

---

## 3. IA-03 — Navigation (17 mục)

| ID | Mục kiểm tra | Nguồn | Nguồn gốc |
|---|---|---|---|
| N-01 | Menu chính cho phép truy cập tới **mọi khu vực lớn** của ứng dụng | R4 p.17 (Main Menu Navigation) | AI |
| N-02 | Mục đang xem được đánh dấu **active** rõ ràng trên sidebar/menu | R1#1, R4 p.17 | AI |
| N-03 | Breadcrumb phản ánh **đúng đường đi**, và mỗi cấp bấm được để quay lui | R4 p.17 (Breadcrumb Navigation) | AI |
| N-04 | Mọi trang chi tiết có đường quay lại danh sách cha (nút Back hoặc breadcrumb) | R1#3, R4 p.17 | AI |
| N-05 | Link và nút dẫn tới **đúng** màn hình/hành động kỳ vọng; không có link chết | R4 p.18 (Links and Buttons) | AI |
| N-06 | Tab trong trang giữ đúng nội dung khi chuyển qua lại; tab đang chọn nhận biết được | R1#1 | AI |
| N-07 | **Nút Back của trình duyệt** hoạt động đúng — không mất trạng thái, không submit lại form | R1#3 | **RV** |
| N-08 | **Deep link:** copy URL trang chi tiết, mở ở tab mới vẫn vào đúng bản ghi | R1#3 | **RV** |
| N-09 | **Bộ lọc / từ khoá tìm kiếm / số trang được giữ lại** khi quay về từ trang chi tiết | R3#8, R1#6 | **RV** |
| N-10 | Sau khi lưu, người dùng được trả về **đúng ngữ cảnh cũ**, không bị đá về dashboard | R3#7 | **RV** |
| N-11 | Thứ tự Tab bàn phím đi theo thứ tự đọc trực quan; **Esc đóng modal**; không có bẫy focus trong modal | R4 p.18, R10 SC 2.1.2 | **RV** |
| N-12 | **Kéo-thả reorder:** dòng đang kéo có phản hồi thị giác rõ (mờ đi), các nút khác bị vô hiệu trong lúc kéo | R8 bước 3 | **RV** |
| N-13 | Thứ tự sau khi kéo-thả được **lưu đúng** sau khi Save và giữ nguyên khi tải lại trang | R8 bước 3 | **RV** |
| N-14 | Kéo-thả có **phương án thay thế không dùng chuột** (nút lên/xuống hoặc nhập số thứ tự) | R10 SC 2.5.7, R3#2 | **RV** |
| N-15 | Truy cập URL khu vực admin bằng tài khoản không đủ quyền → chuyển hướng hoặc báo lỗi rõ ràng, **không hiện trang trắng** | R4 p.14 (Menu options align with application mode) | **RV** |
| N-16 | Cột bảng sắp xếp được phải có **chỉ báo hướng sắp xếp** (mũi tên tăng/giảm) và giữ nguyên tiêu chí sắp xếp khi chuyển trang | R1#1, R4 p.16 | **RV** |
| N-17 | Thông tin audit (ai tạo / ai sửa lần cuối, thời điểm) hiển thị đủ **người thực hiện và mốc thời gian**; giá trị thiếu có ký hiệu rõ ràng thay vì để trống | R8 bước 2, R1#1 | **RV** |

---

## 4. IA-04 — Feedback / State (20 mục)

| ID | Mục kiểm tra | Nguồn | Nguồn gốc |
|---|---|---|---|
| S-01 | Mọi hành động làm thay đổi dữ liệu đều có phản hồi rõ ràng (toast hoặc thông báo tại chỗ) | R3#3, R2-Feedback | AI |
| S-02 | Mức độ phản hồi **tương xứng**: thao tác nhỏ phản hồi nhẹ, thao tác lớn/hiếm phản hồi rõ rệt | R3#3 | AI |
| S-03 | Thao tác kéo dài (> ~400ms) có chỉ báo đang xử lý; màn hình không đứng im vô cớ | R1#1 | AI |
| S-04 | Toast tự tắt sau 3–5 giây, **không che** nội dung đang thao tác, và đóng thủ công được | R1#8 | AI |
| S-05 | Thông báo lỗi hệ thống dùng ngôn ngữ thường — không lộ mã lỗi, stack trace hay tên bảng CSDL | R1#9 | AI |
| S-06 | Hành động phá huỷ (Delete, Block) có **dialog xác nhận** nêu rõ hậu quả và đối tượng bị tác động | R1#5, R3#5 | AI |
| S-07 | Trong dialog xác nhận: nút mặc định là nút **an toàn**; nút phá huỷ có nhãn động từ cụ thể ("Xoá sự kiện") thay vì "OK" | R1#9, R3#5 | **RV** |
| S-08 | Hành động **hoàn tác được**; nếu không hoàn tác được thì phải nói rõ điều đó *trước khi* xác nhận | R3#6 | **RV** |
| S-09 | Kết thúc một chuỗi thao tác nhiều bước có thông báo **hoàn tất** rõ ràng | R3#4 | **RV** |
| S-10 | Trạng thái được phân biệt **không chỉ bằng màu** — có thêm icon hoặc nhãn chữ | R10 SC 1.4.1 | **RV** |
| S-11 | Bảng có nhiều màu trạng thái (EMS: 6 màu ở tab Participants) phải có **chú giải** hoặc tooltip giải nghĩa | R8 bước 7, R1#6 | **RV** |
| S-12 | Trạng thái của nút phản ánh đúng trạng thái dữ liệu (sự kiện đã PUBLISHED thì không còn nút Publish) | R4 p.13 (Control state alignment with state of data) | **RV** |
| S-13 | **Progress bar** phản ánh đúng tiến độ thật và cập nhật ngay khi dữ liệu thay đổi | R8 bước 7, R4 p.14 (Synchronization of window object content) | **RV** |
| S-14 | Danh sách **real-time** (log quét check-in) tự cập nhật mà không cần tải lại trang, và không làm mất vị trí đang đọc | R8 bước 9, R4 p.12 (Currency of data on screens) | **RV** |
| S-15 | Các nhánh kết quả khác nhau được hiển thị **phân biệt rõ** (SUCCESS / ALREADY_CHECKED_IN / OUTSIDE_CHECKIN_WINDOW / PENDING_REVIEW) | R8 bước 9 | **RV** |
| S-16 | Hành động bị chặn vì ràng buộc nghiệp vụ phải giải thích **lý do** (vd không xoá được Campus vì đang được sự kiện tham chiếu), không chỉ báo "thất bại" | R8 bước 3, R1#9 | **RV** |
| S-17 | Xuất file (Export Excel) có chỉ báo đang xử lý và thông báo khi tải xong hoặc thất bại | R8 bước 2, R1#1 | **RV** |
| S-18 | Badge / chấm thông báo phản ánh **đúng số lượng thật** và biến mất sau khi đã xử lý | R8 bước 7 | **RV** |
| S-19 | Sau khi đổi công tắc trạng thái (Active) và lưu, cột trạng thái trên danh sách cập nhật **ngay** mà không cần tải lại trang | R8 bước 2, R4 p.14 | **RV** |
| S-20 | Trường mật khẩu nêu rõ **ràng buộc trước khi submit** (độ dài tối thiểu, ký tự bắt buộc), không để người dùng đoán rồi mới báo lỗi | R1#5, R1#9 | **RV** |

---

## 5. Phân tích: các mục AI bỏ sót và **vì sao** *(yêu cầu bắt buộc — §6 Task 1A)*

**Quy trình đã thực hiện:** lượt 1 — AI sinh checklist từ heuristic phổ quát (Nielsen/Norman/Shneiderman) khi **chưa** được cung cấp slide môn học và tài liệu EMS → thu được **30 mục** (`AI`). Lượt 2 — nhóm review phản biện sau khi đọc slide `S13`, tài liệu E2E của EMS và tra cứu WCAG 2.2 → bổ sung **38 mục** (`RV`).

### 5.1 Nhóm nguyên nhân **[EMS]** — đặc thù sản phẩm, AI không thể biết

| ID | Mục | Vì sao AI bỏ sót |
|---|---|---|
| F-14, F-15 | Validation chéo ngày/giờ | AI biết khái niệm "validate ngày" nhưng không biết EMS có **hai cặp ràng buộc thời gian cụ thể** (start–end, thời điểm đóng đăng ký–kết thúc sự kiện). Chỉ đọc tài liệu E2E mới có |
| F-16, F-17 | Trường bắt buộc **có điều kiện** theo công tắc `isUnlimited`, `allowGuestRegistration`… | Đây là logic nghiệp vụ riêng của EMS. AI mặc định "bắt buộc" là thuộc tính tĩnh của trường, không nghĩ tới trường hợp bắt buộc *phụ thuộc trạng thái control khác* |
| F-18 | Tỉ lệ ảnh **4:3 / 24:9** | Con số này là quy ước riêng của EMS, không tồn tại trong bất kỳ tài liệu công khai nào |
| F-19 | Rich-text giữ định dạng sau lưu-mở lại | AI có sinh mục về rich-text editor nói chung, nhưng không nghĩ tới kiểm tra **round-trip** vì không biết EMS lưu nội dung sự kiện bằng editor |
| N-12, N-13, N-14 | Kéo-thả reorder | AI không biết EMS có drag-drop ở Categories / Academic Contexts / Social Media. Mục N-12 còn lấy đúng hành vi mô tả trong tài liệu ("dòng kéo mờ đi, các nút khác vô hiệu hoá") |
| S-11 | Chú giải cho **6 màu** trạng thái | AI không biết bảng Participants dùng tới 6 màu; với 2–3 màu thì chú giải không cần thiết, 6 màu thì bắt buộc |
| S-13, S-14 | Progress bar duyệt đăng ký · log check-in real-time | Hai cơ chế cập nhật động đặc thù của EMS |
| S-15 | Bốn nhánh kết quả quét check-in | AI không biết tập trạng thái nghiệp vụ của EMS |
| S-16 | Chặn xoá vì ràng buộc tham chiếu | AI sinh mục "có thông báo lỗi", nhưng không biết EMS có nhóm ràng buộc toàn vẹn dữ liệu (Campus/Category/Context đang được tham chiếu) — nơi *lý do* mới là thứ quan trọng |
| S-17, S-18 | Export Excel · badge thông báo | Chức năng cụ thể của EMS |
| G-11 | Không lộ mã trạng thái nội bộ | Rủi ro này chỉ thấy được khi biết EMS có các mã như `OUTSIDE_CHECKIN_WINDOW` |
| G-17, G-18 | Avatar fallback · Member Code không bị cắt | AI không biết bảng Users của EMS có cột Avatar+Name và Member Code. Trường hợp ảnh hỏng và mã bị cắt là rủi ro cụ thể của đúng hai cột đó |
| N-16, N-17 | Chỉ báo hướng sắp xếp · cột Audit | AI không biết bảng có cột **Audit** riêng dẫn tới lịch sử thay đổi; cũng không sinh mục về trạng thái sắp xếp vì coi sort là hành vi mặc định của component bảng |
| S-19, S-20 | Cập nhật trạng thái Active sau Block · cách xử lý mật khẩu mới | Hai luồng nghiệp vụ riêng của EMS (Block/Unblock, Reset Password). Riêng S-20 là câu hỏi AI không đặt ra được vì không biết EMS chọn cơ chế nào |
| G-14, G-15, G-16 | i18n EN/VI | AI có nhắc "hỗ trợ đa ngôn ngữ" chung chung, nhưng **không** sinh 3 mục cụ thể: phủ dịch toàn bộ, tràn text do tiếng Việt dài hơn, và lưu lựa chọn ngôn ngữ. Phải nhìn app song ngữ mới tách được |
| N-15 | Truy cập URL admin khi không đủ quyền | EMS có hai lớp giao diện admin/user chia sẻ cùng domain — rủi ro này đặc thù kiến trúc đó |

### 5.2 Nhóm nguyên nhân **[Prompt]** — do prompt lượt đầu chưa đủ dẫn dắt

| ID | Mục | Vì sao AI bỏ sót |
|---|---|---|
| G-12, G-13 | Tương phản màu · zoom 200% | Prompt lượt 1 chỉ nói "checklist GUI", không nêu **accessibility** là một chiều bắt buộc. AI hiểu "GUI" ≈ thẩm mỹ + bố cục nên bỏ hẳn nhánh này. Khắc phục ở lượt 2 bằng prompt nêu đích danh WCAG 2.2 |
| F-13, N-11 | Điều hướng bằng bàn phím · Esc đóng modal · bẫy focus | Cùng nguyên nhân trên. Đáng chú ý: **slide S13 trang 18 có nhắc "proper focus order"** — tức AI bỏ sót thứ mà bài giảng đã dạy, do prompt không đưa bài giảng vào ngữ cảnh |
| N-14 | Phương án thay thế cho kéo-thả | Prompt không yêu cầu xét người dùng không dùng được chuột |
| S-07 | Nút mặc định an toàn · nhãn động từ cụ thể | AI dừng ở mức "có dialog xác nhận" — prompt không yêu cầu đi sâu vào **thiết kế bên trong** dialog |
| S-09, S-10 | Closure · không dựa vào màu đơn thuần | Prompt không nêu Shneiderman #4 và WCAG 1.4.1 làm chiều phủ |
| F-12 | Cảnh báo mất dữ liệu khi rời form | Prompt tập trung vào "validation", không nêu vòng đời phiên nhập liệu |

### 5.3 Nhóm nguyên nhân **[Model]** — giới hạn của mô hình

| ID | Mục | Vì sao AI bỏ sót |
|---|---|---|
| F-06 | Giá trị mặc định của trường | AI sinh checklist theo tư duy **UX hiện đại**, trong khi đây là mục thuộc danh sách **"Common GUI bugs" cổ điển** ở slide S13 trang 11. Kho tri thức của model nghiêng về bài viết UX blog gần đây hơn là tài liệu kiểm thử GUI truyền thống |
| F-08 | Focus nhảy về trường lỗi đầu tiên | Cùng lý do — đây là mục kinh điển trong kiểm thử GUI nhưng ít xuất hiện trong nội dung UX phổ thông |
| F-11 | Chống double-submit | Model xem đây là vấn đề **hiện thực (implementation)** chứ không phải vấn đề giao diện, nên loại khỏi checklist GUI |
| S-12 | Trạng thái nút khớp trạng thái dữ liệu | Nguyên văn là mục *"Control state alignment with state of data in window"* ở S13 trang 13 — thuật ngữ cổ điển, model không tự liên hệ |
| N-07, N-08 | Nút Back trình duyệt · deep link | Model coi đây là hành vi của **trình duyệt**, không thuộc phạm vi "GUI của ứng dụng" |
| N-09, N-10 | Giữ bộ lọc · trả về đúng ngữ cảnh | Đây là điểm đau chỉ lộ ra khi **dùng app liên tục nhiều thao tác**. Model không có trải nghiệm sử dụng nên không sinh được |
| S-08 | Hoàn tác được, hoặc nói rõ không hoàn tác được | AI sinh "có xác nhận" nhưng bỏ vế "reversal" của Shneiderman #6 |

### 5.4 Một phát hiện đáng ghi nhận về nguồn AI dùng

Khi được hỏi về **8 Golden Rules của Shneiderman**, AI trả về **bản cũ** — Rule 2 *"Enable frequent users to use shortcuts"* và Rule 7 *"Support internal locus of control"*. Đối chiếu **trang chính chủ của tác giả** (cs.umd.edu/~ben/goldenrules.html, tương ứng bản 6th edition) thì hai quy tắc này đã đổi thành **"Seek universal usability"** và **"Keep users in control"**.

Hệ quả trực tiếp: bản 6th ed. nêu đích danh *"novices, experts, **people with disabilities**, and international audiences"* — tức **accessibility và i18n nằm thẳng trong golden rules**. Vì AI dùng bản cũ, nó bỏ luôn nhánh này khỏi checklist. Đây là ví dụ cụ thể của việc **dữ liệu huấn luyện lỗi thời dẫn tới thiếu phạm vi phủ**, và là lý do các mục G-12…G-16, F-13, N-11, N-14, S-10 phải do người bổ sung.

---

## 6. Đối chiếu với EMS thật — các mục đã phải sửa lại

Khảo sát trực tiếp trên `https://prod-dev.ems-fitus.cloud` ngày 01/08/2026 (đăng nhập admin, quan sát 3 màn hình pool C). Bốn mục viết từ tài liệu đã **sai so với sản phẩm thật** và được sửa:

| ID | Bản viết từ tài liệu | Thực tế trên EMS | Đã sửa thành |
|---|---|---|---|
| **G-17** | Kiểm ảnh avatar hỏng → hiện fallback | Avatar **luôn** là chữ viết tắt, không có thẻ `<img>` nào trong bảng | Kiểm chữ viết tắt của **tên dài nhiều từ** có tràn vòng tròn không (vd "KHOA NGUYỄN QUANG ĐĂNG" → "KNQĐ") |
| **N-17** | Cột **Audit** mở được lịch sử thay đổi | **Không có cột Audit.** Thông tin audit nằm ở hai cột CREATED / UPDATED, hiển thị người thao tác + thời điểm | Kiểm hai cột đó có đủ người thực hiện và mốc thời gian, giá trị thiếu có ký hiệu rõ ràng |
| **S-20** | Reset Password nói rõ mật khẩu mới xử lý thế nào | **Không có chức năng Reset Password.** Mật khẩu chỉ đặt được lúc tạo user mới | Kiểm trường Password nêu ràng buộc **trước** khi submit |
| **G-18, N-16, S-19** | — | Xác nhận có thật: cột Member Code (rỗng hiển thị `-`), 2 tiêu đề cột sắp xếp được, công tắc Active trong dialog Edit User | Giữ nguyên hướng kiểm, chỉnh lời cho khớp giao diện |

**Bài học ghi nhận cho AI Critique:** ba trong sáu mục đặc thù mà AI (và cả tài liệu E2E) tự tin mô tả lại **không tồn tại trong sản phẩm thật**. Tài liệu mô tả một phiên bản EMS khác với phiên bản đang chạy — nghĩa là *"đặc thù sản phẩm"* không chỉ nằm ngoài tầm của AI, mà còn nằm ngoài tầm của tài liệu. Chỉ mở app ra xem mới biết.

---

## 7. Sản phẩm nhóm kèm theo

| # | Sản phẩm | Vị trí |
|---|---|---|
| 1 | Checklist GUI (file này) | `deliverables/task1a-checklist/GUI-Checklist.md` |
| 2 | Danh sách nguồn tham khảo | [`references/Task1A_Heuristics-Reference.md`](../../references/Task1A_Heuristics-Reference.md) |
| 3 | Log prompt AI | [`AI-Prompts-Log.md`](AI-Prompts-Log.md) |
