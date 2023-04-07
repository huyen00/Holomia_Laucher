export default{

  showFormModel(state){
    state.showHide_FormModel = true
    // state.editMode = false
  },
  closeFormModel(state){
    state.showHide_FormModel = false
  },
  showTab(state,name){
    state.tab= name
  },
   set_device(state, data){
    state.device = data.data
    state.pagination= data
    console.log("data device", data)
   },
   changePage(state, pageNumber){
    state.currentPage  = pageNumber
   
   }
}