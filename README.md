# 健康配餐网页

这是一个健康饮食网页应用，包含随机健康三餐、AI 营养分析、健康等级奖章、高糖饮品方糖可视化，以及按现有食材生成菜谱的功能。

## 本地打开

```bash
npm start
```

然后打开：

```text
http://127.0.0.1:4187
```

## 同一个 Wi-Fi 临时分享

如果只想让身边同学或朋友测试，可以让服务监听局域网：

```bash
$env:HOST="0.0.0.0"; npm start
```

然后把你电脑的局域网地址发给别人，例如：

```text
http://你的电脑IP:4187
```

Windows 如果弹出防火墙提示，需要允许本地网络访问。

## 发布成公开链接

推荐用 Vercel：

1. 把本项目上传到 GitHub。
2. 打开 Vercel，选择 Import Project。
3. Framework 选择 Other。
4. Build Command 留空。
5. Output Directory 留空或填 `.`。
6. 部署后会得到一个公开网址。

也可以用 GitHub Pages：

1. 把 `index.html`、`styles.css`、`app.js` 上传到仓库根目录。
2. 在 GitHub 仓库 Settings -> Pages 中选择 Deploy from branch。
3. Branch 选择 `main`，目录选择 `/root`。
4. 保存后等待生成公开链接。

## 当前功能

- 减脂、增肌、塑型三种目标
- 随机生成早餐、中餐、晚餐
- 77 种常见原材料
- 285 道可随机生成菜谱
- AI 营养分析：热量、糖分、蛋白质、脂肪、钠含量
- 健康等级系统：S / A / B / C
- 高糖饮品方糖可视化
- 冰箱模式：输入已有食材生成健康菜谱

## 后续扩展

- 用户账号和每日记录
- 拍照识别食物
- 一周菜谱生成
- 学生党预算模式
- 多人收藏和共享菜单
