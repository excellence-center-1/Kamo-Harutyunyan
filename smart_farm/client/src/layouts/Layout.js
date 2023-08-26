import { Layout } from 'react-admin';

import { MyAppBar } from '../components/AppBar';

export const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;