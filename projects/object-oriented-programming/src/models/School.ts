// Student
class Student {
  private id: number;
  private grade: number = -1;
  private teacherId: number;

  public constructor(id: number, teacher?: Teacher) {
    this.id = id;
    this.teacherId = teacher?.getId() || 0;
  }
  public getId(): number {
    return this.id;
  }
  public getGrade(): number {
    return this.grade;
  }
  public isApproved(): boolean {
    return this.grade >= 7;
  }
  public getTeacherId(): number {
    return this.teacherId;
  }

  public setGrade(grade: number) {
    this.grade = grade;
  }
}

// Teacher
class Teacher {
  private id: number;
  private students: Student[];

  public constructor(id: number) {
    this.id = id;
    this.students = [];
  }

  public getId(): number {
    return this.id;
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public getStudent(id: number): Student {
    return this.students.filter((student) => student.getId() === id)[0];
  }
}

// School
class School {
  private students: Student[];
  private teachers: Teacher[];

  public constructor() {
    this.students = [];
    this.teachers = [];
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public getTeachers(): Teacher[] {
    return this.teachers;
  }

  public hireTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  public fireTeacher(id: number): void {
    this.teachers = this.teachers.filter((teacher) => teacher.getId() !== id);
  }

  public enrollStudent(student: Student): void {
    this.students.push(student);
  }

  public expelStudent(id: number): void {
    this.students = this.students.filter((student) => student.getId() !== id);
  }
}
