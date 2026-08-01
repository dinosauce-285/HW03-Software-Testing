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
| 3 màn hình | **C1** Users Management `/dashboard/admin/users` · **C2** dialog *Edit User* · **C3** dialog *Create New User* |

Đã khảo sát thực tế 01/08/2026: EMS **không có** Reset Password; Assign Role là dropdown và Block/Unblock là công tắc Active, cả hai nằm trong dialog Edit User. Lý do sai lệch so với đề §5 đã ghi ở `Checklist-Execution.md §1`.
Export Excel và dialog Delete User kiểm kèm trong C1, không tính là màn hình riêng.

Khi còn `<điền>` mà cần dùng → **hỏi**, không tự suy ra, không dùng giá trị ví dụ.

---

## 2. Quy tắc thường trực

**R1 — Log mọi tương tác AI.** *(2026.HW03.GUI Usability EMS_Vi.md §10 · ___2026.Homework.Policies.md — "AI Disclosure")*
Mỗi prompt làm thay đổi bài làm → thêm một dòng vào `deliverables/appendix/AI-Audit-Report.md`: ngày giờ · công cụ · task · **prompt nguyên văn** · output · đã chỉnh gì.
*Thiếu AI Audit Report → 0 điểm.*

**R2 — Commit theo từng bước.** *(2026.HW03.GUI Usability EMS_Vi.md §13 · ___2026.Homework.Policies.md — "Version Control Requirements")*
Xong một bước có ý nghĩa (một màn hình chạy xong, một phiên user test, một lần chạy cross-platform, một lần sửa checklist) → đề xuất commit message, commit khi người dùng đồng ý.

**Định dạng bắt buộc — Conventional Commits, viết bằng tiếng Anh:**
```
<type>(<scope>): <mô tả ngắn, thức mệnh lệnh, không viết hoa đầu, không dấu chấm cuối>
```
- `type` ∈ `feat` · `fix` · `docs` · `chore` · `refactor` · `test`
- `scope` ∈ `task1a` · `task1b` · `task2` · `task3` · `findings` · `appendix` · `repo`
- Ví dụ: `docs(task1b): run GUI checklist on users management screen`

**KHÔNG kèm trailer `Co-Authored-By`** — bài nộp phải đứng tên sinh viên; việc dùng AI đã khai ở AI Audit Report (R1), không khai qua git trailer.
Chi tiết quy ước và ví dụ: `deliverables/appendix/Git-Commit-Log.md`.
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

**R6 — Số liệu phải nhất quán.** *(quy tắc vận hành — không trích từ tài liệu; hỗ trợ 2026.HW03.GUI Usability EMS_Vi.md §7 và §15)*
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

**SUT:** https://prod-dev.ems-fitus.cloud · admin `admin@gmail.com` / `Admin@123`
Khu quản trị: `/dashboard/admin` — route `/admin/...` trả 404.
*(URL ngrok trong đề bài đã chết: `ERR_NGROK_3200`.)*
Dữ liệu EMS có thể bị reset — chụp bằng chứng ngay khi làm.
EMS là hệ thống **dùng chung với sinh viên khác**: chỉ mở dialog để quan sát, không lưu/xoá dữ liệu khi khảo sát.
**Nộp findings:** https://forms.gle/CJQFQCAXcsDbXDMM9
