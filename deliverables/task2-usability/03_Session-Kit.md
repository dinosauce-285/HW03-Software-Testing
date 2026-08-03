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
- [ ] Đưa **bảng SUS** *(§11 của `01_Test-Plan-and-Kit.md`)* — để họ tự điền, không giải thích từng câu
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

## 3. Phiếu ghi chép — mỗi phiên một khối

### Phiên P1

```
Người tham gia: ____________________  Ngày/giờ: ______________
User được chọn làm "người đã rời CLB": ____________________
Thiết bị / trình duyệt: ____________________

┌─ THỜI GIAN ────────────────────────────────────────────┐
│ Bắt đầu: __:__:__                                       │
│ Xong việc 1 (thêm thành viên):        __ phút __ giây   │
│ Xong việc 2 (ngừng truy cập):         __ phút __ giây   │
│ Tổng time on task:                    __ phút __ giây   │
│ Benchmark 4 phút:   [ ] đạt   [ ] không đạt             │
└─────────────────────────────────────────────────────────┘

KẾT QUẢ
[ ] Hoàn thành    [ ] Một phần    [ ] Thất bại
Nếu Một phần / Thất bại, thiếu gì: ______________________

ĐẾM
Số lỗi (bấm sai nút, mở nhầm dialog, điền sai ô):  ____
Số lần do dự (dừng > 5 giây):                      ____
Số lần phải can thiệp:                             ____
   Can thiệp gì: _______________________________________

┌─ 5 ĐIỂM DỰ ĐOÁN TỪ TASK 1B — đánh dấu nếu xảy ra ──────┐
│ [ ] Điền HỌ vào ô TÊN (nhãn/placeholder ngược)  T1B-01 │
│ [ ] Sau khi lưu: ngập ngừng / kiểm lại / lưu    T1B-10 │
│     lần hai vì không chắc đã lưu                        │
│ [ ] XOÁ NHẦM thay vì vô hiệu hoá                        │
│ [ ] Bỏ trống trường bắt buộc rồi mới biết       T1B-02 │
│ [ ] Bấm Esc và mất dữ liệu đang nhập            T1B-08 │
└─────────────────────────────────────────────────────────┘

NHẬT KÝ THINK-ALOUD  (đóng dấu thời gian)
mm:ss ─ ______________________________________________
mm:ss ─ ______________________________________________
mm:ss ─ ______________________________________________
mm:ss ─ ______________________________________________
mm:ss ─ ______________________________________________

ĐIỂM VƯỚNG QUAN SÁT ĐƯỢC
1. ____________________________________________________
2. ____________________________________________________
3. ____________________________________________________

TRÍCH DẪN NGUYÊN VĂN ĐÁNG CHÚ Ý
"______________________________________________________"
"______________________________________________________"

SUS: ____ / 100      (chấm bằng bảng ở 04_SUS-Scoring.md)

PROBE
Clarity — chỗ nào phải đoán:
   ____________________________________________________
Error recovery — làm sai có biết quay lại không:
   ____________________________________________________
Speed — có bước nào chờ lâu hoặc thừa:
   ____________________________________________________
Trust — bấm xong có chắc hệ thống đã ghi nhận không, vì sao:
   ____________________________________________________
Nếu sửa MỘT thứ duy nhất:
   ____________________________________________________

DỌN DẸP
[ ] Đã chụp ảnh trước khi dọn → evidence/task2/P1-*.png
[ ] Đã xoá user test
[ ] Đã bật lại Active cho user bị vô hiệu hoá
```

### Phiên P2 · P3 · P4 · P5

*(chép nguyên khối phiếu của P1, đổi số phiên và email thành `+p2` … `+p5`)*

---

## 4. Sau khi chạy đủ 5 phiên

Đưa lại cho tôi:

1. **5 phiếu đã điền** *(chép vào file này hoặc gửi ảnh chụp)*
2. **Điểm SUS thô** của từng người — 10 câu, thang 1–5
3. Ảnh trong `evidence/task2/`

Tôi sẽ: chấm SUS · lập bảng chỉ số · gom điểm đau · tách lỗi đơn lẻ khỏi vấn đề hệ thống · xếp severity 0–4 · viết Usability Report · điền §7 đối chiếu với Task 1B.
