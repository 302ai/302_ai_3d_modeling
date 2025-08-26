# <p align="center"> 🎨 AI 3D建模 🚀✨</p>

<p align="center">AI 3D建模通过本地上传图片或根据用户输入生成图片后，即可使用AI将图片转换成3D模型。</p>

<p align="center"><a href="https://302.ai/product/detail/58" target="blank"><img src="https://file.302.ai/gpt/imgs/github/20250102/72a57c4263944b73bf521830878ae39a.png" /></a></p >

<p align="center"><a href="README_zh.md">中文</a> | <a href="README.md">English</a> | <a href="README_ja.md">日本語</a></p>


![](docs/302_AI_3D_Modeling.png)

来自[302.AI](https://302.ai)的[AI 3D建模](https://302.ai/product/detail/58)的开源版本。你可以直接登录302.AI，零代码零配置使用在线版本。或者对本项目根据自己的需求进行修改，传入302.AI的API KEY，自行部署。

## 界面预览
可通过本地上传图片来生成3D模型。
![](docs/302_AI_3D_Modeling_screenshot_01.jpg)

可通过文字描述生成图片来生成3D模型，并且支持多角度预览和下载3D模型。
![](docs/302_AI_3D_Modeling_screenshot_02.png)     

## 项目特性
### 📸 图片上传
支持本地上传图片或使用AI根据文字描述生成图片。
### 🎨 3D模型生成
使用先进的AI技术将2D图片转换成高质量3D模型。
### 🔄 多角度预览
支持360度旋转预览生成的3D模型，确保模型质量。
### 🌓 暗色模式
支持暗色模式，保护您的眼睛。
### 🌍 多语言支持
  - 中文界面
  - English Interface
  - 日本語インターフェース

## 🚩 未来更新计划
- [ ] 支持更多3D模型格式
- [ ] 增加材质和贴图支持

## 🛠️ 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: TailwindCSS
- **UI组件**: Radix UI
- **状态管理**: Jotai
- **表单处理**: React Hook Form
- **HTTP客户端**: ky
- **国际化**: next-intl
- **主题**: next-themes
- **代码规范**: ESLint, Prettier
- **提交规范**: Husky, Commitlint

## 开发&部署
1. 克隆项目
```bash
git clone https://github.com/302ai/302_ai_3d_modeling
cd 302_ai_3d_modeling
```

2. 安装依赖
```bash
pnpm install
```

3. 环境配置
```bash
cp .env.example .env.local
```
根据需要修改 `.env.local` 中的环境变量。

4. 启动开发服务器
```bash
pnpm dev
```

5. 构建生产版本
```bash
pnpm build
pnpm start
```

## ✨ 302.AI介绍 ✨
[302.AI](https://302.ai)是一个面向企业的AI应用平台，按需付费，开箱即用，开源生态。✨
1. 🧠 集合了最新最全的AI能力和品牌，包括但不限于语言模型、图像模型、声音模型、视频模型。
2. 🚀 在基础模型上进行深度应用开发，我们开发真正的AI产品，而不是简单的对话机器人
3. 💰 零月费，所有功能按需付费，全面开放，做到真正的门槛低，上限高。
4. 🛠 功能强大的管理后台，面向团队和中小企业，一人管理，多人使用。
5. 🔗 所有AI能力均提供API接入，所有工具开源可自行定制（进行中）。
6. 💡 强大的开发团队，每周推出2-3个新应用，产品每日更新。有兴趣加入的开发者也欢迎联系我们
