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
  
  interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  
  function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    } else {
      return employee.workTeacherTasks();
    }
  }
  
  // String literal type and function
  
  type Subjects = 'Math' | 'History';
  
  function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
      return 'Teaching Math';
    } else {
      return 'Teaching History';
    }
  }
  
  // Testing createEmployee and executeWork
  console.log(createEmployee(200)); // Teacher
  console.log(createEmployee(1000)); // Director
  console.log(createEmployee('$500')); // Director
  
  console.log(executeWork(createEmployee(200)));     // Getting to work
  console.log(executeWork(createEmployee(1000)));    // Getting to director tasks
  
  console.log(teachClass('Math'));       // Teaching Math
  console.log(teachClass('History'));    // Teaching History
  
  const teacher1: Teacher = {
    firstName: 'Alice',
    lastName: 'Smith',
    fullTimeEmployee: true,
    location: 'New York',
    yearsOfExperience: 5,
    workFromHome: () => "Working from home",
    getCoffeeBreak: () => "Taking a coffee break",
    workTeacherTasks: () => "Grading papers"
  };
  
  const teacher2: Teacher = {
    firstName: 'Bob',
    lastName: 'Johnson',
    fullTimeEmployee: false,
    location: 'London',
    workFromHome: () => "Working from home",
    getCoffeeBreak: () => "Taking a coffee break",
    workTeacherTasks: () => "Grading papers"
  };
  
  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
    workFromHome: () => "Working from home",
    getCoffeeBreak: () => "Taking a coffee break",
    workTeacherTasks: () => "Grading papers"
  };
  
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
    workFromHome: () => "Working from home",
    getCoffeeBreak: () => "Taking a coffee break",
    workTeacherTasks: () => "Grading papers"
  };
  
  console.log(teacher3);
  console.log(director1);
  console.log(printTeacher("John", "Doe"));
  
  const student = new StudentClass("Sarah", "Connor");
  console.log(student.displayName());
  console.log(student.workOnHomework());