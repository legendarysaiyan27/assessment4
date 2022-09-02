let makefor = []

module.exports = {


    getFortune: (req, res) => {
        const fortunes = ["A dubious friend may be an enemy in camouflage", "A fresh start will put you on your way.", 
         "A golden egg of opportunity falls into your lap this month.", "A lifetime friend shall soon be made.", 
         "A pleasant surprise is waiting for you.", "All the effort you are making will ultimately pay off."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
   
    },  

    getMisfortune: (req, res) => {
        const misfortunes = ["You will soon have the longest day of your life", "You'll stub your toe and then hit your funny bone at the same time", "You'll get very sick", "Your pet will Die", "You'll step on a lego", "Today you will buy an ice cream and then drop it", "you will meet your favorite celebrity but then throw up on them", "you will write the best code ever but then the server will crash and you'll lose it all forever", "you'll meet the girl of your dreams and then she will date your little brother", "lol you're screwed"]
        //random misfortune
        let randomIndex = Math.floor(Math.random() * misfortunes.length);
        let randomMisfortune = misfortunes[randomIndex];
    
        res.status(200).send(randomMisfortune);
    },

   createMakefor: (req, res) => {
   const { inputValue } = req.body;
   makefor.push(inputValue);
    res.status(200).send(makefor)
   },

   deleteMakefor: (req, res) => {
    const { index } = req.params;
    makefor.splice(index, 1)
    res.status(200).send(makefor)
   }
};

   
    

