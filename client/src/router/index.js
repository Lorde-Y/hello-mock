import Home from '@/page/home/home';
import Login from '@/page/login/login';
import Create from '@/page/create/create';
import Project from '@/page/project/project';

export default [{
  path: '/',
  component: Home
},
{
  path: '',
  component: Home
},
{
  path: '/create',
  component: Create
},
{
  path: '/login',
  component: Login
},
{
  path: '/project/:projectId',
  component: Project
}
];
