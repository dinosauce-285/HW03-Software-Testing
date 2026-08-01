# Task 2 — Thiết kế & bộ công cụ User Testing

> Cấu trúc theo **"Typical test plan format"** — slide `S13_GUI Testing & Usability Testing.pdf` (9 mục), kết hợp yêu cầu đề §6 Task 2.
> Loại hình: **Assessment test** (theo phân loại S13: người dùng thực hiện tập tác vụ well-defined, thu số liệu định lượng, ít tương tác với người điều phối).

**Sinh viên:** *(MSSV – Họ tên)* · **Kịch bản:** *(A/B/C/D)*

---

## 1. Purpose — Mục đích

*(Kiểm tra tính tiện dụng của [3 màn hình] trong luồng [tên luồng] trên EMS.)*

## 2. Problem statement — Câu hỏi cần trả lời

*(Ví dụ: Người dùng lần đầu có tự hoàn thành được [tác vụ] mà không cần hướng dẫn không? Họ vấp ở bước nào?)*

| # | Câu hỏi | Performance data thu thập | Preference data thu thập |
|---|---|---|---|
| 1 | | | |
| 2 | | | |

## 3. Test plan & objectives — Task scenario

> ⚠️ Đề §6: kịch bản phải cho **mục tiêu**, KHÔNG chỉ từng bước bấm. S13: *"asking the user to perform typical tasks and NOT telling them exactly how to do it."*

**Kịch bản đọc cho người tham gia:**

> *(Viết ở đây — một tình huống đời thực, có bối cảnh, có mục tiêu, không có chỉ dẫn thao tác.)*

**Phân rã theo mẫu Task components của S13:**

| Thành phần | Nội dung |
|---|---|
| **Task** | |
| **Machine state** *(trạng thái hệ thống trước khi bắt đầu)* | |
| **Successful completion criteria** *(thế nào là hoàn thành)* | |
| **Benchmark** *(thời gian mục tiêu)* | |

**Định nghĩa mức hoàn thành:**

| Mức | Định nghĩa cụ thể cho tác vụ này |
|---|---|
| Hoàn thành | |
| Một phần | |
| Thất bại | |

## 4. User profile — Hồ sơ người dùng mục tiêu

*(Ai là người dùng thật của luồng này? sinh viên / giảng viên / khách / admin — nêu tiêu chí tuyển.)*

## 5. Method & test design — Cách chạy

- Moderated, think-aloud, 1 người/phiên
- Quan sát trung lập — chỉ can thiệp khi người tham gia **hoàn toàn bế tắc**
- Mở đầu mỗi phiên: *"Tôi đang kiểm thử **sản phẩm**, không kiểm thử bạn."*
- Ghi màn hình *(xin phép nếu thu âm)*
- Kết phiên: điền SUS → hỏi các câu probe

## 6. Test environment & equipment

| Hạng mục | Nội dung |
|---|---|
| Thiết bị | |
| Trình duyệt | |
| Mạng | |
| Công cụ ghi màn hình | |
| Địa điểm | |

## 7. Test monitor role — Vai trò người điều phối

*(Ai điều phối, được phép nói gì / không được nói gì.)*

## 8. Evaluation measures — Chỉ số thu thập

**Performance data** *(đo khách quan)* — bắt buộc theo đề §6:

| Chỉ số | Cách đo |
|---|---|
| Task success | Hoàn thành / Một phần / Thất bại |
| Time on task | Bấm giờ từ lúc đọc xong đề đến lúc người dùng nói "xong" |
| Số lỗi | Đếm số lần bấm sai chỗ / đi sai nhánh |
| Số lần do dự | Đếm số lần dừng > 5 giây không thao tác |

**Preference data** *(đo chủ quan)*: SUS (§11 bên dưới) + câu hỏi mở về **clarity · error recovery · speed · trust**.

## 9. Report — Sản phẩm đầu ra

→ [`02_Usability-Report.md`](02_Usability-Report.md)

---

## 10. Bảng người tham gia

> ⚠️ Đề §6 + §12: **5 người thật, ngoài lớp này**, khớp hồ sơ người dùng mục tiêu, liên hệ kiểm chứng được, **ẩn 4 số giữa**.
> **TA có thể gọi ngẫu nhiên 2 người xác minh. Mạo danh → 0 điểm Task 2.**

| # | Họ tên | Vai trò / hồ sơ | Liên hệ (ẩn 4 số giữa) | Ngày chạy | Thiết bị |
|---|---|---|---|---|---|
| P0 *(pilot)* | | | | | |
| P1 | | | | | |
| P2 | | | | | |
| P3 | | | | | |
| P4 | | | | | |
| P5 | | | | | |

> Pilot (P0) chạy **trước** để phát hiện tác vụ tối nghĩa — **không tính** vào 5 người chính thức.

**Ghi nhận sau pilot — đã chỉnh sửa gì:**

*(…)*

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
