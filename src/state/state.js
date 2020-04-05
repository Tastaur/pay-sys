import {rerender} from './../rerender'
let state = {
  orderInfo:[
    {id: 1, price: 120,num: "1442_164", company: `SO_GURMAN` }
  ],
  countDown: {m:20, s:'00' }
};

let m = Number(state.countDown.m);
let s = Number(state.countDown.s);
export let startTimer =() => {
    if (s === 0) {
      if (m === 0) {
        console.log("Время вышло");
        return;
      }
      m--;
      if (m < 10) m = "0" + m;
      s = 59;
    }
    else s--;
    if (s < 10) s = "0" + s;
    state.countDown.m = m;
    state.countDown.s = s;
    setTimeout(startTimer, 1000);
    rerender(state)
}

export default state
