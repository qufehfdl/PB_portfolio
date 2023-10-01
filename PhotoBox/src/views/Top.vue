<template>
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <!-- 메인아이콘 -->
      <a class="navbar-brand" @click="$router.push({ name: 'home' })"><i class="bi bi-box"></i> 사진상자</a>
      <!-- 토글 버튼 -->
      <div id="side_button1" v-show="isMobile1">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <!-- 검색 -->
      <form class="d-flex mt-3" role="search" style="margin-bottom: 1rem !important;">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-light" type="submit">Search</button>
      </form>
      <!-- 토글 버튼 -->
      <div id="side_button2" v-show="isMobile2">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <!-- 사이드바 시작 -->
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><i class="bi bi-box"></i> 사진상자</h5>
          <span v-if="$store.state.user_login != null">
            {{ $store.state.user_name }}님 안녕하세요
          </span>
          <span v-if="$store.state.user_login == null">
            <h1><i class="bi bi-person-add" @click="$router.push({ name: 'login' })"></i></h1>
          </span>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item" v-if="$store.state.user_login == true">
              <div class="stack_box mb-3" @click="$router.push({ name: 'write' })"><i class="bi bi-boxes"></i>&nbsp;상자 쌓기
              </div>
              <div class="stack_box mb-3" @click="$router.push({ name: 'mypage' })"><a class="nav-link active"
                  aria-current="page">마이페이지</a></div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                작품
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">하루 한 컷</a></li>
                <li><a class="dropdown-item" href="#">인물</a></li>
                <li><a class="dropdown-item" href="#">감성</a></li>
                <li><a class="dropdown-item" href="#">동물</a></li>
                <li><a class="dropdown-item" href="#">자연</a></li>
                <li><a class="dropdown-item" href="#">음식</a></li>
                <li><a class="dropdown-item" href="#">천체</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                게시판
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">자유게시판</a></li>
                <li><a class="dropdown-item" href="#">질문&답변</a></li>
                <li><a class="dropdown-item" href="#">카메라 후기</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                같이찍어요
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">서울</a></li>
                <li><a class="dropdown-item" href="#">경기</a></li>
                <li><a class="dropdown-item" href="#">인천</a></li>
                <li><a class="dropdown-item" href="#">강원</a></li>
                <li><a class="dropdown-item" href="#">충북</a></li>
                <li><a class="dropdown-item" href="#">충남</a></li>
                <li><a class="dropdown-item" href="#">전북</a></li>
                <li><a class="dropdown-item" href="#">전남</a></li>
                <li><a class="dropdown-item" href="#">경북</a></li>
                <li><a class="dropdown-item" href="#">경남</a></li>
                <li><a class="dropdown-item" href="#">제주</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                공지사항
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">공지사항</a></li>
                <li><a class="dropdown-item" href="#">드리는 말씀</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <button v-if="$store.state.user_login != null" type="button" class="btn btn-danger" @click="logout"
            style="width: 100%;">로그아웃</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      isMobile1: false,
      isMobile2: false,
    };
  },
  created() {
  },
  mounted() {
    this.checkWindowSize();
    window.addEventListener('resize', this.checkWindowSize);

  },
  methods: {
    checkWindowSize() {
      this.isMobile1 = window.innerWidth <= 532; // Adjust the breakpoint as needed
      this.isMobile2 = window.innerWidth >= 533; // Adjust the breakpoint as needed
    },
    logout() {
      sessionStorage.removeItem("no");
      sessionStorage.removeItem("user_id");
      sessionStorage.removeItem("user_name");
      sessionStorage.removeItem("user_login");
      location.href = '/';
    }
  },
  computed: {},
}
</script>
<style scoped>
.navbar {
  height: auto;
  background-image: url('../assets/top-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
}

.offcanvas-header {
  background-image: url('../assets/top-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
}

.offcanvas-header span {
  display: flex;
  align-items: center;
}

.offcanvas-header span h3 {
  margin-left: 180px;
}

.stack_box {
  background-image: url('../assets/stack.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>