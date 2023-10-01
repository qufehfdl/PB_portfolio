<template>
    <div class="container">
        <div class="row" style="text-align: center;">
            <div class="col-12 mb-4" id="login">
                <p style="color: white;">상자 쌓기</p>
            </div>
            <div class="col-md-12 mb-4">
                <input type="file" class="form-control" @change="handleFileChange">
            </div>
            <div class="carousel-wrapper">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button v-for="(item, index) in carouselItems" :key="index" type="button"
                            :data-bs-target="'#carouselExampleIndicators'" :data-bs-slide-to="index"
                            :class="{ 'active': index === 0 }" :aria-current="index === 0 ? 'true' : 'false'"
                            :aria-label="`Slide ${index + 1}`"></button>
                    </div>
                    <div class="carousel-inner">
                        <div v-for="(item, index) in carouselItems" :key="index" class="carousel-item"
                            :class="{ 'active': index === 0 }">
                            <img :src="item" class="d-block w-100 h-100 img-fluid" alt="Preview Image">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="col-md-12 mb-4">
            </div>
            <div style="margin-top: 20px; margin-bottom: 20px;">
                <button type="button" class="btn btn-primary">쌓기</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            selectedImage: null,
            previewImage: null,
            carouselItems: [],
        };
    },
    methods: {
        handleFileChange(event) {
            if (this.carouselItems.length >= 5) {
                return;
            }
            this.selectedImage = event.target.files[0];
            this.previewImage = URL.createObjectURL(this.selectedImage);
            this.carouselItems.push(this.previewImage);
        },
    },
};
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

.carousel-wrapper {
    max-width: 600px;
    margin: 0 auto;
}

.carousel-item img {
    object-fit: cover;
    width: 100%;
    max-height: 400px;
    min-height: 400px;
}
</style>