# HW03 · Task 1 Phần A — Log prompt AI **cá nhân**

> ⚠️ **File này KHÔNG gửi cho nhóm.** Đây là nhật ký tương tác AI của riêng tôi, dùng làm nguồn cho `deliverables/appendix/AI-Audit-Report.md` (đề §10).
> Phần prompt **dùng chung để xây checklist** — thứ đề §6 và §15 yêu cầu nộp ở cấp nhóm — đã tách sang [`AI-Prompts-Nhom.md`](AI-Prompts-Nhom.md).
>
> **Vì sao tách:** đề §18 phạt *"sao chép giữa sinh viên — kể cả prompt — 0 điểm cho cả hai bên"*. Chỉ prompt xây checklist nhóm được phép giống nhau; các lượt hỏi để tự hiểu đề và phục vụ Task 1B/2/3 là của riêng từng người.
>
> Căn cứ: §6 Task 1A *(prompt sinh và tinh chỉnh checklist = sản phẩm nhóm)* · §10 *("Các prompt tạo checklist của nhóm cũng thuộc phần này")*.

**Công cụ AI:** Claude Code (model Claude Opus 5)
**Ngày phiên làm việc:** 01/08/2026
**Nguyên tắc áp dụng:** §2 — *"dẫn dắt AI qua từng bước của kỹ thuật đúng như đã dạy, dùng AI như một trợ lý có kỷ luật chứ không phải hộp đen"*

> ⚠️ **Cần hoàn thiện trước khi nộp:** điền **giờ cụ thể** vào cột `Giờ` theo lịch sử phiên của bạn, và bổ sung các lượt tương tác về sau (Task 1B, 2, 3) vào `deliverables/appendix/AI-Audit-Report.md`.

---

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

## 3. ⚠️ Việc nhóm **bắt buộc** phải làm trước khi nộp

`docs/2026.HW03.GUI Usability EMS_Vi.md` §2 quy định: *"Mọi kết quả AI sinh ra phải được sinh viên review kỹ… **nộp thẳng output thô của AI là không chấp nhận được**."*

- [x] **Đối chiếu checklist với EMS thật** — hoàn tất 01/08/2026 trên `https://prod-dev.ems-fitus.cloud`. Ba mục (G-17, N-17, S-20) sai so với sản phẩm thật đã được viết lại; chi tiết ở §6 của checklist
- [x] **Bổ sung 6 mục đặc thù pool C** (G-17, G-18, N-16, N-17, S-19, S-20) kèm lý do AI bỏ sót → §5.1 của checklist
- [x] Quy ước **N/A** và cách tính tỉ lệ pass — đã ghi ở đầu checklist

Còn lại:

- [ ] Kiểm các con số đặc thù kịch bản **A** trong mục F-18 (**4:3**, **24:9**), S-11 (**6 màu**), S-15 (**4 nhánh trạng thái**) — thành viên phụ trách kịch bản A xác nhận, vì các mục này không thuộc phạm vi 3 màn hình của kịch bản C
- [ ] **Thành viên khác trong nhóm review** và bổ sung mục của riêng họ theo kịch bản mình phụ trách
- [ ] Điền giờ cụ thể vào bảng §1 và chuyển toàn bộ log này vào `deliverables/appendix/AI-Audit-Report.md`

> Lưu ý §18: *"Sao chép giữa sinh viên — **kể cả prompt** — → 0 điểm cho cả hai bên."* Checklist được phép giống nhau trong cùng nhóm; **prompt và phần thực thi thì không**.
