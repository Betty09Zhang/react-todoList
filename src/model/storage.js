// 公共的功能封装成模块
var storage={
    set(key,value){
        window.localStorage.setItem(key,JSON.stringify(value));
    },
    get(key){
        //转化为数组输出。
        return JSON.parse(window.localStorage.getItem(key));
    },
    removeItem(key){
        window.localStorage.removeItem(key);
    }

}
export default storage;