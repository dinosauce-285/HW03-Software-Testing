# Bug & Usability Findings Log

> Yêu cầu: đề §7 — mọi phát hiện phải báo cáo **hai lần**: (1) nộp từng phát hiện lên Google Form <https://forms.gle/CJQFQCAXcsDbXDMM9> bằng email MSSV, và (2) tổng hợp vào file này.
> **File này và số submission trên form phải khớp nhau — TA đối chiếu số lượng.**

**Sinh viên:** *(MSSV – Họ tên)*
**Kịch bản:** *(A / B / C / D)*

---

## Quy ước

**ID:** `<Task>-<số thứ tự>` — vd `T1B-01` (từ chạy checklist), `T2-01` (từ user testing), `T3-01` (từ cross-platform)

**Loại:**
- `Bug` — hệ thống làm **sai** so với thứ nó phải làm
- `Usability` — hệ thống làm đúng nhưng người dùng vẫn khó dùng

**Mức nghiêm trọng** (thang Nielsen 0–4, xem `references/Task1A_Heuristics-Reference.md` §5):

| Mức | Nghĩa |
|---|---|
| 0 | Không phải vấn đề |
| 1 | Chỉ mỹ quan — sửa nếu còn thời gian |
| 2 | Nhỏ — ưu tiên thấp |
| 3 | Lớn — quan trọng, ưu tiên cao |
| 4 | Thảm hoạ — bắt buộc sửa trước khi phát hành |

---

## Bảng tổng hợp

| ID | Kịch bản / Màn hình | Loại | Mô tả | Bước tái hiện / Heuristic | Mức | Đề xuất sửa | Ảnh | Gửi form lúc |
|---|---|---|---|---|---|---|---|---|
| T1B-01 | C / C3 — Dialog Create New User | **Bug** | Nhãn, placeholder và thông báo lỗi của hai trường tên **không khớp nhau**: ô có nhãn "First Name" lại có placeholder "Last Name" và báo lỗi "Last name is required"; ô nhãn "Last Name" thì ngược lại | 1. Đăng nhập admin → `/dashboard/admin/users`<br>2. Bấm **Add User**<br>3. Để trống toàn bộ, bấm **Create User**<br>4. Đối chiếu nhãn ↔ placeholder ↔ thông báo lỗi của 2 ô đầu.<br>**Kỳ vọng:** ba thứ cùng nói về một trường. **Thực tế:** nhãn nói một đằng, placeholder và lỗi nói một nẻo.<br>Heuristic: Nielsen #2 (Match system & real world), #9 (Recover from errors); checklist `F-01`, `F-04`, `F-05` | *(chấm)* | Sửa lại `name`/`label`/`placeholder`/thông báo lỗi cho khớp đúng trường. Nhiều khả năng hai trường bị hoán vị lúc khai báo schema validation | `evidence/task1b/T1B-01-swapped-name-validation.png` | |
| T1B-02 | | | | | | | | |
| T2-01 | | | | | | | `evidence/task2/` | |
| T3-01 | | | | | | | `evidence/task3/` | |

---

## Thống kê (điền khi hoàn tất — dùng cho README self-assessment)

| Chỉ số | Số lượng |
|---|---|
| Tổng phát hiện | |
| — loại Bug | |
| — loại Usability | |
| Severity 4 | |
| Severity 3 | |
| Severity 2 | |
| Severity 1 | |
| Số submission đã gửi Google Form | |

> ⚠️ Số dòng trong bảng trên **phải bằng** số submission Google Form.
