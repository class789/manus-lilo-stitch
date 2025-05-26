# Lilo and Stitch 网站使用说明

## 项目概述

这是一个基于Lilo and Stitch卡通形象的网站，提供以下功能：
- 高清图片展示与浏览
- 视频内容嵌入
- 图片高清放大功能（基于fal.ai API）
- 多语言支持（英文、法语、德语、印地语）
- 响应式设计，适配PC和移动端

## 文件结构

- `index.html` - 网站主页面
- `api.js` - 高清图片生成API集成模块
- `images/` - 网站使用的Lilo and Stitch图片素材
- `languages/` - 多语言翻译文件
  - `translations.json` - 所有语言的翻译内容
- `videos/` - 视频素材链接
  - `video_links.md` - 收集的热门视频链接

## 部署说明

1. 将所有文件上传到您的网站服务器
2. 确保域名指向正确的服务器目录
3. 网站不需要后端服务，可以直接作为静态网站部署

## API集成

网站已集成fal.ai的图片高清放大API：
- API密钥: `ff30475c-5450-4e61-8a78-8d7f4faa7b62:fb5427671ad18acca9afc430371646b2`
- API端点: `https://fal.ai/models/fal-ai/aura-sr/api`

用户可以上传Lilo and Stitch相关图片，通过API将其转换为高清版本。

## 网站特点

1. **苹果风格配色**：采用苹果典型色系，视觉效果现代简洁
2. **SEO优化**：包含完整的meta标签、canonical URL和结构化内容
3. **多语言支持**：支持四种语言无缝切换
4. **响应式设计**：在各种设备上都有良好的显示效果
5. **内容丰富**：集成了精选的Lilo and Stitch图片和视频

## 自定义修改

如需修改网站内容：
- 更新图片：替换`images/`目录中的文件
- 修改文本：编辑`languages/translations.json`中的相应语言内容
- 添加视频：在HTML中添加新的iframe嵌入代码

## 注意事项

- API调用可能有使用限制，请关注fal.ai的使用政策
- 所有图片和视频内容仅用于展示，请确保您有权使用这些内容

感谢使用！如有任何问题，请随时联系。
