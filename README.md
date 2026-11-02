# 忍者键位设计平台 · 管理后台

ERP 风格运营管理后台，管理员可视化编辑键位方案，实时同步前端展示。

## 技术栈

- Next.js 16.3.6 App Router
- React 19
- Tailwind CSS v4
- react-aria-components
- JWT 鉴权

## 功能模块

- 登录认证：admin / ninja2026
- 仪表盘：产品核心指标总览
- 角色管理：忍者 CRUD（增删改查、分类、使用量）
- 键位可视化编辑：点键盘上的键，改 label/color，保存即同步前端

## 启动

```bash
npm install
npm run dev
# http://localhost:3001
```

## 目录结构

```
app/
  login/page.tsx        # 登录页
  admin/
    layout.tsx          # ERP 侧边栏布局
    page.tsx            # 仪表盘
    characters/page.tsx # 角色管理
    mappings/page.tsx   # 键位可视化编辑
components/
  ui/                   # 基础组件
lib/
  api.ts                # API 客户端（带 JWT）
```
