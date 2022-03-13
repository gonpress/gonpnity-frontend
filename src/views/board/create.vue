<template>
  <div class="container mt-5 list">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
          <b-button class="m-1" type="reset" variant="danger">초기화</b-button>
          <b-button class="m-1" type="submit" variant="primary">등록</b-button>
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
  methods: {
    async onSubmit(event) {
      event.preventDefault()

      this.form.author = 1;

      console.log(this.form);
      const res = await axios.post(`http://localhost:8000/board`, this.form);
      if(res){
        console.log(res);
        this.$router.push('/board');
      }
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.title = ''
      this.form.content = ''
      this.form.categories = null
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>

</style>