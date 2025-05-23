import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 自动导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import ElementPlus from "unplugin-element-plus/vite";

import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "https://staging.fpfe.app",
        changeOrigin: true,
        rewrite: url => url.replace(/^\/api/, ""),
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    ElementPlus(),
    createSvgIconsPlugin({
      // 指定要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 执行icon name的格式
      symbolId: "icon-[dir]-[name]"
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve(
            __dirname,
            "src/common/less/common.less"
          )}";`,
          javascriptEnabled: true
        }
      }
    }
  },
  build: {
    // 为了适配nginx上的处理
    assetsDir: "template"
  }
});
