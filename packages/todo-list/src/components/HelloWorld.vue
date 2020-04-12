<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form @submit.prevent="add()">
      <input v-model="task" type="text" />
      <button type="submit">Add</button>
    </form>
    <ul class="list">
      <li class="item" v-for="t in tasks" :key="t">{{t}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      task: "",
      tasks: []
    };
  },
  methods: {
    add() {
      if (this.task.trim()) {
        this.tasks.push(this.task);
        this.task = "";
      }
    }
  }
};
</script>
<style scoped>
form {
  width: 300px;
  background: #41b882;
  margin: 10px auto;
  padding: 10px 0px;
  border-radius: 10px;
}
.list {
  list-style: none;
  width: 300px;
  background: #41b882;
  margin: 10px auto;
  padding: 0px;
  border-radius: 10px;
}
.item {
  color: #fff;
  font-size: 16;
  padding: 5px;
  display: block;
  text-align: center;
}
</style>