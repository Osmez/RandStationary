import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        rotate: "rotate 10s linear infinite",
        infiniteSlider:"infs 10s linear infinite",
        PressOne:"PressOne 2s linear infinite",
        PressTwo:"PressTwo 3s linear infinite",
        PressThree:"PressThree 4s linear infinite",
        PressFour:"PressFour 2.5s linear infinite"
      },
      keyframes:{
        rotate:{
          "0%":{transfoem:"rotate(0deg) scale(10)"},
          "100%":{transform:"rotate(-360deg) scale(10)"}
        },
        infs:{
          "0%":{transform:"translateX(0px)"},
          "100%":{transform:"translateX(calc(-205px*2))"},
        },PressOne:{
          "30%":{transform: "translateY(0)"},
          "40%":{transform: "translateY(0)"},
          "100%":{transform: "translateY(0)"},
          "35%":{transform:"translateY(10px)"}
        },PressTwo:{
          "70%":{transform: "translateY(0)"},
          "80%":{transform: "translateY(0)"},
          "100%": {
            transform: "translateY(0)"
          },
          "75%": {
            transform: "translateY(10px)"
          }
        },PressThree:{
            "30%":{transform: "translateY(0)"},
            "40%":{transform: "translateY(0)"},
            "100%":{
              transform: "translateY(0)"
            },
            "35%":{
              transform: "translateY(10px)"
            }
        },PressFour:{
          "40%":{ transform: "translateY(0)"},
          "50%":{ transform: "translateY(0)"},
          "100%":{
            transform: "translateY(0)"
          },
          "45%": {
            transform: "translateY(10px)"
          }
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        "Lobster":['Lobster','sans-serif']
      }
    },
    
  },
  plugins: [],
};
export default config;
