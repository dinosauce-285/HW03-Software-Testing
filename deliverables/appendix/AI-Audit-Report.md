# AI Audit Report *(phụ lục bắt buộc — đề §10)*

> Đề §10: nếu có dùng AI, khai báo *"I use AI tools for the following tasks,"* và **với mỗi lần tương tác ghi: tên công cụ AI, ngày giờ, prompt của bạn và output của AI.**
> Chính sách môn học: *"Students must declare their AI usage in accordance with the AI Usage Guideline."*

**Sinh viên:** *(MSSV – Họ tên)*

---

## Khai báo

> **I use AI tools for the following tasks.**

*(Nếu có bất kỳ phần nào không dùng AI, ghi rõ phần đó ở đây.)*

---

## Công cụ đã sử dụng

| Công cụ | Model | Dùng cho |
|---|---|---|
| Claude Code | Claude Opus 5 | Task 1A — checklist, tra cứu nguồn |
| | | |

---

## Nhật ký tương tác

> **Ghi liên tục trong suốt quá trình làm bài.** Log của Task 1A đã có sẵn ở [`../task1a-checklist/AI-Prompts-Log.md`](../task1a-checklist/AI-Prompts-Log.md) — chép vào đây khi tổng hợp.

| # | Ngày giờ | Công cụ | Task | Prompt (nguyên văn) | Output của AI | Đã review / chỉnh sửa gì |
|---|---|---|---|---|---|---|
| 1 | 01/08/2026 | Claude Code | 1A | *(xem AI-Prompts-Log.md — 12 lượt)* | Checklist 68 mục + tra cứu nguồn sơ cấp | Nhóm đã review, chốt bản 88 mục (02/08) |
| 2 | 01/08/2026 | Claude Code | Setup | *"cần có file claude.md để hướng dẫn làm các task xuyên suốt để tránh bỏ quên khi đang làm bài"* + thông tin git repo | Tạo `CLAUDE.md` (7 quy tắc thường trực), khung mẫu cho Task 1B/2/3, findings, phụ lục; init repo + push GitHub | Rút gọn CLAUDE.md thành file hướng dẫn thuần; loại 3 mục Peer Review / PDF / đóng gói zip ra khỏi phạm vi AI |
| 3 | 01/08/2026 | Claude Code | 1B | *"làm web chọn màn hình luôn nhé… bạn cứ lên web trong đề rồi chọn"* | Truy cập EMS → **thất bại**, tunnel ngrok offline (`ERR_NGROK_3200`, 05:15 UTC). Đề xuất C1+C2+C3 dựa trên đề §5 + tài liệu E2E, loại C4 vì quá mỏng | Chấp nhận đề xuất; **chưa xác minh trên app thật** — cần kiểm lại khi EMS online |
| 4 | 01/08/2026 22:00 | Claude Code | 1A · 1B | *"xài playwright và tự làm đi"* + `https://prod-dev.ems-fitus.cloud` | Mở EMS thật bằng Playwright, khảo sát 3 màn hình C1/C2/C3, đối chiếu 88 mục checklist với giao diện thực | Phát hiện đề §5 sai so với thực tế: **không có Reset Password**; Assign Role là dropdown, Block/Unblock là công tắc Active — cả hai nằm trong dialog Edit User. Ghi lý do sai lệch vào `Checklist-Execution.md §1` |
| 5 | 02/08/2026 19:53 | Claude Code | 3 | *"tiếp tục"* — chạy ma trận cross-platform | Chạy 7 tổ hợp × 3 màn hình = 21 ô: 4 browser Linux chạy máy thật, macOS/Safari qua BrowserStack, tablet + phone Android qua LambdaTest emulator. Chụp 21 ảnh, chèn overlay MSSV | Tôi tự bấm Start và thao tác trên phiên cloud *(quota BrowserStack 1 phút/thiết bị)*. Kiểm lại 3 ô Fail, xác nhận đều ở Android phone |
| 6 | 02/08/2026 22:16–23:00 | Claude Code | 1B | *"chạy 88 mục × 3 màn hình… tôi sẽ duyệt và theo dõi sát sao phiên làm việc"* · *"xài playwright và nhìn ảnh đi"* | 7 lượt audit trên Chrome thật, điền dần 264 ô: 63 Passed · 25 Failed · 176 N/A. Các mục thị giác được đọc từ ảnh chụp | Tôi theo dõi trực tiếp suốt phiên. Sửa 5 kết luận sai của AI: F-01 *(nhãn có tồn tại, chỉ không gắn `for`/`id`)* · F-04 *(màu lỗi trả về dạng `lab()`)* · G-01 *(dialog không phải trang → N/A)* · F-13 *(outline trong suốt)* · 11 ô bị bỏ trống do trùng khoá trong script. Đếm lại toàn bộ bằng `grep -c` |
| 7 | 02/08/2026 23:12–23:40 | Claude Code | 2 | *"rồi biết kêu người ta làm gì rồi, tiếp theo để xong task 2"* | Soạn test plan, session kit, lời dẫn, đáp án, bảng SUS, thông tin user mồi | Tôi **bỏ pilot** — đề chỉ khuyến nghị, §16 chấm theo *kịch bản + 5 phiên + phân tích*. Yêu cầu AI xoá phần biện minh thừa đã tự chèn vào tài liệu |
| 8 | 03/08/2026 23:23 | Claude Code | 2 | *"giờ tôi có video rồi mà không có transcribe, bạn xem video rồi lấy text được không"* | Chạy faster-whisper offline *(model `small`, tiếng Việt)* trên 5 file `.mkv` → 5 transcript có mốc thời gian, đánh dấu khoảng im lặng ≥ 5 giây | Transcript là **máy nhận dạng, có sai chính tả** — tôi đọc lại và chỉ trích dẫn những câu nghe rõ. Video gốc giữ nguyên làm bằng chứng |
| 9 | 03/08/2026 23:38 | Claude Code | 2 | Tôi gửi 4 bộ điểm SUS 10 câu của từng người | AI tính điểm quy đổi và thống kê: TB 79,4 · trung vị 80,0 · sd 10,6 | AI **từ chối tự bịa** điểm cho người chưa gửi — đúng với đề §12. Điểm là do người tham gia tự chọn, tôi chỉ nhập lại |
| 10 | 04/08/2026 00:02 | Claude Code | 2 | *"tôi có người 5 video võ hoàng xuân quyên.mkv"* · *"làm xong điền vô checklist dùm"* | Transcribe phiên 5, đối chiếu chéo 5 phiên → *khó tìm Users Management* xuất hiện ở **3/5 người** *(P3, P4, P5)* → đủ ngưỡng gọi là vấn đề thiết kế hệ thống. Cập nhật `05_Gap-Analysis.md`, `README.md`, `SUBMISSION-CHECKLIST.md` | Tôi yêu cầu ghi thẳng **hạn chế phương pháp** thay vì giấu: người điều phối có dẫn dắt, chỉ hỏi 1/4 câu probe, SUS thu sau phiên. TA xem video sẽ thấy |
| 11 | 04/08/2026 00:30 | Claude Code | 1B · 2 · Findings | *"oke làm 1b và 2, 4 bạn xài playwright mở form nộp đi"* | Viết `§4` bug report *(25 ô Failed → 10 lỗi)* và `§5` ba mục bổ sung của Task 1B; viết trọn `02_Usability-Report.md` 8 mục từ 5 bản gỡ băng; thêm 3 phát hiện Task 2 vào Findings Log; nộp **15/15** submission lên Google Form bằng Playwright | Tôi chốt mức nghiêm trọng cho 9 dòng còn để trống. **Sửa một ghi nhận sai của chính AI trước đó**: hồ sơ P2 từng ghi *"vô hiệu hoá nhầm Phú Lê Thiên"*, đọc kỹ transcript `[03:21]` thì người điều phối đọc tên Phú — P2 làm đúng. Dữ liệu nộp form rút **tự động** từ bảng trong Findings Log để file và form không lệch nhau |
| 12 | | | | | | |

---

## Phần KHÔNG dùng AI

> Đề §12 — các mục sau **không được AI sinh hay bịa**, TA xác minh khi chấm:

| Hạng mục | Xác nhận |
|---|---|
| Ảnh chụp màn hình EMS thật đã kiểm tra | ☐ Do tôi tự chụp |
| Ảnh cross-platform có overlay MSSV | ☐ Do tôi tự chạy và chụp |
| 5 người tham gia user-testing + dữ liệu phiên thô | ☐ Người thật, tôi tự tuyển và tự chạy |
