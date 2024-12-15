import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner obj = new Scanner(System.in);

        System.out.println("Enter first number: ");
        int num1 = obj.nextInt();
        System.out.println("Enter second number: ");
        int num2 = obj.nextInt();
        System.out.println("Enter third number: ");
        int num3 = obj.nextInt();
        JavaExcercise.JavaExcerciseTaskOne(num1, num2, num3);

        System.out.println("Enter the nth number: ");
        int num4 = obj.nextInt();
        JavaExcercise.JavaExcerciseTaskTwo(num4);

        System.out.println(JavaExcercise.JavaExcerciseTaskThree(10, 20));
        System.out.println(JavaExcercise.JavaExcerciseTaskFour(10));

        JavaExcercise.JavaExcerciseTaskFive(20);

        JavaExcercise.JavaExcerciseTaskSeven();

        System.out.println("Enter x value: ");
        int num5 = obj.nextInt();
        System.out.println("Enter n value: ");
        int num6 = obj.nextInt();
        System.out.println(JavaExcercise.JavaExcerciseTaskEight(num5, num6));

        JavaExcercise.JavaExcerciseTaskNine(18, 24);
        JavaExcercise.JavaExcerciseTaskTen(10);
    }
}

class JavaExcercise {
    public static void JavaExcerciseTaskOne(int num1, int num2, int num3) {
        int answer = (num1 + num2 + num3) / 3;
        System.out.println("Average: " + answer);
    }

    public static void JavaExcerciseTaskTwo(int num4) {
        int sum = 0;
        for (int i = 1; i <= num4; i += 2) {
            sum += i;
        }
        System.out.println("Sum: " + sum);
    }

    public static int JavaExcerciseTaskThree(int num1, int num2) {
        return Math.max(num1, num2);
    }

    public static double JavaExcerciseTaskFour(int radius) {
        return 2 * Math.PI * radius;
    }

    public static void JavaExcerciseTaskFive(int age) {
        if (age >= 18) {
            System.out.println("You are eligible to vote");
        } else {
            System.out.println("You are not eligible to vote");
        }
    }

    public static void JavaExcerciseTaskSeven() {
        Scanner obj = new Scanner(System.in);
        int positiveCount = 0, negativeCount = 0, zeroCount = 0;
        boolean cond = true;

        while (cond) {
            System.out.println("Do you want to enter the number (1 for Yes, 0 for No): ");
            int val = obj.nextInt();
            if (val == 0) {
                cond = false;
                System.out.println("Positives: " + positiveCount);
                System.out.println("Negatives: " + negativeCount);
                System.out.println("Zeros: " + zeroCount);
            } else {
                System.out.println("Enter the number: ");
                int num = obj.nextInt();
                if (num > 0) positiveCount++;
                else if (num < 0) negativeCount++;
                else zeroCount++;
            }
        }
    }

    public static int JavaExcerciseTaskEight(int x, int n) {
        int ans = 1;
        for (int i = 0; i < n; i++) {
            ans *= x;
        }
        return ans;
    }

    public static void JavaExcerciseTaskNine(int num1, int num2) {
        while (num2 != 0) {
            int temp = num2;
            num2 = num1 % num2;
            num1 = temp;
        }
        System.out.println("GCD: " + num1);
    }

    public static void JavaExcerciseTaskTen(int n) {
        int n1 = 0, n2 = 1;
        System.out.print("Fibonacci series: " + n1 + " " + n2);
        for (int i = 2; i < n; i++) {
            int n3 = n1 + n2;
            System.out.print(" " + n3);
            n1 = n2;
            n2 = n3;
        }
        System.out.println();
    }
}


class Practice{
    public static void practiceCode(){
        System.out.println("THIS IS PRACTICE CODE");
        /*
        System.out.print("Enter a number : ");
        int num = sc.nextInt();
        for (int i = 1;i<=10;i++){
            System.out.println(num+" X "+i+" = "+num*i);
        }
        */
        /*
        int arr[] = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        System.out.println("The sum of the array elements is "+sum);
        */

        /*
        System.out.println("Enter First Number: ");
        int first = sc.nextInt();
        System.out.println("Enter Second Number: ");
        int second = sc.nextInt();
        System.out.println("Enter Third Number: ");
        int third = sc.nextInt();
        if(first>second && first>third){
            System.out.println("The largest number is "+first);
        }else if(second>first && second>third){
            System.out.println("The largest number is "+second);
        }else{
            System.out.println("The largest number is "+third);
        }
        */

        // even or odd program
        /*
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        if(num==0){
            System.out.println("Number is zero");
        } else if (num%2==0){
            System.out.println("Number is even");
        } else{
            System.out.println("Number is odd");
        }*/
        /*
        // 1. Hello and Name Printer
        System.out.println("Hello\nIfham Ahmed Khan");

        // 2. Sum of Two Numbers
        Scanner src = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int num_one = src.nextInt();
        System.out.print("Enter second number: ");
        int num_two = src.nextInt();
        System.out.println(num_one +"+"+ num_two +"= "+ (num_one+num_two));

        // 3. Division of Two Numbers
        System.out.print("Enter first number:");
        int num_three = src.nextInt();
        System.out.print("Enter second number:");
        int num_four = src.nextInt();
        System.out.println(num_three+"/"+ num_four +"= "+ (num_three/num_four));

        /*
        4. Write a Java program to print the results of the following operations.
        Test Data:
        a. -5 + 8 * 6
        b. (55+9) % 9
        c. 20 + -3*5 / 8
        d. 5 + 15 / 3 * 2 - 8 % 3
        */
        /*
        System.out.println((-5 + (8 * 6)));
        System.out.println((55+9)%9);
        System.out.println(20+ ((-3*5) / 8));
        System.out.println(5 + 15 / 3 * 2 - 8 % 3);
        */
    }
}

