import SettingsContent from '../Wrapper';
import Macros from './Index';
const MacroEditor = () => import('./MacroEditor.vue');
import { frontendURL } from '../../../../helper/URLHelper';

export default {
  routes: [
    {
      path: frontendURL('accounts/:accountId/settings/macros'),
      component: SettingsContent,
      props: {
        headerTitle: 'MACROS.HEADER',
        icon: 'macros',
        showNewButton: false,
      },
      children: [
        {
          path: '',
          name: 'macros_wrapper',
          component: Macros,
          roles: ['administrator'],
        },
        {
          path: 'new',
          name: 'macros_new',
          component: MacroEditor,
          roles: ['administrator'],
        },
        {
          path: ':macroId/edit',
          name: 'macros_edit',
          component: MacroEditor,
          roles: ['administrator'],
        },
      ],
    },
  ],
};
