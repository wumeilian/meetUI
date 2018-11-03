import FastClick from 'fastclick';


export default function setup(mui) {
    window.addEventListener('load', () => {
        mui.fastClick = FastClick.attach(document.body);

        // android的话不需要加fastclick
        if(mui.platform.isAndroid()){
            mui.fastClick.destroy()
        }
    })
}