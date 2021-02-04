window.addEventListener('load', (event) => {
    const App = {
        setup() {
            const onClick = ()=>{
                alert('今のは痛かった……痛かったぞぉおおお！');
            };
            const setFontSize = (size)=>{
                alert(`フォントサイズを${size}に設定します`);
            };
            const setWriteDirection = (direction)=>{
                alert(`文字の方向を${direction}に設定します`);
            }
            return {
                onClick,
                setFontSize,
                setWriteDirection,
            };
        },
    };
    const app = Vue.createApp(App);
    app.use(ElementPlus);
    app.mount("#app");
});
