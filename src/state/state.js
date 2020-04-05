import {rerender} from './../rerender'
let state = {
  orderInfo:[
    {id: 1, price: 120,num: "1442_164", company: `SO_GURMAN` }
  ],
  countDown: {m:20, s:0 }
};

let m = state.countDown.m;
let s = state.countDown.s;
export let startTimer =() => {
    if (s === 0) {
      if (m === 0) {
        console.log("Время вышло");
        return;
      }
      m--;
      if (m < 10) m = 0 + m;
      s = Number(59);
    }
    else s--;
    if (s < 10) s = 0 + s;
    state.countDown.m = m;
    state.countDown.s = s;
    setTimeout(startTimer, 100);
    rerender(state)
}

export default state
