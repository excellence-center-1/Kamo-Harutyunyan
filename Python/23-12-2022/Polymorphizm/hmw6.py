class MinStat:
    def __init__(self):
        self.num = 0
        self.count = 0
    def add_number(self, num):
        if self.count == 0:
            self.num = num
            self.count += 1
        else:
            if self.num > num:
                self.num = num
    def result(self):
        return self.num
class MaxStat:
    def __init__(self):
        self.count = 0
        self.num = 0
    def add_number(self, num):
        if self.count == 0:
            self.num = num
            self.count += 1
        else:
            if self.num < num:
                self.num = num
    def result(self):
        return self.num
class AverageStat:
    def __init__(self):
        self.num = 0
        self.count = 0
    def add_number(self, num):
        self.num += num
        self.count += 1
    def result(self):
        return self.num / self.count
values = [1, 2, 4, 5]
mins = MinStat()
maxs = MaxStat()
average = AverageStat()
for v in values:
    mins.add_number(v)
    maxs.add_number(v)
    average.add_number(v)
print(mins.result(), maxs.result(), '{:<05.3}'.format(average.result()))
