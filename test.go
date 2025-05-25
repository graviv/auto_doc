package main

import "fmt"

// addNumbers takes two integers as input and returns their sum.
// Purpose: To perform a basic arithmetic addition.
func addNumbers(a int, b int) int {
	return a + b
}

// createGreeting takes a name as a string and returns a personalized greeting message.
// Purpose: To generate a formatted string for greeting purposes.
func createGreeting(name string) string {
	return fmt.Sprintf("Hello, %s! Welcome.", name)
}

func main() {
	// Demonstrate the addNumbers function
	num1 := 5
	num2 := 10
	sum := addNumbers(num1, num2)
	fmt.Printf("The sum of %d and %d is: %d\n", num1, num2, sum)

	// Demonstrate the createGreeting function
	personName := "Alice"
	greeting := createGreeting(personName)
	fmt.Println(greeting)

	personName2 := "Bob"
	greeting2 := createGreeting(personName2)
	fmt.Println(greeting2)
}
