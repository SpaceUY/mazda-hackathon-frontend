import Table from './Table';

const SalesTab = ({ sales }: { sales: object[] }) => {
  return (
    <>
      <Table objList={sales} />
    </>
  );
};
export default SalesTab;
