<template>
    <div class="container">
        <div class="row">
            <div class="col-12 mb-4" id="login">
                <p style="color: white;">회원 가입</p>
            </div>
            <div class="col-md-12 mb-4">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" ref="name" placeholder="이름을 입력하세요">
            </div>
            <div class="col-md-12 mb-4">
                <label for="id" class="form-label">ID</label>
                <input type="text" class="form-control" id="id" ref="id" placeholder="이름을 입력하세요" style="float: left;">
                <button type="button" class="btn btn-warning btn-sm" style="margin-left: 20px; ">ID 중복 확인</button>
            </div>
            <div class="col-md-12 mb-4">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" ref="password" placeholder="비밀번호를 입력하세요">
            </div>
            <div class="col-md-12 mb-4">
                <label for="password-confirm" class="form-label">Password Check</label>
                <input type="password" class="form-control" id="password-confirm" ref="password_confirm"
                    placeholder="비밀번호를 확인">
            </div>
            <label class="form-label">E-Mail</label>
            <div class="col-md-4">
                <input type="text" class="form-control" id="autoSizingInput">
            </div>
            <div class="col-md-4">
                <div class="input-group">
                    <div class="input-group-text">@</div>
                    <input type="text" class="form-control" id="autoSizingInputGroup" ref="email" placeholder="직접 입력">
                </div>
            </div>
            <div class="col-md-4">
                <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                <select class="form-select" id="autoSizingSelect" @change="updateEmailInput">
                    <option value="" selected>이메일 선택</option>
                    <option value="naver.com">naver.com</option>
                    <option value="daum.net">daum.net</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="hanmail.net">hanmail.net</option>
                    <option value="nate.com">nate.com</option>
                </select>
            </div>
            <div style="margin-top: 20px; margin-bottom: 20px;">
                <button type="button" class="btn btn-primary" @click="join">회원 가입</button>
                <button type="button" class="btn btn-secondary" style="margin-left: 20px;">로그인</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
        }
    },
    methods: {
        updateEmailInput(event) {
            const emailInput = document.getElementById('autoSizingInputGroup');
            const selectedOption = event.target.value;
            if (selectedOption === '직접입력') {
                emailInput.value = '';
            } else {
                emailInput.value = selectedOption;
            }
        },
        join() {
            const name = this.$refs.name.value;
            const id = this.$refs.id.value;
            const password = this.$refs.password.value;
            const password_check = this.$refs.password_confirm.value;
            const email = this.$refs.email.value;
            if (password !== password_check) {
                alert('비밀번호가 달라용')
                this.$router.push('/join');
                return;
            }
            axios.post(`/root/join`, {
                user_name: name,
                user_id: id,
                user_password: password,
                user_email: email
            })
                .then(response => {
                    this.login_succeess = response.data;
                    if (this.login_succeess == true) {
                        this.$router.push('/');
                    } else {
                        this.$router.push('/join');
                    }
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
</style>