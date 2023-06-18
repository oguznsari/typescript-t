/**
 * -------------------------------
 * Challenge 1: Classes
 * -------------------------------
 * 1. Create a user class.
 * 2. Add a firstname, lastName, and email property
 * 3. Add a get to return fullName.
 * 4. Add a method to check if your email param matches the user's current email.
 */

class User {
    firstname: string;
    lastName: string;
    email: string;

    get fullName(): string {
        return `${this.firstname} ${this.lastName}`;
    }

    doesEmailMatch(email: string): boolean {
        return email === this.email;
    }
}