const { defineConfig } = require("@vue/cli-service");
module.exports = {
  outputDir:
    "C:/Users/hth19/git/PhotoBox_Back/src/main/resources/static", // 빌드 타겟 디렉토리
  devServer: {
    proxy: {
      "/root": {
        // '/root' 로 들어오면 포트 8081(스프링 서버)로 보낸다
        target: "http://localhost:8081",
        changeOrigin: true, // cross origin 허용
      },
    },
  },
  pwa: {
    name: "앱 이름",
    themeColor: "#색상코드",
    msTileColor: "#색상코드",
    appleMobileWebAppCapable: "yes",

    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
    manifestOptions: {
      icons: [
        {
          src: "./img/icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./img/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "./img/icons/android-chrome-maskable-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./img/icons/android-chrome-maskable-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
  },
};
