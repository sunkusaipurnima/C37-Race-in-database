class Form{
    constructor(){
        this.input = createInput("Enter Your Name");
        this.button= createButton("Register");
        this.greeting= createElement("h3");

    }

    hideFields(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        var title= createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);   

        this.input.position(130,160);
        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
            
            playerCount++;
            player.name = this.input.value();
            player.index= playerCount;

            player.update();
            player.updateCount(playerCount);
    
            this.greeting.html("Hello  "+ player.name);
            this.greeting.position(130,160);
    });
    }

    
}