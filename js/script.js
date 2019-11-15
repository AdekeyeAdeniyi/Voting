

let user1 = 0;
        let user2 = 0;
            
        let applicantone = document.querySelector("#vote-applicantOne");
        let applicanttwo = document.querySelector("#vote-applicantTwo");
        applicantone.addEventListener("click", function(){
           
            user1++;
            document.querySelector("#Vote1").textContent =  `${user1} Votes`;
        });
        
        applicanttwo.addEventListener("click", function(){
           
            user2++;
            document.querySelector("#Vote2").textContent = `${user2} Votes`;
        });
        
        