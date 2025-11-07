import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite" // Giữ nguyên plugin tailwind của bạn
import path from 'path'
import { fileURLToPath } from 'url'

// Cần thiết để sử dụng __dirname trong "type": "module"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        // Sửa lỗi alias của bạn (bạn gõ _dirname thiếu 1 dấu gạch và chưa định nghĩa nó)
        "@": path.resolve(__dirname, "src"),
      },
    },
  }

  // Đây là phần quan trọng:
  // Chỉ áp dụng 'base' khi chạy lệnh 'build' (cho gh-pages)
  // Khi chạy 'dev', 'base' sẽ là '/' (mặc định)
  if (command === 'build') {
    config.base = '/thread-clone-react/'
  }

  return config
})