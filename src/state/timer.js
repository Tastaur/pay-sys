
export let Timer = () => {
  let countDown = { m: 20, s: 0 }
  let m = countDown.m;
  let s = countDown.s;
  if (s == 0) {
    if (m == 0) {
      console.log("Время вышло");
      return;
    }
    m--;
    if (m < 10) m = "0" + m;
    s = 59;
  } else s--;
  if (s < 10) s = "0" + s;
  countDown.m = m;
  countDown.s = s;
  setTimeout(Timer, 1000);

};
