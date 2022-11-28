work_years = int(input('How years do you work in this company - '))
salary = int(input('How much is your salary - '))
if (work_years >= 5):
    print(f'Your bonus is - {salary * 5 / 100}\n')
else:
    print(f'You no have bonus :(')