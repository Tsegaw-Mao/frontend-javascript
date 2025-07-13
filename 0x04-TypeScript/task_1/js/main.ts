interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Johnson',
  fullTimeEmployee: false,
  location: 'London'
};

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17
};

console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));

const student = new StudentClass("Sarah", "Connor");
console.log(student.displayName());
console.log(student.workOnHomework());
