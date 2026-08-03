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

## 3. Test plan & objectives — Task scenario

> Đề §6: kịch bản cho **mục tiêu**, KHÔNG chỉ từng bước bấm. S13: *"asking the user to perform typical tasks and NOT telling them exactly how to do it."*

**Kịch bản đọc cho người tham gia:**

> *"Bạn vừa được giao phụ trách danh sách thành viên của một câu lạc bộ, và câu lạc bộ dùng hệ thống EMS này để quản lý.*
>
> *Có hai việc cần xử lý hôm nay:*
>
> *Thứ nhất, có một bạn sinh viên mới xin vào câu lạc bộ. Bạn ấy tên là **Minh Trần Văn**, email **minhtv.test@example.com**, mã số **99001234**. Hãy đưa bạn ấy vào hệ thống.*
>
> *Thứ hai, bạn **[tên user có sẵn]** đã rời câu lạc bộ. Bạn ấy không được vào hệ thống nữa, nhưng câu lạc bộ vẫn muốn giữ lại hồ sơ để đối chiếu về sau — đừng xoá hẳn.*
>
> *Bạn cứ làm theo cách bạn thấy tự nhiên nhất. Vừa làm vừa nói to những gì bạn đang nghĩ giúp mình."*

**Vì sao kịch bản này hợp lệ:**

- **Hướng mục tiêu, không chỉ đường.** Không có chữ nào nói "bấm Add User" hay "mở dialog Edit". Người tham gia phải tự tìm.
- **Phủ cả 3 màn hình:** tìm người → **C1** · thêm mới → **C3** · ngừng truy cập → **C2**.
- **Vế thứ hai là bẫy có chủ đích.** "Đừng xoá hẳn" buộc người dùng phải phân biệt *vô hiệu hoá* với *xoá* — mà trên C1, nút Xoá thì nhìn thấy ngay ở mỗi dòng, còn công tắc Active thì nằm **ẩn bên trong dialog Edit**. Đây là chỗ dự đoán sẽ có người vấp.

**Phân rã theo mẫu Task components của S13:**

| Thành phần | Nội dung |
|---|---|
| **Task** | Thêm một thành viên mới và ngừng quyền truy cập của một thành viên cũ, trên EMS Users Management |
| **Machine state** | Đã đăng nhập sẵn bằng tài khoản admin, đang ở màn hình `/dashboard/admin/users`, không mở dialog nào |
| **Successful completion criteria** | (a) User mới xuất hiện trong danh sách với đúng họ tên, email, mã số và vai trò Student; (b) User cũ còn trong danh sách nhưng trạng thái đã là **Inactive** |
| **Benchmark** | 4 phút cho cả hai việc |

**Định nghĩa mức hoàn thành:**

| Mức | Định nghĩa cụ thể |
|---|---|
| **Hoàn thành** | Làm được cả hai việc, không cần can thiệp |
| **Một phần** | Làm được một trong hai việc; **hoặc** làm được cả hai nhưng có dữ liệu sai (vd họ tên bị đảo) |
| **Thất bại** | Không làm được việc nào, hoặc **xoá nhầm** user thay vì vô hiệu hoá, hoặc phải nhờ can thiệp mới xong |

> ⚠️ **Ghi rõ trong biên bản** nếu người tham gia xoá nhầm user — đó là dữ liệu quý nhất của phiên, không phải sự cố cần giấu.

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

→ [`02_Usability-Report.md`](02_Usability-Report.md), gồm: kịch bản · bảng 5 người đã che liên hệ · bảng chỉ số · phát hiện xếp hạng severity 0–4 kèm ảnh · khuyến nghị theo ưu tiên · **§7 đối chiếu với kết quả Task 1B**.

---

## 9b. ⚠️ Dọn dẹp dữ liệu sau mỗi phiên

Người tham gia sẽ **tạo user thật** trên EMS — hệ thống dùng chung với các lớp khác.

- Dùng email theo mẫu `minhtv.test+p1@example.com` … `+p5` để phân biệt từng phiên
- **Sau mỗi phiên:** xoá user vừa tạo, và bật lại `Active` cho user đã bị vô hiệu hoá
- Chụp ảnh trước khi dọn để làm bằng chứng
- Ghi vào biên bản phiên: đã dọn hay chưa

---

## 10. Bảng người tham gia

> ⚠️ [Đề §6](../../docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L111) + [§12](../../docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L182): **5 người thật, ngoài lớp này**, khớp hồ sơ người dùng mục tiêu, liên hệ kiểm chứng được, **ẩn 4 số giữa**.
> 🔴 **TA có thể gọi ngẫu nhiên 2 người xác minh. Mạo danh → 0 điểm Task 2.**

**Cách ẩn số:** `0912345678` → `0912****78` *(giữ 4 số đầu và 2 số cuối, ẩn 4 số giữa)*

| # | Họ tên | Vai trò / bối cảnh quản lý danh sách | Liên hệ (đã ẩn) | Ngày chạy | Thiết bị |
|---|---|---|---|---|---|
| P1 | **Nguyễn Thành Dâng** | *(điền)* | *(điền)* | 03/08/2026 | *(điền)* |
| P2 | **Trương Thành Đạt** | *(điền)* | *(điền)* | 03/08/2026 | *(điền)* |
| P3 | **Tô Minh Thắng** | *(điền)* | *(điền)* | 03/08/2026 | *(điền)* |
| P4 | **Ngô Bảo Long** | *(điền)* | *(điền)* | 03/08/2026 | *(điền)* |
| P5 | *(chưa chạy)* | | | | |

**Kiểm tra điều kiện tuyển — đánh dấu cho từng người:**

| Điều kiện | P1 | P2 | P3 | P4 | P5 |
|---|---|---|---|---|---|
| Ngoài lớp học này | ☐ | ☐ | ☐ | ☐ | ☐ |
| Có bối cảnh quản lý danh sách người | ☐ | ☐ | ☐ | ☐ | ☐ |
| Chưa từng dùng EMS | ☐ | ☐ | ☐ | ☐ | ☐ |
| Có liên hệ kiểm chứng được | ☐ | ☐ | ☐ | ☐ | ☐ |
| Đã đồng ý cho ghi màn hình | ☐ | ☐ | ☐ | ☐ | ☐ |

---

## 11. Bảng hỏi SUS *(in ra hoặc tạo Google Form riêng để người tham gia điền)*

Thang: **1 = Rất không đồng ý → 5 = Rất đồng ý**

| # | Câu | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| 1 | Tôi nghĩ tôi sẽ muốn dùng hệ thống này thường xuyên | ☐ | ☐ | ☐ | ☐ | ☐ |
| 2 | Tôi thấy hệ thống phức tạp một cách không cần thiết | ☐ | ☐ | ☐ | ☐ | ☐ |
| 3 | Tôi thấy hệ thống dễ sử dụng | ☐ | ☐ | ☐ | ☐ | ☐ |
| 4 | Tôi nghĩ tôi cần người hỗ trợ kỹ thuật mới dùng được hệ thống này | ☐ | ☐ | ☐ | ☐ | ☐ |
| 5 | Tôi thấy các chức năng trong hệ thống được tích hợp tốt với nhau | ☐ | ☐ | ☐ | ☐ | ☐ |
| 6 | Tôi thấy hệ thống có quá nhiều điểm thiếu nhất quán | ☐ | ☐ | ☐ | ☐ | ☐ |
| 7 | Tôi nghĩ hầu hết mọi người sẽ học dùng hệ thống này rất nhanh | ☐ | ☐ | ☐ | ☐ | ☐ |
| 8 | Tôi thấy hệ thống rất cồng kềnh khi sử dụng | ☐ | ☐ | ☐ | ☐ | ☐ |
| 9 | Tôi cảm thấy tự tin khi sử dụng hệ thống | ☐ | ☐ | ☐ | ☐ | ☐ |
| 10 | Tôi cần học rất nhiều thứ trước khi có thể bắt đầu dùng hệ thống | ☐ | ☐ | ☐ | ☐ | ☐ |

**Cách chấm:** câu **lẻ** → `điểm − 1`; câu **chẵn** → `5 − điểm`; cộng 10 giá trị (0–40) rồi **× 2.5** → thang 0–100.
**Mốc:** 68 = trung bình · > 80.3 = hạng A (top 10%).

---

## 12. Câu hỏi probe sau tác vụ *(hỏi sau khi điền SUS)*

| Chủ đề | Câu hỏi |
|---|---|
| **Clarity** | Có chỗ nào trên màn hình khiến bạn phải đoán không? |
| **Error recovery** | Khi làm sai, bạn có biết cách quay lại không? |
| **Speed** | Có bước nào khiến bạn thấy chờ lâu hoặc thừa không? |
| **Trust** | Sau khi bấm xong, bạn có chắc là hệ thống đã ghi nhận không? Vì sao? |
| Mở | Nếu được sửa **một** thứ duy nhất, bạn sửa gì? |

---

## 13. Mẫu ghi chép quan sát — dùng riêng cho mỗi phiên

> Sao chép khối này thành `session-P1.md` … `session-P5.md` trong cùng thư mục.

```
Người tham gia: P__          Ngày/giờ: __________
Thiết bị / trình duyệt: __________

Bắt đầu: __:__:__      Kết thúc: __:__:__      Time on task: ____

[ ] Hoàn thành   [ ] Một phần   [ ] Thất bại

Nhật ký think-aloud (đóng dấu thời gian):
  mm:ss — (hành động / câu nói / biểu hiện)

Điểm vướng quan sát được:
  1.
  2.

Lỗi (bấm sai chỗ, đi sai nhánh):        tổng = ___
Lần do dự (dừng > 5s):                  tổng = ___
Số lần phải can thiệp:                  tổng = ___

Trích dẫn nguyên văn đáng chú ý:
  "…"

Điểm SUS: ____ / 100
Trả lời probe:
  Clarity —
  Error recovery —
  Speed —
  Trust —
  Nếu sửa 1 thứ —
```
