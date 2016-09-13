<template>

</template>
<style>
    @import '../../../static/plugins/swiper/dist/css/swiper.min.css'
</style>
<script>
    import '../../../static/plugins/swiper/dist/js/swiper.min.js'
    export default {
        data () {
            return {}
        },
        ready () {
           let mySwiper = new Swiper ('.swiper-container', {
             slidesPerView: 1,
             pagination:'.swiper-pagination',
             paginationClickable: true,
             spaceBetween: 0,
             loop:true,
             autoplay: 5000,
             autoplayDisableOnInteraction: false
           })
        }
</script>
export default swiper
