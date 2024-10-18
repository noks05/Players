<template>
  <div>
    <h1>Редактирование игроков</h1>
    <div
      v-for="(player, index) in this.$store.getters.getPlayers"
      :key="index"
      class="row"
    >
      <input v-model="player.name" />
      <button
        class="button"
        @click="() => minusLife(player)"
      >
        -
      </button>

      <span class="lifeCount">{{ player.life }}</span>

      <button
        class="button"
        @click="() => plusLife(player)"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerList",
  created(){
    console.log(this.$store.state.players)
  },
  methods: {
    plusLife(p) {
      p.life++
    },
    minusLife(p) {
      if (p.life > 1) {
        p.life--
      }
    },
  },
};
</script>
