 function gameObject (){
    return {
     home:{
        teamName:"Brooklyn Nets",
        colors:"Black,White",
        players:{
            "Alan Anderson":{
            number:0,
            shoe:16,
            points:22,
            rebounds:12,
            assits:12,
            steals:3,
            blocks:1,
            slamDunks:1
            }
        ,
        
        "Reggie evans":{
            number:30,
            shoe:14,
            points:12,
            assits:12,
            rebounds:12,
            steals:12,
            blocks:12,
            slamDunks: 7  
        },

        
        "Brook Lopez":{
            number:11,
            shoe:17,
            points:17,
            rebounds:19,
            assits:10,
            steals:3,
            blocks:1,
            slamDunks:15
        },

        
        "Masson Plumlee":{
            number:1,
            shoe:19,
            points:26,
            rebounds:12,
            assits:6,
            steals:3,
            blocks:8,
            slamDunks:5
        },

        
        "Jason Terry":{
            number:31,
            shoe:15,
            points:19,
            rebounds:2,
            assits:2,
            steals:4,
            blocks:11,
            slamDunks:1
        } 
        
    }
},
      
      away:{
        teamName:"Charlotte Hornets",
        colors:"turquoise,purple",
        players:{
        "Jeff Adrien":{
            number:4,
            shoe:18,
            points:10,
            rebounds:1,
            assits:1,
            steals:2,
            blocks:7,
            slamDunks:2
        },

        "Bismak Biyombo":{
            number:0,
            shoe:16,
            points:12,
            rebounds:4,
            assits:7,
            steals:7,
            blocks:15,
            slamDunks:10
        },

         "DeSagna Diop":{
            number:2,
            shoe:14,
            points:24,
            rebounds:12,
            assits:12,
            steals:4,
            blocks:5,
            slamDunks:5  
            },

            
        "Ben Gordon":{
            number:8,
            shoe:15,
            points:33,
            rebounds:3,
            assits:2,
            steals:1,
            blocks:1,
            slamDunks:0  
            },

        "Brendan Haywood":{
            number:33,
            shoe:15,
            points:6,
            rebounds:12,
            assits:12,
            steals:22,
            blocks:5,
            slamDunks:12 
           }

        }
}


    }



}   



console.log(gameObject())



function numPointsScored(playerName){
    for(item in gameObject()){
        let playerObject = gameObject()[item].players
        for(names in playerObject){
            if(names == playerName){
                return playerObject[names].points
            }
        }
    }
}

console.log(numPointsScored("Reggie evans"))



function shoeSize(playerName){
        for(item in gameObject()){
        let playerObject = gameObject()[item].players
        for(names in playerObject){
            if(names == playerName){
                return playerObject[names].shoe
            }
        }
    }
}

console.log(shoeSize("Ben Gordon"))


function teamColors(team_Name){
     for(item in gameObject()){
        if(gameObject()[item].teamName == team_Name){
            return (gameObject()[item].colors).split()
        }
       
        }
    }

    console.log(teamColors("Brooklyn Nets"))


function teamName(){
    let names =[]
    for(item in gameObject()){
        let team_Name = gameObject()[item].teamName
        names.push(team_Name)
    }
    return names
}

console.log(teamName())


function playerStats(playerName){
    for(item in gameObject()){
        let playerObject = gameObject()[item].players
        for(names in playerObject){
            if(names == playerName){
                return playerObject[names]
            }
        }
    }
    
}

console.log(playerStats("Ben Gordon"))

 function bigShoeRebounds(){
    let bigShoe = 0
    for(item in gameObject()){
        let playerObject = gameObject()[item].players
        for(keys in playerObject){
            if(playerObject[keys].shoe > bigShoe){
                bigShoe = playerObject[keys].shoe
            }
            return playerObject[keys].rebounds
        }
    }
 }


 console.log(bigShoeRebounds())