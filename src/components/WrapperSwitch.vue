<template>
  <div class="wrapper">
      <div class="tabs">
        <button class="tabCreate" type="button" @click="switchState(true)">Создать</button>
        <button type="button" @click="switchState(false)">Редактировать</button>
      </div>
  
      <CreatePlayer
        @players-list="createdPlayers"
        v-if="state"
      />
      <EditPlayers 
      :playersList="playersList" 
      v-else/>
  
      <h3 v-if="!!state.length">Что то пошло не так, попробуйте перезагрузить страницу</h3>
  
  </div>
</template>

<script>
import CreatePlayer from "./CreatePlayer.vue";
import EditPlayers from "./EditPlayers.vue";

export default {
  name: "WrapperSwitch",
  components: {
    CreatePlayer,
    EditPlayers,
  },

  data() {
    return {
      playersList: [],
      state: true,
    };
  },

  methods: {
    createdPlayers(list) {
      this.playersList = list;
    },
    switchState(bol) {
      this.state = bol
    },
  },
};
</script>

<style lang="scss">
.wrapper{
  position: relative;
  text-align: center;
  margin: 60px auto;
  padding-top: 20px;
  width: 600px;

  .tabs{
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translate(-50%);
  }

  .tabCreate{
    margin-right: 20px;
  }
}
</style>
