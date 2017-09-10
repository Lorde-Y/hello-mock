import Login from '@/page/login/login';
import Hello from '@/components/Hello';

export default [{
  path: '/',
  redirect: '/home'
},
{
  path: '',
  redirect: '/home'
},
{
  path: '/home',
  component: Hello
},
{
  path: '/login',
  component: Login
}
];
