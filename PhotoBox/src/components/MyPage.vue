<template>
    <div class="container">
        <div class="row">
            <div class="col-12 mb-4" id="login">
                <p style="color: white;">My Page</p>
            </div>
            <div class="col-md-12 mb-4">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" ref="name" :placeholder="$store.state.user_name">
            </div>
            <div class="col-md-12 mb-4">
                <label for="password" class="form-label">Password Update</label>
                <input type="password" class="form-control" id="password" ref="password" placeholder="수정할 비밀번호">
            </div>
            <div class="col-md-12 mb-4">
                <label for="password-confirm" class="form-label">Password Check</label>
                <input type="password" class="form-control" id="password-confirm" ref="password_confirm"
                    placeholder="비밀번호를 확인">
            </div>
            <div style="margin-top: 20px; margin-bottom: 20px;">
                <button type="button" class="btn btn-primary" @click="user_update">수정</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: '',
            password: '',
        }
    },
    props: {

    },
    methods: {
        user_update() {
            const name = this.$refs.name.value;
            const password = this.$refs.password.value;
            const password_check = this.$refs.password_confirm.value;
            if (password !== password_check) {
                alert('비밀번호가 달라용')
                this.$router.push('/mypage');
                return;
            }

            axios.post('/root/mypage', {
                no: this.$store.state.no,
                user_id: this.$store.state.user_id,
                user_name: name,
                user_password: password,
            })
                .then(response => {
                    const userData = {
                        no: response.data.no,
                        user_id: response.data.user_id,
                        user_name: response.data.user_name,
                        user_login: true,
                    };
                    sessionStorage.setItem("no", userData.no);
                    sessionStorage.setItem("user_id", userData.user_id);
                    sessionStorage.setItem("user_name", userData.user_name);
                    sessionStorage.setItem("user_login", userData.user_login);
                    this.$store.commit('updateUser', userData);
                    this.$router.push("/mypage");
                    alert("수정 완료");
                })
                .catch(error => {
                    console.log(error);
                });
        },
    },
}
</script>

<style>
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
</style>