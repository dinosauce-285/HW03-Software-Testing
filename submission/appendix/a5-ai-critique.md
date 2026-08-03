# AI Critique

> Đề §11: *"AI sai, thiên lệch hay thiếu ở đâu? Vì sao nó không bắt được vấn đề? Bạn rút ra nguyên tắc gì về việc cộng tác với AI qua bài này?"*

**Sinh viên:** 23127262 – Lý Quốc Thạnh · **Số chữ:** 291 *(yêu cầu 200–300)*

---

## Bài viết

AI dựng được bộ khung checklist rất nhanh, nhưng bốn thất bại của nó đều lộ ra khi tôi đối chiếu với nguồn gốc và với sản phẩm thật.

**Dữ liệu lỗi thời.** AI trả về bản Shneiderman cũ — "Enable frequent users to use shortcuts" và "Support internal locus of control". Bản 6th ed. của chính tác giả là "Seek universal usability" và "Keep users in control". Sai này không vô hại: nó khiến checklist mất hẳn nhánh accessibility và đa ngôn ngữ. AI lặp lại phiên bản phổ biến nhất trên web, không phải phiên bản đúng nhất.

**Thiên lệch nguồn tri thức.** AI bỏ sót nhóm "Common GUI bugs" cổ điển và mục "proper focus order" — thứ bài giảng S13 đã dạy. Tri thức của nó nghiêng về bài viết UX hiện đại hơn giáo trình kiểm thử.

**Mù về sản phẩm.** 24 trong 38 mục tôi tự thêm là mục gắn với EMS. AI không nhìn thấy hệ thống nên không thể sinh chúng.

**Đoán sai mức tác động.** Nghiêm trọng nhất là chỗ này. Checklist chấm lỗi "không phản hồi sau khi lưu" ở mức 3. Nhưng cả 5 người dùng thật đều nói họ hoàn toàn chắc chắn, vì bảng danh sách tự cập nhật trước mắt. Tôi hạ xuống mức 2. AI suy luận đúng về mặt kỹ thuật và sai về mặt trải nghiệm.

**Nguyên tắc rút ra:** AI không tự khai giới hạn của nó — tôi phải hỏi thẳng "nguồn này sơ cấp hay thứ cấp" thì nó mới thừa nhận. Nên tôi coi output của AI là **giả thuyết cần kiểm chứng**, không phải kết quả. Ba thứ AI không thể tự có: nguồn gốc, sản phẩm thật, và người dùng thật.

---

## Nguyên liệu — những sự việc thực sự xảy ra

| # | Sự việc | Nguồn ghi nhận |
|---|---|---|
| 1 | AI trả về **bản Shneiderman lỗi thời** (Rule 2 "Enable frequent users to use shortcuts", Rule 7 "Support internal locus of control"). Bản chính chủ 6th ed. là "Seek universal usability" và "Keep users in control" → AI vì thế **bỏ luôn nhánh accessibility và i18n** khỏi checklist | [`../team/gui-checklist.md`](../team/gui-checklist.md) §5.4 |
| 2 | AI bỏ sót nhóm **"Common GUI bugs" cổ điển** của slide S13 tr.11–14 *(incorrect field default, control state alignment with state of data…)* vì tri thức nghiêng về bài viết UX hiện đại | gui-checklist §5.3 |
| 3 | AI bỏ sót **"proper focus order"** — thứ **bài giảng đã dạy** ở S13 tr.18 — do prompt không đưa bài giảng vào ngữ cảnh | gui-checklist §5.2 |
| 4 | 24/38 mục bổ sung thuộc nhóm **[EMS]** — AI không nhìn thấy sản phẩm nên không thể sinh mục về tỉ lệ 4:3, 6 màu trạng thái, 4 nhánh kết quả check-in… | gui-checklist §5.1 |
| 5 | AI chỉ tự khai chất lượng nguồn *(sơ cấp / thứ cấp)* **sau khi bị hỏi thẳng** — Norman là nguồn thứ cấp | [`a4-ai-prompt-log.md`](a4-ai-prompt-log.md) — lượt #10 |
| 6 | **Đoán sai mức tác động:** checklist chấm `T1B-10` *(không phản hồi sau khi lưu)* mức **3**; probe *trust* cho kết quả **5/5 người dùng thật thấy hoàn toàn chắc chắn** → hạ xuống mức **2** | [`../02-usability-report.md`](../02-usability-report.md) §4.4 và `U-03` |
| 7 | Script audit do AI viết có **khoá trùng trong object literal**, làm 11 ô bị ghi đè âm thầm và để trống. Chỉ phát hiện khi **đếm lại bằng `grep -c`**, không phát hiện được bằng đọc | [`a3-ai-audit-report.md`](a3-ai-audit-report.md) — Artifact #5–#8 |
| 8 | Ba kết luận sai phải sửa tay: `F-01` báo "thiếu nhãn" trong khi nhãn **có** nhưng không gắn `for`/`id`; `F-04` báo "không phát hiện được lỗi" vì màu khai bằng `lab()`; `G-01` chấm Failed cho dialog trong khi đúng phải là `N/A` | [`a3-ai-audit-report.md`](a3-ai-audit-report.md) — Artifact #5–#8 |
