def recursive_reverse(some_list):
    if not some_list:
        return []
    return [some_list[-1]] + recursive_reverse(some_list[:-1])
print(recursive_reverse([1,2,3,4,5]))
