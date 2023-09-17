def binary_search(array: list, n: int):
    start_index = 0
    while True:
        array_length = len(array)
        split_index = array_length // 2
        try:
            value = array[split_index]
        except IndexError:
            return -1
        if value > n:  # go to the left
            array = array[:split_index]
        elif value < n:  # go to the right
            start_index += split_index + 1
            array = array[split_index + 1 :]
        elif value == n:
            return (
                split_index
                if start_index == 0
                else start_index + (array_length - 1) - split_index
            )


if __name__ == "__main__":
    array = [i for i in range(16)]

    for i in array:
        assert binary_search(array, i) == i
    assert binary_search(array, -2) == -1
    assert binary_search(array, 16) == -1
