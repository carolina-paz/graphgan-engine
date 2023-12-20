module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      backgroundColor: {
        body: "#1e1e1d",
        startupBtn: "#879aa0",
        investorBtn: "#55b4d4",
        navBg: "#0B0B0B",
        activeButton: "#4a5157",
        inactiveButton: "#292e32",
        buttonParent: "#40434a",
        greyish: "#6b7878",
        blueish: "#448da0",
        whitish: "#bfbfbf",
        otherBtn: "#7d3fab",
        others: "#7030a0",
        matchesBg: "#BFBFBF",
        bgFooter: "#2E2E2E",
      },
      fontFamily: { Rubik: ["Rubik", "sans-serif"] },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontSize: {
        "4xl": "2.5rem",
        "7xl": "4.25rem",
        "8xl": "5rem",
      },
      borderColor: {
        blackish: "#333",
      },
      height: {
        halfScreen: "50vh",
      },
      backgroundImage: {
        office: "url('/src/assets/office.png')",
        rainbowBg:
          "linear-gradient(to bottom, #006699, #cc9933, #cc6666, #006699)",
        firstSection:
          "linear-gradient(to bottom, rgba(118, 118, 118,0.4), rgba(118, 118, 118,0.4)),url('/src/assets/landingimage.png')",
        invitation:
          "linear-gradient(to bottom, rgba(108, 118, 132, 0.85), rgba(108, 118, 132, 0.85)),url('/src/assets/landingimage.png')",
        lastSection:
          "linear-gradient(to bottom,rgba(35, 35, 35,0.6),rgba(35, 35, 35,0.6)),url('/src/assets/horse.png')",
        mobileLanding: "linear-gradient(to bottom, rgba(118, 118, 118,0.4), rgba(118, 118, 118,0.4)),url('/src/assets/landing-small.jpg')"
      },
      boxShadowColor: {
        grey: "grey",
      },
      keyframes: {
        transitionIn: {
          "0%": { opacity: 0, transform: "translateY(4rem)" },
          "100%": { opacity: 1, transform: "translateY(0rem)" },
        },
      },
      animation: {
        transitionIn: "transitionIn 1s ease-in-out ",
      },
      letterSpacing: { widest: "1rem" },
      borderWidth: {
        custom: "1.25rem",
        16: "4rem",
        4: "1rem",
        8: "2rem",
      },
      inset: {
        98: "98%",
      },
      minWidth: {
        56: "14rem",
      },
      borderRadius: {
        50: "50%",
        large: "5rem",
      },
      colors: {
        customBorder: "#1e1e1d",
        navStart: "#879aa0",
        // navStart:"#1e1e1d",
        navEnd: "#7997a1",
        customWhite: "#BFBFC0",
        linkCol: "#55b4d4",
        greenPrairi: "#92d050",
        yellowPrairi: "#ffc000",
        redPrairi: "#c00000",
        bluePrairi: "#00b0f0",
        textPrairi: "#f2f2f2",
        backgroundPrairi: "#1e1e1d",
        headerPrairi: "#82989e",
        silverPrairi: "#c8c8c8",
        lighterGray: "#3A3A3A",
        navBar: "#262626",
        ineditable: "#aaaeaf"
      },
      width: {
        ten: "10%",
        eighteen: "19%",
        14: "3.5rem",
      },
      zIndex: {
        5: "5",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
      },
    },
  },
  variants: {},

};
