const clicker = document.getElementById("clicker");

let clicks = 0;

clicker.disabled = true;

const clicking = () =>{
    clicks++;
}

const start = () =>{
    clicker.disabled = false;
    setTimeout(show,5000)
    setTimeout(saveLocal,6000);
    setTimeout(saveSession,6000);
    clicks = 0;
}

const show = () =>{
    clicker.disabled = true;
    alert(clicks);
    
}

const saveLocal = () =>{
    if(localStorage.getItem(document.getElementById('input_nickname').value)<clicks){
        localStorage.setItem(document.getElementById('input_nickname').value,clicks);
    }
}

const saveSession = () =>{
    if(sessionStorage.getItem('SessionBest')<clicks){
        sessionStorage.setItem('SessionBest',clicks);
    }
}

const showBestForAllTime = () => {
    alert(localStorage.getItem(document.getElementById('input_nickname').value));
}

const showBestForSession = () => {
    if(sessionStorage.getItem('SessionBest')!=null){
        alert(sessionStorage.getItem('SessionBest'));
        }else{alert(0)}
    }
    
document.getElementById("start").addEventListener('click', start);
document.getElementById("clicker").addEventListener('click', clicking);
document.getElementById("best_all_time").addEventListener('click', showBestForAllTime);
document.getElementById("clear_your_best").addEventListener('click', ()=>{
    localStorage.setItem(document.getElementById('input_nickname').value,0);
});
document.getElementById("best_score_session").addEventListener('click', showBestForSession);
document.getElementById("clear_best_score_session").addEventListener('click', ()=>{
    sessionStorage.setItem('SessionBest',0);
});
