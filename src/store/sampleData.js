
const sampleData = {
  location: { pathname: '/task', type: 'TASK', payload: {}, prev: { pathname: '', type: '', payload: {} }, kind: 'load', routesMap: { HOME: '/', PLAN: '/plan', TASK: '/task', TASK_ADD: '/task/add', TASK_EDIT: '/task/:taskId', COMPANY_ADD: '/company/add', COMPANY_EDIT: '/company/:companyId', COMPANY: '/company', CONTACT_ADD: '/contact/add', CONTACT_EDIT: '/contact/:contactId', CONTACT: '/contact', SIGNUP: '/admin/signup', SIGNIN: '/admin/signin' } },
  firebase: {
    requesting: { task: false, taskSchedule: false, student: false, contact: false, company: true },
    requested: { task: true, taskSchedule: true, student: true, contact: true, company: false },
    timestamps: { task: 1614258161850, taskSchedule: 1614258161870, student: 1614258162022, contact: 1614258162033, company: 1614258160968 },
    data: {
      task: {
        '-MTpMa2qkioSMa7BwEow': { status: 'inprogress', title: 'asdasd' },
        '-MTq3E6y2Az32aLrI5i0': { start: '2021-02-20T12:00', status: 'todo', title: 'too cool' },
        '-MU3wXupnIW4504gIih_': { status: 'todo', title: 'fobar 2' },
        '-MU3wa-x2fveVvXb8ga2': { start: '20210225T150000-06:00', status: 'todo', title: 'foo' },
        '-MU3weUku10xBuALZ3Pf': { status: 'todo', title: 'foobar 3' },
        '-MU3zPsvNcNPFD9G_uCr': { status: 'todo', title: '123' },
        '-MU3zUF8YjJwdJ6eEWNb': { status: 'inprogress', title: 'afasdfasf' },
        '-MU3ziLUPQqqDXUM4S9M': { status: 'todo', title: 'hi' },
        '-MU4-9jGRsmhC9-ThQ6p': { status: 'inprogress', title: 'HEllo' },
        '-MU4-JcwPTAD_pUG5nAb': { status: 'todo', title: '123' },
        '-MU4-PVF_SkrLjOYTWsH': { status: 'todo', title: '456' },
        '-MU4-YMINLFDEuCQJuRo': { status: 'todo', title: '789' },
        '-MU4-n0kJSCL_fT-rwGH': { status: 'todo', title: '123' },
        '-MU4-o0HvQf7HUZeHiOa': { status: 'todo', title: '456' },
        '-MU8qugaFsxv33qvtFyq': { status: 'todo', title: 'Andy' },
        '-MU8qy2CWLCCd1p50JfY': { status: 'todo', title: 'foo' },
        '-MU8qyOhKAKPoCGUNMaO': { status: 'todo', title: 'bar' },
        '-MU8qyui7JSnitvB-KjZ': { status: 'todo', title: 'tcool' },
        '-MU8s9Uep3TPxgARdBMf': { status: 'todo', title: 'cool' },
        '-MU8sA-JhOfp-RY_bk-c': { status: 'todo', title: 'adsfsaf' },
        '-MU8sATvgRXjzeTCMymT': { description: 'stuff', start: '2021-02-19T10:52', status: 'todo', title: 'Nice' },
        '-MUJ3QdLQv2EGTaUpPkt': { status: 'done', title: 'add start time  on drop task' },
        '-MUJ3YHg56YfGypHDOoU': { status: 'todo', title: 'rename unscheduled to task order' },
        '-MUJ4533QIpIj4Agktp6': { status: 'done', title: 'don\'t remove scheduled tasks from unscheduled' },
        '-MUJ4LrvvgRv2I-_wXSm': { start: '2021-02-25T09:00', status: 'todo', title: 'add new plop for utility' },
        '-MUJ4QK79lFBJaT1oRlS': { start: '2021-02-25T09:00', status: 'todo', title: 'remove auto fil from add task field' },
        '-MUJ4WIbhpjbor0nMjSi': { start: '', status: 'done', title: 'build filter for \'task planning\'' },
        '-MUJ5rVYGICW11GevZ0l': { status: 'inprogress', title: 'Build task item for "all tasks" list that displays the date' },
        '-MUJB0Zh1oiHJyAh5Guh': { description: 'Drop target will include field target "start-startdtate"', status: 'todo', title: 'build new drop taget' },
        '-MUJNOf-RfemQMjY_RKw': { start: '2021-02-18T08:11', status: 'todo', title: 'don\'t show in planning' },
        '-MUJOrRZ2tbXkTcoW4MQ': { start: '2021-02-25T09:19', status: 'todo', title: 'build filters for slots' },
        '-MUO7qBGrDKWM9eqocvw': { status: 'todo', title: 'allow date removal of start field' }
      },
      taskSchedule: {
        '20210222T150000-06:00': ['-MU8sA-JhOfp-RY_bk-c'],
        '20210223T120000-06:00': ['-MU8qyui7JSnitvB-KjZ'],
        '20210223T200000-06:00': ['-MU8sATvgRXjzeTCMymT'],
        '20210224T120000-06:00': ['-MU3zUF8YjJwdJ6eEWNb'],
        '20210225T120000-06:00': ['-MU3zjrXBJD85kXEWD-2'],
        '20210225T150000-06:00': ['-MU3wa-x2fveVvXb8ga2', '-MU4-PVF_SkrLjOYTWsH', '-MU8qugaFsxv33qvtFyq'],
        undefined: ['-MU4-o0HvQf7HUZeHiOa', '-MU8s9Uep3TPxgARdBMf', '-MU8qyOhKAKPoCGUNMaO', '-MU8qy2CWLCCd1p50JfY', '-MU3zPsvNcNPFD9G_uCr', '-MU4-9jGRsmhC9-ThQ6p', '-MU3ziLUPQqqDXUM4S9M', '-MU4-YMINLFDEuCQJuRo', '-MU4-n0kJSCL_fT-rwGH', '-MU4-JcwPTAD_pUG5nAb', '-MTq3E6y2Az32aLrI5i0', '-MU3wXupnIW4504gIih_', '-MU3weUku10xBuALZ3Pf', '-MTpMa2qkioSMa7BwEow'],
        unscheduled: { 0: '-MUJ3QdLQv2EGTaUpPkt', 1: '-MUJ4WIbhpjbor0nMjSi', 2: '-MUJOrRZ2tbXkTcoW4MQ', 3: '-MUJ4533QIpIj4Agktp6', 4: '-MUJ5rVYGICW11GevZ0l', 5: '-MUJ3YHg56YfGypHDOoU', 6: '-MUJ4LrvvgRv2I-_wXSm', 7: '-MUJ4QK79lFBJaT1oRlS', 8: '-MUJB0Zh1oiHJyAh5Guh', 9: '-MUJOrRZ2tbXkTcoW4MQ', '-MUO7qBIjluEUsNcg5Qy': '-MUO7qBGrDKWM9eqocvw' }
      },
      student: { '-MQ2VKb15PcYbfFnyBeY': { id: '24', lastName: 'Frievalt', studentFirstName: 'Luke', studentLastName: 'Frievalt' }, '-MQCcMuXdTVFTvz6ylUx': { id: '23', lastName: 'Anderson', studentFirstName: 'Mark', studentLastName: 'Anderson' }, '-MQDOYiwhVfaqyKwtvKV': { id: '44', lastName: 'Smith', studentFirstName: 'Tim', studentLastName: 'Smith' }, '-MQDPJtPo6pVUeJiMmBI': { id: '45', lastName: 'Smith', studentFirstName: 'Mark', studentLastName: 'Smith' }, '-MQDQA5ek5syfZG0JcUu': { id: '66', lastName: 'Johnson', studentFirstName: 'Kevin', studentLastName: 'Johnson' }, '-MQDQ_IfUOd4KTgHJN6I': { id: '1', lastName: 'test', studentFirstName: 'test', studentLastName: 'test' }, '-MQF9Tz78vWdZONN4c-j': { id: '1', lastName: '12', studentFirstName: '1', studentLastName: '12' }, '-MQFABer8moCGZPOWaJv': { id: '22', lastName: ';lk', studentFirstName: ';lk;', studentLastName: ';lk;' }, '-MQFBE_KIlhQFJkpB0F2': { id: '2', lastName: '234', studentFirstName: '343', studentLastName: '343' }, '-MQFBQtNSr46GFWRHrxS': { id: '23', lastName: 'lkjlkj', studentFirstName: 'lkjlkj', studentLastName: 'lkjlj' }, '-MQFC08rgSD8Sq6Hu02p': { id: '23', lastName: 'lkjlkj', studentFirstName: 'lkjlkj', studentLastName: 'lkjlj' }, '-MQFCGqEVTSIwBlsHyiL': { id: '2', lastName: 'lklkj', studentFirstName: 'lkjlkj', studentLastName: 'lkjlkjlkj' }, '-MQI6N7erO2cyv9c8JXt': { id: '24', lastName: 'lkjlkj', studentFirstName: 'lkjlkj', studentLastName: 'lkjlkj' }, '-MQI7RBf3U0eVt52raoS': { id: '3243', lastName: '.m;lkjlkj', studentFirstName: 'lkjlkjlkj', studentLastName: 'lkjlkj' }, '-MQI7e0aOI8qsCGBxjhG': { id: '23', lastName: 'ljlkj', studentFirstName: 'lkjlkj', studentLastName: 'lkjlkj' }, '-MQI8-oAqPaM9N5rJ_Vm': { id: 6, lastName: '23', studentFirstName: '23', studentLastName: '23' }, '-MQI8Cub_Vf03XXn8b9G': { id: '50', lastName: 'lkjlkj', studentFirstName: 'lkjlkj', studentLastName: 'lkjlkj' }, '-MQI8TU-S4NXJLmDrJ9m': { id: '22', lastName: 'asdfsaf', studentFirstName: 'sdfsf', studentLastName: 'sdfdsfds' } },
      contact: { '-MQwWk1CztpdBq4h1Ay7': { colleagueAt: 'NM', employer: 'Discover', firstName: 'Nicole', lastName: 'Suchowski', linkedInProfile: 'https://www.linkedin.com/in/nicole-suchowski-0580759/', phoneNumber: '4146175881', skills: 'Scrum Master, Scrum Coach' }, '-MR_9WPxXsQx8He4FdY6': { employer: '-MRKXnyjo8a08Lh-a9km', firstName: 'Eric', lastContact: 'interview 12/20', lastName: 'Solan', linkedInProfile: 'https://www.linkedin.com/in/eric-solan-042b183/detail/contact-info/', pastEmployers: 'http://www.solcomedia.com/', skills: 'Decision Maker' } }
    },
    ordered: {
      task: [{ key: '-MTpMa2qkioSMa7BwEow', value: { status: 'inprogress', title: 'asdasd' } }, { key: '-MTq3E6y2Az32aLrI5i0', value: { start: '2021-02-20T12:00', status: 'todo', title: 'too cool' } }, { key: '-MU3wXupnIW4504gIih_', value: { status: 'todo', title: 'fobar 2' } }, { key: '-MU3wa-x2fveVvXb8ga2', value: { start: '20210225T150000-06:00', status: 'todo', title: 'foo' } }, { key: '-MU3weUku10xBuALZ3Pf', value: { status: 'todo', title: 'foobar 3' } }, { key: '-MU3zPsvNcNPFD9G_uCr', value: { status: 'todo', title: '123' } }, { key: '-MU3zUF8YjJwdJ6eEWNb', value: { status: 'inprogress', title: 'afasdfasf' } }, { key: '-MU3ziLUPQqqDXUM4S9M', value: { status: 'todo', title: 'hi' } }, { key: '-MU4-9jGRsmhC9-ThQ6p', value: { status: 'inprogress', title: 'HEllo' } }, { key: '-MU4-JcwPTAD_pUG5nAb', value: { status: 'todo', title: '123' } }, { key: '-MU4-PVF_SkrLjOYTWsH', value: { status: 'todo', title: '456' } }, { key: '-MU4-YMINLFDEuCQJuRo', value: { status: 'todo', title: '789' } }, { key: '-MU4-n0kJSCL_fT-rwGH', value: { status: 'todo', title: '123' } }, { key: '-MU4-o0HvQf7HUZeHiOa', value: { status: 'todo', title: '456' } }, { key: '-MU8qugaFsxv33qvtFyq', value: { status: 'todo', title: 'Andy' } },
        { key: '-MU8qy2CWLCCd1p50JfY', value: { status: 'todo', title: 'foo' } }, { key: '-MU8qyOhKAKPoCGUNMaO', value: { status: 'todo', title: 'bar' } }, { key: '-MU8qyui7JSnitvB-KjZ', value: { status: 'todo', title: 'tcool' } }, { key: '-MU8s9Uep3TPxgARdBMf', value: { status: 'todo', title: 'cool' } }, { key: '-MU8sA-JhOfp-RY_bk-c', value: { status: 'todo', title: 'adsfsaf' } }, { key: '-MU8sATvgRXjzeTCMymT', value: { description: 'stuff', start: '2021-02-19T10:52', status: 'todo', title: 'Nice' } },
        { key: '-MUJ3QdLQv2EGTaUpPkt', value: { status: 'done', title: 'add start time  on drop task' } }, { key: '-MUJ3YHg56YfGypHDOoU', value: { status: 'todo', title: 'rename unscheduled to task order' } }, { key: '-MUJ4533QIpIj4Agktp6', value: { status: 'done', title: 'don\'t remove scheduled tasks from unscheduled' } }, {
          key: '-MUJ4LrvvgRv2I-_wXSm',
          value: {
            start: '2021-02-25T09:00',
            status: 'todo',
            title: 'add new plop for utility'
          }
        }, { key: '-MUJ4QK79lFBJaT1oRlS', value: { start: '2021-02-25T09:00', status: 'todo', title: 'remove auto fil from add task field' } }, { key: '-MUJ4WIbhpjbor0nMjSi', value: { start: '', status: 'done', title: 'build filter for \'task planning\'' } }, { key: '-MUJ5rVYGICW11GevZ0l', value: { status: 'inprogress', title: 'Build task item for "all tasks" list that displays the date' } }, {
          key: '-MUJB0Zh1oiHJyAh5Guh',
          value: { description: 'Drop target will include field target "start-startdtate"', status: 'todo', title: 'build new drop taget' }
        }, { key: '-MUJNOf-RfemQMjY_RKw', value: { start: '2021-02-18T08:11', status: 'todo', title: 'don\'t show in planning' } }, { key: '-MUJOrRZ2tbXkTcoW4MQ', value: { start: '2021-02-25T09:19', status: 'todo', title: 'build filters for slots' } },
        { key: '-MUO7qBGrDKWM9eqocvw', value: { status: 'todo', title: 'allow date removal of start field' } }],
      taskSchedule: [{ key: '20210222T150000-06:00', value: ['-MU8sA-JhOfp-RY_bk-c'] }, { key: '20210223T120000-06:00', value: ['-MU8qyui7JSnitvB-KjZ'] }, { key: '20210223T200000-06:00', value: ['-MU8sATvgRXjzeTCMymT'] }, { key: '20210224T120000-06:00', value: ['-MU3zUF8YjJwdJ6eEWNb'] }, { key: '20210225T120000-06:00', value: ['-MU3zjrXBJD85kXEWD-2'] }, { key: '20210225T150000-06:00', value: ['-MU3wa-x2fveVvXb8ga2', '-MU4-PVF_SkrLjOYTWsH', '-MU8qugaFsxv33qvtFyq'] }, { key: 'undefined', value: ['-MU4-o0HvQf7HUZeHiOa', '-MU8s9Uep3TPxgARdBMf', '-MU8qyOhKAKPoCGUNMaO', '-MU8qy2CWLCCd1p50JfY', '-MU3zPsvNcNPFD9G_uCr', '-MU4-9jGRsmhC9-ThQ6p', '-MU3ziLUPQqqDXUM4S9M', '-MU4-YMINLFDEuCQJuRo', '-MU4-n0kJSCL_fT-rwGH', '-MU4-JcwPTAD_pUG5nAb', '-MTq3E6y2Az32aLrI5i0', '-MU3wXupnIW4504gIih_', '-MU3weUku10xBuALZ3Pf', '-MTpMa2qkioSMa7BwEow'] }, {
        key: 'unscheduled',
        value: {
          0: '-MUJ3QdLQv2EGTaUpPkt',
          1: '-MUJ4WIbhpjbor0nMjSi',
          2: '-MUJOrRZ2tbXkTcoW4MQ',
          3: '-MUJ4533QIpIj4Agktp6',
          4: '-MUJ5rVYGICW11GevZ0l',
          5: '-MUJ3YHg56YfGypHDOoU',
          6: '-MUJ4LrvvgRv2I-_wXSm',
          7: '-MUJ4QK79lFBJaT1oRlS',
          8: '-MUJB0Zh1oiHJyAh5Guh',
          9: '-MUJOrRZ2tbXkTcoW4MQ',
          '-MUO7qBIjluEUsNcg5Qy': '-MUO7qBGrDKWM9eqocvw'
        }
      }],
      student: [{ key: '-MQ2VKb15PcYbfFnyBeY', value: { id: '24', lastName: 'Frievalt', studentFirstName: 'Luke', studentLastName: 'Frievalt' } }, { key: '-MQCcMuXdTVFTvz6ylUx', value: { id: '23', lastName: 'Anderson', studentFirstName: 'Mark', studentLastName: 'Anderson' } }, { key: '-MQDOYiwhVfaqyKwtvKV', value: { id: '44', lastName: 'Smith', studentFirstName: 'Tim', studentLastName: 'Smith' } }, { key: '-MQDPJtPo6pVUeJiMmBI', value: { id: '45', lastName: 'Smith', studentFirstName: 'Mark', studentLastName: 'Smith' } }, { key: '-MQDQA5ek5syfZG0JcUu', value: { id: '66', lastName: 'Johnson', studentFirstName: 'Kevin', studentLastName: 'Johnson' } }, { key: '-MQDQ_IfUOd4KTgHJN6I', value: { id: '1', lastName: 'test', studentFirstName: 'test', studentLastName: 'test' } }, { key: '-MQF9Tz78vWdZONN4c-j', value: { id: '1', lastName: '12', studentFirstName: '1', studentLastName: '12' } }, { key: '-MQFABer8moCGZPOWaJv', value: { id: '22', lastName: ';lk', studentFirstName: ';lk;', studentLastName: ';lk;' } },
        { key: '-MQFBE_KIlhQFJkpB0F2', value: { id: '2', lastName: '234', studentFirstName: '343', studentLastName: '343' } }, { key: '-MQFBQtNSr46GFWRHrxS', value: { id: '23', lastName: 'lkjlkj', studentFirstName: 'lkjlkj', studentLastName: 'lkjlj' } }, { key: '-MQFC08rgSD8Sq6Hu02p', value: { id: '23', lastName: 'lkjlkj', studentFirstName: 'lkjlkj', studentLastName: 'lkjlj' } }, { key: '-MQFCGqEVTSIwBlsHyiL', value: { id: '2', lastName: 'lklkj', studentFirstName: 'lkjlkj', studentLastName: 'lkjlkjlkj' } }, { key: '-MQI6N7erO2cyv9c8JXt', value: { id: '24', lastName: 'lkjlkj', studentFirstName: 'lkjlkj', studentLastName: 'lkjlkj' } }, { key: '-MQI7RBf3U0eVt52raoS', value: { id: '3243', lastName: '.m;lkjlkj', studentFirstName: 'lkjlkjlkj', studentLastName: 'lkjlkj' } }, { key: '-MQI7e0aOI8qsCGBxjhG', value: { id: '23', lastName: 'ljlkj', studentFirstName: 'lkjlkj', studentLastName: 'lkjlkj' } }, { key: '-MQI8-oAqPaM9N5rJ_Vm', value: { id: 6, lastName: '23', studentFirstName: '23', studentLastName: '23' } }, { key: '-MQI8Cub_Vf03XXn8b9G', value: { id: '50', lastName: 'lkjlkj', studentFirstName: 'lkjlkj', studentLastName: 'lkjlkj' } }, {
          key: '-MQI8TU-S4NXJLmDrJ9m',
          value: { id: '22', lastName: 'asdfsaf', studentFirstName: 'sdfsf', studentLastName: 'sdfdsfds' }
        }],
      contact: [{ key: '-MQwWk1CztpdBq4h1Ay7', value: { colleagueAt: 'NM', employer: 'Discover', firstName: 'Nicole', lastName: 'Suchowski', linkedInProfile: 'https://www.linkedin.com/in/nicole-suchowski-0580759/', phoneNumber: '4146175881', skills: 'Scrum Master, Scrum Coach' } }, { key: '-MR_9WPxXsQx8He4FdY6', value: { employer: '-MRKXnyjo8a08Lh-a9km', firstName: 'Eric', lastContact: 'interview 12/20', lastName: 'Solan', linkedInProfile: 'https://www.linkedin.com/in/eric-solan-042b183/detail/contact-info/', pastEmployers: 'http://www.solcomedia.com/', skills: 'Decision Maker' } }]
    },
    auth: {
      uid: 'J3Gke8kZ1sXwk9BCaIegkiUw8rW2',
      displayName: null,
      photoURL: null,
      email: 'afrievalt@yahoo.com',
      emailVerified: false,
      phoneNumber: null,
      isAnonymous: false,
      tenantId: null,
      providerData: [{ uid: 'afrievalt@yahoo.com', displayName: null, photoURL: null, email: 'afrievalt@yahoo.com', phoneNumber: null, providerId: 'password' }],
      apiKey: 'AIzaSyAx5LrJQ2DOJYzqMxo6q13tExPGxW1ob5Q',
      appName: '[DEFAULT]',
      authDomain: 'new-project-fe3eb.firebaseapp.com',
      stsTokenManager: { apiKey: 'AIzaSyAx5LrJQ2DOJYzqMxo6q13tExPGxW1ob5Q', refreshToken: 'AOvuKvR_ZUa2XfX_mC6hdLHU3wBSDRfkriwqEDTreaLNYd6EkialQoAq2TBzfLvSAXlL29mRS-LE9Erg7jMvoxCMon__aCnM2oTGzLfegIVWIZifji_jy1ys5EnABUjwrOOl55-OBrZGcunA7SawA67Jms97XAuxTqCbQxuaK6l7gY-NwtK-OhIIHLcUCJzTiXYrDvvHkvLmUmychwwG1GsB76ppJHvXCg', accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjBlYmMyZmI5N2QyNWE1MmQ5MjJhOGRkNTRiZmQ4MzhhOTk4MjE2MmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbmV3LXByb2plY3QtZmUzZWIiLCJhdWQiOiJuZXctcHJvamVjdC1mZTNlYiIsImF1dGhfdGltZSI6MTYwOTMzNDY0NCwidXNlcl9pZCI6IkozR2tlOGtaMXNYd2s5QkNhSWVna2lVdzhyVzIiLCJzdWIiOiJKM0drZThrWjFzWHdrOUJDYUllZ2tpVXc4clcyIiwiaWF0IjoxNjE0MjU1MzM4LCJleHAiOjE2MTQyNTg5MzgsImVtYWlsIjoiYWZyaWV2YWx0QHlhaG9vLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZnJpZXZhbHRAeWFob28uY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.fXg5WqaCEth0wMO6B-cfg7g7qSxLSV51pBoA-GnJteahpkwzJ2pyjuwrDtzdN6W6_jM1wiIItpQ9JQ0SkPAa79a2aa1Qvu9j3izrGMwRr18VcIm0KrSrfx5F12eiGQgBK6C0VHJ-x16lBm_T7iRJmC8u9y-ydf9INaF0Vd23aOGkQhWS3Wi5P0XbP1eOyK6lLpGVtTk_UsvSgk7OaH5EYkzTdQTcfNjbhSmlOY4tBkH0dE9Z9Atl9aIL9I35MyUe8mex4xoWpBg6IHcqXiDfg6ITOOlfP-GtKb4gGa5TSBDMR6PVMs_YuOLJ-cfr2J5vesFW5p2iRetsOg7YVqKEig', expirationTime: 1614258938662 },
      redirectEventId: null,
      lastLoginAt: '1609334644359',
      createdAt: '1608726192326',
      multiFactor: { enrolledFactors: [] },
      isEmpty: false,
      isLoaded: true
    },
    authError: null,
    profile: { isEmpty: true, isLoaded: false },
    listeners: { byId: { 'value:/task': { id: 'value:/task', path: 'task' }, 'value:/taskSchedule': { id: 'value:/taskSchedule', path: 'taskSchedule' }, 'value:/student': { id: 'value:/student', path: 'student' }, 'value:/contact': { id: 'value:/contact', path: 'contact' }, 'value:/company': { id: 'value:/company', path: 'company' } }, allIds: ['value:/task', 'value:/taskSchedule', 'value:/student', 'value:/contact', 'value:/company'] },
    isInitializing: false,
    errors: []
  }
}

export default sampleData
