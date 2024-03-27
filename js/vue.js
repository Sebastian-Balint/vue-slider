//Partendo dal markup fornito nello starter pack, rifare lo slider ma questa volta usando Vue.
//Consigli del giorno:
//- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)

const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "Alfonso",
      classVisible: "visible",
      index: 0,
      imgSrc: [
        "../img/01.webp",
        "../img/02.webp",
        "../img/03.webp",
        "../img/04.webp",
        "../img/05.webp",
      ],
    };
  },
  methods: {
    indexIncrease() {
      this.index++;
      console.log(this.index);
    },

    indexDecrease() {
      this.index--;
      console.log(this.index);
    },
  },
}).mount("#app");
