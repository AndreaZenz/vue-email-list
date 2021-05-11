// Descrizione:
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

new Vue({
    el: '#app',
    data (){
        return {
            emailArray:[],
            nLoop: 10,
        }

    },
    mounted(){
        
            for (let i = 0; i < this.nLoop; i++) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then(response => (this.emailArray.push(response.data.response)))
            }
        
    }
})
