# Task 3 — Ma trận Cross-Browser / Cross-Platform

> Yêu cầu đề §6 Task 3: mỗi màn hình trong **3 màn hình** phải phủ **3 OS × 5 browser × 3 loại thiết bị** — không cần đủ 45 tổ hợp, nhưng **mỗi OS ≥ 1 lần, mỗi browser ≥ 1 lần, mỗi loại thiết bị ≥ 1 lần, cho từng màn hình**.

**Sinh viên:** *(MSSV – Họ tên)* · **Email overlay dùng trên ảnh:** `MSSV@....edu.vn`

---

## 1. Công cụ sử dụng

| Hạng mục | Nội dung |
|---|---|
| Nền tảng | *(BrowserStack / LambdaTest / thiết bị thật)* |
| Loại tài khoản | *(trial / free)* |
| Thời gian chạy | |

**Phân loại môi trường** *(đề §6 yêu cầu phân biệt — xem `references/Task1A_Heuristics-Reference.md` §7)*:

| Ô đã chạy trên | Số ô | Ghi chú |
|---|---|---|
| Real device | | Kết quả tin cậy nhất |
| Emulator (mô phỏng cả phần cứng + phần mềm) | | Chậm hơn, không đo được pin/CPU thật |
| Simulator (chỉ mô phỏng phần mềm) | | Đủ cho kiểm tra layout/UI, không đủ cho phần cứng |

> Với HW03 (chỉ kiểm **hiển thị và layout** của web frontend), simulator/emulator là chấp nhận được — nhưng **phải ghi rõ ô nào chạy môi trường nào**.

---

## 2. Bộ tổ hợp tối thiểu

Ràng buộc chặt nhất là **5 browser** → tối thiểu **5 ô / màn hình** → **15 ô** cho 3 màn hình.

| # | OS | Browser | Loại thiết bị | Thiết bị cụ thể | Môi trường |
|---|---|---|---|---|---|
| C1 | Windows | Chrome | Desktop | | |
| C2 | Windows | Edge | Desktop | | |
| C3 | macOS | Safari | Desktop | | |
| C4 | Android / iOS | Firefox | Tablet | | |
| C5 | Android / iOS | Opera / Samsung Internet | Phone | | |

**Kiểm tra điều kiện phủ:**

| Chiều | Yêu cầu | Đã phủ |
|---|---|---|
| OS | Windows · macOS · Android hoặc iOS | ☐ ☐ ☐ |
| Browser | Chrome · Firefox · Safari · Edge · Opera | ☐ ☐ ☐ ☐ ☐ |
| Thiết bị | Desktop · Tablet · Phone | ☐ ☐ ☐ |

---

## 3. Ma trận kết quả

### Màn hình 1 — *(tên)*

| Ô | OS | Browser | Thiết bị | Môi trường | Kết quả | Loại lỗi | Ảnh |
|---|---|---|---|---|---|---|---|
| C1 | | | | | Pass / Fail | | `evidence/task3/MH1-C1.png` |
| C2 | | | | | | | |
| C3 | | | | | | | |
| C4 | | | | | | | |
| C5 | | | | | | | |

### Màn hình 2 — *(tên)*

| Ô | OS | Browser | Thiết bị | Môi trường | Kết quả | Loại lỗi | Ảnh |
|---|---|---|---|---|---|---|---|
| C1 | | | | | | | |

### Màn hình 3 — *(tên)*

| Ô | OS | Browser | Thiết bị | Môi trường | Kết quả | Loại lỗi | Ảnh |
|---|---|---|---|---|---|---|---|
| C1 | | | | | | | |

**Loại lỗi hiển thị** *(dùng từ khoá thống nhất)*: `tràn` · `chồng lấp` · `vỡ layout` · `chữ không đọc được` · `control không responsive` · `ảnh méo` · `thiếu phần tử`

---

## 4. Yêu cầu bắt buộc với mỗi ảnh chụp

> Đề §6 và §12 — thiếu bất kỳ mục nào dưới đây thì ảnh **không được tính**.

- [ ] Overlay email **`MSSV@....edu.vn`**
- [ ] Nhìn thấy **URL EMS** ngay cạnh
- [ ] Nhìn thấy định danh **browser / OS / thiết bị** (thanh thông tin của BrowserStack — **đừng crop mất**)
- [ ] Nội dung màn hình đang test rõ ràng

**Quy ước tên file:** `MH<n>-C<n>-<os>-<browser>-<thiết bị>.png` — vd `MH1-C3-macOS-Safari-desktop.png`

---

## 5. Tổng hợp

| Màn hình | Số ô chạy | Pass | Fail | Đủ điều kiện phủ? |
|---|---|---|---|---|
| MH1 | | | | ☐ |
| MH2 | | | | ☐ |
| MH3 | | | | ☐ |
| **Tổng** | | | | |

**Các lỗi hiển thị phát hiện được** → chuyển vào [`../findings/Findings-Log.md`](../findings/Findings-Log.md) với ID `T3-__` và nộp Google Form.

## 6. Nhận xét

*(Trình duyệt/OS nào gây vấn đề nhiều nhất? Lỗi tập trung ở loại thiết bị nào? Có phải lỗi responsive breakpoint không?)*
