body {
    background-color: hsl(210, 46%, 95%) ;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-family: "Manrope", sans-serif;

}
.container {
    display: flex;
    flex-direction: row;
    
    border-radius: 10px;
    max-width: 1100px;
    min-width: 700px;
    max-height: 380px;
    min-height: 380px;
}

.background {
    background-image: url(./images/drawers.jpg);
    height: 380px;
    background-position:center;
    background-repeat: no-repeat;
    background-size: cover;
    flex: 1;
    width: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    
}

.note{
    background-color: white;
    width: 100%;
    
    padding: 50px;
    flex: 1.2;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    
}

.note h1 {
    color: hsl(217, 19%, 35%);
   font-size: 25px;
   font-weight: 700;
   margin: 0px;
}

img {
    height: 40px;
    border-radius: 50%;
    align-self: center;
}

.note p {
    color: hsl(212, 23%, 69%);
    font-weight: 500;
    font-size: 18px;
}

#name {
    display: inline-block;
    margin: 0px;
    font-size: 20px;
    color: hsl(217, 19%, 35%);
}

#date {
    display: block;
    margin: 0px;
}

.flex{
    display: flex;
    margin-top: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;

}
.profile{
    flex: 3;
    display: flex;
    gap: 20px;
}

#share {
    flex: 0.5;
    background-color: hsl(210, 46%, 95%);
    border-radius: 50%;
    padding: 2px;
    height: 30px;
    max-width: 40px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pop-up {
    display: flex;
    
    padding: 20px;
    max-width: 330px;
    justify-content: space-around;
    background-color:hsl(214, 17%, 51%) ;
    align-items: center;
    border-radius: 15px;
}

.pop{
    display: flex;
    position: absolute;
    z-index: 100;
    flex-direction: column;
    
    width: 330px;
    
    margin-bottom: 170px;
    
    
    
}

.pop-up p {
    margin: 0px;
    letter-spacing: 6px;
    color:hsl(210, 46%, 95%);
}
.triangle{
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  
  border-top: 20px solid hsl(214, 17%, 51%);
  align-self: center;
}

@media (max-width: 700px){
    body {
        width: 100vw;
        padding: 100px;
        justify-content: center;
        align-items: center;

    }
    .container {
        display: grid;
        grid-template-columns: 320px;
        grid-template-rows: 250px 250px 80px;
    }
    .background {
        grid-area: 1/1/2/2;
    }
    .note {
        grid-area: 2/1/3/2;
    }

}