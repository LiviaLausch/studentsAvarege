
let students = [
    {
        name: "Carla",
        gradeOne: 7,
        gradeTwo: 8,
    },
    {
        name: "Maria",
        gradeOne: 10,
        gradeTwo: 5,
    },
    {
        name: "João",
        gradeOne: 4,
        gradeTwo: 9,
    },
    {
        name: "Felipe",
        gradeOne: 7,
        gradeTwo: 6,
    },
    {
        name: "Bruno",
        gradeOne: 5,
        gradeTwo: 6,
    },
    {
        name: "Lara",
        gradeOne: 10,
        gradeTwo: 4,
    }
]

function averageStudents(student){
    return average = ((student.gradeOne + student.gradeTwo) / 2).toFixed(1)
}

for (let student of students){
    let averageGrades = averageStudents(student)
    if(averageGrades >= 7){
        alert(`
            A média do aluno(a) ${student.name} é: ${averageGrades}! 
            Parabéns, ${student.name}! Você foi aprovado(a) no concuso!
            `)
    } else alert(`
                A média do aluno(a) ${student.name} é: ${averageGrades}!
                Não foi dessa vez ${student.name}, tente novamente!
                `)
}
