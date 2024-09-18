/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./***.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "suse":["SUSE","sans-serif"]
      },
      colors:{
        "blueBtn":"#2B32B2",
        "blueBtn2":"#1488CC",
        "hover1":"#121772",
        "hover2":"#075886",
        "line":"rgb(184,182,182)",
        "blueTxt":"#0152fc",
        "color1":"#545d60",
        "color2":"#283048",
        "color3":"#4b485a",
        "color4":"#1f1c2c",
        "color5":"#3f4c6b",
        "color6":"#535e79",
        "hoverColor1":"#3a7bd5",
        "hoverColor2":"#00d2ff"
      },
      dropShadow:{
        'imgShadow':'-20px 0px 1.75rem rgb(81,147,194)'
      },
      keyframes:{
        float:{
          '0%,100%':{transform:'translateY(0)'},
          '50%':{transform:'translateY(-15px)'},
        }
      },
      animation:{
        float:'float 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

