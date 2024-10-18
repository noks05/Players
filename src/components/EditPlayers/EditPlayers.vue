<template>
  <div>
    <PlayerList />
    <PlayerRating />
  </div>
</template>

<script>
import PlayerList from './PlayerList.vue';
import PlayerRating from './PlayerRating.vue';

export default {
  name: "LifeCounter",
  components: { PlayerList, PlayerRating },
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
