


$(document).ready(function()
   { 

  


function play(){

for(let i=0;i<9;i++)
{ 
$ (document.getElementById(i)).addClass("empty").addClass("clear").removeClass("win") ;
 document.getElementById(i).innerHTML = "";

  
}

$("table").removeClass("finish");
$("button").hide();
$("#endgame").hide();



var spot=5;
   window.game = [0,0,0,0,0,0,0,0,0];

function combo()
{
  var newSpot= spot%3;

  if ($("th").eq(spot).siblings().eq(0)[0].innerText=="X" && $("th").eq(spot).siblings().eq(1)[0].innerText=="X")
      $("th").eq(spot).parent().children().addClass("win").removeClass("clear");
     else 
       if($("tr").eq(0).children().eq(newSpot)[0].innerText == $("tr").eq(1).children().eq(newSpot)[0].innerText  &&
          $("tr").eq(0).children().eq(newSpot)[0].innerText == $("tr").eq(2).children().eq(newSpot)[0].innerText)
        {
           console.log("spot is " + spot);
           console.log("newSpot is " + newSpot);
           
          for(let i=0;i<3;i++)
          {
            $("tr").eq(i).children().eq(newSpot).addClass("win").removeClass("clear");
          }
        }
        else 
        if (game[0]=="X" && game[8]=="X")
        {
           for(let i=0;i<9;i=i+4)
           $("th").eq(i).addClass("win").removeClass("clear");
        }
        else
        {
          for(let i=2;i<7;i=i+2)
           $("th").eq(i).addClass("win").removeClass("clear");

        }

}
   





$("th").on("click",function()        //player turn   
{
  if($("table").is(".finish"))
{ 
}
else
{


  if($(this).is(".empty"))
   {
   
   $ (this).removeClass("empty");
    var currentBox = $ (this).attr("rel");
     game[currentBox]="O";
     (this).innerHTML="O";
       moveAI();
       window.check=checkWinner("X");
       if (check=="X")
    {
      
    document.getElementById("endgame").innerHTML = "X wins!";
    $("#endgame").slideDown("fast");
    $("button").show();
    $ ("table").addClass("finish");
    combo();
    

    }
     
    if (check=="tie")
    {
      document.getElementById("endgame").innerHTML = "Draw";  
      $("#endgame").slideDown("fast");
       $ ("table").addClass("finish");
       $("button").show();
    }

  }
}
})



function checkWinner(turn1)
{
  window.winner;
 

 if((game[0]==game[1] && game[1]==game[2] && game[0]!=0 ) ||
  (game[3]==game[4] && game[4]==game[5]  && game[3]!=0)||
     (game[6]==game[7] && game[7]==game[8]  && game[6]!=0) ||
      (game[0]==game[3] && game[3]==game[6]  && game[0]!=0) ||
      (game[1]==game[4] && game[4]==game[7]  && game[1]!=0) ||
      (game[2]==game[5] && game[5]==game[8]  && game[2]!=0) ||
      (game[0]==game[4] && game[4]==game[8]  && game[0]!=0) ||
      (game[2]==game[4] && game[4]==game[6]  && game[2]!=0)) 
      
          {
              
              return turn1; 
             
             }

            else 
                if ($("th").is(".empty"))
                { 
                 
                  return "null";}

                  else
                   { 
                   
                     return "tie"; }
 }
   
    

function moveAI()
{ 
  let bestscore = -Infinity;
  var move;  
          
  for(let i=0;i<9;i++)
  {   
           
           if (game[i]==0)
              {  
                
                 
                game[i]="X";
                $ (document.getElementById(i)).removeClass("empty");

                 var score = minimax(game,0,false);
                  $ (document.getElementById(i)).addClass("empty");
                 game[i]=0;
                 
                 if (score>bestscore)
                 {  
                    
                      bestscore=score;
                      move = i;
                 }            
              }   
  } 
      
       if (move!=null)

      { game[move] = "X";
         spot=move;
       
      document.getElementById(move).innerHTML= "X";
       $ (document.getElementById(move)).removeClass("empty");
      } 
 }        

    
     window.scores = {
       "X": 10,
       "O": -10,
       "tie": 0
        };

       function minimax(game,depth,isMaximising)
        {
           var score;
           var result;
           

          if (isMaximising)
           result = checkWinner("O")
          else 
            result = checkWinner("X");
           if (result!= "null") {
            return scores[result];
          }
      
              if (isMaximising)
              {                
                var bestscore= -Infinity;
                  for (var i=0;i<9;i++)
               { if (game[i]==0)
                     
                      {  game[i]="X";
                        $ (document.getElementById(i)).removeClass("empty");
   
                         
                         score = minimax(game, depth +1 ,false);
                         game[i]=0;
                         $ (document.getElementById(i)).addClass("empty");
                       if (score> bestscore) 
                       {    bestscore=score;
                          
                        }
                    } 
                 }  
                  
                  return bestscore;
              }
        
            else
            {
              
              
              var bestscore = Infinity;
              for (let i=0;i<9;i++)
               { if (game[i]==0)
                  {   game[i]="O";
                    $ (document.getElementById(i)).removeClass("empty");
                     
                     

                    score= minimax(game, depth +1 ,true);
                    $ (document.getElementById(i)).addClass("empty");
                     game[i]=0;

                     
                     if(score<bestscore)
                      bestscore=score;
                     
                   }
               } 
              
               return bestscore;

              } 
         }


}
play();
$("button").on("click",function()
{
  play();
})



}
)



     
 



   