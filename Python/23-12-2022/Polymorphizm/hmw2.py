class AmericanDate:
    def __init__(self, year, month, day):
        self.year = str(year)
        if len(str(month)) == 1:
            self.month = '0' + str(month)
        else:
            self.month = str(month)
        if len(str(day)) == 1:
            self.day = '0' + str(day)
        else:
            self.day = day
    def set_year(self, year):
        self.year = str(year)
    def set_month(self, month):
        if len(str(month)) == 1:
            self.month = '0' + str(month)
        else:
            self.month = str(month)
    def set_day(self, day):
        if len(str(day)) == 1:
            self.day = '0' + str(day)
        else:
            self.day = day
    def get_year(self):
        return self.year
    def get_month(self):
        return self.month
    def get_day(self):
        return self.day
    def format(self):
        return f"{self.month}.{self.day}.{self.year}"
class EuropeanDate:
    def __init__(self, year, month, day):
        self.year = str(year)
        if len(str(month)) == 1:
            self.month = '0' + str(month)
        else:
            self.month = str(month)
        if len(str(day)) == 1:
            self.day = '0' + str(day)
        else:
            self.day = day
    def set_year(self, year):
        self.year = str(year)
    def set_month(self, month):
        if len(str(month)) == 1:
            self.month = '0' + str(month)
        else:
            self.month = str(month)
    def set_day(self, day):
        if len(str(day)) == 1:
            self.day = '0' + str(day)
        else:
            self.day = day
    def get_year(self):
        return self.year
    def get_month(self):
        return self.month
    def get_day(self):
        return self.day
    def format(self):
        return f"{self.day}.{self.month}.{self.year}"
american = AmericanDate(2000, 4, 10)
european = EuropeanDate(2000, 4, 10)
print(american.format())
print(european.format())
