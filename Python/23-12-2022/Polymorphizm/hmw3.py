class Selector:
    def __init__(self, listt):
        self.listt = listt
    def get_odds(self):
        resoult = []
        for i in self.listt:
            if i % 2 != 0:
                resoult.append(i)
        return resoult
    def get_evens(self):
        resoult = []
        for i in self.listt:
            if i % 2 == 0:
                resoult.append(i)
        return resoult
values = [11, 12, 13, 14, 15, 16, 22, 44, 66]
selector = Selector(values)
odds = selector.get_odds()
evens = selector.get_evens()
print(' '.join(map(str, odds)))
print(' '.join(map(str, evens)))
