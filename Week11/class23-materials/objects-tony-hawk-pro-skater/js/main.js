// //Create a Tony Hawk Pro Skater constructor that makes skating game character with 4 properties and 3 methods

function Character(charName,charSkate,charRace,charSuperMove) {
    this.charName = charName
    this.charSkate = charSkate
    this.charRace = charRace
    this.charSuperMove = charSuperMove
    this.boost = function(){
        return 'zoooommmm'
    },
    this.heal = function(){
        return 'im healed dawg'
    },
    this.suicide = function(){
        return 'fucking finally'
    }
}

let bilgehanArici = new Character('bilgehan','big ass skate','black','hit em in the dick')





















// function TonyHawkCharacter(chName,chStance,chSponsor,chMove){
//     this.characterName = chName
//     this.stance = chStance
//     this.sponsor = chSponsor
//     this.specialMove = chMove
//     this.flip = function(){
//         console.log('Kickflip!!')
//     }
//     this.taunt = function(){
//         console.log(`Don't make me use my ${this.specialMove}`)
//     }
//     this.grab = function(){
//         console.log('MELON GRABBB')
//     }
// }
// let kareemCampbell = new TonyHawkCharacter('Kareem', 'Goofy', 'Element', 'Ghetto Bird')
