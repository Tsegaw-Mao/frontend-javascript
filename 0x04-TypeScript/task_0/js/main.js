// task_0/js/main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 22,
  location: 'Addis Ababa'
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Johnson',
  age: 24,
  location: 'Gondar'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  row.appendChild(nameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);

