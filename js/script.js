new Vue({
    el: '#root',
    data:{
        contacts: [
            {
            name: 'Michele',
            avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Fabio',
            avatar: 'https://randomuser.me/api/portraits/lego/2.jpg',
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Samuele',
            avatar: 'https://randomuser.me/api/portraits/lego/3.jpg',
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro B.',
            avatar: 'https://randomuser.me/api/portraits/lego/4.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro L.',
            avatar: 'https://randomuser.me/api/portraits/lego/5.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
            }
            ],
            },
            {
            name: 'Claudia',
            avatar: 'https://randomuser.me/api/portraits/lego/6.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Federico',
            avatar: 'https://randomuser.me/api/portraits/lego/7.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Davide',
            avatar: 'https://randomuser.me/api/portraits/lego/8.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
            }
            ],
            }
            ],
        currentChat: 0,
        searchName: '',
        newMsg: '',
        currentDate: luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
    },
    methods:{
        selectChat(index){
            this.currentChat = index;
        },
        searchContact(){
            for(let i=0; i < this.contacts.length; i++){
                if (this.contacts[i].name.toLowerCase().includes(this.searchName.toLowerCase())) {
                    this.contacts[i].visible = true;
                }
                else {
                    this.contacts[i].visible = false;
                }
            }
        },
        chatMessage(){
            if (this.newMsg !== '') {
                this.contacts[this.currentChat].messages.push({
                    date: this.currentDate,
                    message: this.newMsg,
                    status: 'sent',
                })
            } else {
                return this.newMsg = '';
            }
            setTimeout(() =>{
                this.contacts[this.currentChat].messages.push({
                    date: this.currentDate,
                    message: 'Ok, perfetto!',
                    status: 'received',
                });
            }, 1500);
        },
        showMenu(event) {
            if (!event.target.matches('.fa-chevron-down')) {
                let myDropdown = document.getElementById("myDropdown");
                  if (myDropdown.classList.contains('visible')) {
                    myDropdown.classList.remove('visible');
                }
            }
        },         
        deleteMsg(index){
            this.contacts[this.currentChat].messages.splice(index, 1)
        },
    },
})