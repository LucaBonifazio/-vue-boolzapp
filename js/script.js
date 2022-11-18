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
            status: 'sent',
            isDropdownVisible: false,
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent',
            isDropdownVisible: false,
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received',
            isDropdownVisible: false,
            },
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
            status: 'sent',
            isDropdownVisible: false,
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received',
            isDropdownVisible: false,
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent',
            isDropdownVisible: false,
            },
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
            status: 'received',
            isDropdownVisible: false,
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent',
            isDropdownVisible: false,
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received',
            isDropdownVisible: false,
            },
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
            status: 'sent',
            isDropdownVisible: false,
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received',
            isDropdownVisible: false,
            },
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
            status: 'sent',
            isDropdownVisible: false,
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received',
            isDropdownVisible: false,
            },
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
            status: 'sent',
            isDropdownVisible: false,
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received',
            isDropdownVisible: false,
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent',
            isDropdownVisible: false,
            },
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
            status: 'sent',
            isDropdownVisible: false,
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received',
            isDropdownVisible: false,
            },
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
            status: 'received',
            isDropdownVisible: false,
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'sent',
            isDropdownVisible: false,
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received',
            isDropdownVisible: false,
            },
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
        toggleMenu(msg) {   
            if (msg.isDropdownVisible === true) {
                msg.isDropdownVisible = false;
            } else {
                msg.isDropdownVisible = true;
            }
        },         
        deleteMsg(index){
            this.contacts[this.currentChat].messages.splice(index, 1)
        },
    },
})