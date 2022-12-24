class Table:
    def __init__(self, rows, cols):
        self.rows = rows
        self.cols = cols
        self.resoult = []
        for i in range(rows):
            temp_list = []
            for i in range(cols):
                temp_list.append(0)
            self.resoult.append(temp_list)
    def get_value(self, row, col):
        if (0 > row > self.rows) or (0 > col > self.cols):
            return None
        else:
            return self.resoult[row][col]
    def set_value(self, row, col, value):
        self.resoult[row][col] = value
    def n_rows(self):
        return self.rows
    def n_cols(self):
        return self.cols
tab = Table(3, 5)
tab.set_value(0, 1, 10)
tab.set_value(1, 2, 20)
tab.set_value(2, 3, 30)
for i in range(tab.n_rows()):
    for j in range(tab.n_cols()):
        print(tab.get_value(i, j), end=' ')
    print()
