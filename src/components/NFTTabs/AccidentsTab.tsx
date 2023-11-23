import Table from './Table';

const AccidentsTab = ({ accidents }: { accidents: object[] }) => {
  return (
    <>
      <Table objList={accidents} />
    </>
  );
};
export default AccidentsTab;
