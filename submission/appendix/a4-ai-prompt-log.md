# Nhật ký tương tác AI

> **Đề HW03 §10:** *"nếu có dùng AI, khai báo 'I use AI tools for the following tasks', và **với mỗi lần tương tác ghi: tên công cụ AI, ngày giờ, prompt của bạn và output của AI**."*

**Sinh viên:** 23127262 – Lý Quốc Thạnh · **Lớp:** 23KTPM2 / Khoá 23

**Khai báo:** *I use AI tools for the following tasks* — xây checklist GUI, chạy đo giao diện bằng script, soạn khung tài liệu, gỡ băng phiên user testing, và tính toán số liệu.

**Công cụ:** Claude Code (model Claude Opus 5). Giờ lấy từ log phiên làm việc, múi giờ GMT+7.

Bảng này sắp theo **thời gian**. Phần đánh giá chất lượng từng artifact do AI sinh — verdict VALID / INVALID / INCOMPLETE — nằm ở [`a3-ai-audit-report.md`](a3-ai-audit-report.md) Mục 3.

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

## Phần KHÔNG dùng AI

Đề HW03 §12 — các mục sau không được AI sinh hay bịa, TA xác minh khi chấm:

| Hạng mục | Xác nhận |
| :---- | :---- |
| Ảnh chụp màn hình EMS thật đã kiểm tra | Do tôi tự chạy và tự chụp — 24 ảnh ở `evidence/task1b/` |
| Ảnh cross-platform có overlay MSSV | Do tôi tự chạy và tự chụp — 21 ảnh ở `evidence/task3/` |
| 5 người tham gia user-testing + dữ liệu phiên thô | Người thật, tôi tự liên hệ và tự chạy phiên. Điểm SUS do chính họ chấm. AI từ chối sinh thay — xem Artifact #12 |
