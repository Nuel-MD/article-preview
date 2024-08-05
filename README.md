max-width: 335px;
    display: flex;
    flex-direction: column;
    height: 580px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.background {
    min-height: 200px;
   
    background-image: url(./images/drawers.jpg);
    background-position:center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

.note {
    background-color: white;
    
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    min-height: 380px;
    display: flex;
    flex-direction: column;

}
.content {
    padding-left: 30px;
    padding-top: 30px;
    padding-right: 30px;
}
.note h1 {
    color: hsl(217, 19%, 35%);
    font-size: 20px;
   font-weight: 700;
   margin: 0px;
}
.note p {
    color: hsl(212, 23%, 69%);
    font-weight: 500;
    margin-top: 30px;
    font-size: 16px;
}
img {
    height: 40px;
    border-radius: 50%;
    align-self: center;
}
#share {
    flex: 0.5;
    background-color: hsl(210, 46%, 95%);
    border-radius: 50%;
    padding: 2px;
    height: 30px;
    max-width: 30px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#name {
    display: inline-block;
    margin: 0px;
    font-size: 16px;
    color: hsl(217, 19%, 35%);
}

.pop-up p {
    margin: 0px;
    letter-spacing: 6px;
    color:hsl(210, 46%, 95%);
}

#date {
    display: block;
    font-size: 16px;
    margin: 0px;
}
.flex{
    display: flex;
    margin-top: 25px;
    
    align-items: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 5px;
    
}
.invisible {
    display: none;
}

.profile{
    flex: 3;
    display: flex;
    gap: 20px;
}

.id
    {
        flex: 3;
        display: flex;
        gap: 10px;
        
    }


    .pop-up {
        flex: 3;
        display: flex;
        padding-right: 35px;
        
        
        justify-content: space-between;
        
        align-items: center;
        border-radius: 15px;
    }

    .pop{ 
        flex: 3;
    }

.color{
    background-color:hsl(214, 17%, 51%) ;
}

@media(min-width: 600px) {
    body {
        width: 100vw;
        ;
    }

    
    .container{
        display: flex;
        flex-direction: row;
        
        max-height: 400px;
    }
    .background{
        flex-basis: 350px;
        min-width: 300px;
        background-image: url(./images/drawers.jpg);
        flex-grow: 0;
        flex-shrink: 0;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    }
    .note {
        flex-basis: 400px;
        flex-grow: 0;
        flex-shrink: 0;
        
        min-width: 600px;
    }
}

<div class="content">
        <h1>Shift the overall look and feel by adding these wonderful 
          touches to furniture in your home</h1>
        <p>Ever been in a room and felt like something was missing? Perhaps 
          it felt slightly bare and uninviting. I’ve got some simple tips 
          to help you make any room feel complete.</p>
      
      
      <div class="flex " id="addColor">
        <div class="profile invisible "  > 
          <div  class="id invisible profileDetails">
            <img src="./images/avatar-michelle.jpg" alt="picture of michelle">
          <div>
            <p id="name">Michelle Appleton</p>
            <p id="date">28 Jun 2020</p>
          </div> 
          </div>
          
          
        </div>



      </div>
        
        <div class="pop invisible" id="sharePopup">
          <div class="pop-up">
            <p>SHARE</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#FFF" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"><path fill="#FFF" d="M20 2.172a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.605.996A4.096 4.096 0 0013.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392 1a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.658a11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.663-12.205A8.354 8.354 0 0020 2.172z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#FFF" d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"/></svg>


          </div>

          <div class="triangle"></div>
        </div>
        
        