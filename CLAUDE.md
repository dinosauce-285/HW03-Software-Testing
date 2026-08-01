# CLAUDE.md — Hướng dẫn làm việc xuyên suốt HW03

> File này định nghĩa **quy trình bắt buộc** cho mọi phiên làm việc trên repo này.
> Claude phải đọc file này đầu mỗi phiên và **tự động thực hiện các quy tắc thường trực** ở §2 mà không cần được nhắc.

---

## 0. Thông tin cần điền *(điền một lần, dùng cho toàn bộ bài)*

| Trường | Giá trị |
|---|---|
| MSSV | `<điền>` |
| Họ tên | `<điền>` |
| Email MSSV *(dùng overlay ảnh + nộp Google Form)* | `<MSSV>@....edu.vn` |
| Kịch bản đã chọn | `<A / B / C / D>` |
| 3 màn hình đã chọn | `<điền>` |
| Thành viên nhóm | `<điền>` |
| Điểm tự đánh giá | `<000–100>` |

> ⚠️ Khi các ô trên còn `<điền>`, Claude phải **hỏi trước** thay vì tự đoán, và **không được bịa** MSSV hay tên người.

---

## 1. Bối cảnh

- **Môn:** Software Testing (AI-First 2026) · **Bài:** HW03 — GUI & Usability Testing
- **SUT:** EMS — https://promoter-starboard-prude.ngrok-free.dev/ *(chạy qua ngrok, dữ liệu **có thể bị reset** — chụp bằng chứng ngay khi làm)*
- **Admin:** `admin@gmail.com` / `Admin@123`
- **Google Form nộp findings:** https://forms.gle/CJQFQCAXcsDbXDMM9
- **Repo:** https://github.com/dinosauce-285/HW03-Software-Testing
- Đề bài đầy đủ: [`docs/2026.HW03.GUI Usability EMS_Vi.md`](docs/2026.HW03.GUI%20Usability%20EMS_Vi.md)
- Chính sách môn học: [`docs/___2026.Homework.Policies.md`](docs/___2026.Homework.Policies.md)

### Cấu trúc thư mục

```
docs/          tài liệu đề bài & SUT — CHỈ ĐỌC, không sửa
references/    nguồn tham khảo (slide S13, heuristics reference)
deliverables/  bài làm — nội dung sẽ nộp
evidence/      ảnh chụp bằng chứng (task1b / task2 / task3)
```

---

## 2. ⚙️ Quy tắc thường trực — Claude tự động làm, không cần nhắc

### R1. Ghi log AI sau mỗi lượt tương tác
Mỗi khi người dùng đưa một prompt dẫn tới **thay đổi nội dung bài làm**, Claude phải thêm một dòng vào [`deliverables/appendix/AI-Audit-Report.md`](deliverables/appendix/AI-Audit-Report.md) §Nhật ký tương tác gồm: **ngày giờ · công cụ · task · prompt nguyên văn · output tóm tắt · đã review/chỉnh gì**.
*Căn cứ: đề §10 — thiếu AI Audit Report → **0 điểm**.*

### R2. Commit sau mỗi bước hoàn thành
Sau khi hoàn tất một bước có ý nghĩa (một màn hình chạy xong, một phiên user test, một lần chạy cross-platform, một lần sửa checklist), Claude **đề xuất commit message** theo quy ước ở [`deliverables/appendix/Git-Commit-Log.md`](deliverables/appendix/Git-Commit-Log.md) và commit khi người dùng đồng ý.
*Căn cứ: đề §13 — một commit cho mỗi bước.*

### R3. Mọi phát hiện phải vào Findings Log + nhắc nộp Form
Bất kỳ lỗi hay vấn đề usability nào xuất hiện trong hội thoại → Claude thêm ngay một dòng vào [`deliverables/findings/Findings-Log.md`](deliverables/findings/Findings-Log.md) với đủ 9 cột, rồi **nhắc người dùng nộp lên Google Form** và điền cột "Gửi form lúc".
*Căn cứ: đề §7 — phải báo cáo **hai lần**, TA đối chiếu số lượng.*

### R4. Cập nhật trạng thái ở README
Khi một hạng mục chuyển trạng thái, Claude cập nhật bảng trạng thái trong [`README.md`](README.md).

### R5. Không bao giờ để output AI đi thẳng vào bài nộp
Mọi nội dung AI sinh phải kèm ghi chú **cần người verify trên EMS thật**. Claude phải chủ động nói rõ phần nào chưa được kiểm chứng.
*Căn cứ: đề §2 — "nộp thẳng output thô của AI là không chấp nhận được".*

### R6. Không bịa dữ liệu thuộc nhóm chống gian lận
Claude **tuyệt đối không** tự sinh: tên/liên hệ 5 người tham gia, nội dung phiên user testing, kết quả Pass/Fail của ô ma trận, ảnh chụp, hay số liệu SUS. Chỉ tạo **mẫu trống** để người dùng tự điền.
*Căn cứ: đề §12 — TA gọi ngẫu nhiên 2 người xác minh; mạo danh → **0 điểm Task 2**.*

### R7. Giữ tính nhất quán số liệu
Khi có thay đổi số mục checklist / số findings / số ô ma trận, Claude phải **cập nhật đồng thời** mọi nơi đang trích số đó (README, bảng tổng hợp, self-assessment) và verify lại bằng `grep`/đếm.

---

## 3. Ràng buộc cứng — vi phạm là mất điểm

| # | Ràng buộc | Nguồn |
|---|---|---|
| 1 | **Không nhận nộp trễ** | Đề §18 · Chính sách |
| 2 | **Thiếu bất kỳ tài liệu bắt buộc nào → 0 điểm** | Đề §18 |
| 3 | Mọi file `.md` phải có **bản PDF kèm theo** ("Save-As-PDF") | Chính sách |
| 4 | Zip **tối đa 20 file, mỗi file ≤ 20 MB** — dùng split-and-zip nếu vượt | Chính sách |
| 5 | **Lạm dụng link online trong bài nộp → 0 điểm.** Bằng chứng phải nằm **trong** zip, không được để trên Drive | Chính sách |
| 6 | Sao chép giữa sinh viên — **kể cả prompt** → 0 điểm cả hai bên | Đề §18 |
| 7 | Tên file zip: `<MSSV>_HW03_AI_GUIUsability_EMS_<Điểm3chữsố>.zip` | Đề §15 |
| 8 | Ảnh cross-platform **bắt buộc** overlay `MSSV@....edu.vn` cạnh URL EMS + định danh browser/OS/thiết bị | Đề §6, §12 |
| 9 | Chọn màn hình **quá đơn giản sẽ giới hạn điểm tối đa** dù làm đủ | Chính sách |

> **Xung đột đã ghi nhận:** Chính sách ghi tên file `StudentID_ExerciseID_SelfAssessedGrade.zip`, đề HW03 §15 ghi cụ thể hơn. → **Dùng bản của đề HW03** (quy định riêng thắng quy định chung).
>
> **Ngoại lệ hợp lệ của ràng buộc #5:** link video demo Agent Skill (YouTube) là **bắt buộc theo đề §8** — đây là link được yêu cầu, không phải lạm dụng.

---

## 4. Bản đồ công việc

```
Task 1A (nhóm) ─ checklist 68 mục ──┐
                                    ▼
CHỌN KỊCH BẢN ──→ CHỌN 3 MÀN HÌNH ──┬──→ Task 1B  chạy checklist
   (A/B/C/D)      (dùng chung cho    ├──→ Task 2   5 người thật
                   cả 3 task)        └──→ Task 3   ma trận tương thích
                                              │
                                   mọi phát hiện ▼
                        Findings-Log.md ──→ Google Form
                                              │
                                              ▼
                     zip: báo cáo + evidence + AI Audit + AI Critique
                          + Peer Review + git log + Agent Skill + README
```

| Hạng mục | Điểm | File |
|---|---|---|
| Task 1A — Checklist *(nhóm)* | 15 | `deliverables/task1a-checklist/GUI-Checklist.md` |
| Task 1B — Chạy checklist ≥3 màn hình | 15 | `deliverables/task1b-execution/Checklist-Execution.md` |
| Task 2 — User testing 5 người | 25 | `deliverables/task2-usability/01_*, 02_*` |
| Task 3 — Cross-platform | 25 | `deliverables/task3-crossplatform/Compatibility-Matrix.md` |
| Mục 4 — Findings | 10 | `deliverables/findings/Findings-Log.md` |
| Mục 5 — Agent Skill + video | 10 | *(chưa tạo)* |

---

## 5. Nhắc riêng theo từng task

**Task 1B** — mỗi ô phải có giá trị (`Passed`/`Failed`/`N/A`), không để trống. Ảnh **chỉ** chụp cho mục `Failed`. Tỉ lệ pass không tính `N/A` vào mẫu số.

**Task 2** — task scenario phải hướng **mục tiêu**, không chỉ đường. Chạy **pilot** trước, pilot không tính vào 5 người. Liên hệ người tham gia **ẩn 4 số giữa**. Người tham gia phải **ngoài lớp**.

**Task 3** — điều kiện phủ là *mỗi OS ≥1, mỗi browser ≥1, mỗi loại thiết bị ≥1, **cho từng màn hình***. Tối thiểu 5 ô/màn hình → 15 ảnh. Ghi rõ ô nào chạy real device / emulator / simulator.

**Phụ lục** — AI Critique phải **200–300 chữ** (đếm trước khi nộp). Peer Review là yêu cầu **chỉ có trong file chính sách**, rất dễ quên.

---

## 6. Trước khi nộp — checklist cuối

- [ ] Mọi `<điền>` trong §0 đã điền
- [ ] Không còn ô trống trong các bảng bài làm
- [ ] Số dòng Findings Log **=** số submission Google Form
- [ ] Mọi `.md` đã xuất PDF
- [ ] Ảnh cross-platform đủ overlay MSSV + URL + định danh thiết bị
- [ ] `git log` đã xuất ra `deliverables/appendix/git-log.txt`
- [ ] AI Audit Report đã đủ mọi lượt tương tác
- [ ] AI Critique 200–300 chữ
- [ ] Peer Review đã hoàn thành *(chính sách môn học)*
- [ ] Agent Skill + link video YouTube
- [ ] README có bảng tự đánh giá + test summary
- [ ] Zip ≤ 20 file, mỗi file ≤ 20 MB, đúng tên `<MSSV>_HW03_AI_GUIUsability_EMS_<xxx>.zip`
