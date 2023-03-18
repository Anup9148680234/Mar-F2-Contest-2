setTimeout(function OpeningCeremony() {
    console.log("Let the games begin");
    var score = { red: 0, green:0, blue:0, yellow:0};
  
    setTimeout(function Race100M() {
      console.log("100M Sprint Event has Started");
      console.log("Old Score:", score);
      const records = {};
      const colors = Object.keys(score);
  
      colors.forEach((color) => {
        records[color] = Math.floor(Math.random() * 6 + 10); 
      });
  
      const placement = colors.sort();
      score[placement[0]] += 50;
      score[placement[1]] += 25;
    //   score[placement[2]] += 10;
    //   score[placement[3]] += 5;
      console.log("100M Sprint Event has Concluded");
      console.log(placement[0].toUpperCase() + " Won the 100M Sprint.");
      console.log("New High Score:", score);
      
  
      setTimeout(function LongJump() {
        console.log("Long Jump Race started.");
        console.log("Old Score:", score);
        const colors = Object.keys(score);
        const winner = colors[Math.floor(Math.random()*4)];
        score[winner] += 150;
        console.log("Long Jump Event has Concluded");
        console.log(winner.toUpperCase() + " Won Long Jump Event.");
        console.log("New High Score:", score);
        
        setTimeout(function HighJump() {
          console.log("High Jump Event has started");
          console.log("Old Score:", score);
          const colors = Object.keys(score);
          const answer = prompt("What colour secured the highest jump?");

          if (colors.includes(answer)) {
            score[answer] += 100;
            console.log("High Jump Event has Concluded");
            console.log(answer.toUpperCase() + " Won High Jump Event.");
            console.log("New High Score:", score); 
          } 
          else{
            console.log("Event was cancelled");
          }

          setTimeout(function AwardCeremony() {
            console.log("Award Ceremony has started");
            
            const colors = Object.keys(score);
            const placement = colors.sort((a, b) => score[b] - score[a]);
  
            console.log("1st place goes to :", placement[0].toLocaleUpperCase(),"-", score[placement[0]], "points");
            console.log("2nd place goes to :", placement[1].toLocaleUpperCase(),"-", score[placement[1]], "points");
            console.log("3rd place goes to :", placement[2].toLocaleUpperCase(),"-", score[placement[2]], "points");
            console.log("4th place goes to :", placement[3].toLocaleUpperCase(),"-", score[placement[3]], "points");
          });
        });
      }, 2000);
    }, 3000);
  }, 1000);