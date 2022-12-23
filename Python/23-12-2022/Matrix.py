class Matrix:
    def __init__(self, matrixx):
        self.matr = matrixx
    def get_reverse(self):
        resoult = []
        for i in range(len(self.matr[0])):
            list1 = []
            for j in range(len(self.matr)):
                list1.append(self.matr[j][i])
            resoult.append(list1)
        for j in resoult:
                print(j)
p1 = Matrix([[1,2,3],[4,5,6],[7,8,9]])
p1.get_reverse()
