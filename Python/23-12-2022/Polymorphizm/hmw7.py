class Table:
    def __init__(self, rows, cols):
        self.rows = rows
        self.cols = cols
        self.resoult = []
        for i in range(rows):
            temp = []
            for j in range(cols):
                temp.append(0)
            self.resoult.append(temp)
    def get_value(self, row, col):
        if 0 > row or row > self.rows or 0 > col or col > self.cols:
            return None
        return self.resoult[row][col]
    def set_value(self, row, col, value):
        self.resoult[row][col] = value
    def n_rows(self):
        return self.rows
    def n_cols(self):
        return self.cols
    def delete_row(self, row):
        del self.resoult[row - 1]
        self.rows -= 1
    def delete_col(self, col):
        for i in range(self.cols):
            del self.resoult[col - 1]
        self.cols -= 1
    def add_row(self, row):
        self.resoult.insert(self.rows - 1, [0 for i in range(self.cols)])
        self.rows += 1
    def add_col(self, col):
        for i in range(self.cols):
            temp = self.resoult[i]
            temp.insert(col - 1, 0)
            self.resoult[i] = temp
        self.cols += 1
tab = Table(3, 5)
tab.set_value(0, 1, 10)
tab.set_value(1, 2, 20)
tab.set_value(2, 3, 30)
for i in range(tab.n_rows()):
    for j in range(tab.n_cols()):
        print(tab.get_value(i, j), end=' ')
    print()
print()

tab.add_row(1)

for i in range(tab.n_rows()):
    for j in range(tab.n_cols()):
        print(tab.get_value(i, j), end=' ')
    print()
print()
