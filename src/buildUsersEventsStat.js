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

// Нужно построить отчёт:

// {
//   totalRevenue: 10000,

//   activeUsers: 2,

//   users: [
//     {
//       userId: 1,
//       logins: 2,
//       purchases: 2,
//       spent: 7000,
//       lastActivity: 2300,
//     },
//     {
//       userId: 2,
//       logins: 1,
//       purchases: 1,
//       spent: 3000,
//       lastActivity: 2500,
//     },
//   ],
// }


const buildUsersEventsStat = (events) => {
  const buildStatDataUnit = (acc, event) => {
    const statDataUnit = acc.users.find(stat => stat.userId === event.userId);
    const isLogin = event.type ==='login';
    const isPurchase = event.type ==='purchase';
    acc.totalRevenue += isPurchase ? event.amount : 0;
    if (!statDataUnit) {
      acc.users.push({
        userId: event.userId,
        logins: isLogin  ? 1 : 0,
        purchases: 0,
        spent: 0,
        lastActivity: event.timestamp,
        lastStatus: event.type,
      })
    } else {
      const isLastAct = event.timestamp > statDataUnit.lastActivity;
      statDataUnit.logins += isLogin ? 1 : 0;
      statDataUnit.purchases += isPurchase ? 1 : 0;
      statDataUnit.spent += isPurchase ? event.amount : 0;
      statDataUnit.lastActivity = isLastAct ? event.timestamp : statDataUnit.lastActivity;
      statDataUnit.lastStatus = isLastAct ? event.type : statDataUnit.lastStatus;
    }
    return acc;
  }
  const eventsStat = events.reduce(buildStatDataUnit, {totalRevenue: 0, activeUsers: 0, users: []});
  eventsStat.activeUsers = eventsStat.users.reduce((acc, user) => acc + user.lastStatus !== 'logout' ? 1 : 0, 0)
  eventsStat.users = eventsStat.users.map(user => {
    return {
      userId: user.userId,
      logins: user.logins,
      purchases: user.purchases,
      spent: user.spent,
      lastActivity: user.lastActivity,
    }
  })
  return eventsStat;
};
