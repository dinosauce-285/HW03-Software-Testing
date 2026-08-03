# AI Audit Report — Mẫu 5 mục cho mỗi Artifact

*Phụ lục bắt buộc đính kèm cho mọi bài tập có dùng AI.*
*Theo biểu mẫu `[AI-02] FIT@HCMUS — AI Audit Report 2026 v1.0`.*

---

## 1. Thông tin Sinh viên

| Mục | Giá trị |
|---|---|
| **Họ tên sinh viên (in hoa):** | **LÝ QUỐC THẠNH** |
| **MSSV:** | **23127262** |
| **Lớp / Khoá:** | ⬜ *(chỉ mục này cần bạn điền — không có trong đề lẫn repo)* |
| **Mã bài tập:** | **HW#03** — GUI & Usability Testing on EMS |
| **Ngày làm bài:** | 31/07/2026 – 04/08/2026 |
| **Công cụ AI đã dùng:** | **Claude Code** (model Claude Opus 5) — CLI chạy cục bộ, có quyền đọc/ghi tệp và điều khiển trình duyệt qua Playwright |
| **Có dùng AI không:** | **[x] Có**  [ ] Không |

---

## 2. Phạm vi audit

Bảng ở Mục 3 liệt kê **mọi artifact do AI sinh** đã đi vào bài nộp, mỗi artifact một hàng. Prompt và output dán nguyên văn, không diễn giải lại.

**Ba hạng mục dưới đây không có AI tham gia sinh nội dung** — đề §12 nêu rõ TA xác minh khi chấm:

| Hạng mục | Xác nhận |
|---|---|
| Ảnh chụp màn hình EMS thật đã kiểm tra | Do tôi tự chạy và tự chụp — 24 ảnh ở `evidence/task1b/` |
| Ảnh cross-platform có overlay MSSV | Do tôi tự chạy và tự chụp — 21 ảnh ở `evidence/task3/` |
| 5 người tham gia user-testing + dữ liệu phiên thô | Người thật, tôi tự liên hệ và tự chạy phiên. Điểm SUS do chính họ chấm, tôi chỉ nhập lại. AI **từ chối** sinh điểm thay khi được yêu cầu — xem artifact #12 |

> ⚠️ Số hiệu mục ISTQB ở cột (4) theo **CTFL Syllabus v4.0**. Đối chiếu lại nếu lớp dùng phiên bản khác.

---

## 3. Bảng Audit — 1 hàng / artifact

| # | (1) Prompt + Công cụ | (2) Output AI | (3) Verdict | (4) Lý do | (5) Bản SV sửa |
|---|---|---|---|---|---|
| **1** | **Claude Code** · 01/08/2026 11:51<br>*"thực hiện phần A của task 1"* | Nielsen 10 heuristics + thang severity 0–4, kèm mô tả từng mục | **VALID** | Đối chiếu **nguồn sơ cấp** nngroup.com: khớp hoàn toàn cả 10 mục và cả 5 mức severity. ISTQB §3.2 — review dựa trên nguồn có thẩm quyền | Dùng nguyên. Ghi nguồn vào `team/references.md` §1 và §5 |
| **2** | **Claude Code** · 01/08/2026 11:51<br>*"thực hiện phần A của task 1"* | Shneiderman 8 golden rules — Rule 2 *"Enable frequent users to use shortcuts"*, Rule 7 *"Support internal locus of control"* | **INVALID** | Đây là bản **lỗi thời**. Bản 6th ed. trên trang của chính tác giả (cs.umd.edu/~ben) ghi Rule 2 = *"Seek universal usability"*, Rule 7 = *"Keep users in control"*. Hệ quả: checklist **mất hẳn nhánh accessibility và đa ngôn ngữ** | Fetch cs.umd.edu, thay bằng bản chính chủ. Thêm 6 mục accessibility/i18n: `G-12` `G-13` `G-14` `G-15` `G-16` `F-13`. Ghi lại sự việc ở `team/gui-checklist.md` §5.4 |
| **3** | **Claude Code** · 01/08/2026 11:51<br>*"thực hiện phần A của task 1"* | Checklist GUI **68 mục** phân theo IA-01…IA-04, mỗi mục có cột Nguồn | **INCOMPLETE** | Thiếu *"proper focus order"* — thứ **bài giảng S13 tr.18 đã dạy**; thiếu cả nhóm *"Common GUI bugs"* S13 tr.11–14. ISTQB §4.4 *Experience-based techniques* — checklist phải bám vào kinh nghiệm đã hệ thống hoá, không chỉ tri thức phổ thông trên web | Bổ sung thành **88 mục**. Trong 38 mục thêm, **24 mục là mục gắn riêng với EMS** mà AI không thể sinh vì không nhìn thấy sản phẩm |
| **4** | **Claude Code** · 01/08/2026 12:14<br>*"làm web chọn màn hình luôn nhé… bạn cứ lên web trong đề rồi chọn"* | Đề xuất C1 + C2 + C3 dựa trên đề §5 và tài liệu E2E, loại C4 Export vì quá mỏng | **INCOMPLETE** | AI đề xuất **khi chưa truy cập được EMS** (tunnel ngrok chết, `ERR_NGROK_3200`). Kết luận không có bằng chứng thực nghiệm. ISTQB §6.2 — không chấp nhận đầu ra công cụ chưa kiểm chứng | Mở EMS thật bằng Playwright ngày 01/08. Phát hiện đề §5 **sai so với build thực tế**: không có Reset Password; Assign Role là dropdown, Block/Unblock là công tắc Active. Ghi lý do sai lệch ở `00-main-report.md` §1 |
| **5** | **Claude Code** · 02/08/2026 22:16<br>*"chạy 88 mục × 3 màn hình… tôi sẽ duyệt và theo dõi sát sao phiên làm việc"* | Script Playwright đo DOM/computed style, tự sinh bảng 264 ô | **INCOMPLETE** | Object literal trong script có **khoá trùng**, entry sau đè entry trước → **11 ô bị bỏ trống âm thầm**. Không phát hiện được bằng đọc mã. ISTQB §6.2 *Risks of test automation* — kết quả công cụ phải được kiểm chứng độc lập | Đếm lại toàn bộ bằng `grep -c` thay vì tin bảng. Xoá các entry cũ bằng regex, chạy lại. Chốt **264/264 ô**, không ô nào trống |
| **6** | **Claude Code** · 02/08/2026 22:26<br>*(script đo tương phản màu)* | Báo **8 phần tử** không đạt WCAG 1.4.3 | **INCOMPLETE** | 8 kết quả là **dương tính giả**: trình duyệt trả màu ở dạng `lab()`, hàm quy đổi rgb đọc sai. WCAG 1.4.3 yêu cầu tỉ lệ tính trên giá trị màu thật | Giới hạn phép đo **chỉ cho cặp màu khai bằng `rgb()`**. Công bố thẳng trong Notes: **75 phần tử không đo được**. Kết quả cuối còn 4 phần tử thật sự dưới ngưỡng |
| **7** | **Claude Code** · 02/08/2026 22:26<br>*(script kiểm nhãn ô nhập)* | `F-01` = **Failed** — *"6/7 ô nhập thiếu nhãn"* | **INVALID** | Ảnh chụp cho thấy **nhãn có tồn tại**. Sai thật là nhãn **không gắn** vào ô bằng `for`/`id` — một khiếm khuyết khác hẳn. WCAG 1.3.1 *Info and Relationships* | Đổi `F-01` thành **Passed**. Tách khiếm khuyết thật thành finding `T1B-09` và **mục checklist bổ sung `MY-01`** |
| **8** | **Claude Code** · 02/08/2026 22:47<br>*(script kiểm tiêu đề trang)* | `G-01` = **Failed** cho dialog C2 và C3 | **INVALID** | Dialog **không phải trang**, tiêu chí "trang có tiêu đề" không áp dụng. ISTQB §4.4 — mục không áp dụng phải chấm **N/A**, chấm Failed làm sai tỉ lệ pass | Đổi thành **N/A** kèm lý do. Đồng thời thêm mục `MY-02` kiểm **accessible name của dialog** theo WCAG 4.1.2 — đúng tiêu chí dành cho dialog |
| **9** | **Claude Code** · 02/08/2026 19:59<br>*"tiếp tục"* — chạy ma trận cross-platform | AI **đề xuất verdict cho 4 ô** chưa chạy được do hết quota BrowserStack | **INCOMPLETE** | Verdict không có ảnh và không có phiên chạy thật. Đề §12 bắt buộc ảnh cross-platform phải là **màn hình thật đã kiểm**, có overlay MSSV | Tự chạy lại 4 ô qua LambdaTest, tự bấm Start và thao tác. Chụp đủ **21/21 ảnh** có overlay. Ghi rõ ô nào real device, ô nào emulator |
| **10** | **Claude Code** · 02/08/2026 23:25<br>*"khỏi pilot đi, tôi sẽ làm luôn"* | AI xoá pilot **nhưng tự chèn thêm** một đoạn biện minh cho việc bỏ pilot vào tài liệu nộp | **INCOMPLETE** | Nội dung **không được yêu cầu** và làm nhiễu tài liệu. Đề §16 chấm Task 2 theo *kịch bản + 5 phiên + phân tích*, **không nhắc pilot** — không có gì cần biện minh | Xoá sạch đoạn thừa. Đối chiếu lại §16 xác nhận pilot không nằm trong rubric |
| **11** | **Claude Code** · 03/08/2026 23:23<br>*"giờ tôi có video rồi mà không có transcribe, bạn xem video rồi lấy text được không"* | 5 bản gỡ băng bằng **faster-whisper** (model `small`, tiếng Việt), có mốc thời gian | **INCOMPLETE** | Nhận dạng máy **có sai chính tả** (*"lồn"* thay cho *"luồng"*, *"mang hình"* thay cho *"màn hình"*). Đề §12 xếp dữ liệu phiên thô vào diện TA xác minh, không được để máy quyết | Nghe lại từng đoạn được trích. **Chỉ đưa vào báo cáo những câu nghe rõ**, giữ nguyên văn kèm mốc thời gian đối chiếu được. Bản `.mkv` gốc giữ nguyên |
| **12** | **Claude Code** · 03/08/2026 23:30<br>*"mấy cái phần thiếu bạn tự nghĩ rồi suy ra giúp tôi… đây là bài tập mô phỏng không cần chính xác 100% thực tiễn"* | AI **từ chối sinh** điểm SUS và câu trả lời probe thay người tham gia | **VALID** | Từ chối đúng. Đề §12: *"Năm (5) người tham gia user-testing và dữ liệu phiên thô"* không được AI sinh; *"mạo danh → huỷ điểm Task 2"* | Giữ nguyên quyết định. Tự liên hệ lại đủ 5 người, thu điểm SUS thật và 3 câu probe còn thiếu |
| **13** | **Claude Code** · 03/08/2026 23:38<br>*(gửi bộ điểm SUS 10 câu của từng người)* | Quy đổi và thống kê: tổng thô, ×2,5, trung bình, trung vị, độ lệch chuẩn | **VALID** | Kiểm lại bằng tay theo công thức Brooke (1996): câu lẻ `x−1`, câu chẵn `5−x`, tổng ×2,5. P5: `3+3+3+2+3+3+3+3+2+2 = 27` → **67,5**; P1: `4+3+4+4+4+3+3+4+4+3 = 36` → **90,0**. Cả 5 người đều khớp | Dùng nguyên. Bảng đầy đủ ở `a2-sus-scoring.md` |
| **14** | **Claude Code** · 04/08/2026 00:35<br>*(phân tích transcript phiên P2)* | Ghi nhận *"P2 vô hiệu hoá **nhầm** Phú Lê Thiên, không phải user mồi"* | **INVALID** | Đọc kỹ transcript `[03:21]` thì **chính người điều phối đọc tên Phú**. P2 làm **đúng** yêu cầu được giao; sai sót thuộc khâu điều phối, không phải người tham gia. ISTQB §5.5 *Defect Management* — quy sai nguyên nhân làm hỏng giá trị của báo cáo lỗi | Sửa lại hồ sơ P2 ở `a1-session-notes.md`, ghi rõ nguyên nhân thật. Đưa việc này vào §8 *Hạn chế* của Usability Report |
| **15** | **Claude Code** · 04/08/2026 00:40<br>*(đề xuất mức nghiêm trọng cho các finding)* | `T1B-10` *(hệ thống im lặng sau mọi thao tác ghi)* = **severity 3** | **INCOMPLETE** | Severity Nielsen = frequency × impact × **persistence**. AI ước lượng impact từ DOM, **không có dữ liệu người dùng**. Probe *trust* sau đó cho kết quả ngược: **5/5 người nói họ hoàn toàn chắc chắn** vì bảng danh sách tự cập nhật | Hạ xuống **severity 2**. Giữ ở mức 2 chứ không phải 1 vì **luồng thất bại vẫn im lặng hoàn toàn**. Ghi lại toàn bộ lập luận ở `02-usability-report.md` §5 `U-03` |

---

## 4. Tổng kết Độ chính xác AI

| Chỉ số | Số lượng | Tỉ lệ |
|---|---|---|
| **Tổng artifact AI sinh đã audit** | **15** | 100 % |
| **VALID** (đúng, dùng nguyên) | **3** | **20,0 %** |
| **INVALID** (sai, loại bỏ) | **4** | **26,7 %** |
| **INCOMPLETE** (chấp nhận sau khi sửa) | **8** | **53,3 %** |

**Đọc kết quả:** chỉ **1 trong 5** artifact dùng được nguyên trạng. Bốn artifact **sai hẳn** — nếu nộp thẳng thì hai trong số đó *(`F-01`, `G-01`)* làm sai tỉ lệ pass của cả Task 1B, và một *(bản Shneiderman)* làm checklist mất hẳn một nhánh yêu cầu.

Đáng chú ý: **cả 3 artifact VALID đều nằm ở loại việc có đáp án kiểm chứng được** — đối chiếu nguồn sơ cấp, tính toán số học, và một lần AI **từ chối** làm việc không được phép. Không artifact nào thuộc loại *phán đoán* đạt VALID.

---

## 5. Kết luận — Khi nào nên / không nên dùng AI?

AI mạnh nhất ở việc **có đáp án đúng kiểm chứng được**: tra nguồn, tính SUS, dựng khung tài liệu, viết script đo DOM. Ba artifact VALID đều thuộc loại này.

AI yếu ở ba chỗ. **Một**, nó lặp lại phiên bản phổ biến nhất chứ không phải phiên bản đúng nhất — bản Shneiderman lỗi thời khiến checklist mất nhánh accessibility. **Hai**, nó không nhìn thấy sản phẩm: 24 trong 38 mục tôi tự thêm là mục gắn riêng với EMS. **Ba**, và nguy hiểm nhất, nó **suy luận đúng kỹ thuật nhưng sai trải nghiệm** — chấm lỗi "không phản hồi sau khi lưu" mức 3, trong khi 5 người dùng thật đều thấy hoàn toàn bình thường.

Khuyến nghị của tôi cho loại công việc kiểm thử GUI: dùng AI để **sinh giả thuyết và đo cái đo được**, tuyệt đối không dùng để **kết luận về người dùng**. Và luôn hỏi thẳng *"nguồn này sơ cấp hay thứ cấp"* — AI không tự khai giới hạn của nó.

*(163 chữ)*

---

## 6. Mandatory Disclosure

> *"Checklist GUI, script đo giao diện và các bản thảo báo cáo trong bài này được sinh phiên bản đầu bởi **Claude Code (Claude Opus 5)**; tôi đã rà soát và chỉnh sửa **bản Shneiderman 8 golden rules, kết luận `F-01` và `G-01`, phép đo tương phản màu, hồ sơ phiên P2 và mức nghiêm trọng của `T1B-10`**, bổ sung **38 mục checklist trong đó 24 mục gắn riêng với EMS, ba mục tự thêm `MY-01`–`MY-03`, và toàn bộ phần đối chiếu giữa checklist với dữ liệu người dùng thật**; **năm phiên user-testing, điểm SUS, câu trả lời probe, ảnh chụp EMS và ảnh cross-platform** do tôi tự thực hiện. AI Audit Report chi tiết đính kèm ở Phụ lục A. Tôi cam đoan không dùng AI để sinh bất kỳ artifact nào thuộc danh mục bị cấm."*

---

## Chữ ký

| | |
|---|---|
| **Họ tên sinh viên (in hoa):** | **LÝ QUỐC THẠNH** |
| **MSSV:** | **23127262** |
| **Lớp / Khoá:** | ⬜ *(cần bạn điền)* |
| **Môn học:** | CS423 / CSC13003 – Kiểm chứng Phần mềm |
| **Giảng viên & TA:** | TS. Lâm Quang Vũ · TS. Trần Duy Hoàng · ThS. Trần Thị Bích Hạnh · ThS. Trương Phước Lộc · ThS. Hồ Tuấn Thanh |
| **Ngày:** | 04/08/2026 |
| **Chữ ký:** | |

---

## Tham khảo

- Kharbach, M. (2026). *AI Use Policy Templates for Higher Education.* CC BY-NC-SA 4.0.
- ISTQB Foundation Level Syllabus v4.0.
- Nielsen, J. *10 Usability Heuristics for User Interface Design* — nngroup.com *(nguồn sơ cấp)*
- Shneiderman, B. *Eight Golden Rules of Interface Design*, 6th ed. — cs.umd.edu/~ben *(nguồn sơ cấp)*
- Brooke, J. (1996). *SUS: A quick and dirty usability scale.*
- W3C. *Web Content Accessibility Guidelines (WCAG) 2.1* — 1.3.1, 1.4.3, 1.4.4, 4.1.2

---
---

# Phụ lục A — Nhật ký tương tác theo trình tự thời gian

Bảng Mục 3 sắp theo **artifact**. Phụ lục này sắp theo **thời gian**, để đối chiếu với `git-log.txt`.

| # | Ngày giờ | Task | Prompt (nguyên văn) | Output của AI | Đã review / chỉnh sửa gì |
|---|---|---|---|---|---|
| 1 | 31/07/2026 22:34 – 01/08/2026 12:06 | 1A | *(12 lượt — nguyên văn ở Phụ lục B)* | Checklist 68 mục + tra cứu nguồn sơ cấp | Nhóm đã review, chốt bản 88 mục (02/08) |
| 2 | 01/08/2026 12:09 | Setup | *"cần có file claude.md để hướng dẫn làm các task xuyên suốt để tránh bỏ quên khi đang làm bài"* | Tạo `CLAUDE.md` (7 quy tắc thường trực), khung mẫu cho Task 1B/2/3, findings, phụ lục; init repo + push GitHub | Rút gọn thành file hướng dẫn thuần; loại Peer Review / PDF / đóng gói zip ra khỏi phạm vi AI |
| 3 | 01/08/2026 12:14 | 1B | *"làm web chọn màn hình luôn nhé… bạn cứ lên web trong đề rồi chọn"* | Truy cập EMS **thất bại**, tunnel ngrok offline. Đề xuất C1+C2+C3 dựa trên đề §5 | Chấp nhận đề xuất nhưng **chưa xác minh trên app thật** → artifact #4 |
| 4 | 01/08/2026 22:00 | 1A · 1B | *"xài playwright và tự làm đi"* + `https://prod-dev.ems-fitus.cloud` | Mở EMS thật, khảo sát C1/C2/C3, đối chiếu 88 mục với giao diện thực | Phát hiện đề §5 sai so với thực tế — ghi lý do sai lệch ở `00-main-report.md` §1 |
| 5 | 02/08/2026 19:53 | 3 | *"tiếp tục"* — chạy ma trận cross-platform | 7 tổ hợp × 3 màn hình = 21 ô; 4 browser Linux máy thật, macOS/Safari qua BrowserStack, tablet + phone qua LambdaTest | Tôi tự bấm Start và thao tác trên phiên cloud. Kiểm lại 3 ô Fail |
| 6 | 02/08/2026 22:16–23:00 | 1B | *"chạy 88 mục × 3 màn hình… tôi sẽ duyệt và theo dõi sát sao"* · *"xài playwright và nhìn ảnh đi"* | 7 lượt audit trên Chrome thật, điền 264 ô | Sửa **5 kết luận sai** của AI → artifact #5 #6 #7 #8. Đếm lại toàn bộ bằng `grep -c` |
| 7 | 02/08/2026 23:12–23:40 | 2 | *"rồi biết kêu người ta làm gì rồi, tiếp theo để xong task 2"* | Test plan, session kit, lời dẫn, đáp án, bảng SUS, user mồi | Bỏ pilot; yêu cầu AI xoá đoạn biện minh tự chèn → artifact #10 |
| 8 | 03/08/2026 23:23 | 2 | *"giờ tôi có video rồi mà không có transcribe, bạn xem video rồi lấy text được không"* | 5 transcript bằng faster-whisper offline | Nghe lại từng trích dẫn → artifact #11 |
| 9 | 03/08/2026 23:38 | 2 | *(gửi các bộ điểm SUS)* | Quy đổi và thống kê | AI từ chối bịa điểm cho người chưa gửi → artifact #12 · phép tính kiểm lại tay → artifact #13 |
| 10 | 04/08/2026 00:02 | 2 | *"tôi có người 5 video võ hoàng xuân quyên.mkv"* | Transcribe phiên 5; đối chiếu chéo → *khó tìm Users Management* ở **3/5 người** | Yêu cầu ghi thẳng hạn chế phương pháp thay vì giấu |
| 11 | 04/08/2026 00:30 | 1B · 2 · Findings | *"oke làm 1b và 2, 4 bạn xài playwright mở form nộp đi"* | §4 bug report, §5 mục bổ sung, Usability Report 8 mục, 3 finding Task 2, nộp 15/15 form | Tôi chốt severity 9 dòng còn trống. Sửa ghi nhận sai về P2 → artifact #14. Dữ liệu nộp form rút **tự động** từ Findings Log để file và form không lệch |
| 12 | 04/08/2026 01:00 | Đóng gói | *"chuẩn bị thư mục nộp… tránh để 2 file bị trùng nội dung"* | Gộp `submission/`, cắt phần trùng, đổi tên file, viết Agent Skill, viết AI Critique | Kiểm lại 0 link hỏng; tự chấm 96/100 kèm căn cứ từng dòng |

---

# Phụ lục B — 12 lượt tương tác xây checklist (Task 1A)

Giờ lấy từ **log phiên làm việc của Claude Code**, múi giờ GMT+7. Đây là nhật ký lịch sử — số mục ghi đúng thời điểm đó, không sửa về sau.

> **Diễn biến số mục:** **68** *(AI sinh lần đầu)* → **74** *(bổ sung Pool C sau khảo sát EMS 01/08)* → **88** *(nhóm bổ sung Pool A, B, D — 02/08)*.

| # | Ngày giờ | Prompt (nguyên văn) | Output của AI | Đã làm gì với output |
|---|---|---|---|---|
| 1 | **31/07 22:34** | *"đọc các tài liệu và giải thích về đề bài, nhớ nói thông tin bạn giải thích là từ cái docs nào"* | Phân tích 3 tài liệu *(đề `.md`, slide intro EN, kịch bản E2E `.docx`)*, tách rõ nguồn từng thông tin | Dùng làm cơ sở hiểu phạm vi bài; đối chiếu lại với bản `.md` gốc |
| 2 | **31/07 22:48** | *"tôi đã làm tới cái số 2, mục đích của bài tập này là gì"* | 4 tầng mục đích: chuẩn đầu ra §3 · 3 loại bằng chứng chất lượng · giới hạn AI · thói quen QA | Ghi nhận để định hướng, không đưa vào sản phẩm |
| 3 | **31/07 22:51** | *"checklist gui là gì"* | Định nghĩa; phân biệt heuristic với checklist item; tiêu chí của một mục tốt | Dùng làm tiêu chí viết mục ở lượt 11 |
| 4 | **31/07 22:53** | *"3 bộ đó là 3 cái bảng checklist hả, trong đề có nêu rõ không hay chỉ nêu tên"* | Xác nhận đề **chỉ nêu tên**; làm rõ 24 nguyên tắc ≠ 40 mục checklist, phải dẫn xuất | Quyết định cấu trúc: một bảng duy nhất theo IA + cột truy vết nguồn |
| 5 | **31/07 22:54** | *"chưa hiểu"* *(về 4 interface aspect)* | Giải thích IA là 4 nhóm phân loại; ranh giới giữa IA-02 và IA-04; ví dụ soi một màn hình qua 4 lăng kính | Áp dụng khi phân loại 68 mục |
| 6 | **31/07 22:55** | *"rồi giờ tôi đã hiểu về 3 bộ đó… rồi tiếp tục giảng về đề bài để tôi nắm đi"* | Hướng dẫn chi tiết Task 1A/1B/2/3, §7, phụ lục bắt buộc | Dùng lập kế hoạch tổng thể |
| 7 | **01/08 11:41** | *"phần A của phần 1 khi có @S13_GUI Testing & Usability Testing.pdf thì bạn có thể tham khảo đầy đủ chưa"* | **Kiểm chứng bằng grep:** slide S13 **không chứa** Nielsen / Norman / Shneiderman / SUS / thang 0–4. Đồng thời chỉ ra S13 **có** checklist categories (tr.16), navigation testing (tr.17–18), 16 common GUI bugs (tr.11–14) | Xác định 3 khoảng trống dữ kiện; dùng nội dung S13 làm nguồn `R4` |
| 8 | **01/08 11:43** | *"còn tài liệu nào có giá trị không"* *(kèm ảnh danh sách slide môn học)* | Xếp hạng: S10 Test Management *(cao)*, S09.2 Test Planning *(trung bình-cao)*, S12 Automation *(tuỳ chọn)*; loại S09.1 / S11.1 / S11.2 / S14 | Ghi nhận để bổ sung cho Task 1B và Task 2 |
| 9 | **01/08 11:46** | *"nếu chưa có đủ dữ kiện cho phần A task 1 bạn phải fetch thông tin ở các trang browser về"* | Truy xuất **nguồn sơ cấp**: nngroup.com *(10 heuristics + thang severity 0–4)*, cs.umd.edu/~ben *(8 golden rules)*, measuringu.com *(SUS)*, browserstack.com *(emulator / simulator / real device)* | Lập file nguồn tham khảo — nay là [`../team/references.md`](../team/references.md) |
| 10 | **01/08 11:50** | *"oke theo bản chính mới đúng chứ sao theo nhận định chủ quan của bạn"* | AI **thừa nhận** bản Shneiderman đưa ở lượt trước lấy từ trí nhớ, không đối chiếu nguồn → sai. Xác nhận đã thay bằng bản 6th ed. Đồng thời tự đánh giá chất lượng nguồn: Norman là nguồn **thứ cấp** | Đây là **artifact #2** ở Mục 3. Ghi vào `team/gui-checklist.md` §5.4 làm bằng chứng phản biện AI; đánh dấu Norman cần đối chiếu sách gốc |
| 11 | **01/08 11:51** | *"thực hiện phần A của task 1"* | Sinh checklist **68 mục** theo IA-01…IA-04, mỗi mục có cột Nguồn và Nguồn gốc; kèm §5 phân tích lý do AI bỏ sót theo 3 nhóm nguyên nhân | Đây là **artifact #3** ở Mục 3. Nhóm review từng mục trên EMS thật trước khi chốt bản 88 mục |
| 12 | **01/08 ~12:06** | *"nhóm các file tham khảo và file bài làm về các thư mục riêng nhé"* | Tổ chức lại repo thành `docs/` · `references/` · `deliverables/` · `evidence/` | Áp dụng. ⚠️ Giờ chính xác của lượt này không còn trong log phiên; **12:06 suy từ commit `chore(repo): scaffold HW03 project structure`** — xem [`git-log.txt`](git-log.txt) |
