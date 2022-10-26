//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function TonyHawkChar(charName,charGender,charBuild,charSkate){
    this.name = charName
    this.gender = charGender
    this.build = charBuild
    this.skate = charSkate

    this.specialMove = function () {
        alert ('kickflip')
    }

    this.specialMove2 = function () {
        alert ('flip')
    }
}

let bilgehan = new TonyHawkChar('bilgehan','male','muscular','surf')
let altair = new TonyHawkChar('altair ibn ahad','male','muscular','hidden blade')

bilgehan.specialMove()
altair.specialMove2()
