#include <iostream>
#include <memory>


class Shape {
public:
    virtual void draw() = 0;
};
class Circle : public Shape {
public:
    void draw() override {
        std::cout << "Drawing Circle\n";
    }
};
class Square : public Shape {
public:
    void draw() override {
        std::cout << "Drawing Square\n";
    }
};
class Triangle : public Shape {
public:
    void draw() override {
        std::cout << "Drawing Triangle\n";
    }
};
class shapeFactory {
public:
    std::unique_ptr<Shape> createShape(const std::string& type) {
        if (type == "Circle") {
            return std::make_unique<Circle>();
        } else if (type == "Square") {
            return std::make_unique<Square>();
        } else if (type == "Triangle") {
            return std::make_unique<Triangle>();
        } else {
            return nullptr; // Unknown shape
        }
    }
};
int main() {
    shapeFactory factory;

    std::unique_ptr<Shape> circle = factory.createShape("Circle");
    if (circle) circle->draw();
    std::unique_ptr<Shape> square = factory.createShape("Square");
    if (square) square->draw();
    std::unique_ptr<Shape> triangle = factory.createShape("Triangle");
    if (triangle) triangle->draw();
    std::unique_ptr<Shape> unknownShape = factory.createShape("Rectangle");
    if (!unknownShape) {
        std::cout << "Bad request";
    }
    return 0;
}