window.addEventListener('load', (event) => {
    const App = {
        setup() {
            const fontSize = Vue.ref('1.4em');
            const writeDirection= Vue.ref('vertical');
            return {
                fontSize,
                writeDirection,
            };
        },
        methods: {
            notifyClick() {
                this.$notify({
                  title: 'ボタンを押した',
                  message: Vue.h('i', { style: 'color: teal' }, '今のは痛かった……痛かったぞぉおおお！')
                });
            },
            setFontSize() {
                const msg = `フォントサイズを${this.fontSize}に設定します`;
                console.log(msg);
                this.$message(msg);
                this.$notify({title:'フォントサイズ変更', message: msg});
            },
            setWriteDirection() {
                const msg = `文字の方向を${this.writeDirection}に設定します`;
                console.log(msg);
                this.$message(msg);
                this.$notify({title:'文字方向変更', message: msg});
            },
        }
    };
    const app = Vue.createApp(App);
    app.use(ElementPlus);
    app.mount("#app");
});
