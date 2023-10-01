<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-4" id="login">
        <p style="color: white;">로그인</p>
      </div>
      <div class="col-md-12 mb-4">
        <label for="id" class="form-label">ID</label>
        <input type="text" class="form-control" id="id" ref="id" placeholder="이름을 입력하세요">
      </div>
      <div class="col-md-12 mb-4">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" ref="password" placeholder="비밀번호를 입력하세요">
      </div>

      <div class="row">
        <div class="col-md-12 mb-4">
          <button class="btn btn-primary" type="button" @click="login">로그인</button>
        </div>
        <div class="col-md-12 mb-4">
          <button type="button" class="btn btn-secondary">ID 찾기</button>
        </div>
        <div class="col-md-12 mb-4">
          <button type="button" class="btn btn-secondary">Password 찾기</button>
        </div>
        <div class="col-md-12 mb-4">
          <button type="button" class="btn btn-secondary" @click="$router.push({ name: 'join' })">회원가입</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      id: '',
      password: '',
    }
  },
  props: {

  },
  methods: {
    login() {
      const id = this.$refs.id.value;
      const password = this.$refs.password.value;
      axios.post('/root/login', {
        user_id: id,
        user_password: password,
      })
        .then(response => {
          const userData = {
            no: response.data.no,
            user_id: response.data.user_id,
            user_name: response.data.user_name,
            user_login: response.data.user_login,
          };
          sessionStorage.setItem("no", userData.no);
          sessionStorage.setItem("user_id", userData.user_id);
          sessionStorage.setItem("user_name", userData.user_name);
          sessionStorage.setItem("user_login", userData.user_login);
          this.$store.commit('updateUser', userData);
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
}
</script>

<style scoped>
#login {
  display: block;
  margin: auto;
  background-image: url('../assets/top-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
}

#login p {
  text-align: center;
  margin: auto;
}

.row button {
  width: 100%;
}
</style>