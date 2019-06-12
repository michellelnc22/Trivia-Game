
var triviaQuestions = [

    {question: "According to George Sr., there is always money in _______?", 
    choices: ["The Banana Stand", "The Attic", "The Warehouse", "The Yacht"], 
    correctAnswer: 0, 
    image: ["assets/images/george_sr_banana_stand.gif"]

    }, 
    { question: "What song does Gob like to play during his magic shows?",
    choices: ["'Back in Black' by AC/DC", "'The Final Countdown' by Europe", "'I Put a Spell on You' by Screamin' Jay Hawkins", "'A Kind of Magic' by Queen"], 
    correctAnswer: 1, 
    image: ["assets/images/gob_magic_giphy.gif"]
    }, 

    {question: "After they lose their car, what unattractive and impractical vechicle does the Bluth family use instead?", 
    choices: ["Tandem Bike", "Old Motorcycle with Side Car", "Airport Stair Car", "PT Cruiser"], 
    correctAnswer: 2, 
    image: ["assets/images/Star-car.png"]
    }, 

    {question: "What item of clothing does the 'Never Nude' Tobias wear to cover himself?", 
    choices: ["Running Shorts", "Denim Cut-Offs", "Swimming Trunks", "Bike Shorts"], 
    correctAnswer: 1, 
    image: ["assets/images/tobias_cut_offs_giphy.gif"]

    }, 

    {question: "What is the name of George Michael's bland, charmless girlfriend?", 
    choices: ["Ann", "Jane", "Mary", "Sam"], 
    correctAnswer: 0, 
    image: ["assets/images/ann_egg_giphy.gif"]
    }, 

    {question: "Even though she is underage and unqualified, budding con-artist Maeby gets a job as a _____", 
    choices: ["Newspaper Reporter", "TV Producer", "Studio Executive", "Detective"], 
    correctAnswer: 2, 
    image: ["assets/images/maeby.gif"]

    }, 

    {question: "What is dim-witted jock Steve Holt's catch phrase?", 
    choices: ["'Marry Me!'", "'Hey Bro!'", "'Steve Holt!'", "'Come On!'"], 
    correctAnswer: 2, 
    image: ["assets/images/steve_holt_giphy.gif"]
    }, 

    {question: "Which of the following jobs is NOT a job Lindsay has attempted?", 
    choices: ["Sales Assistant", "Maid", "Spokeswoman", "Secretary"], 
    correctAnswer: 1, 
    image: ["assets/images/lindsay_sad.gif"]
    }, 

    {question: "What do Lucille's grandkids call her?", 
    choices: ["Grannie", "Gammy", "Nana", "Gangie"],  
    correctAnswer: 3, 
    image: ["assets/images/lucille_wink.gif"]
    }, 

    {question: "Buster can't control himself around what beverage?", 
    choices: ["Juice", "Chocolate Milk", "Orange Soda", "Strawberry Milk"], 
    correctAnswer: 0, 
    image: ["assets/images/buster_juice_giphy.gif"]
    },
]

var right = 0; 
var wrong = 0; 
var index;  
var pick; 
var userGuess = ""
var questionCount = triviaQuestions.length;  
var answered; 
var currentQuestion = 0; 

function displayQuestion() {
   
    index = Math.floor(Math.random() * triviaQuestions.length); 
    pick = triviaQuestions[index]; 

    $("#questions").html("<p>" + pick.question + "</p>"); 
    for (var i = 0; i < pick.choices.length; i++) {
        var userChoice = $("<div>"); 
        userChoice.addClass("answer-selector"); 
        userChoice.html(pick.choices[i]); 
        userChoice.attr("guesses", i); 
        $("#content").append(userChoice); 
        

    }
   

    $(".answer-selector").on("click", function() {
        userGuess = parseInt($(this).attr("guesses")); 
    
        if (userGuess === pick.correctAnswer) {
            right++; 
            userGuess=""; 
            $("#answer-bin").html("<p>That is Correct!</p>"); 
            $("#picture-bin").html("<img src= " + pick.image + ">"); 
            next(); 

        } else {
            wrong++; 
            userGuess = ""; 
            $("#answer-bin").html("<p>That is Incorrect!</p>")
            $("#picture-bin").html("<img src= " + pick.image + ">"); 
            next(); 
        }
    
    }
    )

}

function next() {

    
    if ((right + wrong) === questionCount) {
        $("#questions").empty();
        $("#picture-bin").empty(); 
        $("#answer-bin").append("<p> Correct: " + right + "</p>"); 
        $("#answer-bin").append("<p> Incorrect: " + wrong + "</p>"); 
        $("reset").css("display", "show"); 
        right = 0; 
        wrong = 0; 

    } else {
        $("#content").empty(); 
        displayQuestion(); 
    }

}


$("#start").on("click", function() {
    $("#start").css("display", "none");
    $("#reset").css("display", "none");  
    displayQuestion(); 

}   
)

