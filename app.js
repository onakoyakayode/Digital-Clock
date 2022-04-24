
setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss')


    let hr_dot = document.querySelector('.hr-dot')
    let min_dot = document.querySelector('.min-dot')
    let sec_dot = document.querySelector('.sec-dot')
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM"
    
    
    //Convert 24hours clock to 12hours clock
    
    if(h > 12) {
        h = h - 12
    }
    
    //Add zero before singlwe digit number 
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + `<br><span>Minutes</span>`;
    seconds.innerHTML = s + `<br><span>Seconds</span>`;
    ampm.innerHTML = am;

    //12hrs clock
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;

    //60min clock
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;

    //60sec clock
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;


    hr_dot.style.transform = `rotate(${h * 30}deg)`;
    //360 / 12 = 30;

    min_dot.style.transform = `rotate(${m * 6}deg)`;
    //360 / 60 = 6;

    sec_dot.style.transform = `rotate(${s * 6}deg)`
})

