<template>
  <h1>Редактирование игроков</h1>

  <div v-for="item in usersLife" :key="item.name" class="row">
    <input :id="item.name" v-model="item.name" />
    <button class="button" @click="minusLife(item)">-</button>
    <span class="lifeCount">{{ item.life }}</span>
    <button class="button" @click="plusLife(item)">+</button>
  </div>

  <h2>Рейтинг</h2>
  <table>
    <tr v-for="(item, index) in rating" :key="index">
      <td v-text="`${index + 1}`"></td>
      <td v-html="`У игрока <b>${item.name}</b> ${item.life} жизней`"></td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "LifeCounter",

  props: {
    playersList: {
      type: Array,
    },
  },

  data() {
    return {
      usersLife: [],
    };
  },

  created() {
    this.usersLife = this.playersList.map(player => ({
      name: player.name,
      life: player.life,
    }));
  },

  computed: {
    rating() {
      let places = [...this.usersLife]; 

      places.sort((a, b) => b.life - a.life);

      return places;
    },
  },

  methods: {
    plusLife(item) {
      item.life++;
    },

    minusLife(item) {
      if (item.life > 0) {
        item.life--;
      }
    },
  },
};
</script>

<style lang="scss">
.row {
  display: flex;
  align-items: center;
  margin-top: 20px;

  input {
    margin-right: 12px;
    width: 100%;
    height: 24px;
  }

  .button {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  .life {
    margin: 0 12px;
  }

  .lifeCount {
    display: inline-block;
    width: 40px;
  }
}

table {
  width: 100%;

  td {
    border: 1px solid #2c3e50;
  }
}
</style>
