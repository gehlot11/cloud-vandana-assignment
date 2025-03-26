// Anagram Checker Assignment - Java File
// This program checks whether two input strings are anagrams of each other.

import java.util.Arrays;  // Import Arrays class for sorting
import java.util.Scanner; // Import Scanner class for taking user input

public class AnagramChecker {

    // Method to check if two strings are anagrams
    public static boolean isAnagram(String str1, String str2) {
        // Remove all white spaces and convert strings to lowercase for case-insensitive comparison
        char[] arr1 = str1.replaceAll("\\s", "").toLowerCase().toCharArray();
        char[] arr2 = str2.replaceAll("\\s", "").toLowerCase().toCharArray();

        // Sort the character arrays to compare them
        Arrays.sort(arr1);
        Arrays.sort(arr2);

        // Check if the sorted arrays are equal
        return Arrays.equals(arr1, arr2);
    }

    // Main method to execute the program
    public static void main(String[] args) {
        // Create a Scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter the first string
        System.out.print("Enter first string: ");
        String str1 = scanner.nextLine();

        // Prompt the user to enter the second string
        System.out.print("Enter second string: ");
        String str2 = scanner.nextLine();

        // Check if the two strings are anagrams and print the result
        if (isAnagram(str1, str2)) {
            System.out.println("The strings are anagrams.");
        } else {
            System.out.println("The strings are not anagrams.");
        }

        // Close the scanner to avoid memory leaks
        scanner.close();
    }
}
