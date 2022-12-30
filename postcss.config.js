module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
        "last 10 versions", // 所有主流浏览器最近10版本用
      ],
      grid: true,
    },
    "postcss-pxtorem": {
      rootValue: 16, // UI设计稿375px宽度 iphone6标准设备
      unitPrecision: 5, // 小数点的位数
      minPixelValue: 1, // 设置要替换的最小像素
      propList: ["*"],
      exclude: 'ignore',
    },
  }
}