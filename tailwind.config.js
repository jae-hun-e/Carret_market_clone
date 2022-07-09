/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  // pages 안에 모든 디렉토리 안에 js,jsx,tx,tsx 확장자인 모든 파일에서 tailwind를 쓸 것이다.
    "./pages/**/*.{js,jsx,tx,tsx}",
    "./components/**/*.{js,jsx,tx,tsx}"

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
