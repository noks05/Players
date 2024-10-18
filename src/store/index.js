import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            players: [],
        }
    },
    mutations: {
        addPlayer(state, newPlayer) {
            state.players = [...state.players, newPlayer]
        },
    },
    getters: {
        getPlayers(state) {
            return state.players
        }
    }
})  