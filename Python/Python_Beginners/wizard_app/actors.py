
class Creature:
    # Vi vil lave en metode som laver unikke variable for hver instans af Creature.
    # Denne metode er hvad vi kalder objektets CONSTRUCTOR
    # 'self' betyder netop det: den enkelte instans af objektet.
    # Så i den her init metode kan vi for eksempel give vores væsen et personligt navn og en unik level etc
    # self svarer til det vi kalder 'this' i javascript
    def __init__(self, name, level):
        self.name = name
        self.level = level

class Wizard:
    # Wizards minder i udgangspunktet meget om creatures..
    def __init__(self, name, level):
        self.name = name
        self.level = level

    # Nu kommer der noget underlig syntaks, lad os forklare hvad det betyder
    # For det første metoden __repr__(self) - det står for represent, og betyder kort sagt at denne metode kaldes når vi beder instansen om at forklare hvem den er
    # Vi kunne fx sige print(creatures)...
    # Så vil vi gerne have en linje tekst for hvert væsen: "VÆSEN [navn] med LEVEL [12]" eller lignende
    # Format() er en hurtig måde at indsætte variabler i en linje tekst - vi kunne konkatenere, men format er hurtigere...
    def __repr__(self):
        return "Creature {} of level {} just appeared".format(
            self.name, self.level
        )

    def attack(self, creature):
        print("Helten {} angriber {}".format(
            self.name, creature.name
            )
        )

