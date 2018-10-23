def main():
    game_loop()


def game_loop():
    # vi laver en liste med uhyrer
    creatures = [

    ]
    # Og en tom helt
    hero = None

    while True:
        cmd = input('Do you attack[a], run away[r] or look around[l]?')
        if cmd == 'a':
            print ('Attacking')
        elif cmd == 'r':
            print ('Running')
        elif cmd == 'l':
            print ('Looking around')
        else:
            print('Exit')
            break



# Dybest set fortæller vi at koden i main kun skal køres, hvis filen bliver eksekveret - ikke importeret
if __name__ == '__main__':
    main()