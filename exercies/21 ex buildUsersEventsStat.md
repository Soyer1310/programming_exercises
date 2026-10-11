Представь, что ты пишешь реальный backend для сервиса аналитики. API отдаёт события пользователей:

const events = [
  { userId: 1, type: 'login', timestamp: 1000 },
  { userId: 1, type: 'purchase', amount: 5000, timestamp: 1200 },
  { userId: 2, type: 'login', timestamp: 1300 },
  { userId: 1, type: 'logout', timestamp: 1500 },
  { userId: 2, type: 'purchase', amount: 3000, timestamp: 1700 },
  { userId: 1, type: 'login', timestamp: 2000 },
  { userId: 1, type: 'purchase', amount: 2000, timestamp: 2300 },
  { userId: 2, type: 'logout', timestamp: 2500 },
];

Нужно построить отчёт:

{
  totalRevenue: 10000,

  activeUsers: 2,

  users: [
    {
      userId: 1,
      logins: 2,
      purchases: 2,
      spent: 7000,
      lastActivity: 2300,
    },
    {
      userId: 2,
      logins: 1,
      purchases: 1,
      spent: 3000,
      lastActivity: 2500,
    },
  ],
}

Но теперь есть жёсткое условие:

activeUsers — количество пользователей, у которых последним событием является login, а не logout.

И ещё:

события могут идти в произвольном порядке;
один пользователь может иметь десятки тысяч событий;
исходный массив нельзя менять;
циклы запрещены;
постарайся сделать решение через цепочку операций;
не говорю, какие именно методы использовать.
если вынесешь логику в функции — объясни, почему каждая функция существует.