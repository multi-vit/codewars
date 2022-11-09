# https://www.codewars.com/kata/51c8991dee245d7ddf00000e

# Complete the solution so that it reverses all of the words within the string passed in.

# Example(Input --> Output):

# "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

# My original solution

def reverse_words(s):
    split_string = s.split(" ")
    reversed_string = ""
    for word in split_string:
        reversed_string = word + " " + reversed_string
    reversed_string = reversed_string.rstrip()
    return reversed_string

# Popular solution is this:


def reverseWords(str):
    return " ".join(str.split(" ")[::-1])

# To understand this code, read it from right to left. str.split(" ") is same as JavaScript. The [::-1] makes it do the join in reverse, with " " being passed in between each join
