import sys
import time
import json
import math
import numpy as np


print("initializing..")

##usage: python steffenv4.py <total rows> <first class rows> <numpriority> <num2> <num3> <num4> <num5> <num6> <bagfactor>

# numrows = int(sys.argv[1])
# numfirst = int(sys.argv[2])
# numpriority = float(sys.argv[3])
# numg2 = int(sys.argv[4])
# numg3 = int(sys.argv[5])
# numg4 = int(sys.argv[6])
# numg5 = int(sys.argv[7])
# numg6 = int(sys.argv[8])


numrows = 30
numfirst = 4
numpriority = 8
numg2 = 4
numg3 = 2
numg4 = 3
numg5 = 2
numg6 = 1


# bagfactor = float(sys.argv[9])
bagfactor = 0.5



##calculate priority rows needed
numfam = int(math.ceil(numpriority/6.0))


# numg6 =  int(math.ceil(numg6/6.0))



##currently 2 class config

econrows = numrows - numfirst
generalrows = econrows-numfam


bagrows = int(bagfactor*generalrows)


print ("total number of rows is " + str(numrows))
print ("number of first class rows is " + str(numfirst))
print ("number of economy rows is " + str(econrows))
print ("number of family/disabled/special rows is " + str(numfam))
print ("number of general economy rows is " + str(generalrows))
print ("number of rows with bags is " + str(bagrows))
print ("number of  groups of 6 is " + str(numg6))
print ("number of  groups of 5 is " + str(numg5))
print ("number of  groups of 4 is " + str(numg4))
print ("number of  groups of 3 is " + str(numg3))
print ("number of  groups of 2 is " + str(numg2))



step = generalrows-bagrows

nobaggedrows = np.linspace(numfirst+numfam+1,numrows-1,step, dtype = int).tolist()


print ("rows with no bags allowed")
print(nobaggedrows)



groupz = []
groupfirst = []
group0 = []
group1 = []
group2 = []
group3 = []
group4 = []
group5 = []
group6 = []
group7 = []
group8 = []
group9 = []
group10 = []
group11 = []
group12 = []
bagged = []
nobagged = []
seatstatus = []


for i in range (1,numfirst+1):
    if i%2 == 1:

        groupfirst.append(str(i) + 'A')
        bagged.append(str(i) + 'A')
        seat = {"id" : str(i) + 'A', "vaccine": "yes", "test": "no", "sp" : "no"}
        seatstatus.append(seat)


        groupfirst.append(str(i) + 'E')
        bagged.append(str(i) + 'E')
        seat = {"id" : str(i) + 'E', "vaccine": "yes", "test": "yes", "sp" : "yes"}
        seatstatus.append(seat)




    else:

        groupfirst.append(str(i) + 'B')
        bagged.append(str(i) + 'B')
        seat = {"id" : str(i) + 'B', "vaccine": "yes", "test": "yes", "sp" : "yes"}
        seatstatus.append(seat)

        
        groupfirst.append(str(i) + 'F')
        bagged.append(str(i) + 'F')
        seat = {"id" : str(i) + 'F', "vaccine": "no", "test": "yes", "sp" : "no"}
        seatstatus.append(seat)


print ("first class boarding")
print (groupfirst)
        
x = numrows - numg6

for i in range (numg6, 0, -1):

    group0.append(str(i+x) + 'A')
    bagged.append(str(i+x) + 'A')
    seat = {"id" : str(i+x) + 'A', "vaccine": "no", "test": "no", "sp" : "no" }
    seatstatus.append(seat)

    group0.append(str(i+x) + 'F')
    bagged.append(str(i+x) + 'F')
    seat = {"id" : str(i+x) + 'F', "vaccine": "no", "test": "no", "sp" : "no"}
    seatstatus.append(seat)
    
    group0.append(str(i+x) + 'B')
    bagged.append(str(i+x) + 'B')
    seat = {"id" : str(i+x) + 'B', "vaccine": "yes", "test": "no", "sp" : "no"}
    seatstatus.append(seat)

    group0.append(str(i+x) + 'E')
    bagged.append(str(i+x) + 'E')
    seat = {"id" : str(i+x) + 'E', "vaccine": "yes", "test": "no", "sp" : "no"}
    seatstatus.append(seat)

    group0.append(str(i+x) + 'C')
    bagged.append(str(i+x) + 'C')
    seat = {"id" : str(i+numfirst) + 'C', "vaccine": "no", "test": "yes", "sp" : "yes"}
    seatstatus.append(seat)

    group0.append(str(i+x) + 'D')
    bagged.append(str(i+x) + 'D')
    seat = {"id" : str(i+x) + 'D', "vaccine": "free", "test": "yes", "sp" : "yes"}
    seatstatus.append(seat)


print ("boarding for  groups of 6")

print (group0)



x = numrows - numg6 - numg5

for i in range (numg5, 0, -1):

    group1.append(str(i+x) + 'A')
    bagged.append(str(i+x) + 'A')
    seat = {"id" : str(i+x) + 'A', "vaccine": "no", "test": "no", "sp" : "no" }
    seatstatus.append(seat)

    group1.append(str(i+x) + 'F')
    bagged.append(str(i+x) + 'F')
    seat = {"id" : str(i+x) + 'F', "vaccine": "no", "test": "no", "sp" : "no"}
    seatstatus.append(seat)
    
    group1.append(str(i+x) + 'B')
    bagged.append(str(i+x) + 'B')
    seat = {"id" : str(i+x) + 'B', "vaccine": "yes", "test": "no", "sp" : "no"}
    seatstatus.append(seat)

    group1.append(str(i+x) + 'E')
    bagged.append(str(i+x) + 'E')
    seat = {"id" : str(i+x) + 'E', "vaccine": "yes", "test": "no", "sp" : "no"}
    seatstatus.append(seat)

    if i%2 == 0:

        group1.append(str(i+x) + 'C')
        bagged.append(str(i+x) + 'C')
        seat = {"id" : str(i+numfirst) + 'C', "vaccine": "no", "test": "yes", "sp" : "yes"}
        seatstatus.append(seat)
    
    else:

        group1.append(str(i+x) + 'D')
        bagged.append(str(i+x) + 'D')
        seat = {"id" : str(i+x) + 'D', "vaccine": "free", "test": "yes", "sp" : "yes"}
        seatstatus.append(seat)


print ("boarding for  groups of 5")

print (group1)


x = numrows - numg6 - numg5 - numg4

for i in range (numg4, 0, -1):

    if i%2 == 0:


        group2.append(str(i+x) + 'A')
        bagged.append(str(i+x) + 'A')
        seat = {"id" : str(i+x) + 'A', "vaccine": "no", "test": "no", "sp" : "no" }
        seatstatus.append(seat)

        group2.append(str(i+x) + 'B')
        bagged.append(str(i+x) + 'B')
        seat = {"id" : str(i+x) + 'B', "vaccine": "yes", "test": "no", "sp" : "no"}
        seatstatus.append(seat)

        
        group2.append(str(i+x) + 'C')
        bagged.append(str(i+x) + 'C')
        seat = {"id" : str(i+numfirst) + 'C', "vaccine": "no", "test": "yes", "sp" : "yes"}
        seatstatus.append(seat)

        
        group2.append(str(i+x) + 'D')
        bagged.append(str(i+x) + 'D')
        seat = {"id" : str(i+x) + 'D', "vaccine": "free", "test": "yes", "sp" : "yes"}
        seatstatus.append(seat)


        group2.append(str(i+x) + 'F')
        bagged.append(str(i+x) + 'F')
        seat = {"id" : str(i+x) + 'F', "vaccine": "no", "test": "no", "sp" : "no"}
        seatstatus.append(seat)
        

    else:
        group2.append(str(i+x) + 'A')
        bagged.append(str(i+x) + 'A')
        seat = {"id" : str(i+x) + 'A', "vaccine": "no", "test": "no", "sp" : "no" }
        seatstatus.append(seat)

        group2.append(str(i+x) + 'C')
        bagged.append(str(i+x) + 'C')
        seat = {"id" : str(i+numfirst) + 'C', "vaccine": "no", "test": "yes", "sp" : "yes"}
        seatstatus.append(seat)

        
        group2.append(str(i+x) + 'D')
        bagged.append(str(i+x) + 'D')
        seat = {"id" : str(i+x) + 'D', "vaccine": "free", "test": "yes", "sp" : "yes"}
        seatstatus.append(seat)

        group2.append(str(i+x) + 'E')
        bagged.append(str(i+x) + 'E')
        seat = {"id" : str(i+x) + 'E', "vaccine": "yes", "test": "no", "sp" : "no"}
        seatstatus.append(seat)


        group2.append(str(i+x) + 'F')
        bagged.append(str(i+x) + 'F')
        seat = {"id" : str(i+x) + 'F', "vaccine": "no", "test": "no", "sp" : "no"}
        seatstatus.append(seat)


print ("boarding for  groups of 4")

print (group2)



x = numrows - numg6 - numg5 - numg4 -numg3

for i in range (numg3, 0, -1):

    if i%2 == 0:


        group3.append(str(i+x) + 'A')
        bagged.append(str(i+x) + 'A')
        seat = {"id" : str(i+x) + 'A', "vaccine": "no", "test": "no", "sp" : "no" }
        seatstatus.append(seat)

        group3.append(str(i+x) + 'B')
        bagged.append(str(i+x) + 'B')
        seat = {"id" : str(i+x) + 'B', "vaccine": "yes", "test": "no", "sp" : "no"}
        seatstatus.append(seat)

        
        group3.append(str(i+x) + 'C')
        bagged.append(str(i+x) + 'C')
        seat = {"id" : str(i+numfirst) + 'C', "vaccine": "no", "test": "yes", "sp" : "yes"}
        seatstatus.append(seat)

        
        group3.append(str(i+x) + 'D')
        bagged.append(str(i+x) + 'D')
        seat = {"id" : str(i+x) + 'D', "vaccine": "free", "test": "yes", "sp" : "yes"}
        seatstatus.append(seat)


        group3.append(str(i+x) + 'F')
        bagged.append(str(i+x) + 'F')
        seat = {"id" : str(i+x) + 'F', "vaccine": "no", "test": "no", "sp" : "no"}
        seatstatus.append(seat)
        

    else:
        group3.append(str(i+x) + 'A')
        bagged.append(str(i+x) + 'A')
        seat = {"id" : str(i+x) + 'A', "vaccine": "no", "test": "no", "sp" : "no" }
        seatstatus.append(seat)

        group3.append(str(i+x) + 'C')
        bagged.append(str(i+x) + 'C')
        seat = {"id" : str(i+numfirst) + 'C', "vaccine": "no", "test": "yes", "sp" : "yes"}
        seatstatus.append(seat)

        
        group3.append(str(i+x) + 'D')
        bagged.append(str(i+x) + 'D')
        seat = {"id" : str(i+x) + 'D', "vaccine": "free", "test": "yes", "sp" : "yes"}
        seatstatus.append(seat)

        group3.append(str(i+x) + 'E')
        bagged.append(str(i+x) + 'E')
        seat = {"id" : str(i+x) + 'E', "vaccine": "yes", "test": "no", "sp" : "no"}
        seatstatus.append(seat)


        group3.append(str(i+x) + 'F')
        bagged.append(str(i+x) + 'F')
        seat = {"id" : str(i+x) + 'F', "vaccine": "no", "test": "no", "sp" : "no"}
        seatstatus.append(seat)


print ("boarding for  groups of 3")

print (group3)

mark = 0
if numg2%2 == 1:
    mark = 1

y = int(numg2/2)
x = numrows - numg6 - numg5 - numg4 -numg3 -y

for i in range (int(y), 0, -1):

    group4.append(str(i+x) + 'A')
    bagged.append(str(i+x) + 'A')
    seat = {"id" : str(i+x) + 'A', "vaccine": "no", "test": "no", "sp" : "no" }
    seatstatus.append(seat)

    group4.append(str(i+x) + 'F')
    bagged.append(str(i+x) + 'F')
    seat = {"id" : str(i+x) + 'F', "vaccine": "no", "test": "no", "sp" : "no"}
    seatstatus.append(seat)
    
    group4.append(str(i+x) + 'B')
    bagged.append(str(i+x) + 'B')
    seat = {"id" : str(i+x) + 'B', "vaccine": "yes", "test": "no", "sp" : "no"}
    seatstatus.append(seat)

    group4.append(str(i+x) + 'E')
    bagged.append(str(i+x) + 'E')
    seat = {"id" : str(i+x) + 'E', "vaccine": "yes", "test": "no", "sp" : "no"}
    seatstatus.append(seat)

    # group4.append(str(i+x) + 'C')
    # bagged.append(str(i+x) + 'C')
    # seat = {"id" : str(i+numfirst) + 'C', "vaccine": "no", "test": "yes", "sp" : "yes"}
    # seatstatus.append(seat)

    # group4.append(str(i+x) + 'D')
    # bagged.append(str(i+x) + 'D')
    # seat = {"id" : str(i+x) + 'D', "vaccine": "free", "test": "yes", "sp" : "yes"}
    # seatstatus.append(seat)

if mark ==1:
    group4.append(str(x-1) + 'A')
    bagged.append(str(x-1) + 'A')
    seat = {"id" : str(x-1) + 'A', "vaccine": "no", "test": "no", "sp" : "no" }
    seatstatus.append(seat)

    group4.append(str(x-1) + 'F')
    bagged.append(str(x-1) + 'F')
    seat = {"id" : str(x-1) + 'F', "vaccine": "no", "test": "no", "sp" : "no"}
    seatstatus.append(seat)
    
    group4.append(str(x-1) + 'B')
    bagged.append(str(x-1) + 'B')
    seat = {"id" : str(x-1) + 'B', "vaccine": "yes", "test": "no", "sp" : "no"}
    seatstatus.append(seat)

    group4.append(str(x-1) + 'D')
    bagged.append(str(x-1) + 'D')
    seat = {"id" : str(x-1) + 'D', "vaccine": "free", "test": "yes", "sp" : "yes"}
    seatstatus.append(seat)


print ("boarding for  groups of 2")

print (group4)

if mark == 0:
    x = numrows - numg6 - numg5 - numg4 -numg3 -y
else:
    x = numrows - numg6 - numg5 - numg4 -numg3 -y -1



for i in range (1,x):

    # if (i+numfirst+numfam) in nobaggedrows:
    #     print("no bags")
    #     print (str(i+numfirst+numfam))
    #     nobagged.append(str(i+numfirst+numfam) + 'A')
    #     seat = {"id" : str(i+numfirst+numfam) + 'A', "vaccine": "no", "test": "no", "sp" : "no" }
    #     seatstatus.append(seat)

    #     nobagged.append(str(i+numfirst+numfam) + 'B')
    #     seat = {"id" : str(i+numfirst+numfam) + 'B', "vaccine": "yes", "test": "no", "sp" : "no"}
    #     seatstatus.append(seat)
        
    #     nobagged.append(str(i+numfirst+numfam) + 'C')
    #     seat = {"id" : str(i+numfirst+numfam) + 'C', "vaccine": "no", "test": "yes", "sp" : "yes"}
    #     seatstatus.append(seat)
    #     nobagged.append(str(i+numfirst+numfam) + 'F')
    #     seat = {"id" : str(i+numfirst+numfam) + 'F', "vaccine": "no", "test": "no", "sp" : "no"}
    #     seatstatus.append(seat)
    #     nobagged.append(str(i+numfirst+numfam) + 'E')
    #     seat = {"id" : str(i+numfirst+numfam) + 'E', "vaccine": "free", "test": "no"}
    #     seatstatus.append(seat)
    #     nobagged.append(str(i+numfirst+numfam) + 'D')
    #     seat = {"id" : str(i+numfirst+numfam) + 'D', "vaccine": "free", "test": "yes", "sp" : "yes"}
    #     seatstatus.append(seat)
    # else:
    #     bagged.append(str(i+numfirst+numfam) + 'A')
    #     seat = {"id" : str(i+numfirst+numfam) + 'A', "vaccine": "no", "test": "no", "sp" : "no" }
    #     seatstatus.append(seat)
    #     bagged.append(str(i+numfirst+numfam) + 'B')
    #     seat = {"id" : str(i+numfirst+numfam) + 'B', "vaccine": "yes", "test": "no", "sp" : "no"}
    #     seatstatus.append(seat)
                
    #     bagged.append(str(i+numfirst+numfam) + 'C')
    #     seat = {"id" : str(i+numfirst+numfam) + 'C', "vaccine": "no", "test": "yes", "sp" : "yes"}
    #     seatstatus.append(seat)
    #     bagged.append(str(i+numfirst+numfam) + 'F')
    #     seat = {"id" : str(i+numfirst+numfam) + 'F', "vaccine": "no", "test": "no", "sp" : "no"}
    #     seatstatus.append(seat)
    #     bagged.append(str(i+numfirst+numfam) + 'E')
    #     seat = {"id" : str(i+numfirst+numfam) + 'E', "vaccine": "free", "test": "no"}
    #     seatstatus.append(seat)
    #     bagged.append(str(i+numfirst+numfam) + 'D')
    #     seat = {"id" : str(i+numfirst+numfam) + 'D', "vaccine": "free", "test": "yes", "sp" : "yes"}
    #     seatstatus.append(seat)
    
    if i%2 == 1:
        group5.append(str(i+numfirst+numfam) + 'A')
        seat = {"id" : str(i+numfirst+numfam) + 'A', "vaccine": "no", "test": "no", "sp" : "no" }
        seatstatus.append(seat)
        # group9.append(str(i+numfirst+numfam) + 'B')
        # seat = {"id" : str(i+numfirst+numfam) + 'B', "vaccine": "yes", "test": "no", "sp" : "no"}
        # seatstatus.append(seat)
        group9.append(str(i+numfirst+numfam) + 'C')
        seat = {"id" : str(i+numfirst+numfam) + 'C', "vaccine": "no", "test": "yes", "sp" : "yes"}
        seatstatus.append(seat)

        group6.append(str(i+numfirst+numfam) + 'F')
        seat = {"id" : str(i+numfirst+numfam) + 'F', "vaccine": "no", "test": "no", "sp" : "no"}
        seatstatus.append(seat)
        # group10.append(str(i+numfirst+numfam) + 'E')
        # seat = {"id" : str(i+numfirst+numfam) + 'E', "vaccine": "free", "test": "no"}
        # seatstatus.append(seat)
        group10.append(str(i+numfirst+numfam) + 'D')
        seat = {"id" : str(i+numfirst+numfam) + 'D', "vaccine": "free", "test": "yes", "sp" : "yes"}
        seatstatus.append(seat)
    else:
        group7.append(str(i+numfirst+numfam) + 'A')
        seat = {"id" : str(i+numfirst+numfam) + 'A', "vaccine": "no", "test": "no", "sp" : "no" }
        seatstatus.append(seat)
        # group11.append(str(i+numfirst+numfam) + 'B')
        # seat = {"id" : str(i+numfirst+numfam) + 'B', "vaccine": "yes", "test": "no", "sp" : "no"}
        # seatstatus.append(seat)
        group11.append(str(i+numfirst+numfam) + 'C')
        seat = {"id" : str(i+numfirst+numfam) + 'C', "vaccine": "no", "test": "yes", "sp" : "yes"}
        seatstatus.append(seat)

        group8.append(str(i+numfirst+numfam) + 'F')
        seat = {"id" : str(i+numfirst+numfam) + 'F', "vaccine": "no", "test": "no", "sp" : "no"}
        seatstatus.append(seat)
        # group12.append(str(i+numfirst+numfam) + 'E')
        # seat = {"id" : str(i+numfirst+numfam) + 'E', "vaccine": "free", "test": "no"}
        # seatstatus.append(seat)
        group12.append(str(i+numfirst+numfam) + 'D')
        seat = {"id" : str(i+numfirst+numfam) + 'D', "vaccine": "free", "test": "yes", "sp" : "yes"}
        seatstatus.append(seat)

print ("boarding for individuals")

print (group5)
print (group6)
print (group7)
print (group8)
print (group9)
print (group10)
print (group11)
print (group12)


# for i in range (1,numfam+1):
#     group0.append(str(i+numfirst) + 'A')
#     bagged.append(str(i+numfirst) + 'A')
#     seat = {"id" : str(i+numfirst) + 'A', "vaccine": "no", "test": "no", "sp" : "no" }
#     seatstatus.append(seat)
    
#     group0.append(str(i+numfirst) + 'B')
#     bagged.append(str(i+numfirst) + 'B')
#     seat = {"id" : str(i+numfirst) + 'B', "vaccine": "yes", "test": "no", "sp" : "no"}
#     seatstatus.append(seat)
#     group0.append(str(i+numfirst) + 'C')
#     bagged.append(str(i+numfirst) + 'C')
#     seat = {"id" : str(i+numfirst) + 'C', "vaccine": "no", "test": "yes", "sp" : "yes"}
#     seatstatus.append(seat)

#     group0.append(str(i+numfirst) + 'F')
#     bagged.append(str(i+numfirst) + 'F')
#     seat = {"id" : str(i+numfirst) + 'F', "vaccine": "no", "test": "no", "sp" : "no"}
#     seatstatus.append(seat)
#     group0.append(str(i+numfirst) + 'E')
#     bagged.append(str(i+numfirst) + 'E')
#     seat = {"id" : str(i+numfirst) + 'E', "vaccine": "free", "test": "no"}
#     seatstatus.append(seat)
#     group0.append(str(i+numfirst) + 'D')
#     bagged.append(str(i+numfirst) + 'D')
#     seat = {"id" : str(i+numfirst) + 'D', "vaccine": "free", "test": "yes", "sp" : "yes"}
#     seatstatus.append(seat)


groupz.append(groupfirst)
groupz.append(group0)
groupz.append(group1)
groupz.append(group2)
groupz.append(group3)
groupz.append(group4)
groupz.append(group5)
groupz.append(group6)
groupz.append(group7)
groupz.append(group8)
groupz.append(group9)
groupz.append(group10)
groupz.append(group11)
groupz.append(group12)
# groupz.append(bagged)
# groupz.append(nobagged)

# print (groupz)



# gnames = ['groupfirst','group0','group1','group2','group3','group4','group5','group6','group7','group8','group9','group10','group11','group12','bagged', 'nobagged']

# groups = dict(zip(gnames,groupz))

# ##print (groups)

# groupsjson = json.dumps(groups)

# ##print (groupsjson)


# with open("boarding_groups.json","w") as f:
#   f.write(groupsjson)

order = 1
seatstatus2 = []

for s in seatstatus:
    s['order'] = order
    order +=1
    seatstatus2.append(s)



print (seatstatus2)

seatstatusjson = json.dumps(seatstatus2)

with open("seat_status.json","w") as f:
  f.write(seatstatusjson)


