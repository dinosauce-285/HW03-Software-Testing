# Task 2 — Bộ chạy phiên

> In file này ra hoặc mở trên máy thứ hai. Mỗi phiên dùng một khối §3.
> Thứ tự: **P0 pilot trước** → sửa kịch bản nếu cần → rồi P1…P5.

---

## 1. Chuẩn bị trước khi người tham gia đến — 5 phút

- [ ] Mở Chrome, đăng nhập sẵn admin `admin@gmail.com` / `Admin@123`
- [ ] Đứng ở `https://prod-dev.ems-fitus.cloud/dashboard/admin/users`, **đóng hết dialog**
- [ ] Đặt zoom 100%, cửa sổ tối đa hoá
- [ ] Bật ghi màn hình *(chưa bấm Start)*
- [ ] Chọn sẵn **một user có thật** trong danh sách để làm "người đã rời câu lạc bộ" — ghi tên vào phiếu
- [ ] Chuẩn bị đồng hồ bấm giờ
- [ ] Mở phiếu ghi chép của phiên tương ứng ở §3

### ✅ Dữ liệu test đã kiểm trước — 02/08/2026

Đã đối chiếu trực tiếp trên EMS (chỉ đọc, không ghi gì):

| Kiểm | Kết quả |
|---|---|
| Mã `99001234` có trùng không | **Không trùng** ✔ |
| Tên `Minh Trần Văn` có trùng không | **Không trùng** ✔ |
| Email `minhtv.test+pX@example.com` có bị từ chối không | **Không báo lỗi** ✔ |
| Role có tuỳ chọn `Student` không | **Có** — Select a Role · Admin · Guest · Lecturer · Student ✔ |

Vậy cả bốn rủi ro dữ liệu test đều đã loại. Người tham gia sẽ không bị kẹt vì lỗi của bộ dữ liệu.

### ⚠️ Chọn user "đã rời câu lạc bộ" — cân nhắc trước

Trang 1 hiện có 5 ứng viên đang `Active` và không phải Admin. **Nhưng đây là hệ thống dùng chung**: vô hiệu hoá tài khoản của một người thật khiến họ **không đăng nhập được** trong suốt phiên của bạn.

Hai cách xử lý, chọn một:

| Cách | Ưu | Nhược |
|---|---|---|
| **Chọn user trông rõ là dữ liệu test** *(tên viết tắt lạ, email `@example`, tên kiểu "test abc")* | Không ảnh hưởng ai | Phải tìm, và có thể đã Inactive sẵn |
| **Tự tạo trước một user mồi** tên kiểu `Cũ Thành Viên` rồi dùng nó cho cả 5 phiên | Chắc chắn không đụng người thật, tái dùng được | Bạn phải tạo trước, và nhớ xoá sau khi xong toàn bộ |

**Tôi nghiêng về cách thứ hai** — tạo một user mồi dùng chung cho cả 5 phiên, bật lại `Active` sau mỗi phiên, xoá hẳn sau phiên cuối. Vừa an toàn vừa khiến 5 phiên có cùng điều kiện đầu vào, so sánh được với nhau.

> Ghi tên user mồi đã chọn vào từng phiếu ở §3.

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
> ***Thứ nhất**, có một bạn sinh viên mới xin vào câu lạc bộ. Bạn ấy tên là **Minh Trần Văn**, email **minhtv.test+pX@example.com**, mã số **99001234**. Hãy đưa bạn ấy vào hệ thống.*
>
> ***Thứ hai**, bạn **[TÊN USER ĐÃ CHỌN]** đã rời câu lạc bộ. Bạn ấy không được vào hệ thống nữa, nhưng câu lạc bộ vẫn muốn giữ lại hồ sơ để đối chiếu về sau — **đừng xoá hẳn**.*
>
> *Bạn cứ làm theo cách bạn thấy tự nhiên nhất. Nhớ nói to suy nghĩ giúp mình nhé."*

- [ ] **Bấm giờ ngay khi đọc xong câu cuối**
- [ ] Thay `pX` bằng số phiên: `+p1` … `+p5`, pilot dùng `+p0`

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

- [ ] Dừng bấm giờ khi người tham gia nói "xong" hoặc bỏ cuộc
- [ ] Dừng ghi màn hình
- [ ] Đưa **bảng SUS** *(§11 của `01_Test-Plan-and-Kit.md`)* — để họ tự điền, không giải thích từng câu
- [ ] Hỏi **5 câu probe** *(§12)*, ghi lại nguyên văn câu trả lời
- [ ] Cảm ơn

### 2.5 Dọn dữ liệu — làm ngay sau khi người tham gia rời

- [ ] Chụp màn hình kết quả **trước khi dọn** → lưu vào `evidence/task2/`
- [ ] Xoá user `minhtv.test+pX@example.com` vừa tạo
- [ ] Bật lại `Active` cho user đã bị vô hiệu hoá
- [ ] Đánh dấu "đã dọn" vào phiếu

---

## 3. Phiếu ghi chép — mỗi phiên một khối

### Phiên P0 — PILOT *(không tính vào 5 người)*

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
[ ] Đã chụp ảnh trước khi dọn → evidence/task2/P0-*.png
[ ] Đã xoá user test
[ ] Đã bật lại Active cho user bị vô hiệu hoá
```

**Sau pilot — bắt buộc trả lời:**

| Câu hỏi | Trả lời |
|---|---|
| Có chỗ nào trong kịch bản người tham gia hiểu sai ý không? | |
| Có luồng nào hỏng khiến tác vụ không thể hoàn thành? | |
| 4 phút benchmark có hợp lý không? | |
| **Đã sửa gì trước khi chạy P1–P5:** | |

---

### Phiên P1

*(chép nguyên khối phiếu của P0, đổi số phiên và email thành `+p1`)*

### Phiên P2 · P3 · P4 · P5

*(tương tự)*

---

## 4. Sau khi chạy đủ 5 phiên

Đưa lại cho tôi:

1. **5 phiếu đã điền** *(chép vào file này hoặc gửi ảnh chụp)*
2. **Điểm SUS thô** của từng người — 10 câu, thang 1–5
3. Ảnh trong `evidence/task2/`

Tôi sẽ: chấm SUS · lập bảng chỉ số · gom điểm đau · tách lỗi đơn lẻ khỏi vấn đề hệ thống · xếp severity 0–4 · viết Usability Report · điền §7 đối chiếu với Task 1B.
