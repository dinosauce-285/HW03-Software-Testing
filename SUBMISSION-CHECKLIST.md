# HW03 — Checklist nộp bài

> Tổng hợp **mọi** yêu cầu từ [`docs/2026.HW03.GUI Usability EMS_Vi.md`](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md) và [`docs/___2026.Homework.Policies.md`](docs/___2026.Homework.Policies.md).
> Mỗi mục ghi rõ nguồn để tự kiểm. Cập nhật ô ✅/🟡/⬜ khi tiến độ đổi.

**Sinh viên:** 23127262 – Lý Quốc Thạnh · **Kịch bản:** C — Admin quản lý người dùng
**3 màn hình:** C1 Users Management · C2 dialog Edit User · C3 dialog Create New User

---

## ⚠️ Bốn điều khoản 0 điểm — đọc trước

| Điều khoản | Nguồn |
|---|---|
| **Thiếu bất kỳ tài liệu bắt buộc nào → 0 điểm** | [đề §18 dòng 238](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L238) |
| Sao chép giữa sinh viên, **kể cả prompt** → 0 điểm **cả hai bên** | [đề §18 dòng 239](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L239) |
| **Không** nhận nộp trễ | [đề §18 dòng 237](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L237) · Policies "Late Submissions" |
| **Lạm dụng link online** trong bài nộp → 0 điểm cả bài | Policies "Online Links Policy" |
| Vi phạm quy định nộp bài → 0 điểm | Policies "Strict Compliance" |

> Ngoại lệ hợp lệ của điều khoản link: **link video demo Agent Skill** là thứ đề §8 bắt buộc phải có.

---

## A. Sản phẩm cấp nhóm — nộp một lần, mỗi thành viên giữ một bản

*Nguồn: [đề §15 dòng 198–200](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L198) · [đề §6 Task 1A dòng 95](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L95)*

| # | Hạng mục | File | Trạng thái |
|---|---|---|---|
| A1 | Checklist GUI dùng chung — **> 40 mục**, phủ IA-01…IA-04 | [`GUI-Checklist.md`](deliverables/task1a-checklist/GUI-Checklist.md) — **88 mục** | ✅ |
| A2 | Danh sách nguồn tham khảo | [`Task1A_Heuristics-Reference.md`](references/Task1A_Heuristics-Reference.md) — R1…R10 | ✅ |
| A3 | Các **prompt AI** dùng xây checklist | [`AI-Prompts-Nhom.md`](deliverables/task1a-checklist/AI-Prompts-Nhom.md) — 5 prompt | ✅ |
| A4 | Giải thích **vì sao AI bỏ sót** từng mục tự thêm | §5 của checklist — 3 nhóm nguyên nhân | ✅ |
| A5 | Nhóm review và chốt bản cuối | Pool A/C/D đã kiểm trên EMS thật; Pool B tích hợp 3 mục, **chưa có nhật ký kiểm chứng** | ✅ |

---

## B. Task 1B — Chạy checklist *(15đ)*

*Nguồn: [đề §6 dòng 100–101](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L100)*

| # | Yêu cầu | Trạng thái |
|---|---|---|
| B1 | Liệt kê **≥ 3 màn hình** và lý do chọn | ✅ [`Checklist-Execution.md §1`](deliverables/task1b-execution/Checklist-Execution.md) |
| B2 | Chạy checklist trên **từng** màn hình | ✅ 88 mục × 3 màn hình = **264 ô**, chạy live bằng Playwright |
| B3 | Mỗi mục có `Passed` / `Failed` / `N/A` — **không ô trống** | ✅ 63 Passed · 25 Failed · 176 N/A — đã đếm lại bằng `grep -c` |
| B4 | Cột **Notes** ghi lý do cho mỗi mục `Failed` | ✅ đủ 25/25 |
| B5 | Ảnh chụp **chỉ cho mục Failed** | ✅ 24 ảnh ở [`evidence/task1b/`](evidence/task1b/) |
| B6 | Mỗi lỗi có: màn hình · bước tái hiện · kỳ vọng vs thực tế · mức nghiêm trọng · ảnh | 🟡 10 phát hiện T1B đã đủ 9 cột ở Findings Log; **§4 bảng bug report trong file execution còn trống** |
| B7 | Bổ sung ≥ 2 mục của riêng mình *(không trùng thành viên khác)* | ⬜ **§5 còn trống** — 4 ứng viên đã tìm được từ lần audit, chờ chốt |

---

## C. Task 2 — User testing *(25đ)*

*Nguồn: [đề §6 dòng 105–125](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L105)*

### Giai đoạn 1 — Thiết kế

| # | Yêu cầu | Trạng thái |
|---|---|---|
| C1 | Task scenario **hướng mục tiêu**, không chỉ từng bước bấm | ✅ 2 việc nêu mục tiêu *(thêm thành viên mới · chặn truy cập của một thành viên)*, không chỉ đường — [`03_Session-Kit.md §1`](deliverables/task2-usability/03_Session-Kit.md) |
| C2 | Xác định chỉ số: task success · time on task · số lỗi/do dự · **SUS hoặc UEQ-S** | 🟡 task success + time on task + SUS đã có; **số lần do dự = 0 ở cả 5 phiên** vì người điều phối nói liên tục → đã ghi vào mục Hạn chế |
| C3 | Câu hỏi mở về **clarity · error recovery · speed · trust** | 🟡 mẫu đủ 4 chủ đề nhưng **trong phiên chỉ hỏi clarity**; 3 chủ đề còn lại phải hỏi bù qua form |
| C4 | Tuyển **5 người thật**, khớp hồ sơ người dùng, **ngoài lớp này** | ✅ 5 người, đủ 5 bản ghi màn hình |
| C5 | Liên hệ kiểm chứng được, **ẩn 4 số giữa** | ⬜ **chưa thu** số liên hệ của cả 5 người |
| C6 | Chạy **pilot** với 1 người phụ — **không tính** vào 5 người | ➖ **chọn không làm** — đề nêu là bước khuyến nghị, [§16 rubric](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md) chấm Task 2 theo *kịch bản + 5 phiên + phân tích*, không tính pilot |

### Giai đoạn 2 — Chạy 5 phiên

| # | Yêu cầu | Trạng thái |
|---|---|---|
| C7 | Nói rõ đang test **sản phẩm**, không test người dùng | ✅ có trong lời dẫn, nghe được trên bản ghi |
| C8 | Yêu cầu **think aloud** | ✅ cả 5 người vừa làm vừa nói |
| C9 | Quan sát trung lập, chỉ can thiệp khi hoàn toàn bế tắc | ❌ **người điều phối dẫn dắt** — *"Đúng rồi"* ở P1/P4, gợi ý thẳng cho P5 ở 02:01. Đã ghi vào mục Hạn chế, không giấu |
| C10 | Ghi màn hình + note có cấu trúc | ✅ 5 file `.mkv` + 5 transcript ở [`evidence/task2/`](evidence/task2/) |
| C11 | Kết phiên: điền SUS/UEQ-S rồi hỏi probe | 🟡 SUS thu **sau phiên** qua tin nhắn, không phải ngay cuối phiên |

### Giai đoạn 3 — Phân tích

| # | Yêu cầu | Trạng thái |
|---|---|---|
| C12 | Chấm SUS/UEQ-S 5 người, lập bảng chỉ số | 🟡 **4/5** — TB 79,4 · trung vị 80,0 · sd 10,6. Thiếu điểm của P5 |
| C13 | Gom điểm đau, **tách lỗi đơn lẻ khỏi vấn đề thiết kế hệ thống** | ✅ [`05_Gap-Analysis.md`](deliverables/task2-usability/05_Gap-Analysis.md) — *khó tìm Users Management* **3/5 người** → vấn đề hệ thống; các lỗi còn lại là đơn lẻ |
| C14 | Xếp hạng theo **severity 0–4** | ⬜ chờ viết trong Usability Report |
| C15 | Usability Report: kịch bản · bảng 5 người (đã che) · bảng chỉ số · phát hiện xếp hạng **kèm ảnh mỗi mục** · khuyến nghị theo ưu tiên | ⬜ [`02_Usability-Report.md`](deliverables/task2-usability/02_Usability-Report.md) chưa viết |

> 🔴 [đề §6 dòng 125](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L125): **TA gọi ngẫu nhiên 2 người xác minh. Mạo danh → 0 điểm Task 2.**

---

## D. Task 3 — Cross-platform *(25đ)*

*Nguồn: [đề §6 dòng 129–137](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L129)*

| # | Yêu cầu | Trạng thái |
|---|---|---|
| D1 | 3 OS · 5 browser · 3 loại thiết bị | ✅ Linux/macOS/Android · Chrome/Firefox/Edge/Opera/Safari · Desktop/Tablet/Phone |
| D2 | Mỗi chiều ≥ 1 lần **cho từng màn hình** | ✅ 7 ô × 3 màn hình = 21 |
| D3 | Đánh **Pass/Fail** mỗi ô | ✅ 18 Pass / 3 Fail |
| D4 | Ảnh **mỗi ô** trong ma trận | ✅ 21 ảnh |
| D5 | Overlay `MSSV@....edu.vn` cạnh URL EMS + định danh browser/OS/thiết bị | ✅ |
| D6 | Ô Fail kèm ghi chú loại lỗi | ✅ |
| D7 | Ghi rõ ô nào **real device / emulator / simulator** | ✅ §1 của ma trận |

---

## E. Findings — nộp hai lần *(10đ)*

*Nguồn: [đề §7 dòng 141–146](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L141)*

| # | Yêu cầu | Trạng thái |
|---|---|---|
| E1 | File tổng hợp đủ **9 cột** | ✅ [`Findings-Log.md`](deliverables/findings/Findings-Log.md) |
| E2 | Nộp **từng phát hiện** lên Google Form bằng email MSSV | ⬜ **0/3 — nộp một lần cuối** |
| E3 | Điền **Thời điểm gửi form** cho từng dòng | ⬜ |
| E4 | **Số dòng log = số submission form** | ⬜ hiện 3 ↔ 0 |

---

## F. Agent Skill *(10đ)*

*Nguồn: [đề §8 dòng 150–151](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L150)*

| # | Yêu cầu | Trạng thái |
|---|---|---|
| F1 | Skill áp dụng: chạy checklist GUI · đánh giá heuristic · chạy ma trận tương thích | ⬜ |
| F2 | **Video demo YouTube** end-to-end trên một màn hình/luồng hoàn chỉnh | ⬜ |

---

## G. Phụ lục bắt buộc

| # | Hạng mục | Nguồn | Trạng thái |
|---|---|---|---|
| G1 | **AI Audit Report** — mỗi tương tác: công cụ · ngày giờ · prompt · output | [đề §10 dòng 168](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L168) | 🟡 khung có, cần điền giờ |
| G2 | Khai báo *"I use AI tools for the following tasks"* | [đề §10 dòng 168](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L168) | ✅ |
| G3 | **AI Critique — 200–300 chữ**, đếm trước khi nộp | [đề §11 dòng 174](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L174) | ⬜ nguyên liệu đã có |
| G4 | **Git commit log** dạng file văn bản | [đề §13 dòng 187](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L187) | ⬜ chạy lệnh xuất |
| G5 | Một commit **cho mỗi bước** của quy trình | [đề §13 dòng 186](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L186) | ✅ đang làm đúng |
| G6 | **Peer Review** — cross-review, có phản biện xây dựng | Policies "Peer Reviews" | ⬜ *(bạn tự làm)* |
| G7 | **README.md** — bảng tự đánh giá + test summary | [đề §15 dòng 209](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L209) | 🟡 khung có, chờ số cuối |

**README test summary phải có đủ:** kịch bản · màn hình đã kiểm · số mục checklist thiết kế/đã chạy/pass/fail · số lỗi · số người tham gia (5) · số vấn đề usability theo severity · số ô tương thích · link video demo.

---

## H. Định dạng & đóng gói

*Nguồn: [đề §15 dòng 195](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L195) · Policies "File Format & Presentation Requirements"*

| # | Yêu cầu | Trạng thái |
|---|---|---|
| H1 | Bài viết bằng **Markdown** | ✅ |
| H2 | **Mọi file .md phải có bản PDF** ("Save-As-PDF") | ⬜ *(bạn tự làm)* |
| H3 | Báo cáo chính: Markdown **+** PDF | ⬜ |
| H4 | AI Critique và AI Audit Report: Markdown **+** PDF | ⬜ |
| H5 | Tên zip `23127262_HW03_AI_GUIUsability_EMS_<xxx>.zip` — điểm tự đánh giá 3 chữ số | ⬜ *(bạn tự làm)* |
| H6 | Zip **≤ 20 file**, mỗi file **≤ 20 MB** — dùng split-and-zip nếu vượt | ⬜ *(bạn tự làm)* |
| H7 | Bằng chứng nằm **trong** zip, không để trên Drive rồi dán link | ⬜ |
| H8 | Nộp lên **Moodle** | ⬜ |

> Xung đột đã xử lý: Policies ghi tên zip `StudentID_ExerciseID_SelfAssessedGrade.zip`, đề §15 ghi cụ thể hơn → **dùng bản của đề**.

---

## I. Nội dung .zip cá nhân — đối chiếu cuối

*Nguồn: [đề §15 dòng 201–210](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L201)*

- [ ] Báo cáo chính (MD + PDF): kịch bản · ≥3 màn hình và lý do · kết quả checklist từng màn · Usability Report · báo cáo cross-platform
- [ ] Bằng chứng user-testing: kịch bản tác vụ · bảng 5 người (đã che) · note từng phiên · SUS/UEQ-S · bảng chỉ số · bản ghi màn hình nếu có
- [ ] Bug & Usability Findings Log — khớp với form
- [ ] Ảnh cross-browser/cross-platform có overlay MSSV
- [ ] AI Critique + AI Audit Report (MD + PDF)
- [ ] Git commit log (file văn bản)
- [ ] Agent Skill + link video demo
- [ ] README.md có bảng tự đánh giá + test summary
- [ ] Checklist nhóm + nguồn tham khảo + prompt AI *(bản giữ riêng)*

---

## J. Sau khi nộp

| # | Việc | Nguồn |
|---|---|---|
| J1 | Sẵn sàng **vấn đáp 5–7 phút** — 30% sinh viên bị gọi ngẫu nhiên trong tuần sau deadline | [đề §14 dòng 191](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L191) |
| J2 | Giữ liên lạc 5 người tham gia — TA có thể gọi xác minh 2 người | [đề §12 dòng 182](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md#L182) |

---

## Tổng tiến độ

| Phần | Điểm | Trạng thái |
|---|---|---|
| A · Task 1A checklist nhóm | 15 | ✅ chờ nhóm chốt |
| B · Task 1B chạy checklist | 15 | 🟡 264/264 ô xong; còn §4 bug report + §5 mục bổ sung |
| C · Task 2 user testing | 25 | 🟡 5 phiên + 5 transcript + phân tích xong; còn SUS của P5, liên hệ đã che, 3 câu probe, và Usability Report |
| D · Task 3 cross-platform | 25 | ✅ **xong** |
| E · Findings | 10 | 🟡 log xong, chưa nộp form |
| F · Agent Skill | 10 | ⬜ chưa bắt đầu |
| G · Phụ lục | bắt buộc | 🟡 khung có, chờ số cuối |
| H · Đóng gói | bắt buộc | ⬜ cuối cùng |
