import { Space, DatePicker, ConfigProvider, version } from 'antd';

import Button from '../components/button';
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
            <Button type="primary" ghost={false}>
              Primary Button
            </Button>
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
