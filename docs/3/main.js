window.addEventListener('load', (event) => {
    const App = {
        setup() {
            const onClick = ()=>{
                alert('今のは痛かった……痛かったぞぉおおお！');
            };
            const setFontSize = (event)=>{
                console.log(fontSize.value);
                alert(`フォントサイズを${fontSize.value}に設定します`);
            };
            const setWriteDirection = (event)=>{
                console.log(writeDirection.value);
                alert(`文字の方向を${writeDirection.value}に設定します`);
            }
            const fontSize = Vue.ref('1.4em');
            const writeDirection= Vue.ref('vertical');
            return {
                onClick,
                setFontSize,
                setWriteDirection,
                fontSize,
                writeDirection,
            };
        },
    };
    const app = Vue.createApp(App);
    app.use(ElementPlus);
    app.mount("#app");
});
