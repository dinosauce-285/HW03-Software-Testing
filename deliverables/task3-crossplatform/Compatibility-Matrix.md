# Task 3 — Ma trận Cross-Browser / Cross-Platform

> Yêu cầu đề §6 Task 3: mỗi màn hình trong **3 màn hình** phải phủ **3 OS × 5 browser × 3 loại thiết bị** — không cần đủ 45 tổ hợp, nhưng **mỗi OS ≥ 1 lần, mỗi browser ≥ 1 lần, mỗi loại thiết bị ≥ 1 lần, cho từng màn hình**.

**Sinh viên:** 23127262 – Lý Quốc Thạnh · **Email overlay trên ảnh:** `23127262@student.hcmus.edu.vn`
**Kịch bản:** C — Admin quản lý người dùng · **Ngày chạy:** 01/08/2026
**SUT:** `https://prod-dev.ems-fitus.cloud/dashboard/admin/users`

---

## 1. Công cụ sử dụng

| Nền tảng | Dùng cho | Loại tài khoản |
|---|---|---|
| **Máy cá nhân** — Ubuntu 26.04 LTS | 12 ô desktop | — |
| **BrowserStack Live** | 3 ô macOS + Safari | Free Trial *(giới hạn 1 phút/thiết bị)* |
| **LambdaTest Real Time** | 6 ô Android tablet + phone | Freemium *(2 phiên/tài khoản)* |

Đề §6 cho phép đổi công cụ giữa chừng: *"Nếu trial hết hạn, thay bằng công cụ cloud khác… hoặc thiết bị thật."*
Edge và Opera trên Ubuntu được cài từ gói chính thức (`packages.microsoft.com`, `deb.opera.com`), giải nén cục bộ vào `~/opt/browsers` nên không cần quyền root.

**Phân loại môi trường** *(đề §6 yêu cầu phân biệt — định nghĩa ở `references/Task1A_Heuristics-Reference.md` §7)*:

| Môi trường | Số ô | Ghi chú |
|---|---|---|
| **Máy thật** (desktop Linux của sinh viên) | 12 | Trình duyệt cài trực tiếp, kết quả tin cậy nhất trong bộ này |
| **Máy ảo desktop** (BrowserStack — macOS Sonoma) | 3 | Máy Mac thật đặt tại data center của BrowserStack |
| **Emulator Android** (LambdaTest — nhãn `VIRTUAL`) | 6 | Đủ để kiểm hiển thị và layout; **không** dùng để kết luận về hiệu năng, pin hay tính năng phần cứng |

> Với HW03 (chỉ kiểm **hiển thị và layout** của web frontend), emulator là chấp nhận được. Nếu cần kết luận về hiệu năng thì phải chạy lại trên thiết bị thật.

---

## 2. Bộ tổ hợp đã chạy — 7 ô × 3 màn hình = 21 ô

| # | OS | Browser | Loại thiết bị | Thiết bị / phiên bản cụ thể | Môi trường |
|---|---|---|---|---|---|
| E1 | Linux · Ubuntu 26.04 | Chrome 149 | Desktop | Máy cá nhân, 1440×900 | Máy thật |
| E2 | Linux · Ubuntu 26.04 | Firefox 153 | Desktop | Máy cá nhân, 1440×900 | Máy thật |
| E3 | Linux · Ubuntu 26.04 | Microsoft Edge 151 | Desktop | Máy cá nhân, 1440×900 | Máy thật |
| E4 | Linux · Ubuntu 26.04 | Opera 133 | Desktop | Máy cá nhân, 1440×900 | Máy thật |
| E5 | **macOS Sonoma** | **Safari 17.3** | Desktop | BrowserStack, 1440×769 | Máy ảo desktop |
| E6 | **Android 15** | Chrome (Android) | **Tablet** | Galaxy Tab S8 Plus | Emulator |
| E7 | **Android 15** | Chrome (Android) | **Phone** | Galaxy S24 | Emulator |

### Kiểm tra điều kiện phủ

| Chiều | Yêu cầu tối thiểu | Thực tế | Đạt |
|---|---|---|---|
| Hệ điều hành | 3 | Linux · macOS · Android | ✅ |
| Browser | 5 | Chrome · Firefox · Edge · Opera · Safari | ✅ |
| Loại thiết bị | 3 | Desktop · Tablet · Phone | ✅ |
| Số ô mỗi màn hình | ≥ 5 | **7** | ✅ |

> **Ghi chú về lựa chọn OS:** đề nêu *"ví dụ Windows, macOS và Android hoặc iOS"* — chữ "ví dụ", không bắt buộc đúng ba OS đó. Máy cá nhân chạy Ubuntu nên Linux được dùng làm OS thứ ba. Cả ba OS đều khác nhau về nhân hệ thống và engine trình duyệt (Blink/Gecko trên Linux, WebKit trên macOS, Blink-Android), nên vẫn thoả mục đích của yêu cầu.

---

## 3. Ma trận kết quả

### Màn hình C1 — Users Management (`/dashboard/admin/users`)

| Ô | OS | Browser | Thiết bị | Môi trường | Kết quả | Ghi chú | Ảnh |
|---|---|---|---|---|---|---|---|
| E1 | Linux | Chrome | Desktop | Máy thật | **Pass** | Hiển thị đủ 7 cột | `C1_chrome_linux_desktop.png` |
| E2 | Linux | Firefox | Desktop | Máy thật | **Pass** | | `C1_firefox_linux_desktop.png` |
| E3 | Linux | Edge | Desktop | Máy thật | **Pass** | | `C1_edge_linux_desktop.png` |
| E4 | Linux | Opera | Desktop | Máy thật | **Pass** | | `C1_opera_linux_desktop.png` |
| E5 | macOS | Safari | Desktop | Máy ảo | **Pass** | | `C1_safari_macos_desktop.png` |
| E6 | Android | Chrome | Tablet | Emulator | **Pass** | Bảng thu gọn nhưng còn đủ cột chính | `C1_chrome_android_tablet.png` |
| E7 | Android | Chrome | **Phone** | Emulator | **Fail** | **Mất 5/7 cột** — chỉ còn USER và ACTIONS | `C1_chrome_android_phone.png` |

### Màn hình C2 — Dialog Edit User

| Ô | OS | Browser | Thiết bị | Môi trường | Kết quả | Ghi chú | Ảnh |
|---|---|---|---|---|---|---|---|
| E1 | Linux | Chrome | Desktop | Máy thật | **Pass** | | `C2_chrome_linux_desktop.png` |
| E2 | Linux | Firefox | Desktop | Máy thật | **Pass** | | `C2_firefox_linux_desktop.png` |
| E3 | Linux | Edge | Desktop | Máy thật | **Pass** | | `C2_edge_linux_desktop.png` |
| E4 | Linux | Opera | Desktop | Máy thật | **Pass** | | `C2_opera_linux_desktop.png` |
| E5 | macOS | Safari | Desktop | Máy ảo | **Pass** | | `C2_safari_macos_desktop.png` |
| E6 | Android | Chrome | Tablet | Emulator | **Pass** ⏳ | Dialog dựng đủ 7 trường + nút Cancel/Save Changes, nằm gọn trong màn hình | `C2_chrome_android_tablet.png` |
| E7 | Android | Chrome | **Phone** | Emulator | **Fail** ⏳ | `control không responsive` — dialog tràn khỏi cạnh phải, mất Role / Member Code / Active và **mất cả nút Save Changes** | `C2_chrome_android_phone.png` |

### Màn hình C3 — Dialog Create New User

| Ô | OS | Browser | Thiết bị | Môi trường | Kết quả | Ghi chú | Ảnh |
|---|---|---|---|---|---|---|---|
| E1 | Linux | Chrome | Desktop | Máy thật | **Pass** | | `C3_chrome_linux_desktop.png` |
| E2 | Linux | Firefox | Desktop | Máy thật | **Pass** | | `C3_firefox_linux_desktop.png` |
| E3 | Linux | Edge | Desktop | Máy thật | **Pass** | | `C3_edge_linux_desktop.png` |
| E4 | Linux | Opera | Desktop | Máy thật | **Pass** | | `C3_opera_linux_desktop.png` |
| E5 | macOS | Safari | Desktop | Máy ảo | **Pass** | Lỗi hoán đổi nhãn/placeholder tái hiện y hệt | `C3_safari_macos_desktop.png` |
| E6 | Android | Chrome | Tablet | Emulator | **Pass** ⏳ | Dialog dựng đủ 8 trường + nút Cancel/Create User, nằm gọn | `C3_chrome_android_tablet.png` |
| E7 | Android | Chrome | **Phone** | Emulator | **Fail** ⏳ | `control không responsive` — dialog tràn khỏi cạnh phải, **mất nút Create User** nên không tạo được user | `C3_chrome_android_phone.png` |

> ⏳ = **đề xuất của AI, chờ sinh viên verify**. Mở ảnh tương ứng, đối chiếu rồi xoá dấu ⏳.

> ⚠️ Các ô *(điền)* cần bạn mở ảnh tương ứng trong `evidence/task3/` và tự đánh giá Pass/Fail — tôi không tự chấm thay.

**Loại lỗi hiển thị** *(dùng từ khoá thống nhất)*: `tràn` · `chồng lấp` · `vỡ layout` · `chữ không đọc được` · `control không responsive` · `ảnh méo` · `mất dữ liệu`

---

## 4. Ảnh chụp — kiểm tra yêu cầu bắt buộc

Mọi ảnh trong `evidence/task3/` đều có dải overlay trên đầu gồm 4 thành phần đề §6 và §12 yêu cầu:

```
23127262@student.hcmus.edu.vn | URL: https://prod-dev.ems-fitus.cloud/dashboard/admin/users
Browser: <tên + phiên bản> | OS: <hệ điều hành> | Device: <loại + model + môi trường> | Screen: <mã màn hình>
```

- [x] Overlay email MSSV
- [x] URL EMS
- [x] Định danh browser / OS / thiết bị
- [x] Nội dung màn hình đang kiểm

Riêng 9 ảnh chạy trên cloud còn giữ nguyên **khung giao diện của BrowserStack / LambdaTest** (thanh hiển thị tên thiết bị, phiên bản OS, trình duyệt) — bằng chứng độc lập thứ hai bên cạnh overlay.

**Quy ước tên file:** `<mã màn hình>_<browser>_<os>_<loại thiết bị>.png`

---

## 5. Tổng hợp

| Màn hình | Số ô | Pass | Fail | Đủ điều kiện phủ |
|---|---|---|---|---|
| C1 Users Management | 7 | 6 | 1 | ✅ |
| C2 Edit User dialog | 7 | 6 | 1 | ✅ |
| C3 Create New User dialog | 7 | 6 | 1 | ✅ |
| **Tổng** | **21** | **18** | **3** | ✅ |

Tỉ lệ Pass: **18/21 ≈ 85,7 %**. Cả 3 ô Fail đều rơi vào **cùng một môi trường** — Android phone.

---

## 6. Nhận xét

**Desktop ổn định trên mọi engine.** Bốn trình duyệt Linux (Blink: Chrome/Edge/Opera · Gecko: Firefox) và Safari trên macOS (WebKit) đều dựng đúng cả ba màn hình, không lệch layout, không tràn, không vỡ. Với một ứng dụng quản trị thì đây là kết quả tốt.

**Vấn đề nằm ở màn hình hẹp, không phải ở trình duyệt.** Ô Fail duy nhất phát hiện được là do **breakpoint responsive**, không phải do khác biệt engine — cùng Chrome, cùng Android, chỉ khác chiều rộng thiết bị mà tablet Pass còn phone Fail.

**Lỗi hoán đổi nhãn ở dialog Create New User (T1B-01) tái hiện trên mọi môi trường** — Chrome, Firefox, Edge, Opera, Safari, Android. Điều này xác nhận đây là lỗi ở tầng ứng dụng chứ không phải vấn đề tương thích, và củng cố mức nghiêm trọng của nó.

**Giới hạn của kết quả này:** 6 ô Android chạy trên **emulator**, không phải máy thật. Theo tài liệu BrowserStack, emulator đủ tin cậy cho kiểm tra giao diện và layout — đúng phạm vi Task 3 — nhưng không kết luận được về hiệu năng, thao tác chạm thật hay biến thể ROM của nhà sản xuất. Muốn chắc chắn thì cần chạy lại trên thiết bị thật.
