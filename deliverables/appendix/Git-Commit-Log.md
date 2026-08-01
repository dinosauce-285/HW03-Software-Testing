# Git Commit Log *(bắt buộc — đề §13 + Chính sách môn học)*

> Đề §13: *"Tạo một Git commit mới cho **mỗi bước** của quy trình kiểm thử (thiết kế checklist, chạy checklist theo từng màn hình, ghi log lỗi, đánh giá heuristic và **mỗi lần chạy cross-platform**). Cung cấp Git commit log ở định dạng văn bản."*
>
> Chính sách: *"For every step within a requirement, students must create a clear and explicit Git commit message."*

**Repository:** https://github.com/dinosauce-285/HW03-Software-Testing

---

## Quy ước commit message

```
<task>: <hành động cụ thể>
```

| Prefix | Dùng cho |
|---|---|
| `task1a` | Thiết kế / chỉnh checklist dùng chung |
| `task1b` | Chạy checklist — **một commit cho mỗi màn hình** |
| `task2` | User testing — **một commit cho mỗi phiên** |
| `task3` | Cross-platform — **một commit cho mỗi lần chạy / mỗi màn hình** |
| `findings` | Ghi log lỗi, nộp Google Form |
| `docs` | Báo cáo, README, phụ lục |
| `ai` | Cập nhật AI Audit Report / AI Critique |
| `review` | Peer review |

**Ví dụ tốt:**
```
task1a: dựng checklist 68 mục phủ IA-01..IA-04
task1a: bổ sung 6 mục accessibility sau khi đối chiếu WCAG 2.2
task1b: chạy checklist trên màn hình Users list (C1)
task1b: ghi 4 lỗi phát hiện ở màn hình Assign Role
task2: chạy phiên pilot P0, chỉnh lại task scenario
task2: chạy phiên P3, ghi note quan sát + SUS
task3: chạy ma trận MH1 trên macOS/Safari/desktop
findings: nộp T1B-01..T1B-07 lên Google Form
```

**Ví dụ xấu** *(sẽ bị trừ điểm vì không thể hiện "mỗi bước một commit")*:
```
update
final
done homework
```

---

## Xuất log trước khi nộp

```bash
git log --pretty=format:"%h | %ad | %s" --date=format:"%d/%m/%Y %H:%M" > deliverables/appendix/git-log.txt
```

---

## Log *(dán kết quả vào đây khi nộp)*

```
(chưa có — chạy lệnh trên trước khi nộp)
```
