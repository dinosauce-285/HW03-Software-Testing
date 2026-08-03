# Task 2 — Usability Report

> Yêu cầu đề §6 Task 2 Giai đoạn 3: báo cáo gồm **kịch bản · bảng 5 người tham gia (đã che) · bảng chỉ số · danh sách phát hiện đã xếp hạng kèm ảnh · khuyến nghị theo ưu tiên**.

**Sinh viên:** 23127262 – Lý Quốc Thạnh · **Kịch bản:** C — Admin quản lý người dùng · **Ngày chạy:** 03/08/2026
**Hệ thống:** EMS `https://prod-dev.ems-fitus.cloud` · **Màn hình:** C1 Users Management · C2 dialog Edit User · C3 dialog Create New User

---

## 1. Tóm tắt điều hành

Năm người ngoài ngành CNTT được yêu cầu tự khám phá khu quản trị EMS và hoàn thành hai việc có mục tiêu rõ ràng: **thêm một thành viên mới** và **chặn truy cập của một thành viên hiện có**. Cả 5 đều làm xong cả hai việc, điểm SUS trung bình **77,0** — trên mốc trung bình ngành 68.

Nhưng con số trung bình che mất điều quan trọng nhất: **3 trong 5 người không tự tìm được màn hình Users Management**, một người phải được gợi ý thẳng mới vào được. Đúng ba người đó cũng là ba người cho điểm SUS thấp nhất. Điểm số tách thành hai cụm cách nhau ~18 điểm, và ranh giới giữa hai cụm chỉ do **một** biến quyết định: có tìm được đường vào hay không.

**Khuyến nghị số 1:** thêm breadcrumb và đưa lối vào Users Management ra chỗ nhìn thấy ngay từ dashboard. Đây là thay đổi rẻ nhất có khả năng kéo cụm điểm thấp lên ngang cụm điểm cao.

| Chỉ số tổng quan | Giá trị |
|---|---|
| Số người tham gia | **5** *(ngoài lớp, ngoài ngành CNTT)* |
| Tỉ lệ hoàn thành tác vụ | **10/10 lượt = 100 %** *(1 lượt không hợp lệ do lỗi chuẩn bị dữ liệu — xem §8)* |
| Thời gian trung bình việc 1 | **2 phút 28 giây** |
| Thời gian trung bình việc 2 | **50 giây** |
| Điểm SUS trung bình | **77,0** *(trung vị 72,5 · sd 11,0)* |
| Số phát hiện severity ≥ 3 | **2** trên tổng 5 |

---

## 2. Kịch bản tác vụ đã dùng

Kịch bản viết theo **mục tiêu**, không chỉ đường. Người tham gia được cho vai trò và kết quả cần đạt, còn đường đi thì họ tự tìm — nguyên văn ở [`P2 §2 Lời thoại`](appendix/a1-session-notes.md).

**Bối cảnh cho người tham gia:**
> *"Bạn là quản trị viên của hệ thống quản lý sự kiện một khoa. Đây là tài khoản admin, mời bạn tự khám phá."*

| Việc | Yêu cầu giao cho người tham gia | Đường đi đúng *(không tiết lộ)* |
|---|---|---|
| **Việc 1** | *"Có một thành viên mới cần được đưa vào hệ thống. Thông tin ở khung chat. Nhờ bạn thêm người này vào."* | Sidebar → **Users Management** → **Add User** → điền 8 trường → **Create User** |
| **Việc 2** | *"Có một thành viên tên Hùng Lê Văn cần bị **ngừng quyền truy cập** — lưu ý là ngừng hoạt động, **không phải xoá** khỏi hệ thống."* | Users Management → tìm `Hùng` → icon bút chì → tắt công tắc **Active** → **Save Changes** |

**Dữ liệu giao cho việc 1:** `Minh` / `Trần Văn` / `minhtv.test+pX@example.com` / vai trò Student / mã `99001234` / mật khẩu `Clb@2026`

**Vì sao chọn hai việc này:** việc 1 phủ **C3 dialog Create New User** *(form 8 trường, có validation, có dropdown)*; việc 2 phủ **C1** *(tìm kiếm trong bảng)* và **C2 dialog Edit User** *(công tắc trạng thái)*. Việc 2 cố ý phân biệt **vô hiệu hoá** với **xoá** — hai hành động nằm cạnh nhau trong giao diện và hậu quả rất khác nhau.

---

## 3. Người tham gia

Cả 5 người **ngoài lớp học phần này** và **ngoài ngành CNTT**. Liên hệ đã ẩn 4 số giữa theo yêu cầu đề §6; số đầy đủ không lưu trong repo, giữ riêng để đối chiếu khi TA xác minh.

| # | Họ tên | Vai trò / bối cảnh | Liên hệ *(ẩn 4 số giữa)* | Ngày chạy | Bản ghi |
|---|---|---|---|---|---|
| P1 | Nguyễn Thành Dâng | Sinh viên ngành Du lịch | `0919****52` | 03/08/2026 | `Nguyễn Thành Dâng.mkv` — 3:55 |
| P2 | Trương Thành Đạt | Sinh viên ngành Kinh tế | `0989****57` | 03/08/2026 | `Trương Thành Đạt.mkv` — 5:25 |
| P3 | Tô Minh Thắng | Sinh viên ngành Kinh tế | `0922****79` | 03/08/2026 | `Tô Minh Thắng.mkv` — 6:19 |
| P4 | Ngô Bảo Long | Sinh viên ngành Kinh tế đối ngoại | `0369****70` | 03/08/2026 | `Ngô Bảo Long.mkv` — 6:07 |
| P5 | Võ Hoàng Xuân Quyên | Sinh viên ngành Y Dược · **đang quản lý một tiệm nước** | `0899****28` | 03/08/2026 | `Võ Hoàng Xuân Quyên.mkv` — 6:00 |

Bản ghi màn hình và bản gỡ băng đầy đủ ở [`evidence/task2/`](evidence/task2/).

> **Về độ khớp hồ sơ người dùng:** màn hình C1–C3 dành cho **quản trị viên**. Bốn trong năm người chưa từng quản lý nhân sự hay tài khoản; riêng **P5 đang quản lý một tiệm nước** — có kinh nghiệm thật với việc quản người và phân vai, đúng thứ màn hình Users Management mô hình hoá. P5 nói *"tôi cũng không có quản lý **cái này**"*, tức chưa quen **phần mềm** quản trị chứ không phải chưa quen việc quản lý.

---

## 4. Bảng chỉ số

### 4.1 Theo từng người

| Người | Việc 1 | Việc 2 | Time on task — việc 1 | Việc 2 | Số lỗi | Do dự ≥5s | Can thiệp | SUS |
|---|---|---|---|---|---|---|---|---|
| **P1** Dâng | ✅ | ✅ | **1:45** | 0:25 | 0 | 0 | 2 *(xác nhận "đúng rồi")* | **90,0** |
| **P2** Đạt | ✅ | ✅ | 1:57 | **1:10** | 2 | 0 | 1 | **87,5** |
| **P3** Thắng | ✅ | ✅ | **3:31** | 0:51 | 2 | 0 | 1 | **67,5** |
| **P4** Long | ✅ | ⚠️ | 2:52 | *0:23* | 1 | 0 | 1 | **72,5** |
| **P5** Quyên | ✅ | ✅ | 2:13 | 0:43 | 1 | 0 | **1 gợi ý thẳng** | **67,5** |

⚠️ **Việc 2 của P4 không so sánh được**: user mồi `Hùng Lê Văn` đã ở trạng thái Inactive sẵn từ phiên trước, nên P4 làm thao tác ngược lại *(bật lại hoạt động)*. Lỗi chuẩn bị dữ liệu của người điều phối, không phải lỗi của P4 hay của EMS. Con số 0:23 bị loại khỏi mọi phép tính trung bình.

**Cách đo time on task:** lấy từ mốc thời gian trong bản gỡ băng — tính từ lúc người điều phối nói xong yêu cầu đến lúc người tham gia hoàn tất. Đây là **cận trên**: khoảng thời gian đó có tính cả những lúc người điều phối xen vào nói. Sai số ước tính ±5 giây.

**Vì sao "do dự ≥5s" bằng 0 ở cả 5 phiên:** chỉ số này đo bằng khoảng lặng ≥5 giây trong bản ghi. Người điều phối nói gần như liên tục nên **không có khoảng lặng nào để đo** — con số 0 phản ánh cách chạy phiên, **không** phải người tham gia không do dự. Chi tiết ở §8.

### 4.2 Tổng hợp

| Chỉ số | Việc 1 — thêm thành viên | Việc 2 — chặn truy cập |
|---|---|---|
| % hoàn thành | **5/5 = 100 %** | **4/4 hợp lệ = 100 %** |
| % hoàn thành **không cần can thiệp** | **0/5 = 0 %** | 4/4 = 100 % |
| Thời gian trung bình *(mean)* | **2:28** | 0:50 |
| Thời gian trung vị *(median)* | 2:13 | 0:47 |
| Khoảng *(min–max)* | 1:45 – **3:31** | 0:25 – 1:10 |
| Độ lệch chuẩn | 0:44 | 0:19 |
| Số lỗi trung bình | **1,2 lỗi/người** | 0 |

**SUS trung bình cả phiên: 77,0** — trung vị 72,5 · sd 11,0 · **+9,0** so mốc trung bình ngành 68.

**Hai con số đáng chú ý:**

**① Việc 1 tốn gấp 3 lần việc 2** *(2:28 so với 0:50)*, dù việc 1 chỉ là điền form còn việc 2 phải tìm kiếm rồi mở dialog rồi lưu. Chênh lệch này gần như hoàn toàn nằm ở khâu **tìm đường vào màn hình** — sau khi vào được, thao tác của cả hai việc đều nhanh.

**② Không ai hoàn thành việc 1 mà không cần can thiệp.** Cả 5 phiên người điều phối đều phải xác nhận hoặc gợi ý ít nhất một lần. Đây vừa là hạn chế phương pháp *(§8)*, vừa là tín hiệu: giao diện không đủ tự giải thích để người mới đi một mình.

### 4.3 Chi tiết chấm SUS

Bảng đầy đủ 10 câu × 5 người, cách quy đổi và phân tích theo từng câu ở [`a2-sus-scoring.md`](appendix/a2-sus-scoring.md).

| | P1 | P2 | P3 | P4 | P5 |
|---|---|---|---|---|---|
| **Tổng thô (0–40)** | 36 | 35 | 27 | 29 | 27 |
| **× 2,5 → SUS** | **90,0** | **87,5** | **67,5** | **72,5** | **67,5** |

**Phân bố tách hai cụm, không phải một dải liên tục:**

| Cụm | Người | SUS | Đặc điểm chung |
|---|---|---|---|
| **Cao** | P1 · P2 | 87,5 – 90,0 | Tìm ra Users Management nhanh |
| **Thấp** | P4 · P3 · P5 | 67,5 – 72,5 | **Đều vấp ở khâu tìm màn hình** |

Cách nhau **~18 điểm SUS**. Trung vị 72,5 thấp hơn trung bình 77,0 → phân bố lệch xuống, 3/5 nằm nửa dưới. **Thứ tự SUS trùng khớp hoàn toàn với mức ma sát quan sát được trên video** — hai nguồn dữ liệu độc lập *(hành vi và tự đánh giá)* chỉ về cùng một kết luận.

**Đọc theo từng câu** *(trung bình sau quy đổi, thang 0–4)*:

| Câu | TB | Ý nghĩa |
|---|---|---|
| **Q6** *"quá nhiều điểm thiếu nhất quán"* | **2,8** | Câu **duy nhất dưới 3,0** — khớp với `U-02` nhãn Họ/Tên hoán đổi |
| **Q3** *"dễ sử dụng"* | **3,4** | Câu **mạnh nhất** — form không phải vấn đề |
| **Q9** *"tự tin khi sử dụng"* | 3,0 | Thấp hơn Q3 → **thấy dễ nhưng không tự tin**, xem `U-05` |

---

### 4.4 Câu hỏi mở sau phiên

Bốn chủ đề đề §6 yêu cầu. Chủ đề *clarity* hỏi ngay trong phiên; ba chủ đề còn lại hỏi bù qua tin nhắn sau phiên.

| Chủ đề | Câu hỏi | Kết quả — 5/5 người đã trả lời |
|---|---|---|
| **Clarity** | *"Trong quá trình làm 2 việc, bạn thấy có khó khăn gì không?"* | Khó khăn duy nhất được nêu đi nêu lại là **tìm đường vào màn hình quản lý** — xem `U-01`. Phần điền form được cả 5 người đánh giá tích cực |
| **Error recovery** | *"Lúc làm sai hoặc lỡ tay, bạn có biết cách quay lại không?"* | **5/5 — "có, luôn biết"**. Không ai gặp khó khi quay lại |
| **Speed** | *"Có bước nào khiến bạn thấy chờ lâu hoặc thừa không?"* | **1/5** — P3 Thắng nêu **tìm kiếm chậm**, khớp với lời trong phiên *"tìm kiếm khá là lâu"* `[05:52]`. 4 người còn lại không có ý kiến |
| **Trust** | *"Sau khi bấm lưu, bạn có chắc hệ thống đã ghi nhận chưa? Vì sao?"* | **5/5 — "chắc"**, lý do đưa ra đều là **"nhìn vào giao diện thì thấy"** |

**Câu *trust* cho kết quả ngược với giả thuyết ban đầu.** Task 1B đo được rằng hệ thống không hề có toast hay thông báo sau thao tác ghi *(`T1B-10`)*, nên tôi dự đoán người dùng sẽ thấy bất an. Thực tế cả 5 người đều nói họ **chắc chắn** — vì bảng danh sách tự cập nhật ngay trước mắt, và với họ đó đã là bằng chứng đủ.

Kết quả này làm **hạ mức nghiêm trọng của `U-03` từ 3 xuống 2** — chi tiết ở §5. Đây là ví dụ rõ nhất trong cả bài về việc **checklist và người dùng thật không phải lúc nào cũng nói cùng một điều**: khiếm khuyết kỹ thuật có thật và đo được, nhưng tác động lên trải nghiệm thực tế nhỏ hơn nhiều so với dự đoán.

**Hai kết quả *error recovery* và *speed* cũng thu hẹp phạm vi một số phát hiện:**
- Không ai vấp ở khâu quay lại → `T1B-08` *(Esc xoá sạch dữ liệu đang gõ)* có thật nhưng **không phiên nào chạm phải**; nó vẫn là rủi ro, chỉ là chưa được kiểm chứng bằng người dùng
- Chỉ 1/5 nêu vấn đề tốc độ → **tìm kiếm chậm là trải nghiệm cá biệt**, chưa đủ ngưỡng 3/5 để gọi là vấn đề hệ thống

---

## 5. Phát hiện đã xếp hạng

> Đề §6: gom điểm đau tương tự, **tách lỗi đơn lẻ khỏi vấn đề thiết kế hệ thống**, xếp hạng severity 0–4.
> S13 (tr.51): *criticality = severity **AND** probability of occurrence* → giữ thêm cột **Gặp phải**.

**Quy tắc phân loại:** ≥ 3/5 người gặp cùng một chỗ → **vấn đề thiết kế hệ thống**; 1/5 → cân nhắc là **trường hợp đơn lẻ**, trừ khi bản chất khiếm khuyết là lỗi hệ thống mà chỉ tình cờ một người nhận ra.

| ID | Phát hiện | Màn hình | Heuristic vi phạm | Gặp phải | Loại | **Severity** | Bằng chứng |
|---|---|---|---|---|---|---|---|
| **U-01** | Không tự tìm được đường vào Users Management | C1 | Nielsen #6 *Recognition rather than recall* · #7 | **3/5** | **Hệ thống** | **3** | `P3` 01:19–01:49 · `P4` 05:46 · `P5` 01:40, 05:48 |
| **U-02** | Nhãn / placeholder / thông báo lỗi của ô Họ và Tên **nói ngược nhau** | C3 | Nielsen #2 *Match system and real world* · #9 | 1/5 tự phát hiện | **Hệ thống** *(bug)* | **3** | `P4` 05:01–05:16 · [`T1B-01`](evidence/task1b/T1B-01-swapped-name-validation.png) |
| **U-03** | Không có xác nhận tường minh sau khi lưu — người dùng phải tự suy ra kết quả từ bảng danh sách | C1 · C2 · C3 | Nielsen #1 *Visibility of system status* | 0/5 *(không ai thấy bất an)* | **Hệ thống** | **2** | Probe *trust* 5/5 · [`T1B-10`](evidence/task1b/C3-S-01-no-toast.png) |
| **U-04** | Lỗi trùng dữ liệu chỉ báo **sau khi** submit cả form, phải sửa rồi submit lại | C3 | Nielsen #5 *Error prevention* | **3/5** | **Hệ thống** | **2** | `P2` 03:01–03:10 · `P3` · `P4` 03:25 · `P5` 02:39 |
| **U-05** | Điền mã số thành viên nhầm vào ô Số điện thoại | C3 | Nielsen #6 · WCAG 1.3.1 | 1/5 | **Đơn lẻ** | **2** | `P3` 03:44–04:01 |

**Phân bố:** severity 3 → **2** phát hiện · severity 2 → **3** phát hiện · **không có severity 4**. Lý do không có mức 4: cả 5 phát hiện đều còn đường vòng, cả 5 người vẫn hoàn thành được cả hai việc.

### Chi tiết từng phát hiện

#### U-01 — Không tự tìm được đường vào Users Management · **Severity 3** · Vấn đề thiết kế hệ thống

- **Quan sát được ở:** P3, P4, P5 — **3/5**
- **Điều gì xảy ra:** người tham gia đăng nhập vào dashboard admin nhưng không nhận ra lối vào khu quản lý người dùng. **P4 và P5 đều thử bấm vào avatar** — cùng một mô hình tư duy sai, cho thấy họ trông đợi chức năng quản lý nằm trong menu tài khoản. P5 phải được người điều phối gợi ý thẳng mới vào được.
- **Trích dẫn người dùng:**
  - P5 `[01:40]` — *"**Ở đâu gì ta?**"* → `[01:44]` *"Ở đâu phải bấm như ở đâu vậy?"*
  - P5 `[05:48]` — *"cái khúc mới vô để vô được cái user management này thì **tôi không biết kiếm ở đâu**"*
  - P4 `[05:46]` — *"tìm cái trang quản lý người dùng này… **khá là khó khăn**… cái trang quản lý này **phải nằm ở ngoài thì dễ thấy**"*
  - P3 `[01:19–01:49]` — mò khoảng 30 giây trước khi thấy mục Users Management
- **Heuristic vi phạm:** Nielsen #6 *Recognition rather than recall* — người dùng phải **nhớ** chức năng nằm ở đâu thay vì **nhận ra** nó. Kèm Nielsen #7 *Flexibility and efficiency of use*.
- **Severity 3 — lý do chấm:** **frequency** cao *(3/5, và là bước đầu tiên của mọi tác vụ quản trị)* · **impact** cao *(một người không thể tự vượt qua)* · **persistence** vĩnh viễn *(không có breadcrumb, không có lối tắt, lần sau vào lại vẫn phải nhớ)*. Không phải **4** vì cuối cùng cả 3 người đều vào được và tác vụ vẫn hoàn thành.
- **Liên hệ Task 1B:** trùng khớp `T1B-06` / mục checklist `N-03` — khu admin **không có breadcrumb** ở bất kỳ cấp nào.
- **Bằng chứng củng cố mạnh nhất:** trong 5 người, **P5 là người duy nhất có kinh nghiệm quản lý thật** — đang quản lý một tiệm nước, tức quản người và phân ca hằng ngày. P5 cũng là người **vấp nặng nhất**: phải được gợi ý thẳng mới vào được, và là người duy nhất nói *"tôi không biết kiếm ở đâu"*. Nếu nguyên nhân chỉ là "người tham gia không quen làm quản lý" thì P5 phải là người tìm ra nhanh nhất — thực tế ngược lại hoàn toàn. Dữ liệu này **loại trừ** cách giải thích đổ lỗi cho hồ sơ người tham gia và đẩy nguyên nhân về phía giao diện.

#### U-02 — Nhãn Họ và Tên nói ngược nhau · **Severity 3** · Lỗi hệ thống

- **Quan sát được ở:** P4 *(người duy nhất tự phát hiện và gọi tên là lỗi)*
- **Điều gì xảy ra:** ô có nhãn *First Name* lại mang placeholder *Last Name* và báo lỗi *"Last name is required"*; ô kia ngược lại. Người làm theo placeholder sẽ **nhập họ vào ô tên**, dữ liệu sai đi thẳng vào cơ sở dữ liệu mà không có gì cảnh báo.
- **Trích dẫn người dùng:** P4 `[05:01–05:16]` — *"…nó có cái chỗ mà chỗ tên thì cái trong cái ô là cái họ… **nó bị ngược** nhá đúng không bạn… thì **nó là 1 cái lỗi**"*
- **Heuristic vi phạm:** Nielsen #2 *Match between system and the real world* · #9 *Help users recognize errors*
- **Severity 3 — lý do chấm:** chỉ 1/5 người **nhận ra**, nhưng đây là điểm quan trọng — 4 người còn lại **vẫn dính lỗi mà không biết**. Frequency thực tế là **100 % số lần tạo user**. Impact cao vì gây **sai dữ liệu**, không chỉ khó chịu. Persistence vĩnh viễn. Không phải **4** vì vẫn sửa lại được sau.
- **Vì sao xếp "hệ thống" dù chỉ 1/5:** quy tắc ≥3/5 dùng để phát hiện vấn đề, không dùng để bác bỏ. Ở đây khiếm khuyết đã được đo trực tiếp trên DOM ở Task 1B và tái hiện trên **cả 7 môi trường** của Task 3 — bằng chứng khách quan mạnh hơn số người nhận ra.
- **Ảnh:** [`T1B-01-swapped-name-validation.png`](evidence/task1b/T1B-01-swapped-name-validation.png)

#### U-03 — Không có xác nhận tường minh sau khi lưu · **Severity 2** · Vấn đề thiết kế hệ thống

- **Quan sát được ở:** đo trực tiếp trên hệ thống; **không người tham gia nào báo là vấn đề**
- **Điều gì xảy ra:** sau mỗi thao tác tạo / sửa / xoá, hệ thống không hiện toast, không thông báo tại chỗ, không dấu hiệu nào. Đo ở Task 1B: sau cả ba thao tác, `[class*=toast],[role=status],[role=alert]` đều **rỗng**. Người dùng chỉ suy ra kết quả nhờ bảng danh sách tự đổi.
- **Probe *trust* — kết quả ngược giả thuyết:** cả **5/5** người đều nói họ **chắc chắn** hệ thống đã lưu, lý do đều là *"nhìn vào giao diện thì thấy"*. Bảng cập nhật tức thì đủ đóng vai trò phản hồi với họ.
- **Dấu hiệu duy nhất về sự thiếu chắc chắn:** P2 hỏi lại người điều phối `[02:33]` — *"là ấn tạo xong đúng không bạn?"* — nhưng đây là câu hỏi về **quy trình của buổi test**, không phải về việc dữ liệu đã lưu chưa.
- **Heuristic vi phạm:** Nielsen #1 *Visibility of system status* · Shneiderman #3 *Offer informative feedback*
- **Severity 2 — vì sao hạ từ 3 xuống:** **frequency** vẫn cao nhất trong cả bộ *(mọi thao tác ghi)*, nhưng **impact thực tế thấp** — không ai bị chặn, không ai bị chậm lại, không ai thấy bất an. **Persistence** thấp: bảng cập nhật là tín hiệu ổn định, dùng vài lần là quen.
- **Vì sao vẫn giữ ở mức 2 chứ không hạ xuống 1:** phản hồi hiện tại chỉ hoạt động ở **luồng thành công**. Nếu máy chủ trả về thất bại, bảng không đổi và cũng **không có thông báo lỗi nào** — admin sẽ tưởng đã lưu trong khi chưa. Không phiên nào gặp tình huống đó nên chưa có bằng chứng người dùng, nhưng rủi ro là có thật và đo được.
- **Giá trị phương pháp của phát hiện này:** đây là chỗ duy nhất trong cả bài mà **checklist và người dùng thật nói ngược nhau**. Nếu chỉ chạy checklist, `U-03` đã bị chấm mức 3 và đứng đầu danh sách ưu tiên. Chính dữ liệu người dùng đã kéo nó xuống đúng vị trí.

#### U-04 — Lỗi trùng dữ liệu chỉ báo sau khi submit cả form · **Severity 2** · Vấn đề thiết kế hệ thống

- **Quan sát được ở:** P2, P3, P4, P5 — **3/5 trở lên**
- **Điều gì xảy ra:** người tham gia điền xong 8 trường, bấm **Create User**, rồi mới nhận thông báo `Email already in use` hoặc `This student card is already in use`. Phải quay lại sửa và submit lại — P2 mất 3 vòng.
- **Trích dẫn:** P2 `[03:06]` — *"This student card is already in use"* → `[03:08]` *"Vậy mình đổi hành 1, 2, 3 năm"*; P4 `[03:25]` — *"Student code là đã được sử dụng rồi"*; P5 `[02:39]` — *"mình có thể đổi một cái email khác"*
- **Heuristic vi phạm:** Nielsen #5 *Error prevention* — lỗi này ngăn được bằng cách kiểm tra ngay khi rời ô.
- **Severity 2 — lý do chấm:** frequency cao trong bối cảnh phiên test, nhưng **impact thấp** *(thông báo rõ ràng, sửa được ngay)* và **persistence thấp** *(lần sau người dùng biết trước)*. Không phải **3** vì không mất dữ liệu và không chặn tác vụ.
- **Ghi nhận công bằng:** nguyên nhân trực tiếp là **lỗi chuẩn bị dữ liệu của người điều phối** — dùng lại cùng email và mã số giữa các phiên mà chưa dọn user cũ. Nhưng **cách EMS báo lỗi lại là điểm cộng**: thông báo cụ thể, đúng chỗ, dễ hiểu. Phần đáng cải thiện chỉ là **thời điểm** báo, không phải nội dung báo.

#### U-05 — Điền mã số thành viên nhầm vào ô Số điện thoại · **Severity 2** · Trường hợp đơn lẻ

- **Quan sát được ở:** P3
- **Điều gì xảy ra:** hai ô **Member Code** và **Phone Number** nằm cạnh nhau, cùng nhận chuỗi số, nhãn không gắn `for`/`id` vào ô. P3 điền mã số vào ô điện thoại rồi tự phát hiện.
- **Trích dẫn:** P3 `[03:44–04:01]` — *"cái kia là **member code** chứ không phải là phần **phone number**… cái số 9901234 là member code"*
- **Heuristic vi phạm:** Nielsen #6 · WCAG 1.3.1 *Info and Relationships*
- **Severity 2 — lý do chấm:** 1/5 người, tự phát hiện và tự sửa trong vòng vài giây, không mất dữ liệu. Nhưng nếu **không** tự phát hiện thì số điện thoại sai sẽ vào thẳng cơ sở dữ liệu — nên không hạ xuống **1**.
- **Liên hệ Task 1B:** mục bổ sung `MY-01` — nhãn có chữ nhưng **không gắn** vào ô bằng `for`/`id`, nên bấm vào nhãn không focus được vào đúng ô.

---

## 6. Khuyến nghị theo ưu tiên

| # | Khuyến nghị | Giải quyết | Ưu tiên | Công sức |
|---|---|---|---|---|
| **1** | **Thêm breadcrumb** `Dashboard / Admin / Users Management` ở mọi trang dưới `/dashboard/admin`, và đưa lối vào Users Management lên khu vực nhìn thấy ngay sau khi đăng nhập *(thẻ tác vụ nhanh trên dashboard)* | `U-01` | **Cao** | Thấp — thuần giao diện, không đụng dữ liệu |
| **2** | **Sửa nhãn / placeholder / thông báo lỗi** của hai ô Họ và Tên cho khớp đúng trường. Nhiều khả năng hai trường bị hoán vị lúc khai báo schema validation | `U-02` | **Cao** | Rất thấp — sửa vài dòng |
| **3** | **Thêm toast lỗi khi máy chủ trả về thất bại** — ưu tiên luồng thất bại, vì luồng thành công đã được bảng danh sách phản hồi thay | `U-03` | Trung bình | Thấp — hệ thống đã có sẵn hạ tầng toast ở chỗ khác |
| **4** | **Kiểm tra trùng email và mã số ngay khi rời ô** *(on blur)* thay vì đợi submit cả form | `U-04` | Trung bình | Trung bình — cần endpoint kiểm tra riêng |
| **5** | **Gắn `for`/`id`** cho từng cặp nhãn–ô nhập, và tách rõ ô Member Code với Phone Number *(nhãn phụ hoặc icon)* | `U-05` | Trung bình | Rất thấp |

**Vì sao xếp #1 lên đầu:** `U-01` là phát hiện duy nhất **phân tách hai cụm điểm SUS**. Sửa nó có khả năng kéo cụm 67,5–72,5 lên gần cụm 87,5–90,0 — tác động lớn nhất trên mỗi đơn vị công sức bỏ ra.

**Vì sao khuyến nghị #3 tụt xuống Trung bình:** dữ liệu probe cho thấy bảng danh sách tự cập nhật **đã đủ** làm phản hồi cho luồng thành công. Phần thật sự thiếu là thông báo cho **luồng thất bại** — hẹp hơn nhiều so với đề xuất ban đầu, và đó là điều chỉ có dữ liệu người dùng mới chỉ ra được.

---

## 7. Đối chiếu với Task 1B

| | Số phát hiện | Cụ thể |
|---|---|---|
| Checklist bắt được **và** người dùng cũng vấp | **3** | `U-01` ↔ `T1B-06` *(không breadcrumb)* · `U-02` ↔ `T1B-01` *(nhãn ngược)* · `U-03` ↔ `T1B-10` *(không phản hồi)* |
| Checklist bắt được nhưng người dùng **không** bận tâm | **7** | `T1B-02` không dấu bắt buộc · `T1B-03` focus không về trường lỗi · `T1B-04` ràng buộc mật khẩu báo muộn · `T1B-05` tương phản màu · `T1B-07` tràn khi zoom 200% · `T1B-08` Esc mất dữ liệu · `T1B-09` dialog thiếu tên truy cập được |
| Checklist **không** phủ nhưng người dùng vấp ngay | **2** | `U-04` lỗi trùng chỉ báo sau submit · `U-05` nhầm ô Member Code / Phone |

**Nhận xét — vì sao có khoảng chênh này:**

**① Checklist mạnh ở thứ đo được, yếu ở thứ phải trải nghiệm.** Bảy mục người dùng không bận tâm đều là những thứ đo bằng script: tỉ lệ tương phản, `scrollWidth`, `document.activeElement`, sự tồn tại của `aria-labelledby`. Chúng có thật và vẫn đáng sửa — nhưng chúng ảnh hưởng tới **nhóm người dùng mà 5 người này không đại diện**: người dùng bàn phím, người dùng trình đọc màn hình, người thị lực kém. Checklist không sai; nó chỉ đo một tập người dùng rộng hơn tập đã ngồi test.

**② Người dùng bắt được thứ checklist không nghĩ tới đo: *thời điểm* thay vì *sự tồn tại*.** Mục `F-04` của nhóm hỏi *"có thông báo lỗi rõ ràng không"* — EMS **đạt**, thông báo rất rõ. Nhưng không mục nào hỏi *"lỗi được báo **lúc nào**"*. Người dùng thật vấp đúng chỗ đó ở `U-04`. Tương tự `U-05`: checklist hỏi *"ô nhập có nhãn không"*, không hỏi *"hai ô cạnh nhau có phân biệt được không"*.

**③ Ba phát hiện trùng nhau là phần giá trị nhất.** Khi cả hai phương pháp độc lập cùng chỉ vào một chỗ, đó là bằng chứng mạnh nhất có thể có trong bài này — đặc biệt `U-02`, nơi một người dùng ngoài ngành tự gọi tên đúng thứ mà script DOM đã phát hiện trước đó.

**Đề xuất bổ sung cho checklist nhóm** — ba mục rút ra từ chính khoảng chênh trên:

| Mục đề xuất | IA | Bắt được gì |
|---|---|---|
| *"Ràng buộc dữ liệu duy nhất (email, mã số) được kiểm tra **khi rời ô**, không đợi submit cả form"* | IA-02 | `U-04` |
| *"Các ô nhập liền kề cùng kiểu dữ liệu có dấu hiệu phân biệt rõ ràng ngoài nhãn"* | IA-02 | `U-05` |
| *"Chức năng chính có ít nhất **hai** lối vào — điều hướng chính và một lối tắt từ trang chủ"* | IA-03 | `U-01` |

---

## 8. Hạn chế của nghiên cứu

Nêu đầy đủ ở đây là có chủ ý. Bản ghi màn hình của cả 5 phiên đều nộp kèm, TA xem lại sẽ thấy những điều dưới đây — khai trước và phân tích đúng mức là trung thực hơn.

| # | Hạn chế | Bằng chứng | Ảnh hưởng tới kết luận |
|---|---|---|---|
| **1** | **Người điều phối dẫn dắt.** Xác nhận đúng/sai trong lúc người tham gia đang thao tác | P1 *"Đúng rồi"* ×2 · P2 *"rất là đúng"* `[01:47]` · P3 *"Đúng là sẽ có 1 cái chỗ để tìm kiếm user"* `[01:25]` · P4 *"Đúng rồi"* `[01:33]` · **P5 được gợi ý thẳng** *"thử bấm vào avatar và những nút ở trên cùng"* `[02:01]` | Time on task là **cận dưới** của độ khó thật — không có can thiệp thì có thể lâu hơn. Riêng `U-01` thì hạn chế này **củng cố** kết luận: dù đã được giúp, 3/5 vẫn thấy khó |
| **2** | **Ba trong bốn chủ đề probe hỏi sau phiên, không hỏi ngay tại chỗ.** Trong phiên chỉ kịp hỏi *clarity* | Cả 5 phiên | Trả lời sau phiên phụ thuộc trí nhớ nên kém chi tiết hơn hỏi ngay lúc thao tác. Bù lại, dữ liệu vẫn **đủ 4 chủ đề × 5 người** và đã làm thay đổi kết luận — `U-03` bị hạ từ mức 3 xuống 2 nhờ chính bộ dữ liệu này |
| **3** | **Không đếm được số lần do dự.** Chỉ số này bằng 0 ở cả 5 phiên | Bản gỡ băng báo 0 khoảng lặng ≥5 giây | Con số 0 **không** có nghĩa người dùng không do dự — người điều phối nói liên tục nên không có khoảng lặng để đo. Chỉ số này nên coi như **không thu được** |
| **4** | **User mồi không được reset giữa các phiên.** `Hùng Lê Văn` đã Inactive sẵn khi tới lượt P4 | P4 `[03:57–04:20]` | Việc 2 của P4 bị loại khỏi mọi phép tính. Còn 4 lượt hợp lệ |
| **5** | **Dữ liệu test dùng lại giữa các phiên** → 3/5 người gặp lỗi trùng email/mã số | `U-04` | Tần suất của `U-04` bị **thổi phồng** so với thực tế sử dụng. Đã hạ severity xuống 2 vì lý do này |
| **6** | **Hồ sơ người tham gia khớp một phần.** 4/5 là sinh viên chưa từng quản lý nhân sự; **P5 đang quản lý một tiệm nước** — có kinh nghiệm quản người thật, nhưng chưa ai từng dùng **phần mềm** quản trị | P5 *"tôi cũng không có quản lý **cái này** nên tôi không có biết"* `[05:04]` | Hạn chế này **nhẹ hơn nhiều so với dự đoán ban đầu**, và chính dữ liệu đã bác bỏ nó: người **có** kinh nghiệm quản lý *(P5)* lại vấp nặng nhất ở `U-01`. Vẫn nên chạy thêm với quản trị viên phần mềm thật, nhưng không thể quy tỉ lệ 3/5 cho hồ sơ người tham gia |
| **7** | **Cỡ mẫu 5, môi trường không phải phòng lab.** Chạy qua Google Meet, mỗi người dùng máy riêng | — | Đủ theo chuẩn Nielsen *(5 người phát hiện ~85 % vấn đề usability)* và đủ theo yêu cầu đề, nhưng **không đủ để suy rộng thống kê**. Mọi tỉ lệ trong báo cáo nên đọc là "x trên 5 người", không phải "x % người dùng" |
| **8** | **Không chạy pilot.** Đề nêu pilot là bước khuyến nghị, không bắt buộc; §16 chấm Task 2 theo *kịch bản + 5 phiên + phân tích* | — | Hạn chế 4 và 5 *(dữ liệu không được reset)* nhiều khả năng đã bị một phiên pilot phát hiện trước. Đây là cái giá thật của việc bỏ pilot |

**Điều gì vẫn vững bất chấp các hạn chế trên:** `U-01`, `U-02` và `U-03` đều có **bằng chứng độc lập từ Task 1B** — đo trực tiếp trên DOM, không phụ thuộc vào cách chạy phiên. Ba phát hiện này đứng vững kể cả khi loại bỏ toàn bộ dữ liệu quan sát.
