const getRemainTime = deadline => {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) /1000;
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours   = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays    = (Math.floor(remainTime / (3600 * 24)));


    return {
      remainTime,
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays
    }
};

const countdown = (deadline, elem, d, h, m, s, finalMessage) => {
  const el = document.getElementById(elem);
  const di = document.getElementById(d);
  const ho = document.getElementById(h);
  const mi = document.getElementById(m);
  
  const se = document.getElementById(s);

  const timerUpdate = setInterval( () => {
    let t = getRemainTime(deadline);
    el.innerHTML = `${t.remainDays} días ${t.remainHours} horas ${t.remainMinutes} minutos y ${t.remainSeconds} segundos`;
    di.innerHTML = `${t.remainDays}`;
    ho.innerHTML = `${t.remainHours}`;
    mi.innerHTML = `${t.remainMinutes}`;
    se.innerHTML = `${t.remainSeconds}`;
    if (t.remainTime <= 1) {
      clearInterval(timerUpdate);
      el.innerHTML = finalMessage;
    }
  }, 1000)
};


countdown('Aug 18 2020 13:00:00 GMT-0400', 'clock', 'dias', 'horas', 'minutos', 'segundos', 'El webinar está en curso');