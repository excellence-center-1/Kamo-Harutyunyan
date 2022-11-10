#include <iostream>
class Node {
    public:
        int data;
        Node* next = NULL;
        Node* prev = NULL;
};
class List{
    public:
    int count = 0;
    Node* end = NULL;
    Node* head = NULL;
    void push_front(int );
	void push_back(int );
	void pop_back();
    void pop_front();
    int size();
    void insert(int ,int );
    void clear();
};
void List::clear(){  
    Node* temp;
    while (head != NULL)
    {
        temp = head;
        delete(head);
        head = temp->next;
    }
    
}
void List::insert (int index, int value){
    if (index > count || index < 0){
        std::cout << "You input not real index: " << std::endl;
    }
    else {
        Node* temp = head;
        Node* temp2;
        Node* temp3;
        int i = 1;
        while (i < index){
            temp = temp->next;
            i++;
        }
        temp3 = temp->next;
        temp2 = new Node();
        temp->next = temp2;
        temp2->data = value;
        temp2->prev = temp;
        temp2->next = temp3;
        temp3->prev = temp2;   
        }
    
}
int List::size(){
    return count;
}
void List :: push_front(int value){
    if (head == NULL){
        head = new Node();
        head->data = value;
        count += 1;
    }
    else {
        Node* temp;
        temp = new Node();
        temp->data = value;
        temp->next = head;
        head = temp;
        count += 1;
    }
}
void List :: push_back(int value){
    if (end == NULL){
        end = new Node();
        end->data = value;
        count += 1;
    }
    else{
        Node* temp;
        temp = new Node();
        temp->data = value;
        temp->prev = end;
        end = temp;
        count += 1;
    }
}
void List :: pop_back(){
    if (count < 1){
        std::cout << std::endl << "List is empty:" << std::endl;
    }
    else {
        Node* temp;
        temp = end->prev;
        delete (end);
        temp->next = NULL;
        end = temp;
        count -= 1;
        }
    }
}
void List :: pop_front(){
    if (count < 1){
        std::cout << std::endl << "List is empty:" << std::endl;
    }
    else {
        Node* temp;
        temp = head->next;
        delete(head);
        temp->prev = NULL;
        head = temp;
        count -= 1;
    }
}

int main (){
    List list;
    list.push_back(10);
    list.push_back(20);
    list.pop_back();
    list.push_front(15);
    list.push_front(12);
    std::cout << list.size();
    list.pop_front();
    std::cout <<std::endl << list.size() << std::endl;
}
