export class DataSource{
    increment(num){
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve(++num);
            },1000);
        })
    }

    decrement(num){
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve(--num);
            },1000);
        })
    }

    clear(){
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve(0);
            },1000);
        });
    }

    init(){
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve(100);
            },100);
        });
    }


}
