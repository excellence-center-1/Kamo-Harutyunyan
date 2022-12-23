class Matrix:
    def __init__(self, matrixx):
        self.matr = matrixx
    def show(self):
        for i in self.matr:
            print(i)
    def add(self, matrixx):
        if len(matrixx) == len(self.matr[0]) and len(matrixx[0]) == len(self.matr):
            for i in range(len(matrixx[0])):
                for j in range(len(matrixx)):
                    self.matr[i][j] += matrixx[i][j]
            return self.matr
    def substract(self, matrixx):
        if len(matrixx) == len(self.matr[0]) and len(matrixx[0]) == len(self.matr):
            for i in range(len(matrixx[0])):
                for j in range(len(matrixx)):
                    self.matr[i][j] -= matrixx[i][j]
            return self.matr
    def multiplication(self, matrixx):
        resoult = []
        if len(self.matr[0]) == len(matrixx):
            for i in range(len(self.matr)):
                list1 = []
                for j in range(len(matrixx[0])):
                    c = 0
                    for k in range(len(matrixx)):
                        c += self.matr[i][k] * matrixx[k][j]
                    list1.append(c)
                resoult.append(list1)
            self.matr = resoult
            return self.matr
        elif len(self.matr) == len(matrixx[0]):
            for i in range(len(matrixx)):
                list1 = []
                for j in range(len(self.matr[0])):
                    c = 0
                    for k in range(len(self.matr)):
                        c += matrixx[i][k] * self.matr[k][j]
                    list1.append(c)
                resoult.append(list1)
            self.matr = resoult
            return self.matr
        else:
            return -1

        
    def get_determinant(self):
        if len(self.matr) == 3 and len(self.matr[0]) == 3:
            d1 = self.matr[0][0] * (self.matr[1][1] * self.matr[2][2] - self.matr[1][2] * self.matr[2][1])
            d2 = self.matr[0][1] * (self.matr[1][0] * self.matr[2][2] - self.matr[1][2] * self.matr[2][0])
            d3 = self.matr[0][2] * (self.matr[1][0] * self.matr[2][1] - self.matr[1][1] * self.matr[2][0])
            resoult = d1 - d2 + d3
        elif len(self.matr == 2) and len(self.matr[0] == 2):
            resoult = self.matr[0][0] * self.matr[1][1] - self.matr[0][1] * self.matr[1][0]
        else:
            resoult = 0
        print(f"Determinant of matrix - {resoult}\n")
    def get_transpose(self):
        resoult = []
        for i in range(len(self.matr[0])):
            list1 = []
            for j in range(len(self.matr)):
                list1.append(self.matr[j][i])
            resoult.append(list1)
        self.matr = resoult
        return self.matr
    def get_reverse(self):
        resoult = []
        for i in range(len(self.matr[0])):
            list1 = []
            for j in range(len(self.matr)):
                list1.append(1 / self.matr[i][j])
            resoult.append(list1)
        self.matr = resoult
        return self.matr
hmw = Matrix([[1,10,3],
              [4,50,6],
              [70,8,9]])
hmw.get_determinant()
hmw.get_transpose()
hmw.get_reverse()
hmw.multiplication([[12,7,3],
                    [4 ,5,6],
                    [7 ,8,9]])
hmw.substract([[12,7,3],
               [4 ,5,6],
               [7 ,8,9]])
hmw.add([[12,7,3],
         [4 ,5,6],
         [7 ,8,9]])
hmw.show()
