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
        if self.count == 0:
            return None
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
        if self.count == 0:
            return None
        return self.num
class AverageStat:
    def __init__(self):
        self.num = 0
        self.count = 0
    def add_number(self, num):
        self.num += num
        self.count += 1
    def result(self):
        if self.count == 0:
            return None
        return self.num / self.count
mins = MinStat()
maxs = MaxStat()
average = AverageStat()
print(mins.result(), maxs.result(), average.result())

