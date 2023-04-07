export default{
    eventByCategory(state){
        return state.events ? state.events.filter(e=>e.category_event == state.tab) : state.events;     
      },
}   