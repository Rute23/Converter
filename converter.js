using System;

public class Program
{
    public static void Main()
    {
        // I take the value entred by users and convert this value in int
        Console.Write("Enter a number: ");
        int number = int.Parse(Console.ReadLine());

        //I create two table

        // the first one is a string table of roman numbers

        string[] romansNumbers = { "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" };

        // the second is a string table of Arabic numbers
        int[] arabicNumbers = { 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 };


        // the result of the conversion will be store in a string variable
        string resultOfConversion = "";

        // each time i variable is lower than size of romansNumber table, we increment i of 1
        for (int i = 0; i < romansNumbers.Length; i++)
        {
            // we enter in a second loop
            //as long as the number is greater than value of position indexed by i in arabicNumbers table
            while (number >= arabicNumbers[i])
            {

                /*we substract number to the value indexed of the position indexed by i in the table values
                and store the result in number varibale*/

                number -= arabicNumbers[i];

                /*the convertion value ist the concatenation of the value of result variable value  with the value of
                the position indexed by i in in romans table  */

                resultOfConversion += romansNumbers[i];
            }

            // we repeat the loop for until i equal to the number entered by user   
        }
        Console.WriteLine("The Roman number is: " + resultOfConversion);
    }
}
