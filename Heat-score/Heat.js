const gender = prompt(`Are you a boy or a girl ?`)
let hair = 0
let personality = 0
let sugar = 0
let beauty = 0
let hairy = 0
let money = 0


if( gender == "girl") {
    hair = prompt(`From 1 to 10, how hairy is that person`)
    personality = prompt(`From 1 to 10, how good is that person's personality`)
    money = prompt(`Fom 1 to 10, how wealthy is that person`)

    hair = parseInt(hair)
    personality = parseInt(personality)
    money = parseInt(money)


    const total = (hair + personality + money)

    if( 30 < hair + personality + money >= 20) {
        document.write (`<p class='score'> Your matching score out of 30 = ${total}</p>`)
        document.write (`<img class="picture" src="https://cdni.iconscout.com/illustration/premium/thumb/couple-talking-to-each-other-on-online-dating-app-4719409-3919932.png">`)
    }else if (hair + personality + money < 20){
        document.write (`<p class='score'> Your matching score out of 30 = ${total}</p>`)
        document.write (`<p class='score'> Time to find your next target :(</p>`)
        document.write ('<img class="picture2" src="https://img.freepik.com/free-vector/people-suffering-from-heartbreak-sadness_53876-37176.jpg?t=st=1675044220~exp=1675044820~hmac=e519df33f5fe4ce68f70b2a8f85596be946970a414674c26b747d341373b22a7">')
    }else {
        document.write ("<p class='score'>Score Invalid</p>")
        document.write ('<img class="picture2" src="https://media.istockphoto.com/id/505716206/vector/try-again-label.jpg?s=612x612&w=0&k=20&c=wshzgEs7nKEfVk9BJgm94oTSFv1PoOABKGc52Qb6r90=">')
    }
}

if( gender == "boy") {
    hairy = prompt(`From 1 to 10, how hairy is that person`)
    beauty = prompt('From 1 to 10, how beautiful is that person')
    sugar = prompt('From 1 to 10, what is the potential of that person being a sugar mommy')

    hairy = parseInt(hairy)
    beauty = parseInt(beauty)
    sugar = parseInt(sugar)

    const total2 = (hairy + beauty + sugar)

    if(30 < hairy + beauty + sugar >= 20) {
        document.write (`<p class='score'> Your matching score out of 30 = ${total2}</p>`)
        document.write (`<img class="picture" src="https://cdni.iconscout.com/illustration/premium/thumb/couple-talking-to-each-other-on-online-dating-app-4719409-3919932.png">`)
    }else if (hairy + beauty + sugar < 20){
        document.write (`<p class='score'> Your matching score out of 30 = ${total2}</p>`)
        document.write (`<p class='score'> Time to find your next target :(</p>`)
        document.write ('<img class="picture2" src="https://img.freepik.com/free-vector/people-suffering-from-heartbreak-sadness_53876-37176.jpg?t=st=1675044220~exp=1675044820~hmac=e519df33f5fe4ce68f70b2a8f85596be946970a414674c26b747d341373b22a7">')
    }else {
        document.write ("<p class='score'>Score Invalid</p>")
        document.write ('<img class="picture2" src="https://media.istockphoto.com/id/505716206/vector/try-again-label.jpg?s=612x612&w=0&k=20&c=wshzgEs7nKEfVk9BJgm94oTSFv1PoOABKGc52Qb6r90=">')
    }
}





