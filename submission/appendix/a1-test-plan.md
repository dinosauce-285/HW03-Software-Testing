# Task 2 — Thiết kế & bộ công cụ User Testing

> Cấu trúc theo **"Typical test plan format"** — slide `S13_GUI Testing & Usability Testing.pdf` (9 mục), kết hợp yêu cầu đề §6 Task 2.
> Loại hình: **Assessment test** (theo phân loại S13: người dùng thực hiện tập tác vụ well-defined, thu số liệu định lượng, ít tương tác với người điều phối).

**Sinh viên:** 23127262 – Lý Quốc Thạnh · **Kịch bản:** **C — Admin quản lý người dùng**
**Màn hình:** C1 Users Management · C2 dialog Edit User · C3 dialog Create New User
**SUT:** `https://prod-dev.ems-fitus.cloud/dashboard/admin/users`

---

## 1. Purpose — Mục đích

Đánh giá tính tiện dụng của luồng **quản trị người dùng** trên EMS: một người chưa từng dùng hệ thống có tự hoàn thành được việc thêm thành viên mới và ngừng quyền truy cập của một thành viên cũ hay không, mất bao lâu, vấp ở đâu.

Task 1B đã đánh giá cùng ba màn hình này bằng **checklist heuristic** (đánh giá chuyên gia). Task 2 kiểm lại bằng **bằng chứng thực nghiệm** từ người dùng thật, để trả lời câu hỏi mà checklist không trả lời được: *trong 25 lỗi checklist bắt được, cái nào người dùng thật sự vấp phải?*

## 2. Problem statement — Câu hỏi cần trả lời

| # | Câu hỏi | Performance data | Preference data |
|---|---|---|---|
| 1 | Người dùng lần đầu có tự tìm ra cách **thêm một thành viên mới** không? | Tỉ lệ hoàn thành · time on task · số lần bấm sai | Điểm SUS câu 3 (dễ dùng), câu 7 (học nhanh) |
| 2 | Có tự tìm ra cách **ngừng quyền truy cập** của một thành viên mà không xoá họ không? | Tỉ lệ hoàn thành · số lần do dự · số lần mở nhầm dialog | Câu probe *clarity* |
| 3 | Sau khi bấm lưu, người dùng có **biết chắc là đã lưu** không? *(Task 1B: `S-01` Failed — hệ thống im lặng)* | Số lần hỏi lại / kiểm lại / bấm lưu lần hai | Câu probe *trust* |
| 4 | Có ai điền nhầm **Họ vào ô Tên** không? *(Task 1B: `T1B-01` — nhãn và placeholder ngược nhau)* | Đếm số người điền ngược | Câu probe *clarity* |
| 5 | Có ai **mất dữ liệu** vì bấm Esc giữa chừng không? *(Task 1B: `T1B-08`)* | Đếm số lần mất dữ liệu | Câu probe *error recovery* |

> Ba câu 3–5 là **giả thuyết rút ra từ Task 1B**. Chúng cho phép đối chiếu trực tiếp: lỗi checklist bắt được có thành vấn đề thật với người dùng không.

## 3. Task scenario

Hai tác vụ hướng mục tiêu giao cho người tham gia, kèm dữ liệu test và đường đi đúng — xem [`02-usability-report.md §2`](../02-usability-report.md). Lời thoại đọc nguyên văn khi chạy phiên ở [`a2-session-notes.md §2`](a2-session-notes.md).

---

## 4. User profile — Hồ sơ người dùng mục tiêu

Kịch bản C là màn hình **quản trị**, người dùng thật của nó là cán bộ quản lý thành viên — không phải sinh viên thường. Vì vậy tiêu chí tuyển:

| Tiêu chí | Yêu cầu |
|---|---|
| Bối cảnh | Có kinh nghiệm **quản lý danh sách người** (ban chấp hành đoàn/hội, ban tổ chức sự kiện, trưởng nhóm CLB, trợ lý văn phòng) |
| Kỹ năng máy tính | Dùng thành thạo web thông thường; **không** cần biết lập trình |
| Quan hệ với EMS | **Chưa từng dùng EMS** — nếu đã dùng thì không đo được trải nghiệm lần đầu |
| Ràng buộc bắt buộc | **Ngoài lớp học này** (đề §6), có liên hệ kiểm chứng được |

**Cách đóng khung để giải quyết vấn đề "không phải admin thật":** kịch bản đặt người tham gia vào vai *người phụ trách danh sách thành viên CLB* — một vai ai cũng hình dung được, và đúng bản chất công việc mà màn hình này phục vụ. Không cần họ là admin hệ thống thật.

## 5. Method & test design — Cách chạy

- **Moderated, think-aloud**, 1 người/phiên, khoảng 20–25 phút
- Mở đầu: *"Mình đang kiểm thử **phần mềm**, không kiểm thử bạn. Không có câu trả lời đúng sai. Bạn thấy chỗ nào khó là thông tin quý cho mình."*
- **Quan sát trung lập.** Người tham gia hỏi "cái này bấm đâu?" → trả lời *"Bạn nghĩ nó ở đâu?"*. Chỉ can thiệp khi bế tắc hoàn toàn quá 2 phút, và **ghi lại là đã can thiệp**
- Ghi màn hình; xin phép trước nếu thu âm
- Kết phiên: điền SUS → hỏi 5 câu probe

**Điểm cần quan sát kỹ — rút từ Task 1B:**

| Dự đoán | Cơ sở |
|---|---|
| Người dùng điền **Họ vào ô Tên** | `T1B-01` — nhãn "First Name" nhưng placeholder "Last Name" |
| Bấm lưu xong **ngập ngừng, kiểm lại, hoặc bấm lưu lần nữa** | `T1B-10` — không có thông báo nào sau khi lưu |
| **Xoá nhầm** thay vì vô hiệu hoá | Nút Xoá nổi bật ở mỗi dòng, công tắc Active ẩn trong dialog |
| Bỏ trống trường bắt buộc rồi mới biết | `T1B-02` — không có dấu `*` |
| Bấm Esc và **mất sạch dữ liệu đang nhập** | `T1B-08` |

## 6. Test environment & equipment

| Hạng mục | Nội dung |
|---|---|
| Thiết bị | Laptop, màn hình ≥ 13", chuột rời nếu có |
| Trình duyệt | Chrome, cửa sổ tối đa hoá, zoom 100% |
| Mạng | Wi-Fi thường |
| Ghi màn hình | *(điền công cụ)* |
| Địa điểm | *(điền)* |
| Tài khoản | Admin `admin@gmail.com` — **người điều phối đăng nhập sẵn trước khi bắt đầu bấm giờ** |

## 7. Test monitor role — Vai trò người điều phối

Người điều phối: **Lý Quốc Thạnh (23127262)**.

| Được làm | Không được làm |
|---|---|
| Đọc kịch bản, nhắc "nói to suy nghĩ" | Chỉ chỗ bấm, gợi ý tên nút |
| Hỏi trung tính: *"Bạn đang nghĩ gì?"*, *"Bạn mong chờ điều gì xảy ra?"* | Hỏi dẫn dắt: *"Sao bạn không thử nút kia?"* |
| Bấm giờ, đếm lỗi và lần do dự | Sửa hộ khi người tham gia làm sai |
| Can thiệp khi bế tắc > 2 phút — **và ghi lại** | Can thiệp sớm rồi bỏ qua không ghi |

## 8. Evaluation measures — Chỉ số thu thập

**Performance data** *(đo khách quan — đề §6 bắt buộc)*:

| Chỉ số | Cách đo |
|---|---|
| Task success | Hoàn thành / Một phần / Thất bại, theo định nghĩa ở §3 |
| Time on task | Bấm giờ từ lúc đọc xong kịch bản đến khi người tham gia nói "xong"; tách riêng thời gian cho từng việc |
| Số lỗi | Đếm: bấm sai nút, mở nhầm dialog, điền sai ô, submit thiếu trường |
| Số lần do dự | Đếm: dừng > 5 giây không thao tác, hoặc rê chuột qua lại không bấm |
| Số lần can thiệp | Đếm riêng, ghi rõ can thiệp gì |

**Preference data** *(đo chủ quan)*: **SUS 10 câu** (§11) + 5 câu probe (§12) về **clarity · error recovery · speed · trust**.

## 9. Report — Sản phẩm đầu ra

→ [`02_Usability-Report.md`](../02-usability-report.md), gồm: kịch bản · bảng 5 người đã che liên hệ · bảng chỉ số · phát hiện xếp hạng severity 0–4 kèm ảnh · khuyến nghị theo ưu tiên · **§7 đối chiếu với kết quả Task 1B**.

---

## 9b. ⚠️ Dọn dẹp dữ liệu sau mỗi phiên

Người tham gia sẽ **tạo user thật** trên EMS — hệ thống dùng chung với các lớp khác.

- Dùng email theo mẫu `minhtv.test+p1@example.com` … `+p5` để phân biệt từng phiên
- **Sau mỗi phiên:** xoá user vừa tạo, và bật lại `Active` cho user đã bị vô hiệu hoá
- Chụp ảnh trước khi dọn để làm bằng chứng
- Ghi vào biên bản phiên: đã dọn hay chưa

---

## 10. Bảng người tham gia

Danh sách 5 người, vai trò và liên hệ đã ẩn 4 số giữa — xem [`02-usability-report.md §3`](../02-usability-report.md).

---

## 11. Bảng hỏi SUS

Nguyên văn 10 câu, cách quy đổi điểm, điểm thô của cả 5 người và phân tích theo từng câu — xem [`a3-sus-scoring.md`](a3-sus-scoring.md).

---

## 12. Câu hỏi probe sau tác vụ

Bốn chủ đề *clarity · error recovery · speed · trust*, câu hỏi nguyên văn và câu trả lời của cả 5 người — xem [`02-usability-report.md §4.4`](../02-usability-report.md).

## 13. Mẫu ghi chép quan sát

Phiếu ghi chép từng phiên ở [`a2-session-notes.md §3`](a2-session-notes.md).
