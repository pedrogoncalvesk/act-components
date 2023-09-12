import { Space, DatePicker, ConfigProvider, version } from 'antd';

import Button from '../components/button';
import ButtonPrimary from '../components/button-primary';
import NxWelcome from './nx-welcome';
import styles from './app.module.less';


export function App() {
  return (
    <>
      <div className={styles['act-components-antd-example']}>
        <h1>antd version: {version}</h1>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: '#00b96b',
              borderRadius: 2,

              // Alias Token
              colorBgContainer: '#f6ffed',
            },
          }}
        >
          <Space>
            <DatePicker />
            <Button ghost={false}>
              Normal Button
            </Button>
            <ButtonPrimary>
              Primary button
            </ButtonPrimary>
          </Space>
        </ConfigProvider>
      </div>
      <div>
        <NxWelcome title="act-components" />
      </div>
    </>
  );
}

export default App;
