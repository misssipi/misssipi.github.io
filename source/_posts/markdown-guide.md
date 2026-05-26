---
title: Markdown 写作指南
date: 2026-05-26 11:00:00
tags: [Markdown, 教程]
categories: 教程
---

Markdown 是一种轻量级标记语言，让你专注于写作内容。

## 基础语法

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
```

### 粗体和斜体

- **粗体**: `**粗体**`
- *斜体*: `*斜体*`
- ~~删除线~~: `~~删除线~~`

### 列表

无序列表：
- 项目一
- 项目二
- 项目三

有序列表：
1. 第一步
2. 第二步
3. 第三步

### 引用

> 这是一段引用文字。

### 代码

行内代码：`code`

代码块：

```python
def greet(name):
    return f"Hello, {name}!"
```

### 链接和图片

- 链接: `[文字](https://example.com)`
- 图片: `![描述](图片地址)`

### 表格

| 名称 | 说明 |
|------|------|
| Hexo | 博客框架 |
| GitHub Pages | 免费托管 |

## 在 Hexo 中写作

1. 运行 `hexo new post "文章标题"` 创建新文章
2. 编辑 `source/_posts/` 下的 `.md` 文件
3. 运行 `hexo generate` 生成静态文件
4. 推送到 GitHub 自动部署

Happy writing!
