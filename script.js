document.addEventListener("DOMContentLoaded",function() {

var columns=document.getElementsByClassName('box');
var display_result=document.getElementById("mainId");
//alert(columns.length);
zero_function();

    function zero_function()
    {
        for(let i =0; i<columns.length; i++)
        {
            columns[i].addEventListener("dblclick",function() {
                this.innerHTML="0";
                this.style.color="red";
                this.style.fontSize="70px";
                show_result();
                cross_function();
            });
        }
    }

    function cross_function()
    {
        for(let i =0; i<columns.length; i++)
        {
            columns[i].addEventListener("dblclick",function() {
                this.innerHTML="X";
                this.style.color="red";
                this.style.fontSize="70px";
                show_result();
                zero_function();
            });
        }
    }


    function show_result()
    {
            if(   (columns[0].textContent==="0" && columns[1].textContent==="0" && columns[2].textContent==="0") 
                ||(columns[3].textContent==="0" && columns[4].textContent==="0" && columns[5].textContent==="0")
                ||(columns[6].textContent==="0" && columns[7].textContent==="0" && columns[8].textContent==="0") 
                ||(columns[0].textContent==="0" && columns[3].textContent==="0" && columns[6].textContent==="0") 
                ||(columns[7].textContent==="0" && columns[4].textContent==="0" && columns[7].textContent==="0") 
                ||(columns[2].textContent==="0" && columns[5].textContent==="0" && columns[8].textContent==="0") 
                ||(columns[0].textContent==="0" && columns[4].textContent==="0" && columns[8].textContent==="0") 
                ||(columns[2].textContent==="0" && columns[4].textContent==="0" && columns[6].textContent==="0") )
            {
                 display_result.innerHTML="Player one Won !!";
            }
            else if ( (columns[0].textContent==="X" && columns[1].textContent==="X" && columns[2].textContent==="X") 
                    ||(columns[3].textContent==="X" && columns[4].textContent==="X" && columns[5].textContent==="X")
                    ||(columns[6].textContent==="X" && columns[7].textContent==="X" && columns[8].textContent==="X") 
                    ||(columns[0].textContent==="X" && columns[3].textContent==="X" && columns[6].textContent==="X") 
                    ||(columns[7].textContent==="X" && columns[4].textContent==="X" && columns[7].textContent==="X") 
                    ||(columns[2].textContent==="X" && columns[5].textContent==="X" && columns[8].textContent==="X") 
                    ||(columns[0].textContent==="X" && columns[4].textContent==="X" && columns[8].textContent==="X") 
                    ||(columns[2].textContent==="X" && columns[4].textContent==="X" && columns[6].textContent==="X") )
        {
            display_result.innerHTML="Player one Won !!";
        }        
    }


    function resetFunction()
    {
        for(let i=0; i<columns.length; i++)
        {
            columns[i].textContent="";
        }
    }
});

