module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
                    @import "@/assets/scss/style.scss"; 
                    @import 'node_modules/bootstrap/scss/bootstrap';
                    @import 'node_modules/bootstrap-vue/src/index.scss';
                    `
            }
        }
    }
}