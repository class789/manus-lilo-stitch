// API集成代码
// 文件名: api.js

// fal.ai API集成
class ImageEnhancer {
  constructor() {
    this.apiKey = 'ff30475c-5450-4e61-8a78-8d7f4faa7b62:fb5427671ad18acca9afc430371646b2';
    this.apiUrl = 'https://fal.ai/models/fal-ai/aura-sr/api';
    this.isProcessing = false;
  }

  // 将图像转换为base64格式
  async imageToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = error => reject(error);
    });
  }

  // 增强图像
  async enhanceImage(imageFile) {
    if (this.isProcessing) {
      throw new Error('已有处理中的请求');
    }

    try {
      this.isProcessing = true;
      
      // 转换图像为base64
      const imageBase64 = await this.imageToBase64(imageFile);
      
      // 调用API
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Key ${this.apiKey}`
        },
        body: JSON.stringify({
          image: imageBase64,
          scale: 4 // 放大倍数
        })
      });
      
      if (!response.ok) {
        throw new Error(`API请求失败: ${response.status} ${response.statusText}`);
      }
      
      const result = await response.json();
      return result.image; // 返回增强后的图像数据
    } catch (error) {
      console.error('增强图像时出错:', error);
      throw error;
    } finally {
      this.isProcessing = false;
    }
  }
}

// 导出实例以供使用
const imageEnhancer = new ImageEnhancer();
