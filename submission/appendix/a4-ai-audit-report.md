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

> **Ghi liên tục trong suốt quá trình làm bài.** Dòng #1 gộp 12 lượt tương tác của Task 1A — chi tiết ở §Phụ lục cuối file.

| # | Ngày giờ | Công cụ | Task | Prompt (nguyên văn) | Output của AI | Đã review / chỉnh sửa gì |
|---|---|---|---|---|---|---|
| 1 | 01/08/2026 | Claude Code | 1A | *(12 lượt — nguyên văn ở phụ lục cuối file)* | Checklist 68 mục + tra cứu nguồn sơ cấp | Nhóm đã review, chốt bản 88 mục (02/08) |
| 2 | 01/08/2026 | Claude Code | Setup | *"cần có file claude.md để hướng dẫn làm các task xuyên suốt để tránh bỏ quên khi đang làm bài"* + thông tin git repo | Tạo `CLAUDE.md` (7 quy tắc thường trực), khung mẫu cho Task 1B/2/3, findings, phụ lục; init repo + push GitHub | Rút gọn CLAUDE.md thành file hướng dẫn thuần; loại 3 mục Peer Review / PDF / đóng gói zip ra khỏi phạm vi AI |
| 3 | 01/08/2026 | Claude Code | 1B | *"làm web chọn màn hình luôn nhé… bạn cứ lên web trong đề rồi chọn"* | Truy cập EMS → **thất bại**, tunnel ngrok offline (`ERR_NGROK_3200`, 05:15 UTC). Đề xuất C1+C2+C3 dựa trên đề §5 + tài liệu E2E, loại C4 vì quá mỏng | Chấp nhận đề xuất; **chưa xác minh trên app thật** — cần kiểm lại khi EMS online |
| 4 | 01/08/2026 22:00 | Claude Code | 1A · 1B | *"xài playwright và tự làm đi"* + `https://prod-dev.ems-fitus.cloud` | Mở EMS thật bằng Playwright, khảo sát 3 màn hình C1/C2/C3, đối chiếu 88 mục checklist với giao diện thực | Phát hiện đề §5 sai so với thực tế: **không có Reset Password**; Assign Role là dropdown, Block/Unblock là công tắc Active — cả hai nằm trong dialog Edit User. Ghi lý do sai lệch vào `00-main-report.md §1` |
| 5 | 02/08/2026 19:53 | Claude Code | 3 | *"tiếp tục"* — chạy ma trận cross-platform | Chạy 7 tổ hợp × 3 màn hình = 21 ô: 4 browser Linux chạy máy thật, macOS/Safari qua BrowserStack, tablet + phone Android qua LambdaTest emulator. Chụp 21 ảnh, chèn overlay MSSV | Tôi tự bấm Start và thao tác trên phiên cloud *(quota BrowserStack 1 phút/thiết bị)*. Kiểm lại 3 ô Fail, xác nhận đều ở Android phone |
| 6 | 02/08/2026 22:16–23:00 | Claude Code | 1B | *"chạy 88 mục × 3 màn hình… tôi sẽ duyệt và theo dõi sát sao phiên làm việc"* · *"xài playwright và nhìn ảnh đi"* | 7 lượt audit trên Chrome thật, điền dần 264 ô: 63 Passed · 25 Failed · 176 N/A. Các mục thị giác được đọc từ ảnh chụp | Tôi theo dõi trực tiếp suốt phiên. Sửa 5 kết luận sai của AI: F-01 *(nhãn có tồn tại, chỉ không gắn `for`/`id`)* · F-04 *(màu lỗi trả về dạng `lab()`)* · G-01 *(dialog không phải trang → N/A)* · F-13 *(outline trong suốt)* · 11 ô bị bỏ trống do trùng khoá trong script. Đếm lại toàn bộ bằng `grep -c` |
| 7 | 02/08/2026 23:12–23:40 | Claude Code | 2 | *"rồi biết kêu người ta làm gì rồi, tiếp theo để xong task 2"* | Soạn test plan, session kit, lời dẫn, đáp án, bảng SUS, thông tin user mồi | Tôi **bỏ pilot** — đề chỉ khuyến nghị, §16 chấm theo *kịch bản + 5 phiên + phân tích*. Yêu cầu AI xoá phần biện minh thừa đã tự chèn vào tài liệu |
| 8 | 03/08/2026 23:23 | Claude Code | 2 | *"giờ tôi có video rồi mà không có transcribe, bạn xem video rồi lấy text được không"* | Chạy faster-whisper offline *(model `small`, tiếng Việt)* trên 5 file `.mkv` → 5 transcript có mốc thời gian, đánh dấu khoảng im lặng ≥ 5 giây | Transcript là **máy nhận dạng, có sai chính tả** — tôi đọc lại và chỉ trích dẫn những câu nghe rõ. Video gốc giữ nguyên làm bằng chứng |
| 9 | 03/08/2026 23:38 | Claude Code | 2 | Tôi gửi 4 bộ điểm SUS 10 câu của từng người | AI tính điểm quy đổi và thống kê: TB 79,4 · trung vị 80,0 · sd 10,6 | AI **từ chối tự bịa** điểm cho người chưa gửi — đúng với đề §12. Điểm là do người tham gia tự chọn, tôi chỉ nhập lại |
| 10 | 04/08/2026 00:02 | Claude Code | 2 | *"tôi có người 5 video võ hoàng xuân quyên.mkv"* · *"làm xong điền vô checklist dùm"* | Transcribe phiên 5, đối chiếu chéo 5 phiên → *khó tìm Users Management* xuất hiện ở **3/5 người** *(P3, P4, P5)* → đủ ngưỡng gọi là vấn đề thiết kế hệ thống. Cập nhật ghi chép phiên và bảng trạng thái | Tôi yêu cầu ghi thẳng **hạn chế phương pháp** thay vì giấu: người điều phối có dẫn dắt, chỉ hỏi 1/4 câu probe, SUS thu sau phiên. TA xem video sẽ thấy |
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

---

# Phụ lục — 12 lượt tương tác của Task 1A

## 1. Bảng log tương tác

> **Về các con số trong bảng:** đây là nhật ký lịch sử, số mục ghi lại **đúng thời điểm đó** và không được sửa về sau.
> Diễn biến: **68 mục** (AI sinh lần đầu) → **74 mục** (bổ sung Pool C sau khảo sát EMS 01/08) → **88 mục** (nhóm bổ sung Pool A, B, D — 02/08).


| # | Giờ | Prompt (nguyên văn) | Output của AI | Nhóm đã làm gì với output |
|---|---|---|---|---|
| 1 | *(điền)* | "đọc các tài liệu và giải thích về đề bài, nhớ nói thông tin bạn giải thích là từ cái docs nào" | Phân tích 3 tài liệu (đề .md, slide intro EN, kịch bản E2E .docx), tách rõ nguồn từng thông tin | Dùng làm cơ sở hiểu phạm vi bài; đối chiếu lại với bản .md gốc |
| 2 | *(điền)* | "mục đích của bài tập này là gì" | 4 tầng mục đích: chuẩn đầu ra §3 · 3 loại bằng chứng chất lượng · giới hạn AI · thói quen QA | Ghi nhận để định hướng, không đưa vào sản phẩm |
| 3 | *(điền)* | "checklist gui là gì" | Định nghĩa, phân biệt heuristic vs checklist item, tiêu chí của một mục tốt | Dùng làm tiêu chí viết mục ở bước 11 |
| 4 | *(điền)* | "3 bộ đó là 3 cái bảng checklist hả, trong đề có nêu rõ không hay chỉ nêu tên" | Xác nhận đề **chỉ nêu tên**; làm rõ 24 nguyên tắc ≠ 40 mục checklist, phải dẫn xuất | Quyết định cấu trúc: một bảng duy nhất theo IA + cột truy vết nguồn |
| 5 | *(điền)* | "chưa hiểu" *(về 4 interface aspect)* | Giải thích IA là 4 nhóm phân loại; ranh giới giữa IA-02 và IA-04; ví dụ soi 1 màn hình qua 4 lăng kính | Áp dụng khi phân loại 68 mục |
| 6 | *(điền)* | "tiếp tục giảng về đề bài để tôi nắm" | Hướng dẫn chi tiết Task 1A/1B/2/3, §7, phụ lục bắt buộc | Dùng lập kế hoạch tổng thể |
| 7 | *(điền)* | "phần A của phần 1 khi có @S13_GUI Testing & Usability Testing.pdf thì bạn có thể tham khảo đầy đủ chưa" | **Kiểm chứng bằng grep:** slide S13 **không chứa** Nielsen / Norman / Shneiderman / SUS / thang 0–4. Đồng thời chỉ ra S13 có checklist categories (tr.16), navigation testing (tr.17–18), 16 common GUI bugs (tr.11–14) | Xác định 3 khoảng trống dữ kiện; dùng nội dung S13 làm nguồn `R4` |
| 8 | *(điền)* | "còn tài liệu nào có giá trị không" *(kèm ảnh danh sách slide môn học)* | Xếp hạng: S10 Test Management (cao), S09.2 Test Planning (trung bình-cao), S12 Automation (tuỳ chọn); loại S09.1/S11.1/S11.2/S14 | Ghi nhận để bổ sung cho Task 1B và Task 2 |
| 9 | *(điền)* | "nếu chưa có đủ dữ kiện cho phần A task 1 bạn phải fetch thông tin ở các trang browser về" | Truy xuất **nguồn sơ cấp**: nngroup.com (10 heuristics + thang severity 0–4), cs.umd.edu/~ben (8 golden rules), measuringu.com (SUS), browserstack.com (emulator/simulator/real device) | Lập file `references/Task1A_Heuristics-Reference.md` |
| 10 | *(điền)* | "oke theo bản chính mới đúng chứ sao theo nhận định chủ quan của bạn" | AI thừa nhận bản Shneiderman đưa ở lượt trước là lấy từ trí nhớ, không đối chiếu nguồn → sai. Xác nhận file đã dùng bản chính chủ 6th ed. Đồng thời tự đánh giá chất lượng nguồn: Norman là nguồn **thứ cấp** | Ghi vào §5.4 của checklist làm bằng chứng phản biện AI; đánh dấu Norman cần đối chiếu sách gốc |
| 11 | *(điền)* | "thực hiện phần A của task 1" | Sinh checklist 68 mục theo IA-01…IA-04, mỗi mục có cột Nguồn và Nguồn gốc; kèm §5 phân tích lý do AI bỏ sót theo 3 nhóm nguyên nhân | **Cần nhóm review từng mục trên EMS thật trước khi chốt** — xem §3 |
| 12 | *(điền)* | "nhóm các file tham khảo và file bài làm về các thư mục riêng nhé" | Tổ chức lại repo: `docs/` · `references/` · `deliverables/` · `evidence/` | Áp dụng |

---

## 2. Các prompt then chốt — nguyên văn để tái sử dụng

Đây là các prompt tạo ra khác biệt lớn nhất về chất lượng, ghi lại để tái dùng cho màn hình/luồng EMS khác (liên quan §8 — Agent Skill).

### P1 — Prompt kiểm chứng nguồn (thay vì tin AI)

> *"phần A của phần 1 khi có @S13_GUI Testing & Usability Testing.pdf thì bạn có thể tham khảo đầy đủ chưa"*

**Vì sao hiệu quả:** buộc AI **tự kiểm kê dữ kiện đang thiếu** thay vì trả lời từ trí nhớ. AI đã grep tài liệu và báo cáo chính xác cái gì có / cái gì không, thay vì bịa ra rằng slide có chứa 3 bộ heuristic.

### P2 — Prompt ép dùng nguồn sơ cấp

> *"nếu chưa có đủ dữ kiện cho phần A task 1 bạn phải fetch thông tin ở các trang browser về"*

**Vì sao hiệu quả:** chuyển AI từ chế độ "nhớ lại" sang chế độ "tra cứu". Chính prompt này phát hiện ra AI đã đưa **bản Shneiderman lỗi thời** ở lượt trước.

### P3 — Prompt phản biện nguồn

> *"oke theo bản chính mới đúng chứ sao theo nhận định chủ quan của bạn"*

**Vì sao hiệu quả:** buộc AI phân loại **chất lượng từng nguồn** (sơ cấp / thứ cấp), từ đó lộ ra Norman là mắt xích yếu nhất về nguồn. Đây là kiểm soát chất lượng mà nếu không hỏi thì AI không tự khai.

---
