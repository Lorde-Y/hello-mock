import Home from '@/page/home/home';
import Login from '@/page/login/login';
import Hello from '@/components/Hello';

export default [{
  path: '/',
  component: Home
},
{
  path: '',
  component: Home
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
