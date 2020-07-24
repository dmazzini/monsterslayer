new Vue({
    el:'#app',
    data: {
        jugador: 90,
        monstruo: 70,
        enJuego: false
    },
    methods: {
        iniciarJuego: function() {
            this.enJuego = true
            this.jugador = 100
            this.monstruo = 100 
        },
        atacar: function() {
            let danio = 7

            this.jugador -= danio
            this.monstruo -= danio 

            if(this.monstruo <= 0) {
                alert('Ganaste!')
                this.enJuego = false
            }
        },
        ataqueEspecial: function() {

        },
        curar: function() {

        },
        rendirse: function() {

        }
    }
}

)