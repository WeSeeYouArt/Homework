class Robot {
    constructor(xCurent, yCurent, orientare, maxX, maxY){
        this.xCurent = xCurent;
        this.yCurent = yCurent;
        this.orientare = orientare;
        this.maxX = maxX;
        this.maxY = maxY;
        this.isAlive = true;
    }
  
    left(){
        switch(this.orientare){
            case 'N':
                this.orientare = 'V';
                break;
            case 'V':
                this.orientare = 'S';
                break;
            case 'S':
                this.orientare = 'E';
                break;
            case 'E':
                this.orientare = 'N';
                break;
        }
    }
  
    right(){
        switch(this.orientare){
            case 'N':
                this.orientare = 'E';
                break;
            case 'E':
                this.orientare = 'S';
                break;
            case 'S':
                this.orientare = 'V';
                break;
            case 'V':
                this.orientare = 'N';
                break;
        }
    }
    move(){
        if(this.orientare == 'N'){
            if(this.isOutside(this.xCurent, this.yCurent + 1)){
                this.isAlive = false;
                return;
            }
            this.yCurent += 1;
        } else if(this.orientare == 'V'){
            if(this.isOutside(this.xCurent - 1, this.yCurent)){
                this.isAlive = false;
                return;
            }
            this.xCurent -= 1;
        } else if(this.orientare == 'S'){
            if(this.isOutside(this.xCurent, this.yCurent - 1)){
                this.isAlive = false;
                return;
            }
            this.yCurent -= 1;
        } else if(this.orientare == 'E'){
            if(this.isOutside(this.xCurent + 1, this.yCurent)){
                this.isAlive = false;
                return;
            }
            this.xCurent += 1;
        }
    }
  
    do(instructions){
        for(let i = 0; i < instructions.length; i++){
            if(instructions[i] == 'M'){
                this.move();
            } else if(instructions[i] == 'L'){
                this.left();
            } else if(instructions[i] == 'R'){
                this.right();
            }
        }
        let pozitia = this.getPosition();
        let starea = this.getIsAlive() ? '' : 'RIP';
        console.log(pozitia.xCurent +' '+ pozitia.yCurent +' '+ pozitia.orientare +' '+ starea);
    }
  
    getIsAlive(){
        return this.isAlive;
    }
  
    isOutside(x, y) {
        return y > this.maxY || x > this.maxX || y < 0 || x < 0;
    }
  
    getPosition(){
        return {xCurent: this.xCurent, yCurent: this.yCurent, orientare: this.orientare};
    }
  }

const robot1 = new Robot(1, 2, 'N', 5, 5);
robot1.do('LMLMLMLMM');
const robot2 = new Robot(1, 5, 'N', 5, 5);
robot2.do('LMMRMLMRM');
const robot3 = new Robot(0, 0, 'N', 5, 5);
robot3.do('MRMMLMM');