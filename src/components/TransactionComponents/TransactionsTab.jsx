import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import BoughtTable from "./BoughtTable";
import SoldTable from "./SoldTable";

const TransactionsTab = () => {
  return (
    <Tabs defaultValue="bought" className="w-full">
      <TabsList className="px-2">
        <TabsTrigger value="bought">Bought</TabsTrigger>
        <TabsTrigger value="sold">Sold</TabsTrigger>
      </TabsList>
      <TabsContent value="bought">
        <BoughtTable />
      </TabsContent>
      <TabsContent value="sold">
        <SoldTable />
      </TabsContent>
    </Tabs>
  );
};

export default TransactionsTab;
