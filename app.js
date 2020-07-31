var app = new Vue({
    el:'#app',
    data: {
        jugador: 100,
        monstruo: 100,
        enJuego: false
    },
    methods: {
        atacar: function() {
            this.jugador = this.jugador -10
            this.monstruo = this.monstruo -10
        },
        curar: function() {
            this.jugador = this.jugador + 10
            this.monstruo = this.monstruo + 10
        },
        iniciarJuego: function() {
            this.enJuego = true;
        }
    }
}
)