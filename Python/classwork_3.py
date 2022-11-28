typeFirst = int(input('If you want input seconds write <1>,else if you want input minutes write <2> or if you want input hours write <3>:\nYour choice is - '))
num = int(input())
type_second = int(input('If you want change to seconds write <1>,else if you want change to minutes write <2> or if you want change to hours write <3>:\nYour choice is - '))
if (typeFirst == type_second):
    print(f'Your result is - {num}\n')
elif (typeFirst + 1 == type_second):
    print(f'Your result is - {num / 60}')
elif (typeFirst + 2 == type_second):
    print(f'Your result is - {num / 3600}')
elif (typeFirst - 1 == type_second):
    print(f'Your result is - {num * 60}')
elif (typeFirst - 2 == type_second):
    print(f'Your result is - {num * 3600}')
