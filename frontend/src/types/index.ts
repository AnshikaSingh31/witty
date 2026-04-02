

export type Role ='admin'|'student'

export interface User{
    id:string,
    name:string,
    email:string,
    password:string,
    role: Role
}

export interface Subject {
    id:string,
    name:string,
    description?:string;
    
}

export interface Assignment {
    id:string,
    subjectId:string,
    title:string,
    description:string,
    notionlink:string,
    deadline:string,
    marks:number

}

export interface Notes{
    id:string,
    subjectId:string,
    title:string,
    notionLink:string
}

export interface StudentProgress{
    studentId:string,
    studentName:string,
    assignmentId:string,
    assignmentTitle:string,
    subjectId:string,
    completed:boolean,
    marks: number|null,
    submittedAt:string|null
};