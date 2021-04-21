class Game{
constructor(){

}
GetState(){
    var GS=database.ref("gameState")
    GS.on("value",function(data){
        gameState=data.val()
    })
}
updateState(state){
    database.ref("/").update({
        gameState:state
    })
}
 Start(){
     if (gameState===0){
         player=new Player()
         player.getCount()
         form= new Form()
         form.display()
     }
 }
 
}