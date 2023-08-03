import random
while True:
    decision1=input("even or odd::")
    if decision1=="even":
        decision2="odd"
    else:
        decision2="even"
    user1=int(input("Enter the number:"))
    list1=[1,2,3,4,5,6,7,8,9,0]
    user2=random.choice(list1)
    sum=user1+user2
    if sum%2==0:
        result="even"
    else:
        result="odd"
    if result==decision1:
        print("You won the toss")
        decision=int(input("Bating 0 or Bowling 1 :"))
        if decision==0:
            print("Choosed to bat")
            t=0
        else:
            print("Choosed to bowl")
            t=1
    else:
        print("You lost the toss")
        print("Computer choosed to bat")
        t=1
    for i in range(0,2):
        if t==0:
            print("bating....")
            total1=0
            
            for i in range(0,1000):
                bowler=random.randint(0,9)
                bat=int(input())
                        
                if (0<=bat<=9): 
                    if (bat!=bowler):
                        total1+=bat
                        print("the total score of player is :",total1)
                    else:
                        print("Player::OUT")
                        break
                        
                else:
                    print("Give the proper input")
                    break
                    
            # l.append(total)
            t=1
            # print("Second round ::")
        else:
            print("bowling.....")
            total2=0
            
            for i in range(0,1000):
                bowler=random.randint(0,9)
                bat=int(input())
                if (0<=bat<=9): 
                    if (bat!=bowler):
                        total2+=bowler
                        print("the total score of player is :",total2)
                        # if total2>total:
                        #     l.append(total2)
                        #     break
                        # else:
                        #     continue
                                
                    else:
                        print("Player::OUT")
                        # l.append(total2)
                        break
                        
                else:
                    print("Give the proper input")
                    # l.append(total2)
                    break
                    

            t=0
            
    
        
    print("The player one score who bat first:",total1)
    print("The player two score who bat second :",total2)
    
    if total1>total2:
        print("Player who bat first is the winner:",total1)
    else:
        print("Player who bat second is the winner:",total2)
    
    s=input("DO YOU WANNA PLAY AGAIN y or n")
    if s=="y":
        continue
    else:
        break