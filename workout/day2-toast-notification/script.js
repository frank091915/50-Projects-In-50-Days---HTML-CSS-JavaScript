const btn = document.querySelector('.btn');
const toastContainer = document.querySelector('#finnui-toast');

const randomTextArr = ['message one', 'message two', 'message three', 'message four'];
const randomTypeArr = ['warning', 'success', 'error'];

function createToast(text,type){
    const toastDom = document.createElement('div');
    const toastText = text || randomText()
    const toastType =  type || randomType();
    toastDom.classList.add('finn-toast')
    toastDom.classList.add(toastType)
    toastDom.innerText = toastText
    return toastDom
}

function randomText(){
    return randomTextArr[Math.floor(Math.random()*randomTextArr.length)]
}
function randomType(){
    return randomTypeArr[Math.floor(Math.random()*randomTypeArr.length)]
}

function showToast(duration = 5){
    const toastNode = createToast();
    toastContainer.appendChild(toastNode)
    setTimeout(()=>{
        toastNode.remove()
    },duration*1000)
}

btn.addEventListener('click',()=>showToast())