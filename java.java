// File: MyJavaUtils.java
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

public class MyJavaUtils {

    /**
     * Concatenates two strings with a space in between.
     * Purpose: To perform basic string manipulation.
     *
     * @param str1 The first string.
     * @param str2 The second string.
     * @return The concatenated string.
     */
    public static String concatenateStrings(String str1, String str2) {
        if (str1 == null) str1 = "";
        if (str2 == null) str2 = "";
        return str1 + " " + str2;
    }

    /**
     * Gets the current date formatted as "dd-MMM-yyyy" (e.g., 25-May-2025).
     * Purpose: To demonstrate date formatting using standard Java libraries.
     *
     * @return The formatted current date string.
     */
    public static String getCurrentFormattedDate() {
        LocalDate today = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy", Locale.ENGLISH);
        return today.format(formatter);
    }

    // Main method to demonstrate the functions
    public static void main(String[] args) {
        // Demonstrate concatenateStrings function
        String firstName = "John";
        String lastName = "Doe";
        String fullName = concatenateStrings(firstName, lastName);
        System.out.println("Full Name: " + fullName);

        String part1 = "Hello";
        String part2 = "World";
        String greeting = concatenateStrings(part1, part2);
        System.out.println("Greeting: " + greeting);

        // Demonstrate getCurrentFormattedDate function
        String formattedDate = getCurrentFormattedDate();
        System.out.println("Today's Date: " + formattedDate);
    }
}
