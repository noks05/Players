<template>
  <div>
    <h2>Рейтинг</h2>
    <table>
      <tr v-for="(item, index) in sortedPlayers" :key="index">
        <td v-text="`${index + 1}`"></td>
        <td v-html="`У игрока <b>${item.name}</b> ${item.life} жизней`"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "PlayerRating",

  computed: {
    sortedPlayers() {
      return [...this.$store.getters.getPlayers].sort((a, b) => b.life - a.life);
    },
  },
};
</script>
