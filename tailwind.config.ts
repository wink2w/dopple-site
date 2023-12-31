import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      padding: {
        page: "60px",
      },
      borderWidth: {
        3: "3px",
      },
      width: {
        chatSidebar: "360px",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "22px",
      },
      boxShadow: {
        md: "0px 5px 10px 0px #00000040",
        lg: "0px 2.29087px 11.4543px rgba(0, 0, 0, 0.05)",
        lg1: "0px 10px 15px 0px rgba(0, 0, 0, 0.50)",
        lg2: "0px 7.057966232299805px 14.11593246459961px 0px rgba(0, 0, 0, 0.25)",
        lg3: "0px 4.716981410980225px 4.716981410980225px rgba(0, 0, 0, 0.25)",
        lg4: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        lg5: "0px 5.706666946411133px 11.413333892822266px 0px rgba(0, 0, 0, 0.25)",
        lg6: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
        lg7: "0px 0px 5px 0px rgba(255, 255, 255, 0.25)",
        lg8: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)",
        lg9: "0px 0px 5px 0px #00FF19",
      },
      screens: {
        verytiny: { min: "375px" },
        tiny: { min: "500px" },
        tiny1: { min: "510px" },
        sm1: { min: "640px" },
        sm2: { min: "700px" },
        md1: { min: "900px" },
        md2: { min: "970px" },
        lg1: { min: "1050px" },
        lg2: { min: "1100px" },
        xl1: { min: "1330px" },
        xl2: { min: "1440px" },
        "3xl": { min: "1920px" },
      },
      colors: {
        black1: "#111112",
        black2: "#151518",
        black3: "#252528",
        black4: "#6A7179",
        black5: "#2F3239",
        black6: "#CACACA",
        black7: "#1B1B1D",
        black8: "#787878",
        black9: "#AAAAAA",
        black10: "#141416",
        black11: "#D9D9D9",
        black12: "#212227",
        black13: "#292C32",
        black14: "#282828",
        black15: "#141518",
        black16: "#1C1D22",
        black17: "#24262E",
        black18: "#0B0C0D",
        blue1: "#25A3E1",
        blue2: "#048DFF",
        blue3: "#34C2FF",
        green1: "#20C940",
        red1: "#B61A1A",
        searchBackground: "rgba(21, 21, 24, 0.9)",
        inputback: "rgba(0, 0, 0, 0.25)",
        menuback: "rgba(0, 0, 0, 0.75)",
        searchback: "rgba(37, 37, 40, 0.75)",
        searchhoverback: "rgba(106, 113, 121, 0.25)",
        trendingback: "rgba(23, 23, 24, 0.75)",
        subtext: "#848D97",
        button: "#23252B",
        nav: "#191A1E",
        "nav-desktop": "#1B1C20",
        unread: "#BF0000",
        reddit: "#FF4500",
        discord: "#5865F2",
        twitter: "#1DA1F2",
        title: "#181923",
        buttonlight: "#F3F3F6",
        white1: "#F7F7FA",
        subtextlight: "#687078",
        candynav: "#FFF0FD",
        candybuttonhighlight: "#DD57AF",
        candytitle: "#451950",
        candybutton: "#FED7FF",
        candysubtext: "#DD57AF",

        galaxynav: "#0B0310",
        galaxybutton: "#2C203B",
        galaxybuttonhighlight: "#9277FF",
        galaxysubtext: "#9C74F3",

        chatback1: "#43AAFF",
        chatback2: "#35A3FF",
        chatback3: "#1896FF",
        chatback4: "#0D91FF",
        chatbord1: "#8ECCFF",
        chatbord2: "#82C6FF",
        chatbord3: "#74C0FF",
        chatbord4: "#55B2FF",
      },
      backgroundImage: {
        banner: "url('/public/images/explore/banner-back.png')",
        spaceeco: "url('/public/images/messages/backs/galaxy.webp')",
        prototype: "url('/public/images/prototype/back.png')",
        fire: "linear-gradient(45deg, #FF59D9, #50BBFF)",
        fire1: "linear-gradient(46.83deg, #FF59D9 0%, #4DB4F5 100%)",
        silent: "linear-gradient(48.32deg, #FF59D9 -221.32%, #4DB4F5 100%)",
        gradient1: "linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
        gradient2: "linear-gradient(180deg, #5AF574 0%, #16C433 100%)",
        gradient3: "linear-gradient(45deg, #048DFF, #37C3FF)",
        gradient4:
          "linear-gradient(360deg, #1B1B1D 0%, rgba(27, 27, 29, 0) 100%)",
        gradient5: "linear-gradient(45deg, #048DFF 0%, #37C3FF 100%)",
        gradient6:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 75%, rgba(0, 0, 0, 0.8) 100%)",
        gradient7:
          "linear-gradient(180deg, rgba(41, 44, 50, 0.00) 0%, #292C32 100%)",
        gradient8:
          "linear-gradient(180deg, rgba(23, 23, 24, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%)",
        gradient9: "rgba(11, 30, 16, 0.5)",
        swipeLeft:
          "linear-gradient(to left, rgba(33, 34, 39, 0), rgb(33, 34, 39) 20%)",
        swipeRight:
          "linear-gradient(to right, rgba(33, 34, 39, 0), rgb(33, 34, 39) 20%)",
        instagram:
          "linear-gradient(134deg, #9D09F5 0%, rgba(157, 9, 245, 0.00) 69.14%), linear-gradient(228deg, #DB04E2 0%, #DB04E2 34.04%, #FF143A 65.29%, #FFB901 92.71%);",
      },
      borderRadius: {
        tiny: "6px",
        sm: "9px",
      },
    },
    fontSize: {},
    fontFamily: {
      Rubik: "Rubik, sans-serif",
    },
  },
  plugins: [require("@tailwindcss/typography")],
  corePlugins: {
    backdropOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    ringOpacity: false,
    textOpacity: false,
  },
} satisfies Config;
