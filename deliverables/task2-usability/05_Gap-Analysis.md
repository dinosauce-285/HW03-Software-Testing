# Task 2 — Đối chiếu dữ liệu đã thu vs còn thiếu

> Lập từ 5 bản ghi phiên ngày 03/08/2026, đã nhận dạng lời nói bằng faster-whisper chạy offline.
> Transcript ở `evidence/task2/P1..P5-transcript.txt`; chất lượng chữ có sai chính tả, nội dung đọc hiểu được.

---

## Tổng quan 5 phiên

| Phiên | File gốc | Dài | Người tham gia | Việc 1 | Việc 2 |
|---|---|---|---|---|---|
| P1 | `Nguyễn Thành Dâng.mkv` | 3:55 | **Nguyễn Thành Dâng** | ✅ | ✅ |
| P2 | `Trương Thành Đạt.mkv` | 5:25 | **Trương Thành Đạt** | ✅ | ⚠️ vô hiệu hoá **Phú Lê Thiên** — không phải user mồi |
| P3 | `Tô Minh Thắng.mkv` | 6:19 | **Tô Minh Thắng** | ✅ | ✅ |
| P4 | `Ngô Bảo Long.mkv` | 6:07 | **Ngô Bảo Long** | ✅ | ❌ user mồi **đã Inactive sẵn** → làm ngược lại |
| P5 | `Võ Hoàng Xuân Quyên.mkv` | 6:00 | **Võ Hoàng Xuân Quyên** | ✅ | ✅ |

---

## Còn thiếu — cần liên hệ lại

### Thiếu ở CẢ 5 phiên

| Hạng mục | Vì sao cần |
|---|---|
| **3/4 câu probe** | Cả 5 phiên chỉ hỏi *"có thấy khó khăn gì không"*. Thiếu **error recovery · speed · trust** |
| **Bảng người tham gia** | Tên đầy đủ · vai trò/bối cảnh · liên hệ ẩn 4 số giữa · ngày chạy |

### Thiếu riêng từng phiên

| Phiên | Thiếu riêng |
|---|---|
| P1 | — |
| P2 | **Việc 2 làm trên user Phú Lê Thiên**, không phải user mồi — cần xác nhận đã bật lại Active |
| P3 | — |
| P5 | Người điều phối **can thiệp gợi ý** ở 02:01 → thời gian tìm màn hình không còn là số đo sạch |
| P4 | **Việc 2 không hợp lệ** — user mồi đã Inactive từ trước nên người tham gia làm ngược (bật lại hoạt động). Cần ghi rõ khi phân tích, hoặc chạy lại |

### Câu probe cần hỏi bù

Gửi kèm form SUS, mỗi người 2 phút:

1. **Error recovery** — *"Lúc làm sai, bạn có biết cách quay lại không?"*
2. **Speed** — *"Có bước nào khiến bạn thấy chờ lâu hoặc thừa không?"*
3. **Trust** — *"Sau khi bấm lưu, bạn có chắc hệ thống đã ghi nhận chưa? Vì sao?"*
4. Mở — *"Nếu được sửa **một** thứ duy nhất, bạn sửa gì?"*

> Câu **trust** quan trọng nhất — nó kiểm chứng thẳng `T1B-10` *(hệ thống im lặng sau mọi thao tác ghi)*.

---

## Dữ liệu thật đã thu được — dùng được ngay

### 1. Lỗi hoán đổi nhãn Họ/Tên — **người dùng tự phát hiện**

**P4, phút 05:01–05:16** *(transcript thô)*:

> *"…nó có cái chỗ mà chỗ tên thì cái trong cái ô là cái họ… **nó bị ngược** nhá đúng không bạn… thì **nó là 1 cái lỗi**"*

Đây là xác nhận thực nghiệm cho **`T1B-01`** — lỗi checklist bắt được ở Task 1B, nay có người dùng thật tự nhận ra và gọi tên là lỗi. Bằng chứng mạnh nhất trong cả bộ dữ liệu.

### 2. Khó tìm trang Users Management — **3/5 người**, điểm đau lớn nhất

**P5 Võ Hoàng Xuân Quyên** — nặng nhất:
> [01:40] *"**Ở đâu gì ta?**"* → [01:44] *"Ở đâu phải bấm như ở đâu vậy?"*
> [05:30] *"cái hồi mới vô để mà vô được cái chỗ quản lý này thì **tôi khó tìm**"*
> [05:48] *"cái khúc mới vô để vô được cái user management này thì **tôi không biết kiếm ở đâu**"*

Người điều phối phải **can thiệp** ở phút 02:01 — gợi ý thử bấm avatar và các nút ở trên cùng. Mất ~50 giây mới tìm ra.

**P4 Ngô Bảo Long**, phút 05:46–05:55:
> *"…tìm cái trang quản lý người dùng này… **khá là khó khăn**… cái trang quản lý này **phải nằm ở ngoài thì dễ thấy**"*

**P3 Tô Minh Thắng**, phút 01:19–01:49 — mò ~30 giây mới thấy mục Users Management.

**P4 và P5 đều thử bấm vào avatar** để tìm chỗ quản lý user — cùng một mô hình tư duy sai.

→ **3/5 người vấp cùng một chỗ.** Theo quy tắc ≥3/5, đây là **vấn đề thiết kế hệ thống**, không phải lỗi cá biệt. Và trùng khớp với `N-03` ở Task 1B — khu admin **không có breadcrumb** nào để định vị.

### 3. Nhầm ô Member Code với Phone Number

**P3, phút 03:44–04:01**:
> *"cái kia là **member code** chứ không phải là phần **phone number**… cái số 9901234 là member code"*

Người tham gia điền mã số vào ô số điện thoại. Liên quan `F-01` — nhãn không gắn `for`/`id`, và hai ô nằm cạnh nhau.

### 4. Tìm kiếm chậm

**P3, phút 05:52–05:57**:
> *"phần tìm kiếm… **tìm kiếm khá là lâu**"*

### 5. Va phải lỗi trùng dữ liệu

Cả **P2, P3, P4** đều gặp:
- `Email already in use`
- `Student code already in use` / `This student card is already in use`

Nguyên nhân: dùng lại cùng email và mã số giữa các phiên mà chưa xoá user của phiên trước. **Đây là lỗi chuẩn bị dữ liệu của người điều phối**, không phải lỗi của EMS — nhưng cách hệ thống báo lỗi *(thông báo rõ ràng, ngay tại chỗ)* lại là điểm cộng cho `F-04`.

### 6. Đánh giá tích cực

**P2, phút 04:43–05:12**:
> *"…khá là **lạc quan khá dễ**… nhìn vô biết được mình nên điền thông tin gì… nó khá là **logic**"*

**P4, phút 05:39–05:44**:
> *"thấy nó ok, nó ổn… thao tác thì **rất là nhanh và ổn**… **dễ dùng**"*

**P5, phút 05:39–05:45**:
> *"lúc thêm hay là lúc điền… thì tôi thấy **thao tác cũng dễ, cũng dễ hiểu**, hình dung ra được"*

→ Mô hình chung: **vào được rồi thì dễ dùng, nhưng vào được là khó.**

---

## ⚠️ Vấn đề phương pháp — cần ghi vào mục Hạn chế

| Vấn đề | Bằng chứng | Ảnh hưởng |
|---|---|---|
| **Người điều phối dẫn dắt** | P1 *"Đúng rồi"* ×2 · P2 *"rất là đúng"* (01:47) · P3 *"tìm đến chỗ quản lý user"* · P4 *"Đúng rồi"* (01:33) · **P5 được gợi ý thẳng** *"thử bấm vào avatar và những nút ở trên cùng"* (02:01) | Sau khi được xác nhận, không còn đo được họ **tự** tìm ra hay không |
| **Chỉ 1 câu probe** | Cả 5 phiên | Thiếu 3 chủ đề đề bắt buộc |
| **User mồi không được reset** | P4 gặp `Hùng` đã Inactive | Việc 2 của P4 không so sánh được với các phiên khác |
| **Không đếm được lần do dự** | Transcript báo 0 lần im lặng ≥ 5 giây ở cả 5 phiên | Vì người điều phối nói liên tục, không có khoảng lặng để đo |
| **Hồ sơ người tham gia lệch khỏi người dùng đích** | Cả 5 là sinh viên *(Du lịch · Kinh tế ×2 · Kinh tế đối ngoại · Y Dược)*, không ai từng làm quản trị. P5: *"tôi cũng không có quản lý cái này nên tôi không có biết"* | Góp phần giải thích tỉ lệ 3/5 không tìm được màn hình. Người quản trị thật có thể tìm nhanh hơn — nhưng `N-03` *(không có breadcrumb)* vẫn đúng độc lập với người test |

> Ghi những điều này vào §8 *Hạn chế của nghiên cứu* trong Usability Report. Nêu ra là trung thực và cho thấy hiểu phương pháp; giấu đi mà TA xem video thì tệ hơn nhiều.

---

## Việc cần làm

- [x] ~~Thu điểm SUS~~ — **đủ 5/5**, TB 77,0
- [ ] Gửi 5 người **Google Form**: 3 câu probe còn thiếu *(error recovery · speed · trust)*
- [ ] Thu **tên · vai trò · liên hệ ẩn 4 số giữa** của cả 5 người
- [ ] Xác nhận đã **bật lại Active** cho `Phú Lê Thiên` sau phiên P2
- [ ] Quyết định về P4: ghi nhận việc 2 không hợp lệ, hay chạy lại với người đó
