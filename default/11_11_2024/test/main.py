list_hash = [] * 11

# for i in range(5):
#     number = int(input("Enter a number: "))
#     personal_hash = number % 11
#     list_hash.append(personal_hash)

print(list_hash)


def good_hash(key):
    return hash(key) % 11


def insert_in_list(list_: list, element):
    list_.append(element)


insert_in_list(list_hash, good_hash('apple'))
print(list_hash)
