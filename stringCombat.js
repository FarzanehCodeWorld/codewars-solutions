// Description:
// For King and Glory?
// After a long conflict, the rulers of Nek and Glo have decided that a final duel should decide the fate of their countries. Each ruler will select their best knights and send them into battle, one after another. The last standing team will win the crown.

// But the knights don't want to die for nothing, so they ask you, the wise technomagican, to derive which team will win. Can you help them?

// Task
// You're given two strings, s1 and s2. Both represent a team consisting of the characters a..z (repsenting life points 1..26) and A..Z (representing life points 27..52). In each round, the first two participants of both teams (aka their first characters) will duel.

// The character with less life points will die and get removed, whereas the life points of the survivor get reduced by 2/3 (it has only 1/3 of its original value rounded to the closest integer). The winner will still participate in the duels. If both combatants have the same life points, they get both removed.

// The duels stop whenever one of both strings is empty or null value. Unless both are empty or null value, you have to return the winning string and its remaining content, e.g. "Winner: s1(abc)". If both are empty string or null value, return "Draw".

// Some easy example:
//   combat("a","c")      == "Winner: s2(a)"    combat("a","a")     == "Draw"
//   combat("abc","ab")   == "Winner: s1(c)"    combat("ab","ab")   == "Draw"
//   combat("boy","girl") == "Winner: s2(fl)"   combat("dog","cat") == "Draw"

//Solution
function combat(s1, s2) {
    if (!s1 && !s2) { return "Draw" }
    if (!s1)        { return `Winner: s2(${s2})` }
    if (!s2)        { return `Winner: s1(${s1})` }
    let army1 = getArmy(s1), army2 = getArmy(s2)
    while (army1.length > 0 && army2.length > 0) {
        let f1 = army1.shift(), f2 = army2.shift()
        if      (f1 > f2) { f1 = Math.round(f1 / 3) | 0; army1.unshift(f1) }
        else if (f2 > f1) { f2 = Math.round(f2 / 3) | 0; army2.unshift(f2) }
    }
    return (army1.length == 0 && army2.length == 0) 
              ? "Draw"
              : `Winner: s${(army1.length == 0) ? 2 : 1}(${((army1.length == 0) ? army2 : army1).map(a => String.fromCharCode(a > 26 ? a + 38 : a + 96)).join("")})`
}
function getArmy(s) {
    let army = []
    for (let c of s) {
        let power = (c === c.toLowerCase()) ? c.codePointAt() - 96 : c.codePointAt() - 38
        army.push(power)
    }
    return army
}
