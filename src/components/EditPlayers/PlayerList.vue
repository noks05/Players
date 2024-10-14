<template>
  <div>
    <h1>Редактирование игроков</h1>
    <div v-for="item in usersLife" :key="item.name" class="row">
      <input
        :id="item.name"
        :value="item.name"
        @input="(e)=>changeName(e.target.value, item)"
      />
      <button class="button" @click="minusLife(item)">-</button>
      <span class="lifeCount">{{ item.life }}</span>
      <button class="button" @click="plusLife(item)">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerList",

  props: {
    players: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      usersLife: [],
      timeId: 0,
    };
  },

  created() {
    this.usersLife = this.players.map(player => ({
      name: player.name,
      life: player.life,
    }));
  },

  methods: {
    plusLife(item) {
      item.life++;
      this.$emit("update-players", this.usersLife);
    },

    minusLife(item) {
      if (item.life > 1) {
        item.life--;
        this.$emit("update-players", this.usersLife);
      }
    },

    changeName(str, it) {
      if(this.timeId) clearTimeout(this.timeId)
      this.timeId = setTimeout(()=>it.name = str.trim(), 500) 
      this.$emit("update-players", this.usersLife);
    },
  },
};
</script>
