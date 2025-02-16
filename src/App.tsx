import React from 'react';
import { useFormatDate } from '../hooks';
import { Breadcrumb, Button, WarningModal, ErrorPopup } from '../components';
import { HEADER_TITLES } from '../constants/header-titles';

import './index.css';

type Data = {
  sysId: string;
  $id: string;
  description: string;
  title: string;
  gip: { description: string };
  capitalConstructionType: { description: string };
  projectType: { description: string };
  finishDate: string;
};

function App() {
  const [items, setItems] = React.useState<Data[] | null>([]);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/projects.json');

        if (!res.ok) {
          throw new Error(`Ошибка HTTP: ${res.status}`);
        }

        const data = await res.json();
        setItems(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage('Ошибка');
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="tableTop">
        <Breadcrumb />
        <Button setIsOpen={setIsOpen} />
      </div>

      <div className="container">
        <div className="box">
          <table>
            <thead>
              <tr>
                {HEADER_TITLES?.map((item) => (
                  <th key={item.id}>{item.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items?.map(
                (item) =>
                  item.sysId === 'PROJECT_DEF' && (
                    <tr key={item.$id}>
                      <td>{item.description}</td>
                      <td>{item.title}</td>
                      <td>{item.gip && item.gip.description}</td>
                      <td>{item.capitalConstructionType.description}</td>
                      <td>{item.projectType.description}</td>
                      <td>{useFormatDate(item.finishDate)}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>

        {isOpen && <WarningModal setIsOpen={setIsOpen} />}
      </div>

      {errorMessage && (
        <ErrorPopup
          message={errorMessage}
          onClose={() => setErrorMessage(null)}
        />
      )}
    </>
  );
}

export default App;
