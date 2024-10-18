<template>
    <div>
        <h1>Добавить нового игрока</h1>
        <div class="row">
            <input
                v-model="name"
                id="name"
                type="text"
                placeholder="Имя"
            />
            <input
                v-model="life"
                class="inputLife"
                id="life"
                type="number"
                min="1"
                max="100"
                placeholder="Жизней"
            />
            <button
                @click="createPlayer"
                type="button"
            >
                Создать
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CreatePlayer",

    data() {
        return {
            name: "",
            life: "",
        };
    },
mounted(){this.$nextTick(function () {
    ['a','b','c','d','e'].forEach((item,i)=>{
        // console.log(this.$store, item, i, arr)
        this.$store.commit('addPlayer', {name: item, life: i+1})
    })
  })
},
    methods: {
        createPlayer() {
            if (!this.name || !this.name.trim()) {
                alert("Укажите имя");
                return;
            }

            if (!this.life) {
                alert("Укажите количество жизней");
                return;
            }

            if (this.life <= 0) {
                alert("Значение не может быть ноль, или меньше нуля");
                return;
            }

            const newPlayer = { name: this.name, life: this.life };
            this.$store.commit("addPlayer", newPlayer);

            this.name = "";
            this.life = "";
        },
    },
};
</script>

<style lang="scss">
.row {
    display: flex;
    margin-top: 20px;

    input {
        width: 100%;
        height: 24px;
        margin-right: 12px;
    }

    button {
        width: 70px;
    }
}

.inputLife {
    width: 70px;
}
</style>
