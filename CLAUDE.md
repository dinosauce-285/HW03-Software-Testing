# CLAUDE.md — Hướng dẫn làm việc

Đọc file này đầu mỗi phiên. Các quy tắc ở §2 phải **tự động áp dụng**, không cần được nhắc.

---

## 1. Biến — không được đoán

| Trường | Giá trị |
|---|---|
| MSSV | `23127262` |
| Họ tên | `Lý Quốc Thạnh` |
| Email MSSV | `23127262@student.hcmus.edu.vn`|
| Kịch bản | `C` |
| 3 màn hình | **C1** Danh sách Users · **C2** Assign Role / sửa user · **C3** Dialog Block-Unblock + Reset Password |

Export ra Excel (C4) **không** tính là màn hình thứ 4 — kiểm như một chức năng bên trong C1 (mục `S-17`, `G-03`).
URL cụ thể của 3 màn hình: `<điền khi EMS online>`

Khi còn `<điền>` mà cần dùng → **hỏi**, không tự suy ra, không dùng giá trị ví dụ.

---

## 2. Quy tắc thường trực

**R1 — Log mọi tương tác AI.** *(2026.HW03.GUI Usability EMS_Vi.md §10 · ___2026.Homework.Policies.md — "AI Disclosure")*
Mỗi prompt làm thay đổi bài làm → thêm một dòng vào `deliverables/appendix/AI-Audit-Report.md`: ngày giờ · công cụ · task · **prompt nguyên văn** · output · đã chỉnh gì.
*Thiếu AI Audit Report → 0 điểm.*

**R2 — Commit theo từng bước.** *(2026.HW03.GUI Usability EMS_Vi.md §13 · ___2026.Homework.Policies.md — "Version Control Requirements")*
Xong một bước có ý nghĩa (một màn hình chạy xong, một phiên user test, một lần chạy cross-platform, một lần sửa checklist) → đề xuất commit message theo quy ước trong `deliverables/appendix/Git-Commit-Log.md`, commit khi người dùng đồng ý.
**Commit message KHÔNG kèm trailer `Co-Authored-By`** — bài nộp phải đứng tên sinh viên; việc dùng AI đã được khai báo ở AI Audit Report (R1), không khai qua git trailer.
*"For every step within a requirement, students must create a clear and explicit Git commit message."*

**R3 — Mọi phát hiện vào Findings Log.** *(2026.HW03.GUI Usability EMS_Vi.md §7)*
Bất kỳ lỗi hay vấn đề usability nào xuất hiện trong hội thoại → thêm ngay vào `deliverables/findings/Findings-Log.md` đủ 9 cột, rồi **nhắc nộp Google Form** và điền cột thời điểm gửi.
*Phải báo cáo hai lần; TA đối chiếu số lượng giữa file và form.*

**R4 — Giữ bảng trạng thái README đúng.** *(2026.HW03.GUI Usability EMS_Vi.md §15 và §18)*
Hạng mục đổi trạng thái → cập nhật bảng trong `README.md` ngay.
*§15 bắt buộc có README kèm bảng tự đánh giá và test summary; §18: thiếu bất kỳ tài liệu bắt buộc nào → 0 điểm. Bảng trạng thái là cơ chế chống bỏ sót.*

**R5 — Đánh dấu phần chưa kiểm chứng.** *(2026.HW03.GUI Usability EMS_Vi.md §2)*
Mọi nội dung sinh ra mà chưa được kiểm trên EMS thật phải có ghi chú ⚠️ và ô ☐ để người dùng verify. Nói rõ trong câu trả lời, không im lặng.
*"Nộp thẳng output thô của AI là không chấp nhận được."*

**R6 — Không bịa dữ liệu chống gian lận.** *(2026.HW03.GUI Usability EMS_Vi.md §12 · ___2026.Homework.Policies.md — "Anti-Cheat Policy")*
Tuyệt đối không sinh: tên/liên hệ người tham gia, nội dung phiên user testing, điểm SUS, kết quả Pass/Fail của ô ma trận, ảnh chụp. Chỉ tạo **mẫu trống**.
*TA gọi ngẫu nhiên 2 người xác minh; mạo danh → 0 điểm Task 2. Vi phạm anti-cheat bị xử như gian lận học thuật.*

**R7 — Số liệu phải nhất quán.** *(quy tắc vận hành — không trích từ tài liệu; hỗ trợ 2026.HW03.GUI Usability EMS_Vi.md §7 và §15)*
Khi số mục checklist / số findings / số ô ma trận thay đổi → cập nhật **đồng thời** mọi nơi trích số đó, và **đếm lại bằng lệnh** (`grep -c`), không tin trí nhớ.
*§7 yêu cầu file tổng hợp khớp với submission trên form; §15 yêu cầu test summary khớp với nội dung bài. Số liệu lệch giữa các file làm hỏng cả hai.*

---

## 3. Việc người dùng tự làm — không đụng vào

Peer Review · xuất PDF · đóng gói zip (nén ảnh, split, đặt tên).

Không làm hộ, không tự nhắc mỗi phiên. Chỉ trả lời khi được hỏi thẳng.

---

## 4. Ràng buộc khi tạo nội dung

**Chung**
- Bài làm viết bằng **Markdown**.
- Chọn màn hình/tác vụ quá đơn giản sẽ **giới hạn điểm tối đa** → khi tư vấn phạm vi, ưu tiên màn hình có form, upload, validation, trạng thái động.
- Công việc không được trùng với thành viên khác trong nhóm.

**Task 1B** — mỗi ô phải có giá trị `Passed`/`Failed`/`N/A`, không để trống. Ảnh **chỉ** cho mục `Failed`. Tỉ lệ pass không tính `N/A` vào mẫu số.

**Task 2** — task scenario hướng **mục tiêu**, không chỉ đường. Pilot chạy trước và **không tính** vào 5 người. Liên hệ ẩn 4 số giữa. Người tham gia phải ngoài lớp. Severity theo thang Nielsen 0–4, kèm cột số người gặp phải.

**Task 3** — điều kiện phủ: mỗi OS ≥1, mỗi browser ≥1, mỗi loại thiết bị ≥1, **cho từng màn hình** → tối thiểu 5 ô/màn hình. Ghi rõ ô nào chạy real device / emulator / simulator.

**Phụ lục** — AI Critique phải **200–300 chữ**, đếm trước khi kết luận là đạt.

---

## 5. Tra cứu

| Cần gì | Ở đâu |
|---|---|
| Yêu cầu chính thức | `docs/2026.HW03.GUI Usability EMS_Vi.md` |
| Chính sách môn học | `docs/___2026.Homework.Policies.md` |
| Chức năng EMS phía admin | `docs/Kịch-bản-E2E-Test-Flow-Luồng-Admin.docx` |
| Nielsen / Norman / Shneiderman / SUS / severity / emulator-simulator | `references/Task1A_Heuristics-Reference.md` |
| Bài giảng môn học | `references/S13_GUI Testing & Usability Testing.pdf` |
| Cấu trúc thư mục, trạng thái, self-assessment | `README.md` |

**SUT:** https://promoter-starboard-prude.ngrok-free.dev/ · admin `admin@gmail.com` / `Admin@123`
Dữ liệu EMS có thể bị reset — chụp bằng chứng ngay khi làm.
**Nộp findings:** https://forms.gle/CJQFQCAXcsDbXDMM9
