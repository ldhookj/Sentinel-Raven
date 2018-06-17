/*  -WHAT IS THIS?-
    The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
    To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
    There you can either import the file as a whole or just copy the text into a dialogue.

    -KEEP IN MIND-
    Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
    It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/
/*  -INFORMATION-
    Subject:    Creature
    Effect:     This is the syntax for adding a creature that can be used on the Companion and Wild Shape pages
    Sheet:      v12.999 (2018-06-04)
*/
var iFileName = "Sentinal Raven.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned
CreatureList["sentinal raven"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets [] //the name entered here is used to identify the input, so it has to be the same as the "name : " below, but in lower case
    name: "Sentinal Raven", // Required; the name to use for the race
    source: ["WnW", 2], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]
    size: 5, // Required; the size of the race (Gargantuan = 0, Huge = 1, Large = 2, Medium = 3, Small = 4, Tiny = 5)
    type: "Fiend", // Required; the type of the creature. Always put something here!
    subtype: "", // Required; the subtype of the creature. Do not delete this line, but it can be just ""
    companion: "familiar", // Optional; whether or not the creature will be added to the menu on the companion page, except the ranger's companion, that is based on other criteria.
    /* The options are the following within the quotation marks (note the use of only lower case):
        - "familiar" (Find Familiar spell AND Pact of the Chain warlock feature)
        - "familiar_not_al" [only available from v13 onwards, same as "familiar" but ignored if the sheet is used for Adventurers League]
        - "mount" (Find Steed spell)
        - "steed" (Find Greater Steed spell)
        - "pact_of_the_chain" (Pact of the Chain warlock feature) 
        - "companion" (UA: Revised Ranger's Beast Conclave feature)
    Note that for the creature to be available to the PHB ranger, you don't need to do anything
    */
    alignment: "Unaligned", // Required; the alignment. Always put something here!
    ac: 12, // Required; the armour class. Always put something here!
    hp: 4, //  Required; the amount of hit points. Always put something here!
    hd: [1, 4], //[#, die]. Required; Always put something here!
    speed: "10 ft, fly 50 ft", // Required; the speed of the race in feet (do not forget to put "ft" in the string)
    scores: [2, 14, 8, 2, 12, 6], // [Str, Dex, Con, Int, Wis, Cha] Required;
    saves: ["", "", "", "", "", ""], // [Str, Dex, Con, Int, Wis, Cha]. Required; The total of each Saving Throw (not just the modifier to the ability modifier). Only put something there if it is different than the normal ability score modifier (so when the creature is proficient or has other bonuses).
    skills: { // Optional; any skill proficiencies the creature has. Enter the name of the skill with the total bonus in that skill, not just the proficiency bonus, but inlcude the ability score modifier as well!
        "perception": 5,
    }, // if the creature has no skill proficiencies, you can delete the entire traits entry
    damage_vulnerabilities: "", // Optional; damage vulnerabilitie(s) the creature has. This line can be deleted if you don't have anything to put here
    damage_resistances: "", // Optional; damage resistance(s) the creature has. This line can be deleted if you don't have anything to put here
    damage_immunities: "", // Optional; damage immunities the creature has. This line can be deleted if you don't have anything to put here
    condition_immunities: "", // Optional; conditional immunities the creature has. This line can be deleted if you don't have anything to put here
    senses: "", // Required; senses granted by the race. This text will be put in the "Senses" section on the sheet. If you don't have anything to put here, DO NOT DELETE THIS LINE, but just put ""
    languages: "", // Required; the language(s) known by the creature, note that they all appear as one string
    challengeRating: "5", // Required; the Challenge Rating of the creature. Always put something here!
    proficiencyBonus: 2, // Required; Proficiency Bonus the creature has. Always put something here!
    attacksAction: 1, // Required; The amount of attacks per Attack action the creature can do. Always put something here!
    attacks: [{ // Required; the attacks used for the companion and wild shape page
            name: "Beak", // name of the attack
            ability: 1, // the ability score used to calculate the to hit modifier (and the damage if applicable, see below). [Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6]
            damage: ["", 4, "Piercing"], // [#, die, type] First entry is the amount of dice, second is the type of dice, and third is the damage type. //"" for die is allowed, meaning no die will be given, only the first digit will be present.
            range: "Melee (5 ft)", // the attack's range
            description: "", // the attack's description
            modifiers: [4, "", ""], // bonuses to: [to hit, to damage, add ability to damage]; "" means ignore. //For the first two (to hit and to damage), you can also enter the three-letter abbreviation of an ability score (Str, Dex, Con, Int, Wis, or Cha), to have that ability's modifier added to it. //The last one can be either "" (meaning you add ability modifier to damage) or false (meaning you don't add the ability modifier to damage)
            dc: false, // optional, will make the To Hit field display a DC instead. This will overwrite the first value you put in Modifiers
            tooltip: "" // optional, this text will be added to the tooltip of the description field of the attack of the Wild Shape. It will do nothing for the attack on the Companion page
        }, // you can add more by copying what is between the {}, (also include the {}, )and putting it here
    ], // if the creature has no attacks, simply put [], DO NEVER DELETE the attack entry
    features: [{ // Optional; features that are added to the companion "Features" section as bullet points after the abovementioned vulnerabilitie, immunities, resistances, senses, and languages //with the Wild Shape, these features are never added
        name: "Sentinal", // name of the trait
        description: "In combat, you roll initiative for the raven and control how it acts. If it is slain by a creature, you gain advantage on all attack rolls against the killer for the next 24 hours.", // description of the trait
    }, ], // if the creature has no traits, you can delete the entire traits entry
    actions: [{ // Optional; actions that are added to the companion "Traits" section as bullet points //with the Wild Shape, these traits are only added (also as bullet points) if no "wildshapeString" is defined, see below
        name: "Mimicry", // name of the action
        description: "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check.", // description of the action
    }, ],
    traits: [{ // Optional; traits that are added to the companion "Traits" section as bullet points after the actions //with the Wild Shape, these traits are only added (also as bullet points) if no "wildshapeString" is defined, see below
        name: "Sentinal", // name of the trait
        description: "While perched on your shoulder, the raven can't be targeted by any attack or another harmful effect; only you can cast spells on it; it can't take damage, and it is incapacitated.", // description of the trait
    }, ], // if the creature has no traits, you can delete the entire traits entry
    wildshapeString: "", // Optional; a string to put in the Wild Shape Traits & Features field. If you define this, no trait or action will be added to the Wild Shape Traits & Features field. This is here so you can make all the traits and features fit into the limited space on the Wild Shape page //This line can be deleted if you don't have anything to put here
};