    const add = document.getElementById('addbtn');
    let input = document.getElementById('userinp');
    const lists = document.getElementById('listitems');


    input.addEventListener('keyup', function(event){
        if(event.keyCode === 13){
            event.preventDefault();
            add.click();
        }
    });

        
        add.addEventListener('click', function(){
            let txt = input.value;
            if(txt === ""){
                alert('Enter a task');
            } else{
                    lists.innerHTML+= `
                      <div class="list">
                          <span id="msg">${txt}</span>
                        <button class="btn-rem">
                            <ion-icon name="trash"></ion-icon>
                        </button>
                      </div>
                    `;
                input.value = "";

                var remlist = document.querySelectorAll(".btn-rem");
                for(var i=0; i<remlist.length; i++){
                    remlist[i].onclick = function(){
                        this.parentNode.remove();
                    }
                }
        
                var listelem = document.querySelectorAll(".list");
                for(var i=0; i<listelem.length; i++){
                    listelem[i].onclick = function(){
                        this.classList.toggle('complete');
                    }
                }
                    
            }
        });

       