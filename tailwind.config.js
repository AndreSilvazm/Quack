/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'SushiImg':"url('/Assests/almondegas.png')",

        "img2": "url('https://s3-alpha-sig.figma.com/img/8fd1/30cf/cdd1c77f3ae8eac68dc94e03eee5a398?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U1CfmgG5TCyD3ZUkg76CvDACt111pSAsVUofbLv-3NKSugTcUBuVOX~4I38MuHujBnyMoaY3Yz7CZxG8kPJf6DQWnfdAhBM2eFFVAM4n1EAK0V10UgiTlvtkPPgMDqgHYFWHo~y9d9AZVXu10stHeJp0rf9-j5nCSjH7puAk4zVcnixUUQrbaQyWgTlJbzPIlymsq2j2ILC~Lj--OjCeRVJepiMLReTOmEwkZsIydfpYxJPVSuW1C3UXGwkn7lm9P3M9j0GQzyELQ~ELrrCkGtryrCQKxPs0noL2sr~KcSJB19-xn7gacmh236wERea0ocpPlvfrycgRTnjuTpJTJA__')",

        "img3": "url('https://s3-alpha-sig.figma.com/img/6e95/ec68/fda73ebcf80624ca61657171eda5bd59?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NukD9rFiQiWQUv0Eq3pdnvQIo6qlyhKOq~zG5c4IQgIe5TOfCxnNrOq0r-DE0Z5E~E38gvP4e-PE6ZB4mF7Z42nCXQPB4njVPkPJTL-IJ8eDT0tf~fINlbR5n-m-MfaHtmctkZtntJDM45OjyEmrWFP1RbhBIO~HuoPgvW0xP2Tpm609GKUYtob3QrhOAw8eBw6kHhnzOkwET24odbvJZ0K-LM9Hj1Ea0v3ai5mIrW0BVUg7Dm-5y-kpKHCvH9ZQrnhpkZBdbW4Fx2vrderhU1b3wxgQH5BNwX47PagMDv~5MASa5v-lxj6yP3cc2~G0RgLXHdfu1PfyE~qigPVUoQ__')",
        "Prato2": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {

        'Primary': '#FF6D1D',
        'Secondary': '#FFB746'
      },
    },
  },
  plugins: [],
};
