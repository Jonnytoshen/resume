const startWork = new Date('2016-06-27')
const now = new Date()

export const basicInfo = {
  name: '沈水平',
  gender: '男',
  birth: '1993/10',
  city: '北京',
  job: '前端开发工程师',
  experience: now.getFullYear() - startWork.getFullYear(),
  contacts: {
    phone: '(+86) 13241468893',
    email: 'jonnytoshen@gmail.com',
    github: 'https://github.com/Jonnytoshen',
  },
} as const
