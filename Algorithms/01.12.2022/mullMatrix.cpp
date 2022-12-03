#include <iostream>

void matrixMul(int first_matrix[][], int second_matrix[][]){
    int mul_matrix[4][4];
    for (int i = 0;i < 4;++i){
        for (int g = 0;g < 4;++g){
            mul_matrix [i][g] = 0;
            for (int j = 0;j < 4;++j){
                mul_matrix[i][g] += first_matrix[i][j] * second_matrix[j][g];
            }
            std::cout << mul_matrix[i][g]<< "; ";
        }
        std::cout << std::endl;
    }
}

int main()
{
    int first_matrix[4][3] = {1 , 5, 6,
                              6 , 8, 9,
                              1 , 5, 6,
                              6 , 8, 9};
    int second_matrix[3][4] = {1 , 5, 6, 7,
                               6 , 8, 9, 4,
                               1 , 5, 6, 2};
    matrixMul (first_matrix, second_matrix); 
}

