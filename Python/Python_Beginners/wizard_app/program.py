import random

from actors import Creature, Wizard


def main():
    game_loop()

def game_loop():
    # Vi laver en liste med uhyrer/væsner af klassen Creature
    # Bemærk at de skal INSTANTIERES - vi kalder her deres constructor metode - og giver dem unikke egenskaber
    # Dvs nedenfor laver vi både et array med Creatures - og vi instantierer dem med forskellige egenskaber (kalder deres constructor metode)

    creatures = [
        Creature('Tudse', 1),
        Creature('Tiger', 12),
        Creature('Flagermus', 3),
        Creature('Drage', 50),
        Creature('Ond troldmand', 1000)
    ]

    # Og så laver vi også en tom helt...
    hero = Wizard('Gandalf', 75)

    # Debugging: Prøv at sætte et breakpoint her og køre programmet i debugmode
    while True:

        # Vi starter altid med at et eller andet væsen dukker op
        # Vi importerer random - og bruger random.choice til at vælge et creature fra vores creature-array

        active_creature = random.choice(creatures)

        print("En {} med level {} er kommet ud af en mørk og tåget skov...".format(
            active_creature.name, active_creature.level
            )
        )

        cmd = input('Vil du angribe[a], løbe din vej[l] eller bare kigge dig omkring[k]?')
        if cmd == 'a':
            print ('Angriber')
            hero.attack(active_creature)
        elif cmd == 'l':
            print ('Løber væk')
        elif cmd == 'l':
            print ('Kigger...')
        else:
            print('Exit')
            break



# Dybest set fortæller vi at koden i main kun skal køres, hvis filen bliver eksekveret - ikke importeret
if __name__ == '__main__':
    main()