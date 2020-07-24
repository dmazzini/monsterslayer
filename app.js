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
        }
    }
}

)