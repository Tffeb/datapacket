import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    jiaoyies:{}
  },
  mutations:{
    getJiaoyi(state,jiaoyies) {
     return state.jiaoyies = jiaoyies
  }
  },
  actions:{
    // async jiaoyi(context){
    //   const result = await jiaoyie()
    //   if (result.code === 0) {
    //     const jiaoyiinfo = result.data
    //     // console.log(jiaoyiinfo)
    //     context.commit('getJiaoyi',jiaoyiinfo)
    //   }
    // }
  },
  getters:{

  }
})