def recursive_len(some_list):
    if some_list:
        return 1 + recursive_len(some_list[1:])
    return 0
print(recursive_len([1,5,6,7,3]))
