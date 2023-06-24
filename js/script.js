// controllo Vue
console.log(`Vue OK`, Vue);

// Installo Vue
const { createApp } = Vue;

// Vue
const app = createApp({
  data() {
    return {
      filterBy: "",
      lastAccess: "",
      currentIndex: 0,
      newMessage: "",
      textRequired: false,
      user: {
        name: "Nome Utente",
        avatar: "_io",
      },
      contacts: [
        {
          id: 1,
          name: "Michele",
          avatar: "_1",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              id: 3,
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          id: 2,
          name: "Fabio",
          avatar: "_2",
          visible: true,
          messages: [
            {
              id: 1,
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              id: 2,
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              id: 3,
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          id: 3,
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              id: 1,
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              id: 2,
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              id: 3,
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          id: 4,
          name: "Alessandro B.",
          avatar: "_4",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          id: 5,
          name: "Alessandro L.",
          avatar: "_5",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          id: 6,
          name: "Claudia",
          avatar: "_6",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              id: 3,
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          id: 7,
          name: "Federico",
          avatar: "_7",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          id: 8,
          name: "Davide",
          avatar: "_8",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              id: 3,
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
      answers: [
        "Certo!",
        "Assolutamente!",
        "Sì, senza dubbio.",
        "Probabilmente sì.",
        "Sembra proprio di sì.",
        "È possibile.",
        "Forse.",
        "Non saprei.",
        "Mmm, difficile da dire.",
        "Non mi è chiaro.",
        "Mi spiace, non so.",
        "Non posso rispondere a quella domanda.",
        "No, mi dispiace.",
        "Assolutamente no.",
        "No, sicuramente no.",
        "Impossibile.",
        "Non credo proprio.",
        "No, non sembra possibile.",
        "Non ne sono sicuro.",
        "Non sono autorizzato a rispondere a quella domanda.",
        "Mi scuso, non posso rispondere.",
        "Non so cosa dire.",
        "Mi lasci perplesso.",
        "Potrebbe essere.",
        "È una possibilità.",
        "Dipende.",
        "Non ho idea.",
        "Sarebbe meglio chiedere a qualcun altro.",
        "Non ho informazioni sufficienti per rispondere.",
        "Mi sfugge.",
        "Mi dispiace, non ho una risposta.",
        "Mi trovo in difficoltà nel rispondere.",
        "Non posso dirtelo.",
        "Non posso confermarlo né smentirlo.",
        "Potrebbe essere vero.",
        "È una buona probabilità.",
        "Mi sembra plausibile.",
        "Potrebbe darsi.",
        "Non ne sono sicuro al 100%.",
        "Non posso giudicare.",
        "Non mi sento in grado di rispondere.",
        "Mi lascia perplesso.",
        "Mi crea confusione.",
        "Non so cosa pensare.",
        "Mi mette in dubbio.",
        "Non ho sufficienti elementi per rispondere.",
        "È una possibilità remota.",
        "Non mi sembra fattibile.",
        "Non mi sento in grado di valutare.",
        "Non posso confermare né smentire.",
        "Mi lascia senza parole.",
        "Mi disorienta.",
        "Mi lascia senza risposta.",
        "Mi lascia perplesso.",
        "Mi fa riflettere.",
        "Mi confonde.",
        "Mi crea incertezza.",
        "Non so che dire.",
        "Mi lascia incerto.",
        "Mi lascia senza indicazioni.",
        "Non mi sento in grado di dare una risposta.",
        "Non posso esprimermi.",
        "Non ho le informazioni necessarie.",
        "Mi lascia in sospeso.",
        "Non ho conoscenze a riguardo.",
        "Non posso rispondere a quella domanda.",
        "Mi pongo delle domande.",
        "Mi lascia senza spiegazioni.",
        "Mi mette in difficoltà.",
        "Non so che pensare.",
        "Mi crea perplessità.",
        "Mi lascia senza soluzioni.",
        "Mi lascia senza parola.",
        "Non posso dirtelo con certezza.",
        "Mi disorienta completamente.",
        "Mi lascia in bilico.",
        "Non ho le competenze per rispondere.",
        "Mi pone dei dubbi.",
        "Mi lascia senza una conclusione.",
        "Mi lascia senza risposte.",
        "Mi mette in dubbio.",
        "Non ho sufficienti informazioni.",
        "Non posso fare previsioni.",
        "Mi lascia senza certezze.",
        "Mi lascia senza riscontro.",
        "Mi lascia senza una soluzione.",
        "Non ho la risposta che cerchi.",
        "Mi lascia senza un verdetto.",
        "Mi lascia senza una spiegazione.",
        "Mi lascia perplesso.",
        "Mi lascia senza possibilità.",
        "Mi lascia senza una risposta chiara.",
        "Mi lascia senza direzione.",
        "Mi lascia senza alternative.",
        "Non sono in grado di dirti la risposta.",
        "Mi lascia senza risoluzione.",
        "Mi lascia senza una risposta definitiva.",
        "Mi lascia senza una valutazione.",
        "Mi lascia senza una conclusione definitiva.",
        "Mi lascia senza una risposta precisa.",
        "Mi lascia senza una soluzione chiara.",
        "Mi lascia senza una spiegazione logica.",
        "Mi lascia senza indicazioni certe.",
        "Mi lascia senza un risultato.",
        "Mi lascia senza un parere.",
        "Mi lascia senza possibilità di scelta.",
      ],
    };
  },
  methods: {
    getLastAccess() {
      const lastAccess = this.contacts[this.currentIndex]["messages"]
        .filter((message) => message.status === "received")
        .reduce(
          (acc, message) =>
            acc === null || message.date > acc ? message.date : acc,
          null
        );

      return (this.lastAccess = lastAccess);
    },
    setCurrentChat(targetIndex) {
      this.currentIndex = targetIndex;
    },
    removeMessage(messageIndex) {
      console.log(messageIndex);
      this.contacts[this.currentIndex]["messages"].splice(messageIndex, 1);
    },
    addNewMessage() {
      if (this.newMessage) {
        const message = {
          id: new Date().getTime(),
          date: new Date().toLocaleTimeString(),
          message: this.newMessage,
          status: "sent",
        };
        this.contacts[this.currentIndex]["messages"].push(message);
        this.newMessage = "";
        setTimeout(this.addNewResponse, 3000);
      } else {
        this.textRequired = !this.textRequired;
      }
    },
    stringToDate(stringDate) {
      if (stringDate.includes("/")) {
        stringDate = stringDate.replaceAll("/", "-");
        dayjs.extend(window.dayjs_plugin_customParseFormat);
        date = dayjs(stringDate, "MM/DD/YYYY HH:mm:ss");
        formatDate = new Date(date);
        return formatDate.toLocaleTimeString();
      } else {
        return new Date().toLocaleTimeString();
      }
    },
    addNewResponse() {
      const message = {
        id: new Date().getTime(),
        date: new Date().toLocaleTimeString(),
        message: this.getRandomAnswer(),
        status: "received",
      };
      this.contacts[this.currentIndex]["messages"].push(message);
    },
    getRandomAnswer() {
      const min = 0;
      const max = this.answers.length - 1;
      const randomAnswer = Math.floor(Math.random() * (max - min + 1)) + min;
      return this.answers[randomAnswer];
    },
    showContact(contact) {
      if (this.filterBy == "") {
        return (contact.visible = true);
      } else {
        return contact.name.toLowerCase().includes(this.filterBy.toLowerCase());
      }
    },
    showLastMessage(index) {
      let messages = this.contacts[index].messages;

      if (messages.length > 0) {
        let lastMessage = messages[messages.length - 1];
        return lastMessage.message;
      } else {
        return "Inizia nuova chat +";
      }
    },
  },
});

// Stampa Vue
app.mount("#root");
