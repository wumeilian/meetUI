import FastClick from './common/faskclick';


export default function setup(mui) {
    window.addEventListener('load', () => {
        mui.fastClick = FastClick.attach(document.body);

        // android的话不需要加fastclick
        if(mui.platform.isAndroid()){
            mui.fastClick.destroy()
        }
    })
}