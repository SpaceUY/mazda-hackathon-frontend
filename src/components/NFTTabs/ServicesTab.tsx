import Table from './Table';

const ServicesTab = ({ services }: { services: object[] }) => {
  return (
    <>
      <Table objList={services} />
    </>
  );
};
export default ServicesTab;
