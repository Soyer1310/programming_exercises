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



const getCourseStatistics = (courses) => {
  const init = {
    coursesCount: 0,
    lessonsCount: 0,
    totalDuration: 0, 
  };
  const fn = (acc, course) => {
    acc.coursesCount += 1;
    acc.lessonsCount += course.lessons.length;
    acc.totalDuration += course.lessons.reduce((acc, lesson) => acc + lesson.duration, 0);
    return acc;
  };
  return courses.reduce(fn, init);
};

console.log(getCourseStatistics(courses));