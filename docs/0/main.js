window.addEventListener('load', (event) => {
    const App = {
        setup() {
            const onClick = ()=>{
                alert('今のは痛かった……痛かったぞぉおおお！');
            };
            return {
                onClick,
            };
        },
    };
    const app = Vue.createApp(App);
    app.use(ElementPlus);
    app.mount("#app");
});
