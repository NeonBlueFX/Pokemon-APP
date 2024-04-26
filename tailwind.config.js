/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",".index.html"],
  theme: {
    extend: {
      keyframes:
      {
        SlideAnimation:{
          "0%":{width: "0%"},
          "100%":{width: "100%"}
        }
        
        
      },
      animation: {
        'openslide': "SlideAnimation 1s forwards",
        'delayedPing': "ping 2s linear infinite"
      }
    },
  },
  plugins: [],
}

