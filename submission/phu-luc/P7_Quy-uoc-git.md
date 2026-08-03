# Git Commit Log *(bắt buộc — đề §13 + Chính sách môn học)*

> Đề §13: *"Tạo một Git commit mới cho **mỗi bước** của quy trình kiểm thử (thiết kế checklist, chạy checklist theo từng màn hình, ghi log lỗi, đánh giá heuristic và **mỗi lần chạy cross-platform**). Cung cấp Git commit log ở định dạng văn bản."*
>
> Chính sách: *"For every step within a requirement, students must create a clear and explicit Git commit message."*

**Repository:** https://github.com/dinosauce-285/HW03-Software-Testing

---

## Quy ước commit message

Chuẩn **Conventional Commits**, viết bằng **tiếng Anh**:

```
<type>(<scope>): <mô tả ngắn>
```

Mô tả dùng thức mệnh lệnh (`add`, `run`, `fix`), không viết hoa chữ đầu, không có dấu chấm cuối.

| `type` | Dùng cho |
|---|---|
| `feat` | Thêm sản phẩm mới của bài (checklist, ma trận, Agent Skill) |
| `fix` | Sửa lỗi trong chính bài làm |
| `docs` | Viết / cập nhật tài liệu, báo cáo, kết quả chạy |
| `chore` | Hạ tầng repo, cấu trúc thư mục, công cụ |
| `refactor` | Sắp xếp lại nội dung, không đổi kết luận |
| `test` | Kịch bản, script khảo sát |

| `scope` | Phạm vi |
|---|---|
| `task1a` | Checklist dùng chung |
| `task1b` | Chạy checklist — **một commit cho mỗi màn hình** |
| `task2` | User testing — **một commit cho mỗi phiên** |
| `task3` | Cross-platform — **một commit cho mỗi lần chạy / mỗi màn hình** |
| `findings` | Log lỗi, nộp Google Form |
| `appendix` | AI Audit Report, AI Critique, git log |
| `repo` | Cấu trúc, README, CLAUDE.md |

**Ví dụ tốt:**
```
feat(task1a): add 68-item GUI checklist covering IA-01 to IA-04
docs(task1a): explain why AI missed accessibility items
docs(task1b): run GUI checklist on users management screen
docs(findings): log swapped validation messages on create user dialog
docs(task2): record pilot session and refine task scenario
docs(task2): record session P3 with observation notes and SUS score
docs(task3): run compatibility matrix for screen C1 on macos safari desktop
```

**Ví dụ xấu** *(bị trừ điểm vì không thể hiện "mỗi bước một commit")*:
```
update
final
done homework
```

**Không kèm trailer `Co-Authored-By`** — việc dùng AI khai ở `AI-Audit-Report.md`.

---

## Xuất log trước khi nộp

```bash
git log --pretty=format:"%h | %ad | %s" --date=format:"%d/%m/%Y %H:%M" > submission/phu-luc/git-log.txt
```

---

## Log *(dán kết quả vào đây khi nộp)*

```
(chưa có — chạy lệnh trên trước khi nộp)
```
