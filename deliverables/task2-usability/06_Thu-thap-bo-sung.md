# Task 2 — Mẫu thu thập bổ sung

> Còn **2 nhóm dữ liệu** phải lấy từ 5 người tham gia. Cả hai đều **không cần quay lại video**, nhắn tin là đủ.
>
> | Cần gì | Vì sao bắt buộc |
> |---|---|
> | Vai trò · liên hệ **ẩn 4 số giữa** | [Đề §6](../../docs/2026.HW03.GUI%20Usability%20EMS_Vi.md) — bảng người tham gia trong Usability Report. **TA gọi ngẫu nhiên tối đa 2 người xác minh** |
> | 3 câu probe: **error recovery · speed · trust** | Đề §6 yêu cầu hỏi mở đủ 4 chủ đề. Trong phiên mới hỏi được *clarity* |

---

## A. Tin nhắn gửi cho từng người

> Copy nguyên đoạn dưới, gửi Zalo/Messenger cho từng người. Sửa `[Tên]` cho đúng.

```
Chào [Tên], cảm ơn bạn hôm trước đã giúp mình test thử phần mềm nhé.

Mình còn thiếu vài thông tin để hoàn thiện báo cáo, bạn trả lời giúp mình
5 câu ngắn này được không, khoảng 2 phút thôi:

1. Công việc / vai trò hiện tại của bạn là gì?
   (vd: sinh viên ngành ..., nhân viên văn phòng, quản lý CLB...)

2. Số điện thoại của bạn?
   (Trong bài mình chỉ ghi dạng che bớt như 0912****78, giảng viên có thể
    gọi xác minh là bạn có tham gia thật)

3. Lúc làm sai hoặc lỡ tay, bạn có biết cách quay lại không?

4. Có bước nào khiến bạn thấy phải chờ lâu, hoặc thấy thừa không cần thiết không?

5. Sau khi bấm lưu, bạn có chắc là hệ thống đã lưu xong chưa? Vì sao?

Trả lời ngắn gọn thôi cũng được, cảm ơn bạn nhiều!
```

> **Câu 5 là quan trọng nhất.** Nó kiểm chứng thẳng `T1B-10` — hệ thống không báo gì sau khi tạo/sửa/xoá. Nếu có người nói *"không chắc"* hoặc *"phải load lại mới biết"* thì đó là bằng chứng người dùng thật cho một lỗi checklist đã bắt được.

---

## B. Bảng điền — điền dần khi có người trả lời

### B1. Thông tin người tham gia

| # | Họ tên | Vai trò / bối cảnh | Liên hệ *(ẩn 4 số giữa)* | Ngày chạy phiên |
|---|---|---|---|---|
| P1 | Nguyễn Thành Dâng | Sinh viên ngành **Du lịch** | `0919****52` | 03/08/2026 |
| P2 | Trương Thành Đạt | Sinh viên ngành **Kinh tế** | `0989****57` | 03/08/2026 |
| P3 | Tô Minh Thắng | Sinh viên ngành **Kinh tế** | `0922****79` | 03/08/2026 |
| P4 | Ngô Bảo Long | Sinh viên ngành **Kinh tế đối ngoại** | `0369****70` | 03/08/2026 |
| P5 | Võ Hoàng Xuân Quyên | Sinh viên ngành **Y Dược** | `0899****28` | 03/08/2026 |

✅ **Đủ 5/5** — thứ tự P1 → P5 đã xác nhận.

☐ Riêng P4: bạn gửi `0369****970` *(11 ký tự)*. Đã chuẩn hoá về `0369****70` cho đúng quy tắc **ẩn đúng 4 số giữa** của 10 số. Liếc lại 2 số cuối giúp mình.

**Cách che số:** `0912345678` → `0912****78` *(giữ 4 số đầu và 2 số cuối, thay 4 số giữa bằng `****`)*

> ⚠️ **Số thật KHÔNG ghi vào file nào trong repo.** Repo này public. Chỉ ghi dạng đã che; số đầy đủ giữ trong máy bạn phòng khi TA hỏi.

**Nhận xét về hồ sơ người tham gia** — Du lịch · Kinh tế · Kinh tế · Kinh tế đối ngoại · Y Dược:

| | |
|---|---|
| ✅ **Đạt yêu cầu "ngoài lớp này"** | Không ai học CNTT, không ai cùng lớp → thoả [đề §6](../../docs/2026.HW03.GUI%20Usability%20EMS_Vi.md) |
| ⚠️ **Không khớp hoàn toàn hồ sơ người dùng đích** | Màn hình C1/C2/C3 dành cho **quản trị viên**, còn cả 5 người đều là sinh viên chưa từng quản trị hệ thống. P5 tự nói: *"tôi cũng không có quản lý cái này nên tôi không có biết"* |

Điều này **giải thích** vì sao 3/5 người không tìm được Users Management, nên phải nêu ở mục Hạn chế — người quản trị thật, quen mô hình dashboard, có thể tìm ra nhanh hơn. Nhưng nó **không xoá** phát hiện: giao diện không có breadcrumb và không có lối vào rõ ràng là sự thật đo được ở Task 1B *(`N-03`)*, độc lập với việc ai ngồi test.

### B2. Câu trả lời probe

| # | **Error recovery**<br>*"làm sai có biết quay lại không"* | **Speed**<br>*"bước nào chờ lâu / thừa"* | **Trust**<br>*"bấm lưu xong có chắc đã lưu chưa"* |
|---|---|---|---|
| P1 | | | |
| P2 | | | |
| P3 | | | |
| P4 | | | |
| P5 | | | |

> Ghi **nguyên văn** lời họ nói, đừng tóm tắt lại. Trích dẫn nguyên văn có sức thuyết phục hơn nhiều khi đưa vào báo cáo, và TA đối chiếu được với tin nhắn nếu cần.

---

## C. Đã có sẵn — không cần hỏi lại

| Hạng mục | Trạng thái |
|---|---|
| Task success cả 2 việc | ✅ suy từ 5 bản ghi màn hình |
| Time on task | ✅ mốc thời gian trong transcript |
| Điểm SUS 10 câu | ✅ **đủ 5/5** — TB 77,0 · xem [`04_SUS-Scoring.md`](04_SUS-Scoring.md) |
| Probe **clarity** | ✅ đã hỏi trong phiên, cả 5 người đều trả lời |
| Trích dẫn think-aloud | ✅ [`../../evidence/task2/`](../../evidence/task2/) — 5 transcript |

---

## D. Sau khi thu xong thì dữ liệu đi đâu

| Dữ liệu | Đích |
|---|---|
| B1 — thông tin người tham gia | Bảng §2 của `02_Usability-Report.md` |
| B2 — probe **trust** | Đối chiếu `T1B-10`, đưa vào §5 xếp hạng severity |
| B2 — probe **error recovery** | Đối chiếu `T1B-08` *(Esc xoá dữ liệu đang gõ, không hỏi lại)* |
| B2 — probe **speed** | Đối chiếu lời P3 *"tìm kiếm khá là lâu"* — xem có phải vấn đề chung không |

Điền xong B1 và B2 thì báo mình, mình ráp thẳng vào Usability Report.
