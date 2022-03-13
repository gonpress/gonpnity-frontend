<template>
  <div class="container mt-5 list">
    <b-form v-if="show">
      <b-form-group class="mt-3" id="input-group-3" label="분류:" label-for="input-3">
        <b-form-select
            id="input-3"
            v-model="form.categories"
            :options="categories"
            required
        ></b-form-select>
      </b-form-group>

      <b-form-group
          id="input-group-1"
          label="제목:"
          label-for="input-1"
          class="mt-3"
      >
        <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            placeholder="제목을 입력하세요"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="내용:" label-for="input-2"  class="mt-3">
        <b-form-textarea
            id="textarea"
            v-model="form.content"
            placeholder="내용을 입력하세요."
            rows="15"
            max-rows="15"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group class="mt-3">
        <b-button class="m-1" type="button" variant="danger" @click="onBackPage">이전</b-button>
        <b-button class="m-1" type="butgton" variant="primary" @click="onSubmit">등록</b-button>
      </b-form-group>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "create",
  data() {
    return {
      form: {
        title: '',
        content: '',
        categories: null,
      },
      categories: [{ text: 'Select One', value: null }, '자유주제', '질문답변',],
      show: true
    }
  },
  mounted(){
    this.getData(this.$route.params.id);
  },
  methods: {
    async getData(id){
      try{
        const res = await axios.get(`http://localhost:8000/board/${id}`);
        if(res.status === 200)
        {
          this.form = res.data;
        }
      } catch (e) {
        console.error(e);
      }
    },
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onBackPage(event) {
      event.preventDefault()
      this.$router.push('/board');
    }
  }
}
</script>

<style scoped>

</style>