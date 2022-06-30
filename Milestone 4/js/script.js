
var app = new Vue (
    {
        el:'#root',
        data: {
            
            currentElement: 0,
            newMessage: '',
            contactSearch: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    info: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ]
        },
        
        methods:{
            changeIndex(index){
                this.currentElement = index
            },
            // creo una funzione per aggiungere un messaggio all'array messages
           addMessage(currentElement){
            if(this.newMessage.length > 0){
                console.log(this.newMessage)
                let currentDate = new Date().toLocaleDateString();
                let currentHours = new Date().toLocaleTimeString();
                let finalDate = currentHours + '' + '-' + currentDate;
                this.contacts[currentElement].messages.push(
                   {
                    date: finalDate,
                    text: this.newMessage,
                    status: 'sent'
                   }

               )
               this.newMessage = '';
                // aggiungo una funzione che invia in messaggio(in realtà tutto l'oggetto del messaggio) e lo pusha nell'array messages
                // uso un'arrow function per permettere al this di essere erditato dallo scope ((addMessage))
               setTimeout(() => {
                let currentDate = new Date().toLocaleDateString();
                let currentHours = new Date().toLocaleTimeString();
                let finalDate = currentHours + '' + '-' + currentDate;
                 this.contacts[currentElement].messages.push(
                    {
                        
                        date: finalDate,
                        text: 'ok',
                        status: 'received'
                        
                    }
                 )
                
                }, 1000)
            }

           },
           
        //    filtro la ricerca in base ai nomi
           filterName(){

               this.contacts.forEach((element) => {
        
                if(element.name.toLowerCase().includes(this.contactSearch)){
                    
                    element.visible = true;
                    
                }else{
                    element.visible = false;
                }

               });
           },

           curtain(messageIndex){
             console.log(messageIndex)
            
             if(this.contacts[messageIndex].info === true){
                 console.log(this.contacts[messageIndex].info)
                this.contacts[messageIndex].info = false
               
             }else{
                this.contacts[messageIndex].info = true

             } ;
             console.log(' message index', this.contacts[messageIndex].info)
            
             
           },
           
        }
    }
)