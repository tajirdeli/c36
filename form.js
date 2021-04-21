class Form{
constuctor(){

}
display(){
    var title=createElement("h2")
    title.html("Car Racing game")
    title.position(200,10)
    var input=createInput("name")
    input.position(200,100)
    var button=createButton("Submit")
    button.position(300,150)
    var greeting=createElement("h3")
    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name=input.value()
        playerCount=playerCount+1
        player.update(name)
        player.updateCount(playerCount)
        greeting.html("Hello "+name+" ,Waiting For Others To Join")
        greeting.position(200,200)
    })
}
}