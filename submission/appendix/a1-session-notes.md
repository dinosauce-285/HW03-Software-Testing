# Task 2 — Bộ chạy phiên

> In file này ra hoặc mở trên máy thứ hai. Mỗi phiên dùng một khối §3.
> Mỗi phiên dùng một khối phiếu ở §3.

---

## 1. Chuẩn bị

### 1a. Làm MỘT LẦN trước phiên đầu tiên — tạo user mồi

Người tham gia sẽ vô hiệu hoá user này. Tạo sẵn để không đụng tài khoản của người thật.

| Trường | Giá trị |
|---|---|
| First Name | `Hùng` |
| Last Name | `Lê Văn` |
| Email | `cuthanhvien.test@example.com` |
| Phone | *(bỏ trống)* |
| Role | `Student` |
| Member Code | `88009999` |
| Password | `Clb@2026` |
| Active | ✔ bật |

> Tên bắt đầu bằng "Hùng" nên **không nằm đầu bảng** — người tham gia buộc phải dùng ô Search hoặc lật trang mới tìm ra. Đó chính là phần màn hình C1 được test.

Dùng chung cho cả 5 phiên. **Sau mỗi phiên bật lại `Active`. Sau phiên cuối xoá hẳn.**

### 1b. Làm trước MỖI phiên — 5 phút

- [ ] Kiểm user mồi `Hùng Lê Văn` đang ở trạng thái **Active**
- [ ] Gửi người tham gia link + tài khoản, dặn đăng nhập sẵn và share màn hình
- [ ] Vào Meet, bảo họ mở `/dashboard/admin/users`, đóng hết dialog
- [ ] Bật **Record** của Meet
- [ ] Mở phiếu ghi chép của phiên tương ứng ở §3
- [ ] Chuẩn bị đồng hồ bấm giờ

### 1c. Dữ liệu test đã kiểm — 02/08/2026

Đối chiếu trực tiếp trên EMS, chỉ đọc:

| Kiểm | Kết quả |
|---|---|
| Mã `99001234` có trùng không | **Không** ✔ |
| Tên `Minh Trần Văn` có trùng không | **Không** ✔ |
| Email `@example.com` có bị từ chối không | **Không báo lỗi** ✔ |
| Role có tuỳ chọn `Student` không | **Có** ✔ |

---

## 2. Lời thoại của người điều phối

### 2.1 Mở đầu — đọc nguyên văn

> *"Cảm ơn bạn đã dành thời gian. Mình đang làm bài tập kiểm thử phần mềm, cần quan sát người thật dùng thử một hệ thống quản lý sự kiện của trường.*
>
> *Có ba điều mình muốn nói trước:*
>
> *Một — **mình đang kiểm thử phần mềm, không kiểm thử bạn**. Không có câu trả lời đúng hay sai. Bạn thấy chỗ nào khó hiểu thì đó là lỗi của phần mềm, không phải của bạn. Thật ra bạn càng thấy khó thì mình càng thu được nhiều thông tin có ích.*
>
> *Hai — mình nhờ bạn **vừa làm vừa nói to** những gì đang nghĩ. Kiểu như 'giờ mình đang tìm chỗ để thêm người', 'mình tưởng nút này làm việc kia'. Nghĩ gì nói nấy, không cần diễn đạt hay.*
>
> *Ba — mình sẽ **ghi lại màn hình** để xem lại sau. Không quay mặt bạn. Bạn đồng ý không?*
>
> *Trong lúc bạn làm, mình sẽ ngồi im quan sát. Nếu bạn hỏi mình 'cái này bấm đâu', mình sẽ hỏi ngược lại 'bạn nghĩ nó ở đâu' — không phải mình khó tính, mà vì mình cần biết bạn nghĩ gì. Bạn cứ làm theo cách tự nhiên nhất."*

- [ ] Đã xin phép ghi màn hình → **bấm Start ghi**

### 2.2 Đọc kịch bản — đọc nguyên văn, không thêm bớt

> *"Bạn vừa được giao phụ trách danh sách thành viên của một câu lạc bộ, và câu lạc bộ dùng hệ thống này để quản lý.*
>
> *Có hai việc cần xử lý hôm nay.*
>
> ***Thứ nhất**, có một bạn sinh viên mới xin vào câu lạc bộ. Bạn ấy tên là **Minh Trần Văn**, email **minhtv.test+pX@example.com**, mã số **99001234**, mật khẩu đặt là **Clb@2026**. Hãy đưa bạn ấy vào hệ thống.*
>
> ***Thứ hai**, bạn **Hùng Lê Văn** đã rời câu lạc bộ. Bạn ấy không được vào hệ thống nữa, nhưng câu lạc bộ vẫn muốn giữ lại hồ sơ để đối chiếu về sau — **đừng xoá hẳn**.*
>
> *Bạn cứ làm theo cách bạn thấy tự nhiên nhất. Nhớ nói to suy nghĩ giúp mình nhé."*

- [ ] **Bấm giờ ngay khi đọc xong câu cuối**
- [ ] Thay `pX` bằng số phiên: `+p1` … `+p5`

### 2.3 Trong lúc chạy — câu được phép nói

| Tình huống | Nói gì |
|---|---|
| Người tham gia im lặng > 15 giây | *"Bạn đang nghĩ gì vậy?"* |
| Hỏi "cái này bấm đâu?" | *"Bạn nghĩ nó ở đâu?"* |
| Hỏi "làm vậy đúng không?" | *"Bạn thấy sao?"* |
| Vừa bấm xong một nút | *"Bạn mong chờ điều gì xảy ra?"* |
| Bế tắc > 2 phút | Can thiệp tối thiểu — **và đánh dấu vào phiếu** |

**Tuyệt đối không nói:** tên nút · vị trí nút · "sao bạn không thử…" · "gần đúng rồi" · bất kỳ dấu hiệu khen chê nào.

### 2.4 Kết phiên

- [ ] Dừng **bấm giờ** khi người tham gia nói "xong" hoặc bỏ cuộc
- [ ] ⚠️ **VẪN GIỮ Record chạy** — câu trả lời probe là dữ liệu quan trọng nhất, dừng ghi sớm là mất hết
- [ ] Đưa **bảng SUS** *(nguyên văn 10 câu ở [`a2-sus-scoring.md`](a2-sus-scoring.md))* — để họ tự điền, không giải thích từng câu
- [ ] Hỏi **5 câu probe** *(§12)* — hỏi thành tiếng để transcript bắt được
- [ ] Cảm ơn
- [ ] **Bây giờ mới dừng Record + Transcript**
- [ ] Lưu điểm SUS thô ngay *(video không bắt được vì họ tick chứ không nói)*

### 2.5 Dọn dữ liệu — làm ngay sau khi người tham gia rời

- [ ] Chụp màn hình kết quả **trước khi dọn** → lưu vào `evidence/task2/`
- [ ] Xoá user `minhtv.test+pX@example.com` vừa tạo
- [ ] Bật lại `Active` cho user đã bị vô hiệu hoá
- [ ] Đánh dấu "đã dọn" vào phiếu

---

## 2b. Đáp án — đường đi đúng và những đường sai cần rình

> Phần này **chỉ người điều phối biết**. Tuyệt đối không nói ra.

### Việc 1 — Thêm thành viên

```
Users Management → nút "Add User" (xanh, góc phải trên)
→ dialog "Create New User"
→ điền First Name · Last Name · Email · Role=Student · Member Code · Password
→ bấm "Create User"
→ dialog đóng, user xuất hiện trong bảng — KHÔNG có thông báo nào
```

### Việc 2 — Ngừng quyền truy cập

```
Gõ "Hùng" vào ô Search  (hoặc lật trang tìm)
→ bấm icon BÚT CHÌ ở cột ACTIONS
→ dialog "Edit User"
→ BỎ TICK ô "Active" ở gần cuối form
→ bấm "Save Changes"
→ cột STATUS đổi Active → Inactive — KHÔNG có thông báo nào
```

### Đường sai cần ghi nhận

| Họ làm gì | Ghi là |
|---|---|
| Bấm **icon thùng rác đỏ** → dialog "Delete User… cannot be undone" → bấm **Confirm** | **THẤT BẠI** — xoá mất hồ sơ, trái yêu cầu. Dữ liệu quý nhất của phiên |
| Bấm thùng rác rồi **kịp bấm Cancel** | **1 lỗi**, tự sửa được |
| Đi tìm nút "Block" / "Khoá" / "Vô hiệu hoá" riêng | **do dự** — mong có nút riêng mà app không có |
| Vào Settings hoặc menu khác tìm | **lỗi điều hướng** |
| Mở dialog Edit nhưng không thấy ô Active *(nằm gần cuối, phải cuộn)* | **do dự** |
| Điền **Họ vào ô First Name** *(placeholder ghi ngược)* | tick ô `T1B-01` trong phiếu |
| Bấm Save xong ngập ngừng, kiểm lại, hoặc bấm Save lần hai | tick ô `T1B-10` |

---

## 3. Ghi chép quan sát từng phiên

> Lập lại từ **5 bản ghi màn hình** *(link ở [`../evidence/task2/recordings.md`](../evidence/task2/recordings.md))* và **5 bản gỡ băng** ở [`../evidence/task2/`](../evidence/task2/). Mốc thời gian trong ngoặc vuông là mốc trong bản gỡ băng, đối chiếu được với video.
> Mọi phiên chạy ngày **03/08/2026** qua Google Meet, người tham gia dùng máy riêng, trình duyệt Chrome trên desktop.

**Năm điểm dự đoán từ Task 1B** — theo dõi ở mọi phiên xem có xảy ra không:

| Mã | Dự đoán | Số phiên xảy ra |
|---|---|---|
| `T1B-01` | Điền họ vào ô tên vì nhãn và placeholder ngược nhau | **1/5** — chỉ P4 nhận ra và gọi tên là lỗi |
| `T1B-10` | Sau khi lưu thì ngập ngừng, kiểm lại vì không chắc đã lưu | **1/5** — P2 hỏi lại người điều phối |
| — | Xoá nhầm thay vì vô hiệu hoá | **0/5** |
| `T1B-02` | Bỏ trống trường bắt buộc rồi mới biết là bắt buộc | **0/5** |
| `T1B-08` | Bấm Esc và mất dữ liệu đang nhập | **0/5** |

---

### Phiên P1 — Nguyễn Thành Dâng

| | |
|---|---|
| Bản ghi | `Nguyễn Thành Dâng.mkv` — 3:55 · **phiên ngắn nhất** |
| Việc 1 *(thêm thành viên)* | ✅ giao `[00:46]` → xong `[02:31]` = **1:45** |
| Việc 2 *(ngừng truy cập)* | ✅ giao `[02:35]` → xong `[03:00]` = **0:25** |
| Số lỗi | **0** |
| Can thiệp | **2** — người điều phối xác nhận *"Đúng rồi"* hai lần |
| SUS | **90,0** — cao nhất |

**Diễn biến:** đăng nhập và tìm ra khu quản lý user không vướng. Điền form một mạch, có hỏi lại về ô mã số `[02:11]` rồi tự xử lý. Việc 2 làm rất nhanh, người điều phối xác nhận *"tháo tác thơ đó đã thành công"* `[03:00]`.

**Điểm vướng quan sát được:** không có điểm vướng đáng kể.

**Trích dẫn:** `[03:21]` — *"khó khăn đi lúc mới đăng nhập vào"* → khó khăn duy nhất nêu ra nằm ở bước đăng nhập, không phải ở tác vụ.

---

### Phiên P2 — Trương Thành Đạt

| | |
|---|---|
| Bản ghi | `Trương Thành Đạt.mkv` — 5:25 |
| Việc 1 | ✅ giao `[01:18]` → xong `[03:15]` = **1:57** |
| Việc 2 | ✅ giao `[03:17]` → xong ~`[04:30]` = **1:10** — thao tác trên `Phú Lê Thiên`, đã bật lại Active sau phiên |
| Số lỗi | **2** — `Email already in use` · `This student card is already in use` |
| Can thiệp | **1** — *"rất là đúng"* `[01:47]` |
| SUS | **87,5** |

**Diễn biến:** tự khám phá và tìm ra Users Management, có tự nói *"thì mình cứ tìm kiếm, khám phá cái app này"* `[01:32–01:36]`. Điền form xong bấm tạo thì gặp trùng email, đổi email; bấm lại thì gặp trùng mã số thẻ `[03:06]`, đổi tiếp `[03:08]` mới qua — **3 vòng submit**.

**Điểm vướng quan sát được:**
1. Trùng dữ liệu chỉ báo sau khi submit cả form → `U-04`
2. Hỏi lại người điều phối *"là ấn tạo xong đúng không bạn?"* `[02:33]` — dấu hiệu duy nhất trong cả 5 phiên liên quan `T1B-10`

**Trích dẫn:** `[04:43–05:12]` — *"…khá là **lạc quan khá dễ**… nhìn vô biết được mình nên điền thông tin gì… nó khá là **logic**"*

---

### Phiên P3 — Tô Minh Thắng

| | |
|---|---|
| Bản ghi | `Tô Minh Thắng.mkv` — 6:19 · **phiên dài nhất** |
| Việc 1 | ✅ giao `[01:09]` → xong ~`[04:35]` = **3:31** — chậm nhất |
| Việc 2 | ✅ giao `[04:40]` → xong ~`[05:31]` = **0:51** |
| Số lỗi | **2** — điền mã số vào ô Phone Number · trùng dữ liệu |
| Can thiệp | **1** — *"Đúng là sẽ có 1 cái chỗ để tìm kiếm user"* `[01:25]` |
| SUS | **67,5** — đồng hạng thấp nhất |

**Diễn biến:** mất khoảng 30 giây `[01:19–01:49]` mò tìm mục Users Management. Vào được rồi thì điền form nhưng **đặt mã số thành viên vào ô Số điện thoại**, tự phát hiện và sửa ở `[03:44–04:01]`.

**Điểm vướng quan sát được:**
1. Tìm màn hình Users Management → `U-01`
2. Nhầm ô Member Code với Phone Number → `U-05`
3. Tìm kiếm chậm → phàn nàn ở `[05:52]`

**Trích dẫn:**
- `[03:44–04:01]` — *"cái kia là **member code** chứ không phải là phần **phone number**… cái số 9901234 là member code"*
- `[05:52–05:57]` — *"phần tìm kiếm… **tìm kiếm khá là lâu**"*

---

### Phiên P4 — Ngô Bảo Long

| | |
|---|---|
| Bản ghi | `Ngô Bảo Long.mkv` — 6:07 |
| Việc 1 | ✅ giao `[01:05]` → xong ~`[03:57]` = **2:52** |
| Việc 2 | ✅ giao `[03:57]` → xong `[04:20]` = **0:23** — nhanh nhất trong 5 phiên |
| Số lỗi | **1** — `Student code là đã được sử dụng rồi` `[03:25]` |
| Can thiệp | **1** — *"Đúng rồi"* `[01:33]` |
| SUS | **72,5** |

**Ghi chú về việc 2:** P4 bấm qua lại công tắc **Active** vài lần trong lúc thao tác, thử cả hai chiều trước khi chốt trạng thái. Đây cũng là phiên hoàn thành việc 2 nhanh nhất.

**Điểm vướng quan sát được:**
1. **Tự phát hiện lỗi nhãn Họ/Tên bị hoán đổi** — phát hiện quan trọng nhất của cả bộ dữ liệu → `U-02`
2. Tìm màn hình Users Management, có **thử bấm vào avatar** `[01:36]` → `U-01`
3. Trùng mã số sinh viên → `U-04`

**Trích dẫn:**
- `[05:01–05:16]` — *"…nó có cái chỗ mà chỗ tên thì cái trong cái ô là cái họ… **nó bị ngược** nhá đúng không bạn… thì **nó là 1 cái lỗi**"*
- `[05:46–05:55]` — *"tìm cái trang quản lý người dùng này… **khá là khó khăn**… cái trang quản lý này **phải nằm ở ngoài thì dễ thấy**"*
- `[05:39–05:44]` — *"thấy nó ok, nó ổn… thao tác thì **rất là nhanh và ổn**… **dễ dùng**"*

---

### Phiên P5 — Võ Hoàng Xuân Quyên

| | |
|---|---|
| Bản ghi | `Võ Hoàng Xuân Quyên.mkv` — 6:00 |
| Việc 1 | ✅ giao `[01:28]` → xong `[03:41]` = **2:13** |
| Việc 2 | ✅ giao `[03:56]` → xong `[04:39]` = **0:43** |
| Số lỗi | **1** — trùng email `[02:39]` |
| Can thiệp | **1 gợi ý thẳng** — *"thử bấm vào những cái nút nghi ngờ có thể có ví dụ như là avatar và những cái nút ở trên cùng"* `[02:01–02:06]` |
| SUS | **67,5** — đồng hạng thấp nhất |

**Bối cảnh đáng chú ý:** P5 là người **duy nhất trong 5 người có kinh nghiệm quản lý thật** — đang quản lý một tiệm nước. Và cũng là người vấp nặng nhất ở khâu tìm màn hình.

**Diễn biến:** loay hoay khoảng 50 giây không tìm ra lối vào khu quản lý user, phải được người điều phối gợi ý trực tiếp mới vào được. Sau khi vào thì điền form trôi chảy.

**Điểm vướng quan sát được:**
1. **Không tìm được đường vào Users Management** — nặng nhất trong 5 người → `U-01`
2. Cũng **thử bấm avatar** như P4 — cùng một mô hình tư duy sai
3. Trùng email → `U-04`

**Trích dẫn:**
- `[01:40]` — *"**Ở đâu gì ta?**"* → `[01:44]` *"Ở đâu phải bấm như ở đâu vậy?"*
- `[05:04–05:09]` — *"Tại tôi cũng không có quản lý **cái này** nên tôi không có biết"*
- `[05:30–05:48]` — *"Như cái hồi mới vô để mà vô được cái chỗ quản lý này thì **tôi khó tìm**, nhưng mà tới vô đây rồi, lúc thêm hay là lúc điền tên này kia thì **tôi thấy thao tác cũng dễ, cũng dễ hiểu**… Còn cái khúc mới vô để vô được cái user management này thì **tôi không biết kiếm ở đâu**"*

---

### Tổng hợp quan sát qua 5 phiên

| Điểm vướng | Số người gặp | Thành phát hiện |
|---|---|---|
| Không tìm được đường vào Users Management | **3/5** *(P3, P4, P5)* | `U-01` severity 3 |
| Trùng dữ liệu chỉ báo sau khi submit | **3/5** *(P2, P4, P5)* — P3 cũng gặp | `U-04` severity 2 |
| Nhãn Họ/Tên hoán đổi | 1/5 nhận ra *(P4)* | `U-02` severity 3 |
| Nhầm ô Member Code với Phone | 1/5 *(P3)* | `U-05` severity 2 |
| Không chắc đã lưu | 1/5 hỏi lại *(P2)* | `U-03` severity 2 |

**Hai người thử bấm avatar để tìm chỗ quản lý user** *(P4, P5)* — cùng một mô hình tư duy sai, gợi ý rằng người dùng trông đợi chức năng quản lý nằm trong menu tài khoản.

**Mô hình chung của cả 5 phiên:** *vào được rồi thì dễ dùng, nhưng vào được là khó.*

Phân tích đầy đủ, xếp hạng severity và khuyến nghị ở [`../02-usability-report.md`](../02-usability-report.md).
