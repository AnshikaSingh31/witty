
import {type User,type Subject,type Assignment,type Notes,type StudentProgress} from '../types'

export const users:User[]=[
    
    {
        id:'1',
        name:'Anshika Singh',
        email:'student100x@gmail.com',
        password:'student123',
        role:'student'
    },
    {
        id:'2',
        name:'Admin',
        email:'admin100x@gmail.com',
        password:'admin123',
        role:'admin'
    }

]

export const subjects:Subject[]=[
    {id:'1',name:'DSA',description:undefined},
    {id:'2',name:'DEV',description:undefined},
]

export const assignments : Assignment[]=[
    {
        id:'1',
        subjectId:'1',
        title:'arrays & strings',
        description:'solve 10 question ',
        notionlink:'https://notion/arrays',
        deadline:'2026-04-11',
        marks:20
    },
    {
        id:'2',
        subjectId:'1',
        title:'linked lists',
        description:'solve the problem  ',
        notionlink:'https://notion/xyz ',
        deadline:'2026-04-12',
        marks:20
    },
    {
        id:'3',
        subjectId:'2',
        title:'build a resr api',
        description:'build api using node.js and express ',
        notionlink:'https://notion/abc',
        deadline:'2026-04-11',
        marks:20
    },
    {
        id:'4',
        subjectId:'2',
        title:'React',
        description:'props and state  ',
        notionlink:'https://notion/react',
        deadline:'2026-04-13',
        marks:20
    }
]

export const notes: Notes[]=[
    {
        id:'1',
        subjectId:'1',
        title:'DSA Week 1-arrays',
        notionLink:'https://notion/dsa-week1'
    },
    {
        id:'2',
        subjectId:'1',
        title:'DS week 2- recursion',
        notionLink:'https://notion/dsa-week2'
    },
    {
        id:'3',
        subjectId:'2',
        title:'Dev week 1-HTML & CSS',
        notionLink:'https://notion/dev-week1',
    },
    {
        id:'4',
        subjectId:'2',
        title:'Dev week 2- JS Basics',
        notionLink:'https://notion/dev-week2',
    }
]

export const studentProgress: StudentProgress[]=[
    {
        studentId:'1',
        studentName:'Anshika Singh',
        assignmentId:'1',
        assignmentTitle:'Arrays',
        subjectId:'1',
        completed:true,
        marks:18,
        submittedAt:'2026-04-12',
    },
    {
        studentId:'1',
        studentName:'Anshika Singh',
        assignmentId:'2',
        assignmentTitle:'linked lists',
        subjectId:'1',
        completed:false,
        marks:null,
        submittedAt:null,
    },
    {
        studentId:'1',
        studentName:'Anshika Singh',
        assignmentId:'3',
        assignmentTitle:'Build a REST API',
        subjectId:'2',
        completed:true,
        marks:27,
        submittedAt:'2026-04-12',
    },
]