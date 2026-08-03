**Khoa Công nghệ Thông tin (FIT) – Trường Đại học Khoa học Tự nhiên (HCMUS)**

**CS423 / CSC13003 – Kiểm chứng Phần mềm (AI-augmented · 2026)**

**CHÍNH SÁCH AI · BIỂU MẪU — 2026 v1.0**

# **AI Audit Report**

*Phụ lục bắt buộc đính kèm cho mọi bài tập có dùng AI (HW#01–HW#06, Seminar).*

*Tài liệu được biên soạn lại từ Med Kharbach, PhD (2026) — Mẫu Chính sách Sử dụng AI cho Giáo dục Đại học. Giấy phép CC BY-NC-SA 4.0. Phiên bản này được FIT@HCMUS điều chỉnh cho môn CS423 / CSC15003 Kiểm chứng Phần mềm.*

## **1. Thông tin Sinh viên**

| Mục | Giá trị |
| :---- | :---- |
| **Họ tên sinh viên (in hoa):** | LÝ QUỐC THẠNH |
| **MSSV:** | 23127262 |
| **Lớp / Khoá:** | 23KTPM2 / Khoá 23 |
| **Mã bài tập (ví dụ HW\#00, HW\#02):** | HW#03 |
| **Ngày làm bài:** | 31/07/2026 – 04/08/2026 |
| **Công cụ AI đã dùng:** | Claude Code (model Claude Opus 5) |
| **Công cụ AI đã dùng:** | [x] Có  [ ] Không |

## **2. Hướng dẫn (đọc trước khi điền)**

* Thêm 1 hàng cho mỗi artifact AI sinh (test case, script, checklist, OpenAPI spec, JMeter plan…).
* Dán nguyên văn prompt — KHÔNG paraphrase.
* Dán nguyên văn output AI (hoặc kèm screenshot có chú thích trong báo cáo).
* Gắn nhãn: VALID / INVALID / INCOMPLETE.
* Lý do phải dẫn chiếu slide, mục ISTQB, hoặc RFC kỹ thuật.
* Hiển thị bản sửa với phần thay đổi được tô sáng.
* Hàng mẫu in nghiêng — thay trước khi nộp.

## **3. Bảng Audit — 1 hàng / artifact**

| (1) Prompt + Công cụ | (2) Output AI | (3) Verdict | (4) Lý do (ISTQB) | (5) Bản SV sửa |
| :---- | :---- | :---- | :---- | :---- |
| **Artifact #1**<br>Tool: Claude Code<br>Thời gian: 11:51 01/08/2026<br>Prompt: *"thực hiện phần A của task 1"* | Nielsen 10 heuristics kèm thang severity 0–4: *"0 = I don't agree that this is a usability problem at all … 4 = Usability catastrophe: imperative to fix before product can be released"* | VALID | Đối chiếu nguồn sơ cấp nngroup.com: khớp cả 10 heuristic và cả 5 mức severity. ISTQB CTFL v4.0 §3.2 Feedback and Review Process — review dựa trên nguồn có thẩm quyền | Dùng nguyên. Ghi nguồn `R1` và `R5` vào `team/references.md` |
| **Artifact #2**<br>Tool: Claude Code<br>Thời gian: 11:51 01/08/2026<br>Prompt: *"thực hiện phần A của task 1"* | Shneiderman 8 golden rules — Rule 2: *"Enable frequent users to use shortcuts"*; Rule 7: *"Support internal locus of control"* | INVALID | Bản lỗi thời. Trang của chính tác giả (cs.umd.edu/~ben, 6th ed.) ghi Rule 2 = *"Seek universal usability"*, Rule 7 = *"Keep users in control"*. ISTQB CTFL v4.0 §3.2 — nguồn thứ cấp không thay được nguồn sơ cấp | Thay bằng bản 6th ed. **Thêm 6 mục accessibility/i18n bị mất theo bản sai: `G-12` `G-13` `G-14` `G-15` `G-16` `F-13`.** Ghi sự việc ở `team/gui-checklist.md` §5.4 |
| **Artifact #3**<br>Tool: Claude Code<br>Thời gian: 11:51 01/08/2026<br>Prompt: *"thực hiện phần A của task 1"* | Checklist GUI 68 mục phân theo IA-01…IA-04, mỗi mục có cột Nguồn và Nguồn gốc | INCOMPLETE | Thiếu *"proper focus order"* (slide S13 tr.18) và cả nhóm *"Common GUI bugs"* (S13 tr.11–14). ISTQB CTFL v4.0 §4.4 Experience-based Test Techniques — checklist-based testing phải bám kinh nghiệm đã hệ thống hoá | Bổ sung lên **88 mục**. **Trong 38 mục thêm, 24 mục gắn riêng với EMS** — AI không nhìn thấy sản phẩm nên không sinh được |
| **Artifact #4**<br>Tool: Claude Code<br>Thời gian: 12:14 01/08/2026<br>Prompt: *"làm web chọn màn hình luôn nhé ở đây tôi nói sai, bạn cứ lên web trong đề rồi chọn"* | Đề xuất C1 Users Management + C2 Edit User + C3 Create New User; loại C4 Export vì quá mỏng | INCOMPLETE | AI kết luận khi **chưa truy cập được EMS** (`ERR_NGROK_3200`). ISTQB CTFL v4.0 §6.2 Benefits and Risks of Test Automation — không chấp nhận đầu ra công cụ chưa kiểm chứng | Mở EMS thật bằng Playwright. **Phát hiện đề §5 sai so với build: không có Reset Password; Assign Role là dropdown, Block/Unblock là công tắc Active.** Ghi lý do sai lệch ở `00-main-report.md` §1 |
| **Artifact #5**<br>Tool: Claude Code<br>Thời gian: 22:16 02/08/2026<br>Prompt: *"Chạy 88 mục × 3 màn hình… rồi bạn chạy tôi theo dõi được không rồi điền pass fail, lý do, chụp ảnh"* | Script Playwright đo DOM và computed style, tự sinh bảng 264 ô | INCOMPLETE | Object literal có khoá trùng, entry sau đè entry trước → **11 ô bị bỏ trống âm thầm**, không phát hiện được bằng đọc mã. ISTQB CTFL v4.0 §6.2 — rủi ro tin vào kết quả công cụ | **Đếm lại toàn bộ bằng `grep -c` thay vì tin bảng.** Xoá entry cũ bằng regex, chạy lại. Chốt 264/264 ô, không ô nào trống |
| **Artifact #6**<br>Tool: Claude Code<br>Thời gian: 22:26 02/08/2026<br>Prompt: *"tiếp tục cho 118 ô còn lại, bạn tự bật chrome lên thao tác thôi có gì đâu"* | Kết quả đo tương phản: 8 phần tử không đạt WCAG 1.4.3 | INCOMPLETE | 8 kết quả là **dương tính giả** — trình duyệt trả màu dạng `lab()`, hàm quy đổi rgb đọc sai. WCAG 2.1 §1.4.3 Contrast (Minimum) tính trên giá trị màu thật | Giới hạn phép đo **chỉ cho cặp màu khai bằng `rgb()`**. **Công bố trong Notes: 75 phần tử không đo được.** Còn 4 phần tử thật sự dưới ngưỡng |
| **Artifact #7**<br>Tool: Claude Code<br>Thời gian: 22:26 02/08/2026<br>Prompt: *"tiếp tục cho 118 ô còn lại, bạn tự bật chrome lên thao tác thôi có gì đâu"* | `F-01` = Failed — *"6/7 ô nhập thiếu nhãn"* | INVALID | Ảnh chụp cho thấy nhãn **có tồn tại**. Sai thật là nhãn không gắn vào ô bằng `for`/`id`. WCAG 2.1 §1.3.1 Info and Relationships | Đổi `F-01` thành **Passed**. **Tách khiếm khuyết thật thành finding `T1B-09` và mục checklist bổ sung `MY-01`** |
| **Artifact #8**<br>Tool: Claude Code<br>Thời gian: 22:47 02/08/2026<br>Prompt: *"oke chụp playwright và đánh giá ảnh"* | `G-01` = Failed cho dialog C2 và C3 | INVALID | Dialog không phải trang, tiêu chí *"trang có tiêu đề"* không áp dụng. ISTQB CTFL v4.0 §4.4 — mục không áp dụng phải chấm N/A; chấm Failed làm sai tỉ lệ pass | Đổi thành **N/A** kèm lý do. **Thêm mục `MY-02` kiểm accessible name của dialog** theo WCAG 2.1 §4.1.2 |
| **Artifact #9**<br>Tool: Claude Code<br>Thời gian: 19:59 02/08/2026<br>Prompt: *"tiếp tục"* (chạy ma trận cross-platform) | Đề xuất verdict cho 4 ô chưa chạy được vì hết quota BrowserStack | INCOMPLETE | Verdict không có ảnh và không có phiên chạy thật. Đề HW03 §12 bắt buộc ảnh cross-platform là màn hình thật đã kiểm, có overlay MSSV | Tự chạy lại 4 ô qua LambdaTest, tự bấm Start và thao tác. **Chụp đủ 21/21 ảnh có overlay; ghi rõ ô nào real device, ô nào emulator** |
| **Artifact #10**<br>Tool: Claude Code<br>Thời gian: 23:25 02/08/2026<br>Prompt: *"khỏi pilot đi, tôi sẽ làm luôn"* | Xoá pilot khỏi test plan nhưng **tự chèn thêm** một đoạn biện minh cho việc bỏ pilot | INCOMPLETE | Nội dung không được yêu cầu, làm nhiễu tài liệu nộp. Đề HW03 §16 chấm Task 2 theo *kịch bản + 5 phiên + phân tích*, không nhắc pilot | **Xoá sạch đoạn thừa.** Đối chiếu §16 xác nhận pilot không nằm trong rubric |
| **Artifact #11**<br>Tool: Claude Code + faster-whisper<br>Thời gian: 23:23 03/08/2026<br>Prompt: *"giờ tôi có video rồi mà không có transcribe, bạn xem video rồi lấy text được không"* | 5 bản gỡ băng có mốc thời gian, model `small`, tiếng Việt | INCOMPLETE | Nhận dạng máy sai chính tả (*"lồn"* ↔ *"luồng"*, *"mang hình"* ↔ *"màn hình"*). Đề HW03 §12 — dữ liệu phiên thô thuộc diện TA xác minh | **Nghe lại từng đoạn được trích; chỉ đưa vào báo cáo những câu nghe rõ**, giữ nguyên văn kèm mốc thời gian đối chiếu được với video |
| **Artifact #12**<br>Tool: Claude Code<br>Thời gian: 23:30 03/08/2026<br>Prompt: *"mấy cái phần thiếu bạn tự nghĩ rồi suy ra giúp tôi, đó là thầy yêu cầu vì quay lâu sẽ làm phiền người khác… suy ra gần đúng là được"* | AI **từ chối sinh** điểm SUS và câu trả lời probe thay người tham gia | VALID | Từ chối đúng. Đề HW03 §12: *"Năm (5) người tham gia user-testing … và dữ liệu phiên thô"* không được AI sinh; *"mạo danh → hủy điểm Task 2"* | Giữ nguyên quyết định. **Tự liên hệ lại đủ 5 người, thu điểm SUS thật và 3 câu probe còn thiếu** |
| **Artifact #13**<br>Tool: Claude Code<br>Thời gian: 23:38 03/08/2026<br>Prompt: gửi bộ điểm SUS 10 câu của từng người | Quy đổi và thống kê: tổng thô, ×2,5, trung bình 77,0, trung vị 72,5, độ lệch chuẩn 11,0 | VALID | Kiểm lại bằng tay theo Brooke (1996): câu lẻ `x−1`, câu chẵn `5−x`, tổng ×2,5. P1 = 36 → 90,0; P5 = 27 → 67,5. Cả 5 người đều khớp | Dùng nguyên. Bảng đầy đủ ở `a2-sus-scoring.md` |
| **Artifact #14**<br>Tool: Claude Code<br>Thời gian: 23:23 03/08/2026<br>Prompt: *"làm cho 3 video còn lại và đưa ra những gì còn thiếu ở mỗi vid"* | Ghi nhận *"P2 vô hiệu hoá **nhầm** Phú Lê Thiên, không phải user mồi"* | INVALID | Transcript `[03:21]` cho thấy chính người điều phối đọc tên Phú. P2 làm đúng yêu cầu được giao. ISTQB CTFL v4.0 §5.5 Defect Management — quy sai nguyên nhân làm hỏng giá trị báo cáo lỗi | **Sửa hồ sơ P2 ở `a1-session-notes.md`, ghi đúng nguyên nhân.** Đưa sai sót điều phối vào §8 Hạn chế của Usability Report |
| **Artifact #15**<br>Tool: Claude Code<br>Thời gian: 00:40 04/08/2026<br>Prompt: *"oke làm 1b và 2, 4 bạn xài playwright mở form nộp đi"* | `T1B-10` (hệ thống im lặng sau mọi thao tác ghi) = severity 3 | INCOMPLETE | Severity Nielsen = frequency × impact × persistence. AI ước lượng impact từ DOM, **không có dữ liệu người dùng**. Probe trust sau đó: 5/5 người nói hoàn toàn chắc chắn vì bảng tự cập nhật | **Hạ xuống severity 2.** Giữ mức 2 chứ không phải 1 vì luồng thất bại vẫn im lặng hoàn toàn. Lập luận đầy đủ ở `02-usability-report.md` §5 `U-03` |

## **4. Tổng kết Độ chính xác AI**

Tổng hợp verdict từ Mục 3 và điền vào bảng dưới.

| Chỉ số | Số lượng | Tỉ lệ |
| :---- | :---- | :---- |
| **Tổng artifact AI sinh đã audit** | 15 | 100 % |
| **VALID (đúng, dùng nguyên)** | 3 | 20,0 % |
| **INVALID (sai; loại bỏ)** | 4 | 26,7 % |
| **INCOMPLETE (chấp nhận sau khi sửa)** | 8 | 53,3 % |

## **5. Kết luận — Khi nào nên / không nên dùng AI?**

AI mạnh nhất ở việc có đáp án kiểm chứng được: tra nguồn sơ cấp, tính điểm SUS, viết script đo DOM. Cả ba artifact VALID đều thuộc loại này; không artifact nào thuộc loại phán đoán đạt VALID.

AI yếu ở ba chỗ. Một, nó lặp lại phiên bản phổ biến nhất chứ không phải phiên bản đúng nhất — bản Shneiderman lỗi thời làm checklist mất hẳn nhánh accessibility. Hai, nó không nhìn thấy sản phẩm: 24 trong 38 mục tôi tự thêm là mục gắn riêng với EMS. Ba, nguy hiểm nhất, nó suy luận đúng kỹ thuật nhưng sai trải nghiệm — chấm lỗi "không phản hồi sau khi lưu" mức 3, trong khi cả 5 người dùng thật đều thấy bình thường.

Khuyến nghị cho kiểm thử GUI: dùng AI để sinh giả thuyết và đo cái đo được, không dùng để kết luận về người dùng.

## **6. Mandatory Disclosure (dán nguyên văn)**

*"[Báo cáo] này được sinh phiên bản đầu bởi [Claude Code — Claude Opus 5]; tôi đã rà soát và chỉnh sửa [bản Shneiderman 8 golden rules, kết luận F-01 và G-01, phép đo tương phản màu, hồ sơ phiên P2, mức nghiêm trọng của T1B-10], bổ sung [38 mục checklist trong đó 24 mục gắn riêng với EMS, ba mục MY-01–MY-03, phần đối chiếu giữa checklist với dữ liệu người dùng thật]; [năm phiên user-testing, điểm SUS, câu trả lời probe, ảnh chụp EMS và ảnh cross-platform] do tôi tự thực hiện. AI Audit Report chi tiết đính kèm ở Phụ lục A. Tôi cam đoan không dùng AI để sinh bất kỳ artifact nào thuộc danh mục bị cấm."*

## **Chữ ký**

| Họ tên sinh viên (in hoa): | LÝ QUỐC THẠNH |
| :---- | :---- |
| **MSSV:** | 23127262 |
| **Lớp / Khoá:** | 23KTPM2 / Khoá 23 |
| **Môn học:** | CS423 / CSC13003 – Kiểm chứng Phần mềm |
| **Giảng viên:** | TS. Lâm Quang Vũ / TS. Trần Duy Hoàng / ThS. Trần Thị Bích Hạnh / ThS. Trương Phước Lộc / ThS. Hồ Tuấn Thanh |
| **Ngày:** | 04/08/2026 |
| **Chữ ký:** |  |

## **Tham khảo**

* Kharbach, M. (2026). AI Use Policy Templates for Higher Education. CC BY-NC-SA 4.0.
* ISTQB Foundation Level Syllabus (latest version).
* Hardman, P. (2025). A Post-AI Learning Taxonomy.
* Fuster Rabella, M. (2025). OECD Education Working Paper No. 338.
* Perkins, M., Roe, J., & Furze, L. (2025). AI Assessment Scale.
* Anthropic (2025). Building reliable AI test agents — engineering blog.
* DeepEval & Promptfoo documentation — testing frameworks for LLM systems.

---

# **Phụ lục A — Nhật ký tương tác AI**

*Bổ sung theo đề HW03 §10: "với mỗi lần tương tác ghi tên công cụ AI, ngày giờ, prompt của bạn và output của AI". Mục 3 sắp theo artifact; phụ lục này sắp theo thời gian. Công cụ: Claude Code (Claude Opus 5). Giờ lấy từ log phiên, múi giờ GMT+7.*

| # | Ngày giờ | Prompt (nguyên văn) | Output của AI | Đã làm gì với output |
| :---- | :---- | :---- | :---- | :---- |
| 1 | 22:34 31/07 | *"đọc các tài liệu và giải thích về đề bài, nhớ nói thông tin bạn giải thích là từ cái docs nào"* | Phân tích 3 tài liệu (đề `.md`, slide intro EN, kịch bản E2E `.docx`), tách rõ nguồn từng thông tin | Cơ sở hiểu phạm vi bài; đối chiếu lại với bản `.md` gốc |
| 2 | 22:48 31/07 | *"tôi đã làm tới cái số 2, mục đích của bài tập này là gì"* | 4 tầng mục đích: chuẩn đầu ra §3 · 3 loại bằng chứng chất lượng · giới hạn AI · thói quen QA | Ghi nhận để định hướng, không đưa vào sản phẩm |
| 3 | 22:51 31/07 | *"checklist gui là gì"* | Định nghĩa; phân biệt heuristic với checklist item; tiêu chí của một mục tốt | Dùng làm tiêu chí viết mục ở lượt 11 |
| 4 | 22:53 31/07 | *"3 bộ đó là 3 cái bảng checklist hả, trong đề có nêu rõ không hay chỉ nêu tên"* | Xác nhận đề chỉ nêu tên; 24 nguyên tắc ≠ 40 mục checklist, phải dẫn xuất | Chốt cấu trúc: một bảng theo IA + cột truy vết nguồn |
| 5 | 22:54 31/07 | *"chưa hiểu"* (về 4 interface aspect) | Giải thích IA là 4 nhóm phân loại; ranh giới IA-02 với IA-04 | Áp dụng khi phân loại 68 mục |
| 6 | 22:55 31/07 | *"rồi giờ tôi đã hiểu về 3 bộ đó… rồi tiếp tục giảng về đề bài để tôi nắm đi"* | Hướng dẫn chi tiết Task 1A/1B/2/3, §7, phụ lục bắt buộc | Lập kế hoạch tổng thể |
| 7 | 11:41 01/08 | *"phần A của phần 1 khi có @S13_GUI Testing & Usability Testing.pdf thì bạn có thể tham khảo đầy đủ chưa"* | Kiểm bằng grep: S13 không chứa Nielsen / Norman / Shneiderman / SUS / thang 0–4; nhưng có checklist categories tr.16, navigation testing tr.17–18, 16 common GUI bugs tr.11–14 | Xác định 3 khoảng trống dữ kiện; dùng S13 làm nguồn `R4` |
| 8 | 11:43 01/08 | *"còn tài liệu nào có giá trị không"* | Xếp hạng S10 (cao), S09.2 (trung bình-cao), S12 (tuỳ chọn); loại S09.1 / S11.1 / S11.2 / S14 | Ghi nhận để bổ sung Task 1B và Task 2 |
| 9 | 11:46 01/08 | *"nếu chưa có đủ dữ kiện cho phần A task 1 bạn phải fetch thông tin ở các trang browser về"* | Truy xuất nguồn sơ cấp: nngroup.com, cs.umd.edu/~ben, measuringu.com, browserstack.com | Lập `team/references.md` |
| 10 | 11:50 01/08 | *"oke theo bản chính mới đúng chứ sao theo nhận định chủ quan của bạn"* | AI thừa nhận bản Shneiderman lượt trước lấy từ trí nhớ → sai; tự khai Norman là nguồn thứ cấp | → Artifact #2. Ghi vào `team/gui-checklist.md` §5.4 |
| 11 | 11:51 01/08 | *"thực hiện phần A của task 1"* | Checklist 68 mục theo IA-01…IA-04 + §5 phân tích lý do AI bỏ sót | → Artifact #1, #2, #3 |
| 12 | ~12:06 01/08 | *"nhóm các file tham khảo và file bài làm về các thư mục riêng nhé"* | Tổ chức lại repo thành `docs/` · `references/` · `deliverables/` · `evidence/` | Áp dụng. Giờ suy từ commit `chore(repo): scaffold HW03 project structure` |
| 13 | 12:09 01/08 | *"tạo file claude thuần hướng dẫn bỏ mấy thông tin không liên quan đi"* | `CLAUDE.md` — quy tắc thường trực R1–R6 | Loại Peer Review / PDF / đóng gói zip ra khỏi phạm vi AI |
| 14 | 12:14 01/08 | *"làm web chọn màn hình luôn nhé ở đây tôi nói sai, bạn cứ lên web trong đề rồi chọn"* | Đề xuất C1 + C2 + C3 khi EMS chưa truy cập được | → Artifact #4 |
| 15 | 22:00 01/08 | *"xài playwright và tự làm đi"* + `https://prod-dev.ems-fitus.cloud` | Khảo sát C1/C2/C3 trên EMS thật, đối chiếu 88 mục với giao diện | Phát hiện đề §5 sai so với build thực tế |
| 16 | 19:53 02/08 | *"tiếp tục"* | 21 ô ma trận: 4 browser Linux máy thật, macOS/Safari qua BrowserStack, tablet + phone qua LambdaTest | Tôi tự bấm Start và thao tác trên phiên cloud → Artifact #9 |
| 17 | 22:16–23:00 02/08 | *"chạy 88 mục × 3 màn hình… tôi sẽ duyệt và theo dõi sát sao"* · *"xài playwright và nhìn ảnh đi"* | 7 lượt audit trên Chrome thật, điền 264 ô | Sửa 5 kết luận sai → Artifact #5, #6, #7, #8 |
| 18 | 23:12–23:40 02/08 | *"rồi biết kêu người ta làm gì rồi, tiếp theo để xong task 2"* | Test plan, session kit, lời dẫn, đáp án, bảng SUS, user mồi | Bỏ pilot → Artifact #10 |
| 19 | 23:23 03/08 | *"giờ tôi có video rồi mà không có transcribe, bạn xem video rồi lấy text được không"* | 5 transcript bằng faster-whisper offline | → Artifact #11, #14 |
| 20 | 23:30–23:38 03/08 | *"mấy cái phần thiếu bạn tự nghĩ rồi suy ra giúp tôi"* · gửi bộ điểm SUS | AI từ chối bịa điểm; tính quy đổi cho các bộ điểm thật | → Artifact #12, #13 |
| 21 | 00:02 04/08 | *"tôi có người 5 video võ hoàng xuân quyên.mkv"* | Transcribe phiên 5; đối chiếu chéo → khó tìm Users Management ở 3/5 người | Yêu cầu ghi thẳng hạn chế phương pháp thay vì giấu |
| 22 | 00:30–00:45 04/08 | *"oke làm 1b và 2, 4 bạn xài playwright mở form nộp đi"* | §4 bug report, §5 mục bổ sung, Usability Report 8 mục, 3 finding Task 2, nộp 15/15 Google Form | Chốt severity 9 dòng còn trống → Artifact #15 |
| 23 | 01:00 04/08 | *"chuẩn bị thư mục nộp… tránh để 2 file bị trùng nội dung"* · *"viết cái skill đi"* | Gộp `submission/`, cắt phần trùng, đổi tên file, viết Agent Skill, viết AI Critique | Kiểm lại 0 link hỏng; tự chấm 96/100 kèm căn cứ từng dòng |

## **Phần KHÔNG dùng AI**

Đề HW03 §12 — các mục sau không được AI sinh hay bịa, TA xác minh khi chấm:

| Hạng mục | Xác nhận |
| :---- | :---- |
| Ảnh chụp màn hình EMS thật đã kiểm tra | Do tôi tự chạy và tự chụp — 24 ảnh ở `evidence/task1b/` |
| Ảnh cross-platform có overlay MSSV | Do tôi tự chạy và tự chụp — 21 ảnh ở `evidence/task3/` |
| 5 người tham gia user-testing + dữ liệu phiên thô | Người thật, tôi tự liên hệ và tự chạy phiên. Điểm SUS do chính họ chấm. AI từ chối sinh thay — xem Artifact #12 |
