# https://www.codewars.com/kata/5467e4d82edf8bbf40000155

# Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

# Examples:
# Input: 42145 Output: 54421

# Input: 145263 Output: 654321

# Input: 123456789 Output: 987654321

def descending_order(num):
    number_array = [int(a) for a in str(num)]
    # print(number_array)
    number_array.sort(reverse=True)
    string_array = [str(a) for a in number_array]
    result = int("".join(string_array))
    return result

# Popular answer:


def Descending_Order(num):
    return int("".join(sorted(str(num), reverse=True)))

# str(num) to turn it in to string
# sorted function to sort it ascending then applying reverse=True
# "".join() joins it together without a space
# int() wraper turns it into a number
