Даны данные:

const courses = [
  {
    name: 'JavaScript',
    lessons: [
      { name: 'Functions', duration: 40 },
      { name: 'Arrays', duration: 30 },
      { name: 'Objects', duration: 50 },
    ],
  },
  {
    name: 'React',
    lessons: [
      { name: 'Components', duration: 60 },
      { name: 'State', duration: 45 },
    ],
  },
  {
    name: 'Node.js',
    lessons: [
      { name: 'HTTP', duration: 35 },
      { name: 'Express', duration: 55 },
      { name: 'Database', duration: 70 },
      { name: 'Authentication', duration: 65 },
    ],
  },
];

Напиши функцию getCourseStatistics(courses)

Результат должен быть:

{
  coursesCount: 3,
  lessonsCount: 9,
  totalDuration: 450
}

Здесь есть дополнительный уровень сложности: чтобы получить количество уроков и их продолжительность, тебе нужно обращаться к вложенному массиву lessons.