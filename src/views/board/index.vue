<template>
  <div class="container list">
    <div class="top"><b-button class="mt-3" variant="primary" @click="moveToCreate">등록</b-button></div>
    <div class="bottom">
      <div class="mt-3" v-if="boards.length > 0">
      <b-table striped hover :items="boards" @row-clicked="moveToDetail"></b-table>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "board",
  data() {
    return {
      boards: [],
    }
  },
  mounted() {
    this.getList();
  },
  methods:{
    async getList() {
      try{
        const res = await axios.get("http://localhost:8000/board");
        if(res.status === 200)
        {
          this.boards = res.data;
        }
      } catch (e) {
        console.error(e);
      }
    },
    moveToDetail(record){
      const url = `/board/${record.id}`;
      this.$router.push(url);
    },
    moveToCreate(){
      const url = `/board/create`;
      this.$router.push(url);
    }
  }
}
</script>

<style scoped>
.list{
  display: flex;
  flex-direction: column;
}
.top{
  margin-left: auto;
}
</style>